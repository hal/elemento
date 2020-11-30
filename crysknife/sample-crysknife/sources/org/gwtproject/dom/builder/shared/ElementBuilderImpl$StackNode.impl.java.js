goog.module('org.gwtproject.dom.builder.shared.ElementBuilderImpl.StackNode$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let ElementBuilderBase = goog.forwardDeclare('org.gwtproject.dom.builder.shared.ElementBuilderBase$impl');

class StackNode extends j_l_Object {
 /** @protected */
 constructor() {
  super();
  /**@type {ElementBuilderBase<?>}*/
  this.f_builder__org_gwtproject_dom_builder_shared_ElementBuilderImpl_StackNode_;
  /**@type {StackNode}*/
  this.f_next__org_gwtproject_dom_builder_shared_ElementBuilderImpl_StackNode_;
  /**@type {?string}*/
  this.f_tagName__org_gwtproject_dom_builder_shared_ElementBuilderImpl_StackNode_;
 }
 /** @return {!StackNode} */
 static $create__java_lang_String__org_gwtproject_dom_builder_shared_ElementBuilderBase(/** ?string */ tagName, /** ElementBuilderBase<?> */ builder) {
  StackNode.$clinit();
  let $instance = new StackNode();
  $instance.$ctor__org_gwtproject_dom_builder_shared_ElementBuilderImpl_StackNode__java_lang_String__org_gwtproject_dom_builder_shared_ElementBuilderBase(tagName, builder);
  return $instance;
 }
 
 $ctor__org_gwtproject_dom_builder_shared_ElementBuilderImpl_StackNode__java_lang_String__org_gwtproject_dom_builder_shared_ElementBuilderBase(/** ?string */ tagName, /** ElementBuilderBase<?> */ builder) {
  this.$ctor__java_lang_Object__();
  this.f_builder__org_gwtproject_dom_builder_shared_ElementBuilderImpl_StackNode_ = builder;
  this.f_tagName__org_gwtproject_dom_builder_shared_ElementBuilderImpl_StackNode_ = tagName;
 }
 
 static $clinit() {
  StackNode.$clinit = () =>{};
  StackNode.$loadModules();
  j_l_Object.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof StackNode;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadata(StackNode, 'org.gwtproject.dom.builder.shared.ElementBuilderImpl$StackNode');

exports = StackNode; 
//# sourceMappingURL=ElementBuilderImpl$StackNode.js.map
