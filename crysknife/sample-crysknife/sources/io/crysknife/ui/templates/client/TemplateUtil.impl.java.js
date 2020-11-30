goog.module('io.crysknife.ui.templates.client.TemplateUtil$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let JsArray_$Overlay = goog.forwardDeclare('elemental2.core.JsArray.$Overlay$impl');
let DomGlobal_$Overlay = goog.forwardDeclare('elemental2.dom.DomGlobal.$Overlay$impl');
let Element_$Overlay = goog.forwardDeclare('elemental2.dom.Element.$Overlay$impl');
let $Overlay = goog.forwardDeclare('elemental2.dom.HTMLElement.$Overlay$impl');
let NodeFilter_$Overlay = goog.forwardDeclare('elemental2.dom.NodeFilter.$Overlay$impl');
let SelectorFunction = goog.forwardDeclare('io.crysknife.ui.templates.client.TemplateUtil.SelectorFunction$impl');
let NullPointerException = goog.forwardDeclare('java.lang.NullPointerException$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let List = goog.forwardDeclare('java.util.List$impl');
let Js = goog.forwardDeclare('jsinterop.base.Js$impl');
let JsArrayLike_$Overlay = goog.forwardDeclare('jsinterop.base.JsArrayLike.$Overlay$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let SafeHtml = goog.forwardDeclare('org.gwtproject.safehtml.shared.SafeHtml$impl');
let SafeHtmlUtils = goog.forwardDeclare('org.gwtproject.safehtml.shared.SafeHtmlUtils$impl');
let IsElement = goog.forwardDeclare('org.jboss.elemento.IsElement$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');
let $Exceptions = goog.forwardDeclare('vmbootstrap.Exceptions$impl');

class TemplateUtil extends j_l_Object {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!TemplateUtil} */
 static $create__() {
  let $instance = new TemplateUtil();
  $instance.$ctor__io_crysknife_ui_templates_client_TemplateUtil__();
  return $instance;
 }
 
 $ctor__io_crysknife_ui_templates_client_TemplateUtil__() {
  this.$ctor__java_lang_Object__();
 }
 /** @template E @return {E} */
 static m_resolveElement__elemental2_dom_HTMLElement__java_lang_String(/** HTMLElement */ context, /** ?string */ identifier) {
  TemplateUtil.$clinit();
  let element = TemplateUtil.f_DATA_ELEMENT__io_crysknife_ui_templates_client_TemplateUtil_.m_select__elemental2_dom_HTMLElement__java_lang_String(context, identifier);
  return Js.m_cast__java_lang_Object(element);
 }
 /** @template E @return {E} */
 static m_resolveElementAs__elemental2_dom_HTMLElement__java_lang_String(/** HTMLElement */ context, /** ?string */ identifier) {
  TemplateUtil.$clinit();
  let element = TemplateUtil.f_DATA_ELEMENT__io_crysknife_ui_templates_client_TemplateUtil_.m_select__elemental2_dom_HTMLElement__java_lang_String(context, identifier);
  let htmlElement = /**@type {E}*/ ($Casts.$to(Js.m_cast__java_lang_Object(element), $Overlay));
  return htmlElement;
 }
 
 static m_replaceElement__elemental2_dom_HTMLElement__java_lang_String__elemental2_dom_HTMLElement(/** HTMLElement */ context, /** ?string */ identifier, /** HTMLElement */ newElement) {
  TemplateUtil.$clinit();
  if ($Equality.$same(newElement, null)) {
   throw $Exceptions.toJs(NullPointerException.$create__java_lang_String("New element must not be null in TemplateUtils.replaceElement()"));
  }
  let oldElement = /**@type {HTMLElement}*/ ($Casts.$to(TemplateUtil.m_resolveElement__elemental2_dom_HTMLElement__java_lang_String(context, identifier), $Overlay));
  if (!$Equality.$same(oldElement, null) && !$Equality.$same(oldElement.parentNode, null)) {
   oldElement.parentNode.replaceChild(newElement, oldElement);
   if (oldElement.hasAttributes()) {
    for (let $iterator = /**@type {List<?string>}*/ (JsArrayLike_$Overlay.m_asList__$devirt__jsinterop_base_JsArrayLike(/**@type {Array<?string>}*/ ($Casts.$to(Js.m_uncheckedCast__java_lang_Object(oldElement.getAttributeNames()), JsArray_$Overlay)))).m_iterator__(); $iterator.m_hasNext__(); ) {
     let attributeName = /**@type {?string}*/ ($Casts.$to($iterator.m_next__(), j_l_String));
     Element_$Overlay.m_setAttribute__$devirt__elemental2_dom_Element__java_lang_String__java_lang_String(newElement, attributeName, oldElement.getAttribute(attributeName));
    }
   }
   if (j_l_String.m_isEmpty__java_lang_String(newElement.innerHTML) && !j_l_String.m_isEmpty__java_lang_String(oldElement.innerHTML)) {
    newElement.innerHTML = oldElement.innerHTML;
   }
  }
 }
 
 static m_replaceIsElement__elemental2_dom_HTMLElement__java_lang_String__org_jboss_elemento_IsElement(/** HTMLElement */ context, /** ?string */ identifier, /** IsElement */ newElement) {
  TemplateUtil.$clinit();
  TemplateUtil.m_replaceElement__elemental2_dom_HTMLElement__java_lang_String__elemental2_dom_HTMLElement(context, identifier, newElement.m_element__());
 }
 /** @template E @return {E} */
 static m_resolveCustomElement__elemental2_dom_HTMLElement__java_lang_String(/** HTMLElement */ context, /** ?string */ identifier) {
  TemplateUtil.$clinit();
  let element = TemplateUtil.f_DATA_ELEMENT__io_crysknife_ui_templates_client_TemplateUtil_.m_select__elemental2_dom_HTMLElement__java_lang_String(context, identifier);
  let customElement = Js.m_cast__java_lang_Object(element);
  return customElement;
 }
 /** @template E */
 static m_replaceCustomElement__elemental2_dom_HTMLElement__java_lang_String__java_lang_Object(/** HTMLElement */ context, /** ?string */ identifier, /** E */ customElement) {
  TemplateUtil.$clinit();
  let element = /**@type {HTMLElement}*/ ($Casts.$to(Js.m_cast__java_lang_Object(customElement), $Overlay));
  TemplateUtil.m_replaceElement__elemental2_dom_HTMLElement__java_lang_String__elemental2_dom_HTMLElement(context, identifier, element);
 }
 
 static m_replaceExpression__elemental2_dom_HTMLElement__java_lang_String__java_lang_Object(/** HTMLElement */ context, /** ?string */ expression, /** * */ value) {
  TemplateUtil.$clinit();
  let /** SafeHtml */ safeValue;
  if (SafeHtml.$isInstance(value)) {
   safeValue = /**@type {SafeHtml}*/ ($Casts.$to(value, SafeHtml));
  } else {
   safeValue = SafeHtmlUtils.m_fromString__java_lang_String(j_l_String.m_valueOf__java_lang_Object(value));
  }
  TemplateUtil.m_replaceNestedExpressionInText__elemental2_dom_HTMLElement__java_lang_String__java_lang_String(context, expression, j_l_String.m_valueOf__java_lang_Object(value));
  TemplateUtil.m_replaceNestedExpressionInAttributes__elemental2_dom_HTMLElement__java_lang_String__java_lang_String(context, expression, safeValue.m_asString__());
  TemplateUtil.m_replaceExpressionInAttributes__elemental2_dom_HTMLElement__java_lang_String__java_lang_String(context, expression, safeValue.m_asString__());
 }
 
 static m_replaceNestedExpressionInText__elemental2_dom_HTMLElement__java_lang_String__java_lang_String(/** HTMLElement */ context, /** ?string */ expression, /** ?string */ value) {
  let treeWalker = DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createTreeWalker(context, NodeFilter_$Overlay.f_SHOW_TEXT__elemental2_dom_NodeFilter_$Overlay, null, false);
  while (!$Equality.$same(treeWalker.nextNode(), null)) {
   if (!$Equality.$same(treeWalker.currentNode.nodeValue, null) && j_l_String.m_contains__java_lang_String__java_lang_CharSequence(treeWalker.currentNode.nodeValue, expression)) {
    treeWalker.currentNode.nodeValue = j_l_String.m_replace__java_lang_String__java_lang_CharSequence__java_lang_CharSequence(treeWalker.currentNode.nodeValue, expression, value);
   }
  }
 }
 
 static m_replaceNestedExpressionInAttributes__elemental2_dom_HTMLElement__java_lang_String__java_lang_String(/** HTMLElement */ context, /** ?string */ expression, /** ?string */ value) {
  let treeWalker = DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createTreeWalker(context, NodeFilter_$Overlay.f_SHOW_ELEMENT__elemental2_dom_NodeFilter_$Overlay, null, false);
  while (!$Equality.$same(treeWalker.nextNode(), null)) {
   if ($Overlay.$isInstance(treeWalker.currentNode)) {
    TemplateUtil.m_replaceExpressionInAttributes__elemental2_dom_HTMLElement__java_lang_String__java_lang_String(/**@type {HTMLElement}*/ ($Casts.$to(treeWalker.currentNode, $Overlay)), expression, value);
   }
  }
 }
 
 static m_replaceExpressionInAttributes__elemental2_dom_HTMLElement__java_lang_String__java_lang_String(/** HTMLElement */ context, /** ?string */ expression, /** ?string */ value) {
  let attributes = context.attributes;
  for (let i = 0; i < JsArrayLike_$Overlay.m_getLength__$devirt__jsinterop_base_JsArrayLike(attributes); i++) {
   let attribute = attributes.item(i);
   let currentValue = attribute.nodeValue;
   if (!$Equality.$same(currentValue, null) && j_l_String.m_contains__java_lang_String__java_lang_CharSequence(currentValue, expression)) {
    attribute.nodeValue = j_l_String.m_replace__java_lang_String__java_lang_CharSequence__java_lang_CharSequence(currentValue, expression, value);
   }
  }
 }
 
 static $clinit() {
  TemplateUtil.$clinit = () =>{};
  TemplateUtil.$loadModules();
  j_l_Object.$clinit();
  TemplateUtil.f_DATA_ELEMENT__io_crysknife_ui_templates_client_TemplateUtil_ = SelectorFunction.$adapt((/** HTMLElement */ context, /** ?string */ identifier) =>{
   return context.querySelector("[data-field=" + j_l_String.m_valueOf__java_lang_Object(identifier) + "]");
  });
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof TemplateUtil;
 }
 
 static $loadModules() {
  JsArray_$Overlay = goog.module.get('elemental2.core.JsArray.$Overlay$impl');
  DomGlobal_$Overlay = goog.module.get('elemental2.dom.DomGlobal.$Overlay$impl');
  Element_$Overlay = goog.module.get('elemental2.dom.Element.$Overlay$impl');
  $Overlay = goog.module.get('elemental2.dom.HTMLElement.$Overlay$impl');
  NodeFilter_$Overlay = goog.module.get('elemental2.dom.NodeFilter.$Overlay$impl');
  SelectorFunction = goog.module.get('io.crysknife.ui.templates.client.TemplateUtil.SelectorFunction$impl');
  NullPointerException = goog.module.get('java.lang.NullPointerException$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  Js = goog.module.get('jsinterop.base.Js$impl');
  JsArrayLike_$Overlay = goog.module.get('jsinterop.base.JsArrayLike.$Overlay$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  SafeHtml = goog.module.get('org.gwtproject.safehtml.shared.SafeHtml$impl');
  SafeHtmlUtils = goog.module.get('org.gwtproject.safehtml.shared.SafeHtmlUtils$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
  $Exceptions = goog.module.get('vmbootstrap.Exceptions$impl');
 }
 
}
$Util.$setClassMetadata(TemplateUtil, 'io.crysknife.ui.templates.client.TemplateUtil');

/**@type {SelectorFunction}*/
TemplateUtil.f_DATA_ELEMENT__io_crysknife_ui_templates_client_TemplateUtil_;

exports = TemplateUtil; 
//# sourceMappingURL=TemplateUtil.js.map
