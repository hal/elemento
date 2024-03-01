/*
 *  Copyright 2023 Red Hat
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */
package org.jboss.elemento.router.processor;

import java.io.BufferedWriter;
import java.io.IOException;
import java.io.StringWriter;
import java.util.Map;

import freemarker.template.Configuration;
import freemarker.template.Template;
import freemarker.template.TemplateException;
import freemarker.template.Version;

/**
 * A code generator which generates code / resources from freemarker templates.
 *
 * @author Harald Pehl
 */
class CodeGenerator {

    public static final Version VERSION = new Version(2, 3, 32);
    private final Configuration config;

    CodeGenerator(Class<?> resourceLoaderClass, String templates) {
        config = new Configuration(Configuration.VERSION_2_3_32);
        config.setDefaultEncoding("UTF-8");
        config.setClassForTemplateLoading(resourceLoaderClass, templates);
    }

    /**
     * Generates the code using the specified context and freemarker template. Wraps any kind of error inside a
     * {@code GenerationException}.
     *
     * @param template the relative template name
     * @param context a supplier function to create the templates' context
     * @return the generated content
     */
    StringBuffer generate(String template, Map<String, Object> context) {
        final StringWriter sw = new StringWriter();
        final BufferedWriter bw = new BufferedWriter(sw);
        try {
            final Template t = config.getTemplate(template);
            t.process(context, bw);
        } catch (IOException | TemplateException e) {
            throw new GenerationException("Error generating template " + template + ": " + e.getMessage(), e);
        } finally {
            try {
                bw.close();
                sw.close();
            } catch (IOException ioe) {
                // noinspection ThrowFromFinallyBlock
                throw new GenerationException("Error generating template " + template + ": " + ioe.getMessage(), ioe);
            }
        }
        return sw.getBuffer();
    }
}
