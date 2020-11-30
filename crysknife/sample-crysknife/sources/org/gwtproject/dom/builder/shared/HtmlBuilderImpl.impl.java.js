goog.module('org.gwtproject.dom.builder.shared.HtmlBuilderImpl$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const ElementBuilderImpl = goog.require('org.gwtproject.dom.builder.shared.ElementBuilderImpl$impl');

let StringBuilder = goog.forwardDeclare('java.lang.StringBuilder$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let ElementBuilderBase = goog.forwardDeclare('org.gwtproject.dom.builder.shared.ElementBuilderBase$impl');
let HtmlAnchorBuilder = goog.forwardDeclare('org.gwtproject.dom.builder.shared.HtmlAnchorBuilder$impl');
let HtmlAreaBuilder = goog.forwardDeclare('org.gwtproject.dom.builder.shared.HtmlAreaBuilder$impl');
let HtmlAudioBuilder = goog.forwardDeclare('org.gwtproject.dom.builder.shared.HtmlAudioBuilder$impl');
let HtmlBRBuilder = goog.forwardDeclare('org.gwtproject.dom.builder.shared.HtmlBRBuilder$impl');
let HtmlBaseBuilder = goog.forwardDeclare('org.gwtproject.dom.builder.shared.HtmlBaseBuilder$impl');
let HtmlBodyBuilder = goog.forwardDeclare('org.gwtproject.dom.builder.shared.HtmlBodyBuilder$impl');
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
let HtmlStylesBuilder = goog.forwardDeclare('org.gwtproject.dom.builder.shared.HtmlStylesBuilder$impl');
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
let StylesBuilder = goog.forwardDeclare('org.gwtproject.dom.builder.shared.StylesBuilder$impl');
let $Overlay = goog.forwardDeclare('org.gwtproject.dom.client.AnchorElement.$Overlay$impl');
let AreaElement_$Overlay = goog.forwardDeclare('org.gwtproject.dom.client.AreaElement.$Overlay$impl');
let AudioElement_$Overlay = goog.forwardDeclare('org.gwtproject.dom.client.AudioElement.$Overlay$impl');
let BRElement_$Overlay = goog.forwardDeclare('org.gwtproject.dom.client.BRElement.$Overlay$impl');
let BaseElement_$Overlay = goog.forwardDeclare('org.gwtproject.dom.client.BaseElement.$Overlay$impl');
let BodyElement_$Overlay = goog.forwardDeclare('org.gwtproject.dom.client.BodyElement.$Overlay$impl');
let ButtonElement_$Overlay = goog.forwardDeclare('org.gwtproject.dom.client.ButtonElement.$Overlay$impl');
let CanvasElement_$Overlay = goog.forwardDeclare('org.gwtproject.dom.client.CanvasElement.$Overlay$impl');
let DListElement_$Overlay = goog.forwardDeclare('org.gwtproject.dom.client.DListElement.$Overlay$impl');
let DivElement_$Overlay = goog.forwardDeclare('org.gwtproject.dom.client.DivElement.$Overlay$impl');
let Document_$Overlay = goog.forwardDeclare('org.gwtproject.dom.client.Document.$Overlay$impl');
let Element_$Overlay = goog.forwardDeclare('org.gwtproject.dom.client.Element.$Overlay$impl');
let FieldSetElement_$Overlay = goog.forwardDeclare('org.gwtproject.dom.client.FieldSetElement.$Overlay$impl');
let FormElement_$Overlay = goog.forwardDeclare('org.gwtproject.dom.client.FormElement.$Overlay$impl');
let FrameElement_$Overlay = goog.forwardDeclare('org.gwtproject.dom.client.FrameElement.$Overlay$impl');
let FrameSetElement_$Overlay = goog.forwardDeclare('org.gwtproject.dom.client.FrameSetElement.$Overlay$impl');
let HRElement_$Overlay = goog.forwardDeclare('org.gwtproject.dom.client.HRElement.$Overlay$impl');
let HeadElement_$Overlay = goog.forwardDeclare('org.gwtproject.dom.client.HeadElement.$Overlay$impl');
let IFrameElement_$Overlay = goog.forwardDeclare('org.gwtproject.dom.client.IFrameElement.$Overlay$impl');
let ImageElement_$Overlay = goog.forwardDeclare('org.gwtproject.dom.client.ImageElement.$Overlay$impl');
let LIElement_$Overlay = goog.forwardDeclare('org.gwtproject.dom.client.LIElement.$Overlay$impl');
let LabelElement_$Overlay = goog.forwardDeclare('org.gwtproject.dom.client.LabelElement.$Overlay$impl');
let LegendElement_$Overlay = goog.forwardDeclare('org.gwtproject.dom.client.LegendElement.$Overlay$impl');
let LinkElement_$Overlay = goog.forwardDeclare('org.gwtproject.dom.client.LinkElement.$Overlay$impl');
let MapElement_$Overlay = goog.forwardDeclare('org.gwtproject.dom.client.MapElement.$Overlay$impl');
let MetaElement_$Overlay = goog.forwardDeclare('org.gwtproject.dom.client.MetaElement.$Overlay$impl');
let OListElement_$Overlay = goog.forwardDeclare('org.gwtproject.dom.client.OListElement.$Overlay$impl');
let OptGroupElement_$Overlay = goog.forwardDeclare('org.gwtproject.dom.client.OptGroupElement.$Overlay$impl');
let OptionElement_$Overlay = goog.forwardDeclare('org.gwtproject.dom.client.OptionElement.$Overlay$impl');
let ParagraphElement_$Overlay = goog.forwardDeclare('org.gwtproject.dom.client.ParagraphElement.$Overlay$impl');
let ParamElement_$Overlay = goog.forwardDeclare('org.gwtproject.dom.client.ParamElement.$Overlay$impl');
let PreElement_$Overlay = goog.forwardDeclare('org.gwtproject.dom.client.PreElement.$Overlay$impl');
let QuoteElement_$Overlay = goog.forwardDeclare('org.gwtproject.dom.client.QuoteElement.$Overlay$impl');
let ScriptElement_$Overlay = goog.forwardDeclare('org.gwtproject.dom.client.ScriptElement.$Overlay$impl');
let SelectElement_$Overlay = goog.forwardDeclare('org.gwtproject.dom.client.SelectElement.$Overlay$impl');
let SourceElement_$Overlay = goog.forwardDeclare('org.gwtproject.dom.client.SourceElement.$Overlay$impl');
let SpanElement_$Overlay = goog.forwardDeclare('org.gwtproject.dom.client.SpanElement.$Overlay$impl');
let StyleElement_$Overlay = goog.forwardDeclare('org.gwtproject.dom.client.StyleElement.$Overlay$impl');
let TableCaptionElement_$Overlay = goog.forwardDeclare('org.gwtproject.dom.client.TableCaptionElement.$Overlay$impl');
let TableCellElement_$Overlay = goog.forwardDeclare('org.gwtproject.dom.client.TableCellElement.$Overlay$impl');
let TableColElement_$Overlay = goog.forwardDeclare('org.gwtproject.dom.client.TableColElement.$Overlay$impl');
let TableElement_$Overlay = goog.forwardDeclare('org.gwtproject.dom.client.TableElement.$Overlay$impl');
let TableRowElement_$Overlay = goog.forwardDeclare('org.gwtproject.dom.client.TableRowElement.$Overlay$impl');
let TableSectionElement_$Overlay = goog.forwardDeclare('org.gwtproject.dom.client.TableSectionElement.$Overlay$impl');
let TextAreaElement_$Overlay = goog.forwardDeclare('org.gwtproject.dom.client.TextAreaElement.$Overlay$impl');
let TitleElement_$Overlay = goog.forwardDeclare('org.gwtproject.dom.client.TitleElement.$Overlay$impl');
let UListElement_$Overlay = goog.forwardDeclare('org.gwtproject.dom.client.UListElement.$Overlay$impl');
let VideoElement_$Overlay = goog.forwardDeclare('org.gwtproject.dom.client.VideoElement.$Overlay$impl');
let SafeStyles = goog.forwardDeclare('org.gwtproject.safecss.shared.SafeStyles$impl');
let SafeHtml = goog.forwardDeclare('org.gwtproject.safehtml.shared.SafeHtml$impl');
let SafeHtmlUtils = goog.forwardDeclare('org.gwtproject.safehtml.shared.SafeHtmlUtils$impl');

class HtmlBuilderImpl extends ElementBuilderImpl {
 /** @protected */
 constructor() {
  super();
  /**@type {HtmlAnchorBuilder}*/
  this.f_anchorBuilder__org_gwtproject_dom_builder_shared_HtmlBuilderImpl_;
  /**@type {HtmlAreaBuilder}*/
  this.f_areaBuilder__org_gwtproject_dom_builder_shared_HtmlBuilderImpl_;
  /**@type {HtmlAudioBuilder}*/
  this.f_audioBuilder__org_gwtproject_dom_builder_shared_HtmlBuilderImpl_;
  /**@type {HtmlBaseBuilder}*/
  this.f_baseBuilder__org_gwtproject_dom_builder_shared_HtmlBuilderImpl_;
  /**@type {HtmlBodyBuilder}*/
  this.f_bodyBuilder__org_gwtproject_dom_builder_shared_HtmlBuilderImpl_;
  /**@type {HtmlBRBuilder}*/
  this.f_brBuilder__org_gwtproject_dom_builder_shared_HtmlBuilderImpl_;
  /**@type {HtmlButtonBuilder}*/
  this.f_buttonBuilder__org_gwtproject_dom_builder_shared_HtmlBuilderImpl_;
  /**@type {HtmlCanvasBuilder}*/
  this.f_canvasBuilder__org_gwtproject_dom_builder_shared_HtmlBuilderImpl_;
  /**@type {HtmlDivBuilder}*/
  this.f_divBuilder__org_gwtproject_dom_builder_shared_HtmlBuilderImpl_;
  /**@type {HtmlDListBuilder}*/
  this.f_dListBuilder__org_gwtproject_dom_builder_shared_HtmlBuilderImpl_;
  /**@type {HtmlElementBuilder}*/
  this.f_elementBuilder__org_gwtproject_dom_builder_shared_HtmlBuilderImpl_;
  /**@type {HtmlFieldSetBuilder}*/
  this.f_fieldSetBuilder__org_gwtproject_dom_builder_shared_HtmlBuilderImpl_;
  /**@type {HtmlFormBuilder}*/
  this.f_formBuilder__org_gwtproject_dom_builder_shared_HtmlBuilderImpl_;
  /**@type {HtmlFrameBuilder}*/
  this.f_frameBuilder__org_gwtproject_dom_builder_shared_HtmlBuilderImpl_;
  /**@type {HtmlFrameSetBuilder}*/
  this.f_frameSetBuilder__org_gwtproject_dom_builder_shared_HtmlBuilderImpl_;
  /**@type {HtmlHeadBuilder}*/
  this.f_headBuilder__org_gwtproject_dom_builder_shared_HtmlBuilderImpl_;
  /**@type {HtmlHeadingBuilder}*/
  this.f_headingBuilder__org_gwtproject_dom_builder_shared_HtmlBuilderImpl_;
  /**@type {HtmlHRBuilder}*/
  this.f_hrBuilder__org_gwtproject_dom_builder_shared_HtmlBuilderImpl_;
  /**@type {HtmlIFrameBuilder}*/
  this.f_iFrameBuilder__org_gwtproject_dom_builder_shared_HtmlBuilderImpl_;
  /**@type {HtmlImageBuilder}*/
  this.f_imageBuilder__org_gwtproject_dom_builder_shared_HtmlBuilderImpl_;
  /**@type {HtmlInputBuilder}*/
  this.f_inputBuilder__org_gwtproject_dom_builder_shared_HtmlBuilderImpl_;
  /**@type {HtmlLabelBuilder}*/
  this.f_labelBuilder__org_gwtproject_dom_builder_shared_HtmlBuilderImpl_;
  /**@type {HtmlLegendBuilder}*/
  this.f_legendBuilder__org_gwtproject_dom_builder_shared_HtmlBuilderImpl_;
  /**@type {HtmlLIBuilder}*/
  this.f_liBuilder__org_gwtproject_dom_builder_shared_HtmlBuilderImpl_;
  /**@type {HtmlLinkBuilder}*/
  this.f_linkBuilder__org_gwtproject_dom_builder_shared_HtmlBuilderImpl_;
  /**@type {HtmlMapBuilder}*/
  this.f_mapBuilder__org_gwtproject_dom_builder_shared_HtmlBuilderImpl_;
  /**@type {HtmlMetaBuilder}*/
  this.f_metaBuilder__org_gwtproject_dom_builder_shared_HtmlBuilderImpl_;
  /**@type {HtmlOListBuilder}*/
  this.f_oListBuilder__org_gwtproject_dom_builder_shared_HtmlBuilderImpl_;
  /**@type {HtmlOptionBuilder}*/
  this.f_optionBuilder__org_gwtproject_dom_builder_shared_HtmlBuilderImpl_;
  /**@type {HtmlOptGroupBuilder}*/
  this.f_optGroupBuilder__org_gwtproject_dom_builder_shared_HtmlBuilderImpl_;
  /**@type {HtmlParagraphBuilder}*/
  this.f_paragraphBuilder__org_gwtproject_dom_builder_shared_HtmlBuilderImpl_;
  /**@type {HtmlParamBuilder}*/
  this.f_paramBuilder__org_gwtproject_dom_builder_shared_HtmlBuilderImpl_;
  /**@type {HtmlPreBuilder}*/
  this.f_preBuilder__org_gwtproject_dom_builder_shared_HtmlBuilderImpl_;
  /**@type {HtmlQuoteBuilder}*/
  this.f_quoteBuilder__org_gwtproject_dom_builder_shared_HtmlBuilderImpl_;
  /**@type {HtmlScriptBuilder}*/
  this.f_scriptBuilder__org_gwtproject_dom_builder_shared_HtmlBuilderImpl_;
  /**@type {HtmlSelectBuilder}*/
  this.f_selectBuilder__org_gwtproject_dom_builder_shared_HtmlBuilderImpl_;
  /**@type {HtmlSourceBuilder}*/
  this.f_sourceBuilder__org_gwtproject_dom_builder_shared_HtmlBuilderImpl_;
  /**@type {HtmlSpanBuilder}*/
  this.f_spanBuilder__org_gwtproject_dom_builder_shared_HtmlBuilderImpl_;
  /**@type {HtmlStyleBuilder}*/
  this.f_styleBuilder__org_gwtproject_dom_builder_shared_HtmlBuilderImpl_;
  /**@type {StylesBuilder}*/
  this.f_stylesBuilder__org_gwtproject_dom_builder_shared_HtmlBuilderImpl_;
  /**@type {HtmlTableBuilder}*/
  this.f_tableBuilder__org_gwtproject_dom_builder_shared_HtmlBuilderImpl_;
  /**@type {HtmlTableCellBuilder}*/
  this.f_tableCellBuilder__org_gwtproject_dom_builder_shared_HtmlBuilderImpl_;
  /**@type {HtmlTableCaptionBuilder}*/
  this.f_tableCaptionBuilder__org_gwtproject_dom_builder_shared_HtmlBuilderImpl_;
  /**@type {HtmlTableColBuilder}*/
  this.f_tableColBuilder__org_gwtproject_dom_builder_shared_HtmlBuilderImpl_;
  /**@type {HtmlTableColBuilder}*/
  this.f_tableColGroupBuilder__org_gwtproject_dom_builder_shared_HtmlBuilderImpl_;
  /**@type {HtmlTableRowBuilder}*/
  this.f_tableRowBuilder__org_gwtproject_dom_builder_shared_HtmlBuilderImpl_;
  /**@type {HtmlTableSectionBuilder}*/
  this.f_tableSectionBuilder__org_gwtproject_dom_builder_shared_HtmlBuilderImpl_;
  /**@type {HtmlTextAreaBuilder}*/
  this.f_textAreaBuilder__org_gwtproject_dom_builder_shared_HtmlBuilderImpl_;
  /**@type {HtmlTitleBuilder}*/
  this.f_titleBuilder__org_gwtproject_dom_builder_shared_HtmlBuilderImpl_;
  /**@type {HtmlUListBuilder}*/
  this.f_uListBuilder__org_gwtproject_dom_builder_shared_HtmlBuilderImpl_;
  /**@type {HtmlVideoBuilder}*/
  this.f_videoBuilder__org_gwtproject_dom_builder_shared_HtmlBuilderImpl_;
  /**@type {StringBuilder}*/
  this.f_sb__org_gwtproject_dom_builder_shared_HtmlBuilderImpl_;
 }
 /** @return {!HtmlBuilderImpl} */
 static $create__() {
  HtmlBuilderImpl.$clinit();
  let $instance = new HtmlBuilderImpl();
  $instance.$ctor__org_gwtproject_dom_builder_shared_HtmlBuilderImpl__();
  return $instance;
 }
 
 $ctor__org_gwtproject_dom_builder_shared_HtmlBuilderImpl__() {
  this.$ctor__org_gwtproject_dom_builder_shared_ElementBuilderImpl__();
  this.$init___$p_org_gwtproject_dom_builder_shared_HtmlBuilderImpl();
 }
 /** @return {SafeHtml} */
 m_asSafeHtml__() {
  this.m_endAllTags__();
  return SafeHtmlUtils.m_fromTrustedString__java_lang_String(this.f_sb__org_gwtproject_dom_builder_shared_HtmlBuilderImpl_.toString());
 }
 
 m_attribute__java_lang_String__int(/** ?string */ name, /** number */ value) {
  this.m_trustedAttribute__java_lang_String__int(this.m_escape__java_lang_String_$p_org_gwtproject_dom_builder_shared_HtmlBuilderImpl(name), value);
 }
 
 m_attribute__java_lang_String__java_lang_String(/** ?string */ name, /** ?string */ value) {
  this.m_trustedAttribute__java_lang_String__java_lang_String(this.m_escape__java_lang_String_$p_org_gwtproject_dom_builder_shared_HtmlBuilderImpl(name), value);
 }
 /** @return {HtmlAnchorBuilder} */
 m_startAnchor__() {
  if ($Equality.$same(this.f_anchorBuilder__org_gwtproject_dom_builder_shared_HtmlBuilderImpl_, null)) {
   this.f_anchorBuilder__org_gwtproject_dom_builder_shared_HtmlBuilderImpl_ = HtmlAnchorBuilder.$create__org_gwtproject_dom_builder_shared_HtmlBuilderImpl(this);
  }
  this.m_trustedStart__java_lang_String__org_gwtproject_dom_builder_shared_ElementBuilderBase_$p_org_gwtproject_dom_builder_shared_HtmlBuilderImpl($Overlay.f_TAG__org_gwtproject_dom_client_AnchorElement_$Overlay, this.f_anchorBuilder__org_gwtproject_dom_builder_shared_HtmlBuilderImpl_);
  return this.f_anchorBuilder__org_gwtproject_dom_builder_shared_HtmlBuilderImpl_;
 }
 /** @return {HtmlAreaBuilder} */
 m_startArea__() {
  if ($Equality.$same(this.f_areaBuilder__org_gwtproject_dom_builder_shared_HtmlBuilderImpl_, null)) {
   this.f_areaBuilder__org_gwtproject_dom_builder_shared_HtmlBuilderImpl_ = HtmlAreaBuilder.$create__org_gwtproject_dom_builder_shared_HtmlBuilderImpl(this);
  }
  this.m_trustedStart__java_lang_String__org_gwtproject_dom_builder_shared_ElementBuilderBase_$p_org_gwtproject_dom_builder_shared_HtmlBuilderImpl(AreaElement_$Overlay.f_TAG__org_gwtproject_dom_client_AreaElement_$Overlay, this.f_areaBuilder__org_gwtproject_dom_builder_shared_HtmlBuilderImpl_);
  return this.f_areaBuilder__org_gwtproject_dom_builder_shared_HtmlBuilderImpl_;
 }
 /** @return {HtmlAudioBuilder} */
 m_startAudio__() {
  if ($Equality.$same(this.f_audioBuilder__org_gwtproject_dom_builder_shared_HtmlBuilderImpl_, null)) {
   this.f_audioBuilder__org_gwtproject_dom_builder_shared_HtmlBuilderImpl_ = HtmlAudioBuilder.$create__org_gwtproject_dom_builder_shared_HtmlBuilderImpl(this);
  }
  this.m_trustedStart__java_lang_String__org_gwtproject_dom_builder_shared_ElementBuilderBase_$p_org_gwtproject_dom_builder_shared_HtmlBuilderImpl(AudioElement_$Overlay.f_TAG__org_gwtproject_dom_client_AudioElement_$Overlay, this.f_audioBuilder__org_gwtproject_dom_builder_shared_HtmlBuilderImpl_);
  return this.f_audioBuilder__org_gwtproject_dom_builder_shared_HtmlBuilderImpl_;
 }
 /** @return {HtmlBaseBuilder} */
 m_startBase__() {
  if ($Equality.$same(this.f_baseBuilder__org_gwtproject_dom_builder_shared_HtmlBuilderImpl_, null)) {
   this.f_baseBuilder__org_gwtproject_dom_builder_shared_HtmlBuilderImpl_ = HtmlBaseBuilder.$create__org_gwtproject_dom_builder_shared_HtmlBuilderImpl(this);
  }
  this.m_trustedStart__java_lang_String__org_gwtproject_dom_builder_shared_ElementBuilderBase_$p_org_gwtproject_dom_builder_shared_HtmlBuilderImpl(BaseElement_$Overlay.f_TAG__org_gwtproject_dom_client_BaseElement_$Overlay, this.f_baseBuilder__org_gwtproject_dom_builder_shared_HtmlBuilderImpl_);
  return this.f_baseBuilder__org_gwtproject_dom_builder_shared_HtmlBuilderImpl_;
 }
 /** @return {HtmlQuoteBuilder} */
 m_startBlockQuote__() {
  return this.m_startQuote__java_lang_String_$p_org_gwtproject_dom_builder_shared_HtmlBuilderImpl(QuoteElement_$Overlay.f_TAG_BLOCKQUOTE__org_gwtproject_dom_client_QuoteElement_$Overlay);
 }
 /** @return {HtmlBodyBuilder} */
 m_startBody__() {
  if ($Equality.$same(this.f_bodyBuilder__org_gwtproject_dom_builder_shared_HtmlBuilderImpl_, null)) {
   this.f_bodyBuilder__org_gwtproject_dom_builder_shared_HtmlBuilderImpl_ = HtmlBodyBuilder.$create__org_gwtproject_dom_builder_shared_HtmlBuilderImpl(this);
  }
  this.m_trustedStart__java_lang_String__org_gwtproject_dom_builder_shared_ElementBuilderBase_$p_org_gwtproject_dom_builder_shared_HtmlBuilderImpl(BodyElement_$Overlay.f_TAG__org_gwtproject_dom_client_BodyElement_$Overlay, this.f_bodyBuilder__org_gwtproject_dom_builder_shared_HtmlBuilderImpl_);
  return this.f_bodyBuilder__org_gwtproject_dom_builder_shared_HtmlBuilderImpl_;
 }
 /** @return {HtmlBRBuilder} */
 m_startBR__() {
  if ($Equality.$same(this.f_brBuilder__org_gwtproject_dom_builder_shared_HtmlBuilderImpl_, null)) {
   this.f_brBuilder__org_gwtproject_dom_builder_shared_HtmlBuilderImpl_ = HtmlBRBuilder.$create__org_gwtproject_dom_builder_shared_HtmlBuilderImpl(this);
  }
  this.m_trustedStart__java_lang_String__org_gwtproject_dom_builder_shared_ElementBuilderBase_$p_org_gwtproject_dom_builder_shared_HtmlBuilderImpl(BRElement_$Overlay.f_TAG__org_gwtproject_dom_client_BRElement_$Overlay, this.f_brBuilder__org_gwtproject_dom_builder_shared_HtmlBuilderImpl_);
  return this.f_brBuilder__org_gwtproject_dom_builder_shared_HtmlBuilderImpl_;
 }
 /** @return {HtmlInputBuilder} */
 m_startButtonInput__() {
  return this.m_startInput__java_lang_String_$p_org_gwtproject_dom_builder_shared_HtmlBuilderImpl(ButtonElement_$Overlay.f_TAG__org_gwtproject_dom_client_ButtonElement_$Overlay);
 }
 /** @return {HtmlCanvasBuilder} */
 m_startCanvas__() {
  if ($Equality.$same(this.f_canvasBuilder__org_gwtproject_dom_builder_shared_HtmlBuilderImpl_, null)) {
   this.f_canvasBuilder__org_gwtproject_dom_builder_shared_HtmlBuilderImpl_ = HtmlCanvasBuilder.$create__org_gwtproject_dom_builder_shared_HtmlBuilderImpl(this);
  }
  this.m_trustedStart__java_lang_String__org_gwtproject_dom_builder_shared_ElementBuilderBase_$p_org_gwtproject_dom_builder_shared_HtmlBuilderImpl(CanvasElement_$Overlay.f_TAG__org_gwtproject_dom_client_CanvasElement_$Overlay, this.f_canvasBuilder__org_gwtproject_dom_builder_shared_HtmlBuilderImpl_);
  return this.f_canvasBuilder__org_gwtproject_dom_builder_shared_HtmlBuilderImpl_;
 }
 /** @return {HtmlInputBuilder} */
 m_startCheckboxInput__() {
  return this.m_startInput__java_lang_String_$p_org_gwtproject_dom_builder_shared_HtmlBuilderImpl("checkbox");
 }
 /** @return {HtmlTableColBuilder} */
 m_startCol__() {
  if ($Equality.$same(this.f_tableColBuilder__org_gwtproject_dom_builder_shared_HtmlBuilderImpl_, null)) {
   this.f_tableColBuilder__org_gwtproject_dom_builder_shared_HtmlBuilderImpl_ = HtmlTableColBuilder.$create__org_gwtproject_dom_builder_shared_HtmlBuilderImpl__boolean(this, false);
  }
  this.m_trustedStart__java_lang_String__org_gwtproject_dom_builder_shared_ElementBuilderBase_$p_org_gwtproject_dom_builder_shared_HtmlBuilderImpl(TableColElement_$Overlay.f_TAG_COL__org_gwtproject_dom_client_TableColElement_$Overlay, this.f_tableColBuilder__org_gwtproject_dom_builder_shared_HtmlBuilderImpl_);
  return this.f_tableColBuilder__org_gwtproject_dom_builder_shared_HtmlBuilderImpl_;
 }
 /** @return {HtmlTableColBuilder} */
 m_startColGroup__() {
  if ($Equality.$same(this.f_tableColGroupBuilder__org_gwtproject_dom_builder_shared_HtmlBuilderImpl_, null)) {
   this.f_tableColGroupBuilder__org_gwtproject_dom_builder_shared_HtmlBuilderImpl_ = HtmlTableColBuilder.$create__org_gwtproject_dom_builder_shared_HtmlBuilderImpl__boolean(this, true);
  }
  this.m_trustedStart__java_lang_String__org_gwtproject_dom_builder_shared_ElementBuilderBase_$p_org_gwtproject_dom_builder_shared_HtmlBuilderImpl(TableColElement_$Overlay.f_TAG_COLGROUP__org_gwtproject_dom_client_TableColElement_$Overlay, this.f_tableColGroupBuilder__org_gwtproject_dom_builder_shared_HtmlBuilderImpl_);
  return this.f_tableColGroupBuilder__org_gwtproject_dom_builder_shared_HtmlBuilderImpl_;
 }
 /** @return {HtmlDivBuilder} */
 m_startDiv__() {
  this.m_trustedStart__java_lang_String__org_gwtproject_dom_builder_shared_ElementBuilderBase_$p_org_gwtproject_dom_builder_shared_HtmlBuilderImpl(DivElement_$Overlay.f_TAG__org_gwtproject_dom_client_DivElement_$Overlay, this.f_divBuilder__org_gwtproject_dom_builder_shared_HtmlBuilderImpl_);
  return this.f_divBuilder__org_gwtproject_dom_builder_shared_HtmlBuilderImpl_;
 }
 /** @return {HtmlDListBuilder} */
 m_startDList__() {
  if ($Equality.$same(this.f_dListBuilder__org_gwtproject_dom_builder_shared_HtmlBuilderImpl_, null)) {
   this.f_dListBuilder__org_gwtproject_dom_builder_shared_HtmlBuilderImpl_ = HtmlDListBuilder.$create__org_gwtproject_dom_builder_shared_HtmlBuilderImpl(this);
  }
  this.m_trustedStart__java_lang_String__org_gwtproject_dom_builder_shared_ElementBuilderBase_$p_org_gwtproject_dom_builder_shared_HtmlBuilderImpl(DListElement_$Overlay.f_TAG__org_gwtproject_dom_client_DListElement_$Overlay, this.f_dListBuilder__org_gwtproject_dom_builder_shared_HtmlBuilderImpl_);
  return this.f_dListBuilder__org_gwtproject_dom_builder_shared_HtmlBuilderImpl_;
 }
 /** @return {HtmlFieldSetBuilder} */
 m_startFieldSet__() {
  if ($Equality.$same(this.f_fieldSetBuilder__org_gwtproject_dom_builder_shared_HtmlBuilderImpl_, null)) {
   this.f_fieldSetBuilder__org_gwtproject_dom_builder_shared_HtmlBuilderImpl_ = HtmlFieldSetBuilder.$create__org_gwtproject_dom_builder_shared_HtmlBuilderImpl(this);
  }
  this.m_trustedStart__java_lang_String__org_gwtproject_dom_builder_shared_ElementBuilderBase_$p_org_gwtproject_dom_builder_shared_HtmlBuilderImpl(FieldSetElement_$Overlay.f_TAG__org_gwtproject_dom_client_FieldSetElement_$Overlay, this.f_fieldSetBuilder__org_gwtproject_dom_builder_shared_HtmlBuilderImpl_);
  return this.f_fieldSetBuilder__org_gwtproject_dom_builder_shared_HtmlBuilderImpl_;
 }
 /** @return {HtmlInputBuilder} */
 m_startFileInput__() {
  return this.m_startInput__java_lang_String_$p_org_gwtproject_dom_builder_shared_HtmlBuilderImpl("file");
 }
 /** @return {HtmlFormBuilder} */
 m_startForm__() {
  if ($Equality.$same(this.f_formBuilder__org_gwtproject_dom_builder_shared_HtmlBuilderImpl_, null)) {
   this.f_formBuilder__org_gwtproject_dom_builder_shared_HtmlBuilderImpl_ = HtmlFormBuilder.$create__org_gwtproject_dom_builder_shared_HtmlBuilderImpl(this);
  }
  this.m_trustedStart__java_lang_String__org_gwtproject_dom_builder_shared_ElementBuilderBase_$p_org_gwtproject_dom_builder_shared_HtmlBuilderImpl(FormElement_$Overlay.f_TAG__org_gwtproject_dom_client_FormElement_$Overlay, this.f_formBuilder__org_gwtproject_dom_builder_shared_HtmlBuilderImpl_);
  return this.f_formBuilder__org_gwtproject_dom_builder_shared_HtmlBuilderImpl_;
 }
 /** @return {HtmlFrameBuilder} */
 m_startFrame__() {
  if ($Equality.$same(this.f_frameBuilder__org_gwtproject_dom_builder_shared_HtmlBuilderImpl_, null)) {
   this.f_frameBuilder__org_gwtproject_dom_builder_shared_HtmlBuilderImpl_ = HtmlFrameBuilder.$create__org_gwtproject_dom_builder_shared_HtmlBuilderImpl(this);
  }
  this.m_trustedStart__java_lang_String__org_gwtproject_dom_builder_shared_ElementBuilderBase_$p_org_gwtproject_dom_builder_shared_HtmlBuilderImpl(FrameElement_$Overlay.f_TAG__org_gwtproject_dom_client_FrameElement_$Overlay, this.f_frameBuilder__org_gwtproject_dom_builder_shared_HtmlBuilderImpl_);
  return this.f_frameBuilder__org_gwtproject_dom_builder_shared_HtmlBuilderImpl_;
 }
 /** @return {HtmlFrameSetBuilder} */
 m_startFrameSet__() {
  if ($Equality.$same(this.f_frameSetBuilder__org_gwtproject_dom_builder_shared_HtmlBuilderImpl_, null)) {
   this.f_frameSetBuilder__org_gwtproject_dom_builder_shared_HtmlBuilderImpl_ = HtmlFrameSetBuilder.$create__org_gwtproject_dom_builder_shared_HtmlBuilderImpl(this);
  }
  this.m_trustedStart__java_lang_String__org_gwtproject_dom_builder_shared_ElementBuilderBase_$p_org_gwtproject_dom_builder_shared_HtmlBuilderImpl(FrameSetElement_$Overlay.f_TAG__org_gwtproject_dom_client_FrameSetElement_$Overlay, this.f_frameSetBuilder__org_gwtproject_dom_builder_shared_HtmlBuilderImpl_);
  return this.f_frameSetBuilder__org_gwtproject_dom_builder_shared_HtmlBuilderImpl_;
 }
 /** @return {HtmlHeadingBuilder} */
 m_startH1__() {
  return this.m_startHeading__int_$p_org_gwtproject_dom_builder_shared_HtmlBuilderImpl(1);
 }
 /** @return {HtmlHeadingBuilder} */
 m_startH2__() {
  return this.m_startHeading__int_$p_org_gwtproject_dom_builder_shared_HtmlBuilderImpl(2);
 }
 /** @return {HtmlHeadingBuilder} */
 m_startH3__() {
  return this.m_startHeading__int_$p_org_gwtproject_dom_builder_shared_HtmlBuilderImpl(3);
 }
 /** @return {HtmlHeadingBuilder} */
 m_startH4__() {
  return this.m_startHeading__int_$p_org_gwtproject_dom_builder_shared_HtmlBuilderImpl(4);
 }
 /** @return {HtmlHeadingBuilder} */
 m_startH5__() {
  return this.m_startHeading__int_$p_org_gwtproject_dom_builder_shared_HtmlBuilderImpl(5);
 }
 /** @return {HtmlHeadingBuilder} */
 m_startH6__() {
  return this.m_startHeading__int_$p_org_gwtproject_dom_builder_shared_HtmlBuilderImpl(6);
 }
 /** @return {HtmlHeadBuilder} */
 m_startHead__() {
  if ($Equality.$same(this.f_headBuilder__org_gwtproject_dom_builder_shared_HtmlBuilderImpl_, null)) {
   this.f_headBuilder__org_gwtproject_dom_builder_shared_HtmlBuilderImpl_ = HtmlHeadBuilder.$create__org_gwtproject_dom_builder_shared_HtmlBuilderImpl(this);
  }
  this.m_trustedStart__java_lang_String__org_gwtproject_dom_builder_shared_ElementBuilderBase_$p_org_gwtproject_dom_builder_shared_HtmlBuilderImpl(HeadElement_$Overlay.f_TAG__org_gwtproject_dom_client_HeadElement_$Overlay, this.f_headBuilder__org_gwtproject_dom_builder_shared_HtmlBuilderImpl_);
  return this.f_headBuilder__org_gwtproject_dom_builder_shared_HtmlBuilderImpl_;
 }
 /** @return {HtmlInputBuilder} */
 m_startHiddenInput__() {
  return this.m_startInput__java_lang_String_$p_org_gwtproject_dom_builder_shared_HtmlBuilderImpl("hidden");
 }
 /** @return {HtmlHRBuilder} */
 m_startHR__() {
  if ($Equality.$same(this.f_hrBuilder__org_gwtproject_dom_builder_shared_HtmlBuilderImpl_, null)) {
   this.f_hrBuilder__org_gwtproject_dom_builder_shared_HtmlBuilderImpl_ = HtmlHRBuilder.$create__org_gwtproject_dom_builder_shared_HtmlBuilderImpl(this);
  }
  this.m_trustedStart__java_lang_String__org_gwtproject_dom_builder_shared_ElementBuilderBase_$p_org_gwtproject_dom_builder_shared_HtmlBuilderImpl(HRElement_$Overlay.f_TAG__org_gwtproject_dom_client_HRElement_$Overlay, this.f_hrBuilder__org_gwtproject_dom_builder_shared_HtmlBuilderImpl_);
  return this.f_hrBuilder__org_gwtproject_dom_builder_shared_HtmlBuilderImpl_;
 }
 /** @return {HtmlIFrameBuilder} */
 m_startIFrame__() {
  if ($Equality.$same(this.f_iFrameBuilder__org_gwtproject_dom_builder_shared_HtmlBuilderImpl_, null)) {
   this.f_iFrameBuilder__org_gwtproject_dom_builder_shared_HtmlBuilderImpl_ = HtmlIFrameBuilder.$create__org_gwtproject_dom_builder_shared_HtmlBuilderImpl(this);
  }
  this.m_trustedStart__java_lang_String__org_gwtproject_dom_builder_shared_ElementBuilderBase_$p_org_gwtproject_dom_builder_shared_HtmlBuilderImpl(IFrameElement_$Overlay.f_TAG__org_gwtproject_dom_client_IFrameElement_$Overlay, this.f_iFrameBuilder__org_gwtproject_dom_builder_shared_HtmlBuilderImpl_);
  return this.f_iFrameBuilder__org_gwtproject_dom_builder_shared_HtmlBuilderImpl_;
 }
 /** @return {HtmlImageBuilder} */
 m_startImage__() {
  if ($Equality.$same(this.f_imageBuilder__org_gwtproject_dom_builder_shared_HtmlBuilderImpl_, null)) {
   this.f_imageBuilder__org_gwtproject_dom_builder_shared_HtmlBuilderImpl_ = HtmlImageBuilder.$create__org_gwtproject_dom_builder_shared_HtmlBuilderImpl(this);
  }
  this.m_trustedStart__java_lang_String__org_gwtproject_dom_builder_shared_ElementBuilderBase_$p_org_gwtproject_dom_builder_shared_HtmlBuilderImpl(ImageElement_$Overlay.f_TAG__org_gwtproject_dom_client_ImageElement_$Overlay, this.f_imageBuilder__org_gwtproject_dom_builder_shared_HtmlBuilderImpl_);
  return this.f_imageBuilder__org_gwtproject_dom_builder_shared_HtmlBuilderImpl_;
 }
 /** @return {HtmlInputBuilder} */
 m_startImageInput__() {
  return this.m_startInput__java_lang_String_$p_org_gwtproject_dom_builder_shared_HtmlBuilderImpl("image");
 }
 /** @return {HtmlLabelBuilder} */
 m_startLabel__() {
  if ($Equality.$same(this.f_labelBuilder__org_gwtproject_dom_builder_shared_HtmlBuilderImpl_, null)) {
   this.f_labelBuilder__org_gwtproject_dom_builder_shared_HtmlBuilderImpl_ = HtmlLabelBuilder.$create__org_gwtproject_dom_builder_shared_HtmlBuilderImpl(this);
  }
  this.m_trustedStart__java_lang_String__org_gwtproject_dom_builder_shared_ElementBuilderBase_$p_org_gwtproject_dom_builder_shared_HtmlBuilderImpl(LabelElement_$Overlay.f_TAG__org_gwtproject_dom_client_LabelElement_$Overlay, this.f_labelBuilder__org_gwtproject_dom_builder_shared_HtmlBuilderImpl_);
  return this.f_labelBuilder__org_gwtproject_dom_builder_shared_HtmlBuilderImpl_;
 }
 /** @return {HtmlLegendBuilder} */
 m_startLegend__() {
  if ($Equality.$same(this.f_legendBuilder__org_gwtproject_dom_builder_shared_HtmlBuilderImpl_, null)) {
   this.f_legendBuilder__org_gwtproject_dom_builder_shared_HtmlBuilderImpl_ = HtmlLegendBuilder.$create__org_gwtproject_dom_builder_shared_HtmlBuilderImpl(this);
  }
  this.m_trustedStart__java_lang_String__org_gwtproject_dom_builder_shared_ElementBuilderBase_$p_org_gwtproject_dom_builder_shared_HtmlBuilderImpl(LegendElement_$Overlay.f_TAG__org_gwtproject_dom_client_LegendElement_$Overlay, this.f_legendBuilder__org_gwtproject_dom_builder_shared_HtmlBuilderImpl_);
  return this.f_legendBuilder__org_gwtproject_dom_builder_shared_HtmlBuilderImpl_;
 }
 /** @return {HtmlLIBuilder} */
 m_startLI__() {
  this.m_trustedStart__java_lang_String__org_gwtproject_dom_builder_shared_ElementBuilderBase_$p_org_gwtproject_dom_builder_shared_HtmlBuilderImpl(LIElement_$Overlay.f_TAG__org_gwtproject_dom_client_LIElement_$Overlay, this.f_liBuilder__org_gwtproject_dom_builder_shared_HtmlBuilderImpl_);
  return this.f_liBuilder__org_gwtproject_dom_builder_shared_HtmlBuilderImpl_;
 }
 /** @return {HtmlLinkBuilder} */
 m_startLink__() {
  if ($Equality.$same(this.f_linkBuilder__org_gwtproject_dom_builder_shared_HtmlBuilderImpl_, null)) {
   this.f_linkBuilder__org_gwtproject_dom_builder_shared_HtmlBuilderImpl_ = HtmlLinkBuilder.$create__org_gwtproject_dom_builder_shared_HtmlBuilderImpl(this);
  }
  this.m_trustedStart__java_lang_String__org_gwtproject_dom_builder_shared_ElementBuilderBase_$p_org_gwtproject_dom_builder_shared_HtmlBuilderImpl(LinkElement_$Overlay.f_TAG__org_gwtproject_dom_client_LinkElement_$Overlay, this.f_linkBuilder__org_gwtproject_dom_builder_shared_HtmlBuilderImpl_);
  return this.f_linkBuilder__org_gwtproject_dom_builder_shared_HtmlBuilderImpl_;
 }
 /** @return {HtmlMapBuilder} */
 m_startMap__() {
  if ($Equality.$same(this.f_mapBuilder__org_gwtproject_dom_builder_shared_HtmlBuilderImpl_, null)) {
   this.f_mapBuilder__org_gwtproject_dom_builder_shared_HtmlBuilderImpl_ = HtmlMapBuilder.$create__org_gwtproject_dom_builder_shared_HtmlBuilderImpl(this);
  }
  this.m_trustedStart__java_lang_String__org_gwtproject_dom_builder_shared_ElementBuilderBase_$p_org_gwtproject_dom_builder_shared_HtmlBuilderImpl(MapElement_$Overlay.f_TAG__org_gwtproject_dom_client_MapElement_$Overlay, this.f_mapBuilder__org_gwtproject_dom_builder_shared_HtmlBuilderImpl_);
  return this.f_mapBuilder__org_gwtproject_dom_builder_shared_HtmlBuilderImpl_;
 }
 /** @return {HtmlMetaBuilder} */
 m_startMeta__() {
  if ($Equality.$same(this.f_metaBuilder__org_gwtproject_dom_builder_shared_HtmlBuilderImpl_, null)) {
   this.f_metaBuilder__org_gwtproject_dom_builder_shared_HtmlBuilderImpl_ = HtmlMetaBuilder.$create__org_gwtproject_dom_builder_shared_HtmlBuilderImpl(this);
  }
  this.m_trustedStart__java_lang_String__org_gwtproject_dom_builder_shared_ElementBuilderBase_$p_org_gwtproject_dom_builder_shared_HtmlBuilderImpl(MetaElement_$Overlay.f_TAG__org_gwtproject_dom_client_MetaElement_$Overlay, this.f_metaBuilder__org_gwtproject_dom_builder_shared_HtmlBuilderImpl_);
  return this.f_metaBuilder__org_gwtproject_dom_builder_shared_HtmlBuilderImpl_;
 }
 /** @return {HtmlOListBuilder} */
 m_startOList__() {
  if ($Equality.$same(this.f_oListBuilder__org_gwtproject_dom_builder_shared_HtmlBuilderImpl_, null)) {
   this.f_oListBuilder__org_gwtproject_dom_builder_shared_HtmlBuilderImpl_ = HtmlOListBuilder.$create__org_gwtproject_dom_builder_shared_HtmlBuilderImpl(this);
  }
  this.m_trustedStart__java_lang_String__org_gwtproject_dom_builder_shared_ElementBuilderBase_$p_org_gwtproject_dom_builder_shared_HtmlBuilderImpl(OListElement_$Overlay.f_TAG__org_gwtproject_dom_client_OListElement_$Overlay, this.f_oListBuilder__org_gwtproject_dom_builder_shared_HtmlBuilderImpl_);
  return this.f_oListBuilder__org_gwtproject_dom_builder_shared_HtmlBuilderImpl_;
 }
 /** @return {HtmlOptGroupBuilder} */
 m_startOptGroup__() {
  if ($Equality.$same(this.f_optGroupBuilder__org_gwtproject_dom_builder_shared_HtmlBuilderImpl_, null)) {
   this.f_optGroupBuilder__org_gwtproject_dom_builder_shared_HtmlBuilderImpl_ = HtmlOptGroupBuilder.$create__org_gwtproject_dom_builder_shared_HtmlBuilderImpl(this);
  }
  this.m_trustedStart__java_lang_String__org_gwtproject_dom_builder_shared_ElementBuilderBase_$p_org_gwtproject_dom_builder_shared_HtmlBuilderImpl(OptGroupElement_$Overlay.f_TAG__org_gwtproject_dom_client_OptGroupElement_$Overlay, this.f_optGroupBuilder__org_gwtproject_dom_builder_shared_HtmlBuilderImpl_);
  return this.f_optGroupBuilder__org_gwtproject_dom_builder_shared_HtmlBuilderImpl_;
 }
 /** @return {HtmlOptionBuilder} */
 m_startOption__() {
  this.m_trustedStart__java_lang_String__org_gwtproject_dom_builder_shared_ElementBuilderBase_$p_org_gwtproject_dom_builder_shared_HtmlBuilderImpl(OptionElement_$Overlay.f_TAG__org_gwtproject_dom_client_OptionElement_$Overlay, this.f_optionBuilder__org_gwtproject_dom_builder_shared_HtmlBuilderImpl_);
  return this.f_optionBuilder__org_gwtproject_dom_builder_shared_HtmlBuilderImpl_;
 }
 /** @return {HtmlParagraphBuilder} */
 m_startParagraph__() {
  if ($Equality.$same(this.f_paragraphBuilder__org_gwtproject_dom_builder_shared_HtmlBuilderImpl_, null)) {
   this.f_paragraphBuilder__org_gwtproject_dom_builder_shared_HtmlBuilderImpl_ = HtmlParagraphBuilder.$create__org_gwtproject_dom_builder_shared_HtmlBuilderImpl(this);
  }
  this.m_trustedStart__java_lang_String__org_gwtproject_dom_builder_shared_ElementBuilderBase_$p_org_gwtproject_dom_builder_shared_HtmlBuilderImpl(ParagraphElement_$Overlay.f_TAG__org_gwtproject_dom_client_ParagraphElement_$Overlay, this.f_paragraphBuilder__org_gwtproject_dom_builder_shared_HtmlBuilderImpl_);
  return this.f_paragraphBuilder__org_gwtproject_dom_builder_shared_HtmlBuilderImpl_;
 }
 /** @return {HtmlParamBuilder} */
 m_startParam__() {
  if ($Equality.$same(this.f_paramBuilder__org_gwtproject_dom_builder_shared_HtmlBuilderImpl_, null)) {
   this.f_paramBuilder__org_gwtproject_dom_builder_shared_HtmlBuilderImpl_ = HtmlParamBuilder.$create__org_gwtproject_dom_builder_shared_HtmlBuilderImpl(this);
  }
  this.m_trustedStart__java_lang_String__org_gwtproject_dom_builder_shared_ElementBuilderBase_$p_org_gwtproject_dom_builder_shared_HtmlBuilderImpl(ParamElement_$Overlay.f_TAG__org_gwtproject_dom_client_ParamElement_$Overlay, this.f_paramBuilder__org_gwtproject_dom_builder_shared_HtmlBuilderImpl_);
  return this.f_paramBuilder__org_gwtproject_dom_builder_shared_HtmlBuilderImpl_;
 }
 /** @return {HtmlInputBuilder} */
 m_startPasswordInput__() {
  return this.m_startInput__java_lang_String_$p_org_gwtproject_dom_builder_shared_HtmlBuilderImpl("password");
 }
 /** @return {HtmlPreBuilder} */
 m_startPre__() {
  if ($Equality.$same(this.f_preBuilder__org_gwtproject_dom_builder_shared_HtmlBuilderImpl_, null)) {
   this.f_preBuilder__org_gwtproject_dom_builder_shared_HtmlBuilderImpl_ = HtmlPreBuilder.$create__org_gwtproject_dom_builder_shared_HtmlBuilderImpl(this);
  }
  this.m_trustedStart__java_lang_String__org_gwtproject_dom_builder_shared_ElementBuilderBase_$p_org_gwtproject_dom_builder_shared_HtmlBuilderImpl(PreElement_$Overlay.f_TAG__org_gwtproject_dom_client_PreElement_$Overlay, this.f_preBuilder__org_gwtproject_dom_builder_shared_HtmlBuilderImpl_);
  return this.f_preBuilder__org_gwtproject_dom_builder_shared_HtmlBuilderImpl_;
 }
 /** @return {HtmlButtonBuilder} */
 m_startPushButton__() {
  return this.m_startButton__java_lang_String_$p_org_gwtproject_dom_builder_shared_HtmlBuilderImpl("button");
 }
 /** @return {HtmlQuoteBuilder} */
 m_startQuote__() {
  return this.m_startQuote__java_lang_String_$p_org_gwtproject_dom_builder_shared_HtmlBuilderImpl(QuoteElement_$Overlay.f_TAG_Q__org_gwtproject_dom_client_QuoteElement_$Overlay);
 }
 /** @return {HtmlInputBuilder} */
 m_startRadioInput__java_lang_String(/** ?string */ name) {
  let builder = this.m_startInput__java_lang_String_$p_org_gwtproject_dom_builder_shared_HtmlBuilderImpl("radio");
  this.m_attribute__java_lang_String__java_lang_String("name", name);
  return builder;
 }
 /** @return {HtmlButtonBuilder} */
 m_startResetButton__() {
  return this.m_startButton__java_lang_String_$p_org_gwtproject_dom_builder_shared_HtmlBuilderImpl("reset");
 }
 /** @return {HtmlInputBuilder} */
 m_startResetInput__() {
  return this.m_startInput__java_lang_String_$p_org_gwtproject_dom_builder_shared_HtmlBuilderImpl("reset");
 }
 /** @return {HtmlScriptBuilder} */
 m_startScript__() {
  if ($Equality.$same(this.f_scriptBuilder__org_gwtproject_dom_builder_shared_HtmlBuilderImpl_, null)) {
   this.f_scriptBuilder__org_gwtproject_dom_builder_shared_HtmlBuilderImpl_ = HtmlScriptBuilder.$create__org_gwtproject_dom_builder_shared_HtmlBuilderImpl(this);
  }
  this.m_trustedStart__java_lang_String__org_gwtproject_dom_builder_shared_ElementBuilderBase_$p_org_gwtproject_dom_builder_shared_HtmlBuilderImpl(ScriptElement_$Overlay.f_TAG__org_gwtproject_dom_client_ScriptElement_$Overlay, this.f_scriptBuilder__org_gwtproject_dom_builder_shared_HtmlBuilderImpl_);
  return this.f_scriptBuilder__org_gwtproject_dom_builder_shared_HtmlBuilderImpl_;
 }
 /** @return {HtmlSelectBuilder} */
 m_startSelect__() {
  if ($Equality.$same(this.f_selectBuilder__org_gwtproject_dom_builder_shared_HtmlBuilderImpl_, null)) {
   this.f_selectBuilder__org_gwtproject_dom_builder_shared_HtmlBuilderImpl_ = HtmlSelectBuilder.$create__org_gwtproject_dom_builder_shared_HtmlBuilderImpl(this);
  }
  this.m_trustedStart__java_lang_String__org_gwtproject_dom_builder_shared_ElementBuilderBase_$p_org_gwtproject_dom_builder_shared_HtmlBuilderImpl(SelectElement_$Overlay.f_TAG__org_gwtproject_dom_client_SelectElement_$Overlay, this.f_selectBuilder__org_gwtproject_dom_builder_shared_HtmlBuilderImpl_);
  return this.f_selectBuilder__org_gwtproject_dom_builder_shared_HtmlBuilderImpl_;
 }
 /** @return {HtmlSourceBuilder} */
 m_startSource__() {
  if ($Equality.$same(this.f_sourceBuilder__org_gwtproject_dom_builder_shared_HtmlBuilderImpl_, null)) {
   this.f_sourceBuilder__org_gwtproject_dom_builder_shared_HtmlBuilderImpl_ = HtmlSourceBuilder.$create__org_gwtproject_dom_builder_shared_HtmlBuilderImpl(this);
  }
  this.m_trustedStart__java_lang_String__org_gwtproject_dom_builder_shared_ElementBuilderBase_$p_org_gwtproject_dom_builder_shared_HtmlBuilderImpl(SourceElement_$Overlay.f_TAG__org_gwtproject_dom_client_SourceElement_$Overlay, this.f_sourceBuilder__org_gwtproject_dom_builder_shared_HtmlBuilderImpl_);
  return this.f_sourceBuilder__org_gwtproject_dom_builder_shared_HtmlBuilderImpl_;
 }
 /** @return {HtmlSpanBuilder} */
 m_startSpan__() {
  this.m_trustedStart__java_lang_String__org_gwtproject_dom_builder_shared_ElementBuilderBase_$p_org_gwtproject_dom_builder_shared_HtmlBuilderImpl(SpanElement_$Overlay.f_TAG__org_gwtproject_dom_client_SpanElement_$Overlay, this.f_spanBuilder__org_gwtproject_dom_builder_shared_HtmlBuilderImpl_);
  return this.f_spanBuilder__org_gwtproject_dom_builder_shared_HtmlBuilderImpl_;
 }
 /** @return {HtmlStyleBuilder} */
 m_startStyle__() {
  if ($Equality.$same(this.f_styleBuilder__org_gwtproject_dom_builder_shared_HtmlBuilderImpl_, null)) {
   this.f_styleBuilder__org_gwtproject_dom_builder_shared_HtmlBuilderImpl_ = HtmlStyleBuilder.$create__org_gwtproject_dom_builder_shared_HtmlBuilderImpl(this);
  }
  this.m_trustedStart__java_lang_String__org_gwtproject_dom_builder_shared_ElementBuilderBase_$p_org_gwtproject_dom_builder_shared_HtmlBuilderImpl(StyleElement_$Overlay.f_TAG__org_gwtproject_dom_client_StyleElement_$Overlay, this.f_styleBuilder__org_gwtproject_dom_builder_shared_HtmlBuilderImpl_);
  return this.f_styleBuilder__org_gwtproject_dom_builder_shared_HtmlBuilderImpl_;
 }
 /** @return {HtmlButtonBuilder} */
 m_startSubmitButton__() {
  return this.m_startButton__java_lang_String_$p_org_gwtproject_dom_builder_shared_HtmlBuilderImpl("submit");
 }
 /** @return {HtmlInputBuilder} */
 m_startSubmitInput__() {
  return this.m_startInput__java_lang_String_$p_org_gwtproject_dom_builder_shared_HtmlBuilderImpl("submit");
 }
 /** @return {HtmlTableBuilder} */
 m_startTable__() {
  if ($Equality.$same(this.f_tableBuilder__org_gwtproject_dom_builder_shared_HtmlBuilderImpl_, null)) {
   this.f_tableBuilder__org_gwtproject_dom_builder_shared_HtmlBuilderImpl_ = HtmlTableBuilder.$create__org_gwtproject_dom_builder_shared_HtmlBuilderImpl(this);
  }
  this.m_trustedStart__java_lang_String__org_gwtproject_dom_builder_shared_ElementBuilderBase_$p_org_gwtproject_dom_builder_shared_HtmlBuilderImpl(TableElement_$Overlay.f_TAG__org_gwtproject_dom_client_TableElement_$Overlay, this.f_tableBuilder__org_gwtproject_dom_builder_shared_HtmlBuilderImpl_);
  return this.f_tableBuilder__org_gwtproject_dom_builder_shared_HtmlBuilderImpl_;
 }
 /** @return {HtmlTableCaptionBuilder} */
 m_startTableCaption__() {
  if ($Equality.$same(this.f_tableCaptionBuilder__org_gwtproject_dom_builder_shared_HtmlBuilderImpl_, null)) {
   this.f_tableCaptionBuilder__org_gwtproject_dom_builder_shared_HtmlBuilderImpl_ = HtmlTableCaptionBuilder.$create__org_gwtproject_dom_builder_shared_HtmlBuilderImpl(this);
  }
  this.m_trustedStart__java_lang_String__org_gwtproject_dom_builder_shared_ElementBuilderBase_$p_org_gwtproject_dom_builder_shared_HtmlBuilderImpl(TableCaptionElement_$Overlay.f_TAG__org_gwtproject_dom_client_TableCaptionElement_$Overlay, this.f_tableCaptionBuilder__org_gwtproject_dom_builder_shared_HtmlBuilderImpl_);
  return this.f_tableCaptionBuilder__org_gwtproject_dom_builder_shared_HtmlBuilderImpl_;
 }
 /** @return {HtmlTableSectionBuilder} */
 m_startTBody__() {
  return this.m_startTableSection__java_lang_String_$p_org_gwtproject_dom_builder_shared_HtmlBuilderImpl(TableSectionElement_$Overlay.f_TAG_TBODY__org_gwtproject_dom_client_TableSectionElement_$Overlay);
 }
 /** @return {HtmlTableCellBuilder} */
 m_startTD__() {
  this.m_trustedStart__java_lang_String__org_gwtproject_dom_builder_shared_ElementBuilderBase_$p_org_gwtproject_dom_builder_shared_HtmlBuilderImpl(TableCellElement_$Overlay.f_TAG_TD__org_gwtproject_dom_client_TableCellElement_$Overlay, this.f_tableCellBuilder__org_gwtproject_dom_builder_shared_HtmlBuilderImpl_);
  return this.f_tableCellBuilder__org_gwtproject_dom_builder_shared_HtmlBuilderImpl_;
 }
 /** @return {HtmlTextAreaBuilder} */
 m_startTextArea__() {
  if ($Equality.$same(this.f_textAreaBuilder__org_gwtproject_dom_builder_shared_HtmlBuilderImpl_, null)) {
   this.f_textAreaBuilder__org_gwtproject_dom_builder_shared_HtmlBuilderImpl_ = HtmlTextAreaBuilder.$create__org_gwtproject_dom_builder_shared_HtmlBuilderImpl(this);
  }
  this.m_trustedStart__java_lang_String__org_gwtproject_dom_builder_shared_ElementBuilderBase_$p_org_gwtproject_dom_builder_shared_HtmlBuilderImpl(TextAreaElement_$Overlay.f_TAG__org_gwtproject_dom_client_TextAreaElement_$Overlay, this.f_textAreaBuilder__org_gwtproject_dom_builder_shared_HtmlBuilderImpl_);
  return this.f_textAreaBuilder__org_gwtproject_dom_builder_shared_HtmlBuilderImpl_;
 }
 /** @return {HtmlInputBuilder} */
 m_startTextInput__() {
  return this.m_startInput__java_lang_String_$p_org_gwtproject_dom_builder_shared_HtmlBuilderImpl("text");
 }
 /** @return {HtmlTableSectionBuilder} */
 m_startTFoot__() {
  return this.m_startTableSection__java_lang_String_$p_org_gwtproject_dom_builder_shared_HtmlBuilderImpl(TableSectionElement_$Overlay.f_TAG_TFOOT__org_gwtproject_dom_client_TableSectionElement_$Overlay);
 }
 /** @return {HtmlTableCellBuilder} */
 m_startTH__() {
  this.m_trustedStart__java_lang_String__org_gwtproject_dom_builder_shared_ElementBuilderBase_$p_org_gwtproject_dom_builder_shared_HtmlBuilderImpl(TableCellElement_$Overlay.f_TAG_TH__org_gwtproject_dom_client_TableCellElement_$Overlay, this.f_tableCellBuilder__org_gwtproject_dom_builder_shared_HtmlBuilderImpl_);
  return this.f_tableCellBuilder__org_gwtproject_dom_builder_shared_HtmlBuilderImpl_;
 }
 /** @return {HtmlTableSectionBuilder} */
 m_startTHead__() {
  return this.m_startTableSection__java_lang_String_$p_org_gwtproject_dom_builder_shared_HtmlBuilderImpl(TableSectionElement_$Overlay.f_TAG_THEAD__org_gwtproject_dom_client_TableSectionElement_$Overlay);
 }
 /** @return {HtmlTitleBuilder} */
 m_startTitle__() {
  if ($Equality.$same(this.f_titleBuilder__org_gwtproject_dom_builder_shared_HtmlBuilderImpl_, null)) {
   this.f_titleBuilder__org_gwtproject_dom_builder_shared_HtmlBuilderImpl_ = HtmlTitleBuilder.$create__org_gwtproject_dom_builder_shared_HtmlBuilderImpl(this);
  }
  this.m_trustedStart__java_lang_String__org_gwtproject_dom_builder_shared_ElementBuilderBase_$p_org_gwtproject_dom_builder_shared_HtmlBuilderImpl(TitleElement_$Overlay.f_TAG__org_gwtproject_dom_client_TitleElement_$Overlay, this.f_titleBuilder__org_gwtproject_dom_builder_shared_HtmlBuilderImpl_);
  return this.f_titleBuilder__org_gwtproject_dom_builder_shared_HtmlBuilderImpl_;
 }
 /** @return {HtmlTableRowBuilder} */
 m_startTR__() {
  this.m_trustedStart__java_lang_String__org_gwtproject_dom_builder_shared_ElementBuilderBase_$p_org_gwtproject_dom_builder_shared_HtmlBuilderImpl(TableRowElement_$Overlay.f_TAG__org_gwtproject_dom_client_TableRowElement_$Overlay, this.f_tableRowBuilder__org_gwtproject_dom_builder_shared_HtmlBuilderImpl_);
  return this.f_tableRowBuilder__org_gwtproject_dom_builder_shared_HtmlBuilderImpl_;
 }
 /** @return {HtmlUListBuilder} */
 m_startUList__() {
  if ($Equality.$same(this.f_uListBuilder__org_gwtproject_dom_builder_shared_HtmlBuilderImpl_, null)) {
   this.f_uListBuilder__org_gwtproject_dom_builder_shared_HtmlBuilderImpl_ = HtmlUListBuilder.$create__org_gwtproject_dom_builder_shared_HtmlBuilderImpl(this);
  }
  this.m_trustedStart__java_lang_String__org_gwtproject_dom_builder_shared_ElementBuilderBase_$p_org_gwtproject_dom_builder_shared_HtmlBuilderImpl(UListElement_$Overlay.f_TAG__org_gwtproject_dom_client_UListElement_$Overlay, this.f_uListBuilder__org_gwtproject_dom_builder_shared_HtmlBuilderImpl_);
  return this.f_uListBuilder__org_gwtproject_dom_builder_shared_HtmlBuilderImpl_;
 }
 /** @return {HtmlVideoBuilder} */
 m_startVideo__() {
  if ($Equality.$same(this.f_videoBuilder__org_gwtproject_dom_builder_shared_HtmlBuilderImpl_, null)) {
   this.f_videoBuilder__org_gwtproject_dom_builder_shared_HtmlBuilderImpl_ = HtmlVideoBuilder.$create__org_gwtproject_dom_builder_shared_HtmlBuilderImpl(this);
  }
  this.m_trustedStart__java_lang_String__org_gwtproject_dom_builder_shared_ElementBuilderBase_$p_org_gwtproject_dom_builder_shared_HtmlBuilderImpl(VideoElement_$Overlay.f_TAG__org_gwtproject_dom_client_VideoElement_$Overlay, this.f_videoBuilder__org_gwtproject_dom_builder_shared_HtmlBuilderImpl_);
  return this.f_videoBuilder__org_gwtproject_dom_builder_shared_HtmlBuilderImpl_;
 }
 /** @override @return {StylesBuilder} */
 m_style__() {
  return this.f_stylesBuilder__org_gwtproject_dom_builder_shared_HtmlBuilderImpl_;
 }
 /** @return {StylesBuilder} */
 m_styleProperty__org_gwtproject_safecss_shared_SafeStyles(/** SafeStyles */ style) {
  this.m_assertCanAddStylePropertyImpl__();
  this.f_sb__org_gwtproject_dom_builder_shared_HtmlBuilderImpl_.m_append__java_lang_String(style.m_asString__());
  return this.m_style__();
 }
 
 m_trustedAttribute__java_lang_String__int(/** ?string */ name, /** number */ value) {
  this.m_assertCanAddAttributeImpl__();
  this.f_sb__org_gwtproject_dom_builder_shared_HtmlBuilderImpl_.m_append__java_lang_String(" ").m_append__java_lang_String(name).m_append__java_lang_String("=\"").m_append__int(value).m_append__java_lang_String("\"");
 }
 
 m_trustedAttribute__java_lang_String__java_lang_String(/** ?string */ name, /** ?string */ value) {
  this.m_assertCanAddAttributeImpl__();
  this.f_sb__org_gwtproject_dom_builder_shared_HtmlBuilderImpl_.m_append__java_lang_String(" ").m_append__java_lang_String(name).m_append__java_lang_String("=\"").m_append__java_lang_String(this.m_escape__java_lang_String_$p_org_gwtproject_dom_builder_shared_HtmlBuilderImpl(value)).m_append__java_lang_String("\"");
 }
 /** @return {HtmlElementBuilder} */
 m_trustedStart__java_lang_String(/** ?string */ tagName) {
  this.m_trustedStart__java_lang_String__org_gwtproject_dom_builder_shared_ElementBuilderBase_$p_org_gwtproject_dom_builder_shared_HtmlBuilderImpl(tagName, this.f_elementBuilder__org_gwtproject_dom_builder_shared_HtmlBuilderImpl_);
  return this.f_elementBuilder__org_gwtproject_dom_builder_shared_HtmlBuilderImpl_;
 }
 /** @override */
 m_doCloseStartTagImpl__() {
  this.f_sb__org_gwtproject_dom_builder_shared_HtmlBuilderImpl_.m_append__java_lang_String(">");
 }
 /** @override */
 m_doCloseStyleAttributeImpl__() {
  this.f_sb__org_gwtproject_dom_builder_shared_HtmlBuilderImpl_.m_append__java_lang_String("\"");
 }
 /** @override */
 m_doEndStartTagImpl__() {
  this.f_sb__org_gwtproject_dom_builder_shared_HtmlBuilderImpl_.m_append__java_lang_String(" />");
 }
 /** @override */
 m_doEndTagImpl__java_lang_String(/** ?string */ tagName) {
  this.f_sb__org_gwtproject_dom_builder_shared_HtmlBuilderImpl_.m_append__java_lang_String("</").m_append__java_lang_String(tagName).m_append__java_lang_String(">");
 }
 /** @override @return {Object} */
 m_doFinishImpl__() {
  let tmp = Document_$Overlay.m_createDivElement__$devirt__org_gwtproject_dom_client_Document(Document_$Overlay.m_get__());
  Element_$Overlay.m_setInnerSafeHtml__$devirt__org_gwtproject_dom_client_Element__org_gwtproject_safehtml_shared_SafeHtml(tmp, this.m_asSafeHtml__());
  return Element_$Overlay.m_getFirstChildElement__$devirt__org_gwtproject_dom_client_Element(tmp);
 }
 /** @override */
 m_doHtmlImpl__org_gwtproject_safehtml_shared_SafeHtml(/** SafeHtml */ html) {
  this.f_sb__org_gwtproject_dom_builder_shared_HtmlBuilderImpl_.m_append__java_lang_String(html.m_asString__());
 }
 /** @override */
 m_doOpenStyleImpl__() {
  this.f_sb__org_gwtproject_dom_builder_shared_HtmlBuilderImpl_.m_append__java_lang_String(" style=\"");
 }
 /** @override */
 m_doTextImpl__java_lang_String(/** ?string */ text) {
  this.f_sb__org_gwtproject_dom_builder_shared_HtmlBuilderImpl_.m_append__java_lang_String(this.m_escape__java_lang_String_$p_org_gwtproject_dom_builder_shared_HtmlBuilderImpl(text));
 }
 /** @return {?string} */
 m_escape__java_lang_String_$p_org_gwtproject_dom_builder_shared_HtmlBuilderImpl(/** ?string */ s) {
  return SafeHtmlUtils.m_htmlEscape__java_lang_String(s);
 }
 /** @return {HtmlButtonBuilder} */
 m_startButton__java_lang_String_$p_org_gwtproject_dom_builder_shared_HtmlBuilderImpl(/** ?string */ type) {
  if ($Equality.$same(this.f_buttonBuilder__org_gwtproject_dom_builder_shared_HtmlBuilderImpl_, null)) {
   this.f_buttonBuilder__org_gwtproject_dom_builder_shared_HtmlBuilderImpl_ = HtmlButtonBuilder.$create__org_gwtproject_dom_builder_shared_HtmlBuilderImpl(this);
  }
  this.m_trustedStart__java_lang_String__org_gwtproject_dom_builder_shared_ElementBuilderBase_$p_org_gwtproject_dom_builder_shared_HtmlBuilderImpl("button", this.f_buttonBuilder__org_gwtproject_dom_builder_shared_HtmlBuilderImpl_);
  this.f_buttonBuilder__org_gwtproject_dom_builder_shared_HtmlBuilderImpl_.m_attribute__java_lang_String__java_lang_String("type", type);
  return this.f_buttonBuilder__org_gwtproject_dom_builder_shared_HtmlBuilderImpl_;
 }
 /** @return {HtmlHeadingBuilder} */
 m_startHeading__int_$p_org_gwtproject_dom_builder_shared_HtmlBuilderImpl(/** number */ level) {
  if ($Equality.$same(this.f_headingBuilder__org_gwtproject_dom_builder_shared_HtmlBuilderImpl_, null)) {
   this.f_headingBuilder__org_gwtproject_dom_builder_shared_HtmlBuilderImpl_ = HtmlHeadingBuilder.$create__org_gwtproject_dom_builder_shared_HtmlBuilderImpl(this);
  }
  this.m_trustedStart__java_lang_String__org_gwtproject_dom_builder_shared_ElementBuilderBase_$p_org_gwtproject_dom_builder_shared_HtmlBuilderImpl("h" + level, this.f_headingBuilder__org_gwtproject_dom_builder_shared_HtmlBuilderImpl_);
  return this.f_headingBuilder__org_gwtproject_dom_builder_shared_HtmlBuilderImpl_;
 }
 /** @return {HtmlInputBuilder} */
 m_startInput__java_lang_String_$p_org_gwtproject_dom_builder_shared_HtmlBuilderImpl(/** ?string */ type) {
  this.m_trustedStart__java_lang_String__org_gwtproject_dom_builder_shared_ElementBuilderBase_$p_org_gwtproject_dom_builder_shared_HtmlBuilderImpl("input", this.f_inputBuilder__org_gwtproject_dom_builder_shared_HtmlBuilderImpl_);
  this.m_attribute__java_lang_String__java_lang_String("type", type);
  return this.f_inputBuilder__org_gwtproject_dom_builder_shared_HtmlBuilderImpl_;
 }
 /** @return {HtmlQuoteBuilder} */
 m_startQuote__java_lang_String_$p_org_gwtproject_dom_builder_shared_HtmlBuilderImpl(/** ?string */ tagName) {
  if ($Equality.$same(this.f_quoteBuilder__org_gwtproject_dom_builder_shared_HtmlBuilderImpl_, null)) {
   this.f_quoteBuilder__org_gwtproject_dom_builder_shared_HtmlBuilderImpl_ = HtmlQuoteBuilder.$create__org_gwtproject_dom_builder_shared_HtmlBuilderImpl(this);
  }
  this.m_trustedStart__java_lang_String__org_gwtproject_dom_builder_shared_ElementBuilderBase_$p_org_gwtproject_dom_builder_shared_HtmlBuilderImpl(tagName, this.f_quoteBuilder__org_gwtproject_dom_builder_shared_HtmlBuilderImpl_);
  return this.f_quoteBuilder__org_gwtproject_dom_builder_shared_HtmlBuilderImpl_;
 }
 /** @return {HtmlTableSectionBuilder} */
 m_startTableSection__java_lang_String_$p_org_gwtproject_dom_builder_shared_HtmlBuilderImpl(/** ?string */ tagName) {
  if ($Equality.$same(this.f_tableSectionBuilder__org_gwtproject_dom_builder_shared_HtmlBuilderImpl_, null)) {
   this.f_tableSectionBuilder__org_gwtproject_dom_builder_shared_HtmlBuilderImpl_ = HtmlTableSectionBuilder.$create__org_gwtproject_dom_builder_shared_HtmlBuilderImpl(this);
  }
  this.m_trustedStart__java_lang_String__org_gwtproject_dom_builder_shared_ElementBuilderBase_$p_org_gwtproject_dom_builder_shared_HtmlBuilderImpl(tagName, this.f_tableSectionBuilder__org_gwtproject_dom_builder_shared_HtmlBuilderImpl_);
  return this.f_tableSectionBuilder__org_gwtproject_dom_builder_shared_HtmlBuilderImpl_;
 }
 
 m_trustedStart__java_lang_String__org_gwtproject_dom_builder_shared_ElementBuilderBase_$p_org_gwtproject_dom_builder_shared_HtmlBuilderImpl(/** ?string */ tagName, /** ElementBuilderBase<?> */ builder) {
  this.m_onStart__java_lang_String__org_gwtproject_dom_builder_shared_ElementBuilderBase(tagName, builder);
  this.f_sb__org_gwtproject_dom_builder_shared_HtmlBuilderImpl_.m_append__java_lang_String("<").m_append__java_lang_String(tagName);
 }
 /** @private */
 $init___$p_org_gwtproject_dom_builder_shared_HtmlBuilderImpl() {
  this.f_divBuilder__org_gwtproject_dom_builder_shared_HtmlBuilderImpl_ = HtmlDivBuilder.$create__org_gwtproject_dom_builder_shared_HtmlBuilderImpl(this);
  this.f_elementBuilder__org_gwtproject_dom_builder_shared_HtmlBuilderImpl_ = HtmlElementBuilder.$create__org_gwtproject_dom_builder_shared_HtmlBuilderImpl(this);
  this.f_inputBuilder__org_gwtproject_dom_builder_shared_HtmlBuilderImpl_ = HtmlInputBuilder.$create__org_gwtproject_dom_builder_shared_HtmlBuilderImpl(this);
  this.f_liBuilder__org_gwtproject_dom_builder_shared_HtmlBuilderImpl_ = HtmlLIBuilder.$create__org_gwtproject_dom_builder_shared_HtmlBuilderImpl(this);
  this.f_optionBuilder__org_gwtproject_dom_builder_shared_HtmlBuilderImpl_ = HtmlOptionBuilder.$create__org_gwtproject_dom_builder_shared_HtmlBuilderImpl(this);
  this.f_spanBuilder__org_gwtproject_dom_builder_shared_HtmlBuilderImpl_ = HtmlSpanBuilder.$create__org_gwtproject_dom_builder_shared_HtmlBuilderImpl(this);
  this.f_stylesBuilder__org_gwtproject_dom_builder_shared_HtmlBuilderImpl_ = HtmlStylesBuilder.$create__org_gwtproject_dom_builder_shared_HtmlBuilderImpl(this);
  this.f_tableCellBuilder__org_gwtproject_dom_builder_shared_HtmlBuilderImpl_ = HtmlTableCellBuilder.$create__org_gwtproject_dom_builder_shared_HtmlBuilderImpl(this);
  this.f_tableRowBuilder__org_gwtproject_dom_builder_shared_HtmlBuilderImpl_ = HtmlTableRowBuilder.$create__org_gwtproject_dom_builder_shared_HtmlBuilderImpl(this);
  this.f_sb__org_gwtproject_dom_builder_shared_HtmlBuilderImpl_ = StringBuilder.$create__();
 }
 
 static $clinit() {
  HtmlBuilderImpl.$clinit = () =>{};
  HtmlBuilderImpl.$loadModules();
  ElementBuilderImpl.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof HtmlBuilderImpl;
 }
 
 static $loadModules() {
  StringBuilder = goog.module.get('java.lang.StringBuilder$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  HtmlAnchorBuilder = goog.module.get('org.gwtproject.dom.builder.shared.HtmlAnchorBuilder$impl');
  HtmlAreaBuilder = goog.module.get('org.gwtproject.dom.builder.shared.HtmlAreaBuilder$impl');
  HtmlAudioBuilder = goog.module.get('org.gwtproject.dom.builder.shared.HtmlAudioBuilder$impl');
  HtmlBRBuilder = goog.module.get('org.gwtproject.dom.builder.shared.HtmlBRBuilder$impl');
  HtmlBaseBuilder = goog.module.get('org.gwtproject.dom.builder.shared.HtmlBaseBuilder$impl');
  HtmlBodyBuilder = goog.module.get('org.gwtproject.dom.builder.shared.HtmlBodyBuilder$impl');
  HtmlButtonBuilder = goog.module.get('org.gwtproject.dom.builder.shared.HtmlButtonBuilder$impl');
  HtmlCanvasBuilder = goog.module.get('org.gwtproject.dom.builder.shared.HtmlCanvasBuilder$impl');
  HtmlDListBuilder = goog.module.get('org.gwtproject.dom.builder.shared.HtmlDListBuilder$impl');
  HtmlDivBuilder = goog.module.get('org.gwtproject.dom.builder.shared.HtmlDivBuilder$impl');
  HtmlElementBuilder = goog.module.get('org.gwtproject.dom.builder.shared.HtmlElementBuilder$impl');
  HtmlFieldSetBuilder = goog.module.get('org.gwtproject.dom.builder.shared.HtmlFieldSetBuilder$impl');
  HtmlFormBuilder = goog.module.get('org.gwtproject.dom.builder.shared.HtmlFormBuilder$impl');
  HtmlFrameBuilder = goog.module.get('org.gwtproject.dom.builder.shared.HtmlFrameBuilder$impl');
  HtmlFrameSetBuilder = goog.module.get('org.gwtproject.dom.builder.shared.HtmlFrameSetBuilder$impl');
  HtmlHRBuilder = goog.module.get('org.gwtproject.dom.builder.shared.HtmlHRBuilder$impl');
  HtmlHeadBuilder = goog.module.get('org.gwtproject.dom.builder.shared.HtmlHeadBuilder$impl');
  HtmlHeadingBuilder = goog.module.get('org.gwtproject.dom.builder.shared.HtmlHeadingBuilder$impl');
  HtmlIFrameBuilder = goog.module.get('org.gwtproject.dom.builder.shared.HtmlIFrameBuilder$impl');
  HtmlImageBuilder = goog.module.get('org.gwtproject.dom.builder.shared.HtmlImageBuilder$impl');
  HtmlInputBuilder = goog.module.get('org.gwtproject.dom.builder.shared.HtmlInputBuilder$impl');
  HtmlLIBuilder = goog.module.get('org.gwtproject.dom.builder.shared.HtmlLIBuilder$impl');
  HtmlLabelBuilder = goog.module.get('org.gwtproject.dom.builder.shared.HtmlLabelBuilder$impl');
  HtmlLegendBuilder = goog.module.get('org.gwtproject.dom.builder.shared.HtmlLegendBuilder$impl');
  HtmlLinkBuilder = goog.module.get('org.gwtproject.dom.builder.shared.HtmlLinkBuilder$impl');
  HtmlMapBuilder = goog.module.get('org.gwtproject.dom.builder.shared.HtmlMapBuilder$impl');
  HtmlMetaBuilder = goog.module.get('org.gwtproject.dom.builder.shared.HtmlMetaBuilder$impl');
  HtmlOListBuilder = goog.module.get('org.gwtproject.dom.builder.shared.HtmlOListBuilder$impl');
  HtmlOptGroupBuilder = goog.module.get('org.gwtproject.dom.builder.shared.HtmlOptGroupBuilder$impl');
  HtmlOptionBuilder = goog.module.get('org.gwtproject.dom.builder.shared.HtmlOptionBuilder$impl');
  HtmlParagraphBuilder = goog.module.get('org.gwtproject.dom.builder.shared.HtmlParagraphBuilder$impl');
  HtmlParamBuilder = goog.module.get('org.gwtproject.dom.builder.shared.HtmlParamBuilder$impl');
  HtmlPreBuilder = goog.module.get('org.gwtproject.dom.builder.shared.HtmlPreBuilder$impl');
  HtmlQuoteBuilder = goog.module.get('org.gwtproject.dom.builder.shared.HtmlQuoteBuilder$impl');
  HtmlScriptBuilder = goog.module.get('org.gwtproject.dom.builder.shared.HtmlScriptBuilder$impl');
  HtmlSelectBuilder = goog.module.get('org.gwtproject.dom.builder.shared.HtmlSelectBuilder$impl');
  HtmlSourceBuilder = goog.module.get('org.gwtproject.dom.builder.shared.HtmlSourceBuilder$impl');
  HtmlSpanBuilder = goog.module.get('org.gwtproject.dom.builder.shared.HtmlSpanBuilder$impl');
  HtmlStyleBuilder = goog.module.get('org.gwtproject.dom.builder.shared.HtmlStyleBuilder$impl');
  HtmlStylesBuilder = goog.module.get('org.gwtproject.dom.builder.shared.HtmlStylesBuilder$impl');
  HtmlTableBuilder = goog.module.get('org.gwtproject.dom.builder.shared.HtmlTableBuilder$impl');
  HtmlTableCaptionBuilder = goog.module.get('org.gwtproject.dom.builder.shared.HtmlTableCaptionBuilder$impl');
  HtmlTableCellBuilder = goog.module.get('org.gwtproject.dom.builder.shared.HtmlTableCellBuilder$impl');
  HtmlTableColBuilder = goog.module.get('org.gwtproject.dom.builder.shared.HtmlTableColBuilder$impl');
  HtmlTableRowBuilder = goog.module.get('org.gwtproject.dom.builder.shared.HtmlTableRowBuilder$impl');
  HtmlTableSectionBuilder = goog.module.get('org.gwtproject.dom.builder.shared.HtmlTableSectionBuilder$impl');
  HtmlTextAreaBuilder = goog.module.get('org.gwtproject.dom.builder.shared.HtmlTextAreaBuilder$impl');
  HtmlTitleBuilder = goog.module.get('org.gwtproject.dom.builder.shared.HtmlTitleBuilder$impl');
  HtmlUListBuilder = goog.module.get('org.gwtproject.dom.builder.shared.HtmlUListBuilder$impl');
  HtmlVideoBuilder = goog.module.get('org.gwtproject.dom.builder.shared.HtmlVideoBuilder$impl');
  $Overlay = goog.module.get('org.gwtproject.dom.client.AnchorElement.$Overlay$impl');
  AreaElement_$Overlay = goog.module.get('org.gwtproject.dom.client.AreaElement.$Overlay$impl');
  AudioElement_$Overlay = goog.module.get('org.gwtproject.dom.client.AudioElement.$Overlay$impl');
  BRElement_$Overlay = goog.module.get('org.gwtproject.dom.client.BRElement.$Overlay$impl');
  BaseElement_$Overlay = goog.module.get('org.gwtproject.dom.client.BaseElement.$Overlay$impl');
  BodyElement_$Overlay = goog.module.get('org.gwtproject.dom.client.BodyElement.$Overlay$impl');
  ButtonElement_$Overlay = goog.module.get('org.gwtproject.dom.client.ButtonElement.$Overlay$impl');
  CanvasElement_$Overlay = goog.module.get('org.gwtproject.dom.client.CanvasElement.$Overlay$impl');
  DListElement_$Overlay = goog.module.get('org.gwtproject.dom.client.DListElement.$Overlay$impl');
  DivElement_$Overlay = goog.module.get('org.gwtproject.dom.client.DivElement.$Overlay$impl');
  Document_$Overlay = goog.module.get('org.gwtproject.dom.client.Document.$Overlay$impl');
  Element_$Overlay = goog.module.get('org.gwtproject.dom.client.Element.$Overlay$impl');
  FieldSetElement_$Overlay = goog.module.get('org.gwtproject.dom.client.FieldSetElement.$Overlay$impl');
  FormElement_$Overlay = goog.module.get('org.gwtproject.dom.client.FormElement.$Overlay$impl');
  FrameElement_$Overlay = goog.module.get('org.gwtproject.dom.client.FrameElement.$Overlay$impl');
  FrameSetElement_$Overlay = goog.module.get('org.gwtproject.dom.client.FrameSetElement.$Overlay$impl');
  HRElement_$Overlay = goog.module.get('org.gwtproject.dom.client.HRElement.$Overlay$impl');
  HeadElement_$Overlay = goog.module.get('org.gwtproject.dom.client.HeadElement.$Overlay$impl');
  IFrameElement_$Overlay = goog.module.get('org.gwtproject.dom.client.IFrameElement.$Overlay$impl');
  ImageElement_$Overlay = goog.module.get('org.gwtproject.dom.client.ImageElement.$Overlay$impl');
  LIElement_$Overlay = goog.module.get('org.gwtproject.dom.client.LIElement.$Overlay$impl');
  LabelElement_$Overlay = goog.module.get('org.gwtproject.dom.client.LabelElement.$Overlay$impl');
  LegendElement_$Overlay = goog.module.get('org.gwtproject.dom.client.LegendElement.$Overlay$impl');
  LinkElement_$Overlay = goog.module.get('org.gwtproject.dom.client.LinkElement.$Overlay$impl');
  MapElement_$Overlay = goog.module.get('org.gwtproject.dom.client.MapElement.$Overlay$impl');
  MetaElement_$Overlay = goog.module.get('org.gwtproject.dom.client.MetaElement.$Overlay$impl');
  OListElement_$Overlay = goog.module.get('org.gwtproject.dom.client.OListElement.$Overlay$impl');
  OptGroupElement_$Overlay = goog.module.get('org.gwtproject.dom.client.OptGroupElement.$Overlay$impl');
  OptionElement_$Overlay = goog.module.get('org.gwtproject.dom.client.OptionElement.$Overlay$impl');
  ParagraphElement_$Overlay = goog.module.get('org.gwtproject.dom.client.ParagraphElement.$Overlay$impl');
  ParamElement_$Overlay = goog.module.get('org.gwtproject.dom.client.ParamElement.$Overlay$impl');
  PreElement_$Overlay = goog.module.get('org.gwtproject.dom.client.PreElement.$Overlay$impl');
  QuoteElement_$Overlay = goog.module.get('org.gwtproject.dom.client.QuoteElement.$Overlay$impl');
  ScriptElement_$Overlay = goog.module.get('org.gwtproject.dom.client.ScriptElement.$Overlay$impl');
  SelectElement_$Overlay = goog.module.get('org.gwtproject.dom.client.SelectElement.$Overlay$impl');
  SourceElement_$Overlay = goog.module.get('org.gwtproject.dom.client.SourceElement.$Overlay$impl');
  SpanElement_$Overlay = goog.module.get('org.gwtproject.dom.client.SpanElement.$Overlay$impl');
  StyleElement_$Overlay = goog.module.get('org.gwtproject.dom.client.StyleElement.$Overlay$impl');
  TableCaptionElement_$Overlay = goog.module.get('org.gwtproject.dom.client.TableCaptionElement.$Overlay$impl');
  TableCellElement_$Overlay = goog.module.get('org.gwtproject.dom.client.TableCellElement.$Overlay$impl');
  TableColElement_$Overlay = goog.module.get('org.gwtproject.dom.client.TableColElement.$Overlay$impl');
  TableElement_$Overlay = goog.module.get('org.gwtproject.dom.client.TableElement.$Overlay$impl');
  TableRowElement_$Overlay = goog.module.get('org.gwtproject.dom.client.TableRowElement.$Overlay$impl');
  TableSectionElement_$Overlay = goog.module.get('org.gwtproject.dom.client.TableSectionElement.$Overlay$impl');
  TextAreaElement_$Overlay = goog.module.get('org.gwtproject.dom.client.TextAreaElement.$Overlay$impl');
  TitleElement_$Overlay = goog.module.get('org.gwtproject.dom.client.TitleElement.$Overlay$impl');
  UListElement_$Overlay = goog.module.get('org.gwtproject.dom.client.UListElement.$Overlay$impl');
  VideoElement_$Overlay = goog.module.get('org.gwtproject.dom.client.VideoElement.$Overlay$impl');
  SafeHtmlUtils = goog.module.get('org.gwtproject.safehtml.shared.SafeHtmlUtils$impl');
 }
 
}
$Util.$setClassMetadata(HtmlBuilderImpl, 'org.gwtproject.dom.builder.shared.HtmlBuilderImpl');

exports = HtmlBuilderImpl; 
//# sourceMappingURL=HtmlBuilderImpl.js.map
