goog.module('org.gwtproject.event.dom.client.HasAllMouseHandlers$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const HasMouseDownHandlers = goog.require('org.gwtproject.event.dom.client.HasMouseDownHandlers$impl');
const HasMouseMoveHandlers = goog.require('org.gwtproject.event.dom.client.HasMouseMoveHandlers$impl');
const HasMouseOutHandlers = goog.require('org.gwtproject.event.dom.client.HasMouseOutHandlers$impl');
const HasMouseOverHandlers = goog.require('org.gwtproject.event.dom.client.HasMouseOverHandlers$impl');
const HasMouseUpHandlers = goog.require('org.gwtproject.event.dom.client.HasMouseUpHandlers$impl');
const HasMouseWheelHandlers = goog.require('org.gwtproject.event.dom.client.HasMouseWheelHandlers$impl');

/**
 * @interface
 * @extends {HasMouseDownHandlers}
 * @extends {HasMouseUpHandlers}
 * @extends {HasMouseOutHandlers}
 * @extends {HasMouseOverHandlers}
 * @extends {HasMouseMoveHandlers}
 * @extends {HasMouseWheelHandlers}
 */
class HasAllMouseHandlers {
 
 static $clinit() {
  HasAllMouseHandlers.$clinit = () =>{};
  HasAllMouseHandlers.$loadModules();
 }
 
 static $markImplementor(/** Function*/ ctor)
 {
  HasMouseDownHandlers.$markImplementor(ctor);
  HasMouseUpHandlers.$markImplementor(ctor);
  HasMouseOutHandlers.$markImplementor(ctor);
  HasMouseOverHandlers.$markImplementor(ctor);
  HasMouseMoveHandlers.$markImplementor(ctor);
  HasMouseWheelHandlers.$markImplementor(ctor);
  ctor.prototype.$implements__org_gwtproject_event_dom_client_HasAllMouseHandlers = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_gwtproject_event_dom_client_HasAllMouseHandlers;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(HasAllMouseHandlers, 'org.gwtproject.event.dom.client.HasAllMouseHandlers');

HasAllMouseHandlers.$markImplementor(/** @type {Function} */ (HasAllMouseHandlers));

exports = HasAllMouseHandlers; 
//# sourceMappingURL=HasAllMouseHandlers.js.map
