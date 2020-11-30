goog.module('elemental2.dom.Element.$Overlay$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let $Overlay = goog.forwardDeclare('elemental2.dom.Element.AfterNodesUnionType.$Overlay$impl');
let AppendNodesUnionType_$Overlay = goog.forwardDeclare('elemental2.dom.Element.AppendNodesUnionType.$Overlay$impl');
let BeforeNodesUnionType_$Overlay = goog.forwardDeclare('elemental2.dom.Element.BeforeNodesUnionType.$Overlay$impl');
let MatchesSelectorRefNodesUnionType_$Overlay = goog.forwardDeclare('elemental2.dom.Element.MatchesSelectorRefNodesUnionType.$Overlay$impl');
let PrependNodesUnionType_$Overlay = goog.forwardDeclare('elemental2.dom.Element.PrependNodesUnionType.$Overlay$impl');
let ReplaceWithNodesUnionType_$Overlay = goog.forwardDeclare('elemental2.dom.Element.ReplaceWithNodesUnionType.$Overlay$impl');
let ScrollIntoViewTopUnionType_$Overlay = goog.forwardDeclare('elemental2.dom.Element.ScrollIntoViewTopUnionType.$Overlay$impl');
let ScrollToScrollToOptionsOrXUnionType_$Overlay = goog.forwardDeclare('elemental2.dom.Element.ScrollToScrollToOptionsOrXUnionType.$Overlay$impl');
let SetAttributeNSValueUnionType_$Overlay = goog.forwardDeclare('elemental2.dom.Element.SetAttributeNSValueUnionType.$Overlay$impl');
let SetAttributeValueUnionType_$Overlay = goog.forwardDeclare('elemental2.dom.Element.SetAttributeValueUnionType.$Overlay$impl');
let Node_$Overlay = goog.forwardDeclare('elemental2.dom.Node.$Overlay$impl');
let NodeList_$Overlay = goog.forwardDeclare('elemental2.dom.NodeList.$Overlay$impl');
let ScrollIntoViewOptions_$Overlay = goog.forwardDeclare('elemental2.dom.ScrollIntoViewOptions.$Overlay$impl');
let ScrollToOptions_$Overlay = goog.forwardDeclare('elemental2.dom.ScrollToOptions.$Overlay$impl');
let TrustedHTML_$Overlay = goog.forwardDeclare('elemental2.dom.TrustedHTML.$Overlay$impl');
let TrustedScriptURL_$Overlay = goog.forwardDeclare('elemental2.dom.TrustedScriptURL.$Overlay$impl');
let InternalPreconditions = goog.forwardDeclare('javaemul.internal.InternalPreconditions$impl');
let Js = goog.forwardDeclare('jsinterop.base.Js$impl');

class Element_$Overlay {
 
 static m_after__$devirt__elemental2_dom_Element__arrayOf_elemental2_dom_Node(/** !Element */ $thisArg, /** Array<Node> */ nodes) {
  Element_$Overlay.$clinit();
  $thisArg.after(...InternalPreconditions.m_checkNotNull__java_lang_Object(/**@type {Array<?>}*/ (Js.m_uncheckedCast__java_lang_Object(nodes))));
 }
 
 static m_after__$devirt__elemental2_dom_Element__arrayOf_java_lang_String(/** !Element */ $thisArg, /** Array<?string> */ nodes) {
  Element_$Overlay.$clinit();
  $thisArg.after(...InternalPreconditions.m_checkNotNull__java_lang_Object(/**@type {Array<?>}*/ (Js.m_uncheckedCast__java_lang_Object(nodes))));
 }
 
 static m_append__$devirt__elemental2_dom_Element__arrayOf_elemental2_dom_Node(/** !Element */ $thisArg, /** Array<Node> */ nodes) {
  Element_$Overlay.$clinit();
  $thisArg.append(...InternalPreconditions.m_checkNotNull__java_lang_Object(/**@type {Array<?>}*/ (Js.m_uncheckedCast__java_lang_Object(nodes))));
 }
 
 static m_append__$devirt__elemental2_dom_Element__arrayOf_java_lang_String(/** !Element */ $thisArg, /** Array<?string> */ nodes) {
  Element_$Overlay.$clinit();
  $thisArg.append(...InternalPreconditions.m_checkNotNull__java_lang_Object(/**@type {Array<?>}*/ (Js.m_uncheckedCast__java_lang_Object(nodes))));
 }
 
 static m_before__$devirt__elemental2_dom_Element__arrayOf_elemental2_dom_Node(/** !Element */ $thisArg, /** Array<Node> */ nodes) {
  Element_$Overlay.$clinit();
  $thisArg.before(...InternalPreconditions.m_checkNotNull__java_lang_Object(/**@type {Array<?>}*/ (Js.m_uncheckedCast__java_lang_Object(nodes))));
 }
 
 static m_before__$devirt__elemental2_dom_Element__arrayOf_java_lang_String(/** !Element */ $thisArg, /** Array<?string> */ nodes) {
  Element_$Overlay.$clinit();
  $thisArg.before(...InternalPreconditions.m_checkNotNull__java_lang_Object(/**@type {Array<?>}*/ (Js.m_uncheckedCast__java_lang_Object(nodes))));
 }
 /** @return {boolean} */
 static m_matchesSelector__$devirt__elemental2_dom_Element__java_lang_String__elemental2_dom_Node(/** !Element */ $thisArg, /** ?string */ selectors, /** Node */ refNodes) {
  Element_$Overlay.$clinit();
  return $thisArg.matchesSelector(selectors, /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(refNodes)));
 }
 /** @return {boolean} */
 static m_matchesSelector__$devirt__elemental2_dom_Element__java_lang_String__elemental2_dom_NodeList(/** !Element */ $thisArg, /** ?string */ selectors, /** NodeList<*> */ refNodes) {
  Element_$Overlay.$clinit();
  return $thisArg.matchesSelector(selectors, /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(refNodes)));
 }
 
 static m_prepend__$devirt__elemental2_dom_Element__arrayOf_elemental2_dom_Node(/** !Element */ $thisArg, /** Array<Node> */ nodes) {
  Element_$Overlay.$clinit();
  $thisArg.prepend(...InternalPreconditions.m_checkNotNull__java_lang_Object(/**@type {Array<?>}*/ (Js.m_uncheckedCast__java_lang_Object(nodes))));
 }
 
 static m_prepend__$devirt__elemental2_dom_Element__arrayOf_java_lang_String(/** !Element */ $thisArg, /** Array<?string> */ nodes) {
  Element_$Overlay.$clinit();
  $thisArg.prepend(...InternalPreconditions.m_checkNotNull__java_lang_Object(/**@type {Array<?>}*/ (Js.m_uncheckedCast__java_lang_Object(nodes))));
 }
 
 static m_replaceWith__$devirt__elemental2_dom_Element__arrayOf_elemental2_dom_Node(/** !Element */ $thisArg, /** Array<Node> */ nodes) {
  Element_$Overlay.$clinit();
  $thisArg.replaceWith(...InternalPreconditions.m_checkNotNull__java_lang_Object(/**@type {Array<?>}*/ (Js.m_uncheckedCast__java_lang_Object(nodes))));
 }
 
 static m_replaceWith__$devirt__elemental2_dom_Element__arrayOf_java_lang_String(/** !Element */ $thisArg, /** Array<?string> */ nodes) {
  Element_$Overlay.$clinit();
  $thisArg.replaceWith(...InternalPreconditions.m_checkNotNull__java_lang_Object(/**@type {Array<?>}*/ (Js.m_uncheckedCast__java_lang_Object(nodes))));
 }
 
 static m_scrollIntoView__$devirt__elemental2_dom_Element__elemental2_dom_ScrollIntoViewOptions(/** !Element */ $thisArg, /** ScrollIntoViewOptions */ top) {
  Element_$Overlay.$clinit();
  $thisArg.scrollIntoView(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(top)));
 }
 
 static m_scrollIntoView__$devirt__elemental2_dom_Element__boolean(/** !Element */ $thisArg, /** boolean */ top) {
  Element_$Overlay.$clinit();
  $thisArg.scrollIntoView(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(top)));
 }
 
 static m_scrollTo__$devirt__elemental2_dom_Element__elemental2_dom_ScrollToOptions__double(/** !Element */ $thisArg, /** ScrollToOptions */ scrollToOptionsOrX, /** number */ y) {
  Element_$Overlay.$clinit();
  $thisArg.scrollTo(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(scrollToOptionsOrX)), y);
 }
 
 static m_scrollTo__$devirt__elemental2_dom_Element__elemental2_dom_ScrollToOptions(/** !Element */ $thisArg, /** ScrollToOptions */ scrollToOptionsOrX) {
  Element_$Overlay.$clinit();
  $thisArg.scrollTo(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(scrollToOptionsOrX)));
 }
 
 static m_scrollTo__$devirt__elemental2_dom_Element__double__double(/** !Element */ $thisArg, /** number */ scrollToOptionsOrX, /** number */ y) {
  Element_$Overlay.$clinit();
  $thisArg.scrollTo(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(scrollToOptionsOrX)), y);
 }
 
 static m_scrollTo__$devirt__elemental2_dom_Element__double(/** !Element */ $thisArg, /** number */ scrollToOptionsOrX) {
  Element_$Overlay.$clinit();
  $thisArg.scrollTo(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(scrollToOptionsOrX)));
 }
 
 static m_setAttribute__$devirt__elemental2_dom_Element__java_lang_String__java_lang_String(/** !Element */ $thisArg, /** ?string */ name, /** ?string */ value) {
  Element_$Overlay.$clinit();
  $thisArg.setAttribute(name, /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(value)));
 }
 
 static m_setAttribute__$devirt__elemental2_dom_Element__java_lang_String__elemental2_dom_TrustedHTML(/** !Element */ $thisArg, /** ?string */ name, /** TrustedHTML */ value) {
  Element_$Overlay.$clinit();
  $thisArg.setAttribute(name, /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(value)));
 }
 
 static m_setAttribute__$devirt__elemental2_dom_Element__java_lang_String__elemental2_dom_TrustedScriptURL(/** !Element */ $thisArg, /** ?string */ name, /** TrustedScriptURL */ value) {
  Element_$Overlay.$clinit();
  $thisArg.setAttribute(name, /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(value)));
 }
 
 static m_setAttribute__$devirt__elemental2_dom_Element__java_lang_String__boolean(/** !Element */ $thisArg, /** ?string */ name, /** boolean */ value) {
  Element_$Overlay.$clinit();
  $thisArg.setAttribute(name, /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(value)));
 }
 
 static m_setAttribute__$devirt__elemental2_dom_Element__java_lang_String__double(/** !Element */ $thisArg, /** ?string */ name, /** number */ value) {
  Element_$Overlay.$clinit();
  $thisArg.setAttribute(name, /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(value)));
 }
 
 static m_setAttributeNS__$devirt__elemental2_dom_Element__java_lang_String__java_lang_String__java_lang_String(/** !Element */ $thisArg, /** ?string */ namespaceURI, /** ?string */ qualifiedName, /** ?string */ value) {
  Element_$Overlay.$clinit();
  $thisArg.setAttributeNS(namespaceURI, qualifiedName, /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(value)));
 }
 
 static m_setAttributeNS__$devirt__elemental2_dom_Element__java_lang_String__java_lang_String__boolean(/** !Element */ $thisArg, /** ?string */ namespaceURI, /** ?string */ qualifiedName, /** boolean */ value) {
  Element_$Overlay.$clinit();
  $thisArg.setAttributeNS(namespaceURI, qualifiedName, /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(value)));
 }
 
 static m_setAttributeNS__$devirt__elemental2_dom_Element__java_lang_String__java_lang_String__double(/** !Element */ $thisArg, /** ?string */ namespaceURI, /** ?string */ qualifiedName, /** number */ value) {
  Element_$Overlay.$clinit();
  $thisArg.setAttributeNS(namespaceURI, qualifiedName, /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(value)));
 }
 /** @return {number} */
 static get f_ALLOW_KEYBOARD_INPUT__elemental2_dom_Element_$Overlay() {
  return (Element_$Overlay.$clinit(), Element_$Overlay.$f_ALLOW_KEYBOARD_INPUT__elemental2_dom_Element_$Overlay);
 }
 
 static $clinit() {
  Element_$Overlay.$clinit = () =>{};
  Element_$Overlay.$loadModules();
  Element_$Overlay.$f_ALLOW_KEYBOARD_INPUT__elemental2_dom_Element_$Overlay = Element.ALLOW_KEYBOARD_INPUT;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Element;
 }
 
 static $loadModules() {
  InternalPreconditions = goog.module.get('javaemul.internal.InternalPreconditions$impl');
  Js = goog.module.get('jsinterop.base.Js$impl');
 }
 
}
$Util.$setClassMetadata(Element_$Overlay, 'Element');

/**@private {number}*/
Element_$Overlay.$f_ALLOW_KEYBOARD_INPUT__elemental2_dom_Element_$Overlay = 0;

exports = Element_$Overlay; 
//# sourceMappingURL=Element$$Overlay.js.map
