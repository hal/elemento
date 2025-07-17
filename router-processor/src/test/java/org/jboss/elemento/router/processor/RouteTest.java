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

import org.junit.jupiter.api.Test;
import io.toolisticon.cute.Cute;

import static io.toolisticon.cute.CuteApi.ExpectedFileObjectMatcherKind.TEXT_IGNORE_LINE_ENDINGS;
import static io.toolisticon.cute.JavaFileObjectUtils.readFromResource;

class RouteTest implements RouteProcessorTest {

    @Test
    void validRoutes() {
        Cute.blackBoxTest().given()
                .processor(PROCESSOR)
                .andSourceFiles(readFromResource("/router/processor/route/Routes.java"))
                .whenCompiled()
                .thenExpectThat()
                .compilationSucceeds()
                .andThat()
                .generatedSourceFile(GENERATED_PLACES)
                .matches(TEXT_IGNORE_LINE_ENDINGS, readFromResource("/router/processor/route/RoutesCode.java"))
                .executeTest();
    }
}
