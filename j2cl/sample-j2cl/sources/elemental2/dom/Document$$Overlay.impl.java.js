goog.module('elemental2.dom.Document.$Overlay$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let JsArray_$Overlay = goog.forwardDeclare('elemental2.core.JsArray.$Overlay$impl');
let $Overlay = goog.forwardDeclare('elemental2.dom.Document.AppendNodesUnionType.$Overlay$impl');
let CreateElementTypeExtensionType_$Overlay = goog.forwardDeclare('elemental2.dom.Document.CreateElementTypeExtensionType.$Overlay$impl');
let CreateElementTypeExtensionUnionType_$Overlay = goog.forwardDeclare('elemental2.dom.Document.CreateElementTypeExtensionUnionType.$Overlay$impl');
let CreateTextNodeDataUnionType_$Overlay = goog.forwardDeclare('elemental2.dom.Document.CreateTextNodeDataUnionType.$Overlay$impl');
let PrependNodesUnionType_$Overlay = goog.forwardDeclare('elemental2.dom.Document.PrependNodesUnionType.$Overlay$impl');
let WriteTextUnionType_$Overlay = goog.forwardDeclare('elemental2.dom.Document.WriteTextUnionType.$Overlay$impl');
let WritelnTextUnionType_$Overlay = goog.forwardDeclare('elemental2.dom.Document.WritelnTextUnionType.$Overlay$impl');
let Element_$Overlay = goog.forwardDeclare('elemental2.dom.Element.$Overlay$impl');
let Node_$Overlay = goog.forwardDeclare('elemental2.dom.Node.$Overlay$impl');
let Text_$Overlay = goog.forwardDeclare('elemental2.dom.Text.$Overlay$impl');
let Touch_$Overlay = goog.forwardDeclare('elemental2.dom.Touch.$Overlay$impl');
let TouchList_$Overlay = goog.forwardDeclare('elemental2.dom.TouchList.$Overlay$impl');
let TrustedHTML_$Overlay = goog.forwardDeclare('elemental2.dom.TrustedHTML.$Overlay$impl');
let InternalPreconditions = goog.forwardDeclare('javaemul.internal.InternalPreconditions$impl');
let Js = goog.forwardDeclare('jsinterop.base.Js$impl');

class Document_$Overlay {
 
 static m_append__$devirt__elemental2_dom_Document__arrayOf_elemental2_dom_Node(/** !Document */ $thisArg, /** Array<Node> */ nodes) {
  Document_$Overlay.$clinit();
  $thisArg.append(...InternalPreconditions.m_checkNotNull__java_lang_Object(/**@type {Array<?>}*/ (Js.m_uncheckedCast__java_lang_Object(nodes))));
 }
 
 static m_append__$devirt__elemental2_dom_Document__arrayOf_java_lang_String(/** !Document */ $thisArg, /** Array<?string> */ nodes) {
  Document_$Overlay.$clinit();
  $thisArg.append(...InternalPreconditions.m_checkNotNull__java_lang_Object(/**@type {Array<?>}*/ (Js.m_uncheckedCast__java_lang_Object(nodes))));
 }
 /** @return {Element} */
 static m_createElement__$devirt__elemental2_dom_Document__java_lang_String__elemental2_dom_Document_CreateElementTypeExtensionType(/** !Document */ $thisArg, /** ?string */ tagName, /** ? */ typeExtension) {
  Document_$Overlay.$clinit();
  return $thisArg.createElement(tagName, /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(typeExtension)));
 }
 /** @return {Element} */
 static m_createElement__$devirt__elemental2_dom_Document__java_lang_String__java_lang_String(/** !Document */ $thisArg, /** ?string */ tagName, /** ?string */ typeExtension) {
  Document_$Overlay.$clinit();
  return $thisArg.createElement(tagName, /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(typeExtension)));
 }
 /** @return {Text} */
 static m_createTextNode__$devirt__elemental2_dom_Document__java_lang_String(/** !Document */ $thisArg, /** ?string */ data) {
  Document_$Overlay.$clinit();
  return $thisArg.createTextNode(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(data)));
 }
 /** @return {Text} */
 static m_createTextNode__$devirt__elemental2_dom_Document__double(/** !Document */ $thisArg, /** number */ data) {
  Document_$Overlay.$clinit();
  return $thisArg.createTextNode(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(data)));
 }
 /** @return {TouchList} */
 static m_createTouchList__$devirt__elemental2_dom_Document__arrayOf_elemental2_dom_Touch(/** !Document */ $thisArg, /** Array<Touch> */ touches) {
  Document_$Overlay.$clinit();
  return $thisArg.createTouchList(/**@type {Array<Touch>}*/ (Js.m_uncheckedCast__java_lang_Object(touches)));
 }
 
 static m_prepend__$devirt__elemental2_dom_Document__arrayOf_elemental2_dom_Node(/** !Document */ $thisArg, /** Array<Node> */ nodes) {
  Document_$Overlay.$clinit();
  $thisArg.prepend(...InternalPreconditions.m_checkNotNull__java_lang_Object(/**@type {Array<?>}*/ (Js.m_uncheckedCast__java_lang_Object(nodes))));
 }
 
 static m_prepend__$devirt__elemental2_dom_Document__arrayOf_java_lang_String(/** !Document */ $thisArg, /** Array<?string> */ nodes) {
  Document_$Overlay.$clinit();
  $thisArg.prepend(...InternalPreconditions.m_checkNotNull__java_lang_Object(/**@type {Array<?>}*/ (Js.m_uncheckedCast__java_lang_Object(nodes))));
 }
 
 static m_write__$devirt__elemental2_dom_Document__java_lang_String(/** !Document */ $thisArg, /** ?string */ text) {
  Document_$Overlay.$clinit();
  $thisArg.write(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(text)));
 }
 
 static m_write__$devirt__elemental2_dom_Document__elemental2_dom_TrustedHTML(/** !Document */ $thisArg, /** TrustedHTML */ text) {
  Document_$Overlay.$clinit();
  $thisArg.write(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(text)));
 }
 
 static m_writeln__$devirt__elemental2_dom_Document__java_lang_String(/** !Document */ $thisArg, /** ?string */ text) {
  Document_$Overlay.$clinit();
  $thisArg.writeln(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(text)));
 }
 
 static m_writeln__$devirt__elemental2_dom_Document__elemental2_dom_TrustedHTML(/** !Document */ $thisArg, /** TrustedHTML */ text) {
  Document_$Overlay.$clinit();
  $thisArg.writeln(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(text)));
 }
 
 static $clinit() {
  Document_$Overlay.$clinit = () =>{};
  Document_$Overlay.$loadModules();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Document;
 }
 
 static $loadModules() {
  InternalPreconditions = goog.module.get('javaemul.internal.InternalPreconditions$impl');
  Js = goog.module.get('jsinterop.base.Js$impl');
 }
 
}
$Util.$setClassMetadata(Document_$Overlay, 'Document');

exports = Document_$Overlay; 
//# sourceMappingURL=Document$$Overlay.js.map
