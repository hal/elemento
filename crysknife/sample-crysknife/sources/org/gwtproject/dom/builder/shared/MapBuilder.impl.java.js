goog.module('org.gwtproject.dom.builder.shared.MapBuilder$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const ElementBuilderBase = goog.require('org.gwtproject.dom.builder.shared.ElementBuilderBase$impl');

/**
 * @interface
 * @extends {ElementBuilderBase<MapBuilder>}
 */
class MapBuilder {
 /** @abstract @return {MapBuilder} */
 m_name__java_lang_String(/** ?string */ name) {}
 
 static $clinit() {
  MapBuilder.$clinit = () =>{};
  MapBuilder.$loadModules();
 }
 
 static $markImplementor(/** Function*/ ctor)
 {
  ElementBuilderBase.$markImplementor(ctor);
  ctor.prototype.$implements__org_gwtproject_dom_builder_shared_MapBuilder = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_gwtproject_dom_builder_shared_MapBuilder;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(MapBuilder, 'org.gwtproject.dom.builder.shared.MapBuilder');

MapBuilder.$markImplementor(/** @type {Function} */ (MapBuilder));

exports = MapBuilder; 
//# sourceMappingURL=MapBuilder.js.map
