goog.module('org.gwtproject.event.dom.client.KeyDownEvent$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const KeyCodeEvent = goog.require('org.gwtproject.event.dom.client.KeyCodeEvent$impl');

let BrowserEvents = goog.forwardDeclare('org.gwtproject.dom.client.BrowserEvents$impl');
let Type = goog.forwardDeclare('org.gwtproject.event.dom.client.DomEvent.Type$impl');
let KeyDownHandler = goog.forwardDeclare('org.gwtproject.event.dom.client.KeyDownHandler$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @extends {KeyCodeEvent<KeyDownHandler>}
  */
class KeyDownEvent extends KeyCodeEvent {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!KeyDownEvent} */
 static $create__() {
  KeyDownEvent.$clinit();
  let $instance = new KeyDownEvent();
  $instance.$ctor__org_gwtproject_event_dom_client_KeyDownEvent__();
  return $instance;
 }
 
 $ctor__org_gwtproject_event_dom_client_KeyDownEvent__() {
  this.$ctor__org_gwtproject_event_dom_client_KeyCodeEvent__();
 }
 /** @return {Type<KeyDownHandler>} */
 static m_getType__() {
  KeyDownEvent.$clinit();
  return KeyDownEvent.f_TYPE__org_gwtproject_event_dom_client_KeyDownEvent_;
 }
 /** @override @return {Type<KeyDownHandler>} */
 m_getAssociatedType__() {
  return KeyDownEvent.f_TYPE__org_gwtproject_event_dom_client_KeyDownEvent_;
 }
 
 m_dispatch__org_gwtproject_event_dom_client_KeyDownHandler(/** KeyDownHandler */ handler) {
  handler.m_onKeyDown__org_gwtproject_event_dom_client_KeyDownEvent(this);
 }
 //Bridge method.
 /** @override */
 m_dispatch__java_lang_Object(/** KeyDownHandler */ arg0) {
  this.m_dispatch__org_gwtproject_event_dom_client_KeyDownHandler(/**@type {KeyDownHandler}*/ ($Casts.$to(arg0, KeyDownHandler)));
 }
 
 static $clinit() {
  KeyDownEvent.$clinit = () =>{};
  KeyDownEvent.$loadModules();
  KeyCodeEvent.$clinit();
  KeyDownEvent.f_TYPE__org_gwtproject_event_dom_client_KeyDownEvent_ = /**@type {!Type<KeyDownHandler>}*/ (Type.$create__java_lang_String__org_gwtproject_event_dom_client_DomEvent(BrowserEvents.f_KEYDOWN__org_gwtproject_dom_client_BrowserEvents, KeyDownEvent.$create__()));
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof KeyDownEvent;
 }
 
 static $loadModules() {
  BrowserEvents = goog.module.get('org.gwtproject.dom.client.BrowserEvents$impl');
  Type = goog.module.get('org.gwtproject.event.dom.client.DomEvent.Type$impl');
  KeyDownHandler = goog.module.get('org.gwtproject.event.dom.client.KeyDownHandler$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
 
}
$Util.$setClassMetadata(KeyDownEvent, 'org.gwtproject.event.dom.client.KeyDownEvent');

/**@type {Type<KeyDownHandler>}*/
KeyDownEvent.f_TYPE__org_gwtproject_event_dom_client_KeyDownEvent_;

exports = KeyDownEvent; 
//# sourceMappingURL=KeyDownEvent.js.map
