goog.module('org.gwtproject.event.dom.client.MouseOverEvent$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const MouseEvent = goog.require('org.gwtproject.event.dom.client.MouseEvent$impl');

let BrowserEvents = goog.forwardDeclare('org.gwtproject.dom.client.BrowserEvents$impl');
let EventTarget_$Overlay = goog.forwardDeclare('org.gwtproject.dom.client.EventTarget.$Overlay$impl');
let $Overlay = goog.forwardDeclare('org.gwtproject.dom.client.NativeEvent.$Overlay$impl');
let Type = goog.forwardDeclare('org.gwtproject.event.dom.client.DomEvent.Type$impl');
let MouseOverHandler = goog.forwardDeclare('org.gwtproject.event.dom.client.MouseOverHandler$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @extends {MouseEvent<MouseOverHandler>}
  */
class MouseOverEvent extends MouseEvent {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!MouseOverEvent} */
 static $create__() {
  MouseOverEvent.$clinit();
  let $instance = new MouseOverEvent();
  $instance.$ctor__org_gwtproject_event_dom_client_MouseOverEvent__();
  return $instance;
 }
 
 $ctor__org_gwtproject_event_dom_client_MouseOverEvent__() {
  this.$ctor__org_gwtproject_event_dom_client_MouseEvent__();
 }
 /** @return {Type<MouseOverHandler>} */
 static m_getType__() {
  MouseOverEvent.$clinit();
  return MouseOverEvent.f_TYPE__org_gwtproject_event_dom_client_MouseOverEvent_;
 }
 /** @override @return {Type<MouseOverHandler>} */
 m_getAssociatedType__() {
  return MouseOverEvent.f_TYPE__org_gwtproject_event_dom_client_MouseOverEvent_;
 }
 /** @return {Object} */
 m_getRelatedTarget__() {
  return $Overlay.m_getRelatedEventTarget__$devirt__org_gwtproject_dom_client_NativeEvent(this.m_getNativeEvent__());
 }
 
 m_dispatch__org_gwtproject_event_dom_client_MouseOverHandler(/** MouseOverHandler */ handler) {
  handler.m_onMouseOver__org_gwtproject_event_dom_client_MouseOverEvent(this);
 }
 //Bridge method.
 /** @override */
 m_dispatch__java_lang_Object(/** MouseOverHandler */ arg0) {
  this.m_dispatch__org_gwtproject_event_dom_client_MouseOverHandler(/**@type {MouseOverHandler}*/ ($Casts.$to(arg0, MouseOverHandler)));
 }
 
 static $clinit() {
  MouseOverEvent.$clinit = () =>{};
  MouseOverEvent.$loadModules();
  MouseEvent.$clinit();
  MouseOverEvent.f_TYPE__org_gwtproject_event_dom_client_MouseOverEvent_ = /**@type {!Type<MouseOverHandler>}*/ (Type.$create__java_lang_String__org_gwtproject_event_dom_client_DomEvent(BrowserEvents.f_MOUSEOVER__org_gwtproject_dom_client_BrowserEvents, MouseOverEvent.$create__()));
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof MouseOverEvent;
 }
 
 static $loadModules() {
  BrowserEvents = goog.module.get('org.gwtproject.dom.client.BrowserEvents$impl');
  $Overlay = goog.module.get('org.gwtproject.dom.client.NativeEvent.$Overlay$impl');
  Type = goog.module.get('org.gwtproject.event.dom.client.DomEvent.Type$impl');
  MouseOverHandler = goog.module.get('org.gwtproject.event.dom.client.MouseOverHandler$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
 
}
$Util.$setClassMetadata(MouseOverEvent, 'org.gwtproject.event.dom.client.MouseOverEvent');

/**@type {Type<MouseOverHandler>}*/
MouseOverEvent.f_TYPE__org_gwtproject_event_dom_client_MouseOverEvent_;

exports = MouseOverEvent; 
//# sourceMappingURL=MouseOverEvent.js.map
