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

import org.gwtproject.dom.builder.shared.TableBuilder;
import org.gwtproject.dom.client.TableElement;
import org.gwtproject.safehtml.shared.SafeHtml;

/** DOM-based implementation of {@link TableBuilder}. */
public class DomTableBuilder extends DomElementBuilderBase<TableBuilder, TableElement>
    implements TableBuilder {

  DomTableBuilder(DomBuilderImpl delegate) {
    super(delegate, false);
  }

  @Override
  public TableBuilder border(int border) {
    assertCanAddAttribute().setBorder(border);
    return this;
  }

  @Override
  public TableBuilder cellPadding(int cellPadding) {
    assertCanAddAttribute().setCellPadding(cellPadding);
    return this;
  }

  @Override
  public TableBuilder cellSpacing(int cellSpacing) {
    assertCanAddAttribute().setCellSpacing(cellSpacing);
    return this;
  }

  @Override
  public TableBuilder frame(String frame) {
    assertCanAddAttribute().setFrame(frame);
    return this;
  }

  @Override
  public TableBuilder html(SafeHtml html) {
    throw new UnsupportedOperationException(UNSUPPORTED_HTML);
  }

  @Override
  public TableBuilder rules(String rules) {
    assertCanAddAttribute().setRules(rules);
    return this;
  }

  @Override
  public TableBuilder text(String text) {
    throw new UnsupportedOperationException(UNSUPPORTED_HTML);
  }

  @Override
  public TableBuilder width(String width) {
    assertCanAddAttribute().setWidth(width);
    return this;
  }
}

