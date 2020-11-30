goog.module('elemental2.dom.URL.$Overlay$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let Blob_$Overlay = goog.forwardDeclare('elemental2.dom.Blob.$Overlay$impl');
let MediaSource_$Overlay = goog.forwardDeclare('elemental2.dom.MediaSource.$Overlay$impl');
let MediaStream_$Overlay = goog.forwardDeclare('elemental2.dom.MediaStream.$Overlay$impl');
let $Overlay = goog.forwardDeclare('elemental2.dom.URL.CreateObjectURLObjUnionType.$Overlay$impl');
let Js = goog.forwardDeclare('jsinterop.base.Js$impl');

class URL_$Overlay {
 /** @return {?string} */
 static m_createObjectURL__elemental2_dom_Blob(/** Blob */ obj) {
  URL_$Overlay.$clinit();
  return URL.createObjectURL(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(obj)));
 }
 /** @return {?string} */
 static m_createObjectURL__elemental2_dom_MediaSource(/** MediaSource */ obj) {
  URL_$Overlay.$clinit();
  return URL.createObjectURL(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(obj)));
 }
 /** @return {?string} */
 static m_createObjectURL__elemental2_dom_MediaStream(/** MediaStream */ obj) {
  URL_$Overlay.$clinit();
  return URL.createObjectURL(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(obj)));
 }
 
 static $clinit() {
  URL_$Overlay.$clinit = () =>{};
  URL_$Overlay.$loadModules();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof URL;
 }
 
 static $loadModules() {
  Js = goog.module.get('jsinterop.base.Js$impl');
 }
 
}
$Util.$setClassMetadata(URL_$Overlay, 'URL');

exports = URL_$Overlay; 
//# sourceMappingURL=URL$$Overlay.js.map
