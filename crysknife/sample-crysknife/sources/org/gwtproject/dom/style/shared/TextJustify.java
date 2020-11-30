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

/** Enum for the 'text-justify' CSS3 property. */
public enum TextJustify implements HasCssName {
  AUTO {
    @Override
    public String getCssName() {
      return "auto";
    }
  },
  /** @deprecated Use {@link #INTER_CHARACTER} instead */
  DISTRIBUTE {
    @Override
    public String getCssName() {
      return "distribute";
    }
  },
  INTER_CHARACTER {
    @Override
    public String getCssName() {
      return "inter-character";
    }
  },
  INTER_CLUSTER {
    @Override
    public String getCssName() {
      return "inter-cluster";
    }
  },
  INTER_IDEOGRAPH {
    @Override
    public String getCssName() {
      return "inter-ideograph";
    }
  },
  INTER_WORD {
    @Override
    public String getCssName() {
      return "inter-word";
    }
  },
  KASHIDA {
    @Override
    public String getCssName() {
      return "kashida";
    }
  },
  NONE {
    @Override
    public String getCssName() {
      return "none";
    }
  };

  @Override
  public abstract String getCssName();
}

