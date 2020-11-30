goog.module('org.gwtproject.event.dom.client.DomEvent$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const HasNativeEvent = goog.require('org.gwtproject.event.dom.client.HasNativeEvent$impl');
const Event = goog.require('org.gwtproject.event.shared.Event$impl');

let List = goog.forwardDeclare('java.util.List$impl');
let Js = goog.forwardDeclare('jsinterop.base.Js$impl');
let $Overlay = goog.forwardDeclare('jsinterop.base.JsPropertyMap.$Overlay$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let Element_$Overlay = goog.forwardDeclare('org.gwtproject.dom.client.Element.$Overlay$impl');
let NativeEvent_$Overlay = goog.forwardDeclare('org.gwtproject.dom.client.NativeEvent.$Overlay$impl');
let Type = goog.forwardDeclare('org.gwtproject.event.dom.client.DomEvent.Type$impl');
let EventHandler = goog.forwardDeclare('org.gwtproject.event.legacy.shared.EventHandler$impl');
let HasHandlers = goog.forwardDeclare('org.gwtproject.event.shared.HasHandlers$impl');
let $Asserts = goog.forwardDeclare('vmbootstrap.Asserts$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @abstract
 * @template H
 * @extends {Event<H>}
 * @implements {HasNativeEvent}
  */
class DomEvent extends Event {
 /** @protected */
 constructor() {
  super();
  /**@type {Object}*/
  this.f_nativeEvent__org_gwtproject_event_dom_client_DomEvent_;
  /**@type {Object}*/
  this.f_relativeElem__org_gwtproject_event_dom_client_DomEvent_;
 }
 
 $ctor__org_gwtproject_event_dom_client_DomEvent__() {
  this.$ctor__org_gwtproject_event_shared_Event__();
 }
 
 static m_fireNativeEvent__org_gwtproject_dom_client_NativeEvent__org_gwtproject_event_shared_HasHandlers(/** Object */ nativeEvent, /** HasHandlers */ handlerSource) {
  DomEvent.$clinit();
  DomEvent.m_fireNativeEvent__org_gwtproject_dom_client_NativeEvent__org_gwtproject_event_shared_HasHandlers__org_gwtproject_dom_client_Element(nativeEvent, handlerSource, null);
 }
 
 static m_fireNativeEvent__org_gwtproject_dom_client_NativeEvent__org_gwtproject_event_shared_HasHandlers__org_gwtproject_dom_client_Element(/** Object */ nativeEvent, /** HasHandlers */ handlerSource, /** Object */ relativeElem) {
  DomEvent.$clinit();
  $Asserts.$assertWithMessage(!$Equality.$same(nativeEvent, null), "nativeEvent must not be null");
  if (!$Equality.$same(DomEvent.$f_registered__org_gwtproject_event_dom_client_DomEvent_, null)) {
   let types = /**@type {List<Type<?>>}*/ ($Casts.$to($Overlay.m_get__$devirt__jsinterop_base_JsPropertyMap__java_lang_String(DomEvent.$f_registered__org_gwtproject_event_dom_client_DomEvent_, NativeEvent_$Overlay.m_getType__$devirt__org_gwtproject_dom_client_NativeEvent(nativeEvent)), List));
   if (!$Equality.$same(types, null)) {
    for (let $iterator = types.m_iterator__(); $iterator.m_hasNext__(); ) {
     let type = /**@type {Type<EventHandler>}*/ ($Casts.$to($iterator.m_next__(), Type));
     let currentNative = type.f_flyweight__org_gwtproject_event_dom_client_DomEvent_Type_.f_nativeEvent__org_gwtproject_event_dom_client_DomEvent_;
     let currentRelativeElem = type.f_flyweight__org_gwtproject_event_dom_client_DomEvent_Type_.f_relativeElem__org_gwtproject_event_dom_client_DomEvent_;
     type.f_flyweight__org_gwtproject_event_dom_client_DomEvent_Type_.m_setNativeEvent__org_gwtproject_dom_client_NativeEvent(nativeEvent);
     type.f_flyweight__org_gwtproject_event_dom_client_DomEvent_Type_.m_setRelativeElement__org_gwtproject_dom_client_Element(relativeElem);
     handlerSource.m_fireEvent__org_gwtproject_event_shared_Event(type.f_flyweight__org_gwtproject_event_dom_client_DomEvent_Type_);
     type.f_flyweight__org_gwtproject_event_dom_client_DomEvent_Type_.m_setNativeEvent__org_gwtproject_dom_client_NativeEvent(currentNative);
     type.f_flyweight__org_gwtproject_event_dom_client_DomEvent_Type_.m_setRelativeElement__org_gwtproject_dom_client_Element(currentRelativeElem);
    }
   }
  }
 }
 
 static m_init__() {
  DomEvent.$clinit();
  DomEvent.$f_registered__org_gwtproject_event_dom_client_DomEvent_ = /**@type {Object<string, List<Type<?>>>}*/ (Js.m_uncheckedCast__java_lang_Object($Overlay.m_of__()));
 }
 /** @abstract @override @return {Type<H>} */
 m_getAssociatedType__() {}
 /** @override @return {Object} */
 m_getNativeEvent__() {
  return this.f_nativeEvent__org_gwtproject_event_dom_client_DomEvent_;
 }
 
 m_setNativeEvent__org_gwtproject_dom_client_NativeEvent(/** Object */ nativeEvent) {
  this.f_nativeEvent__org_gwtproject_event_dom_client_DomEvent_ = nativeEvent;
 }
 /** @return {Object} */
 m_getRelativeElement__() {
  return this.f_relativeElem__org_gwtproject_event_dom_client_DomEvent_;
 }
 
 m_setRelativeElement__org_gwtproject_dom_client_Element(/** Object */ relativeElem) {
  this.f_relativeElem__org_gwtproject_event_dom_client_DomEvent_ = relativeElem;
 }
 
 m_preventDefault__() {
  NativeEvent_$Overlay.m_preventDefault__$devirt__org_gwtproject_dom_client_NativeEvent(this.f_nativeEvent__org_gwtproject_event_dom_client_DomEvent_);
 }
 
 m_stopPropagation__() {
  NativeEvent_$Overlay.m_stopPropagation__$devirt__org_gwtproject_dom_client_NativeEvent(this.f_nativeEvent__org_gwtproject_event_dom_client_DomEvent_);
 }
 /** @return {Object<string, List<Type<?>>>} */
 static get f_registered__org_gwtproject_event_dom_client_DomEvent_() {
  return (DomEvent.$clinit(), DomEvent.$f_registered__org_gwtproject_event_dom_client_DomEvent_);
 }
 
 static set f_registered__org_gwtproject_event_dom_client_DomEvent_(/** Object<string, List<Type<?>>> */ value) {
  (DomEvent.$clinit(), DomEvent.$f_registered__org_gwtproject_event_dom_client_DomEvent_ = value);
 }
 
 static $clinit() {
  DomEvent.$clinit = () =>{};
  DomEvent.$loadModules();
  Event.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof DomEvent;
 }
 
 static $loadModules() {
  List = goog.module.get('java.util.List$impl');
  Js = goog.module.get('jsinterop.base.Js$impl');
  $Overlay = goog.module.get('jsinterop.base.JsPropertyMap.$Overlay$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  NativeEvent_$Overlay = goog.module.get('org.gwtproject.dom.client.NativeEvent.$Overlay$impl');
  Type = goog.module.get('org.gwtproject.event.dom.client.DomEvent.Type$impl');
  $Asserts = goog.module.get('vmbootstrap.Asserts$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
 
}
$Util.$setClassMetadata(DomEvent, 'org.gwtproject.event.dom.client.DomEvent');

HasNativeEvent.$markImplementor(DomEvent);

/**@private {Object<string, List<Type<?>>>}*/
DomEvent.$f_registered__org_gwtproject_event_dom_client_DomEvent_;

exports = DomEvent; 
//# sourceMappingURL=DomEvent.js.map
