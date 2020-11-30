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

/** Enum for the cursor property. */
public enum Cursor implements HasCssName {
  DEFAULT {
    @Override
    public String getCssName() {
      return "default";
    }
  },
  AUTO {
    @Override
    public String getCssName() {
      return "auto";
    }
  },
  CROSSHAIR {
    @Override
    public String getCssName() {
      return "crosshair";
    }
  },
  POINTER {
    @Override
    public String getCssName() {
      return "pointer";
    }
  },
  MOVE {
    @Override
    public String getCssName() {
      return "move";
    }
  },
  E_RESIZE {
    @Override
    public String getCssName() {
      return "e-resize";
    }
  },
  NE_RESIZE {
    @Override
    public String getCssName() {
      return "ne-resize";
    }
  },
  NW_RESIZE {
    @Override
    public String getCssName() {
      return "nw-resize";
    }
  },
  N_RESIZE {
    @Override
    public String getCssName() {
      return "n-resize";
    }
  },
  SE_RESIZE {
    @Override
    public String getCssName() {
      return "se-resize";
    }
  },
  SW_RESIZE {
    @Override
    public String getCssName() {
      return "sw-resize";
    }
  },
  S_RESIZE {
    @Override
    public String getCssName() {
      return "s-resize";
    }
  },
  W_RESIZE {
    @Override
    public String getCssName() {
      return "w-resize";
    }
  },
  TEXT {
    @Override
    public String getCssName() {
      return "text";
    }
  },
  WAIT {
    @Override
    public String getCssName() {
      return "wait";
    }
  },
  HELP {
    @Override
    public String getCssName() {
      return "help";
    }
  },
  COL_RESIZE {
    @Override
    public String getCssName() {
      return "col-resize";
    }
  },
  ROW_RESIZE {
    @Override
    public String getCssName() {
      return "row-resize";
    }
  };

  @Override
  public abstract String getCssName();
}

