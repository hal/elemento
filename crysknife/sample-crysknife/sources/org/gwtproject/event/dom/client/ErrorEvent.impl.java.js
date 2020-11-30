goog.module('org.gwtproject.event.dom.client.ErrorEvent$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const DomEvent = goog.require('org.gwtproject.event.dom.client.DomEvent$impl');

let BrowserEvents = goog.forwardDeclare('org.gwtproject.dom.client.BrowserEvents$impl');
let Type = goog.forwardDeclare('org.gwtproject.event.dom.client.DomEvent.Type$impl');
let ErrorHandler = goog.forwardDeclare('org.gwtproject.event.dom.client.ErrorHandler$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @extends {DomEvent<ErrorHandler>}
  */
class ErrorEvent extends DomEvent {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!ErrorEvent} */
 static $create__() {
  ErrorEvent.$clinit();
  let $instance = new ErrorEvent();
  $instance.$ctor__org_gwtproject_event_dom_client_ErrorEvent__();
  return $instance;
 }
 
 $ctor__org_gwtproject_event_dom_client_ErrorEvent__() {
  this.$ctor__org_gwtproject_event_dom_client_DomEvent__();
 }
 /** @return {Type<ErrorHandler>} */
 static m_getType__() {
  ErrorEvent.$clinit();
  return ErrorEvent.f_TYPE__org_gwtproject_event_dom_client_ErrorEvent_;
 }
 /** @override @return {Type<ErrorHandler>} */
 m_getAssociatedType__() {
  return ErrorEvent.f_TYPE__org_gwtproject_event_dom_client_ErrorEvent_;
 }
 
 m_dispatch__org_gwtproject_event_dom_client_ErrorHandler(/** ErrorHandler */ handler) {
  handler.m_onError__org_gwtproject_event_dom_client_ErrorEvent(this);
 }
 //Bridge method.
 /** @override */
 m_dispatch__java_lang_Object(/** ErrorHandler */ arg0) {
  this.m_dispatch__org_gwtproject_event_dom_client_ErrorHandler(/**@type {ErrorHandler}*/ ($Casts.$to(arg0, ErrorHandler)));
 }
 
 static $clinit() {
  ErrorEvent.$clinit = () =>{};
  ErrorEvent.$loadModules();
  DomEvent.$clinit();
  ErrorEvent.f_TYPE__org_gwtproject_event_dom_client_ErrorEvent_ = /**@type {!Type<ErrorHandler>}*/ (Type.$create__java_lang_String__org_gwtproject_event_dom_client_DomEvent(BrowserEvents.f_ERROR__org_gwtproject_dom_client_BrowserEvents, ErrorEvent.$create__()));
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof ErrorEvent;
 }
 
 static $loadModules() {
  BrowserEvents = goog.module.get('org.gwtproject.dom.client.BrowserEvents$impl');
  Type = goog.module.get('org.gwtproject.event.dom.client.DomEvent.Type$impl');
  ErrorHandler = goog.module.get('org.gwtproject.event.dom.client.ErrorHandler$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
 
}
$Util.$setClassMetadata(ErrorEvent, 'org.gwtproject.event.dom.client.ErrorEvent');

/**@type {Type<ErrorHandler>}*/
ErrorEvent.f_TYPE__org_gwtproject_event_dom_client_ErrorEvent_;

exports = ErrorEvent; 
//# sourceMappingURL=ErrorEvent.js.map
