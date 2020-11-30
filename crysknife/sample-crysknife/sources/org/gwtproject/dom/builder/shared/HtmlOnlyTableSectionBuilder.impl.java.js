goog.module('org.gwtproject.dom.builder.shared.HtmlOnlyTableSectionBuilder$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const HtmlTableSectionBuilder = goog.require('org.gwtproject.dom.builder.shared.HtmlTableSectionBuilder$impl');

let HtmlBuilderImpl = goog.forwardDeclare('org.gwtproject.dom.builder.shared.HtmlBuilderImpl$impl');
let TableSectionBuilder = goog.forwardDeclare('org.gwtproject.dom.builder.shared.TableSectionBuilder$impl');
let SafeHtml = goog.forwardDeclare('org.gwtproject.safehtml.shared.SafeHtml$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

class HtmlOnlyTableSectionBuilder extends HtmlTableSectionBuilder {
 /** @protected */
 constructor() {
  super();
  /**@type {HtmlBuilderImpl}*/
  this.f_delegate__org_gwtproject_dom_builder_shared_HtmlOnlyTableSectionBuilder_;
 }
 /** @return {HtmlOnlyTableSectionBuilder} */
 static m_createTBodyBuilder__() {
  HtmlOnlyTableSectionBuilder.$clinit();
  let htmlBuilderImpl = HtmlBuilderImpl.$create__();
  htmlBuilderImpl.m_startTBody__();
  return HtmlOnlyTableSectionBuilder.$create__org_gwtproject_dom_builder_shared_HtmlBuilderImpl(htmlBuilderImpl);
 }
 /** @return {HtmlOnlyTableSectionBuilder} */
 static m_createTFootBuilder__() {
  HtmlOnlyTableSectionBuilder.$clinit();
  let htmlBuilderImpl = HtmlBuilderImpl.$create__();
  htmlBuilderImpl.m_startTFoot__();
  return HtmlOnlyTableSectionBuilder.$create__org_gwtproject_dom_builder_shared_HtmlBuilderImpl(htmlBuilderImpl);
 }
 /** @return {HtmlOnlyTableSectionBuilder} */
 static m_createTHeadBuilder__() {
  HtmlOnlyTableSectionBuilder.$clinit();
  let htmlBuilderImpl = HtmlBuilderImpl.$create__();
  htmlBuilderImpl.m_startTHead__();
  return HtmlOnlyTableSectionBuilder.$create__org_gwtproject_dom_builder_shared_HtmlBuilderImpl(htmlBuilderImpl);
 }
 /** @return {!HtmlOnlyTableSectionBuilder} */
 static $create__org_gwtproject_dom_builder_shared_HtmlBuilderImpl(/** HtmlBuilderImpl */ delegate) {
  let $instance = new HtmlOnlyTableSectionBuilder();
  $instance.$ctor__org_gwtproject_dom_builder_shared_HtmlOnlyTableSectionBuilder__org_gwtproject_dom_builder_shared_HtmlBuilderImpl(delegate);
  return $instance;
 }
 
 $ctor__org_gwtproject_dom_builder_shared_HtmlOnlyTableSectionBuilder__org_gwtproject_dom_builder_shared_HtmlBuilderImpl(/** HtmlBuilderImpl */ delegate) {
  this.$ctor__org_gwtproject_dom_builder_shared_HtmlTableSectionBuilder__org_gwtproject_dom_builder_shared_HtmlBuilderImpl(delegate);
  this.f_delegate__org_gwtproject_dom_builder_shared_HtmlOnlyTableSectionBuilder_ = delegate;
 }
 /** @override @return {TableSectionBuilder} */
 m_html__org_gwtproject_safehtml_shared_SafeHtml(/** SafeHtml */ html) {
  this.f_delegate__org_gwtproject_dom_builder_shared_HtmlOnlyTableSectionBuilder_.m_html__org_gwtproject_safehtml_shared_SafeHtml(html);
  return /**@type {TableSectionBuilder}*/ ($Casts.$to(this.m_getReturnBuilder__(), TableSectionBuilder));
 }
 
 static $clinit() {
  HtmlOnlyTableSectionBuilder.$clinit = () =>{};
  HtmlOnlyTableSectionBuilder.$loadModules();
  HtmlTableSectionBuilder.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof HtmlOnlyTableSectionBuilder;
 }
 
 static $loadModules() {
  HtmlBuilderImpl = goog.module.get('org.gwtproject.dom.builder.shared.HtmlBuilderImpl$impl');
  TableSectionBuilder = goog.module.get('org.gwtproject.dom.builder.shared.TableSectionBuilder$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
 
}
$Util.$setClassMetadata(HtmlOnlyTableSectionBuilder, 'org.gwtproject.dom.builder.shared.HtmlOnlyTableSectionBuilder');

exports = HtmlOnlyTableSectionBuilder; 
//# sourceMappingURL=HtmlOnlyTableSectionBuilder.js.map
