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
import java.util.Map;

import org.jsoup.nodes.Attribute;

public class RootElementInfo {

    private final String tag;
    private final String member;
    private final List<Attribute> attributes;
    private final String innerHtml;
    private final Map<String, String> expressions;

    public RootElementInfo(final String tag, final String member, final List<Attribute> attributes,
            final String innerHtml, final Map<String, String> expressions) {
        this.tag = tag;
        this.member = member;
        this.attributes = attributes;
        this.innerHtml = innerHtml;
        this.expressions = expressions;
    }

    @Override
    public String toString() {
        return "<" + tag + ">" + member + ":" + attributes;
    }

    public List<Attribute> getAttributes() {
        return attributes;
    }

    public String getInnerHtml() {
        return innerHtml;
    }

    public String getMember() {
        return member;
    }

    public String getTag() {
        return tag;
    }

    public Map<String, String> getExpressions() {
        return expressions;
    }
}
