goog.module('org.jboss.elemento.HtmlContent$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const TextContent = goog.require('org.jboss.elemento.TextContent$impl');

let $Overlay = goog.forwardDeclare('elemental2.dom.Document.$Overlay$impl');
let Element_$Overlay = goog.forwardDeclare('elemental2.dom.Element.$Overlay$impl');
let HTMLElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLElement.$Overlay$impl');
let Node_$Overlay = goog.forwardDeclare('elemental2.dom.Node.$Overlay$impl');
let Iterable = goog.forwardDeclare('java.lang.Iterable$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let SafeHtml = goog.forwardDeclare('org.gwtproject.safehtml.shared.SafeHtml$impl');
let IsElement = goog.forwardDeclare('org.jboss.elemento.IsElement$impl');
let TypedBuilder = goog.forwardDeclare('org.jboss.elemento.TypedBuilder$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @interface
 * @template E, B
 * @extends {TextContent<E, B>}
 */
class HtmlContent {
 /** @abstract @return {B} */
 m_innerHtml__org_gwtproject_safehtml_shared_SafeHtml(/** SafeHtml */ html) {}
 /** @abstract @return {B} */
 m_add__java_lang_String(/** ?string */ text) {}
 /** @abstract @return {B} */
 m_add__elemental2_dom_Node(/** Node */ element) {}
 /** @abstract @return {B} */
 m_add__org_jboss_elemento_IsElement(/** IsElement<?> */ element) {}
 /** @abstract @return {B} */
 m_addAll__arrayOf_elemental2_dom_Node(/** Array<Node> */ nodes) {}
 /** @abstract @return {B} */
 m_addAll__arrayOf_elemental2_dom_Element(/** Array<Element> */ elements) {}
 /** @abstract @return {B} */
 m_addAll__arrayOf_elemental2_dom_HTMLElement(/** Array<HTMLElement> */ elements) {}
 /** @abstract @template F @return {B} */
 m_addAll__arrayOf_org_jboss_elemento_IsElement(/** Array<IsElement<?>> */ elements) {}
 /** @abstract @return {B} */
 m_addAll__java_lang_Iterable(/** Iterable<?> */ elements) {}
 /** @template E, B @return {B} */
 static m_innerHtml__$default__org_jboss_elemento_HtmlContent__org_gwtproject_safehtml_shared_SafeHtml(/** !HtmlContent<E, B> */ $thisArg, /** SafeHtml */ html) {
  HtmlContent.$clinit();
  /**@type {HTMLElement}*/ ($thisArg.m_element__()).innerHTML = html.m_asString__();
  return $thisArg.m_that__();
 }
 /** @template E, B @return {B} */
 static m_add__$default__org_jboss_elemento_HtmlContent__java_lang_String(/** !HtmlContent<E, B> */ $thisArg, /** ?string */ text) {
  HtmlContent.$clinit();
  return $thisArg.m_add__elemental2_dom_Node($Overlay.m_createTextNode__$devirt__elemental2_dom_Document__java_lang_String(/**@type {HTMLElement}*/ ($thisArg.m_element__()).ownerDocument, text));
 }
 /** @template E, B @return {B} */
 static m_add__$default__org_jboss_elemento_HtmlContent__elemental2_dom_Node(/** !HtmlContent<E, B> */ $thisArg, /** Node */ element) {
  HtmlContent.$clinit();
  /**@type {HTMLElement}*/ ($thisArg.m_element__()).appendChild(element);
  return $thisArg.m_that__();
 }
 /** @template E, B @return {B} */
 static m_add__$default__org_jboss_elemento_HtmlContent__org_jboss_elemento_IsElement(/** !HtmlContent<E, B> */ $thisArg, /** IsElement<?> */ element) {
  HtmlContent.$clinit();
  if (!$Equality.$same(element, null)) {
   return $thisArg.m_add__elemental2_dom_Node(element.m_element__());
  }
  return $thisArg.m_that__();
 }
 /** @template E, B @return {B} */
 static m_addAll__$default__org_jboss_elemento_HtmlContent__arrayOf_elemental2_dom_Node(/** !HtmlContent<E, B> */ $thisArg, /** Array<Node> */ nodes) {
  HtmlContent.$clinit();
  for (let $array = nodes, $index = 0; $index < $array.length; $index++) {
   let node = $array[$index];
   $thisArg.m_add__elemental2_dom_Node(node);
  }
  return $thisArg.m_that__();
 }
 /** @template E, B @return {B} */
 static m_addAll__$default__org_jboss_elemento_HtmlContent__arrayOf_elemental2_dom_Element(/** !HtmlContent<E, B> */ $thisArg, /** Array<Element> */ elements) {
  HtmlContent.$clinit();
  for (let $array = elements, $index = 0; $index < $array.length; $index++) {
   let element = $array[$index];
   $thisArg.m_add__elemental2_dom_Node(element);
  }
  return $thisArg.m_that__();
 }
 /** @template E, B @return {B} */
 static m_addAll__$default__org_jboss_elemento_HtmlContent__arrayOf_elemental2_dom_HTMLElement(/** !HtmlContent<E, B> */ $thisArg, /** Array<HTMLElement> */ elements) {
  HtmlContent.$clinit();
  for (let $array = elements, $index = 0; $index < $array.length; $index++) {
   let element = $array[$index];
   $thisArg.m_add__elemental2_dom_Node(element);
  }
  return $thisArg.m_that__();
 }
 /** @template F, E, B @return {B} */
 static m_addAll__$default__org_jboss_elemento_HtmlContent__arrayOf_org_jboss_elemento_IsElement(/** !HtmlContent<E, B> */ $thisArg, /** Array<IsElement<?>> */ elements) {
  HtmlContent.$clinit();
  for (let $array = elements, $index = 0; $index < $array.length; $index++) {
   let element = $array[$index];
   if (!$Equality.$same(element, null)) {
    $thisArg.m_add__elemental2_dom_Node(element.m_element__());
   }
  }
  return $thisArg.m_that__();
 }
 /** @template E, B @return {B} */
 static m_addAll__$default__org_jboss_elemento_HtmlContent__java_lang_Iterable(/** !HtmlContent<E, B> */ $thisArg, /** Iterable<?> */ elements) {
  HtmlContent.$clinit();
  for (let $iterator = elements.m_iterator__(); $iterator.m_hasNext__(); ) {
   let element = $iterator.m_next__();
   if (Node_$Overlay.$isInstance(element)) {
    $thisArg.m_add__elemental2_dom_Node(/**@type {Node}*/ ($Casts.$to(element, Node_$Overlay)));
   } else if (IsElement.$isInstance(element)) {
    $thisArg.m_add__elemental2_dom_Node(/**@type {IsElement}*/ ($Casts.$to(element, IsElement)).m_element__());
   }
  }
  return $thisArg.m_that__();
 }
 
 static $clinit() {
  HtmlContent.$clinit = () =>{};
  HtmlContent.$loadModules();
  TextContent.$clinit();
 }
 
 static $markImplementor(/** Function*/ ctor)
 {
  TextContent.$markImplementor(ctor);
  ctor.prototype.$implements__org_jboss_elemento_HtmlContent = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_jboss_elemento_HtmlContent;
 }
 
 static $loadModules() {
  $Overlay = goog.module.get('elemental2.dom.Document.$Overlay$impl');
  Node_$Overlay = goog.module.get('elemental2.dom.Node.$Overlay$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  IsElement = goog.module.get('org.jboss.elemento.IsElement$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
 
}
$Util.$setClassMetadataForInterface(HtmlContent, 'org.jboss.elemento.HtmlContent');

HtmlContent.$markImplementor(/** @type {Function} */ (HtmlContent));

exports = HtmlContent; 
//# sourceMappingURL=HtmlContent.js.map
