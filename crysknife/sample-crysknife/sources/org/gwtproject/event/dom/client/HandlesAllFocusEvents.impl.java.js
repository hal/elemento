goog.module('org.gwtproject.event.dom.client.HandlesAllFocusEvents$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const BlurHandler = goog.require('org.gwtproject.event.dom.client.BlurHandler$impl');
const FocusHandler = goog.require('org.gwtproject.event.dom.client.FocusHandler$impl');

let HasAllFocusHandlers = goog.forwardDeclare('org.gwtproject.event.dom.client.HasAllFocusHandlers$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @abstract
 * @implements {FocusHandler}
 * @implements {BlurHandler}
  */
class HandlesAllFocusEvents extends j_l_Object {
 /** @protected */
 constructor() {
  super();
 }
 
 $ctor__org_gwtproject_event_dom_client_HandlesAllFocusEvents__() {
  this.$ctor__java_lang_Object__();
 }
 
 m_handle__org_gwtproject_event_dom_client_HasAllFocusHandlers(/** HasAllFocusHandlers */ source) {
  HandlesAllFocusEvents.m_handle__org_gwtproject_event_dom_client_HasAllFocusHandlers__org_gwtproject_event_dom_client_BlurHandler(source, this);
 }
 /** @template H */
 static m_handle__org_gwtproject_event_dom_client_HasAllFocusHandlers__org_gwtproject_event_dom_client_BlurHandler(/** HasAllFocusHandlers */ eventSource, /** H */ reciever) {
  HandlesAllFocusEvents.$clinit();
  eventSource.m_addBlurHandler__org_gwtproject_event_dom_client_BlurHandler(reciever);
  eventSource.m_addFocusHandler__org_gwtproject_event_dom_client_FocusHandler(/**@type {FocusHandler}*/ ($Casts.$to(reciever, FocusHandler)));
 }
 
 static $clinit() {
  HandlesAllFocusEvents.$clinit = () =>{};
  HandlesAllFocusEvents.$loadModules();
  j_l_Object.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof HandlesAllFocusEvents;
 }
 
 static $loadModules() {
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
 
}
$Util.$setClassMetadata(HandlesAllFocusEvents, 'org.gwtproject.event.dom.client.HandlesAllFocusEvents');

FocusHandler.$markImplementor(HandlesAllFocusEvents);
BlurHandler.$markImplementor(HandlesAllFocusEvents);

exports = HandlesAllFocusEvents; 
//# sourceMappingURL=HandlesAllFocusEvents.js.map
