goog.module('org.gwtproject.dom.client.NativeEvent.$Overlay$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let Event_$Overlay = goog.forwardDeclare('elemental2.dom.Event.$Overlay$impl');
let MouseEvent_$Overlay = goog.forwardDeclare('elemental2.dom.MouseEvent.$Overlay$impl');
let TouchEvent_$Overlay = goog.forwardDeclare('elemental2.dom.TouchEvent.$Overlay$impl');
let WheelEvent_$Overlay = goog.forwardDeclare('elemental2.dom.WheelEvent.$Overlay$impl');
let Any_$Overlay = goog.forwardDeclare('jsinterop.base.Any.$Overlay$impl');
let Js = goog.forwardDeclare('jsinterop.base.Js$impl');
let $Overlay = goog.forwardDeclare('jsinterop.base.JsPropertyMap.$Overlay$impl');
let JsArray_$Overlay = goog.forwardDeclare('org.gwtproject.core.client.JsArray.$Overlay$impl');
let DataTransfer_$Overlay = goog.forwardDeclare('org.gwtproject.dom.client.DataTransfer.$Overlay$impl');
let EventTarget_$Overlay = goog.forwardDeclare('org.gwtproject.dom.client.EventTarget.$Overlay$impl');
let Touch_$Overlay = goog.forwardDeclare('org.gwtproject.dom.client.Touch.$Overlay$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');
let $Objects = goog.forwardDeclare('vmbootstrap.Objects$impl');

class NativeEvent_$Overlay {
 /** @return {boolean} */
 static m_getAltKey__$devirt__org_gwtproject_dom_client_NativeEvent(/** !Object */ $thisArg) {
  NativeEvent_$Overlay.$clinit();
  return Js.m_isTruthy__java_lang_Object(/**@type {*}*/ ($Overlay.m_get__$devirt__jsinterop_base_JsPropertyMap__java_lang_String(/**@type {Object<string, *>}*/ (Js.m_uncheckedCast__java_lang_Object($thisArg)), "altKey")));
 }
 /** @return {number} */
 static m_getButton__$devirt__org_gwtproject_dom_client_NativeEvent(/** !Object */ $thisArg) {
  NativeEvent_$Overlay.$clinit();
  let button = Any_$Overlay.m_asInt__$devirt__jsinterop_base_Any(/**@type {*}*/ ($Overlay.m_get__$devirt__jsinterop_base_JsPropertyMap__java_lang_String(/**@type {Object<string, *>}*/ (Js.m_uncheckedCast__java_lang_Object($thisArg)), "button")));
  if (button == 1) {
   return 4;
  } else if (button == 2) {
   return 2;
  }
  return 1;
 }
 /** @return {Object<string, Object>} */
 static m_getChangedTouches__$devirt__org_gwtproject_dom_client_NativeEvent(/** !Object */ $thisArg) {
  NativeEvent_$Overlay.$clinit();
  return /**@type {Object<string, Object>}*/ (Js.m_uncheckedCast__java_lang_Object(/**@type {TouchEvent}*/ (Js.m_uncheckedCast__java_lang_Object($thisArg)).changedTouches));
 }
 /** @return {number} @deprecated */
 static m_getCharCode__$devirt__org_gwtproject_dom_client_NativeEvent(/** !Object */ $thisArg) {
  NativeEvent_$Overlay.$clinit();
  return Js.m_coerceToInt__java_lang_Object(/**@type {*}*/ ($Overlay.m_get__$devirt__jsinterop_base_JsPropertyMap__java_lang_String(/**@type {Object<string, *>}*/ (Js.m_uncheckedCast__java_lang_Object($thisArg)), "charCode")));
 }
 /** @return {number} */
 static m_getClientX__$devirt__org_gwtproject_dom_client_NativeEvent(/** !Object */ $thisArg) {
  NativeEvent_$Overlay.$clinit();
  return Js.m_coerceToInt__java_lang_Object(/**@type {MouseEvent}*/ (Js.m_uncheckedCast__java_lang_Object($thisArg)).clientX);
 }
 /** @return {number} */
 static m_getClientY__$devirt__org_gwtproject_dom_client_NativeEvent(/** !Object */ $thisArg) {
  NativeEvent_$Overlay.$clinit();
  return Js.m_coerceToInt__java_lang_Object(/**@type {MouseEvent}*/ (Js.m_uncheckedCast__java_lang_Object($thisArg)).clientY);
 }
 /** @return {boolean} */
 static m_getCtrlKey__$devirt__org_gwtproject_dom_client_NativeEvent(/** !Object */ $thisArg) {
  NativeEvent_$Overlay.$clinit();
  return Js.m_isTruthy__java_lang_Object(/**@type {*}*/ ($Overlay.m_get__$devirt__jsinterop_base_JsPropertyMap__java_lang_String(/**@type {Object<string, *>}*/ (Js.m_uncheckedCast__java_lang_Object($thisArg)), "ctrlKey")));
 }
 /** @return {Object} */
 static m_getCurrentEventTarget__$devirt__org_gwtproject_dom_client_NativeEvent(/** !Object */ $thisArg) {
  NativeEvent_$Overlay.$clinit();
  return /**@type {Object}*/ (Js.m_uncheckedCast__java_lang_Object(/**@type {Event}*/ (Js.m_uncheckedCast__java_lang_Object($thisArg)).currentTarget));
 }
 /** @return {Object} */
 static m_getDataTransfer__$devirt__org_gwtproject_dom_client_NativeEvent(/** !Object */ $thisArg) {
  NativeEvent_$Overlay.$clinit();
  return Js.m_isTruthy__java_lang_Object($thisArg.dataTransfer) ? $thisArg.dataTransfer : null;
 }
 /** @return {Object} */
 static m_getEventTarget__$devirt__org_gwtproject_dom_client_NativeEvent(/** !Object */ $thisArg) {
  NativeEvent_$Overlay.$clinit();
  return /**@type {Object}*/ ($Casts.$to(/**@type {Event}*/ (Js.m_uncheckedCast__java_lang_Object($thisArg)).target, EventTarget_$Overlay));
 }
 /** @return {number} @deprecated */
 static m_getKeyCode__$devirt__org_gwtproject_dom_client_NativeEvent(/** !Object */ $thisArg) {
  NativeEvent_$Overlay.$clinit();
  return Js.m_coerceToInt__java_lang_Object(/**@type {*}*/ ($Overlay.m_get__$devirt__jsinterop_base_JsPropertyMap__java_lang_String(/**@type {Object<string, *>}*/ (Js.m_uncheckedCast__java_lang_Object($thisArg)), "keyCode")));
 }
 /** @return {boolean} */
 static m_getMetaKey__$devirt__org_gwtproject_dom_client_NativeEvent(/** !Object */ $thisArg) {
  NativeEvent_$Overlay.$clinit();
  return Js.m_isTruthy__java_lang_Object(/**@type {*}*/ ($Overlay.m_get__$devirt__jsinterop_base_JsPropertyMap__java_lang_String(/**@type {Object<string, *>}*/ (Js.m_uncheckedCast__java_lang_Object($thisArg)), "metaKey")));
 }
 /** @return {number} */
 static m_getMouseWheelVelocityY__$devirt__org_gwtproject_dom_client_NativeEvent(/** !Object */ $thisArg) {
  NativeEvent_$Overlay.$clinit();
  return Js.m_coerceToInt__java_lang_Object(/**@type {WheelEvent}*/ (Js.m_uncheckedCast__java_lang_Object($thisArg)).deltaY);
 }
 /** @return {Object} */
 static m_getRelatedEventTarget__$devirt__org_gwtproject_dom_client_NativeEvent(/** !Object */ $thisArg) {
  NativeEvent_$Overlay.$clinit();
  return /**@type {Object}*/ (Js.m_uncheckedCast__java_lang_Object(/**@type {MouseEvent}*/ (Js.m_uncheckedCast__java_lang_Object($thisArg)).relatedTarget));
 }
 /** @return {number} @deprecated */
 static m_getRotation__$devirt__org_gwtproject_dom_client_NativeEvent(/** !Object */ $thisArg) {
  NativeEvent_$Overlay.$clinit();
  return Any_$Overlay.m_asDouble__$devirt__jsinterop_base_Any(/**@type {*}*/ ($Overlay.m_get__$devirt__jsinterop_base_JsPropertyMap__java_lang_String(/**@type {Object<string, *>}*/ (Js.m_uncheckedCast__java_lang_Object($thisArg)), "rotation")));
 }
 /** @return {number} @deprecated */
 static m_getScale__$devirt__org_gwtproject_dom_client_NativeEvent(/** !Object */ $thisArg) {
  NativeEvent_$Overlay.$clinit();
  return Any_$Overlay.m_asDouble__$devirt__jsinterop_base_Any(/**@type {*}*/ ($Overlay.m_get__$devirt__jsinterop_base_JsPropertyMap__java_lang_String(/**@type {Object<string, *>}*/ (Js.m_uncheckedCast__java_lang_Object($thisArg)), "scale")));
 }
 /** @return {number} */
 static m_getScreenX__$devirt__org_gwtproject_dom_client_NativeEvent(/** !Object */ $thisArg) {
  NativeEvent_$Overlay.$clinit();
  return Js.m_coerceToInt__java_lang_Object(/**@type {MouseEvent}*/ (Js.m_uncheckedCast__java_lang_Object($thisArg)).screenX);
 }
 /** @return {number} */
 static m_getScreenY__$devirt__org_gwtproject_dom_client_NativeEvent(/** !Object */ $thisArg) {
  NativeEvent_$Overlay.$clinit();
  return Js.m_coerceToInt__java_lang_Object(/**@type {MouseEvent}*/ (Js.m_uncheckedCast__java_lang_Object($thisArg)).screenY);
 }
 /** @return {boolean} */
 static m_getShiftKey__$devirt__org_gwtproject_dom_client_NativeEvent(/** !Object */ $thisArg) {
  NativeEvent_$Overlay.$clinit();
  return Js.m_isTruthy__java_lang_Object(/**@type {*}*/ ($Overlay.m_get__$devirt__jsinterop_base_JsPropertyMap__java_lang_String(/**@type {Object<string, *>}*/ (Js.m_uncheckedCast__java_lang_Object($thisArg)), "shiftKey")));
 }
 /** @return {?string} */
 static m_getString__$devirt__org_gwtproject_dom_client_NativeEvent(/** !Object */ $thisArg) {
  NativeEvent_$Overlay.$clinit();
  return $Objects.m_toString__java_lang_Object(/**@type {Event}*/ (Js.m_uncheckedCast__java_lang_Object($thisArg)));
 }
 /** @return {Object<string, Object>} */
 static m_getTargetTouches__$devirt__org_gwtproject_dom_client_NativeEvent(/** !Object */ $thisArg) {
  NativeEvent_$Overlay.$clinit();
  return /**@type {Object<string, Object>}*/ (Js.m_uncheckedCast__java_lang_Object(/**@type {TouchEvent}*/ (Js.m_uncheckedCast__java_lang_Object($thisArg)).targetTouches));
 }
 /** @return {Object<string, Object>} */
 static m_getTouches__$devirt__org_gwtproject_dom_client_NativeEvent(/** !Object */ $thisArg) {
  NativeEvent_$Overlay.$clinit();
  return /**@type {Object<string, Object>}*/ (Js.m_uncheckedCast__java_lang_Object(/**@type {TouchEvent}*/ (Js.m_uncheckedCast__java_lang_Object($thisArg)).touches));
 }
 /** @return {?string} */
 static m_getType__$devirt__org_gwtproject_dom_client_NativeEvent(/** !Object */ $thisArg) {
  NativeEvent_$Overlay.$clinit();
  return /**@type {Event}*/ (Js.m_uncheckedCast__java_lang_Object($thisArg)).type;
 }
 
 static m_preventDefault__$devirt__org_gwtproject_dom_client_NativeEvent(/** !Object */ $thisArg) {
  NativeEvent_$Overlay.$clinit();
  /**@type {Event}*/ (Js.m_uncheckedCast__java_lang_Object($thisArg)).preventDefault();
 }
 
 static m_stopPropagation__$devirt__org_gwtproject_dom_client_NativeEvent(/** !Object */ $thisArg) {
  NativeEvent_$Overlay.$clinit();
  /**@type {Event}*/ (Js.m_uncheckedCast__java_lang_Object($thisArg)).stopPropagation();
 }
 
 static $clinit() {
  NativeEvent_$Overlay.$clinit = () =>{};
  NativeEvent_$Overlay.$loadModules();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Object;
 }
 
 static $loadModules() {
  Any_$Overlay = goog.module.get('jsinterop.base.Any.$Overlay$impl');
  Js = goog.module.get('jsinterop.base.Js$impl');
  $Overlay = goog.module.get('jsinterop.base.JsPropertyMap.$Overlay$impl');
  EventTarget_$Overlay = goog.module.get('org.gwtproject.dom.client.EventTarget.$Overlay$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
  $Objects = goog.module.get('vmbootstrap.Objects$impl');
 }
 
}
$Util.$setClassMetadata(NativeEvent_$Overlay, 'Object');

/**@const {number}*/
NativeEvent_$Overlay.f_BUTTON_LEFT__org_gwtproject_dom_client_NativeEvent_$Overlay = 1;
/**@const {number}*/
NativeEvent_$Overlay.f_BUTTON_MIDDLE__org_gwtproject_dom_client_NativeEvent_$Overlay = 4;
/**@const {number}*/
NativeEvent_$Overlay.f_BUTTON_RIGHT__org_gwtproject_dom_client_NativeEvent_$Overlay = 2;

exports = NativeEvent_$Overlay; 
//# sourceMappingURL=NativeEvent$$Overlay.js.map
