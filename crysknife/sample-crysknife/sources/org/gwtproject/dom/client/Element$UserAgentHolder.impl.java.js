goog.module('org.gwtproject.dom.client.Element.UserAgentHolder$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');

class UserAgentHolder extends j_l_Object {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!UserAgentHolder} */
 static $create__() {
  let $instance = new UserAgentHolder();
  $instance.$ctor__org_gwtproject_dom_client_Element_UserAgentHolder__();
  return $instance;
 }
 
 $ctor__org_gwtproject_dom_client_Element_UserAgentHolder__() {
  this.$ctor__java_lang_Object__();
 }
 /** @return {boolean} */
 static get f_IS_SAFARI__org_gwtproject_dom_client_Element_UserAgentHolder_() {
  return (UserAgentHolder.$clinit(), UserAgentHolder.$f_IS_SAFARI__org_gwtproject_dom_client_Element_UserAgentHolder_);
 }
 
 static $clinit() {
  UserAgentHolder.$clinit = () =>{};
  UserAgentHolder.$loadModules();
  j_l_Object.$clinit();
  UserAgentHolder.$f_IS_SAFARI__org_gwtproject_dom_client_Element_UserAgentHolder_ = $Equality.$same("safari", $Util.$getDefine("user.agent"));
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof UserAgentHolder;
 }
 
 static $loadModules() {
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
 }
 
}
$Util.$setClassMetadata(UserAgentHolder, 'org.gwtproject.dom.client.Element$UserAgentHolder');

/**@private {boolean}*/
UserAgentHolder.$f_IS_SAFARI__org_gwtproject_dom_client_Element_UserAgentHolder_ = false;

/* NATIVE.JS EPILOG */

const org_gwtproject_dom_client_Element_UserAgentHolder = UserAgentHolder;

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
// ensure that user.agent defines are included
/** @suppress {extraRequire} */
const useragent = goog.require('user');


exports = UserAgentHolder; 
//# sourceMappingURL=Element$UserAgentHolder.js.map
