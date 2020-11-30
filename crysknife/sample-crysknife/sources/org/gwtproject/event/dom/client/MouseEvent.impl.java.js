goog.module('org.gwtproject.event.dom.client.MouseEvent$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const HumanInputEvent = goog.require('org.gwtproject.event.dom.client.HumanInputEvent$impl');

let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let Document_$Overlay = goog.forwardDeclare('org.gwtproject.dom.client.Document.$Overlay$impl');
let Element_$Overlay = goog.forwardDeclare('org.gwtproject.dom.client.Element.$Overlay$impl');
let $Overlay = goog.forwardDeclare('org.gwtproject.dom.client.NativeEvent.$Overlay$impl');
let EventHandler = goog.forwardDeclare('org.gwtproject.event.legacy.shared.EventHandler$impl');

/**
 * @abstract
 * @template H
 * @extends {HumanInputEvent<H>}
  */
class MouseEvent extends HumanInputEvent {
 /** @protected */
 constructor() {
  super();
 }
 
 $ctor__org_gwtproject_event_dom_client_MouseEvent__() {
  this.$ctor__org_gwtproject_event_dom_client_HumanInputEvent__();
 }
 /** @return {number} */
 m_getNativeButton__() {
  return $Overlay.m_getButton__$devirt__org_gwtproject_dom_client_NativeEvent(this.m_getNativeEvent__());
 }
 /** @return {number} */
 m_getScreenX__() {
  return $Overlay.m_getScreenX__$devirt__org_gwtproject_dom_client_NativeEvent(this.m_getNativeEvent__());
 }
 /** @return {number} */
 m_getScreenY__() {
  return $Overlay.m_getScreenY__$devirt__org_gwtproject_dom_client_NativeEvent(this.m_getNativeEvent__());
 }
 /** @return {number} */
 m_getX__() {
  let relativeElem = this.m_getRelativeElement__();
  if (!$Equality.$same(relativeElem, null)) {
   return this.m_getRelativeX__org_gwtproject_dom_client_Element(relativeElem);
  }
  return this.m_getClientX__();
 }
 /** @return {number} */
 m_getRelativeX__org_gwtproject_dom_client_Element(/** Object */ target) {
  let e = this.m_getNativeEvent__();
  return $Overlay.m_getClientX__$devirt__org_gwtproject_dom_client_NativeEvent(e) - Element_$Overlay.m_getAbsoluteLeft__$devirt__org_gwtproject_dom_client_Element(target) + Element_$Overlay.m_getScrollLeft__$devirt__org_gwtproject_dom_client_Element(target) + Document_$Overlay.m_getScrollLeft__$devirt__org_gwtproject_dom_client_Document(target.ownerDocument);
 }
 /** @return {number} */
 m_getClientX__() {
  return $Overlay.m_getClientX__$devirt__org_gwtproject_dom_client_NativeEvent(this.m_getNativeEvent__());
 }
 /** @return {number} */
 m_getY__() {
  let relativeElem = this.m_getRelativeElement__();
  if (!$Equality.$same(relativeElem, null)) {
   return this.m_getRelativeY__org_gwtproject_dom_client_Element(relativeElem);
  }
  return this.m_getClientY__();
 }
 /** @return {number} */
 m_getRelativeY__org_gwtproject_dom_client_Element(/** Object */ target) {
  let e = this.m_getNativeEvent__();
  return $Overlay.m_getClientY__$devirt__org_gwtproject_dom_client_NativeEvent(e) - Element_$Overlay.m_getAbsoluteTop__$devirt__org_gwtproject_dom_client_Element(target) + Element_$Overlay.m_getScrollTop__$devirt__org_gwtproject_dom_client_Element(target) + Document_$Overlay.m_getScrollTop__$devirt__org_gwtproject_dom_client_Document(target.ownerDocument);
 }
 /** @return {number} */
 m_getClientY__() {
  return $Overlay.m_getClientY__$devirt__org_gwtproject_dom_client_NativeEvent(this.m_getNativeEvent__());
 }
 
 static $clinit() {
  MouseEvent.$clinit = () =>{};
  MouseEvent.$loadModules();
  HumanInputEvent.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof MouseEvent;
 }
 
 static $loadModules() {
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  Document_$Overlay = goog.module.get('org.gwtproject.dom.client.Document.$Overlay$impl');
  Element_$Overlay = goog.module.get('org.gwtproject.dom.client.Element.$Overlay$impl');
  $Overlay = goog.module.get('org.gwtproject.dom.client.NativeEvent.$Overlay$impl');
 }
 
}
$Util.$setClassMetadata(MouseEvent, 'org.gwtproject.event.dom.client.MouseEvent');

exports = MouseEvent; 
//# sourceMappingURL=MouseEvent.js.map
