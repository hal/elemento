goog.module('org.gwtproject.event.dom.client.DomEvent.Type$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const Type = goog.require('org.gwtproject.event.shared.Event.Type$impl');

let ArrayList = goog.forwardDeclare('java.util.ArrayList$impl');
let List = goog.forwardDeclare('java.util.List$impl');
let $Overlay = goog.forwardDeclare('jsinterop.base.JsPropertyMap.$Overlay$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let DomEvent = goog.forwardDeclare('org.gwtproject.event.dom.client.DomEvent$impl');
let EventHandler = goog.forwardDeclare('org.gwtproject.event.legacy.shared.EventHandler$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @template H
 * @extends {Type<H>}
  */
class DomEvent_Type extends Type {
 /** @protected */
 constructor() {
  super();
  /**@type {DomEvent<H>}*/
  this.f_flyweight__org_gwtproject_event_dom_client_DomEvent_Type_;
  /**@type {?string}*/
  this.f_name__org_gwtproject_event_dom_client_DomEvent_Type_;
 }
 /** @template H @return {!DomEvent_Type<H>} */
 static $create__java_lang_String__org_gwtproject_event_dom_client_DomEvent(/** ?string */ eventName, /** DomEvent<H> */ flyweight) {
  DomEvent_Type.$clinit();
  let $instance = new DomEvent_Type();
  $instance.$ctor__org_gwtproject_event_dom_client_DomEvent_Type__java_lang_String__org_gwtproject_event_dom_client_DomEvent(eventName, flyweight);
  return $instance;
 }
 
 $ctor__org_gwtproject_event_dom_client_DomEvent_Type__java_lang_String__org_gwtproject_event_dom_client_DomEvent(/** ?string */ eventName, /** DomEvent<H> */ flyweight) {
  this.$ctor__org_gwtproject_event_shared_Event_Type__();
  this.f_flyweight__org_gwtproject_event_dom_client_DomEvent_Type_ = flyweight;
  if ($Equality.$same(DomEvent.f_registered__org_gwtproject_event_dom_client_DomEvent_, null)) {
   DomEvent.m_init__();
  }
  let types = /**@type {List<DomEvent_Type<?>>}*/ ($Casts.$to($Overlay.m_get__$devirt__jsinterop_base_JsPropertyMap__java_lang_String(DomEvent.f_registered__org_gwtproject_event_dom_client_DomEvent_, eventName), List));
  if ($Equality.$same(types, null)) {
   types = /**@type {!ArrayList<DomEvent_Type<?>>}*/ (ArrayList.$create__());
   $Overlay.m_set__$devirt__jsinterop_base_JsPropertyMap__java_lang_String__java_lang_Object(DomEvent.f_registered__org_gwtproject_event_dom_client_DomEvent_, eventName, types);
  }
  types.add(this);
  this.f_name__org_gwtproject_event_dom_client_DomEvent_Type_ = eventName;
 }
 /** @return {?string} */
 m_getName__() {
  return this.f_name__org_gwtproject_event_dom_client_DomEvent_Type_;
 }
 
 static $clinit() {
  DomEvent_Type.$clinit = () =>{};
  DomEvent_Type.$loadModules();
  Type.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof DomEvent_Type;
 }
 
 static $loadModules() {
  ArrayList = goog.module.get('java.util.ArrayList$impl');
  List = goog.module.get('java.util.List$impl');
  $Overlay = goog.module.get('jsinterop.base.JsPropertyMap.$Overlay$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  DomEvent = goog.module.get('org.gwtproject.event.dom.client.DomEvent$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
 
}
$Util.$setClassMetadata(DomEvent_Type, 'org.gwtproject.event.dom.client.DomEvent$Type');

exports = DomEvent_Type; 
//# sourceMappingURL=DomEvent$Type.js.map
