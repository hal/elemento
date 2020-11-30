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

import org.gwtproject.dom.builder.shared.TextAreaBuilder;
import org.gwtproject.dom.client.TextAreaElement;
import org.gwtproject.safehtml.shared.SafeHtml;

/** DOM-based implementation of {@link TextAreaBuilder}. */
public class DomTextAreaBuilder extends DomElementBuilderBase<TextAreaBuilder, TextAreaElement>
    implements TextAreaBuilder {

  DomTextAreaBuilder(DomBuilderImpl delegate) {
    super(delegate);
  }

  @Override
  public TextAreaBuilder accessKey(String accessKey) {
    assertCanAddAttribute().setAccessKey(accessKey);
    return this;
  }

  @Override
  public TextAreaBuilder cols(int cols) {
    assertCanAddAttribute().setCols(cols);
    return this;
  }

  @Override
  public TextAreaBuilder defaultValue(String defaultValue) {
    assertCanAddAttribute().setDefaultValue(defaultValue);
    return this;
  }

  @Override
  public TextAreaBuilder disabled() {
    assertCanAddAttribute().setDisabled(true);
    return this;
  }

  @Override
  public TextAreaBuilder html(SafeHtml html) {
    throw new UnsupportedOperationException(UNSUPPORTED_HTML);
  }

  @Override
  public boolean isChildElementSupported() {
    return false;
  }

  @Override
  public TextAreaBuilder name(String name) {
    assertCanAddAttribute().setName(name);
    return this;
  }

  @Override
  public TextAreaBuilder readOnly() {
    assertCanAddAttribute().setReadOnly(true);
    return this;
  }

  @Override
  public TextAreaBuilder rows(int rows) {
    assertCanAddAttribute().setRows(rows);
    return this;
  }

  @Override
  public TextAreaBuilder value(String value) {
    assertCanAddAttribute().setValue(value);
    return this;
  }
}

