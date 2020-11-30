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
package org.gwtproject.dom.style.shared;

/** Enum for the list-style-type property. */
public enum ListStyleType implements HasCssName {
  NONE {
    @Override
    public String getCssName() {
      return "none";
    }
  },
  DISC {
    @Override
    public String getCssName() {
      return "disc";
    }
  },
  CIRCLE {
    @Override
    public String getCssName() {
      return "circle";
    }
  },
  SQUARE {
    @Override
    public String getCssName() {
      return "square";
    }
  },
  DECIMAL {
    @Override
    public String getCssName() {
      return "decimal";
    }
  },
  LOWER_ALPHA {
    @Override
    public String getCssName() {
      return "lower-alpha";
    }
  },
  UPPER_ALPHA {
    @Override
    public String getCssName() {
      return "upper-alpha";
    }
  },
  LOWER_ROMAN {
    @Override
    public String getCssName() {
      return "lower-roman";
    }
  },
  UPPER_ROMAN {
    @Override
    public String getCssName() {
      return "upper-roman";
    }
  };

  @Override
  public abstract String getCssName();
}

