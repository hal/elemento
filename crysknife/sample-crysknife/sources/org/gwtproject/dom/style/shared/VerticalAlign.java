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

/** Enum for the vertical-align property. */
public enum VerticalAlign implements HasCssName {
  BASELINE {
    @Override
    public String getCssName() {
      return "baseline";
    }
  },
  SUB {
    @Override
    public String getCssName() {
      return "sub";
    }
  },
  SUPER {
    @Override
    public String getCssName() {
      return "super";
    }
  },
  TOP {
    @Override
    public String getCssName() {
      return "top";
    }
  },
  TEXT_TOP {
    @Override
    public String getCssName() {
      return "text-top";
    }
  },
  MIDDLE {
    @Override
    public String getCssName() {
      return "middle";
    }
  },
  BOTTOM {
    @Override
    public String getCssName() {
      return "bottom";
    }
  },
  TEXT_BOTTOM {
    @Override
    public String getCssName() {
      return "text-bottom";
    }
  };

  @Override
  public abstract String getCssName();
}

