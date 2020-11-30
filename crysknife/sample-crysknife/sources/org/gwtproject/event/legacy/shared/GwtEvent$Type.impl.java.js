goog.module('org.gwtproject.event.legacy.shared.GwtEvent.Type$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const Type = goog.require('org.gwtproject.event.shared.Event.Type$impl');

/**
 * @template H
 * @deprecated
 * @extends {Type<H>}
  */
class GwtEvent_Type extends Type {
 /** @protected */
 constructor() {
  super();
 }
 /** @template H @return {!GwtEvent_Type<H>} */
 static $create__() {
  GwtEvent_Type.$clinit();
  let $instance = new GwtEvent_Type();
  $instance.$ctor__org_gwtproject_event_legacy_shared_GwtEvent_Type__();
  return $instance;
 }
 
 $ctor__org_gwtproject_event_legacy_shared_GwtEvent_Type__() {
  this.$ctor__org_gwtproject_event_shared_Event_Type__();
 }
 
 static $clinit() {
  GwtEvent_Type.$clinit = () =>{};
  GwtEvent_Type.$loadModules();
  Type.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof GwtEvent_Type;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadata(GwtEvent_Type, 'org.gwtproject.event.legacy.shared.GwtEvent$Type');

exports = GwtEvent_Type; 
//# sourceMappingURL=GwtEvent$Type.js.map
