goog.module('org.jboss.elemento.sample.crysknife.FooterElement_Factory$impl');

const Factory = goog.require('io.crysknife.client.internal.Factory$impl');
const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let HTMLElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLElement.$Overlay$impl');
let reflect = goog.forwardDeclare('goog.reflect');
let Interceptor = goog.forwardDeclare('io.crysknife.client.Interceptor$impl');
let TemplateUtil = goog.forwardDeclare('io.crysknife.ui.templates.client.TemplateUtil$impl');
let Js = goog.forwardDeclare('jsinterop.base.Js$impl');
let $Overlay = goog.forwardDeclare('jsinterop.base.JsPropertyMap.$Overlay$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let org_jboss_elemento_sample_crysknife_FooterElement = goog.forwardDeclare('org.jboss.elemento.sample.crysknife.FooterElement$impl');
let FooterElement = goog.forwardDeclare('org.jboss.elemento.sample.crysknife.FooterElement_Factory.FooterElement$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @implements {Factory<org_jboss_elemento_sample_crysknife_FooterElement>}
  */
class FooterElement__Factory extends j_l_Object {
 /** @protected */
 constructor() {
  super();
  /**@type {Interceptor}*/
  this.f_interceptor__org_jboss_elemento_sample_crysknife_FooterElement_Factory_;
  /**@type {FooterElement}*/
  this.f_instance__org_jboss_elemento_sample_crysknife_FooterElement_Factory_;
 }
 /** @override @return {FooterElement} */
 m_get__() {
  if (!$Equality.$same(this.f_instance__org_jboss_elemento_sample_crysknife_FooterElement_Factory_, null)) {
   return this.f_instance__org_jboss_elemento_sample_crysknife_FooterElement_Factory_;
  }
  this.f_interceptor__org_jboss_elemento_sample_crysknife_FooterElement_Factory_ = Interceptor.$create__java_lang_Object(FooterElement.$create__org_jboss_elemento_sample_crysknife_FooterElement_Factory(this));
  this.f_instance__org_jboss_elemento_sample_crysknife_FooterElement_Factory_ = /**@type {FooterElement}*/ ($Casts.$to(this.f_interceptor__org_jboss_elemento_sample_crysknife_FooterElement_Factory_.m_getProxy__(), FooterElement));
  if ($Equality.$same($Overlay.m_get__$devirt__jsinterop_base_JsPropertyMap__java_lang_String(Js.m_asPropertyMap__java_lang_Object(this.f_instance__org_jboss_elemento_sample_crysknife_FooterElement_Factory_), reflect.objectProperty("f_info__org_jboss_elemento_sample_crysknife_FooterElement", this.f_instance__org_jboss_elemento_sample_crysknife_FooterElement_Factory_)), null)) {
   $Overlay.m_set__$devirt__jsinterop_base_JsPropertyMap__java_lang_String__java_lang_Object(Js.m_asPropertyMap__java_lang_Object(this.f_instance__org_jboss_elemento_sample_crysknife_FooterElement_Factory_), reflect.objectProperty("f_info__org_jboss_elemento_sample_crysknife_FooterElement", this.f_instance__org_jboss_elemento_sample_crysknife_FooterElement_Factory_), TemplateUtil.m_resolveElement__elemental2_dom_HTMLElement__java_lang_String(this.f_instance__org_jboss_elemento_sample_crysknife_FooterElement_Factory_.m_element__(), "info"));
  } else {
   TemplateUtil.m_replaceElement__elemental2_dom_HTMLElement__java_lang_String__elemental2_dom_HTMLElement(this.f_instance__org_jboss_elemento_sample_crysknife_FooterElement_Factory_.m_element__(), "info", /**@type {HTMLElement}*/ ($Casts.$to($Overlay.m_get__$devirt__jsinterop_base_JsPropertyMap__java_lang_String(Js.m_asPropertyMap__java_lang_Object(this.f_instance__org_jboss_elemento_sample_crysknife_FooterElement_Factory_), reflect.objectProperty("f_info__org_jboss_elemento_sample_crysknife_FooterElement", this.f_instance__org_jboss_elemento_sample_crysknife_FooterElement_Factory_)), HTMLElement_$Overlay)));
  }
  return this.f_instance__org_jboss_elemento_sample_crysknife_FooterElement_Factory_;
 }
 /** @return {!FooterElement__Factory} */
 static $create__() {
  let $instance = new FooterElement__Factory();
  $instance.$ctor__org_jboss_elemento_sample_crysknife_FooterElement_Factory__();
  return $instance;
 }
 
 $ctor__org_jboss_elemento_sample_crysknife_FooterElement_Factory__() {
  this.$ctor__java_lang_Object__();
 }
 /** @return {FooterElement__Factory} */
 static m_create__() {
  FooterElement__Factory.$clinit();
  return FooterElement__Factory.$create__();
 }
 
 static $clinit() {
  FooterElement__Factory.$clinit = () =>{};
  FooterElement__Factory.$loadModules();
  j_l_Object.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof FooterElement__Factory;
 }
 
 static $loadModules() {
  HTMLElement_$Overlay = goog.module.get('elemental2.dom.HTMLElement.$Overlay$impl');
  reflect = goog.module.get('goog.reflect');
  Interceptor = goog.module.get('io.crysknife.client.Interceptor$impl');
  TemplateUtil = goog.module.get('io.crysknife.ui.templates.client.TemplateUtil$impl');
  Js = goog.module.get('jsinterop.base.Js$impl');
  $Overlay = goog.module.get('jsinterop.base.JsPropertyMap.$Overlay$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  FooterElement = goog.module.get('org.jboss.elemento.sample.crysknife.FooterElement_Factory.FooterElement$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
 
}
$Util.$setClassMetadata(FooterElement__Factory, 'org.jboss.elemento.sample.crysknife.FooterElement_Factory');

Factory.$markImplementor(FooterElement__Factory);

exports = FooterElement__Factory; 
//# sourceMappingURL=FooterElement_Factory.js.map
