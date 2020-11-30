goog.module('org.gwtproject.event.dom.client.LoadedMetadataEvent$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const DomEvent = goog.require('org.gwtproject.event.dom.client.DomEvent$impl');

let BrowserEvents = goog.forwardDeclare('org.gwtproject.dom.client.BrowserEvents$impl');
let Type = goog.forwardDeclare('org.gwtproject.event.dom.client.DomEvent.Type$impl');
let LoadedMetadataHandler = goog.forwardDeclare('org.gwtproject.event.dom.client.LoadedMetadataHandler$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @extends {DomEvent<LoadedMetadataHandler>}
  */
class LoadedMetadataEvent extends DomEvent {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!LoadedMetadataEvent} */
 static $create__() {
  LoadedMetadataEvent.$clinit();
  let $instance = new LoadedMetadataEvent();
  $instance.$ctor__org_gwtproject_event_dom_client_LoadedMetadataEvent__();
  return $instance;
 }
 
 $ctor__org_gwtproject_event_dom_client_LoadedMetadataEvent__() {
  this.$ctor__org_gwtproject_event_dom_client_DomEvent__();
 }
 /** @return {Type<LoadedMetadataHandler>} */
 static m_getType__() {
  LoadedMetadataEvent.$clinit();
  return LoadedMetadataEvent.f_TYPE__org_gwtproject_event_dom_client_LoadedMetadataEvent_;
 }
 /** @override @return {Type<LoadedMetadataHandler>} */
 m_getAssociatedType__() {
  return LoadedMetadataEvent.f_TYPE__org_gwtproject_event_dom_client_LoadedMetadataEvent_;
 }
 
 m_dispatch__org_gwtproject_event_dom_client_LoadedMetadataHandler(/** LoadedMetadataHandler */ handler) {
  handler.m_onLoadedMetadata__org_gwtproject_event_dom_client_LoadedMetadataEvent(this);
 }
 //Bridge method.
 /** @override */
 m_dispatch__java_lang_Object(/** LoadedMetadataHandler */ arg0) {
  this.m_dispatch__org_gwtproject_event_dom_client_LoadedMetadataHandler(/**@type {LoadedMetadataHandler}*/ ($Casts.$to(arg0, LoadedMetadataHandler)));
 }
 
 static $clinit() {
  LoadedMetadataEvent.$clinit = () =>{};
  LoadedMetadataEvent.$loadModules();
  DomEvent.$clinit();
  LoadedMetadataEvent.f_TYPE__org_gwtproject_event_dom_client_LoadedMetadataEvent_ = /**@type {!Type<LoadedMetadataHandler>}*/ (Type.$create__java_lang_String__org_gwtproject_event_dom_client_DomEvent(BrowserEvents.f_LOADEDMETADATA__org_gwtproject_dom_client_BrowserEvents, LoadedMetadataEvent.$create__()));
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof LoadedMetadataEvent;
 }
 
 static $loadModules() {
  BrowserEvents = goog.module.get('org.gwtproject.dom.client.BrowserEvents$impl');
  Type = goog.module.get('org.gwtproject.event.dom.client.DomEvent.Type$impl');
  LoadedMetadataHandler = goog.module.get('org.gwtproject.event.dom.client.LoadedMetadataHandler$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
 
}
$Util.$setClassMetadata(LoadedMetadataEvent, 'org.gwtproject.event.dom.client.LoadedMetadataEvent');

/**@type {Type<LoadedMetadataHandler>}*/
LoadedMetadataEvent.f_TYPE__org_gwtproject_event_dom_client_LoadedMetadataEvent_;

exports = LoadedMetadataEvent; 
//# sourceMappingURL=LoadedMetadataEvent.js.map
