goog.module('org.gwtproject.dom.builder.shared.ElementBuilderBase$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let AnchorBuilder = goog.forwardDeclare('org.gwtproject.dom.builder.shared.AnchorBuilder$impl');
let AreaBuilder = goog.forwardDeclare('org.gwtproject.dom.builder.shared.AreaBuilder$impl');
let AudioBuilder = goog.forwardDeclare('org.gwtproject.dom.builder.shared.AudioBuilder$impl');
let BRBuilder = goog.forwardDeclare('org.gwtproject.dom.builder.shared.BRBuilder$impl');
let BaseBuilder = goog.forwardDeclare('org.gwtproject.dom.builder.shared.BaseBuilder$impl');
let BodyBuilder = goog.forwardDeclare('org.gwtproject.dom.builder.shared.BodyBuilder$impl');
let ButtonBuilder = goog.forwardDeclare('org.gwtproject.dom.builder.shared.ButtonBuilder$impl');
let CanvasBuilder = goog.forwardDeclare('org.gwtproject.dom.builder.shared.CanvasBuilder$impl');
let DListBuilder = goog.forwardDeclare('org.gwtproject.dom.builder.shared.DListBuilder$impl');
let DivBuilder = goog.forwardDeclare('org.gwtproject.dom.builder.shared.DivBuilder$impl');
let ElementBuilder = goog.forwardDeclare('org.gwtproject.dom.builder.shared.ElementBuilder$impl');
let FieldSetBuilder = goog.forwardDeclare('org.gwtproject.dom.builder.shared.FieldSetBuilder$impl');
let FormBuilder = goog.forwardDeclare('org.gwtproject.dom.builder.shared.FormBuilder$impl');
let FrameBuilder = goog.forwardDeclare('org.gwtproject.dom.builder.shared.FrameBuilder$impl');
let FrameSetBuilder = goog.forwardDeclare('org.gwtproject.dom.builder.shared.FrameSetBuilder$impl');
let HRBuilder = goog.forwardDeclare('org.gwtproject.dom.builder.shared.HRBuilder$impl');
let HeadBuilder = goog.forwardDeclare('org.gwtproject.dom.builder.shared.HeadBuilder$impl');
let HeadingBuilder = goog.forwardDeclare('org.gwtproject.dom.builder.shared.HeadingBuilder$impl');
let IFrameBuilder = goog.forwardDeclare('org.gwtproject.dom.builder.shared.IFrameBuilder$impl');
let ImageBuilder = goog.forwardDeclare('org.gwtproject.dom.builder.shared.ImageBuilder$impl');
let InputBuilder = goog.forwardDeclare('org.gwtproject.dom.builder.shared.InputBuilder$impl');
let LIBuilder = goog.forwardDeclare('org.gwtproject.dom.builder.shared.LIBuilder$impl');
let LabelBuilder = goog.forwardDeclare('org.gwtproject.dom.builder.shared.LabelBuilder$impl');
let LegendBuilder = goog.forwardDeclare('org.gwtproject.dom.builder.shared.LegendBuilder$impl');
let LinkBuilder = goog.forwardDeclare('org.gwtproject.dom.builder.shared.LinkBuilder$impl');
let MapBuilder = goog.forwardDeclare('org.gwtproject.dom.builder.shared.MapBuilder$impl');
let MetaBuilder = goog.forwardDeclare('org.gwtproject.dom.builder.shared.MetaBuilder$impl');
let OListBuilder = goog.forwardDeclare('org.gwtproject.dom.builder.shared.OListBuilder$impl');
let OptGroupBuilder = goog.forwardDeclare('org.gwtproject.dom.builder.shared.OptGroupBuilder$impl');
let OptionBuilder = goog.forwardDeclare('org.gwtproject.dom.builder.shared.OptionBuilder$impl');
let ParagraphBuilder = goog.forwardDeclare('org.gwtproject.dom.builder.shared.ParagraphBuilder$impl');
let ParamBuilder = goog.forwardDeclare('org.gwtproject.dom.builder.shared.ParamBuilder$impl');
let PreBuilder = goog.forwardDeclare('org.gwtproject.dom.builder.shared.PreBuilder$impl');
let QuoteBuilder = goog.forwardDeclare('org.gwtproject.dom.builder.shared.QuoteBuilder$impl');
let ScriptBuilder = goog.forwardDeclare('org.gwtproject.dom.builder.shared.ScriptBuilder$impl');
let SelectBuilder = goog.forwardDeclare('org.gwtproject.dom.builder.shared.SelectBuilder$impl');
let SourceBuilder = goog.forwardDeclare('org.gwtproject.dom.builder.shared.SourceBuilder$impl');
let SpanBuilder = goog.forwardDeclare('org.gwtproject.dom.builder.shared.SpanBuilder$impl');
let StyleBuilder = goog.forwardDeclare('org.gwtproject.dom.builder.shared.StyleBuilder$impl');
let StylesBuilder = goog.forwardDeclare('org.gwtproject.dom.builder.shared.StylesBuilder$impl');
let TableBuilder = goog.forwardDeclare('org.gwtproject.dom.builder.shared.TableBuilder$impl');
let TableCaptionBuilder = goog.forwardDeclare('org.gwtproject.dom.builder.shared.TableCaptionBuilder$impl');
let TableCellBuilder = goog.forwardDeclare('org.gwtproject.dom.builder.shared.TableCellBuilder$impl');
let TableColBuilder = goog.forwardDeclare('org.gwtproject.dom.builder.shared.TableColBuilder$impl');
let TableRowBuilder = goog.forwardDeclare('org.gwtproject.dom.builder.shared.TableRowBuilder$impl');
let TableSectionBuilder = goog.forwardDeclare('org.gwtproject.dom.builder.shared.TableSectionBuilder$impl');
let TextAreaBuilder = goog.forwardDeclare('org.gwtproject.dom.builder.shared.TextAreaBuilder$impl');
let UListBuilder = goog.forwardDeclare('org.gwtproject.dom.builder.shared.UListBuilder$impl');
let VideoBuilder = goog.forwardDeclare('org.gwtproject.dom.builder.shared.VideoBuilder$impl');
let $Overlay = goog.forwardDeclare('org.gwtproject.dom.client.Element.$Overlay$impl');
let SafeHtml = goog.forwardDeclare('org.gwtproject.safehtml.shared.SafeHtml$impl');

/**
 * @interface
 * @template T
 */
class ElementBuilderBase {
 /** @abstract @return {T} */
 m_attribute__java_lang_String__int(/** ?string */ name, /** number */ value) {}
 /** @abstract @return {T} */
 m_attribute__java_lang_String__java_lang_String(/** ?string */ name, /** ?string */ value) {}
 /** @abstract @return {T} */
 m_className__java_lang_String(/** ?string */ className) {}
 /** @abstract @return {T} */
 m_dir__java_lang_String(/** ?string */ dir) {}
 /** @abstract @return {T} */
 m_draggable__java_lang_String(/** ?string */ draggable) {}
 /** @abstract */
 m_end__() {}
 /** @abstract */
 m_end__java_lang_String(/** ?string */ tagName) {}
 /** @abstract */
 m_endAnchor__() {}
 /** @abstract */
 m_endArea__() {}
 /** @abstract */
 m_endAudio__() {}
 /** @abstract */
 m_endBase__() {}
 /** @abstract */
 m_endBlockQuote__() {}
 /** @abstract */
 m_endBody__() {}
 /** @abstract */
 m_endBR__() {}
 /** @abstract */
 m_endButton__() {}
 /** @abstract */
 m_endCanvas__() {}
 /** @abstract */
 m_endCol__() {}
 /** @abstract */
 m_endColGroup__() {}
 /** @abstract */
 m_endDiv__() {}
 /** @abstract */
 m_endDList__() {}
 /** @abstract */
 m_endFieldSet__() {}
 /** @abstract */
 m_endForm__() {}
 /** @abstract */
 m_endFrame__() {}
 /** @abstract */
 m_endFrameSet__() {}
 /** @abstract */
 m_endH1__() {}
 /** @abstract */
 m_endH2__() {}
 /** @abstract */
 m_endH3__() {}
 /** @abstract */
 m_endH4__() {}
 /** @abstract */
 m_endH5__() {}
 /** @abstract */
 m_endH6__() {}
 /** @abstract */
 m_endHead__() {}
 /** @abstract */
 m_endHR__() {}
 /** @abstract */
 m_endIFrame__() {}
 /** @abstract */
 m_endImage__() {}
 /** @abstract */
 m_endInput__() {}
 /** @abstract */
 m_endLabel__() {}
 /** @abstract */
 m_endLegend__() {}
 /** @abstract */
 m_endLI__() {}
 /** @abstract */
 m_endLink__() {}
 /** @abstract */
 m_endMap__() {}
 /** @abstract */
 m_endMeta__() {}
 /** @abstract */
 m_endOList__() {}
 /** @abstract */
 m_endOptGroup__() {}
 /** @abstract */
 m_endOption__() {}
 /** @abstract */
 m_endParagraph__() {}
 /** @abstract */
 m_endParam__() {}
 /** @abstract */
 m_endPre__() {}
 /** @abstract */
 m_endQuote__() {}
 /** @abstract */
 m_endScript__() {}
 /** @abstract */
 m_endSelect__() {}
 /** @abstract */
 m_endSource__() {}
 /** @abstract */
 m_endSpan__() {}
 /** @abstract */
 m_endStyle__() {}
 /** @abstract */
 m_endTable__() {}
 /** @abstract */
 m_endTableCaption__() {}
 /** @abstract */
 m_endTBody__() {}
 /** @abstract */
 m_endTD__() {}
 /** @abstract */
 m_endTextArea__() {}
 /** @abstract */
 m_endTFoot__() {}
 /** @abstract */
 m_endTH__() {}
 /** @abstract */
 m_endTHead__() {}
 /** @abstract */
 m_endTR__() {}
 /** @abstract */
 m_endUList__() {}
 /** @abstract */
 m_endVideo__() {}
 /** @abstract @return {Object} */
 m_finish__() {}
 /** @abstract @return {number} */
 m_getDepth__() {}
 /** @abstract @return {T} */
 m_html__org_gwtproject_safehtml_shared_SafeHtml(/** SafeHtml */ html) {}
 /** @abstract @return {T} */
 m_id__java_lang_String(/** ?string */ id) {}
 /** @abstract @return {boolean} */
 m_isChildElementSupported__() {}
 /** @abstract @return {boolean} */
 m_isEndTagForbidden__() {}
 /** @abstract @return {T} */
 m_lang__java_lang_String(/** ?string */ lang) {}
 /** @abstract @return {AnchorBuilder} */
 m_startAnchor__() {}
 /** @abstract @return {AreaBuilder} */
 m_startArea__() {}
 /** @abstract @return {AudioBuilder} */
 m_startAudio__() {}
 /** @abstract @return {BaseBuilder} */
 m_startBase__() {}
 /** @abstract @return {QuoteBuilder} */
 m_startBlockQuote__() {}
 /** @abstract @return {BodyBuilder} */
 m_startBody__() {}
 /** @abstract @return {BRBuilder} */
 m_startBR__() {}
 /** @abstract @return {InputBuilder} */
 m_startButtonInput__() {}
 /** @abstract @return {CanvasBuilder} */
 m_startCanvas__() {}
 /** @abstract @return {InputBuilder} */
 m_startCheckboxInput__() {}
 /** @abstract @return {TableColBuilder} */
 m_startCol__() {}
 /** @abstract @return {TableColBuilder} */
 m_startColGroup__() {}
 /** @abstract @return {DivBuilder} */
 m_startDiv__() {}
 /** @abstract @return {DListBuilder} */
 m_startDList__() {}
 /** @abstract @return {FieldSetBuilder} */
 m_startFieldSet__() {}
 /** @abstract @return {InputBuilder} */
 m_startFileInput__() {}
 /** @abstract @return {FormBuilder} */
 m_startForm__() {}
 /** @abstract @return {FrameBuilder} */
 m_startFrame__() {}
 /** @abstract @return {FrameSetBuilder} */
 m_startFrameSet__() {}
 /** @abstract @return {HeadingBuilder} */
 m_startH1__() {}
 /** @abstract @return {HeadingBuilder} */
 m_startH2__() {}
 /** @abstract @return {HeadingBuilder} */
 m_startH3__() {}
 /** @abstract @return {HeadingBuilder} */
 m_startH4__() {}
 /** @abstract @return {HeadingBuilder} */
 m_startH5__() {}
 /** @abstract @return {HeadingBuilder} */
 m_startH6__() {}
 /** @abstract @return {HeadBuilder} */
 m_startHead__() {}
 /** @abstract @return {InputBuilder} */
 m_startHiddenInput__() {}
 /** @abstract @return {HRBuilder} */
 m_startHR__() {}
 /** @abstract @return {IFrameBuilder} */
 m_startIFrame__() {}
 /** @abstract @return {ImageBuilder} */
 m_startImage__() {}
 /** @abstract @return {InputBuilder} */
 m_startImageInput__() {}
 /** @abstract @return {LabelBuilder} */
 m_startLabel__() {}
 /** @abstract @return {LegendBuilder} */
 m_startLegend__() {}
 /** @abstract @return {LIBuilder} */
 m_startLI__() {}
 /** @abstract @return {LinkBuilder} */
 m_startLink__() {}
 /** @abstract @return {MapBuilder} */
 m_startMap__() {}
 /** @abstract @return {MetaBuilder} */
 m_startMeta__() {}
 /** @abstract @return {OListBuilder} */
 m_startOList__() {}
 /** @abstract @return {OptGroupBuilder} */
 m_startOptGroup__() {}
 /** @abstract @return {OptionBuilder} */
 m_startOption__() {}
 /** @abstract @return {ParagraphBuilder} */
 m_startParagraph__() {}
 /** @abstract @return {ParamBuilder} */
 m_startParam__() {}
 /** @abstract @return {InputBuilder} */
 m_startPasswordInput__() {}
 /** @abstract @return {PreBuilder} */
 m_startPre__() {}
 /** @abstract @return {ButtonBuilder} */
 m_startPushButton__() {}
 /** @abstract @return {QuoteBuilder} */
 m_startQuote__() {}
 /** @abstract @return {InputBuilder} */
 m_startRadioInput__java_lang_String(/** ?string */ name) {}
 /** @abstract @return {ButtonBuilder} */
 m_startResetButton__() {}
 /** @abstract @return {InputBuilder} */
 m_startResetInput__() {}
 /** @abstract @return {ScriptBuilder} */
 m_startScript__() {}
 /** @abstract @return {SelectBuilder} */
 m_startSelect__() {}
 /** @abstract @return {SourceBuilder} */
 m_startSource__() {}
 /** @abstract @return {SpanBuilder} */
 m_startSpan__() {}
 /** @abstract @return {StyleBuilder} */
 m_startStyle__() {}
 /** @abstract @return {ButtonBuilder} */
 m_startSubmitButton__() {}
 /** @abstract @return {InputBuilder} */
 m_startSubmitInput__() {}
 /** @abstract @return {TableBuilder} */
 m_startTable__() {}
 /** @abstract @return {TableCaptionBuilder} */
 m_startTableCaption__() {}
 /** @abstract @return {TableSectionBuilder} */
 m_startTBody__() {}
 /** @abstract @return {TableCellBuilder} */
 m_startTD__() {}
 /** @abstract @return {TextAreaBuilder} */
 m_startTextArea__() {}
 /** @abstract @return {InputBuilder} */
 m_startTextInput__() {}
 /** @abstract @return {TableSectionBuilder} */
 m_startTFoot__() {}
 /** @abstract @return {TableCellBuilder} */
 m_startTH__() {}
 /** @abstract @return {TableSectionBuilder} */
 m_startTHead__() {}
 /** @abstract @return {TableRowBuilder} */
 m_startTR__() {}
 /** @abstract @return {UListBuilder} */
 m_startUList__() {}
 /** @abstract @return {VideoBuilder} */
 m_startVideo__() {}
 /** @abstract @return {StylesBuilder} */
 m_style__() {}
 /** @abstract @return {T} */
 m_tabIndex__int(/** number */ tabIndex) {}
 /** @abstract @return {T} */
 m_text__java_lang_String(/** ?string */ text) {}
 /** @abstract @return {T} */
 m_title__java_lang_String(/** ?string */ title) {}
 /** @abstract @return {ElementBuilder} */
 m_trustedStart__java_lang_String(/** ?string */ tagName) {}
 
 static $clinit() {
  ElementBuilderBase.$clinit = () =>{};
  ElementBuilderBase.$loadModules();
 }
 
 static $markImplementor(/** Function*/ ctor)
 {
  ctor.prototype.$implements__org_gwtproject_dom_builder_shared_ElementBuilderBase = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_gwtproject_dom_builder_shared_ElementBuilderBase;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(ElementBuilderBase, 'org.gwtproject.dom.builder.shared.ElementBuilderBase');

ElementBuilderBase.$markImplementor(/** @type {Function} */ (ElementBuilderBase));

exports = ElementBuilderBase; 
//# sourceMappingURL=ElementBuilderBase.js.map
