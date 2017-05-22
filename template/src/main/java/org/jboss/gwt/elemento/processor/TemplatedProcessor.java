/*
 * JBoss, Home of Professional Open Source.
 * Copyright 2010, Red Hat, Inc., and individual contributors
 * as indicated by the @author tags. See the copyright.txt file in the
 * distribution for a full listing of individual contributors.
 *
 * This is free software; you can redistribute it and/or modify it
 * under the terms of the GNU Lesser General Public License as
 * published by the Free Software Foundation; either version 2.1 of
 * the License, or (at your option) any later version.
 *
 * This software is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU
 * Lesser General Public License for more details.
 *
 * You should have received a copy of the GNU Lesser General Public
 * License along with this software; if not, write to the Free
 * Software Foundation, Inc., 51 Franklin St, Fifth Floor, Boston, MA
 * 02110-1301 USA, or see the FSF site: http://www.fsf.org.
 */
package org.jboss.gwt.elemento.processor;

import java.beans.Introspector;
import java.io.IOException;
import java.lang.annotation.Annotation;
import java.util.ArrayList;
import java.util.Collection;
import java.util.EnumSet;
import java.util.Iterator;
import java.util.List;
import java.util.Map;
import java.util.Set;
import java.util.stream.Collectors;
import javax.annotation.PostConstruct;
import javax.annotation.processing.Processor;
import javax.annotation.processing.RoundEnvironment;
import javax.annotation.processing.SupportedAnnotationTypes;
import javax.lang.model.element.AnnotationMirror;
import javax.lang.model.element.AnnotationValue;
import javax.lang.model.element.Element;
import javax.lang.model.element.ElementKind;
import javax.lang.model.element.ExecutableElement;
import javax.lang.model.element.Modifier;
import javax.lang.model.element.TypeElement;
import javax.lang.model.type.TypeKind;
import javax.lang.model.type.TypeMirror;
import javax.lang.model.util.ElementFilter;
import javax.tools.FileObject;
import javax.tools.StandardLocation;

import com.google.auto.common.MoreElements;
import com.google.auto.common.MoreTypes;
import com.google.auto.service.AutoService;
import com.google.common.base.Optional;
import com.google.common.base.Splitter;
import com.google.common.base.Strings;
import com.google.common.base.Throwables;
import com.google.common.collect.ImmutableList;
import com.google.common.collect.ImmutableMap;
import com.google.common.escape.Escaper;
import com.google.common.escape.Escapers;
import com.google.gwt.user.client.ui.IsWidget;
import com.google.gwt.user.client.ui.Widget;
import elemental2.dom.HTMLElement;
import org.jboss.auto.AbstractProcessor;
import org.jboss.gwt.elemento.core.IsElement;
import org.jboss.gwt.elemento.processor.context.AbstractPropertyInfo;
import org.jboss.gwt.elemento.processor.context.DataElementInfo;
import org.jboss.gwt.elemento.processor.context.DataElementInfo.Kind;
import org.jboss.gwt.elemento.processor.context.FreemarkerContext;
import org.jboss.gwt.elemento.processor.context.PostConstructInfo;
import org.jboss.gwt.elemento.processor.context.RootElementInfo;
import org.jboss.gwt.elemento.template.DataElement;
import org.jboss.gwt.elemento.template.Templated;
import org.jsoup.Jsoup;
import org.jsoup.nodes.Attribute;
import org.jsoup.nodes.Document;
import org.jsoup.select.Elements;

@AutoService(Processor.class)
@SupportedAnnotationTypes("org.jboss.gwt.elemento.template.Templated")
public class TemplatedProcessor extends AbstractProcessor {

    private static final String FREEMARKER_TEMPLATE = "Templated.ftl";
    private static final Escaper JAVA_STRING_ESCAPER = Escapers.builder()
            .addEscape('"', "\\\"")
            .addEscape('\n', "")
            .addEscape('\r', "")
            .build();


    /**
     * Qualified names of {@code @Templated} classes that we attempted to process but had to abandon
     * because we needed other types that they referenced and those other types were missing.
     */
    private final List<String> deferredTypeNames;

    public TemplatedProcessor() {
        this(TemplatedProcessor.class, "templates");
    }

    public TemplatedProcessor(final Class resourceLoaderClass, final String templates) {
        super(resourceLoaderClass, templates);
        this.deferredTypeNames = new ArrayList<>();
    }


    // ------------------------------------------------------ @Templated types

    @Override
    protected boolean onProcess(final Set<? extends TypeElement> annotations, final RoundEnvironment roundEnv) {
        List<TypeElement> deferredTypes = deferredTypeNames.stream()
                .map(deferred -> processingEnv.getElementUtils().getTypeElement(deferred)).collect(Collectors.toList());

        if (roundEnv.processingOver()) {
            // This means that the previous round didn't generate any new sources, so we can't have found
            // any new instances of @Templated; and we can't have any new types that are the reason a type
            // was in deferredTypes.
            for (TypeElement type : deferredTypes) {
                error(type, "Did not generate @%s class for %s because it references undefined types",
                        Templated.class.getSimpleName(), type);
            }
            return false;
        }

        Collection<? extends Element> annotatedElements = roundEnv.getElementsAnnotatedWith(Templated.class);
        List<TypeElement> types = new ImmutableList.Builder<TypeElement>()
                .addAll(deferredTypes)
                .addAll(ElementFilter.typesIn(annotatedElements))
                .build();
        deferredTypeNames.clear();
        for (TypeElement type : types) {
            try {
                Templated templated = type.getAnnotation(Templated.class);
                validateType(type, templated);
                processType(type, templated);
            } catch (AbortProcessingException e) {
                // We abandoned this type; continue with the next.
            } catch (MissingTypeException e) {
                // We abandoned this type, but only because we needed another type that it references and
                // that other type was missing. It is possible that the missing type will be generated by
                // further annotation processing, so we will try again on the next round (perhaps failing
                // again and adding it back to the list). We save the name of the @Templated type rather
                // than its TypeElement because it is not guaranteed that it will be represented by
                // the same TypeElement on the next round.
                deferredTypeNames.add(type.getQualifiedName().toString());
            } catch (RuntimeException e) {
                // Don't propagate this exception, which will confusingly crash the compiler.
                // Instead, report a compiler error with the stack trace.
                String trace = Throwables.getStackTraceAsString(e);
                error(type, "@%s processor threw an exception: %s", Templated.class.getSimpleName(), trace);
            }
        }
        return false;  // never claim annotation, because who knows what other processors want?
    }

    private void validateType(final TypeElement type, final Templated templated) {
        if (templated == null) {
            // This shouldn't happen unless the compilation environment is buggy,
            // but it has happened in the past and can crash the compiler.
            abortWithError(type, "Annotation processor for @%s was invoked with a type that does not have that " +
                    "annotation; this is probably a compiler bug", Templated.class.getSimpleName());
        }
        if (type.getKind() != ElementKind.CLASS) {
            abortWithError(type, "@%s only applies to classes", Templated.class.getSimpleName());
        }
        if (ancestorIsTemplated(type)) {
            abortWithError(type, "One @%s class may not extend another", Templated.class.getSimpleName());
        }
        if (isAssignable(type, Annotation.class)) {
            abortWithError(type, "@%s may not be used to implement an annotation interface",
                    Templated.class.getSimpleName());
        }
        if (!isAssignable(type, IsElement.class)) {
            abortWithError(type, "%s must implement %s", type.getSimpleName(), IsElement.class.getSimpleName());
        }
    }

    protected void processType(TypeElement type, final Templated templated) {
        // freemarker context
        String subclass = TypeSimplifier.simpleNameOf(generatedClassName(type, "Templated_", ""));
        String createMethod = verifyCreateMethod(type);
        FreemarkerContext context = new FreemarkerContext(TypeSimplifier.packageNameOf(type),
                TypeSimplifier.classNameOf(type), subclass, createMethod);

        // root element and template
        TemplateSelector templateSelector = getTemplateSelector(type, templated);
        org.jsoup.nodes.Element root = parseTemplate(type, templateSelector);
        context.setRoot(createRootElementInfo(root, subclass));

        // find and verify all @DataElement members
        List<DataElementInfo> dataElements = processDataElements(type, templateSelector, root);
        context.setDataElements(dataElements);

        // find and verify all @PostConstruct methods
        List<PostConstructInfo> postConstructs = processPostConstruct(type);
        context.setPostConstructs(postConstructs);

        // init parameters and abstract properties
        List<AbstractPropertyInfo> abstractProperties = processAbstractProperties(type);
        context.setAbstractProperties(abstractProperties);

        // generate code
        code(FREEMARKER_TEMPLATE, context.getPackage(), context.getSubclass(),
                () -> ImmutableMap.of("context", context));
        info("Generated templated implementation [%s] for [%s]", context.getSubclass(), context.getBase());
    }

    String verifyCreateMethod(TypeElement type) {
        java.util.Optional<ExecutableElement> createMethod = ElementFilter.methodsIn(type.getEnclosedElements())
                .stream()
                .filter(method -> method.getModifiers().contains(Modifier.STATIC) &&
                        method.getReturnType().equals(type.asType()))
                .findAny();
        if (!createMethod.isPresent()) {
            abortWithError(type, "@%s needs to define one static method which returns an %s instance",
                    Templated.class.getSimpleName(), type.getSimpleName());
        } else {
            return createMethod.get().getSimpleName().toString();
        }
        return null;
    }

    String generatedClassName(TypeElement type, @SuppressWarnings("SameParameterValue") String prefix, String suffix) {
        StringBuilder name = new StringBuilder(type.getSimpleName().toString());
        while (type.getEnclosingElement() instanceof TypeElement) {
            type = (TypeElement) type.getEnclosingElement();
            name.insert(0, type.getSimpleName() + "_");
        }
        String pkg = TypeSimplifier.packageNameOf(type);
        String dot = pkg.isEmpty() ? "" : ".";
        return pkg + dot + prefix + name + suffix;
    }


    // ------------------------------------------------------ root element / template

    private RootElementInfo createRootElementInfo(org.jsoup.nodes.Element root, String subclass) {
        List<Attribute> attributes = root.attributes().asList().stream()
                .filter(attribute -> !attribute.getKey().equals("data-element"))
                .collect(Collectors.toList());

        String html = root.children().isEmpty() ? null : JAVA_STRING_ESCAPER.escape(root.html());
        Map<String, String> handlebars = new HandlebarsParser().parse(html);

        return new RootElementInfo(root.tagName(), subclass.toLowerCase() + "_root_element",
                attributes, html, handlebars);
    }

    private TemplateSelector getTemplateSelector(TypeElement type, Templated templated) {
        if (Strings.emptyToNull(templated.value()) == null) {
            return new TemplateSelector(type.getSimpleName().toString() + ".html");
        } else {
            if (templated.value().contains("#")) {
                Iterator<String> iterator = Splitter.on('#')
                        .limit(2)
                        .omitEmptyStrings()
                        .trimResults()
                        .split(templated.value())
                        .iterator();
                return new TemplateSelector(iterator.next(), iterator.next());
            } else {
                return new TemplateSelector(templated.value());
            }
        }
    }

    private org.jsoup.nodes.Element parseTemplate(TypeElement type, TemplateSelector templateSelector) {
        org.jsoup.nodes.Element root = null;
        String fqTemplate = TypeSimplifier.packageNameOf(type).replace('.', '/') + "/" + templateSelector.template;
        try {
            FileObject templateResource = processingEnv.getFiler().getResource(StandardLocation.CLASS_PATH, "",
                    fqTemplate);
            Document document = Jsoup.parse(templateResource.getCharContent(true).toString());
            if (templateSelector.hasSelector()) {
                String query = "[data-element=" + templateSelector.selector + "]";
                Elements selector = document.select(query);
                if (selector.isEmpty()) {
                    abortWithError(type, "Unable to select HTML from \"%s\" using \"%s\"", templateSelector.template,
                            query);
                } else {
                    root = selector.first();
                }
            } else {
                if (document.body() == null || document.body().children().isEmpty()) {
                    abortWithError(type, "No content found in the <body> of \"%s\"", templateSelector.template);
                } else {
                    root = document.body().children().first();
                }
            }
        } catch (IOException e) {
            abortWithError(type,
                    "Cannot find template \"%s\". Please make sure the template exists and resides in the source path.",
                    fqTemplate);
        }
        return root;
    }


    // ------------------------------------------------------ @DataElement fields and methods

    private List<DataElementInfo> processDataElements(TypeElement type, TemplateSelector templateSelector,
            org.jsoup.nodes.Element root) {
        List<DataElementInfo> dataElements = new ArrayList<>();

        // fields
        ElementFilter.fieldsIn(type.getEnclosedElements()).stream()
                .filter(field -> MoreElements.isAnnotationPresent(field, DataElement.class))
                .forEach(field -> {

                    // verify the field
                    if (field.getModifiers().contains(Modifier.PRIVATE)) {
                        abortWithError(field, "@%s member must not be private", DataElement.class.getSimpleName());
                    }
                    if (field.getModifiers().contains(Modifier.STATIC)) {
                        abortWithError(field, "@%s member must not be static", DataElement.class.getSimpleName());
                    }
                    Kind kind = getDataElementInfoKind(field.asType());
                    if (kind == null) {
                        abortWithError(field, "Unsupported type %s. Please choose one of %s",
                                field.asType(), EnumSet.allOf(Kind.class));
                    }

                    // verify the selector
                    String selector = getSelector(field);
                    verifySelector(selector, field, templateSelector, root);

                    // create info class for template processing
                    String typeName = MoreTypes.asTypeElement(typeUtils, field.asType()).getQualifiedName().toString();
                    dataElements.add(new DataElementInfo(typeName, field.getSimpleName().toString(), selector,
                            kind, false));
                });

        // methods
        ElementFilter.methodsIn(type.getEnclosedElements()).stream()
                .filter(method -> MoreElements.isAnnotationPresent(method, DataElement.class))
                .forEach(method -> {

                    // verify method
                    if (method.getModifiers().contains(Modifier.PRIVATE)) {
                        abortWithError(method, "@%s method must not be private", DataElement.class.getSimpleName());
                    }
                    if (method.getModifiers().contains(Modifier.STATIC)) {
                        abortWithError(method, "@%s method must not be static", DataElement.class.getSimpleName());
                    }
                    Kind kind = getDataElementInfoKind(method.getReturnType());
                    if (kind == null) {
                        abortWithError(method, "Unsupported return type %s. Please choose one of %s",
                                method.getReceiverType(), EnumSet.allOf(Kind.class));
                    }
                    if (!method.getParameters().isEmpty()) {
                        abortWithError(method, "@%s method must not have parameters",
                                DataElement.class.getSimpleName());
                    }

                    // verify the selector
                    String selector = getSelector(method);
                    verifySelector(selector, method, templateSelector, root);

                    // create info class for template processing
                    String typeName = MoreTypes.asTypeElement(typeUtils, method.getReturnType()).getQualifiedName()
                            .toString();
                    dataElements.add(new DataElementInfo(typeName, method.getSimpleName().toString(), selector,
                            kind, true));
                });

        return dataElements;
    }

    private Kind getDataElementInfoKind(TypeMirror dataElementType) {
        if (isAssignable(dataElementType, HTMLElement.class)) {
            return Kind.HTMLElement;
        } else if (isAssignable(dataElementType, IsElement.class)) {
            return Kind.IsElement;
        } else if (isAssignable(dataElementType, Widget.class)) {
            return Kind.Widget;
        } else if (isAssignable(dataElementType, IsWidget.class)) {
            return Kind.IsWidget;
        } else {
            return null;
        }
    }

    private String getSelector(Element element) {
        String selector = null;

        //noinspection Guava
        Optional<AnnotationMirror> annotationMirror = MoreElements
                .getAnnotationMirror(element, DataElement.class);
        if (annotationMirror.isPresent()) {
            Map<? extends ExecutableElement, ? extends AnnotationValue> values = elementUtils
                    .getElementValuesWithDefaults(annotationMirror.get());
            if (!values.isEmpty()) {
                selector = String.valueOf(values.values().iterator().next().getValue());
            }
        }
        return Strings.emptyToNull(selector) == null ? element.getSimpleName().toString() : selector;
    }

    private void verifySelector(String selector, Element element, TemplateSelector templateSelector,
            org.jsoup.nodes.Element root) {
        // make sure to use the same logic for finding matching elements as in TemplateUtils!
        Elements elements = root.getElementsByAttributeValue("data-element", selector);
        if (elements.isEmpty()) {
            abortWithError(element,
                    "Cannot find a matching element in %s using \"[data-element=%s]\" as selector",
                    templateSelector, selector);
        } else if (elements.size() > 1) {
            warning(element,
                    "Found %d matching elements in %s using \"[data-element=%s]\" as selector. Only the first will be used.",
                    elements.size(), templateSelector, selector);
        }
    }


    // ------------------------------------------------------ @PostConstruct methods

    private List<PostConstructInfo> processPostConstruct(TypeElement type) {
        List<PostConstructInfo> postConstructs = new ArrayList<>();

        ElementFilter.methodsIn(type.getEnclosedElements()).stream()
                .filter(method -> MoreElements.isAnnotationPresent(method, PostConstruct.class))
                .forEach(method -> {

                    // verify method
                    if (method.getModifiers().contains(Modifier.PRIVATE)) {
                        abortWithError(method, "@%s method must not be private", PostConstruct.class.getSimpleName());
                    }
                    if (method.getModifiers().contains(Modifier.STATIC)) {
                        abortWithError(method, "@%s method must not be static", PostConstruct.class.getSimpleName());
                    }
                    if (!method.getReturnType().equals(typeUtils.getNoType(TypeKind.VOID))) {
                        abortWithError(method, "@%s method must return void", PostConstruct.class.getSimpleName());
                    }
                    if (!method.getParameters().isEmpty()) {
                        abortWithError(method, "@%s method must not have parameters",
                                PostConstruct.class.getSimpleName());
                    }

                    postConstructs.add(new PostConstructInfo(method.getSimpleName().toString()));
                });

        if (postConstructs.size() > 1) {
            warning(type, "%d methods annotated with @%s found. Order is not guaranteed!", postConstructs.size(),
                    PostConstruct.class.getSimpleName());
        }
        return postConstructs;
    }


    // ------------------------------------------------------ abstract properties

    List<AbstractPropertyInfo> processAbstractProperties(final TypeElement type) {
        List<AbstractPropertyInfo> abstractProperties = new ArrayList<>();

        ElementFilter.methodsIn(type.getEnclosedElements()).stream()
                .filter(method -> method.getModifiers().contains(Modifier.ABSTRACT))
                .forEach(method -> {

                    // verify method
                    if (method.getReturnType().getKind() == TypeKind.VOID) {
                        abortWithError(method, "Abstract classes in a @%s class must not return void",
                                Templated.class.getSimpleName());
                    }
                    if (!method.getParameters().isEmpty()) {
                        abortWithError(method, "Abstract classes in a @%s class must not have parameters",
                                Templated.class.getSimpleName());
                    }

                    String typeName = TypeSimplifier.simpleTypeName(method.getReturnType());
                    String methodName = method.getSimpleName().toString();
                    String fieldName = (isGetter(method)) ? nameWithoutPrefix(methodName) : methodName;
                    String modifier = getModifier(method);
                    abstractProperties.add(new AbstractPropertyInfo(typeName, fieldName, methodName, modifier));
                });

        return abstractProperties;
    }

    private boolean isGetter(ExecutableElement method) {
        String name = method.getSimpleName().toString();
        boolean get = name.startsWith("get") && !name.equals("get");
        boolean is = name.startsWith("is") && !name.equals("is")
                && method.getReturnType().getKind() == TypeKind.BOOLEAN;
        return get || is;
    }

    private String nameWithoutPrefix(String name) {
        String withoutPrefix;
        if (name.startsWith("get") && !name.equals("get")) {
            withoutPrefix = name.substring(3);
        } else {
            assert name.startsWith("is");
            withoutPrefix = name.substring(2);
        }
        return Introspector.decapitalize(withoutPrefix);
    }

    private String getModifier(final ExecutableElement method) {
        String modifier = null;
        Set<Modifier> modifiers = method.getModifiers();
        if (modifiers.contains(Modifier.PUBLIC)) {
            modifier = "public";
        } else if (modifiers.contains(Modifier.PROTECTED)) {
            modifier = "protected";
        }
        return modifier;
    }


    // ------------------------------------------------------ helpers

    private boolean ancestorIsTemplated(TypeElement type) {
        while (true) {
            TypeMirror parentMirror = type.getSuperclass();
            if (parentMirror.getKind() == TypeKind.NONE) {
                return false;
            }
            TypeElement parentElement = (TypeElement) typeUtils.asElement(parentMirror);
            if (parentElement.getAnnotation(Templated.class) != null) {
                return true;
            }
            type = parentElement;
        }
    }

    private boolean isAssignable(TypeElement subType, Class<?> baseType) {
        return isAssignable(subType.asType(), baseType);
    }

    private boolean isAssignable(TypeMirror subType, Class<?> baseType) {
        return isAssignable(subType, getTypeMirror(baseType));
    }

    private boolean isAssignable(TypeMirror subType, TypeMirror baseType) {
        return typeUtils.isAssignable(typeUtils.erasure(subType), typeUtils.erasure(baseType));
    }

    private TypeMirror getTypeMirror(Class<?> c) {
        return processingEnv.getElementUtils().getTypeElement(c.getName()).asType();
    }

    /**
     * Issue a compilation error and abandon the processing of this template. This does not prevent the
     * processing of other templates.
     */
    private void abortWithError(Element element, String msg, Object... args) throws AbortProcessingException {
        error(element, msg, args);
        throw new AbortProcessingException();
    }
}
