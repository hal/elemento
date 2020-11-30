goog.module('elemental2.dom.DocumentType.$Overlay$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let $Overlay = goog.forwardDeclare('elemental2.dom.DocumentType.AfterNodesUnionType.$Overlay$impl');
let BeforeNodesUnionType_$Overlay = goog.forwardDeclare('elemental2.dom.DocumentType.BeforeNodesUnionType.$Overlay$impl');
let ReplaceWithNodesUnionType_$Overlay = goog.forwardDeclare('elemental2.dom.DocumentType.ReplaceWithNodesUnionType.$Overlay$impl');
let Node_$Overlay = goog.forwardDeclare('elemental2.dom.Node.$Overlay$impl');
let InternalPreconditions = goog.forwardDeclare('javaemul.internal.InternalPreconditions$impl');
let Js = goog.forwardDeclare('jsinterop.base.Js$impl');

class DocumentType_$Overlay {
 
 static m_after__$devirt__elemental2_dom_DocumentType__arrayOf_elemental2_dom_Node(/** !DocumentType */ $thisArg, /** Array<Node> */ nodes) {
  DocumentType_$Overlay.$clinit();
  $thisArg.after(...InternalPreconditions.m_checkNotNull__java_lang_Object(/**@type {Array<?>}*/ (Js.m_uncheckedCast__java_lang_Object(nodes))));
 }
 
 static m_after__$devirt__elemental2_dom_DocumentType__arrayOf_java_lang_String(/** !DocumentType */ $thisArg, /** Array<?string> */ nodes) {
  DocumentType_$Overlay.$clinit();
  $thisArg.after(...InternalPreconditions.m_checkNotNull__java_lang_Object(/**@type {Array<?>}*/ (Js.m_uncheckedCast__java_lang_Object(nodes))));
 }
 
 static m_before__$devirt__elemental2_dom_DocumentType__arrayOf_elemental2_dom_Node(/** !DocumentType */ $thisArg, /** Array<Node> */ nodes) {
  DocumentType_$Overlay.$clinit();
  $thisArg.before(...InternalPreconditions.m_checkNotNull__java_lang_Object(/**@type {Array<?>}*/ (Js.m_uncheckedCast__java_lang_Object(nodes))));
 }
 
 static m_before__$devirt__elemental2_dom_DocumentType__arrayOf_java_lang_String(/** !DocumentType */ $thisArg, /** Array<?string> */ nodes) {
  DocumentType_$Overlay.$clinit();
  $thisArg.before(...InternalPreconditions.m_checkNotNull__java_lang_Object(/**@type {Array<?>}*/ (Js.m_uncheckedCast__java_lang_Object(nodes))));
 }
 
 static m_replaceWith__$devirt__elemental2_dom_DocumentType__arrayOf_elemental2_dom_Node(/** !DocumentType */ $thisArg, /** Array<Node> */ nodes) {
  DocumentType_$Overlay.$clinit();
  $thisArg.replaceWith(...InternalPreconditions.m_checkNotNull__java_lang_Object(/**@type {Array<?>}*/ (Js.m_uncheckedCast__java_lang_Object(nodes))));
 }
 
 static m_replaceWith__$devirt__elemental2_dom_DocumentType__arrayOf_java_lang_String(/** !DocumentType */ $thisArg, /** Array<?string> */ nodes) {
  DocumentType_$Overlay.$clinit();
  $thisArg.replaceWith(...InternalPreconditions.m_checkNotNull__java_lang_Object(/**@type {Array<?>}*/ (Js.m_uncheckedCast__java_lang_Object(nodes))));
 }
 
 static $clinit() {
  DocumentType_$Overlay.$clinit = () =>{};
  DocumentType_$Overlay.$loadModules();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof DocumentType;
 }
 
 static $loadModules() {
  InternalPreconditions = goog.module.get('javaemul.internal.InternalPreconditions$impl');
  Js = goog.module.get('jsinterop.base.Js$impl');
 }
 
}
$Util.$setClassMetadata(DocumentType_$Overlay, 'DocumentType');

exports = DocumentType_$Overlay; 
//# sourceMappingURL=DocumentType$$Overlay.js.map
