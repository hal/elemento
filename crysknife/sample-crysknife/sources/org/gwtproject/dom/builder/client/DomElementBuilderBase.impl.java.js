goog.module('org.gwtproject.dom.builder.client.DomElementBuilderBase$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const AbstractElementBuilderBase = goog.require('org.gwtproject.dom.builder.shared.AbstractElementBuilderBase$impl');

let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let JavaScriptObject_$Overlay = goog.forwardDeclare('org.gwtproject.core.client.JavaScriptObject.$Overlay$impl');
let DomBuilderImpl = goog.forwardDeclare('org.gwtproject.dom.builder.client.DomBuilderImpl$impl');
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
let ElementBuilderBase = goog.forwardDeclare('org.gwtproject.dom.builder.shared.ElementBuilderBase$impl');
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
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @template R, E
 * @extends {AbstractElementBuilderBase<R>}
  */
class DomElementBuilderBase extends AbstractElementBuilderBase {
 /** @protected */
 constructor() {
  super();
  /**@type {DomBuilderImpl}*/
  this.f_delegate__org_gwtproject_dom_builder_client_DomElementBuilderBase_;
 }
 //Factory method corresponding to constructor 'DomElementBuilderBase(DomBuilderImpl)'.
 /** @template R, E @return {!DomElementBuilderBase<R, E>} */
 static $create__org_gwtproject_dom_builder_client_DomBuilderImpl(/** DomBuilderImpl */ delegate) {
  DomElementBuilderBase.$clinit();
  let $instance = new DomElementBuilderBase();
  $instance.$ctor__org_gwtproject_dom_builder_client_DomElementBuilderBase__org_gwtproject_dom_builder_client_DomBuilderImpl(delegate);
  return $instance;
 }
 //Initialization from constructor 'DomElementBuilderBase(DomBuilderImpl)'.
 
 $ctor__org_gwtproject_dom_builder_client_DomElementBuilderBase__org_gwtproject_dom_builder_client_DomBuilderImpl(/** DomBuilderImpl */ delegate) {
  this.$ctor__org_gwtproject_dom_builder_client_DomElementBuilderBase__org_gwtproject_dom_builder_client_DomBuilderImpl__boolean(delegate, false);
 }
 //Factory method corresponding to constructor 'DomElementBuilderBase(DomBuilderImpl, boolean)'.
 /** @template R, E @return {!DomElementBuilderBase<R, E>} */
 static $create__org_gwtproject_dom_builder_client_DomBuilderImpl__boolean(/** DomBuilderImpl */ delegate, /** boolean */ isEndTagForbidden) {
  DomElementBuilderBase.$clinit();
  let $instance = new DomElementBuilderBase();
  $instance.$ctor__org_gwtproject_dom_builder_client_DomElementBuilderBase__org_gwtproject_dom_builder_client_DomBuilderImpl__boolean(delegate, isEndTagForbidden);
  return $instance;
 }
 //Initialization from constructor 'DomElementBuilderBase(DomBuilderImpl, boolean)'.
 
 $ctor__org_gwtproject_dom_builder_client_DomElementBuilderBase__org_gwtproject_dom_builder_client_DomBuilderImpl__boolean(/** DomBuilderImpl */ delegate, /** boolean */ isEndTagForbidden) {
  this.$ctor__org_gwtproject_dom_builder_shared_AbstractElementBuilderBase__org_gwtproject_dom_builder_shared_ElementBuilderImpl__boolean(delegate, isEndTagForbidden);
  this.f_delegate__org_gwtproject_dom_builder_client_DomElementBuilderBase_ = delegate;
 }
 /** @override @return {R} */
 m_attribute__java_lang_String__int(/** ?string */ name, /** number */ value) {
  /**@type {Object}*/ (this.m_assertCanAddAttribute__()).setAttribute(name, j_l_String.m_valueOf__int(value));
  return this.m_getReturnBuilder__();
 }
 /** @override @return {R} */
 m_attribute__java_lang_String__java_lang_String(/** ?string */ name, /** ?string */ value) {
  /**@type {Object}*/ (this.m_assertCanAddAttribute__()).setAttribute(name, value);
  return this.m_getReturnBuilder__();
 }
 /** @override @return {R} */
 m_className__java_lang_String(/** ?string */ className) {
  $Overlay.m_setClassName__$devirt__org_gwtproject_dom_client_Element__java_lang_String(this.m_assertCanAddAttribute__(), className);
  return this.m_getReturnBuilder__();
 }
 /** @override @return {R} */
 m_dir__java_lang_String(/** ?string */ dir) {
  /**@type {Object}*/ (this.m_assertCanAddAttribute__()).dir = dir;
  return this.m_getReturnBuilder__();
 }
 /** @override @return {R} */
 m_draggable__java_lang_String(/** ?string */ draggable) {
  $Overlay.m_setDraggable__$devirt__org_gwtproject_dom_client_Element__java_lang_String(this.m_assertCanAddAttribute__(), draggable);
  return this.m_getReturnBuilder__();
 }
 /** @override @return {R} */
 m_id__java_lang_String(/** ?string */ id) {
  /**@type {Object}*/ (this.m_assertCanAddAttribute__()).id = id;
  return this.m_getReturnBuilder__();
 }
 /** @override @return {R} */
 m_lang__java_lang_String(/** ?string */ lang) {
  /**@type {Object}*/ (this.m_assertCanAddAttribute__()).lang = lang;
  return this.m_getReturnBuilder__();
 }
 /** @override @return {AnchorBuilder} */
 m_startAnchor__() {
  return this.f_delegate__org_gwtproject_dom_builder_client_DomElementBuilderBase_.m_startAnchor__();
 }
 /** @override @return {AreaBuilder} */
 m_startArea__() {
  return this.f_delegate__org_gwtproject_dom_builder_client_DomElementBuilderBase_.m_startArea__();
 }
 /** @override @return {AudioBuilder} */
 m_startAudio__() {
  return this.f_delegate__org_gwtproject_dom_builder_client_DomElementBuilderBase_.m_startAudio__();
 }
 /** @override @return {BaseBuilder} */
 m_startBase__() {
  return this.f_delegate__org_gwtproject_dom_builder_client_DomElementBuilderBase_.m_startBase__();
 }
 /** @override @return {QuoteBuilder} */
 m_startBlockQuote__() {
  return this.f_delegate__org_gwtproject_dom_builder_client_DomElementBuilderBase_.m_startBlockQuote__();
 }
 /** @override @return {BodyBuilder} */
 m_startBody__() {
  return this.f_delegate__org_gwtproject_dom_builder_client_DomElementBuilderBase_.m_startBody__();
 }
 /** @override @return {BRBuilder} */
 m_startBR__() {
  return this.f_delegate__org_gwtproject_dom_builder_client_DomElementBuilderBase_.m_startBR__();
 }
 /** @override @return {InputBuilder} */
 m_startButtonInput__() {
  return this.f_delegate__org_gwtproject_dom_builder_client_DomElementBuilderBase_.m_startButtonInput__();
 }
 /** @override @return {CanvasBuilder} */
 m_startCanvas__() {
  return this.f_delegate__org_gwtproject_dom_builder_client_DomElementBuilderBase_.m_startCanvas__();
 }
 /** @override @return {InputBuilder} */
 m_startCheckboxInput__() {
  return this.f_delegate__org_gwtproject_dom_builder_client_DomElementBuilderBase_.m_startCheckboxInput__();
 }
 /** @override @return {TableColBuilder} */
 m_startCol__() {
  return this.f_delegate__org_gwtproject_dom_builder_client_DomElementBuilderBase_.m_startCol__();
 }
 /** @override @return {TableColBuilder} */
 m_startColGroup__() {
  return this.f_delegate__org_gwtproject_dom_builder_client_DomElementBuilderBase_.m_startColGroup__();
 }
 /** @override @return {DivBuilder} */
 m_startDiv__() {
  return this.f_delegate__org_gwtproject_dom_builder_client_DomElementBuilderBase_.m_startDiv__();
 }
 /** @override @return {DListBuilder} */
 m_startDList__() {
  return this.f_delegate__org_gwtproject_dom_builder_client_DomElementBuilderBase_.m_startDList__();
 }
 /** @override @return {FieldSetBuilder} */
 m_startFieldSet__() {
  return this.f_delegate__org_gwtproject_dom_builder_client_DomElementBuilderBase_.m_startFieldSet__();
 }
 /** @override @return {InputBuilder} */
 m_startFileInput__() {
  return this.f_delegate__org_gwtproject_dom_builder_client_DomElementBuilderBase_.m_startFileInput__();
 }
 /** @override @return {FormBuilder} */
 m_startForm__() {
  return this.f_delegate__org_gwtproject_dom_builder_client_DomElementBuilderBase_.m_startForm__();
 }
 /** @override @return {FrameBuilder} */
 m_startFrame__() {
  return this.f_delegate__org_gwtproject_dom_builder_client_DomElementBuilderBase_.m_startFrame__();
 }
 /** @override @return {FrameSetBuilder} */
 m_startFrameSet__() {
  return this.f_delegate__org_gwtproject_dom_builder_client_DomElementBuilderBase_.m_startFrameSet__();
 }
 /** @override @return {HeadingBuilder} */
 m_startH1__() {
  return this.f_delegate__org_gwtproject_dom_builder_client_DomElementBuilderBase_.m_startH1__();
 }
 /** @override @return {HeadingBuilder} */
 m_startH2__() {
  return this.f_delegate__org_gwtproject_dom_builder_client_DomElementBuilderBase_.m_startH2__();
 }
 /** @override @return {HeadingBuilder} */
 m_startH3__() {
  return this.f_delegate__org_gwtproject_dom_builder_client_DomElementBuilderBase_.m_startH3__();
 }
 /** @override @return {HeadingBuilder} */
 m_startH4__() {
  return this.f_delegate__org_gwtproject_dom_builder_client_DomElementBuilderBase_.m_startH4__();
 }
 /** @override @return {HeadingBuilder} */
 m_startH5__() {
  return this.f_delegate__org_gwtproject_dom_builder_client_DomElementBuilderBase_.m_startH5__();
 }
 /** @override @return {HeadingBuilder} */
 m_startH6__() {
  return this.f_delegate__org_gwtproject_dom_builder_client_DomElementBuilderBase_.m_startH6__();
 }
 /** @override @return {HeadBuilder} */
 m_startHead__() {
  return this.f_delegate__org_gwtproject_dom_builder_client_DomElementBuilderBase_.m_startHead__();
 }
 /** @override @return {InputBuilder} */
 m_startHiddenInput__() {
  return this.f_delegate__org_gwtproject_dom_builder_client_DomElementBuilderBase_.m_startHiddenInput__();
 }
 /** @override @return {HRBuilder} */
 m_startHR__() {
  return this.f_delegate__org_gwtproject_dom_builder_client_DomElementBuilderBase_.m_startHR__();
 }
 /** @override @return {IFrameBuilder} */
 m_startIFrame__() {
  return this.f_delegate__org_gwtproject_dom_builder_client_DomElementBuilderBase_.m_startIFrame__();
 }
 /** @override @return {ImageBuilder} */
 m_startImage__() {
  return this.f_delegate__org_gwtproject_dom_builder_client_DomElementBuilderBase_.m_startImage__();
 }
 /** @override @return {InputBuilder} */
 m_startImageInput__() {
  return this.f_delegate__org_gwtproject_dom_builder_client_DomElementBuilderBase_.m_startImageInput__();
 }
 /** @override @return {LabelBuilder} */
 m_startLabel__() {
  return this.f_delegate__org_gwtproject_dom_builder_client_DomElementBuilderBase_.m_startLabel__();
 }
 /** @override @return {LegendBuilder} */
 m_startLegend__() {
  return this.f_delegate__org_gwtproject_dom_builder_client_DomElementBuilderBase_.m_startLegend__();
 }
 /** @override @return {LIBuilder} */
 m_startLI__() {
  return this.f_delegate__org_gwtproject_dom_builder_client_DomElementBuilderBase_.m_startLI__();
 }
 /** @override @return {LinkBuilder} */
 m_startLink__() {
  return this.f_delegate__org_gwtproject_dom_builder_client_DomElementBuilderBase_.m_startLink__();
 }
 /** @override @return {MapBuilder} */
 m_startMap__() {
  return this.f_delegate__org_gwtproject_dom_builder_client_DomElementBuilderBase_.m_startMap__();
 }
 /** @override @return {MetaBuilder} */
 m_startMeta__() {
  return this.f_delegate__org_gwtproject_dom_builder_client_DomElementBuilderBase_.m_startMeta__();
 }
 /** @override @return {OListBuilder} */
 m_startOList__() {
  return this.f_delegate__org_gwtproject_dom_builder_client_DomElementBuilderBase_.m_startOList__();
 }
 /** @override @return {OptGroupBuilder} */
 m_startOptGroup__() {
  return this.f_delegate__org_gwtproject_dom_builder_client_DomElementBuilderBase_.m_startOptGroup__();
 }
 /** @override @return {OptionBuilder} */
 m_startOption__() {
  return this.f_delegate__org_gwtproject_dom_builder_client_DomElementBuilderBase_.m_startOption__();
 }
 /** @override @return {ParagraphBuilder} */
 m_startParagraph__() {
  return this.f_delegate__org_gwtproject_dom_builder_client_DomElementBuilderBase_.m_startParagraph__();
 }
 /** @override @return {ParamBuilder} */
 m_startParam__() {
  return this.f_delegate__org_gwtproject_dom_builder_client_DomElementBuilderBase_.m_startParam__();
 }
 /** @override @return {InputBuilder} */
 m_startPasswordInput__() {
  return this.f_delegate__org_gwtproject_dom_builder_client_DomElementBuilderBase_.m_startPasswordInput__();
 }
 /** @override @return {PreBuilder} */
 m_startPre__() {
  return this.f_delegate__org_gwtproject_dom_builder_client_DomElementBuilderBase_.m_startPre__();
 }
 /** @override @return {ButtonBuilder} */
 m_startPushButton__() {
  return this.f_delegate__org_gwtproject_dom_builder_client_DomElementBuilderBase_.m_startPushButton__();
 }
 /** @override @return {QuoteBuilder} */
 m_startQuote__() {
  return this.f_delegate__org_gwtproject_dom_builder_client_DomElementBuilderBase_.m_startQuote__();
 }
 /** @override @return {InputBuilder} */
 m_startRadioInput__java_lang_String(/** ?string */ name) {
  return this.f_delegate__org_gwtproject_dom_builder_client_DomElementBuilderBase_.m_startRadioInput__java_lang_String(name);
 }
 /** @override @return {ButtonBuilder} */
 m_startResetButton__() {
  return this.f_delegate__org_gwtproject_dom_builder_client_DomElementBuilderBase_.m_startResetButton__();
 }
 /** @override @return {InputBuilder} */
 m_startResetInput__() {
  return this.f_delegate__org_gwtproject_dom_builder_client_DomElementBuilderBase_.m_startResetInput__();
 }
 /** @override @return {ScriptBuilder} */
 m_startScript__() {
  return this.f_delegate__org_gwtproject_dom_builder_client_DomElementBuilderBase_.m_startScript__();
 }
 /** @override @return {SelectBuilder} */
 m_startSelect__() {
  return this.f_delegate__org_gwtproject_dom_builder_client_DomElementBuilderBase_.m_startSelect__();
 }
 /** @override @return {SourceBuilder} */
 m_startSource__() {
  return this.f_delegate__org_gwtproject_dom_builder_client_DomElementBuilderBase_.m_startSource__();
 }
 /** @override @return {SpanBuilder} */
 m_startSpan__() {
  return this.f_delegate__org_gwtproject_dom_builder_client_DomElementBuilderBase_.m_startSpan__();
 }
 /** @override @return {StyleBuilder} */
 m_startStyle__() {
  return this.f_delegate__org_gwtproject_dom_builder_client_DomElementBuilderBase_.m_startStyle__();
 }
 /** @override @return {ButtonBuilder} */
 m_startSubmitButton__() {
  return this.f_delegate__org_gwtproject_dom_builder_client_DomElementBuilderBase_.m_startSubmitButton__();
 }
 /** @override @return {InputBuilder} */
 m_startSubmitInput__() {
  return this.f_delegate__org_gwtproject_dom_builder_client_DomElementBuilderBase_.m_startSubmitInput__();
 }
 /** @override @return {TableBuilder} */
 m_startTable__() {
  return this.f_delegate__org_gwtproject_dom_builder_client_DomElementBuilderBase_.m_startTable__();
 }
 /** @override @return {TableCaptionBuilder} */
 m_startTableCaption__() {
  return this.f_delegate__org_gwtproject_dom_builder_client_DomElementBuilderBase_.m_startTableCaption__();
 }
 /** @override @return {TableSectionBuilder} */
 m_startTBody__() {
  return this.f_delegate__org_gwtproject_dom_builder_client_DomElementBuilderBase_.m_startTBody__();
 }
 /** @override @return {TableCellBuilder} */
 m_startTD__() {
  return this.f_delegate__org_gwtproject_dom_builder_client_DomElementBuilderBase_.m_startTD__();
 }
 /** @override @return {TextAreaBuilder} */
 m_startTextArea__() {
  return this.f_delegate__org_gwtproject_dom_builder_client_DomElementBuilderBase_.m_startTextArea__();
 }
 /** @override @return {InputBuilder} */
 m_startTextInput__() {
  return this.f_delegate__org_gwtproject_dom_builder_client_DomElementBuilderBase_.m_startTextInput___$pp_org_gwtproject_dom_builder_client();
 }
 /** @override @return {TableSectionBuilder} */
 m_startTFoot__() {
  return this.f_delegate__org_gwtproject_dom_builder_client_DomElementBuilderBase_.m_startTFoot__();
 }
 /** @override @return {TableCellBuilder} */
 m_startTH__() {
  return this.f_delegate__org_gwtproject_dom_builder_client_DomElementBuilderBase_.m_startTH__();
 }
 /** @override @return {TableSectionBuilder} */
 m_startTHead__() {
  return this.f_delegate__org_gwtproject_dom_builder_client_DomElementBuilderBase_.m_startTHead__();
 }
 /** @override @return {TableRowBuilder} */
 m_startTR__() {
  return this.f_delegate__org_gwtproject_dom_builder_client_DomElementBuilderBase_.m_startTR__();
 }
 /** @override @return {UListBuilder} */
 m_startUList__() {
  return this.f_delegate__org_gwtproject_dom_builder_client_DomElementBuilderBase_.m_startUList__();
 }
 /** @override @return {VideoBuilder} */
 m_startVideo__() {
  return this.f_delegate__org_gwtproject_dom_builder_client_DomElementBuilderBase_.m_startVideo__();
 }
 /** @override @return {R} */
 m_tabIndex__int(/** number */ tabIndex) {
  /**@type {Object}*/ (this.m_assertCanAddAttribute__()).tabIndex = tabIndex;
  return this.m_getReturnBuilder__();
 }
 /** @override @return {R} */
 m_title__java_lang_String(/** ?string */ title) {
  $Overlay.m_setTitle__$devirt__org_gwtproject_dom_client_Element__java_lang_String(this.m_assertCanAddAttribute__(), title);
  return this.m_getReturnBuilder__();
 }
 /** @override @return {ElementBuilder} */
 m_trustedStart__java_lang_String(/** ?string */ tagName) {
  return this.f_delegate__org_gwtproject_dom_builder_client_DomElementBuilderBase_.m_trustedStart__java_lang_String(tagName);
 }
 /** @return {E} */
 m_assertCanAddAttribute__() {
  return /**@type {E}*/ ($Casts.$to(JavaScriptObject_$Overlay.m_cast__$devirt__org_gwtproject_core_client_JavaScriptObject(this.f_delegate__org_gwtproject_dom_builder_client_DomElementBuilderBase_.m_assertCanAddAttribute___$pp_org_gwtproject_dom_builder_client()), $Overlay));
 }
 /** @return {DomBuilderImpl} */
 m_getDelegate___$pp_org_gwtproject_dom_builder_client() {
  return this.f_delegate__org_gwtproject_dom_builder_client_DomElementBuilderBase_;
 }
 
 static $clinit() {
  DomElementBuilderBase.$clinit = () =>{};
  DomElementBuilderBase.$loadModules();
  AbstractElementBuilderBase.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof DomElementBuilderBase;
 }
 
 static $loadModules() {
  j_l_String = goog.module.get('java.lang.String$impl');
  JavaScriptObject_$Overlay = goog.module.get('org.gwtproject.core.client.JavaScriptObject.$Overlay$impl');
  $Overlay = goog.module.get('org.gwtproject.dom.client.Element.$Overlay$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
 
}
$Util.$setClassMetadata(DomElementBuilderBase, 'org.gwtproject.dom.builder.client.DomElementBuilderBase');

exports = DomElementBuilderBase; 
//# sourceMappingURL=DomElementBuilderBase.js.map
