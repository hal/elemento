goog.module('org.gwtproject.dom.builder.client.DomSelectBuilder$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const DomElementBuilderBase = goog.require('org.gwtproject.dom.builder.client.DomElementBuilderBase$impl');
const SelectBuilder = goog.require('org.gwtproject.dom.builder.shared.SelectBuilder$impl');

let DomBuilderImpl = goog.forwardDeclare('org.gwtproject.dom.builder.client.DomBuilderImpl$impl');
let $Overlay = goog.forwardDeclare('org.gwtproject.dom.client.SelectElement.$Overlay$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @extends {DomElementBuilderBase<SelectBuilder, Object>}
 * @implements {SelectBuilder}
  */
class DomSelectBuilder extends DomElementBuilderBase {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!DomSelectBuilder} */
 static $create__org_gwtproject_dom_builder_client_DomBuilderImpl(/** DomBuilderImpl */ delegate) {
  DomSelectBuilder.$clinit();
  let $instance = new DomSelectBuilder();
  $instance.$ctor__org_gwtproject_dom_builder_client_DomSelectBuilder__org_gwtproject_dom_builder_client_DomBuilderImpl(delegate);
  return $instance;
 }
 
 $ctor__org_gwtproject_dom_builder_client_DomSelectBuilder__org_gwtproject_dom_builder_client_DomBuilderImpl(/** DomBuilderImpl */ delegate) {
  this.$ctor__org_gwtproject_dom_builder_client_DomElementBuilderBase__org_gwtproject_dom_builder_client_DomBuilderImpl(delegate);
 }
 /** @override @return {SelectBuilder} */
 m_disabled__() {
  /**@type {Object}*/ ($Casts.$to(this.m_assertCanAddAttribute__(), $Overlay)).disabled = true;
  return this;
 }
 /** @override @return {SelectBuilder} */
 m_multiple__() {
  /**@type {Object}*/ ($Casts.$to(this.m_assertCanAddAttribute__(), $Overlay)).multiple = true;
  return this;
 }
 /** @override @return {SelectBuilder} */
 m_name__java_lang_String(/** ?string */ name) {
  /**@type {Object}*/ ($Casts.$to(this.m_assertCanAddAttribute__(), $Overlay)).name = name;
  return this;
 }
 /** @override @return {SelectBuilder} */
 m_selectedIndex__int(/** number */ index) {
  /**@type {Object}*/ ($Casts.$to(this.m_assertCanAddAttribute__(), $Overlay)).selectedIndex = index;
  return this;
 }
 /** @override @return {SelectBuilder} */
 m_size__int(/** number */ size) {
  /**@type {Object}*/ ($Casts.$to(this.m_assertCanAddAttribute__(), $Overlay)).size = size;
  return this;
 }
 /** @override @return {SelectBuilder} */
 m_type__java_lang_String(/** ?string */ type) {
  /**@type {Object}*/ ($Casts.$to(this.m_assertCanAddAttribute__(), $Overlay)).type = type;
  return this;
 }
 /** @override @return {SelectBuilder} */
 m_value__java_lang_String(/** ?string */ value) {
  /**@type {Object}*/ ($Casts.$to(this.m_assertCanAddAttribute__(), $Overlay)).value = value;
  return this;
 }
 
 static $clinit() {
  DomSelectBuilder.$clinit = () =>{};
  DomSelectBuilder.$loadModules();
  DomElementBuilderBase.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof DomSelectBuilder;
 }
 
 static $loadModules() {
  $Overlay = goog.module.get('org.gwtproject.dom.client.SelectElement.$Overlay$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
 
}
$Util.$setClassMetadata(DomSelectBuilder, 'org.gwtproject.dom.builder.client.DomSelectBuilder');

SelectBuilder.$markImplementor(DomSelectBuilder);

exports = DomSelectBuilder; 
//# sourceMappingURL=DomSelectBuilder.js.map
