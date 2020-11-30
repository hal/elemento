goog.module('org.jboss.elemento.sample.j2cl.FooterElement$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const IsElement = goog.require('org.jboss.elemento.IsElement$impl');

let HTMLAnchorElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLAnchorElement.$Overlay$impl');
let $Overlay = goog.forwardDeclare('elemental2.dom.HTMLElement.$Overlay$impl');
let HTMLParagraphElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLParagraphElement.$Overlay$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let Elements = goog.forwardDeclare('org.jboss.elemento.Elements$impl');
let HtmlContentBuilder = goog.forwardDeclare('org.jboss.elemento.HtmlContentBuilder$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @implements {IsElement<HTMLElement>}
  */
class FooterElement extends j_l_Object {
 /** @protected */
 constructor() {
  super();
  /**@type {HTMLElement}*/
  this.f_root__org_jboss_elemento_sample_j2cl_FooterElement_;
 }
 /** @return {!FooterElement} */
 static $create__() {
  FooterElement.$clinit();
  let $instance = new FooterElement();
  $instance.$ctor__org_jboss_elemento_sample_j2cl_FooterElement__();
  return $instance;
 }
 
 $ctor__org_jboss_elemento_sample_j2cl_FooterElement__() {
  this.$ctor__java_lang_Object__();
  this.f_root__org_jboss_elemento_sample_j2cl_FooterElement_ = /**@type {HtmlContentBuilder<HTMLElement>}*/ ($Casts.$to(/**@type {HtmlContentBuilder<HTMLElement>}*/ ($Casts.$to(/**@type {HtmlContentBuilder<HTMLElement>}*/ ($Casts.$to(/**@type {HtmlContentBuilder<HTMLElement>}*/ ($Casts.$to(Elements.m_footer__().m_css__arrayOf_java_lang_String(/**@type {!Array<?string>}*/ ($Arrays.$init(["info"], j_l_String))), HtmlContentBuilder)).m_add__org_jboss_elemento_IsElement(/**@type {HtmlContentBuilder<HTMLParagraphElement>}*/ ($Casts.$to(Elements.m_p__().m_textContent__java_lang_String("Double-click to edit a todo"), HtmlContentBuilder))), HtmlContentBuilder)).m_add__org_jboss_elemento_IsElement(/**@type {HtmlContentBuilder<HTMLParagraphElement>}*/ ($Casts.$to(/**@type {HtmlContentBuilder<HTMLParagraphElement>}*/ ($Casts.$to(Elements.m_p__().m_add__org_jboss_elemento_IsElement(/**@type {HtmlContentBuilder<HTMLElement>}*/ ($Casts.$to(Elements.m_span__().m_textContent__java_lang_String("Created by" + " "), HtmlContentBuilder))), HtmlContentBuilder)).m_add__org_jboss_elemento_IsElement(/**@type {HtmlContentBuilder<HTMLAnchorElement>}*/ ($Casts.$to(Elements.m_a__java_lang_String("http://hpehl.info").m_textContent__java_lang_String("Harald Pehl"), HtmlContentBuilder))), HtmlContentBuilder))), HtmlContentBuilder)).m_add__org_jboss_elemento_IsElement(/**@type {HtmlContentBuilder<HTMLParagraphElement>}*/ ($Casts.$to(/**@type {HtmlContentBuilder<HTMLParagraphElement>}*/ ($Casts.$to(Elements.m_p__().m_add__org_jboss_elemento_IsElement(/**@type {HtmlContentBuilder<HTMLElement>}*/ ($Casts.$to(Elements.m_span__().m_textContent__java_lang_String("Part of" + " "), HtmlContentBuilder))), HtmlContentBuilder)).m_add__org_jboss_elemento_IsElement(/**@type {HtmlContentBuilder<HTMLAnchorElement>}*/ ($Casts.$to(Elements.m_a__java_lang_String("http://todomvc.com").m_textContent__java_lang_String("TodoMVC"), HtmlContentBuilder))), HtmlContentBuilder))), HtmlContentBuilder)).m_element__();
 }
 /** @override @return {HTMLElement} */
 m_element__() {
  return this.f_root__org_jboss_elemento_sample_j2cl_FooterElement_;
 }
 
 static $clinit() {
  FooterElement.$clinit = () =>{};
  FooterElement.$loadModules();
  j_l_Object.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof FooterElement;
 }
 
 static $loadModules() {
  j_l_String = goog.module.get('java.lang.String$impl');
  Elements = goog.module.get('org.jboss.elemento.Elements$impl');
  HtmlContentBuilder = goog.module.get('org.jboss.elemento.HtmlContentBuilder$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
 
}
$Util.$setClassMetadata(FooterElement, 'org.jboss.elemento.sample.j2cl.FooterElement');

IsElement.$markImplementor(FooterElement);

exports = FooterElement; 
//# sourceMappingURL=FooterElement.js.map
