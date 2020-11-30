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

/** CSS length units. */
public enum Unit {
  PX {
    @Override
    public String getType() {
      return "px";
    }
  },
  PCT {
    @Override
    public String getType() {
      return "%";
    }
  },
  EM {
    @Override
    public String getType() {
      return "em";
    }
  },
  EX {
    @Override
    public String getType() {
      return "ex";
    }
  },
  PT {
    @Override
    public String getType() {
      return "pt";
    }
  },
  PC {
    @Override
    public String getType() {
      return "pc";
    }
  },
  IN {
    @Override
    public String getType() {
      return "in";
    }
  },
  CM {
    @Override
    public String getType() {
      return "cm";
    }
  },
  MM {
    @Override
    public String getType() {
      return "mm";
    }
  };

  public abstract String getType();
}

