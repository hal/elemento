goog.module('org.gwtproject.event.dom.client.HandlesAllTouchEvents$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const TouchCancelHandler = goog.require('org.gwtproject.event.dom.client.TouchCancelHandler$impl');
const TouchEndHandler = goog.require('org.gwtproject.event.dom.client.TouchEndHandler$impl');
const TouchMoveHandler = goog.require('org.gwtproject.event.dom.client.TouchMoveHandler$impl');
const TouchStartHandler = goog.require('org.gwtproject.event.dom.client.TouchStartHandler$impl');

let HasAllTouchHandlers = goog.forwardDeclare('org.gwtproject.event.dom.client.HasAllTouchHandlers$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @abstract
 * @implements {TouchStartHandler}
 * @implements {TouchMoveHandler}
 * @implements {TouchEndHandler}
 * @implements {TouchCancelHandler}
  */
class HandlesAllTouchEvents extends j_l_Object {
 /** @protected */
 constructor() {
  super();
 }
 
 $ctor__org_gwtproject_event_dom_client_HandlesAllTouchEvents__() {
  this.$ctor__java_lang_Object__();
 }
 
 m_handle__org_gwtproject_event_dom_client_HasAllTouchHandlers(/** HasAllTouchHandlers */ eventSource) {
  HandlesAllTouchEvents.m_handle__org_gwtproject_event_dom_client_HasAllTouchHandlers__org_gwtproject_event_dom_client_TouchStartHandler(eventSource, this);
 }
 /** @template H */
 static m_handle__org_gwtproject_event_dom_client_HasAllTouchHandlers__org_gwtproject_event_dom_client_TouchStartHandler(/** HasAllTouchHandlers */ source, /** H */ reciever) {
  HandlesAllTouchEvents.$clinit();
  source.m_addTouchStartHandler__org_gwtproject_event_dom_client_TouchStartHandler(reciever);
  source.m_addTouchMoveHandler__org_gwtproject_event_dom_client_TouchMoveHandler(/**@type {TouchMoveHandler}*/ ($Casts.$to(reciever, TouchMoveHandler)));
  source.m_addTouchEndHandler__org_gwtproject_event_dom_client_TouchEndHandler(/**@type {TouchEndHandler}*/ ($Casts.$to(reciever, TouchEndHandler)));
  source.m_addTouchCancelHandler__org_gwtproject_event_dom_client_TouchCancelHandler(/**@type {TouchCancelHandler}*/ ($Casts.$to(reciever, TouchCancelHandler)));
 }
 
 static $clinit() {
  HandlesAllTouchEvents.$clinit = () =>{};
  HandlesAllTouchEvents.$loadModules();
  j_l_Object.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof HandlesAllTouchEvents;
 }
 
 static $loadModules() {
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
 
}
$Util.$setClassMetadata(HandlesAllTouchEvents, 'org.gwtproject.event.dom.client.HandlesAllTouchEvents');

TouchStartHandler.$markImplementor(HandlesAllTouchEvents);
TouchMoveHandler.$markImplementor(HandlesAllTouchEvents);
TouchEndHandler.$markImplementor(HandlesAllTouchEvents);
TouchCancelHandler.$markImplementor(HandlesAllTouchEvents);

exports = HandlesAllTouchEvents; 
//# sourceMappingURL=HandlesAllTouchEvents.js.map
