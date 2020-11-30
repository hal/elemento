goog.module('org.gwtproject.dom.builder.shared.ElementBuilderFactory$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let DomBuilderFactory = goog.forwardDeclare('org.gwtproject.dom.builder.client.DomBuilderFactory$impl');
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
let HtmlBuilderFactory = goog.forwardDeclare('org.gwtproject.dom.builder.shared.HtmlBuilderFactory$impl');
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

/**
 * @abstract
  */
class ElementBuilderFactory extends j_l_Object {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {ElementBuilderFactory} */
 static m_get__() {
  ElementBuilderFactory.$clinit();
  if ($Equality.$same(ElementBuilderFactory.f_instance__org_gwtproject_dom_builder_shared_ElementBuilderFactory_, null)) {
   if ($Equality.$same("safari", $Util.$getDefine("user.agent"))) {
    ElementBuilderFactory.f_instance__org_gwtproject_dom_builder_shared_ElementBuilderFactory_ = DomBuilderFactory.m_get__();
   } else {
    ElementBuilderFactory.f_instance__org_gwtproject_dom_builder_shared_ElementBuilderFactory_ = HtmlBuilderFactory.m_get__();
   }
  }
  return ElementBuilderFactory.f_instance__org_gwtproject_dom_builder_shared_ElementBuilderFactory_;
 }
 
 $ctor__org_gwtproject_dom_builder_shared_ElementBuilderFactory__() {
  this.$ctor__java_lang_Object__();
 }
 /** @abstract @return {AnchorBuilder} */
 m_createAnchorBuilder__() {}
 /** @abstract @return {AreaBuilder} */
 m_createAreaBuilder__() {}
 /** @abstract @return {AudioBuilder} */
 m_createAudioBuilder__() {}
 /** @abstract @return {BaseBuilder} */
 m_createBaseBuilder__() {}
 /** @abstract @return {QuoteBuilder} */
 m_createBlockQuoteBuilder__() {}
 /** @abstract @return {BodyBuilder} */
 m_createBodyBuilder__() {}
 /** @abstract @return {BRBuilder} */
 m_createBRBuilder__() {}
 /** @abstract @return {InputBuilder} */
 m_createButtonInputBuilder__() {}
 /** @abstract @return {CanvasBuilder} */
 m_createCanvasBuilder__() {}
 /** @abstract @return {InputBuilder} */
 m_createCheckboxInputBuilder__() {}
 /** @abstract @return {TableColBuilder} */
 m_createColBuilder__() {}
 /** @abstract @return {TableColBuilder} */
 m_createColGroupBuilder__() {}
 /** @abstract @return {DivBuilder} */
 m_createDivBuilder__() {}
 /** @abstract @return {DListBuilder} */
 m_createDListBuilder__() {}
 /** @abstract @return {FieldSetBuilder} */
 m_createFieldSetBuilder__() {}
 /** @abstract @return {InputBuilder} */
 m_createFileInputBuilder__() {}
 /** @abstract @return {FormBuilder} */
 m_createFormBuilder__() {}
 /** @abstract @return {FrameBuilder} */
 m_createFrameBuilder__() {}
 /** @abstract @return {FrameSetBuilder} */
 m_createFrameSetBuilder__() {}
 /** @abstract @return {HeadingBuilder} */
 m_createH1Builder__() {}
 /** @abstract @return {HeadingBuilder} */
 m_createH2Builder__() {}
 /** @abstract @return {HeadingBuilder} */
 m_createH3Builder__() {}
 /** @abstract @return {HeadingBuilder} */
 m_createH4Builder__() {}
 /** @abstract @return {HeadingBuilder} */
 m_createH5Builder__() {}
 /** @abstract @return {HeadingBuilder} */
 m_createH6Builder__() {}
 /** @abstract @return {HeadBuilder} */
 m_createHeadBuilder__() {}
 /** @abstract @return {InputBuilder} */
 m_createHiddenInputBuilder__() {}
 /** @abstract @return {HRBuilder} */
 m_createHRBuilder__() {}
 /** @abstract @return {IFrameBuilder} */
 m_createIFrameBuilder__() {}
 /** @abstract @return {ImageBuilder} */
 m_createImageBuilder__() {}
 /** @abstract @return {InputBuilder} */
 m_createImageInputBuilder__() {}
 /** @abstract @return {LabelBuilder} */
 m_createLabelBuilder__() {}
 /** @abstract @return {LegendBuilder} */
 m_createLegendBuilder__() {}
 /** @abstract @return {LIBuilder} */
 m_createLIBuilder__() {}
 /** @abstract @return {LinkBuilder} */
 m_createLinkBuilder__() {}
 /** @abstract @return {MapBuilder} */
 m_createMapBuilder__() {}
 /** @abstract @return {MetaBuilder} */
 m_createMetaBuilder__() {}
 /** @abstract @return {OListBuilder} */
 m_createOListBuilder__() {}
 /** @abstract @return {OptGroupBuilder} */
 m_createOptGroupBuilder__() {}
 /** @abstract @return {OptionBuilder} */
 m_createOptionBuilder__() {}
 /** @abstract @return {ParagraphBuilder} */
 m_createParagraphBuilder__() {}
 /** @abstract @return {ParamBuilder} */
 m_createParamBuilder__() {}
 /** @abstract @return {InputBuilder} */
 m_createPasswordInputBuilder__() {}
 /** @abstract @return {PreBuilder} */
 m_createPreBuilder__() {}
 /** @abstract @return {ButtonBuilder} */
 m_createPushButtonBuilder__() {}
 /** @abstract @return {QuoteBuilder} */
 m_createQuoteBuilder__() {}
 /** @abstract @return {InputBuilder} */
 m_createRadioInputBuilder__java_lang_String(/** ?string */ name) {}
 /** @abstract @return {ButtonBuilder} */
 m_createResetButtonBuilder__() {}
 /** @abstract @return {InputBuilder} */
 m_createResetInputBuilder__() {}
 /** @abstract @return {ScriptBuilder} */
 m_createScriptBuilder__() {}
 /** @abstract @return {SelectBuilder} */
 m_createSelectBuilder__() {}
 /** @abstract @return {SourceBuilder} */
 m_createSourceBuilder__() {}
 /** @abstract @return {SpanBuilder} */
 m_createSpanBuilder__() {}
 /** @abstract @return {StyleBuilder} */
 m_createStyleBuilder__() {}
 /** @abstract @return {ButtonBuilder} */
 m_createSubmitButtonBuilder__() {}
 /** @abstract @return {InputBuilder} */
 m_createSubmitInputBuilder__() {}
 /** @abstract @return {TableBuilder} */
 m_createTableBuilder__() {}
 /** @abstract @return {TableCaptionBuilder} */
 m_createTableCaptionBuilder__() {}
 /** @abstract @return {TableSectionBuilder} */
 m_createTBodyBuilder__() {}
 /** @abstract @return {TableCellBuilder} */
 m_createTDBuilder__() {}
 /** @abstract @return {TextAreaBuilder} */
 m_createTextAreaBuilder__() {}
 /** @abstract @return {InputBuilder} */
 m_createTextInputBuilder__() {}
 /** @abstract @return {TableSectionBuilder} */
 m_createTFootBuilder__() {}
 /** @abstract @return {TableCellBuilder} */
 m_createTHBuilder__() {}
 /** @abstract @return {TableSectionBuilder} */
 m_createTHeadBuilder__() {}
 /** @abstract @return {TableRowBuilder} */
 m_createTRBuilder__() {}
 /** @abstract @return {UListBuilder} */
 m_createUListBuilder__() {}
 /** @abstract @return {VideoBuilder} */
 m_createVideoBuilder__() {}
 /** @abstract @return {ElementBuilder} */
 m_trustedCreate__java_lang_String(/** ?string */ tagName) {}
 
 static $clinit() {
  ElementBuilderFactory.$clinit = () =>{};
  ElementBuilderFactory.$loadModules();
  j_l_Object.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof ElementBuilderFactory;
 }
 
 static $loadModules() {
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  DomBuilderFactory = goog.module.get('org.gwtproject.dom.builder.client.DomBuilderFactory$impl');
  HtmlBuilderFactory = goog.module.get('org.gwtproject.dom.builder.shared.HtmlBuilderFactory$impl');
 }
 
}
$Util.$setClassMetadata(ElementBuilderFactory, 'org.gwtproject.dom.builder.shared.ElementBuilderFactory');

/**@type {ElementBuilderFactory}*/
ElementBuilderFactory.f_instance__org_gwtproject_dom_builder_shared_ElementBuilderFactory_;

/* NATIVE.JS EPILOG */

const org_gwtproject_dom_builder_shared_ElementBuilderFactory = ElementBuilderFactory;

/*
 * Copyright © 2019 The GWT Project Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
// ensure that user.agent defines are included
/** @suppress {extraRequire} */
const useragent = goog.require('user');



exports = ElementBuilderFactory; 
//# sourceMappingURL=ElementBuilderFactory.js.map
