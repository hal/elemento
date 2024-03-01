<#--

     Copyright 2023 Red Hat

     Licensed under the Apache License, Version 2.0 (the "License");
     you may not use this file except in compliance with the License.
     You may obtain a copy of the License at

         https://www.apache.org/licenses/LICENSE-2.0

     Unless required by applicable law or agreed to in writing, software
     distributed under the License is distributed on an "AS IS" BASIS,
     WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     See the License for the specific language governing permissions and
     limitations under the License.

-->
<#-- @ftlvariable name="generatedWith" type="java.lang.String" -->
<#-- @ftlvariable name="packageName" type="java.lang.String" -->
<#-- @ftlvariable name="className" type="java.lang.String" -->
<#-- @ftlvariable name="routes" type="java.util.List<org.jboss.elemento.router.processor.RouteInfo>" -->
package ${packageName};

import java.util.Map;
import java.util.HashMap;
import java.util.function.Supplier;

import javax.annotation.processing.Generated;

import org.jboss.elemento.router.Page;
import org.jboss.elemento.router.Place;
import org.jboss.elemento.router.Routes;

import elemental2.dom.HTMLElement;

/*
* WARNING! This class is generated. Do not modify.
*/
@Generated("${generatedWith}")
public class ${className} implements Routes {

    public static final Routes INSTANCE = new ${className}();

    private final Map<Place, Supplier<Page>> places;

    private ${className}() {
        places = new HashMap<>();
        <#list routes as route>
        places.put(new Place("${route.route}", <#if route.title??>"${route.title}"<#else>null</#if>, <#if route.selector??>"${route.selector}"<#else>(Supplier<HTMLElement>) null</#if>), () -> new ${route.pageClass}());
        </#list>
    }

    @Override
    public Map<Place, Supplier<Page>> places() {
        return places;
    }
}
