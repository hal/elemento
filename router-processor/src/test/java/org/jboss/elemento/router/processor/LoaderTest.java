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

import org.jboss.elemento.router.LoadData;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import io.toolisticon.cute.Cute;
import io.toolisticon.cute.CuteApi;

import static io.toolisticon.cute.CuteApi.ExpectedFileObjectMatcherKind.TEXT_IGNORE_LINE_ENDINGS;
import static io.toolisticon.cute.JavaFileObjectUtils.readFromResource;

class LoaderTest implements RouteProcessorTest {

    private CuteApi.BlackBoxTestSourceFilesAndProcessorInterface processor;

    @BeforeEach
    void beforeEach() {
        processor = Cute.blackBoxTest()
                .given()
                .processor(PROCESSOR);
    }

    // ------------------------------------------------------ ok

    @Test
    void validLoaderMethod() {
        processor.andSourceFiles(readFromResource("/router/processor/loader/LoaderMethod.java"))
                .whenCompiled()
                .thenExpectThat()
                .compilationSucceeds()
                .andThat()
                .generatedSourceFile(GENERATED_PLACES)
                .matches(TEXT_IGNORE_LINE_ENDINGS, readFromResource("/router/processor/loader/LoaderMethodCode.java"))
                .executeTest();
    }

    @Test
    void validLoaderClassRef() {
        processor.andSourceFiles(readFromResource("/router/processor/loader/LoaderClassRef.java"))
                .whenCompiled()
                .thenExpectThat()
                .compilationSucceeds()
                .andThat()
                .generatedSourceFile(GENERATED_PLACES)
                .matches(TEXT_IGNORE_LINE_ENDINGS, readFromResource("/router/processor/loader/LoaderClassRefCode.java"))
                .executeTest();
    }

    @Test
    void validLoaderMethodRef() {
        processor.andSourceFiles(readFromResource("/router/processor/loader/LoaderMethodRef.java"))
                .whenCompiled()
                .thenExpectThat()
                .compilationSucceeds()
                .andThat()
                .generatedSourceFile(GENERATED_PLACES)
                .matches(TEXT_IGNORE_LINE_ENDINGS, readFromResource("/router/processor/loader/LoaderMethodRefCode.java"))
                .executeTest();
    }

    // ------------------------------------------------------ warning

    @Test
    void possibleLoaderMethod() {
        processor.andSourceFiles(readFromResource("/router/processor/loader/PossibleLoaderMethod.java"))
                .whenCompiled()
                .thenExpectThat()
                .compilationSucceeds()
                .andThat()
                .compilerMessage()
                .ofKindWarning()
                .atSource("/router/processor/loader/PossibleLoaderMethod.java")
                .atLine(20).atColumn(40)
                .contains("withParameters(int i)")
                .andThat()
                .compilerMessage()
                .ofKindWarning()
                .atSource("/router/processor/loader/PossibleLoaderMethod.java")
                .atLine(24).atColumn(33)
                .contains("notPublic()")
                .andThat()
                .generatedSourceFile(GENERATED_PLACES)
                .matches(TEXT_IGNORE_LINE_ENDINGS, readFromResource("/router/processor/loader/PossibleLoaderMethodCode.java"))
                .executeTest();
    }

    // ------------------------------------------------------ error

    @Test
    void noLoadDataImplementation() {
        processor.andSourceFiles(readFromResource("/router/processor/loader/NoLoadDataImplementation.java"))
                .whenCompiled()
                .thenExpectThat()
                .compilationFails()
                .andThat()
                .compilerMessage()
                .ofKindError()
                .atSource("/router/processor/loader/NoLoadDataImplementation.java")
                .atLine(19).atColumn(19)
                .contains(String.format("does not implement %s<?>", LoadData.class.getSimpleName()))
                .executeTest();
    }

    @Test
    void noPublicClass() {
        processor.andSourceFiles(readFromResource("/router/processor/loader/NoPublicClass.java"))
                .whenCompiled()
                .thenExpectThat()
                .compilationFails()
                .andThat()
                .compilerMessage()
                .ofKindError()
                .atSource("/router/processor/loader/NoPublicClass.java")
                .atLine(19).atColumn(12)
                .contains("is not public")
                .executeTest();
    }

    @Test
    void abstractClass() {
        processor.andSourceFiles(readFromResource("/router/processor/loader/AbstractClass.java"))
                .whenCompiled()
                .thenExpectThat()
                .compilationFails()
                .andThat()
                .compilerMessage()
                .ofKindError()
                .atSource("/router/processor/loader/AbstractClass.java")
                .atLine(19).atColumn(28)
                .contains("is abstract")
                .executeTest();
    }

    @Test
    void invalidModifiers() {
        processor.andSourceFiles(readFromResource("/router/processor/loader/InvalidModifiers.java"))
                .whenCompiled()
                .thenExpectThat()
                .compilationFails()
                .andThat()
                .compilerMessage()
                .ofKindError()
                .atSource("/router/processor/loader/InvalidModifiers.java")
                .atLine(21).atColumn(44)
                .contains("is not a valid loader method")
                .executeTest();
    }

    @Test
    void withParameter() {
        processor.andSourceFiles(readFromResource("/router/processor/loader/WithParameter.java"))
                .whenCompiled()
                .thenExpectThat()
                .compilationFails()
                .andThat()
                .compilerMessage()
                .ofKindError()
                .atSource("/router/processor/loader/WithParameter.java")
                .atLine(21).atColumn(40)
                .contains("is not a valid loader method")
                .executeTest();
    }

    @Test
    void wrongReturnType() {
        processor.andSourceFiles(readFromResource("/router/processor/loader/WrongReturnType.java"))
                .whenCompiled()
                .thenExpectThat()
                .compilationFails()
                .andThat()
                .compilerMessage()
                .ofKindError()
                .atSource("/router/processor/loader/WrongReturnType.java")
                .atLine(21).atColumn(30)
                .contains("is not a valid loader method")
                .executeTest();
    }

    @Test
    void notAccessible() {
        processor.andSourceFiles(readFromResource("/router/processor/loader/NotAccessible.java"))
                .whenCompiled()
                .thenExpectThat()
                .compilationFails()
                .andThat()
                .compilerMessage()
                .ofKindError()
                .atSource("/router/processor/loader/NotAccessible.java")
                .atLine(21).atColumn(40)
                .contains("not publicly accessible")
                .executeTest();
    }

    @Test
    void alreadyDefined() {
        processor.andSourceFiles(readFromResource("/router/processor/loader/AlreadyDefined.java"))
                .whenCompiled()
                .thenExpectThat()
                .compilationFails()
                .andThat()
                .compilerMessage()
                .ofKindError()
                .atSource("/router/processor/loader/AlreadyDefined.java")
                .atLine(30).atColumn(40)
                .contains("Loader 'my-loader' has already been defined")
                .executeTest();
    }

    @Test
    void moreThanOneLoader() {
        processor.andSourceFiles(readFromResource("/router/processor/loader/MoreThanOneLoader.java"))
                .whenCompiled()
                .thenExpectThat()
                .compilationFails()
                .andThat()
                .compilerMessage()
                .ofKindError()
                // .atSource("/router/processor/loader/MoreThanOneLoader.java")
                .contains("Only one loader per page is allowed")
                .executeTest();
    }
}
