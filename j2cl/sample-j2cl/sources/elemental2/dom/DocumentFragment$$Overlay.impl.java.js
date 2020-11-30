goog.module('elemental2.dom.DocumentFragment.$Overlay$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let $Overlay = goog.forwardDeclare('elemental2.dom.DocumentFragment.AppendNodesUnionType.$Overlay$impl');
let PrependNodesUnionType_$Overlay = goog.forwardDeclare('elemental2.dom.DocumentFragment.PrependNodesUnionType.$Overlay$impl');
let Node_$Overlay = goog.forwardDeclare('elemental2.dom.Node.$Overlay$impl');
let InternalPreconditions = goog.forwardDeclare('javaemul.internal.InternalPreconditions$impl');
let Js = goog.forwardDeclare('jsinterop.base.Js$impl');

class DocumentFragment_$Overlay {
 
 static m_append__$devirt__elemental2_dom_DocumentFragment__arrayOf_elemental2_dom_Node(/** !DocumentFragment */ $thisArg, /** Array<Node> */ nodes) {
  DocumentFragment_$Overlay.$clinit();
  $thisArg.append(...InternalPreconditions.m_checkNotNull__java_lang_Object(/**@type {Array<?>}*/ (Js.m_uncheckedCast__java_lang_Object(nodes))));
 }
 
 static m_append__$devirt__elemental2_dom_DocumentFragment__arrayOf_java_lang_String(/** !DocumentFragment */ $thisArg, /** Array<?string> */ nodes) {
  DocumentFragment_$Overlay.$clinit();
  $thisArg.append(...InternalPreconditions.m_checkNotNull__java_lang_Object(/**@type {Array<?>}*/ (Js.m_uncheckedCast__java_lang_Object(nodes))));
 }
 
 static m_prepend__$devirt__elemental2_dom_DocumentFragment__arrayOf_elemental2_dom_Node(/** !DocumentFragment */ $thisArg, /** Array<Node> */ nodes) {
  DocumentFragment_$Overlay.$clinit();
  $thisArg.prepend(...InternalPreconditions.m_checkNotNull__java_lang_Object(/**@type {Array<?>}*/ (Js.m_uncheckedCast__java_lang_Object(nodes))));
 }
 
 static m_prepend__$devirt__elemental2_dom_DocumentFragment__arrayOf_java_lang_String(/** !DocumentFragment */ $thisArg, /** Array<?string> */ nodes) {
  DocumentFragment_$Overlay.$clinit();
  $thisArg.prepend(...InternalPreconditions.m_checkNotNull__java_lang_Object(/**@type {Array<?>}*/ (Js.m_uncheckedCast__java_lang_Object(nodes))));
 }
 
 static $clinit() {
  DocumentFragment_$Overlay.$clinit = () =>{};
  DocumentFragment_$Overlay.$loadModules();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof DocumentFragment;
 }
 
 static $loadModules() {
  InternalPreconditions = goog.module.get('javaemul.internal.InternalPreconditions$impl');
  Js = goog.module.get('jsinterop.base.Js$impl');
 }
 
}
$Util.$setClassMetadata(DocumentFragment_$Overlay, 'DocumentFragment');

exports = DocumentFragment_$Overlay; 
//# sourceMappingURL=DocumentFragment$$Overlay.js.map
