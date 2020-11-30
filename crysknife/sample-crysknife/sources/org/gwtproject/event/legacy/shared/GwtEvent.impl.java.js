goog.module('org.gwtproject.event.legacy.shared.GwtEvent$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const Event = goog.require('org.gwtproject.event.shared.Event$impl');

let Class = goog.forwardDeclare('java.lang.Class$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let Logger = goog.forwardDeclare('java.util.logging.Logger$impl');
let Type = goog.forwardDeclare('org.gwtproject.event.legacy.shared.GwtEvent.Type$impl');

/**
 * @abstract
 * @template H
 * @deprecated
 * @extends {Event<H>}
  */
class GwtEvent extends Event {
 /** @protected */
 constructor() {
  super();
 }
 
 $ctor__org_gwtproject_event_legacy_shared_GwtEvent__() {
  this.$ctor__org_gwtproject_event_shared_Event__();
 }
 /** @abstract @override @return {Type<H>} */
 m_getAssociatedType__() {}
 
 m_assertLive__() {
  this.m_logDeprecation__java_lang_String_$p_org_gwtproject_event_legacy_shared_GwtEvent("assertLive is a no-op, and doesn't exist in Event.");
 }
 /** @return {boolean} */
 m_isLive__() {
  this.m_logDeprecation__java_lang_String_$p_org_gwtproject_event_legacy_shared_GwtEvent("isLive always returns true, and doesn't exist in Event.");
  return true;
 }
 
 m_kill__() {
  this.m_logDeprecation__java_lang_String_$p_org_gwtproject_event_legacy_shared_GwtEvent("kill only resets the event's source, and doesn't exist in Event.");
  this.m_setSource__java_lang_Object(null);
 }
 
 m_revive__() {
  this.m_logDeprecation__java_lang_String_$p_org_gwtproject_event_legacy_shared_GwtEvent("revive only resets the event's source, and doesn't exist in Event.");
  this.m_setSource__java_lang_Object(null);
 }
 
 m_overrideSource__java_lang_Object_$pp_org_gwtproject_event_legacy_shared(/** * */ source) {
  super.m_setSource__java_lang_Object(source);
 }
 
 m_logDeprecation__java_lang_String_$p_org_gwtproject_event_legacy_shared_GwtEvent(/** ?string */ msg) {
  GwtEvent.f_LOGGER__org_gwtproject_event_legacy_shared_GwtEvent_.m_warning__java_lang_String("GwtEvent is deprecated; please migrate to Event. " + j_l_String.m_valueOf__java_lang_Object(msg));
 }
 
 static $clinit() {
  GwtEvent.$clinit = () =>{};
  GwtEvent.$loadModules();
  Event.$clinit();
  GwtEvent.f_LOGGER__org_gwtproject_event_legacy_shared_GwtEvent_ = Logger.m_getLogger__java_lang_String(Class.$get(GwtEvent).m_getName__());
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof GwtEvent;
 }
 
 static $loadModules() {
  Class = goog.module.get('java.lang.Class$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  Logger = goog.module.get('java.util.logging.Logger$impl');
 }
 
}
$Util.$setClassMetadata(GwtEvent, 'org.gwtproject.event.legacy.shared.GwtEvent');

/**@type {Logger}*/
GwtEvent.f_LOGGER__org_gwtproject_event_legacy_shared_GwtEvent_;

exports = GwtEvent; 
//# sourceMappingURL=GwtEvent.js.map
