goog.module('elemental2.dom.DataTransferItemList.$Overlay$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let DataTransferItem_$Overlay = goog.forwardDeclare('elemental2.dom.DataTransferItem.$Overlay$impl');
let $Overlay = goog.forwardDeclare('elemental2.dom.DataTransferItemList.AddDataUnionType.$Overlay$impl');
let File_$Overlay = goog.forwardDeclare('elemental2.dom.File.$Overlay$impl');
let Js = goog.forwardDeclare('jsinterop.base.Js$impl');

class DataTransferItemList_$Overlay {
 /** @return {DataTransferItem} */
 static m_add__$devirt__elemental2_dom_DataTransferItemList__elemental2_dom_File__java_lang_String(/** !DataTransferItemList */ $thisArg, /** File */ data, /** ?string */ type) {
  DataTransferItemList_$Overlay.$clinit();
  return $thisArg.add(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(data)), type);
 }
 /** @return {DataTransferItem} */
 static m_add__$devirt__elemental2_dom_DataTransferItemList__elemental2_dom_File(/** !DataTransferItemList */ $thisArg, /** File */ data) {
  DataTransferItemList_$Overlay.$clinit();
  return $thisArg.add(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(data)));
 }
 /** @return {DataTransferItem} */
 static m_add__$devirt__elemental2_dom_DataTransferItemList__java_lang_String__java_lang_String(/** !DataTransferItemList */ $thisArg, /** ?string */ data, /** ?string */ type) {
  DataTransferItemList_$Overlay.$clinit();
  return $thisArg.add(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(data)), type);
 }
 /** @return {DataTransferItem} */
 static m_add__$devirt__elemental2_dom_DataTransferItemList__java_lang_String(/** !DataTransferItemList */ $thisArg, /** ?string */ data) {
  DataTransferItemList_$Overlay.$clinit();
  return $thisArg.add(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(data)));
 }
 
 static $clinit() {
  DataTransferItemList_$Overlay.$clinit = () =>{};
  DataTransferItemList_$Overlay.$loadModules();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof DataTransferItemList;
 }
 
 static $loadModules() {
  Js = goog.module.get('jsinterop.base.Js$impl');
 }
 
}
$Util.$setClassMetadata(DataTransferItemList_$Overlay, 'DataTransferItemList');

exports = DataTransferItemList_$Overlay; 
//# sourceMappingURL=DataTransferItemList$$Overlay.js.map
