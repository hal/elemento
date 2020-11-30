goog.module('org.gwtproject.dom.builder.client.DomMapBuilder$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const DomElementBuilderBase = goog.require('org.gwtproject.dom.builder.client.DomElementBuilderBase$impl');
const MapBuilder = goog.require('org.gwtproject.dom.builder.shared.MapBuilder$impl');

let DomBuilderImpl = goog.forwardDeclare('org.gwtproject.dom.builder.client.DomBuilderImpl$impl');
let $Overlay = goog.forwardDeclare('org.gwtproject.dom.client.MapElement.$Overlay$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @extends {DomElementBuilderBase<MapBuilder, Object>}
 * @implements {MapBuilder}
  */
class DomMapBuilder extends DomElementBuilderBase {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!DomMapBuilder} */
 static $create__org_gwtproject_dom_builder_client_DomBuilderImpl(/** DomBuilderImpl */ delegate) {
  DomMapBuilder.$clinit();
  let $instance = new DomMapBuilder();
  $instance.$ctor__org_gwtproject_dom_builder_client_DomMapBuilder__org_gwtproject_dom_builder_client_DomBuilderImpl(delegate);
  return $instance;
 }
 
 $ctor__org_gwtproject_dom_builder_client_DomMapBuilder__org_gwtproject_dom_builder_client_DomBuilderImpl(/** DomBuilderImpl */ delegate) {
  this.$ctor__org_gwtproject_dom_builder_client_DomElementBuilderBase__org_gwtproject_dom_builder_client_DomBuilderImpl(delegate);
 }
 /** @override @return {MapBuilder} */
 m_name__java_lang_String(/** ?string */ name) {
  /**@type {Object}*/ ($Casts.$to(this.m_assertCanAddAttribute__(), $Overlay)).name = name;
  return this;
 }
 
 static $clinit() {
  DomMapBuilder.$clinit = () =>{};
  DomMapBuilder.$loadModules();
  DomElementBuilderBase.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof DomMapBuilder;
 }
 
 static $loadModules() {
  $Overlay = goog.module.get('org.gwtproject.dom.client.MapElement.$Overlay$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
 
}
$Util.$setClassMetadata(DomMapBuilder, 'org.gwtproject.dom.builder.client.DomMapBuilder');

MapBuilder.$markImplementor(DomMapBuilder);

exports = DomMapBuilder; 
//# sourceMappingURL=DomMapBuilder.js.map
