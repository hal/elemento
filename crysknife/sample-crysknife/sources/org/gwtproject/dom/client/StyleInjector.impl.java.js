goog.module('org.gwtproject.dom.client.StyleInjector$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let JavaScriptObject_$Overlay = goog.forwardDeclare('org.gwtproject.core.client.JavaScriptObject.$Overlay$impl');
let JsArrayString_$Overlay = goog.forwardDeclare('org.gwtproject.core.client.JsArrayString.$Overlay$impl');
let Scheduler = goog.forwardDeclare('org.gwtproject.core.client.Scheduler$impl');
let ScheduledCommand = goog.forwardDeclare('org.gwtproject.core.client.Scheduler.ScheduledCommand$impl');
let Document_$Overlay = goog.forwardDeclare('org.gwtproject.dom.client.Document.$Overlay$impl');
let $Overlay = goog.forwardDeclare('org.gwtproject.dom.client.Element.$Overlay$impl');
let HeadElement_$Overlay = goog.forwardDeclare('org.gwtproject.dom.client.HeadElement.$Overlay$impl');
let StyleElement_$Overlay = goog.forwardDeclare('org.gwtproject.dom.client.StyleElement.$Overlay$impl');
let $1 = goog.forwardDeclare('org.gwtproject.dom.client.StyleInjector.$1$impl');
let $Asserts = goog.forwardDeclare('vmbootstrap.Asserts$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

class StyleInjector extends j_l_Object {
 /** @protected */
 constructor() {
  super();
 }
 
 static m_flush__() {
  StyleInjector.$clinit();
  StyleInjector.m_inject__boolean(true);
 }
 
 static m_inject__java_lang_String(/** ?string */ css) {
  StyleInjector.$clinit();
  StyleInjector.m_inject__java_lang_String__boolean(css, false);
 }
 
 static m_inject__java_lang_String__boolean(/** ?string */ css, /** boolean */ immediate) {
  StyleInjector.$clinit();
  StyleInjector.f_toInject__org_gwtproject_dom_client_StyleInjector_.push(css);
  StyleInjector.m_inject__boolean(immediate);
 }
 
 static m_injectAtEnd__java_lang_String(/** ?string */ css) {
  StyleInjector.$clinit();
  StyleInjector.m_injectAtEnd__java_lang_String__boolean(css, false);
 }
 
 static m_injectAtEnd__java_lang_String__boolean(/** ?string */ css, /** boolean */ immediate) {
  StyleInjector.$clinit();
  StyleInjector.f_toInjectAtEnd__org_gwtproject_dom_client_StyleInjector_.push(css);
  StyleInjector.m_inject__boolean(immediate);
 }
 
 static m_injectAtStart__java_lang_String(/** ?string */ css) {
  StyleInjector.$clinit();
  StyleInjector.m_injectAtStart__java_lang_String__boolean(css, false);
 }
 
 static m_injectAtStart__java_lang_String__boolean(/** ?string */ css, /** boolean */ immediate) {
  StyleInjector.$clinit();
  StyleInjector.f_toInjectAtStart__org_gwtproject_dom_client_StyleInjector_.unshift(css);
  StyleInjector.m_inject__boolean(immediate);
 }
 /** @return {Object} */
 static m_injectStylesheet__java_lang_String(/** ?string */ contents) {
  StyleInjector.$clinit();
  StyleInjector.f_toInject__org_gwtproject_dom_client_StyleInjector_.push(contents);
  return StyleInjector.m_flush__org_gwtproject_core_client_JavaScriptObject(StyleInjector.f_toInject__org_gwtproject_dom_client_StyleInjector_);
 }
 /** @return {Object} */
 static m_injectStylesheetAtEnd__java_lang_String(/** ?string */ contents) {
  StyleInjector.$clinit();
  StyleInjector.f_toInjectAtEnd__org_gwtproject_dom_client_StyleInjector_.push(contents);
  return StyleInjector.m_flush__org_gwtproject_core_client_JavaScriptObject(StyleInjector.f_toInjectAtEnd__org_gwtproject_dom_client_StyleInjector_);
 }
 /** @return {Object} */
 static m_injectStylesheetAtStart__java_lang_String(/** ?string */ contents) {
  StyleInjector.$clinit();
  StyleInjector.f_toInjectAtStart__org_gwtproject_dom_client_StyleInjector_.unshift(contents);
  return StyleInjector.m_flush__org_gwtproject_core_client_JavaScriptObject(StyleInjector.f_toInjectAtStart__org_gwtproject_dom_client_StyleInjector_);
 }
 
 static m_setContents__org_gwtproject_dom_client_StyleElement__java_lang_String(/** Object */ style, /** ?string */ contents) {
  StyleInjector.$clinit();
  $Overlay.m_setInnerText__$devirt__org_gwtproject_dom_client_Element__java_lang_String(style, contents);
 }
 /** @return {Object} */
 static m_flush__org_gwtproject_core_client_JavaScriptObject(/** Object */ which) {
  StyleInjector.$clinit();
  let toReturn = null;
  let /** Object */ maybeReturn;
  if (JsArrayString_$Overlay.m_length__$devirt__org_gwtproject_core_client_JsArrayString(StyleInjector.f_toInjectAtStart__org_gwtproject_dom_client_StyleInjector_) != 0) {
   let css = JsArrayString_$Overlay.m_join__$devirt__org_gwtproject_core_client_JsArrayString__java_lang_String(StyleInjector.f_toInjectAtStart__org_gwtproject_dom_client_StyleInjector_, "");
   maybeReturn = StyleInjector.m_injectStyleSheetAtStart__java_lang_String(css);
   if ($Equality.$same(StyleInjector.f_toInjectAtStart__org_gwtproject_dom_client_StyleInjector_, which)) {
    toReturn = maybeReturn;
   }
   JsArrayString_$Overlay.m_setLength__$devirt__org_gwtproject_core_client_JsArrayString__int(StyleInjector.f_toInjectAtStart__org_gwtproject_dom_client_StyleInjector_, 0);
  }
  if (JsArrayString_$Overlay.m_length__$devirt__org_gwtproject_core_client_JsArrayString(StyleInjector.f_toInject__org_gwtproject_dom_client_StyleInjector_) != 0) {
   let css_1 = JsArrayString_$Overlay.m_join__$devirt__org_gwtproject_core_client_JsArrayString__java_lang_String(StyleInjector.f_toInject__org_gwtproject_dom_client_StyleInjector_, "");
   maybeReturn = StyleInjector.m_injectStyleSheet__java_lang_String(css_1);
   if ($Equality.$same(StyleInjector.f_toInject__org_gwtproject_dom_client_StyleInjector_, which)) {
    toReturn = maybeReturn;
   }
   JsArrayString_$Overlay.m_setLength__$devirt__org_gwtproject_core_client_JsArrayString__int(StyleInjector.f_toInject__org_gwtproject_dom_client_StyleInjector_, 0);
  }
  if (JsArrayString_$Overlay.m_length__$devirt__org_gwtproject_core_client_JsArrayString(StyleInjector.f_toInjectAtEnd__org_gwtproject_dom_client_StyleInjector_) != 0) {
   let css_2 = JsArrayString_$Overlay.m_join__$devirt__org_gwtproject_core_client_JsArrayString__java_lang_String(StyleInjector.f_toInjectAtEnd__org_gwtproject_dom_client_StyleInjector_, "");
   maybeReturn = StyleInjector.m_injectStyleSheetAtEnd__java_lang_String(css_2);
   if ($Equality.$same(StyleInjector.f_toInjectAtEnd__org_gwtproject_dom_client_StyleInjector_, which)) {
    toReturn = maybeReturn;
   }
   JsArrayString_$Overlay.m_setLength__$devirt__org_gwtproject_core_client_JsArrayString__int(StyleInjector.f_toInjectAtEnd__org_gwtproject_dom_client_StyleInjector_, 0);
  }
  StyleInjector.$f_needsInjection__org_gwtproject_dom_client_StyleInjector_ = false;
  return toReturn;
 }
 
 static m_inject__boolean(/** boolean */ immediate) {
  if (immediate) {
   StyleInjector.m_flush__org_gwtproject_core_client_JavaScriptObject(null);
  } else {
   StyleInjector.m_schedule__();
  }
 }
 
 static m_schedule__() {
  if (!StyleInjector.$f_needsInjection__org_gwtproject_dom_client_StyleInjector_) {
   StyleInjector.$f_needsInjection__org_gwtproject_dom_client_StyleInjector_ = true;
   Scheduler.m_get__().m_scheduleFinally__org_gwtproject_core_client_Scheduler_ScheduledCommand(StyleInjector.f_flusher__org_gwtproject_dom_client_StyleInjector_);
  }
 }
 /** @return {Object} */
 static m_injectStyleSheet__java_lang_String(/** ?string */ contents) {
  let style = StyleInjector.m_createElement__java_lang_String(contents);
  StyleInjector.m_getHead__().appendChild(style);
  return style;
 }
 /** @return {Object} */
 static m_injectStyleSheetAtEnd__java_lang_String(/** ?string */ contents) {
  return StyleInjector.m_injectStyleSheet__java_lang_String(contents);
 }
 /** @return {Object} */
 static m_injectStyleSheetAtStart__java_lang_String(/** ?string */ contents) {
  let style = StyleInjector.m_createElement__java_lang_String(contents);
  StyleInjector.m_getHead__().insertBefore(style, StyleInjector.f_head__org_gwtproject_dom_client_StyleInjector_.firstChild);
  return style;
 }
 /** @return {Object} */
 static m_createElement__java_lang_String(/** ?string */ contents) {
  let style = Document_$Overlay.m_createStyleElement__$devirt__org_gwtproject_dom_client_Document(Document_$Overlay.m_get__());
  $Overlay.m_setPropertyString__$devirt__org_gwtproject_dom_client_Element__java_lang_String__java_lang_String(style, "language", "text/css");
  $Overlay.m_setInnerText__$devirt__org_gwtproject_dom_client_Element__java_lang_String(style, contents);
  return style;
 }
 /** @return {Object} */
 static m_getHead__() {
  if ($Equality.$same(StyleInjector.f_head__org_gwtproject_dom_client_StyleInjector_, null)) {
   let elt = Document_$Overlay.m_get__().head;
   $Asserts.$assertWithMessage(!$Equality.$same(elt, null), "The host HTML page does not have a <head> element" + " which is required by StyleInjector");
   StyleInjector.f_head__org_gwtproject_dom_client_StyleInjector_ = HeadElement_$Overlay.m_as__org_gwtproject_dom_client_Element(elt);
  }
  return StyleInjector.f_head__org_gwtproject_dom_client_StyleInjector_;
 }
 /** @return {!StyleInjector} */
 static $create__() {
  let $instance = new StyleInjector();
  $instance.$ctor__org_gwtproject_dom_client_StyleInjector__();
  return $instance;
 }
 
 $ctor__org_gwtproject_dom_client_StyleInjector__() {
  this.$ctor__java_lang_Object__();
 }
 /** @return {boolean} */
 static get f_needsInjection__org_gwtproject_dom_client_StyleInjector_() {
  return (StyleInjector.$clinit(), StyleInjector.$f_needsInjection__org_gwtproject_dom_client_StyleInjector_);
 }
 
 static set f_needsInjection__org_gwtproject_dom_client_StyleInjector_(/** boolean */ value) {
  (StyleInjector.$clinit(), StyleInjector.$f_needsInjection__org_gwtproject_dom_client_StyleInjector_ = value);
 }
 
 static $clinit() {
  StyleInjector.$clinit = () =>{};
  StyleInjector.$loadModules();
  j_l_Object.$clinit();
  StyleInjector.f_toInject__org_gwtproject_dom_client_StyleInjector_ = /**@type {Object}*/ ($Casts.$to(JavaScriptObject_$Overlay.m_cast__$devirt__org_gwtproject_core_client_JavaScriptObject(JavaScriptObject_$Overlay.m_createArray__()), JsArrayString_$Overlay));
  StyleInjector.f_toInjectAtEnd__org_gwtproject_dom_client_StyleInjector_ = /**@type {Object}*/ ($Casts.$to(JavaScriptObject_$Overlay.m_cast__$devirt__org_gwtproject_core_client_JavaScriptObject(JavaScriptObject_$Overlay.m_createArray__()), JsArrayString_$Overlay));
  StyleInjector.f_toInjectAtStart__org_gwtproject_dom_client_StyleInjector_ = /**@type {Object}*/ ($Casts.$to(JavaScriptObject_$Overlay.m_cast__$devirt__org_gwtproject_core_client_JavaScriptObject(JavaScriptObject_$Overlay.m_createArray__()), JsArrayString_$Overlay));
  StyleInjector.f_flusher__org_gwtproject_dom_client_StyleInjector_ = $1.$create__();
  StyleInjector.$f_needsInjection__org_gwtproject_dom_client_StyleInjector_ = false;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof StyleInjector;
 }
 
 static $loadModules() {
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  JavaScriptObject_$Overlay = goog.module.get('org.gwtproject.core.client.JavaScriptObject.$Overlay$impl');
  JsArrayString_$Overlay = goog.module.get('org.gwtproject.core.client.JsArrayString.$Overlay$impl');
  Scheduler = goog.module.get('org.gwtproject.core.client.Scheduler$impl');
  Document_$Overlay = goog.module.get('org.gwtproject.dom.client.Document.$Overlay$impl');
  $Overlay = goog.module.get('org.gwtproject.dom.client.Element.$Overlay$impl');
  HeadElement_$Overlay = goog.module.get('org.gwtproject.dom.client.HeadElement.$Overlay$impl');
  $1 = goog.module.get('org.gwtproject.dom.client.StyleInjector.$1$impl');
  $Asserts = goog.module.get('vmbootstrap.Asserts$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
 
}
$Util.$setClassMetadata(StyleInjector, 'org.gwtproject.dom.client.StyleInjector');

/**@type {Object}*/
StyleInjector.f_head__org_gwtproject_dom_client_StyleInjector_;
/**@type {Object}*/
StyleInjector.f_toInject__org_gwtproject_dom_client_StyleInjector_;
/**@type {Object}*/
StyleInjector.f_toInjectAtEnd__org_gwtproject_dom_client_StyleInjector_;
/**@type {Object}*/
StyleInjector.f_toInjectAtStart__org_gwtproject_dom_client_StyleInjector_;
/**@type {ScheduledCommand}*/
StyleInjector.f_flusher__org_gwtproject_dom_client_StyleInjector_;
/**@private {boolean}*/
StyleInjector.$f_needsInjection__org_gwtproject_dom_client_StyleInjector_ = false;

exports = StyleInjector; 
//# sourceMappingURL=StyleInjector.js.map
