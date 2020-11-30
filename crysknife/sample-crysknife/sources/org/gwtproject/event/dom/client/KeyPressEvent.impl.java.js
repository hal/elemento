goog.module('org.gwtproject.event.dom.client.KeyPressEvent$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const KeyEvent = goog.require('org.gwtproject.event.dom.client.KeyEvent$impl');

let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let BrowserEvents = goog.forwardDeclare('org.gwtproject.dom.client.BrowserEvents$impl');
let $Overlay = goog.forwardDeclare('org.gwtproject.dom.client.NativeEvent.$Overlay$impl');
let Type = goog.forwardDeclare('org.gwtproject.event.dom.client.DomEvent.Type$impl');
let KeyPressHandler = goog.forwardDeclare('org.gwtproject.event.dom.client.KeyPressHandler$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');
let $Primitives = goog.forwardDeclare('vmbootstrap.Primitives$impl');

/**
 * @extends {KeyEvent<KeyPressHandler>}
  */
class KeyPressEvent extends KeyEvent {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!KeyPressEvent} */
 static $create__() {
  KeyPressEvent.$clinit();
  let $instance = new KeyPressEvent();
  $instance.$ctor__org_gwtproject_event_dom_client_KeyPressEvent__();
  return $instance;
 }
 
 $ctor__org_gwtproject_event_dom_client_KeyPressEvent__() {
  this.$ctor__org_gwtproject_event_dom_client_KeyEvent__();
 }
 /** @return {Type<KeyPressHandler>} */
 static m_getType__() {
  KeyPressEvent.$clinit();
  return KeyPressEvent.f_TYPE__org_gwtproject_event_dom_client_KeyPressEvent_;
 }
 /** @override @return {Type<KeyPressHandler>} */
 m_getAssociatedType__() {
  return KeyPressEvent.f_TYPE__org_gwtproject_event_dom_client_KeyPressEvent_;
 }
 /** @override @return {?string} */
 m_toDebugString__() {
  return j_l_String.m_valueOf__java_lang_Object(super.m_toDebugString__()) + "[" + j_l_String.m_valueOf__char(this.m_getCharCode__()) + "]";
 }
 /** @return {number} */
 m_getCharCode__() {
  return $Primitives.$narrowIntToChar(this.m_getUnicodeCharCode__());
 }
 /** @return {number} */
 m_getUnicodeCharCode__() {
  return $Overlay.m_getCharCode__$devirt__org_gwtproject_dom_client_NativeEvent(this.m_getNativeEvent__());
 }
 
 m_dispatch__org_gwtproject_event_dom_client_KeyPressHandler(/** KeyPressHandler */ handler) {
  handler.m_onKeyPress__org_gwtproject_event_dom_client_KeyPressEvent(this);
 }
 //Bridge method.
 /** @override */
 m_dispatch__java_lang_Object(/** KeyPressHandler */ arg0) {
  this.m_dispatch__org_gwtproject_event_dom_client_KeyPressHandler(/**@type {KeyPressHandler}*/ ($Casts.$to(arg0, KeyPressHandler)));
 }
 
 static $clinit() {
  KeyPressEvent.$clinit = () =>{};
  KeyPressEvent.$loadModules();
  KeyEvent.$clinit();
  KeyPressEvent.f_TYPE__org_gwtproject_event_dom_client_KeyPressEvent_ = /**@type {!Type<KeyPressHandler>}*/ (Type.$create__java_lang_String__org_gwtproject_event_dom_client_DomEvent(BrowserEvents.f_KEYPRESS__org_gwtproject_dom_client_BrowserEvents, KeyPressEvent.$create__()));
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof KeyPressEvent;
 }
 
 static $loadModules() {
  j_l_String = goog.module.get('java.lang.String$impl');
  BrowserEvents = goog.module.get('org.gwtproject.dom.client.BrowserEvents$impl');
  $Overlay = goog.module.get('org.gwtproject.dom.client.NativeEvent.$Overlay$impl');
  Type = goog.module.get('org.gwtproject.event.dom.client.DomEvent.Type$impl');
  KeyPressHandler = goog.module.get('org.gwtproject.event.dom.client.KeyPressHandler$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
  $Primitives = goog.module.get('vmbootstrap.Primitives$impl');
 }
 
}
$Util.$setClassMetadata(KeyPressEvent, 'org.gwtproject.event.dom.client.KeyPressEvent');

/**@type {Type<KeyPressHandler>}*/
KeyPressEvent.f_TYPE__org_gwtproject_event_dom_client_KeyPressEvent_;

exports = KeyPressEvent; 
//# sourceMappingURL=KeyPressEvent.js.map
