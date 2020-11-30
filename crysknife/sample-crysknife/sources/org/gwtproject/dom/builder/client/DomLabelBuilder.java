/*
 * Copyright © 2019 The GWT Project Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
package org.gwtproject.dom.builder.client;

import org.gwtproject.dom.builder.shared.LabelBuilder;
import org.gwtproject.dom.client.LabelElement;

/** DOM-based implementation of {@link LabelBuilder}. */
public class DomLabelBuilder extends DomElementBuilderBase<LabelBuilder, LabelElement>
    implements LabelBuilder {

  DomLabelBuilder(DomBuilderImpl delegate) {
    super(delegate);
  }

  @Override
  public LabelBuilder accessKey(String accessKey) {
    assertCanAddAttribute().setAccessKey(accessKey);
    return this;
  }

  @Override
  public LabelBuilder htmlFor(String htmlFor) {
    assertCanAddAttribute().setHtmlFor(htmlFor);
    return this;
  }
}

