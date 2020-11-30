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

/** Enum for the display property. */
public enum Display implements HasCssName {
  NONE {
    @Override
    public String getCssName() {
      return "none";
    }
  },
  BLOCK {
    @Override
    public String getCssName() {
      return "block";
    }
  },
  INLINE {
    @Override
    public String getCssName() {
      return "inline";
    }
  },
  INLINE_BLOCK {
    @Override
    public String getCssName() {
      return "inline-block";
    }
  },
  INLINE_TABLE {
    @Override
    public String getCssName() {
      return "inline-table";
    }
  },
  LIST_ITEM {
    @Override
    public String getCssName() {
      return "list-item";
    }
  },
  RUN_IN {
    @Override
    public String getCssName() {
      return "run-in";
    }
  },
  TABLE {
    @Override
    public String getCssName() {
      return "table";
    }
  },
  TABLE_CAPTION {
    @Override
    public String getCssName() {
      return "table-caption";
    }
  },
  TABLE_COLUMN_GROUP {
    @Override
    public String getCssName() {
      return "table-column-group";
    }
  },
  TABLE_HEADER_GROUP {
    @Override
    public String getCssName() {
      return "table-header-group";
    }
  },
  TABLE_FOOTER_GROUP {
    @Override
    public String getCssName() {
      return "table-footer-group";
    }
  },
  TABLE_ROW_GROUP {
    @Override
    public String getCssName() {
      return "table-row-group";
    }
  },
  TABLE_CELL {
    @Override
    public String getCssName() {
      return "table-cell";
    }
  },
  TABLE_COLUMN {
    @Override
    public String getCssName() {
      return "table-column";
    }
  },
  TABLE_ROW {
    @Override
    public String getCssName() {
      return "table-row";
    }
  },
  INITIAL {
    @Override
    public String getCssName() {
      return "initial";
    }
  },
  FLEX {
    @Override
    public String getCssName() {
      return "flex";
    }
  },
  INLINE_FLEX {
    @Override
    public String getCssName() {
      return "inline-flex";
    }
  };

  @Override
  public abstract String getCssName();
}

