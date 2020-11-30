goog.module('org.gwtproject.event.dom.client.MouseUpEvent$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const MouseEvent = goog.require('org.gwtproject.event.dom.client.MouseEvent$impl');

let BrowserEvents = goog.forwardDeclare('org.gwtproject.dom.client.BrowserEvents$impl');
let Type = goog.forwardDeclare('org.gwtproject.event.dom.client.DomEvent.Type$impl');
let MouseUpHandler = goog.forwardDeclare('org.gwtproject.event.dom.client.MouseUpHandler$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @extends {MouseEvent<MouseUpHandler>}
  */
class MouseUpEvent extends MouseEvent {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!MouseUpEvent} */
 static $create__() {
  MouseUpEvent.$clinit();
  let $instance = new MouseUpEvent();
  $instance.$ctor__org_gwtproject_event_dom_client_MouseUpEvent__();
  return $instance;
 }
 
 $ctor__org_gwtproject_event_dom_client_MouseUpEvent__() {
  this.$ctor__org_gwtproject_event_dom_client_MouseEvent__();
 }
 /** @return {Type<MouseUpHandler>} */
 static m_getType__() {
  MouseUpEvent.$clinit();
  return MouseUpEvent.f_TYPE__org_gwtproject_event_dom_client_MouseUpEvent_;
 }
 /** @override @return {Type<MouseUpHandler>} */
 m_getAssociatedType__() {
  return MouseUpEvent.f_TYPE__org_gwtproject_event_dom_client_MouseUpEvent_;
 }
 
 m_dispatch__org_gwtproject_event_dom_client_MouseUpHandler(/** MouseUpHandler */ handler) {
  handler.m_onMouseUp__org_gwtproject_event_dom_client_MouseUpEvent(this);
 }
 //Bridge method.
 /** @override */
 m_dispatch__java_lang_Object(/** MouseUpHandler */ arg0) {
  this.m_dispatch__org_gwtproject_event_dom_client_MouseUpHandler(/**@type {MouseUpHandler}*/ ($Casts.$to(arg0, MouseUpHandler)));
 }
 
 static $clinit() {
  MouseUpEvent.$clinit = () =>{};
  MouseUpEvent.$loadModules();
  MouseEvent.$clinit();
  MouseUpEvent.f_TYPE__org_gwtproject_event_dom_client_MouseUpEvent_ = /**@type {!Type<MouseUpHandler>}*/ (Type.$create__java_lang_String__org_gwtproject_event_dom_client_DomEvent(BrowserEvents.f_MOUSEUP__org_gwtproject_dom_client_BrowserEvents, MouseUpEvent.$create__()));
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof MouseUpEvent;
 }
 
 static $loadModules() {
  BrowserEvents = goog.module.get('org.gwtproject.dom.client.BrowserEvents$impl');
  Type = goog.module.get('org.gwtproject.event.dom.client.DomEvent.Type$impl');
  MouseUpHandler = goog.module.get('org.gwtproject.event.dom.client.MouseUpHandler$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
 
}
$Util.$setClassMetadata(MouseUpEvent, 'org.gwtproject.event.dom.client.MouseUpEvent');

/**@type {Type<MouseUpHandler>}*/
MouseUpEvent.f_TYPE__org_gwtproject_event_dom_client_MouseUpEvent_;

exports = MouseUpEvent; 
//# sourceMappingURL=MouseUpEvent.js.map
