goog.module('org.gwtproject.dom.builder.client.DomOptionBuilder$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const DomElementBuilderBase = goog.require('org.gwtproject.dom.builder.client.DomElementBuilderBase$impl');
const OptionBuilder = goog.require('org.gwtproject.dom.builder.shared.OptionBuilder$impl');

let DomBuilderImpl = goog.forwardDeclare('org.gwtproject.dom.builder.client.DomBuilderImpl$impl');
let $Overlay = goog.forwardDeclare('org.gwtproject.dom.client.OptionElement.$Overlay$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @extends {DomElementBuilderBase<OptionBuilder, Object>}
 * @implements {OptionBuilder}
  */
class DomOptionBuilder extends DomElementBuilderBase {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!DomOptionBuilder} */
 static $create__org_gwtproject_dom_builder_client_DomBuilderImpl(/** DomBuilderImpl */ delegate) {
  DomOptionBuilder.$clinit();
  let $instance = new DomOptionBuilder();
  $instance.$ctor__org_gwtproject_dom_builder_client_DomOptionBuilder__org_gwtproject_dom_builder_client_DomBuilderImpl(delegate);
  return $instance;
 }
 
 $ctor__org_gwtproject_dom_builder_client_DomOptionBuilder__org_gwtproject_dom_builder_client_DomBuilderImpl(/** DomBuilderImpl */ delegate) {
  this.$ctor__org_gwtproject_dom_builder_client_DomElementBuilderBase__org_gwtproject_dom_builder_client_DomBuilderImpl(delegate);
 }
 /** @override @return {OptionBuilder} */
 m_defaultSelected__() {
  /**@type {Object}*/ ($Casts.$to(this.m_assertCanAddAttribute__(), $Overlay)).defaultSelected = true;
  return this;
 }
 /** @override @return {OptionBuilder} */
 m_disabled__() {
  /**@type {Object}*/ ($Casts.$to(this.m_assertCanAddAttribute__(), $Overlay)).disabled = true;
  return this;
 }
 /** @override @return {OptionBuilder} */
 m_label__java_lang_String(/** ?string */ label) {
  /**@type {Object}*/ ($Casts.$to(this.m_assertCanAddAttribute__(), $Overlay)).label = label;
  return this;
 }
 /** @override @return {OptionBuilder} */
 m_selected__() {
  /**@type {Object}*/ ($Casts.$to(this.m_assertCanAddAttribute__(), $Overlay)).selected = true;
  return this;
 }
 /** @override @return {OptionBuilder} */
 m_value__java_lang_String(/** ?string */ value) {
  /**@type {Object}*/ ($Casts.$to(this.m_assertCanAddAttribute__(), $Overlay)).value = value;
  return this;
 }
 
 static $clinit() {
  DomOptionBuilder.$clinit = () =>{};
  DomOptionBuilder.$loadModules();
  DomElementBuilderBase.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof DomOptionBuilder;
 }
 
 static $loadModules() {
  $Overlay = goog.module.get('org.gwtproject.dom.client.OptionElement.$Overlay$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
 
}
$Util.$setClassMetadata(DomOptionBuilder, 'org.gwtproject.dom.builder.client.DomOptionBuilder');

OptionBuilder.$markImplementor(DomOptionBuilder);

exports = DomOptionBuilder; 
//# sourceMappingURL=DomOptionBuilder.js.map
