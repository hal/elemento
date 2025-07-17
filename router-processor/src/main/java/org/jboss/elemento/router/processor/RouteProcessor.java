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

import java.util.List;

import javax.annotation.processing.Processor;
import javax.annotation.processing.SupportedAnnotationTypes;
import javax.annotation.processing.SupportedOptions;
import javax.annotation.processing.SupportedSourceVersion;
import javax.lang.model.SourceVersion;
import com.google.auto.common.BasicAnnotationProcessor;
import com.google.auto.service.AutoService;

/**
 * This class is a processor that generates a Routes implementation based on the Route annotations in the codebase. It creates a
 * RoutesImpl class that contains a map of Place to Suppliers of Page objects. The map is populated with entries for each Route
 * annotation found, where the key is a Place object created from the Route value, and the value is a Supplier that creates a
 * new instance of the corresponding Page class.
 */
@AutoService(Processor.class)
@SupportedSourceVersion(SourceVersion.RELEASE_11)
@SupportedAnnotationTypes({"org.jboss.elemento.router.Loader", "org.jboss.elemento.router.Route"})
@SupportedOptions({"places.package", "places.class"})
public class RouteProcessor extends BasicAnnotationProcessor {

    @Override
    public SourceVersion getSupportedSourceVersion() {
        return SourceVersion.RELEASE_11;
    }

    @Override
    protected Iterable<? extends Step> steps() {
        return List.of(new LoaderStep(processingEnv), new RouteStep(processingEnv, new SimpleCodeGenerator()));
    }
}
