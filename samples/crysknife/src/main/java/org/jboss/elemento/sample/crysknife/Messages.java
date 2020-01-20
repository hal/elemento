/*
 * Copyright 2015-2016 Red Hat, Inc, and individual contributors.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
package org.jboss.elemento.sample.crysknife;

import org.gwtproject.safehtml.shared.SafeHtml;
import org.gwtproject.safehtml.shared.SafeHtmlUtils;

public interface Messages {

    static SafeHtml items(int items) {
        String message;
        switch (items) {
            case 0:
                message = "<strong>no</strong> items left";
                break;
            case 1:
                message = "<strong>one</strong> item left";
                break;
            default:
                message = "<strong>" + items + "</strong> items left";
                break;
        }
        return SafeHtmlUtils.fromSafeConstant(message);
    }
}
