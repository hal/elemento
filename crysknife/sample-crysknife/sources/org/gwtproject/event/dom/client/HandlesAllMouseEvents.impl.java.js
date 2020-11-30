goog.module('org.gwtproject.event.dom.client.HandlesAllMouseEvents$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const MouseDownHandler = goog.require('org.gwtproject.event.dom.client.MouseDownHandler$impl');
const MouseMoveHandler = goog.require('org.gwtproject.event.dom.client.MouseMoveHandler$impl');
const MouseOutHandler = goog.require('org.gwtproject.event.dom.client.MouseOutHandler$impl');
const MouseOverHandler = goog.require('org.gwtproject.event.dom.client.MouseOverHandler$impl');
const MouseUpHandler = goog.require('org.gwtproject.event.dom.client.MouseUpHandler$impl');
const MouseWheelHandler = goog.require('org.gwtproject.event.dom.client.MouseWheelHandler$impl');

let HasAllMouseHandlers = goog.forwardDeclare('org.gwtproject.event.dom.client.HasAllMouseHandlers$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @abstract
 * @implements {MouseDownHandler}
 * @implements {MouseUpHandler}
 * @implements {MouseMoveHandler}
 * @implements {MouseOutHandler}
 * @implements {MouseOverHandler}
 * @implements {MouseWheelHandler}
  */
class HandlesAllMouseEvents extends j_l_Object {
 /** @protected */
 constructor() {
  super();
 }
 
 $ctor__org_gwtproject_event_dom_client_HandlesAllMouseEvents__() {
  this.$ctor__java_lang_Object__();
 }
 
 m_handle__org_gwtproject_event_dom_client_HasAllMouseHandlers(/** HasAllMouseHandlers */ eventSource) {
  HandlesAllMouseEvents.m_handle__org_gwtproject_event_dom_client_HasAllMouseHandlers__org_gwtproject_event_dom_client_MouseDownHandler(eventSource, this);
 }
 /** @template H */
 static m_handle__org_gwtproject_event_dom_client_HasAllMouseHandlers__org_gwtproject_event_dom_client_MouseDownHandler(/** HasAllMouseHandlers */ source, /** H */ reciever) {
  HandlesAllMouseEvents.$clinit();
  source.m_addMouseDownHandler__org_gwtproject_event_dom_client_MouseDownHandler(reciever);
  source.m_addMouseUpHandler__org_gwtproject_event_dom_client_MouseUpHandler(/**@type {MouseUpHandler}*/ ($Casts.$to(reciever, MouseUpHandler)));
  source.m_addMouseOutHandler__org_gwtproject_event_dom_client_MouseOutHandler(/**@type {MouseOutHandler}*/ ($Casts.$to(reciever, MouseOutHandler)));
  source.m_addMouseOverHandler__org_gwtproject_event_dom_client_MouseOverHandler(/**@type {MouseOverHandler}*/ ($Casts.$to(reciever, MouseOverHandler)));
  source.m_addMouseMoveHandler__org_gwtproject_event_dom_client_MouseMoveHandler(/**@type {MouseMoveHandler}*/ ($Casts.$to(reciever, MouseMoveHandler)));
  source.m_addMouseWheelHandler__org_gwtproject_event_dom_client_MouseWheelHandler(/**@type {MouseWheelHandler}*/ ($Casts.$to(reciever, MouseWheelHandler)));
 }
 
 static $clinit() {
  HandlesAllMouseEvents.$clinit = () =>{};
  HandlesAllMouseEvents.$loadModules();
  j_l_Object.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof HandlesAllMouseEvents;
 }
 
 static $loadModules() {
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
 
}
$Util.$setClassMetadata(HandlesAllMouseEvents, 'org.gwtproject.event.dom.client.HandlesAllMouseEvents');

MouseDownHandler.$markImplementor(HandlesAllMouseEvents);
MouseUpHandler.$markImplementor(HandlesAllMouseEvents);
MouseMoveHandler.$markImplementor(HandlesAllMouseEvents);
MouseOutHandler.$markImplementor(HandlesAllMouseEvents);
MouseOverHandler.$markImplementor(HandlesAllMouseEvents);
MouseWheelHandler.$markImplementor(HandlesAllMouseEvents);

exports = HandlesAllMouseEvents; 
//# sourceMappingURL=HandlesAllMouseEvents.js.map
