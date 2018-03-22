/*
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
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
import javax.lang.model.element.VariableElement;
import javax.lang.model.type.DeclaredType;
import javax.lang.model.type.TypeKind;
import javax.lang.model.type.TypeMirror;
import javax.lang.model.util.ElementFilter;
import javax.tools.FileObject;
import javax.tools.JavaFileManager;
import javax.tools.StandardLocation;

import com.google.auto.common.MoreElements;
import com.google.auto.common.MoreTypes;
import com.google.auto.service.AutoService;
import com.google.common.base.Optional;
import com.google.common.base.Splitter;
import com.google.common.base.Strings;
import com.google.common.base.Throwables;
import com.google.common.collect.HashMultimap;
import com.google.common.collect.ImmutableList;
import com.google.common.collect.ImmutableMap;
import com.google.common.collect.SetMultimap;
import com.google.common.escape.Escaper;
import com.google.common.escape.Escapers;
import elemental2.dom.HTMLAnchorElement;
import elemental2.dom.HTMLAreaElement;
import elemental2.dom.HTMLAudioElement;
import elemental2.dom.HTMLBRElement;
import elemental2.dom.HTMLButtonElement;
import elemental2.dom.HTMLCanvasElement;
import elemental2.dom.HTMLDataListElement;
import elemental2.dom.HTMLDetailsElement;
import elemental2.dom.HTMLDialogElement;
import elemental2.dom.HTMLDivElement;
import elemental2.dom.HTMLElement;
import elemental2.dom.HTMLEmbedElement;
import elemental2.dom.HTMLFieldSetElement;
import elemental2.dom.HTMLFormElement;
import elemental2.dom.HTMLHRElement;
import elemental2.dom.HTMLHeadingElement;
import elemental2.dom.HTMLImageElement;
import elemental2.dom.HTMLInputElement;
import elemental2.dom.HTMLLIElement;
import elemental2.dom.HTMLLabelElement;
import elemental2.dom.HTMLLegendElement;
import elemental2.dom.HTMLMapElement;
import elemental2.dom.HTMLMenuElement;
import elemental2.dom.HTMLMenuItemElement;
import elemental2.dom.HTMLMeterElement;
import elemental2.dom.HTMLOListElement;
import elemental2.dom.HTMLObjectElement;
import elemental2.dom.HTMLOptGroupElement;
import elemental2.dom.HTMLOptionElement;
import elemental2.dom.HTMLOutputElement;
import elemental2.dom.HTMLParagraphElement;
import elemental2.dom.HTMLParamElement;
import elemental2.dom.HTMLPreElement;
import elemental2.dom.HTMLProgressElement;
import elemental2.dom.HTMLQuoteElement;
import elemental2.dom.HTMLScriptElement;
import elemental2.dom.HTMLSelectElement;
import elemental2.dom.HTMLSourceElement;
import elemental2.dom.HTMLTableCaptionElement;
import elemental2.dom.HTMLTableCellElement;
import elemental2.dom.HTMLTableColElement;
import elemental2.dom.HTMLTableElement;
import elemental2.dom.HTMLTableRowElement;
import elemental2.dom.HTMLTextAreaElement;
import elemental2.dom.HTMLTrackElement;
import elemental2.dom.HTMLUListElement;
import elemental2.dom.HTMLVideoElement;
import org.jboss.auto.AbstractProcessor;
import org.jboss.gwt.elemento.core.IsElement;
import org.jboss.gwt.elemento.processor.context.AbstractPropertyInfo;
import org.jboss.gwt.elemento.processor.context.DataElementInfo;
import org.jboss.gwt.elemento.processor.context.DataElementInfo.Kind;
import org.jboss.gwt.elemento.processor.context.PostConstructInfo;
import org.jboss.gwt.elemento.processor.context.RootElementInfo;
import org.jboss.gwt.elemento.processor.context.TemplateContext;
import org.jboss.gwt.elemento.template.DataElement;
import org.jboss.gwt.elemento.template.Templated;
import org.jboss.gwt.elemento.template.Templated.Injectable;
import org.jsoup.Jsoup;
import org.jsoup.nodes.Attribute;
import org.jsoup.nodes.Document;
import org.jsoup.select.Elements;

import static java.util.Arrays.asList;
import static java.util.stream.Collectors.joining;

@AutoService(Processor.class)
@SupportedAnnotationTypes("org.jboss.gwt.elemento.template.Templated")
public class TemplatedProcessor extends AbstractProcessor {

    private static final String GET = "get";
    private static final String QUOTE = "\"";
    private static final String FREEMARKER_TEMPLATE = "Templated.ftl";
    private static final Escaper JAVA_STRING_ESCAPER = Escapers.builder()
            .addEscape('"', "\\\"")
            .addEscape('\n', "")
            .addEscape('\r', "")
            .build();

    private static final String[] DEPENDENCY_INJECTION_FRAMEWORKS = {
            "dagger.Component",
            "com.google.gwt.inject.client.GinModule",
    };

    // List of elements from https://developer.mozilla.org/en-US/docs/Web/HTML/Element
    // which have a class in elemental2.dom, are standardized and not obsolete or deprecated
    private static final SetMultimap<String, String> HTML_ELEMENTS = HashMultimap.create();

    static {
        HTML_ELEMENTS.put(HTMLAnchorElement.class.getName(), "a");
        HTML_ELEMENTS.put(HTMLAreaElement.class.getName(), "area");
        HTML_ELEMENTS.put(HTMLAudioElement.class.getName(), "audio");
        HTML_ELEMENTS.put(HTMLQuoteElement.class.getName(), "blockquote");
        HTML_ELEMENTS.put(HTMLBRElement.class.getName(), "br");
        HTML_ELEMENTS.put(HTMLButtonElement.class.getName(), "button");
        HTML_ELEMENTS.put(HTMLCanvasElement.class.getName(), "canvas");
        HTML_ELEMENTS.put(HTMLTableCaptionElement.class.getName(), "caption");
        HTML_ELEMENTS.put(HTMLTableColElement.class.getName(), "col");
        HTML_ELEMENTS.put(HTMLDataListElement.class.getName(), "datalist");
        HTML_ELEMENTS.put(HTMLDetailsElement.class.getName(), "details");
        HTML_ELEMENTS.put(HTMLDialogElement.class.getName(), "dialog");
        HTML_ELEMENTS.put(HTMLDivElement.class.getName(), "div");
        HTML_ELEMENTS.put(HTMLEmbedElement.class.getName(), "embed");
        HTML_ELEMENTS.put(HTMLFieldSetElement.class.getName(), "fieldset");
        HTML_ELEMENTS.put(HTMLFormElement.class.getName(), "form");
        HTML_ELEMENTS.putAll(HTMLHeadingElement.class.getName(), asList("h1", "h2", "h3", "h4", "h5", "h6"));
        HTML_ELEMENTS.put(HTMLHRElement.class.getName(), "hr");
        HTML_ELEMENTS.put(HTMLImageElement.class.getName(), "img");
        HTML_ELEMENTS.put(HTMLInputElement.class.getName(), "input");
        HTML_ELEMENTS.put(HTMLLabelElement.class.getName(), "label");
        HTML_ELEMENTS.put(HTMLLegendElement.class.getName(), "legend");
        HTML_ELEMENTS.put(HTMLLIElement.class.getName(), "li");
        HTML_ELEMENTS.put(HTMLMapElement.class.getName(), "map");
        HTML_ELEMENTS.put(HTMLMenuElement.class.getName(), "menu");
        HTML_ELEMENTS.put(HTMLMenuItemElement.class.getName(), "menuitem");
        HTML_ELEMENTS.put(HTMLMeterElement.class.getName(), "meter");
        HTML_ELEMENTS.put(HTMLObjectElement.class.getName(), "object");
        HTML_ELEMENTS.put(HTMLOListElement.class.getName(), "ol");
        HTML_ELEMENTS.put(HTMLOptGroupElement.class.getName(), "optgroup");
        HTML_ELEMENTS.put(HTMLOptionElement.class.getName(), "option");
        HTML_ELEMENTS.put(HTMLOutputElement.class.getName(), "output");
        HTML_ELEMENTS.put(HTMLParagraphElement.class.getName(), "p");
        HTML_ELEMENTS.put(HTMLParamElement.class.getName(), "param");
        HTML_ELEMENTS.put(HTMLPreElement.class.getName(), "pre");
        HTML_ELEMENTS.put(HTMLProgressElement.class.getName(), "progress");
        HTML_ELEMENTS.put(HTMLQuoteElement.class.getName(), "q");
        HTML_ELEMENTS.put(HTMLScriptElement.class.getName(), "script");
        HTML_ELEMENTS.put(HTMLSelectElement.class.getName(), "select");
        HTML_ELEMENTS.put(HTMLSourceElement.class.getName(), "source");
        HTML_ELEMENTS.put(HTMLTableElement.class.getName(), "table");
        HTML_ELEMENTS.put(HTMLTableCellElement.class.getName(), "td");
        HTML_ELEMENTS.put(HTMLTextAreaElement.class.getName(), "textarea");
        HTML_ELEMENTS.put(HTMLTableRowElement.class.getName(), "tr");
        HTML_ELEMENTS.put(HTMLTrackElement.class.getName(), "track");
        HTML_ELEMENTS.put(HTMLUListElement.class.getName(), "ul");
        HTML_ELEMENTS.put(HTMLVideoElement.class.getName(), "video");
    }


    /**
     * Qualified names of {@code @Templated} classes that we attempted to process but had to abandon
     * because we needed other types that they referenced and those other types were missing.
     */
    private final List<String> deferredTypeNames;

    public TemplatedProcessor() {
        this(TemplatedProcessor.class, "templates");
    }

    public TemplatedProcessor(Class resourceLoaderClass, String templates) {
        super(resourceLoaderClass, templates);
        this.deferredTypeNames = new ArrayList<>();
    }


    // ------------------------------------------------------ @Templated types

    @Override
    protected boolean onProcess(Set<? extends TypeElement> annotations, RoundEnvironment roundEnv) {
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

                boolean isInjectable = templated.injectable() == Injectable.TRUE
                        || (templated.injectable() == Injectable.IF_DI_DETECTED && diInClasspath());
                processType(type, templated, isInjectable ? "@javax.inject.Inject" : "");
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

    private void validateType(TypeElement type, Templated templated) {
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

    private void processType(TypeElement type, Templated templated, String inject) {
        String isElementTypeParameter = getIsElementTypeParameter(type.getInterfaces());
        String subclass = TypeSimplifier.simpleNameOf(generatedClassName(type, "Templated_", ""));
        TemplateContext context = new TemplateContext(TypeSimplifier.packageNameOf(type),
                TypeSimplifier.classNameOf(type), subclass, isElementTypeParameter, inject);

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

    @SuppressWarnings("SameParameterValue")
    private String generatedClassName(TypeElement type, String prefix, String suffix) {
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

        ExpressionParser expressionParser = new ExpressionParser();
        String html = root.children().isEmpty() ? null : JAVA_STRING_ESCAPER.escape(root.html());
        Map<String, String> expressions = expressionParser.parse(html);
        expressions.putAll(expressionParser.parse(root.outerHtml()));

        return new RootElementInfo(root.tagName(), subclass.toLowerCase() + "_root_element",
                attributes, html, expressions);
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

        FileObject templateResource = null;
        try {
            templateResource = processingEnv.getFiler().getResource(StandardLocation.CLASS_OUTPUT, "",
                    fqTemplate);
        } catch (IOException e) {
            abortWithError(type, "Cannot find template \"%s\". Please make sure the template exists.", fqTemplate);
        }
        try {
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
            abortWithError(type, "Unable to read template \"%s\": %s", fqTemplate, e.getMessage());
        }
        return root;
    }

    private FileObject findTemplate(String name) {
        FileObject resource = null;
        JavaFileManager.Location[] locations = new JavaFileManager.Location[]{
                StandardLocation.SOURCE_PATH,
                StandardLocation.CLASS_PATH,
                StandardLocation.SOURCE_OUTPUT,
                StandardLocation.CLASS_OUTPUT,
        };
        for (JavaFileManager.Location location : locations) {
            try {
                resource = processingEnv.getFiler().getResource(location, "", name);
                if (resource != null) {
                    return resource;
                }
            } catch (IOException ignored) {
                debug("Unable to find %s in %s: %s", name, location.getName(), ignored.getMessage());
            }
        }
        return null;
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
                    if (kind == Kind.Custom) {
                        warning(field, "Unknown type %s. Consider using one of %s.", field.asType(),
                                EnumSet.complementOf(EnumSet.of(Kind.Custom)));
                    }

                    // verify the selector
                    String selector = getSelector(field);
                    verifySelector(selector, field, templateSelector, root);

                    // verify the HTMLElement type
                    String typeName = MoreTypes.asTypeElement(field.asType()).getQualifiedName().toString();
                    if (kind == Kind.HTMLElement) {
                        verifyHTMLElement(typeName, selector, field, templateSelector, root);
                    }

                    // create info class for template processing
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
                    if (kind == Kind.Custom) {
                        warning(method, "Unknown return type %s. Consider using one of %s.", method.getReceiverType(),
                                EnumSet.complementOf(EnumSet.of(Kind.Custom)));
                    }
                    if (!method.getParameters().isEmpty()) {
                        abortWithError(method, "@%s method must not have parameters",
                                DataElement.class.getSimpleName());
                    }

                    // verify the selector
                    String selector = getSelector(method);
                    verifySelector(selector, method, templateSelector, root);

                    // verify the HTMLElement type
                    String typeName = MoreTypes.asTypeElement(method.getReturnType())
                            .getQualifiedName().toString();
                    if (kind == Kind.HTMLElement) {
                        verifyHTMLElement(typeName, selector, method, templateSelector, root);
                    }
                    // create info class for template processing
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
        } else {
            return Kind.Custom;
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

    private void verifyHTMLElement(String htmlType, String selector, Element element, TemplateSelector templateSelector,
            org.jsoup.nodes.Element root) {
        // make sure the HTMLElement subtype maps to the right HTML tag
        Set<String> tags = HTML_ELEMENTS.get(htmlType);
        if (!tags.isEmpty()) {
            Elements elements = root.getElementsByAttributeValue("data-element", selector);
            if (!elements.isEmpty()) {
                String tagName = elements.get(0).tagName().toLowerCase();
                if (!tags.contains(tagName)) {
                    String fieldOrMethod = element instanceof VariableElement ? "field" : "method";
                    String expected = tags.size() == 1
                            ? QUOTE + tags.iterator().next() + QUOTE
                            : "one of " + tags.stream().map(t -> QUOTE + t + QUOTE).collect(joining(", "));
                    abortWithError(element,
                            "The %s maps to the wrong HTML element: Expected %s, but found \"%s\" in %s using \"[data-element=%s]\" as selector.",
                            fieldOrMethod, expected, tagName, templateSelector, selector);
                }
            }
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

    private List<AbstractPropertyInfo> processAbstractProperties(TypeElement type) {
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
        boolean get = name.startsWith(GET) && !name.equals(GET);
        boolean is = name.startsWith("is") && !name.equals("is")
                && method.getReturnType().getKind() == TypeKind.BOOLEAN;
        return get || is;
    }

    private String nameWithoutPrefix(String name) {
        String withoutPrefix;
        if (name.startsWith(GET) && !name.equals(GET)) {
            withoutPrefix = name.substring(3);
        } else {
            assert name.startsWith("is");
            withoutPrefix = name.substring(2);
        }
        return Introspector.decapitalize(withoutPrefix);
    }

    private String getModifier(ExecutableElement method) {
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

    private String getIsElementTypeParameter(List<? extends TypeMirror> interfaces) {
        String typeParam = "elemental2.dom.HTMLElement";
        for (TypeMirror interfaceMirror : interfaces) {
            if (MoreTypes.isTypeOf(IsElement.class, interfaceMirror)) {
                DeclaredType interfaceDeclaration = MoreTypes.asDeclared(interfaceMirror);
                List<? extends TypeMirror> typeArguments = interfaceDeclaration.getTypeArguments();
                if (!typeArguments.isEmpty()) {
                    TypeElement typeArgument = (TypeElement) typeUtils.asElement(typeArguments.get(0));
                    return typeArgument.getQualifiedName().toString();
                }
            }
        }
        return typeParam;
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

    private boolean diInClasspath() {
        for (String clazz : DEPENDENCY_INJECTION_FRAMEWORKS) {
            try {
                if (getClass().getClassLoader().loadClass(clazz) != null) {
                    return true;
                }
            } catch (ClassNotFoundException ignore) {
                // noop
            }
        }
        return false;
    }
}
