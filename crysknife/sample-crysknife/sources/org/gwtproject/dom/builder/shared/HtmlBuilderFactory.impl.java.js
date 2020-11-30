goog.module('org.gwtproject.dom.builder.shared.HtmlBuilderFactory$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const ElementBuilderFactory = goog.require('org.gwtproject.dom.builder.shared.ElementBuilderFactory$impl');

let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let HtmlAnchorBuilder = goog.forwardDeclare('org.gwtproject.dom.builder.shared.HtmlAnchorBuilder$impl');
let HtmlAreaBuilder = goog.forwardDeclare('org.gwtproject.dom.builder.shared.HtmlAreaBuilder$impl');
let HtmlAudioBuilder = goog.forwardDeclare('org.gwtproject.dom.builder.shared.HtmlAudioBuilder$impl');
let HtmlBRBuilder = goog.forwardDeclare('org.gwtproject.dom.builder.shared.HtmlBRBuilder$impl');
let HtmlBaseBuilder = goog.forwardDeclare('org.gwtproject.dom.builder.shared.HtmlBaseBuilder$impl');
let HtmlBodyBuilder = goog.forwardDeclare('org.gwtproject.dom.builder.shared.HtmlBodyBuilder$impl');
let HtmlBuilderImpl = goog.forwardDeclare('org.gwtproject.dom.builder.shared.HtmlBuilderImpl$impl');
let HtmlButtonBuilder = goog.forwardDeclare('org.gwtproject.dom.builder.shared.HtmlButtonBuilder$impl');
let HtmlCanvasBuilder = goog.forwardDeclare('org.gwtproject.dom.builder.shared.HtmlCanvasBuilder$impl');
let HtmlDListBuilder = goog.forwardDeclare('org.gwtproject.dom.builder.shared.HtmlDListBuilder$impl');
let HtmlDivBuilder = goog.forwardDeclare('org.gwtproject.dom.builder.shared.HtmlDivBuilder$impl');
let HtmlElementBuilder = goog.forwardDeclare('org.gwtproject.dom.builder.shared.HtmlElementBuilder$impl');
let HtmlFieldSetBuilder = goog.forwardDeclare('org.gwtproject.dom.builder.shared.HtmlFieldSetBuilder$impl');
let HtmlFormBuilder = goog.forwardDeclare('org.gwtproject.dom.builder.shared.HtmlFormBuilder$impl');
let HtmlFrameBuilder = goog.forwardDeclare('org.gwtproject.dom.builder.shared.HtmlFrameBuilder$impl');
let HtmlFrameSetBuilder = goog.forwardDeclare('org.gwtproject.dom.builder.shared.HtmlFrameSetBuilder$impl');
let HtmlHRBuilder = goog.forwardDeclare('org.gwtproject.dom.builder.shared.HtmlHRBuilder$impl');
let HtmlHeadBuilder = goog.forwardDeclare('org.gwtproject.dom.builder.shared.HtmlHeadBuilder$impl');
let HtmlHeadingBuilder = goog.forwardDeclare('org.gwtproject.dom.builder.shared.HtmlHeadingBuilder$impl');
let HtmlIFrameBuilder = goog.forwardDeclare('org.gwtproject.dom.builder.shared.HtmlIFrameBuilder$impl');
let HtmlImageBuilder = goog.forwardDeclare('org.gwtproject.dom.builder.shared.HtmlImageBuilder$impl');
let HtmlInputBuilder = goog.forwardDeclare('org.gwtproject.dom.builder.shared.HtmlInputBuilder$impl');
let HtmlLIBuilder = goog.forwardDeclare('org.gwtproject.dom.builder.shared.HtmlLIBuilder$impl');
let HtmlLabelBuilder = goog.forwardDeclare('org.gwtproject.dom.builder.shared.HtmlLabelBuilder$impl');
let HtmlLegendBuilder = goog.forwardDeclare('org.gwtproject.dom.builder.shared.HtmlLegendBuilder$impl');
let HtmlLinkBuilder = goog.forwardDeclare('org.gwtproject.dom.builder.shared.HtmlLinkBuilder$impl');
let HtmlMapBuilder = goog.forwardDeclare('org.gwtproject.dom.builder.shared.HtmlMapBuilder$impl');
let HtmlMetaBuilder = goog.forwardDeclare('org.gwtproject.dom.builder.shared.HtmlMetaBuilder$impl');
let HtmlOListBuilder = goog.forwardDeclare('org.gwtproject.dom.builder.shared.HtmlOListBuilder$impl');
let HtmlOptGroupBuilder = goog.forwardDeclare('org.gwtproject.dom.builder.shared.HtmlOptGroupBuilder$impl');
let HtmlOptionBuilder = goog.forwardDeclare('org.gwtproject.dom.builder.shared.HtmlOptionBuilder$impl');
let HtmlParagraphBuilder = goog.forwardDeclare('org.gwtproject.dom.builder.shared.HtmlParagraphBuilder$impl');
let HtmlParamBuilder = goog.forwardDeclare('org.gwtproject.dom.builder.shared.HtmlParamBuilder$impl');
let HtmlPreBuilder = goog.forwardDeclare('org.gwtproject.dom.builder.shared.HtmlPreBuilder$impl');
let HtmlQuoteBuilder = goog.forwardDeclare('org.gwtproject.dom.builder.shared.HtmlQuoteBuilder$impl');
let HtmlScriptBuilder = goog.forwardDeclare('org.gwtproject.dom.builder.shared.HtmlScriptBuilder$impl');
let HtmlSelectBuilder = goog.forwardDeclare('org.gwtproject.dom.builder.shared.HtmlSelectBuilder$impl');
let HtmlSourceBuilder = goog.forwardDeclare('org.gwtproject.dom.builder.shared.HtmlSourceBuilder$impl');
let HtmlSpanBuilder = goog.forwardDeclare('org.gwtproject.dom.builder.shared.HtmlSpanBuilder$impl');
let HtmlStyleBuilder = goog.forwardDeclare('org.gwtproject.dom.builder.shared.HtmlStyleBuilder$impl');
let HtmlTableBuilder = goog.forwardDeclare('org.gwtproject.dom.builder.shared.HtmlTableBuilder$impl');
let HtmlTableCaptionBuilder = goog.forwardDeclare('org.gwtproject.dom.builder.shared.HtmlTableCaptionBuilder$impl');
let HtmlTableCellBuilder = goog.forwardDeclare('org.gwtproject.dom.builder.shared.HtmlTableCellBuilder$impl');
let HtmlTableColBuilder = goog.forwardDeclare('org.gwtproject.dom.builder.shared.HtmlTableColBuilder$impl');
let HtmlTableRowBuilder = goog.forwardDeclare('org.gwtproject.dom.builder.shared.HtmlTableRowBuilder$impl');
let HtmlTableSectionBuilder = goog.forwardDeclare('org.gwtproject.dom.builder.shared.HtmlTableSectionBuilder$impl');
let HtmlTextAreaBuilder = goog.forwardDeclare('org.gwtproject.dom.builder.shared.HtmlTextAreaBuilder$impl');
let HtmlTitleBuilder = goog.forwardDeclare('org.gwtproject.dom.builder.shared.HtmlTitleBuilder$impl');
let HtmlUListBuilder = goog.forwardDeclare('org.gwtproject.dom.builder.shared.HtmlUListBuilder$impl');
let HtmlVideoBuilder = goog.forwardDeclare('org.gwtproject.dom.builder.shared.HtmlVideoBuilder$impl');

class HtmlBuilderFactory extends ElementBuilderFactory {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {HtmlBuilderFactory} */
 static m_get__() {
  HtmlBuilderFactory.$clinit();
  if ($Equality.$same(HtmlBuilderFactory.f_instance__org_gwtproject_dom_builder_shared_HtmlBuilderFactory_, null)) {
   HtmlBuilderFactory.f_instance__org_gwtproject_dom_builder_shared_HtmlBuilderFactory_ = HtmlBuilderFactory.$create__();
  }
  return HtmlBuilderFactory.f_instance__org_gwtproject_dom_builder_shared_HtmlBuilderFactory_;
 }
 /** @return {!HtmlBuilderFactory} */
 static $create__() {
  HtmlBuilderFactory.$clinit();
  let $instance = new HtmlBuilderFactory();
  $instance.$ctor__org_gwtproject_dom_builder_shared_HtmlBuilderFactory__();
  return $instance;
 }
 
 $ctor__org_gwtproject_dom_builder_shared_HtmlBuilderFactory__() {
  this.$ctor__org_gwtproject_dom_builder_shared_ElementBuilderFactory__();
 }
 /** @override @return {HtmlAnchorBuilder} */
 m_createAnchorBuilder__() {
  return this.m_impl___$p_org_gwtproject_dom_builder_shared_HtmlBuilderFactory().m_startAnchor__();
 }
 /** @override @return {HtmlAreaBuilder} */
 m_createAreaBuilder__() {
  return this.m_impl___$p_org_gwtproject_dom_builder_shared_HtmlBuilderFactory().m_startArea__();
 }
 /** @override @return {HtmlAudioBuilder} */
 m_createAudioBuilder__() {
  return this.m_impl___$p_org_gwtproject_dom_builder_shared_HtmlBuilderFactory().m_startAudio__();
 }
 /** @override @return {HtmlBaseBuilder} */
 m_createBaseBuilder__() {
  return this.m_impl___$p_org_gwtproject_dom_builder_shared_HtmlBuilderFactory().m_startBase__();
 }
 /** @override @return {HtmlQuoteBuilder} */
 m_createBlockQuoteBuilder__() {
  return this.m_impl___$p_org_gwtproject_dom_builder_shared_HtmlBuilderFactory().m_startBlockQuote__();
 }
 /** @override @return {HtmlBodyBuilder} */
 m_createBodyBuilder__() {
  return this.m_impl___$p_org_gwtproject_dom_builder_shared_HtmlBuilderFactory().m_startBody__();
 }
 /** @override @return {HtmlBRBuilder} */
 m_createBRBuilder__() {
  return this.m_impl___$p_org_gwtproject_dom_builder_shared_HtmlBuilderFactory().m_startBR__();
 }
 /** @override @return {HtmlInputBuilder} */
 m_createButtonInputBuilder__() {
  return this.m_impl___$p_org_gwtproject_dom_builder_shared_HtmlBuilderFactory().m_startButtonInput__();
 }
 /** @override @return {HtmlCanvasBuilder} */
 m_createCanvasBuilder__() {
  return this.m_impl___$p_org_gwtproject_dom_builder_shared_HtmlBuilderFactory().m_startCanvas__();
 }
 /** @override @return {HtmlInputBuilder} */
 m_createCheckboxInputBuilder__() {
  return this.m_impl___$p_org_gwtproject_dom_builder_shared_HtmlBuilderFactory().m_startCheckboxInput__();
 }
 /** @override @return {HtmlTableColBuilder} */
 m_createColBuilder__() {
  return this.m_impl___$p_org_gwtproject_dom_builder_shared_HtmlBuilderFactory().m_startCol__();
 }
 /** @override @return {HtmlTableColBuilder} */
 m_createColGroupBuilder__() {
  return this.m_impl___$p_org_gwtproject_dom_builder_shared_HtmlBuilderFactory().m_startColGroup__();
 }
 /** @override @return {HtmlDivBuilder} */
 m_createDivBuilder__() {
  return this.m_impl___$p_org_gwtproject_dom_builder_shared_HtmlBuilderFactory().m_startDiv__();
 }
 /** @override @return {HtmlDListBuilder} */
 m_createDListBuilder__() {
  return this.m_impl___$p_org_gwtproject_dom_builder_shared_HtmlBuilderFactory().m_startDList__();
 }
 /** @override @return {HtmlFieldSetBuilder} */
 m_createFieldSetBuilder__() {
  return this.m_impl___$p_org_gwtproject_dom_builder_shared_HtmlBuilderFactory().m_startFieldSet__();
 }
 /** @override @return {HtmlInputBuilder} */
 m_createFileInputBuilder__() {
  return this.m_impl___$p_org_gwtproject_dom_builder_shared_HtmlBuilderFactory().m_startFileInput__();
 }
 /** @override @return {HtmlFormBuilder} */
 m_createFormBuilder__() {
  return this.m_impl___$p_org_gwtproject_dom_builder_shared_HtmlBuilderFactory().m_startForm__();
 }
 /** @override @return {HtmlFrameBuilder} */
 m_createFrameBuilder__() {
  return this.m_impl___$p_org_gwtproject_dom_builder_shared_HtmlBuilderFactory().m_startFrame__();
 }
 /** @override @return {HtmlFrameSetBuilder} */
 m_createFrameSetBuilder__() {
  return this.m_impl___$p_org_gwtproject_dom_builder_shared_HtmlBuilderFactory().m_startFrameSet__();
 }
 /** @override @return {HtmlHeadingBuilder} */
 m_createH1Builder__() {
  return this.m_impl___$p_org_gwtproject_dom_builder_shared_HtmlBuilderFactory().m_startH1__();
 }
 /** @override @return {HtmlHeadingBuilder} */
 m_createH2Builder__() {
  return this.m_impl___$p_org_gwtproject_dom_builder_shared_HtmlBuilderFactory().m_startH2__();
 }
 /** @override @return {HtmlHeadingBuilder} */
 m_createH3Builder__() {
  return this.m_impl___$p_org_gwtproject_dom_builder_shared_HtmlBuilderFactory().m_startH3__();
 }
 /** @override @return {HtmlHeadingBuilder} */
 m_createH4Builder__() {
  return this.m_impl___$p_org_gwtproject_dom_builder_shared_HtmlBuilderFactory().m_startH4__();
 }
 /** @override @return {HtmlHeadingBuilder} */
 m_createH5Builder__() {
  return this.m_impl___$p_org_gwtproject_dom_builder_shared_HtmlBuilderFactory().m_startH5__();
 }
 /** @override @return {HtmlHeadingBuilder} */
 m_createH6Builder__() {
  return this.m_impl___$p_org_gwtproject_dom_builder_shared_HtmlBuilderFactory().m_startH6__();
 }
 /** @override @return {HtmlHeadBuilder} */
 m_createHeadBuilder__() {
  return this.m_impl___$p_org_gwtproject_dom_builder_shared_HtmlBuilderFactory().m_startHead__();
 }
 /** @override @return {HtmlInputBuilder} */
 m_createHiddenInputBuilder__() {
  return this.m_impl___$p_org_gwtproject_dom_builder_shared_HtmlBuilderFactory().m_startHiddenInput__();
 }
 /** @override @return {HtmlHRBuilder} */
 m_createHRBuilder__() {
  return this.m_impl___$p_org_gwtproject_dom_builder_shared_HtmlBuilderFactory().m_startHR__();
 }
 /** @override @return {HtmlIFrameBuilder} */
 m_createIFrameBuilder__() {
  return this.m_impl___$p_org_gwtproject_dom_builder_shared_HtmlBuilderFactory().m_startIFrame__();
 }
 /** @override @return {HtmlImageBuilder} */
 m_createImageBuilder__() {
  return this.m_impl___$p_org_gwtproject_dom_builder_shared_HtmlBuilderFactory().m_startImage__();
 }
 /** @override @return {HtmlInputBuilder} */
 m_createImageInputBuilder__() {
  return this.m_impl___$p_org_gwtproject_dom_builder_shared_HtmlBuilderFactory().m_startImageInput__();
 }
 /** @override @return {HtmlLabelBuilder} */
 m_createLabelBuilder__() {
  return this.m_impl___$p_org_gwtproject_dom_builder_shared_HtmlBuilderFactory().m_startLabel__();
 }
 /** @override @return {HtmlLegendBuilder} */
 m_createLegendBuilder__() {
  return this.m_impl___$p_org_gwtproject_dom_builder_shared_HtmlBuilderFactory().m_startLegend__();
 }
 /** @override @return {HtmlLIBuilder} */
 m_createLIBuilder__() {
  return this.m_impl___$p_org_gwtproject_dom_builder_shared_HtmlBuilderFactory().m_startLI__();
 }
 /** @override @return {HtmlLinkBuilder} */
 m_createLinkBuilder__() {
  return this.m_impl___$p_org_gwtproject_dom_builder_shared_HtmlBuilderFactory().m_startLink__();
 }
 /** @override @return {HtmlMapBuilder} */
 m_createMapBuilder__() {
  return this.m_impl___$p_org_gwtproject_dom_builder_shared_HtmlBuilderFactory().m_startMap__();
 }
 /** @override @return {HtmlMetaBuilder} */
 m_createMetaBuilder__() {
  return this.m_impl___$p_org_gwtproject_dom_builder_shared_HtmlBuilderFactory().m_startMeta__();
 }
 /** @override @return {HtmlOListBuilder} */
 m_createOListBuilder__() {
  return this.m_impl___$p_org_gwtproject_dom_builder_shared_HtmlBuilderFactory().m_startOList__();
 }
 /** @override @return {HtmlOptGroupBuilder} */
 m_createOptGroupBuilder__() {
  return this.m_impl___$p_org_gwtproject_dom_builder_shared_HtmlBuilderFactory().m_startOptGroup__();
 }
 /** @override @return {HtmlOptionBuilder} */
 m_createOptionBuilder__() {
  return this.m_impl___$p_org_gwtproject_dom_builder_shared_HtmlBuilderFactory().m_startOption__();
 }
 /** @override @return {HtmlParagraphBuilder} */
 m_createParagraphBuilder__() {
  return this.m_impl___$p_org_gwtproject_dom_builder_shared_HtmlBuilderFactory().m_startParagraph__();
 }
 /** @override @return {HtmlParamBuilder} */
 m_createParamBuilder__() {
  return this.m_impl___$p_org_gwtproject_dom_builder_shared_HtmlBuilderFactory().m_startParam__();
 }
 /** @override @return {HtmlInputBuilder} */
 m_createPasswordInputBuilder__() {
  return this.m_impl___$p_org_gwtproject_dom_builder_shared_HtmlBuilderFactory().m_startPasswordInput__();
 }
 /** @override @return {HtmlPreBuilder} */
 m_createPreBuilder__() {
  return this.m_impl___$p_org_gwtproject_dom_builder_shared_HtmlBuilderFactory().m_startPre__();
 }
 /** @override @return {HtmlButtonBuilder} */
 m_createPushButtonBuilder__() {
  return this.m_impl___$p_org_gwtproject_dom_builder_shared_HtmlBuilderFactory().m_startPushButton__();
 }
 /** @override @return {HtmlQuoteBuilder} */
 m_createQuoteBuilder__() {
  return this.m_impl___$p_org_gwtproject_dom_builder_shared_HtmlBuilderFactory().m_startQuote__();
 }
 /** @override @return {HtmlInputBuilder} */
 m_createRadioInputBuilder__java_lang_String(/** ?string */ name) {
  return this.m_impl___$p_org_gwtproject_dom_builder_shared_HtmlBuilderFactory().m_startRadioInput__java_lang_String(name);
 }
 /** @override @return {HtmlButtonBuilder} */
 m_createResetButtonBuilder__() {
  return this.m_impl___$p_org_gwtproject_dom_builder_shared_HtmlBuilderFactory().m_startResetButton__();
 }
 /** @override @return {HtmlInputBuilder} */
 m_createResetInputBuilder__() {
  return this.m_impl___$p_org_gwtproject_dom_builder_shared_HtmlBuilderFactory().m_startResetInput__();
 }
 /** @override @return {HtmlScriptBuilder} */
 m_createScriptBuilder__() {
  return this.m_impl___$p_org_gwtproject_dom_builder_shared_HtmlBuilderFactory().m_startScript__();
 }
 /** @override @return {HtmlSelectBuilder} */
 m_createSelectBuilder__() {
  return this.m_impl___$p_org_gwtproject_dom_builder_shared_HtmlBuilderFactory().m_startSelect__();
 }
 /** @override @return {HtmlSourceBuilder} */
 m_createSourceBuilder__() {
  return this.m_impl___$p_org_gwtproject_dom_builder_shared_HtmlBuilderFactory().m_startSource__();
 }
 /** @override @return {HtmlSpanBuilder} */
 m_createSpanBuilder__() {
  return this.m_impl___$p_org_gwtproject_dom_builder_shared_HtmlBuilderFactory().m_startSpan__();
 }
 /** @override @return {HtmlStyleBuilder} */
 m_createStyleBuilder__() {
  return this.m_impl___$p_org_gwtproject_dom_builder_shared_HtmlBuilderFactory().m_startStyle__();
 }
 /** @override @return {HtmlButtonBuilder} */
 m_createSubmitButtonBuilder__() {
  return this.m_impl___$p_org_gwtproject_dom_builder_shared_HtmlBuilderFactory().m_startSubmitButton__();
 }
 /** @override @return {HtmlInputBuilder} */
 m_createSubmitInputBuilder__() {
  return this.m_impl___$p_org_gwtproject_dom_builder_shared_HtmlBuilderFactory().m_startSubmitInput__();
 }
 /** @override @return {HtmlTableBuilder} */
 m_createTableBuilder__() {
  return this.m_impl___$p_org_gwtproject_dom_builder_shared_HtmlBuilderFactory().m_startTable__();
 }
 /** @override @return {HtmlTableCaptionBuilder} */
 m_createTableCaptionBuilder__() {
  return this.m_impl___$p_org_gwtproject_dom_builder_shared_HtmlBuilderFactory().m_startTableCaption__();
 }
 /** @override @return {HtmlTableSectionBuilder} */
 m_createTBodyBuilder__() {
  return this.m_impl___$p_org_gwtproject_dom_builder_shared_HtmlBuilderFactory().m_startTBody__();
 }
 /** @override @return {HtmlTableCellBuilder} */
 m_createTDBuilder__() {
  return this.m_impl___$p_org_gwtproject_dom_builder_shared_HtmlBuilderFactory().m_startTD__();
 }
 /** @override @return {HtmlTextAreaBuilder} */
 m_createTextAreaBuilder__() {
  return this.m_impl___$p_org_gwtproject_dom_builder_shared_HtmlBuilderFactory().m_startTextArea__();
 }
 /** @override @return {HtmlInputBuilder} */
 m_createTextInputBuilder__() {
  return this.m_impl___$p_org_gwtproject_dom_builder_shared_HtmlBuilderFactory().m_startTextInput__();
 }
 /** @override @return {HtmlTableSectionBuilder} */
 m_createTFootBuilder__() {
  return this.m_impl___$p_org_gwtproject_dom_builder_shared_HtmlBuilderFactory().m_startTFoot__();
 }
 /** @override @return {HtmlTableCellBuilder} */
 m_createTHBuilder__() {
  return this.m_impl___$p_org_gwtproject_dom_builder_shared_HtmlBuilderFactory().m_startTH__();
 }
 /** @override @return {HtmlTableSectionBuilder} */
 m_createTHeadBuilder__() {
  return this.m_impl___$p_org_gwtproject_dom_builder_shared_HtmlBuilderFactory().m_startTHead__();
 }
 /** @return {HtmlTitleBuilder} */
 m_createTitleBuilder__() {
  return this.m_impl___$p_org_gwtproject_dom_builder_shared_HtmlBuilderFactory().m_startTitle__();
 }
 /** @override @return {HtmlTableRowBuilder} */
 m_createTRBuilder__() {
  return this.m_impl___$p_org_gwtproject_dom_builder_shared_HtmlBuilderFactory().m_startTR__();
 }
 /** @override @return {HtmlUListBuilder} */
 m_createUListBuilder__() {
  return this.m_impl___$p_org_gwtproject_dom_builder_shared_HtmlBuilderFactory().m_startUList__();
 }
 /** @override @return {HtmlVideoBuilder} */
 m_createVideoBuilder__() {
  return this.m_impl___$p_org_gwtproject_dom_builder_shared_HtmlBuilderFactory().m_startVideo__();
 }
 /** @override @return {HtmlElementBuilder} */
 m_trustedCreate__java_lang_String(/** ?string */ tagName) {
  return this.m_impl___$p_org_gwtproject_dom_builder_shared_HtmlBuilderFactory().m_trustedStart__java_lang_String(tagName);
 }
 /** @return {HtmlBuilderImpl} */
 m_impl___$p_org_gwtproject_dom_builder_shared_HtmlBuilderFactory() {
  return HtmlBuilderImpl.$create__();
 }
 
 static $clinit() {
  HtmlBuilderFactory.$clinit = () =>{};
  HtmlBuilderFactory.$loadModules();
  ElementBuilderFactory.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof HtmlBuilderFactory;
 }
 
 static $loadModules() {
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  HtmlBuilderImpl = goog.module.get('org.gwtproject.dom.builder.shared.HtmlBuilderImpl$impl');
 }
 
}
$Util.$setClassMetadata(HtmlBuilderFactory, 'org.gwtproject.dom.builder.shared.HtmlBuilderFactory');

/**@type {HtmlBuilderFactory}*/
HtmlBuilderFactory.f_instance__org_gwtproject_dom_builder_shared_HtmlBuilderFactory_;

exports = HtmlBuilderFactory; 
//# sourceMappingURL=HtmlBuilderFactory.js.map
