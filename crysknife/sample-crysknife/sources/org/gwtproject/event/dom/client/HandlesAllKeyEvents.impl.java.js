goog.module('org.gwtproject.event.dom.client.HandlesAllKeyEvents$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const KeyDownHandler = goog.require('org.gwtproject.event.dom.client.KeyDownHandler$impl');
const KeyPressHandler = goog.require('org.gwtproject.event.dom.client.KeyPressHandler$impl');
const KeyUpHandler = goog.require('org.gwtproject.event.dom.client.KeyUpHandler$impl');

let HasAllKeyHandlers = goog.forwardDeclare('org.gwtproject.event.dom.client.HasAllKeyHandlers$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @abstract
 * @implements {KeyDownHandler}
 * @implements {KeyUpHandler}
 * @implements {KeyPressHandler}
  */
class HandlesAllKeyEvents extends j_l_Object {
 /** @protected */
 constructor() {
  super();
 }
 
 $ctor__org_gwtproject_event_dom_client_HandlesAllKeyEvents__() {
  this.$ctor__java_lang_Object__();
 }
 
 m_addKeyHandlersTo__org_gwtproject_event_dom_client_HasAllKeyHandlers(/** HasAllKeyHandlers */ source) {
  HandlesAllKeyEvents.m_addHandlers__org_gwtproject_event_dom_client_HasAllKeyHandlers__org_gwtproject_event_dom_client_KeyDownHandler(source, this);
 }
 /** @template H */
 static m_addHandlers__org_gwtproject_event_dom_client_HasAllKeyHandlers__org_gwtproject_event_dom_client_KeyDownHandler(/** HasAllKeyHandlers */ eventSource, /** H */ reciever) {
  HandlesAllKeyEvents.$clinit();
  eventSource.m_addKeyDownHandler__org_gwtproject_event_dom_client_KeyDownHandler(reciever);
  eventSource.m_addKeyPressHandler__org_gwtproject_event_dom_client_KeyPressHandler(/**@type {KeyPressHandler}*/ ($Casts.$to(reciever, KeyPressHandler)));
  eventSource.m_addKeyUpHandler__org_gwtproject_event_dom_client_KeyUpHandler(/**@type {KeyUpHandler}*/ ($Casts.$to(reciever, KeyUpHandler)));
 }
 
 static $clinit() {
  HandlesAllKeyEvents.$clinit = () =>{};
  HandlesAllKeyEvents.$loadModules();
  j_l_Object.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof HandlesAllKeyEvents;
 }
 
 static $loadModules() {
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
 
}
$Util.$setClassMetadata(HandlesAllKeyEvents, 'org.gwtproject.event.dom.client.HandlesAllKeyEvents');

KeyDownHandler.$markImplementor(HandlesAllKeyEvents);
KeyUpHandler.$markImplementor(HandlesAllKeyEvents);
KeyPressHandler.$markImplementor(HandlesAllKeyEvents);

exports = HandlesAllKeyEvents; 
//# sourceMappingURL=HandlesAllKeyEvents.js.map
