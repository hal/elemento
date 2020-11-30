goog.module('io.crysknife.client.internal.AbstractEventFactory.EventHolder$impl');

const AbstractEventHandler = goog.require('io.crysknife.client.internal.AbstractEventHandler$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let AbstractEventFactory = goog.forwardDeclare('io.crysknife.client.internal.AbstractEventFactory$impl');
let Class = goog.forwardDeclare('java.lang.Class$impl');

class EventHolder extends AbstractEventHandler {
 /** @protected */
 constructor() {
  super();
  /**@type {AbstractEventFactory}*/
  this.f_$outer_this__io_crysknife_client_internal_AbstractEventFactory_EventHolder;
  /**@type {Class}*/
  this.f_type__io_crysknife_client_internal_AbstractEventFactory_EventHolder_;
 }
 /** @return {!EventHolder} */
 static $create__io_crysknife_client_internal_AbstractEventFactory__java_lang_Class(/** AbstractEventFactory */ $outer_this, /** Class */ type) {
  EventHolder.$clinit();
  let $instance = new EventHolder();
  $instance.$ctor__io_crysknife_client_internal_AbstractEventFactory_EventHolder__io_crysknife_client_internal_AbstractEventFactory__java_lang_Class($outer_this, type);
  return $instance;
 }
 
 $ctor__io_crysknife_client_internal_AbstractEventFactory_EventHolder__io_crysknife_client_internal_AbstractEventFactory__java_lang_Class(/** AbstractEventFactory */ $outer_this, /** Class */ type) {
  this.f_$outer_this__io_crysknife_client_internal_AbstractEventFactory_EventHolder = $outer_this;
  this.$ctor__io_crysknife_client_internal_AbstractEventHandler__();
  this.f_type__io_crysknife_client_internal_AbstractEventFactory_EventHolder_ = type;
 }
 
 static $clinit() {
  EventHolder.$clinit = () =>{};
  EventHolder.$loadModules();
  AbstractEventHandler.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof EventHolder;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadata(EventHolder, 'io.crysknife.client.internal.AbstractEventFactory$EventHolder');

exports = EventHolder; 
//# sourceMappingURL=AbstractEventFactory$EventHolder.js.map
