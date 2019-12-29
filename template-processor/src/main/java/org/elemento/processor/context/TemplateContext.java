/*
 * Copyright 2015-2016 Red Hat, Inc, and individual contributors.
 *
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
package org.elemento.processor.context;

import java.util.List;

public class TemplateContext {

    private final String pkg;
    private final String base;
    private final String subclass;
    private final String isElementTypeParameter;
    private final String inject;

    private RootElementInfo root;
    private List<DataElementInfo> dataElements;
    private List<PostConstructInfo> postConstructs;
    private List<AbstractPropertyInfo> abstractProperties;

    public TemplateContext(String pkg, String base, String subclass, String isElementTypeParameter, String inject) {
        this.pkg = pkg;
        this.base = base;
        this.subclass = subclass;
        this.isElementTypeParameter = isElementTypeParameter;
        this.inject = inject;
    }

    @Override
    public String toString() {
        return pkg + "." + subclass + " extends " + base;
    }

    public String getBase() {
        return base;
    }

    public String getPackage() {
        return pkg;
    }

    public String getInject() {
        return inject;
    }

    public RootElementInfo getRoot() {
        return root;
    }

    public void setRoot(final RootElementInfo root) {
        this.root = root;
    }

    public String getSubclass() {
        return subclass;
    }

    public String getIsElementTypeParameter() {
        return isElementTypeParameter;
    }

    public List<DataElementInfo> getDataElements() {
        return dataElements;
    }

    public void setDataElements(final List<DataElementInfo> dataElements) {
        this.dataElements = dataElements;
    }

    public List<PostConstructInfo> getPostConstructs() {
        return postConstructs;
    }

    public void setPostConstructs(
            final List<PostConstructInfo> postConstructs) {
        this.postConstructs = postConstructs;
    }

    public void setAbstractProperties(final List<AbstractPropertyInfo> abstractProperties) {
        this.abstractProperties = abstractProperties;
    }

    public List<AbstractPropertyInfo> getAbstractProperties() {
        return abstractProperties;
    }
}
