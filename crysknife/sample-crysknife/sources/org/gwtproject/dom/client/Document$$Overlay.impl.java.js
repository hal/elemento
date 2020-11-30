goog.module('org.gwtproject.dom.client.Document.$Overlay$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let EventInit_$Overlay = goog.forwardDeclare('elemental2.dom.EventInit.$Overlay$impl');
let EventTarget_$Overlay = goog.forwardDeclare('elemental2.dom.EventTarget.$Overlay$impl');
let HTMLButtonElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLButtonElement.$Overlay$impl');
let HTMLDocument_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLDocument.$Overlay$impl');
let HTMLInputElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLInputElement.$Overlay$impl');
let KeyboardEventInit_$Overlay = goog.forwardDeclare('elemental2.dom.KeyboardEventInit.$Overlay$impl');
let MouseEventInit_$Overlay = goog.forwardDeclare('elemental2.dom.MouseEventInit.$Overlay$impl');
let Integer = goog.forwardDeclare('java.lang.Integer$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let Js = goog.forwardDeclare('jsinterop.base.Js$impl');
let JsPropertyMap_$Overlay = goog.forwardDeclare('jsinterop.base.JsPropertyMap.$Overlay$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let $Overlay = goog.forwardDeclare('org.gwtproject.dom.client.AnchorElement.$Overlay$impl');
let AreaElement_$Overlay = goog.forwardDeclare('org.gwtproject.dom.client.AreaElement.$Overlay$impl');
let AudioElement_$Overlay = goog.forwardDeclare('org.gwtproject.dom.client.AudioElement.$Overlay$impl');
let BRElement_$Overlay = goog.forwardDeclare('org.gwtproject.dom.client.BRElement.$Overlay$impl');
let BaseElement_$Overlay = goog.forwardDeclare('org.gwtproject.dom.client.BaseElement.$Overlay$impl');
let BrowserEvents = goog.forwardDeclare('org.gwtproject.dom.client.BrowserEvents$impl');
let ButtonElement_$Overlay = goog.forwardDeclare('org.gwtproject.dom.client.ButtonElement.$Overlay$impl');
let CanvasElement_$Overlay = goog.forwardDeclare('org.gwtproject.dom.client.CanvasElement.$Overlay$impl');
let DListElement_$Overlay = goog.forwardDeclare('org.gwtproject.dom.client.DListElement.$Overlay$impl');
let DivElement_$Overlay = goog.forwardDeclare('org.gwtproject.dom.client.DivElement.$Overlay$impl');
let DocumentHolder = goog.forwardDeclare('org.gwtproject.dom.client.Document.DocumentHolder$impl');
let Element_$Overlay = goog.forwardDeclare('org.gwtproject.dom.client.Element.$Overlay$impl');
let FieldSetElement_$Overlay = goog.forwardDeclare('org.gwtproject.dom.client.FieldSetElement.$Overlay$impl');
let FormElement_$Overlay = goog.forwardDeclare('org.gwtproject.dom.client.FormElement.$Overlay$impl');
let FrameElement_$Overlay = goog.forwardDeclare('org.gwtproject.dom.client.FrameElement.$Overlay$impl');
let FrameSetElement_$Overlay = goog.forwardDeclare('org.gwtproject.dom.client.FrameSetElement.$Overlay$impl');
let HRElement_$Overlay = goog.forwardDeclare('org.gwtproject.dom.client.HRElement.$Overlay$impl');
let HeadElement_$Overlay = goog.forwardDeclare('org.gwtproject.dom.client.HeadElement.$Overlay$impl');
let HeadingElement_$Overlay = goog.forwardDeclare('org.gwtproject.dom.client.HeadingElement.$Overlay$impl');
let IFrameElement_$Overlay = goog.forwardDeclare('org.gwtproject.dom.client.IFrameElement.$Overlay$impl');
let ImageElement_$Overlay = goog.forwardDeclare('org.gwtproject.dom.client.ImageElement.$Overlay$impl');
let InputElement_$Overlay = goog.forwardDeclare('org.gwtproject.dom.client.InputElement.$Overlay$impl');
let LIElement_$Overlay = goog.forwardDeclare('org.gwtproject.dom.client.LIElement.$Overlay$impl');
let LabelElement_$Overlay = goog.forwardDeclare('org.gwtproject.dom.client.LabelElement.$Overlay$impl');
let LegendElement_$Overlay = goog.forwardDeclare('org.gwtproject.dom.client.LegendElement.$Overlay$impl');
let LinkElement_$Overlay = goog.forwardDeclare('org.gwtproject.dom.client.LinkElement.$Overlay$impl');
let MapElement_$Overlay = goog.forwardDeclare('org.gwtproject.dom.client.MapElement.$Overlay$impl');
let MetaElement_$Overlay = goog.forwardDeclare('org.gwtproject.dom.client.MetaElement.$Overlay$impl');
let ModElement_$Overlay = goog.forwardDeclare('org.gwtproject.dom.client.ModElement.$Overlay$impl');
let NativeEvent_$Overlay = goog.forwardDeclare('org.gwtproject.dom.client.NativeEvent.$Overlay$impl');
let OListElement_$Overlay = goog.forwardDeclare('org.gwtproject.dom.client.OListElement.$Overlay$impl');
let ObjectElement_$Overlay = goog.forwardDeclare('org.gwtproject.dom.client.ObjectElement.$Overlay$impl');
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
let Style_$Overlay = goog.forwardDeclare('org.gwtproject.dom.client.Style.$Overlay$impl');
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
let $Asserts = goog.forwardDeclare('vmbootstrap.Asserts$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

class Document_$Overlay {
 /** @return {Object} */
 static m_get__() {
  Document_$Overlay.$clinit();
  if ($Equality.$same(DocumentHolder.f_doc__org_gwtproject_dom_client_Document_DocumentHolder_, null)) {
   if ($Equality.$same("undefined", typeof($doc))) {
    DocumentHolder.f_doc__org_gwtproject_dom_client_Document_DocumentHolder_ = document;
   } else {
    DocumentHolder.f_doc__org_gwtproject_dom_client_Document_DocumentHolder_ = $doc;
   }
  }
  return DocumentHolder.f_doc__org_gwtproject_dom_client_Document_DocumentHolder_;
 }
 /** @return {Object} */
 static m_createAnchorElement__$devirt__org_gwtproject_dom_client_Document(/** !Object */ $thisArg) {
  Document_$Overlay.$clinit();
  return /**@type {Object}*/ ($Casts.$to($Casts.$to(/**@type {HTMLDocument}*/ (Js.m_uncheckedCast__java_lang_Object($thisArg)).createElement($Overlay.f_TAG__org_gwtproject_dom_client_AnchorElement_$Overlay), Element_$Overlay), $Overlay));
 }
 /** @return {Object} */
 static m_createAreaElement__$devirt__org_gwtproject_dom_client_Document(/** !Object */ $thisArg) {
  Document_$Overlay.$clinit();
  return /**@type {Object}*/ ($Casts.$to($Casts.$to(/**@type {HTMLDocument}*/ (Js.m_uncheckedCast__java_lang_Object($thisArg)).createElement(AreaElement_$Overlay.f_TAG__org_gwtproject_dom_client_AreaElement_$Overlay), Element_$Overlay), AreaElement_$Overlay));
 }
 /** @return {Object} */
 static m_createAudioElement__$devirt__org_gwtproject_dom_client_Document(/** !Object */ $thisArg) {
  Document_$Overlay.$clinit();
  return /**@type {Object}*/ ($Casts.$to($Casts.$to(/**@type {HTMLDocument}*/ (Js.m_uncheckedCast__java_lang_Object($thisArg)).createElement(AudioElement_$Overlay.f_TAG__org_gwtproject_dom_client_AudioElement_$Overlay), Element_$Overlay), AudioElement_$Overlay));
 }
 /** @return {Object} */
 static m_createBaseElement__$devirt__org_gwtproject_dom_client_Document(/** !Object */ $thisArg) {
  Document_$Overlay.$clinit();
  return /**@type {Object}*/ ($Casts.$to($Casts.$to(/**@type {HTMLDocument}*/ (Js.m_uncheckedCast__java_lang_Object($thisArg)).createElement(BaseElement_$Overlay.f_TAG__org_gwtproject_dom_client_BaseElement_$Overlay), Element_$Overlay), BaseElement_$Overlay));
 }
 /** @return {Object} */
 static m_createBlockQuoteElement__$devirt__org_gwtproject_dom_client_Document(/** !Object */ $thisArg) {
  Document_$Overlay.$clinit();
  return /**@type {Object}*/ ($Casts.$to($Casts.$to(/**@type {HTMLDocument}*/ (Js.m_uncheckedCast__java_lang_Object($thisArg)).createElement(QuoteElement_$Overlay.f_TAG_BLOCKQUOTE__org_gwtproject_dom_client_QuoteElement_$Overlay), Element_$Overlay), QuoteElement_$Overlay));
 }
 /** @return {Object} */
 static m_createBlurEvent__$devirt__org_gwtproject_dom_client_Document(/** !Object */ $thisArg) {
  Document_$Overlay.$clinit();
  return Document_$Overlay.m_createHtmlEvent__$devirt__org_gwtproject_dom_client_Document__java_lang_String__boolean__boolean($thisArg, BrowserEvents.f_BLUR__org_gwtproject_dom_client_BrowserEvents, false, false);
 }
 /** @return {Object} */
 static m_createBRElement__$devirt__org_gwtproject_dom_client_Document(/** !Object */ $thisArg) {
  Document_$Overlay.$clinit();
  return /**@type {Object}*/ ($Casts.$to($Casts.$to(/**@type {HTMLDocument}*/ (Js.m_uncheckedCast__java_lang_Object($thisArg)).createElement(BRElement_$Overlay.f_TAG__org_gwtproject_dom_client_BRElement_$Overlay), Element_$Overlay), BRElement_$Overlay));
 }
 /** @return {Object} */
 static m_createButtonInputElement__$devirt__org_gwtproject_dom_client_Document(/** !Object */ $thisArg) {
  Document_$Overlay.$clinit();
  return Document_$Overlay.m_createInputElement__$devirt__org_gwtproject_dom_client_Document__java_lang_String($thisArg, "button");
 }
 /** @return {Object} */
 static m_createCanvasElement__$devirt__org_gwtproject_dom_client_Document(/** !Object */ $thisArg) {
  Document_$Overlay.$clinit();
  return /**@type {Object}*/ ($Casts.$to($Casts.$to(/**@type {HTMLDocument}*/ (Js.m_uncheckedCast__java_lang_Object($thisArg)).createElement(CanvasElement_$Overlay.f_TAG__org_gwtproject_dom_client_CanvasElement_$Overlay), Element_$Overlay), CanvasElement_$Overlay));
 }
 /** @return {Object} */
 static m_createCaptionElement__$devirt__org_gwtproject_dom_client_Document(/** !Object */ $thisArg) {
  Document_$Overlay.$clinit();
  return /**@type {Object}*/ ($Casts.$to($Casts.$to(/**@type {HTMLDocument}*/ (Js.m_uncheckedCast__java_lang_Object($thisArg)).createElement(TableCaptionElement_$Overlay.f_TAG__org_gwtproject_dom_client_TableCaptionElement_$Overlay), Element_$Overlay), TableCaptionElement_$Overlay));
 }
 /** @return {Object} */
 static m_createChangeEvent__$devirt__org_gwtproject_dom_client_Document(/** !Object */ $thisArg) {
  Document_$Overlay.$clinit();
  return Document_$Overlay.m_createHtmlEvent__$devirt__org_gwtproject_dom_client_Document__java_lang_String__boolean__boolean($thisArg, BrowserEvents.f_CHANGE__org_gwtproject_dom_client_BrowserEvents, false, true);
 }
 /** @return {Object} */
 static m_createCheckInputElement__$devirt__org_gwtproject_dom_client_Document(/** !Object */ $thisArg) {
  Document_$Overlay.$clinit();
  let e = /**@type {HTMLInputElement}*/ ($Casts.$to(/**@type {HTMLDocument}*/ (Js.m_uncheckedCast__java_lang_Object($thisArg)).createElement("INPUT"), HTMLInputElement_$Overlay));
  e.type = "checkbox";
  e.value = "on";
  return /**@type {Object}*/ (Js.m_uncheckedCast__java_lang_Object(e));
 }
 /** @return {Object} */
 static m_createClickEvent__$devirt__org_gwtproject_dom_client_Document__int__int__int__int__int__boolean__boolean__boolean__boolean(/** !Object */ $thisArg, /** number */ detail, /** number */ screenX, /** number */ screenY, /** number */ clientX, /** number */ clientY, /** boolean */ ctrlKey, /** boolean */ altKey, /** boolean */ shiftKey, /** boolean */ metaKey) {
  Document_$Overlay.$clinit();
  return Document_$Overlay.m_createMouseEvent__$devirt__org_gwtproject_dom_client_Document__java_lang_String__boolean__boolean__int__int__int__int__int__boolean__boolean__boolean__boolean__int__org_gwtproject_dom_client_Element($thisArg, BrowserEvents.f_CLICK__org_gwtproject_dom_client_BrowserEvents, true, true, detail, screenX, screenY, clientX, clientY, ctrlKey, altKey, shiftKey, metaKey, NativeEvent_$Overlay.f_BUTTON_LEFT__org_gwtproject_dom_client_NativeEvent_$Overlay, null);
 }
 /** @return {Object} */
 static m_createColElement__$devirt__org_gwtproject_dom_client_Document(/** !Object */ $thisArg) {
  Document_$Overlay.$clinit();
  return /**@type {Object}*/ ($Casts.$to($Casts.$to(/**@type {HTMLDocument}*/ (Js.m_uncheckedCast__java_lang_Object($thisArg)).createElement(TableColElement_$Overlay.f_TAG_COL__org_gwtproject_dom_client_TableColElement_$Overlay), Element_$Overlay), TableColElement_$Overlay));
 }
 /** @return {Object} */
 static m_createColGroupElement__$devirt__org_gwtproject_dom_client_Document(/** !Object */ $thisArg) {
  Document_$Overlay.$clinit();
  return /**@type {Object}*/ ($Casts.$to($Casts.$to(/**@type {HTMLDocument}*/ (Js.m_uncheckedCast__java_lang_Object($thisArg)).createElement(TableColElement_$Overlay.f_TAG_COLGROUP__org_gwtproject_dom_client_TableColElement_$Overlay), Element_$Overlay), TableColElement_$Overlay));
 }
 /** @return {Object} */
 static m_createContextMenuEvent__$devirt__org_gwtproject_dom_client_Document(/** !Object */ $thisArg) {
  Document_$Overlay.$clinit();
  return Document_$Overlay.m_createHtmlEvent__$devirt__org_gwtproject_dom_client_Document__java_lang_String__boolean__boolean($thisArg, BrowserEvents.f_CONTEXTMENU__org_gwtproject_dom_client_BrowserEvents, true, true);
 }
 /** @return {Object} */
 static m_createDblClickEvent__$devirt__org_gwtproject_dom_client_Document__int__int__int__int__int__boolean__boolean__boolean__boolean(/** !Object */ $thisArg, /** number */ detail, /** number */ screenX, /** number */ screenY, /** number */ clientX, /** number */ clientY, /** boolean */ ctrlKey, /** boolean */ altKey, /** boolean */ shiftKey, /** boolean */ metaKey) {
  Document_$Overlay.$clinit();
  return Document_$Overlay.m_createMouseEvent__$devirt__org_gwtproject_dom_client_Document__java_lang_String__boolean__boolean__int__int__int__int__int__boolean__boolean__boolean__boolean__int__org_gwtproject_dom_client_Element($thisArg, BrowserEvents.f_DBLCLICK__org_gwtproject_dom_client_BrowserEvents, true, true, detail, screenX, screenY, clientX, clientY, ctrlKey, altKey, shiftKey, metaKey, NativeEvent_$Overlay.f_BUTTON_LEFT__org_gwtproject_dom_client_NativeEvent_$Overlay, null);
 }
 /** @return {Object} */
 static m_createDelElement__$devirt__org_gwtproject_dom_client_Document(/** !Object */ $thisArg) {
  Document_$Overlay.$clinit();
  return /**@type {Object}*/ ($Casts.$to($Casts.$to(/**@type {HTMLDocument}*/ (Js.m_uncheckedCast__java_lang_Object($thisArg)).createElement(ModElement_$Overlay.f_TAG_DEL__org_gwtproject_dom_client_ModElement_$Overlay), Element_$Overlay), ModElement_$Overlay));
 }
 /** @return {Object} */
 static m_createDivElement__$devirt__org_gwtproject_dom_client_Document(/** !Object */ $thisArg) {
  Document_$Overlay.$clinit();
  return /**@type {Object}*/ ($Casts.$to($Casts.$to(/**@type {HTMLDocument}*/ (Js.m_uncheckedCast__java_lang_Object($thisArg)).createElement(DivElement_$Overlay.f_TAG__org_gwtproject_dom_client_DivElement_$Overlay), Element_$Overlay), DivElement_$Overlay));
 }
 /** @return {Object} */
 static m_createDLElement__$devirt__org_gwtproject_dom_client_Document(/** !Object */ $thisArg) {
  Document_$Overlay.$clinit();
  return /**@type {Object}*/ ($Casts.$to($Casts.$to(/**@type {HTMLDocument}*/ (Js.m_uncheckedCast__java_lang_Object($thisArg)).createElement(DListElement_$Overlay.f_TAG__org_gwtproject_dom_client_DListElement_$Overlay), Element_$Overlay), DListElement_$Overlay));
 }
 /** @return {Object} */
 static m_createElement__$devirt__org_gwtproject_dom_client_Document__java_lang_String(/** !Object */ $thisArg, /** ?string */ tagName) {
  Document_$Overlay.$clinit();
  return /**@type {Object}*/ ($Casts.$to(/**@type {HTMLDocument}*/ (Js.m_uncheckedCast__java_lang_Object($thisArg)).createElement(tagName), Element_$Overlay));
 }
 /** @return {Object} */
 static m_createErrorEvent__$devirt__org_gwtproject_dom_client_Document(/** !Object */ $thisArg) {
  Document_$Overlay.$clinit();
  return Document_$Overlay.m_createHtmlEvent__$devirt__org_gwtproject_dom_client_Document__java_lang_String__boolean__boolean($thisArg, BrowserEvents.f_ERROR__org_gwtproject_dom_client_BrowserEvents, false, false);
 }
 /** @return {Object} */
 static m_createFieldSetElement__$devirt__org_gwtproject_dom_client_Document(/** !Object */ $thisArg) {
  Document_$Overlay.$clinit();
  return /**@type {Object}*/ ($Casts.$to($Casts.$to(/**@type {HTMLDocument}*/ (Js.m_uncheckedCast__java_lang_Object($thisArg)).createElement(FieldSetElement_$Overlay.f_TAG__org_gwtproject_dom_client_FieldSetElement_$Overlay), Element_$Overlay), FieldSetElement_$Overlay));
 }
 /** @return {Object} */
 static m_createFileInputElement__$devirt__org_gwtproject_dom_client_Document(/** !Object */ $thisArg) {
  Document_$Overlay.$clinit();
  return Document_$Overlay.m_createInputElement__$devirt__org_gwtproject_dom_client_Document__java_lang_String($thisArg, "file");
 }
 /** @return {Object} */
 static m_createFocusEvent__$devirt__org_gwtproject_dom_client_Document(/** !Object */ $thisArg) {
  Document_$Overlay.$clinit();
  return Document_$Overlay.m_createHtmlEvent__$devirt__org_gwtproject_dom_client_Document__java_lang_String__boolean__boolean($thisArg, BrowserEvents.f_FOCUS__org_gwtproject_dom_client_BrowserEvents, false, false);
 }
 /** @return {Object} */
 static m_createFormElement__$devirt__org_gwtproject_dom_client_Document(/** !Object */ $thisArg) {
  Document_$Overlay.$clinit();
  return /**@type {Object}*/ ($Casts.$to($Casts.$to(/**@type {HTMLDocument}*/ (Js.m_uncheckedCast__java_lang_Object($thisArg)).createElement(FormElement_$Overlay.f_TAG__org_gwtproject_dom_client_FormElement_$Overlay), Element_$Overlay), FormElement_$Overlay));
 }
 /** @return {Object} */
 static m_createFrameElement__$devirt__org_gwtproject_dom_client_Document(/** !Object */ $thisArg) {
  Document_$Overlay.$clinit();
  return /**@type {Object}*/ ($Casts.$to($Casts.$to(/**@type {HTMLDocument}*/ (Js.m_uncheckedCast__java_lang_Object($thisArg)).createElement(FrameElement_$Overlay.f_TAG__org_gwtproject_dom_client_FrameElement_$Overlay), Element_$Overlay), FrameElement_$Overlay));
 }
 /** @return {Object} */
 static m_createFrameSetElement__$devirt__org_gwtproject_dom_client_Document(/** !Object */ $thisArg) {
  Document_$Overlay.$clinit();
  return /**@type {Object}*/ ($Casts.$to($Casts.$to(/**@type {HTMLDocument}*/ (Js.m_uncheckedCast__java_lang_Object($thisArg)).createElement(FrameSetElement_$Overlay.f_TAG__org_gwtproject_dom_client_FrameSetElement_$Overlay), Element_$Overlay), FrameSetElement_$Overlay));
 }
 /** @return {Object} */
 static m_createHeadElement__$devirt__org_gwtproject_dom_client_Document(/** !Object */ $thisArg) {
  Document_$Overlay.$clinit();
  return /**@type {Object}*/ ($Casts.$to($Casts.$to(/**@type {HTMLDocument}*/ (Js.m_uncheckedCast__java_lang_Object($thisArg)).createElement(HeadElement_$Overlay.f_TAG__org_gwtproject_dom_client_HeadElement_$Overlay), Element_$Overlay), HeadElement_$Overlay));
 }
 /** @return {Object} */
 static m_createHElement__$devirt__org_gwtproject_dom_client_Document__int(/** !Object */ $thisArg, /** number */ n) {
  Document_$Overlay.$clinit();
  $Asserts.$assert((n >= 1) && (n <= 6));
  return /**@type {Object}*/ ($Casts.$to($Casts.$to(/**@type {HTMLDocument}*/ (Js.m_uncheckedCast__java_lang_Object($thisArg)).createElement("h" + n), Element_$Overlay), HeadingElement_$Overlay));
 }
 /** @return {Object} */
 static m_createHiddenInputElement__$devirt__org_gwtproject_dom_client_Document(/** !Object */ $thisArg) {
  Document_$Overlay.$clinit();
  return Document_$Overlay.m_createInputElement__$devirt__org_gwtproject_dom_client_Document__java_lang_String($thisArg, "hidden");
 }
 /** @return {Object} */
 static m_createHRElement__$devirt__org_gwtproject_dom_client_Document(/** !Object */ $thisArg) {
  Document_$Overlay.$clinit();
  return /**@type {Object}*/ ($Casts.$to($Casts.$to(/**@type {HTMLDocument}*/ (Js.m_uncheckedCast__java_lang_Object($thisArg)).createElement(HRElement_$Overlay.f_TAG__org_gwtproject_dom_client_HRElement_$Overlay), Element_$Overlay), HRElement_$Overlay));
 }
 /** @return {Object} @deprecated */
 static m_createHtmlEvent__$devirt__org_gwtproject_dom_client_Document__java_lang_String__boolean__boolean(/** !Object */ $thisArg, /** ?string */ type, /** boolean */ canBubble, /** boolean */ cancelable) {
  Document_$Overlay.$clinit();
  let details = EventInit_$Overlay.m_create__();
  details.bubbles = canBubble;
  details.cancelable = cancelable;
  let evt = new Event(type, details);
  return /**@type {Object}*/ ($Casts.$to(evt, NativeEvent_$Overlay));
 }
 /** @return {Object} */
 static m_createIFrameElement__$devirt__org_gwtproject_dom_client_Document(/** !Object */ $thisArg) {
  Document_$Overlay.$clinit();
  return /**@type {Object}*/ ($Casts.$to($Casts.$to(/**@type {HTMLDocument}*/ (Js.m_uncheckedCast__java_lang_Object($thisArg)).createElement(IFrameElement_$Overlay.f_TAG__org_gwtproject_dom_client_IFrameElement_$Overlay), Element_$Overlay), IFrameElement_$Overlay));
 }
 /** @return {Object} */
 static m_createImageElement__$devirt__org_gwtproject_dom_client_Document(/** !Object */ $thisArg) {
  Document_$Overlay.$clinit();
  return /**@type {Object}*/ ($Casts.$to($Casts.$to(/**@type {HTMLDocument}*/ (Js.m_uncheckedCast__java_lang_Object($thisArg)).createElement(ImageElement_$Overlay.f_TAG__org_gwtproject_dom_client_ImageElement_$Overlay), Element_$Overlay), ImageElement_$Overlay));
 }
 /** @return {Object} */
 static m_createImageInputElement__$devirt__org_gwtproject_dom_client_Document(/** !Object */ $thisArg) {
  Document_$Overlay.$clinit();
  return Document_$Overlay.m_createInputElement__$devirt__org_gwtproject_dom_client_Document__java_lang_String($thisArg, "image");
 }
 /** @return {Object} */
 static m_createInputEvent__$devirt__org_gwtproject_dom_client_Document(/** !Object */ $thisArg) {
  Document_$Overlay.$clinit();
  return Document_$Overlay.m_createHtmlEvent__$devirt__org_gwtproject_dom_client_Document__java_lang_String__boolean__boolean($thisArg, BrowserEvents.f_INPUT__org_gwtproject_dom_client_BrowserEvents, true, false);
 }
 /** @return {Object} */
 static m_createInsElement__$devirt__org_gwtproject_dom_client_Document(/** !Object */ $thisArg) {
  Document_$Overlay.$clinit();
  return /**@type {Object}*/ ($Casts.$to($Casts.$to(/**@type {HTMLDocument}*/ (Js.m_uncheckedCast__java_lang_Object($thisArg)).createElement(ModElement_$Overlay.f_TAG_INS__org_gwtproject_dom_client_ModElement_$Overlay), Element_$Overlay), ModElement_$Overlay));
 }
 /** @return {Object} */
 static m_createKeyCodeEvent__$devirt__org_gwtproject_dom_client_Document__java_lang_String__boolean__boolean__boolean__boolean__int(/** !Object */ $thisArg, /** ?string */ type, /** boolean */ ctrlKey, /** boolean */ altKey, /** boolean */ shiftKey, /** boolean */ metaKey, /** number */ keyCode) {
  Document_$Overlay.$clinit();
  let init = KeyboardEventInit_$Overlay.m_create__();
  init.ctrlKey = ctrlKey;
  init.altKey = altKey;
  init.shiftKey = shiftKey;
  init.metaKey = metaKey;
  init.bubbles = true;
  JsPropertyMap_$Overlay.m_set__$devirt__jsinterop_base_JsPropertyMap__java_lang_String__java_lang_Object(/**@type {Object<string, Integer>}*/ (Js.m_uncheckedCast__java_lang_Object(init)), "keyCode", keyCode);
  let event = new KeyboardEvent(type, init);
  return /**@type {Object}*/ (Js.m_uncheckedCast__java_lang_Object(event));
 }
 /** @return {Object} */
 static m_createKeyDownEvent__$devirt__org_gwtproject_dom_client_Document__boolean__boolean__boolean__boolean__int(/** !Object */ $thisArg, /** boolean */ ctrlKey, /** boolean */ altKey, /** boolean */ shiftKey, /** boolean */ metaKey, /** number */ keyCode) {
  Document_$Overlay.$clinit();
  return Document_$Overlay.m_createKeyCodeEvent__$devirt__org_gwtproject_dom_client_Document__java_lang_String__boolean__boolean__boolean__boolean__int($thisArg, BrowserEvents.f_KEYDOWN__org_gwtproject_dom_client_BrowserEvents, ctrlKey, altKey, shiftKey, metaKey, keyCode);
 }
 /** @return {Object} @deprecated */
 static m_createKeyPressEvent__$devirt__org_gwtproject_dom_client_Document__boolean__boolean__boolean__boolean__int(/** !Object */ $thisArg, /** boolean */ ctrlKey, /** boolean */ altKey, /** boolean */ shiftKey, /** boolean */ metaKey, /** number */ charCode) {
  Document_$Overlay.$clinit();
  let init = KeyboardEventInit_$Overlay.m_create__();
  init.ctrlKey = ctrlKey;
  init.altKey = altKey;
  init.shiftKey = shiftKey;
  init.metaKey = metaKey;
  init.bubbles = true;
  JsPropertyMap_$Overlay.m_set__$devirt__jsinterop_base_JsPropertyMap__java_lang_String__java_lang_Object(/**@type {Object<string, Integer>}*/ (Js.m_uncheckedCast__java_lang_Object(init)), "charCode", charCode);
  let event = new KeyboardEvent("keypress", init);
  return /**@type {Object}*/ (Js.m_uncheckedCast__java_lang_Object(event));
 }
 /** @return {Object} */
 static m_createKeyUpEvent__$devirt__org_gwtproject_dom_client_Document__boolean__boolean__boolean__boolean__int(/** !Object */ $thisArg, /** boolean */ ctrlKey, /** boolean */ altKey, /** boolean */ shiftKey, /** boolean */ metaKey, /** number */ keyCode) {
  Document_$Overlay.$clinit();
  return Document_$Overlay.m_createKeyCodeEvent__$devirt__org_gwtproject_dom_client_Document__java_lang_String__boolean__boolean__boolean__boolean__int($thisArg, BrowserEvents.f_KEYUP__org_gwtproject_dom_client_BrowserEvents, ctrlKey, altKey, shiftKey, metaKey, keyCode);
 }
 /** @return {Object} */
 static m_createLabelElement__$devirt__org_gwtproject_dom_client_Document(/** !Object */ $thisArg) {
  Document_$Overlay.$clinit();
  return /**@type {Object}*/ ($Casts.$to($Casts.$to(/**@type {HTMLDocument}*/ (Js.m_uncheckedCast__java_lang_Object($thisArg)).createElement(LabelElement_$Overlay.f_TAG__org_gwtproject_dom_client_LabelElement_$Overlay), Element_$Overlay), LabelElement_$Overlay));
 }
 /** @return {Object} */
 static m_createLegendElement__$devirt__org_gwtproject_dom_client_Document(/** !Object */ $thisArg) {
  Document_$Overlay.$clinit();
  return /**@type {Object}*/ ($Casts.$to($Casts.$to(/**@type {HTMLDocument}*/ (Js.m_uncheckedCast__java_lang_Object($thisArg)).createElement(LegendElement_$Overlay.f_TAG__org_gwtproject_dom_client_LegendElement_$Overlay), Element_$Overlay), LegendElement_$Overlay));
 }
 /** @return {Object} */
 static m_createLIElement__$devirt__org_gwtproject_dom_client_Document(/** !Object */ $thisArg) {
  Document_$Overlay.$clinit();
  return /**@type {Object}*/ ($Casts.$to($Casts.$to(/**@type {HTMLDocument}*/ (Js.m_uncheckedCast__java_lang_Object($thisArg)).createElement(LIElement_$Overlay.f_TAG__org_gwtproject_dom_client_LIElement_$Overlay), Element_$Overlay), LIElement_$Overlay));
 }
 /** @return {Object} */
 static m_createLinkElement__$devirt__org_gwtproject_dom_client_Document(/** !Object */ $thisArg) {
  Document_$Overlay.$clinit();
  return /**@type {Object}*/ ($Casts.$to($Casts.$to(/**@type {HTMLDocument}*/ (Js.m_uncheckedCast__java_lang_Object($thisArg)).createElement(LinkElement_$Overlay.f_TAG__org_gwtproject_dom_client_LinkElement_$Overlay), Element_$Overlay), LinkElement_$Overlay));
 }
 /** @return {Object} */
 static m_createLoadEvent__$devirt__org_gwtproject_dom_client_Document(/** !Object */ $thisArg) {
  Document_$Overlay.$clinit();
  return Document_$Overlay.m_createHtmlEvent__$devirt__org_gwtproject_dom_client_Document__java_lang_String__boolean__boolean($thisArg, BrowserEvents.f_LOAD__org_gwtproject_dom_client_BrowserEvents, false, false);
 }
 /** @return {Object} */
 static m_createMapElement__$devirt__org_gwtproject_dom_client_Document(/** !Object */ $thisArg) {
  Document_$Overlay.$clinit();
  return /**@type {Object}*/ ($Casts.$to($Casts.$to(/**@type {HTMLDocument}*/ (Js.m_uncheckedCast__java_lang_Object($thisArg)).createElement(MapElement_$Overlay.f_TAG__org_gwtproject_dom_client_MapElement_$Overlay), Element_$Overlay), MapElement_$Overlay));
 }
 /** @return {Object} */
 static m_createMetaElement__$devirt__org_gwtproject_dom_client_Document(/** !Object */ $thisArg) {
  Document_$Overlay.$clinit();
  return /**@type {Object}*/ ($Casts.$to($Casts.$to(/**@type {HTMLDocument}*/ (Js.m_uncheckedCast__java_lang_Object($thisArg)).createElement(MetaElement_$Overlay.f_TAG__org_gwtproject_dom_client_MetaElement_$Overlay), Element_$Overlay), MetaElement_$Overlay));
 }
 /** @return {Object} */
 static m_createMouseDownEvent__$devirt__org_gwtproject_dom_client_Document__int__int__int__int__int__boolean__boolean__boolean__boolean__int(/** !Object */ $thisArg, /** number */ detail, /** number */ screenX, /** number */ screenY, /** number */ clientX, /** number */ clientY, /** boolean */ ctrlKey, /** boolean */ altKey, /** boolean */ shiftKey, /** boolean */ metaKey, /** number */ button) {
  Document_$Overlay.$clinit();
  return Document_$Overlay.m_createMouseEvent__$devirt__org_gwtproject_dom_client_Document__java_lang_String__boolean__boolean__int__int__int__int__int__boolean__boolean__boolean__boolean__int__org_gwtproject_dom_client_Element($thisArg, BrowserEvents.f_MOUSEDOWN__org_gwtproject_dom_client_BrowserEvents, true, true, detail, screenX, screenY, clientX, clientY, ctrlKey, altKey, shiftKey, metaKey, button, null);
 }
 /** @return {Object} */
 static m_createMouseEvent__$devirt__org_gwtproject_dom_client_Document__java_lang_String__boolean__boolean__int__int__int__int__int__boolean__boolean__boolean__boolean__int__org_gwtproject_dom_client_Element(/** !Object */ $thisArg, /** ?string */ type, /** boolean */ canBubble, /** boolean */ cancelable, /** number */ detail, /** number */ screenX, /** number */ screenY, /** number */ clientX, /** number */ clientY, /** boolean */ ctrlKey, /** boolean */ altKey, /** boolean */ shiftKey, /** boolean */ metaKey, /** number */ button, /** Object */ relatedTarget) {
  Document_$Overlay.$clinit();
  let button1 = button;
  if (button1 == 1) {
   button1 = 0;
  } else if (button1 == 4) {
   button1 = 1;
  } else {
   button1 = 2;
  }
  let init = MouseEventInit_$Overlay.m_create__();
  init.button = button1;
  init.bubbles = canBubble;
  init.cancelable = cancelable;
  init.detail = detail;
  init.screenX = screenX;
  init.screenY = screenY;
  init.clientX = clientX;
  init.clientY = clientY;
  init.ctrlKey = ctrlKey;
  init.altKey = altKey;
  init.shiftKey = shiftKey;
  init.metaKey = metaKey;
  init.relatedTarget = /**@type {EventTarget}*/ (Js.m_uncheckedCast__java_lang_Object(relatedTarget));
  return /**@type {Object}*/ (Js.m_uncheckedCast__java_lang_Object(new MouseEvent(type, init)));
 }
 /** @return {Object} */
 static m_createMouseMoveEvent__$devirt__org_gwtproject_dom_client_Document__int__int__int__int__int__boolean__boolean__boolean__boolean__int(/** !Object */ $thisArg, /** number */ detail, /** number */ screenX, /** number */ screenY, /** number */ clientX, /** number */ clientY, /** boolean */ ctrlKey, /** boolean */ altKey, /** boolean */ shiftKey, /** boolean */ metaKey, /** number */ button) {
  Document_$Overlay.$clinit();
  return Document_$Overlay.m_createMouseEvent__$devirt__org_gwtproject_dom_client_Document__java_lang_String__boolean__boolean__int__int__int__int__int__boolean__boolean__boolean__boolean__int__org_gwtproject_dom_client_Element($thisArg, BrowserEvents.f_MOUSEMOVE__org_gwtproject_dom_client_BrowserEvents, true, true, detail, screenX, screenY, clientX, clientY, ctrlKey, altKey, shiftKey, metaKey, button, null);
 }
 /** @return {Object} */
 static m_createMouseOutEvent__$devirt__org_gwtproject_dom_client_Document__int__int__int__int__int__boolean__boolean__boolean__boolean__int__org_gwtproject_dom_client_Element(/** !Object */ $thisArg, /** number */ detail, /** number */ screenX, /** number */ screenY, /** number */ clientX, /** number */ clientY, /** boolean */ ctrlKey, /** boolean */ altKey, /** boolean */ shiftKey, /** boolean */ metaKey, /** number */ button, /** Object */ relatedTarget) {
  Document_$Overlay.$clinit();
  return Document_$Overlay.m_createMouseEvent__$devirt__org_gwtproject_dom_client_Document__java_lang_String__boolean__boolean__int__int__int__int__int__boolean__boolean__boolean__boolean__int__org_gwtproject_dom_client_Element($thisArg, BrowserEvents.f_MOUSEOUT__org_gwtproject_dom_client_BrowserEvents, true, true, detail, screenX, screenY, clientX, clientY, ctrlKey, altKey, shiftKey, metaKey, button, relatedTarget);
 }
 /** @return {Object} */
 static m_createMouseOverEvent__$devirt__org_gwtproject_dom_client_Document__int__int__int__int__int__boolean__boolean__boolean__boolean__int__org_gwtproject_dom_client_Element(/** !Object */ $thisArg, /** number */ detail, /** number */ screenX, /** number */ screenY, /** number */ clientX, /** number */ clientY, /** boolean */ ctrlKey, /** boolean */ altKey, /** boolean */ shiftKey, /** boolean */ metaKey, /** number */ button, /** Object */ relatedTarget) {
  Document_$Overlay.$clinit();
  return Document_$Overlay.m_createMouseEvent__$devirt__org_gwtproject_dom_client_Document__java_lang_String__boolean__boolean__int__int__int__int__int__boolean__boolean__boolean__boolean__int__org_gwtproject_dom_client_Element($thisArg, BrowserEvents.f_MOUSEOVER__org_gwtproject_dom_client_BrowserEvents, true, true, detail, screenX, screenY, clientX, clientY, ctrlKey, altKey, shiftKey, metaKey, button, relatedTarget);
 }
 /** @return {Object} */
 static m_createMouseUpEvent__$devirt__org_gwtproject_dom_client_Document__int__int__int__int__int__boolean__boolean__boolean__boolean__int(/** !Object */ $thisArg, /** number */ detail, /** number */ screenX, /** number */ screenY, /** number */ clientX, /** number */ clientY, /** boolean */ ctrlKey, /** boolean */ altKey, /** boolean */ shiftKey, /** boolean */ metaKey, /** number */ button) {
  Document_$Overlay.$clinit();
  return Document_$Overlay.m_createMouseEvent__$devirt__org_gwtproject_dom_client_Document__java_lang_String__boolean__boolean__int__int__int__int__int__boolean__boolean__boolean__boolean__int__org_gwtproject_dom_client_Element($thisArg, BrowserEvents.f_MOUSEUP__org_gwtproject_dom_client_BrowserEvents, true, true, detail, screenX, screenY, clientX, clientY, ctrlKey, altKey, shiftKey, metaKey, button, null);
 }
 /** @return {Object} */
 static m_createObjectElement__$devirt__org_gwtproject_dom_client_Document(/** !Object */ $thisArg) {
  Document_$Overlay.$clinit();
  return /**@type {Object}*/ ($Casts.$to($Casts.$to(/**@type {HTMLDocument}*/ (Js.m_uncheckedCast__java_lang_Object($thisArg)).createElement(ObjectElement_$Overlay.f_TAG__org_gwtproject_dom_client_ObjectElement_$Overlay), Element_$Overlay), ObjectElement_$Overlay));
 }
 /** @return {Object} */
 static m_createOLElement__$devirt__org_gwtproject_dom_client_Document(/** !Object */ $thisArg) {
  Document_$Overlay.$clinit();
  return /**@type {Object}*/ ($Casts.$to($Casts.$to(/**@type {HTMLDocument}*/ (Js.m_uncheckedCast__java_lang_Object($thisArg)).createElement(OListElement_$Overlay.f_TAG__org_gwtproject_dom_client_OListElement_$Overlay), Element_$Overlay), OListElement_$Overlay));
 }
 /** @return {Object} */
 static m_createOptGroupElement__$devirt__org_gwtproject_dom_client_Document(/** !Object */ $thisArg) {
  Document_$Overlay.$clinit();
  return /**@type {Object}*/ ($Casts.$to($Casts.$to(/**@type {HTMLDocument}*/ (Js.m_uncheckedCast__java_lang_Object($thisArg)).createElement(OptGroupElement_$Overlay.f_TAG__org_gwtproject_dom_client_OptGroupElement_$Overlay), Element_$Overlay), OptGroupElement_$Overlay));
 }
 /** @return {Object} */
 static m_createOptionElement__$devirt__org_gwtproject_dom_client_Document(/** !Object */ $thisArg) {
  Document_$Overlay.$clinit();
  return /**@type {Object}*/ ($Casts.$to($Casts.$to(/**@type {HTMLDocument}*/ (Js.m_uncheckedCast__java_lang_Object($thisArg)).createElement(OptionElement_$Overlay.f_TAG__org_gwtproject_dom_client_OptionElement_$Overlay), Element_$Overlay), OptionElement_$Overlay));
 }
 /** @return {Object} */
 static m_createParamElement__$devirt__org_gwtproject_dom_client_Document(/** !Object */ $thisArg) {
  Document_$Overlay.$clinit();
  return /**@type {Object}*/ ($Casts.$to($Casts.$to(/**@type {HTMLDocument}*/ (Js.m_uncheckedCast__java_lang_Object($thisArg)).createElement(ParamElement_$Overlay.f_TAG__org_gwtproject_dom_client_ParamElement_$Overlay), Element_$Overlay), ParamElement_$Overlay));
 }
 /** @return {Object} */
 static m_createPasswordInputElement__$devirt__org_gwtproject_dom_client_Document(/** !Object */ $thisArg) {
  Document_$Overlay.$clinit();
  return Document_$Overlay.m_createInputElement__$devirt__org_gwtproject_dom_client_Document__java_lang_String($thisArg, "password");
 }
 /** @return {Object} */
 static m_createPElement__$devirt__org_gwtproject_dom_client_Document(/** !Object */ $thisArg) {
  Document_$Overlay.$clinit();
  return /**@type {Object}*/ ($Casts.$to($Casts.$to(/**@type {HTMLDocument}*/ (Js.m_uncheckedCast__java_lang_Object($thisArg)).createElement(ParagraphElement_$Overlay.f_TAG__org_gwtproject_dom_client_ParagraphElement_$Overlay), Element_$Overlay), ParagraphElement_$Overlay));
 }
 /** @return {Object} */
 static m_createPreElement__$devirt__org_gwtproject_dom_client_Document(/** !Object */ $thisArg) {
  Document_$Overlay.$clinit();
  return /**@type {Object}*/ ($Casts.$to($Casts.$to(/**@type {HTMLDocument}*/ (Js.m_uncheckedCast__java_lang_Object($thisArg)).createElement(PreElement_$Overlay.f_TAG__org_gwtproject_dom_client_PreElement_$Overlay), Element_$Overlay), PreElement_$Overlay));
 }
 /** @return {Object} */
 static m_createPushButtonElement__$devirt__org_gwtproject_dom_client_Document(/** !Object */ $thisArg) {
  Document_$Overlay.$clinit();
  return Document_$Overlay.m_createButtonElement__$devirt__org_gwtproject_dom_client_Document__java_lang_String($thisArg, "button");
 }
 /** @return {Object} */
 static m_createQElement__$devirt__org_gwtproject_dom_client_Document(/** !Object */ $thisArg) {
  Document_$Overlay.$clinit();
  return /**@type {Object}*/ ($Casts.$to($Casts.$to(/**@type {HTMLDocument}*/ (Js.m_uncheckedCast__java_lang_Object($thisArg)).createElement(QuoteElement_$Overlay.f_TAG_Q__org_gwtproject_dom_client_QuoteElement_$Overlay), Element_$Overlay), QuoteElement_$Overlay));
 }
 /** @return {Object} */
 static m_createRadioInputElement__$devirt__org_gwtproject_dom_client_Document__java_lang_String(/** !Object */ $thisArg, /** ?string */ name) {
  Document_$Overlay.$clinit();
  return Document_$Overlay.m_createInputRadioElement__$devirt__org_gwtproject_dom_client_Document__java_lang_String($thisArg, name);
 }
 /** @return {Object} */
 static m_createResetButtonElement__$devirt__org_gwtproject_dom_client_Document(/** !Object */ $thisArg) {
  Document_$Overlay.$clinit();
  return Document_$Overlay.m_createButtonElement__$devirt__org_gwtproject_dom_client_Document__java_lang_String($thisArg, "reset");
 }
 /** @return {Object} */
 static m_createResetInputElement__$devirt__org_gwtproject_dom_client_Document(/** !Object */ $thisArg) {
  Document_$Overlay.$clinit();
  return Document_$Overlay.m_createInputElement__$devirt__org_gwtproject_dom_client_Document__java_lang_String($thisArg, "reset");
 }
 /** @return {Object} */
 static m_createScriptElement__$devirt__org_gwtproject_dom_client_Document(/** !Object */ $thisArg) {
  Document_$Overlay.$clinit();
  return /**@type {Object}*/ ($Casts.$to($Casts.$to(/**@type {HTMLDocument}*/ (Js.m_uncheckedCast__java_lang_Object($thisArg)).createElement(ScriptElement_$Overlay.f_TAG__org_gwtproject_dom_client_ScriptElement_$Overlay), Element_$Overlay), ScriptElement_$Overlay));
 }
 /** @return {Object} */
 static m_createScriptElement__$devirt__org_gwtproject_dom_client_Document__java_lang_String(/** !Object */ $thisArg, /** ?string */ source) {
  Document_$Overlay.$clinit();
  let elem = /**@type {Object}*/ ($Casts.$to($Casts.$to(/**@type {HTMLDocument}*/ (Js.m_uncheckedCast__java_lang_Object($thisArg)).createElement("script"), Element_$Overlay), ScriptElement_$Overlay));
  elem.text = source;
  return elem;
 }
 /** @return {Object} */
 static m_createScrollEvent__$devirt__org_gwtproject_dom_client_Document(/** !Object */ $thisArg) {
  Document_$Overlay.$clinit();
  return Document_$Overlay.m_createHtmlEvent__$devirt__org_gwtproject_dom_client_Document__java_lang_String__boolean__boolean($thisArg, BrowserEvents.f_SCROLL__org_gwtproject_dom_client_BrowserEvents, false, false);
 }
 /** @return {Object} */
 static m_createSelectElement__$devirt__org_gwtproject_dom_client_Document(/** !Object */ $thisArg) {
  Document_$Overlay.$clinit();
  return /**@type {Object}*/ ($Casts.$to($Casts.$to(/**@type {HTMLDocument}*/ (Js.m_uncheckedCast__java_lang_Object($thisArg)).createElement(SelectElement_$Overlay.f_TAG__org_gwtproject_dom_client_SelectElement_$Overlay), Element_$Overlay), SelectElement_$Overlay));
 }
 /** @return {Object} */
 static m_createSourceElement__$devirt__org_gwtproject_dom_client_Document(/** !Object */ $thisArg) {
  Document_$Overlay.$clinit();
  return /**@type {Object}*/ ($Casts.$to($Casts.$to(/**@type {HTMLDocument}*/ (Js.m_uncheckedCast__java_lang_Object($thisArg)).createElement(SourceElement_$Overlay.f_TAG__org_gwtproject_dom_client_SourceElement_$Overlay), Element_$Overlay), SourceElement_$Overlay));
 }
 /** @return {Object} */
 static m_createSpanElement__$devirt__org_gwtproject_dom_client_Document(/** !Object */ $thisArg) {
  Document_$Overlay.$clinit();
  return /**@type {Object}*/ ($Casts.$to($Casts.$to(/**@type {HTMLDocument}*/ (Js.m_uncheckedCast__java_lang_Object($thisArg)).createElement(SpanElement_$Overlay.f_TAG__org_gwtproject_dom_client_SpanElement_$Overlay), Element_$Overlay), SpanElement_$Overlay));
 }
 /** @return {Object} */
 static m_createStyleElement__$devirt__org_gwtproject_dom_client_Document(/** !Object */ $thisArg) {
  Document_$Overlay.$clinit();
  return /**@type {Object}*/ ($Casts.$to($Casts.$to(/**@type {HTMLDocument}*/ (Js.m_uncheckedCast__java_lang_Object($thisArg)).createElement(StyleElement_$Overlay.f_TAG__org_gwtproject_dom_client_StyleElement_$Overlay), Element_$Overlay), StyleElement_$Overlay));
 }
 /** @return {Object} */
 static m_createSubmitButtonElement__$devirt__org_gwtproject_dom_client_Document(/** !Object */ $thisArg) {
  Document_$Overlay.$clinit();
  return Document_$Overlay.m_createButtonElement__$devirt__org_gwtproject_dom_client_Document__java_lang_String($thisArg, "submit");
 }
 /** @return {Object} */
 static m_createSubmitInputElement__$devirt__org_gwtproject_dom_client_Document(/** !Object */ $thisArg) {
  Document_$Overlay.$clinit();
  return Document_$Overlay.m_createInputElement__$devirt__org_gwtproject_dom_client_Document__java_lang_String($thisArg, "submit");
 }
 /** @return {Object} */
 static m_createTableElement__$devirt__org_gwtproject_dom_client_Document(/** !Object */ $thisArg) {
  Document_$Overlay.$clinit();
  return /**@type {Object}*/ ($Casts.$to($Casts.$to(/**@type {HTMLDocument}*/ (Js.m_uncheckedCast__java_lang_Object($thisArg)).createElement(TableElement_$Overlay.f_TAG__org_gwtproject_dom_client_TableElement_$Overlay), Element_$Overlay), TableElement_$Overlay));
 }
 /** @return {Object} */
 static m_createTBodyElement__$devirt__org_gwtproject_dom_client_Document(/** !Object */ $thisArg) {
  Document_$Overlay.$clinit();
  return /**@type {Object}*/ ($Casts.$to($Casts.$to(/**@type {HTMLDocument}*/ (Js.m_uncheckedCast__java_lang_Object($thisArg)).createElement(TableSectionElement_$Overlay.f_TAG_TBODY__org_gwtproject_dom_client_TableSectionElement_$Overlay), Element_$Overlay), TableSectionElement_$Overlay));
 }
 /** @return {Object} */
 static m_createTDElement__$devirt__org_gwtproject_dom_client_Document(/** !Object */ $thisArg) {
  Document_$Overlay.$clinit();
  return /**@type {Object}*/ ($Casts.$to($Casts.$to(/**@type {HTMLDocument}*/ (Js.m_uncheckedCast__java_lang_Object($thisArg)).createElement(TableCellElement_$Overlay.f_TAG_TD__org_gwtproject_dom_client_TableCellElement_$Overlay), Element_$Overlay), TableCellElement_$Overlay));
 }
 /** @return {Object} */
 static m_createTextAreaElement__$devirt__org_gwtproject_dom_client_Document(/** !Object */ $thisArg) {
  Document_$Overlay.$clinit();
  return /**@type {Object}*/ ($Casts.$to($Casts.$to(/**@type {HTMLDocument}*/ (Js.m_uncheckedCast__java_lang_Object($thisArg)).createElement(TextAreaElement_$Overlay.f_TAG__org_gwtproject_dom_client_TextAreaElement_$Overlay), Element_$Overlay), TextAreaElement_$Overlay));
 }
 /** @return {Object} */
 static m_createTextInputElement__$devirt__org_gwtproject_dom_client_Document(/** !Object */ $thisArg) {
  Document_$Overlay.$clinit();
  return Document_$Overlay.m_createInputElement__$devirt__org_gwtproject_dom_client_Document__java_lang_String($thisArg, "text");
 }
 /** @return {Object} */
 static m_createTFootElement__$devirt__org_gwtproject_dom_client_Document(/** !Object */ $thisArg) {
  Document_$Overlay.$clinit();
  return /**@type {Object}*/ ($Casts.$to($Casts.$to(/**@type {HTMLDocument}*/ (Js.m_uncheckedCast__java_lang_Object($thisArg)).createElement(TableSectionElement_$Overlay.f_TAG_TFOOT__org_gwtproject_dom_client_TableSectionElement_$Overlay), Element_$Overlay), TableSectionElement_$Overlay));
 }
 /** @return {Object} */
 static m_createTHeadElement__$devirt__org_gwtproject_dom_client_Document(/** !Object */ $thisArg) {
  Document_$Overlay.$clinit();
  return /**@type {Object}*/ ($Casts.$to($Casts.$to(/**@type {HTMLDocument}*/ (Js.m_uncheckedCast__java_lang_Object($thisArg)).createElement(TableSectionElement_$Overlay.f_TAG_THEAD__org_gwtproject_dom_client_TableSectionElement_$Overlay), Element_$Overlay), TableSectionElement_$Overlay));
 }
 /** @return {Object} */
 static m_createTHElement__$devirt__org_gwtproject_dom_client_Document(/** !Object */ $thisArg) {
  Document_$Overlay.$clinit();
  return /**@type {Object}*/ ($Casts.$to($Casts.$to(/**@type {HTMLDocument}*/ (Js.m_uncheckedCast__java_lang_Object($thisArg)).createElement(TableCellElement_$Overlay.f_TAG_TH__org_gwtproject_dom_client_TableCellElement_$Overlay), Element_$Overlay), TableCellElement_$Overlay));
 }
 /** @return {Object} */
 static m_createTitleElement__$devirt__org_gwtproject_dom_client_Document(/** !Object */ $thisArg) {
  Document_$Overlay.$clinit();
  return /**@type {Object}*/ ($Casts.$to($Casts.$to(/**@type {HTMLDocument}*/ (Js.m_uncheckedCast__java_lang_Object($thisArg)).createElement(TitleElement_$Overlay.f_TAG__org_gwtproject_dom_client_TitleElement_$Overlay), Element_$Overlay), TitleElement_$Overlay));
 }
 /** @return {Object} */
 static m_createTRElement__$devirt__org_gwtproject_dom_client_Document(/** !Object */ $thisArg) {
  Document_$Overlay.$clinit();
  return /**@type {Object}*/ ($Casts.$to($Casts.$to(/**@type {HTMLDocument}*/ (Js.m_uncheckedCast__java_lang_Object($thisArg)).createElement(TableRowElement_$Overlay.f_TAG__org_gwtproject_dom_client_TableRowElement_$Overlay), Element_$Overlay), TableRowElement_$Overlay));
 }
 /** @return {Object} */
 static m_createULElement__$devirt__org_gwtproject_dom_client_Document(/** !Object */ $thisArg) {
  Document_$Overlay.$clinit();
  return /**@type {Object}*/ ($Casts.$to($Casts.$to(/**@type {HTMLDocument}*/ (Js.m_uncheckedCast__java_lang_Object($thisArg)).createElement(UListElement_$Overlay.f_TAG__org_gwtproject_dom_client_UListElement_$Overlay), Element_$Overlay), UListElement_$Overlay));
 }
 /** @return {?string} */
 static m_createUniqueId__$devirt__org_gwtproject_dom_client_Document(/** !Object */ $thisArg) {
  Document_$Overlay.$clinit();
  if (Js.isFalsy($thisArg.gwt_uid)) {
   $thisArg.gwt_uid = 1.0;
  }
  return "gwt-uid-" + $thisArg.gwt_uid++;
 }
 /** @return {Object} */
 static m_createVideoElement__$devirt__org_gwtproject_dom_client_Document(/** !Object */ $thisArg) {
  Document_$Overlay.$clinit();
  return /**@type {Object}*/ ($Casts.$to($Casts.$to(/**@type {HTMLDocument}*/ (Js.m_uncheckedCast__java_lang_Object($thisArg)).createElement(VideoElement_$Overlay.f_TAG__org_gwtproject_dom_client_VideoElement_$Overlay), Element_$Overlay), VideoElement_$Overlay));
 }
 
 static m_enableScrolling__$devirt__org_gwtproject_dom_client_Document__boolean(/** !Object */ $thisArg, /** boolean */ enable) {
  Document_$Overlay.$clinit();
  Style_$Overlay.m_setProperty__$devirt__org_gwtproject_dom_client_Style__java_lang_String__java_lang_String(Document_$Overlay.m_getViewportElement__$devirt__org_gwtproject_dom_client_Document($thisArg).style, "overflow", enable ? "auto" : "hidden");
 }
 /** @return {number} */
 static m_getBodyOffsetLeft__$devirt__org_gwtproject_dom_client_Document(/** !Object */ $thisArg) {
  Document_$Overlay.$clinit();
  return /**@type {HTMLDocument}*/ (Js.m_uncheckedCast__java_lang_Object($thisArg)).documentElement.clientLeft;
 }
 /** @return {number} */
 static m_getBodyOffsetTop__$devirt__org_gwtproject_dom_client_Document(/** !Object */ $thisArg) {
  Document_$Overlay.$clinit();
  return /**@type {HTMLDocument}*/ (Js.m_uncheckedCast__java_lang_Object($thisArg)).documentElement.clientTop;
 }
 /** @return {number} */
 static m_getClientHeight__$devirt__org_gwtproject_dom_client_Document(/** !Object */ $thisArg) {
  Document_$Overlay.$clinit();
  return Element_$Overlay.m_getClientHeight__$devirt__org_gwtproject_dom_client_Element(Document_$Overlay.m_getViewportElement__$devirt__org_gwtproject_dom_client_Document($thisArg));
 }
 /** @return {number} */
 static m_getClientWidth__$devirt__org_gwtproject_dom_client_Document(/** !Object */ $thisArg) {
  Document_$Overlay.$clinit();
  return Element_$Overlay.m_getClientWidth__$devirt__org_gwtproject_dom_client_Element(Document_$Overlay.m_getViewportElement__$devirt__org_gwtproject_dom_client_Document($thisArg));
 }
 /** @return {number} */
 static m_getScrollHeight__$devirt__org_gwtproject_dom_client_Document(/** !Object */ $thisArg) {
  Document_$Overlay.$clinit();
  return Element_$Overlay.m_getScrollHeight__$devirt__org_gwtproject_dom_client_Element(Document_$Overlay.m_getViewportElement__$devirt__org_gwtproject_dom_client_Document($thisArg));
 }
 /** @return {number} */
 static m_getScrollLeft__$devirt__org_gwtproject_dom_client_Document(/** !Object */ $thisArg) {
  Document_$Overlay.$clinit();
  return Element_$Overlay.m_getScrollLeft__$devirt__org_gwtproject_dom_client_Element(Document_$Overlay.m_ensureDocumentScrollingElement__$devirt__org_gwtproject_dom_client_Document($thisArg));
 }
 /** @return {number} */
 static m_getScrollTop__$devirt__org_gwtproject_dom_client_Document(/** !Object */ $thisArg) {
  Document_$Overlay.$clinit();
  return Element_$Overlay.m_getScrollTop__$devirt__org_gwtproject_dom_client_Element(Document_$Overlay.m_ensureDocumentScrollingElement__$devirt__org_gwtproject_dom_client_Document($thisArg));
 }
 /** @return {number} */
 static m_getScrollWidth__$devirt__org_gwtproject_dom_client_Document(/** !Object */ $thisArg) {
  Document_$Overlay.$clinit();
  return Element_$Overlay.m_getScrollWidth__$devirt__org_gwtproject_dom_client_Element(Document_$Overlay.m_getViewportElement__$devirt__org_gwtproject_dom_client_Document($thisArg));
 }
 /** @return {boolean} */
 static m_isCSS1Compat__$devirt__org_gwtproject_dom_client_Document(/** !Object */ $thisArg) {
  Document_$Overlay.$clinit();
  return j_l_String.m_equals__java_lang_String__java_lang_Object($thisArg.compatMode, "CSS1Compat");
 }
 
 static m_setScrollLeft__$devirt__org_gwtproject_dom_client_Document__int(/** !Object */ $thisArg, /** number */ left) {
  Document_$Overlay.$clinit();
  Element_$Overlay.m_setScrollLeft__$devirt__org_gwtproject_dom_client_Element__int(Document_$Overlay.m_ensureDocumentScrollingElement__$devirt__org_gwtproject_dom_client_Document($thisArg), left);
 }
 
 static m_setScrollTop__$devirt__org_gwtproject_dom_client_Document__int(/** !Object */ $thisArg, /** number */ top) {
  Document_$Overlay.$clinit();
  Document_$Overlay.m_ensureDocumentScrollingElement__$devirt__org_gwtproject_dom_client_Document($thisArg).scrollTop = top;
 }
 /** @return {Object} */
 static m_getViewportElement__$devirt__org_gwtproject_dom_client_Document(/** !Object */ $thisArg) {
  return Document_$Overlay.m_isCSS1Compat__$devirt__org_gwtproject_dom_client_Document($thisArg) ? $thisArg.documentElement : $thisArg.body;
 }
 /** @return {Object} */
 static m_createButtonElement__$devirt__org_gwtproject_dom_client_Document__java_lang_String(/** !Object */ $thisArg, /** ?string */ type) {
  let e = /**@type {HTMLButtonElement}*/ ($Casts.$to(/**@type {HTMLDocument}*/ (Js.m_uncheckedCast__java_lang_Object($thisArg)).createElement("BUTTON"), HTMLButtonElement_$Overlay));
  e.type = type;
  return /**@type {Object}*/ (Js.m_uncheckedCast__java_lang_Object(e));
 }
 /** @return {Object} */
 static m_createInputElement__$devirt__org_gwtproject_dom_client_Document__java_lang_String(/** !Object */ $thisArg, /** ?string */ type) {
  let e = /**@type {HTMLInputElement}*/ ($Casts.$to(/**@type {HTMLDocument}*/ ($Casts.$to($thisArg, HTMLDocument_$Overlay)).createElement("INPUT"), HTMLInputElement_$Overlay));
  e.type = type;
  return /**@type {Object}*/ (Js.m_uncheckedCast__java_lang_Object(e));
 }
 /** @return {Object} */
 static m_createInputRadioElement__$devirt__org_gwtproject_dom_client_Document__java_lang_String(/** !Object */ $thisArg, /** ?string */ name) {
  let elem = /**@type {HTMLInputElement}*/ ($Casts.$to(/**@type {HTMLDocument}*/ ($Casts.$to($thisArg, HTMLDocument_$Overlay)).createElement("INPUT"), HTMLInputElement_$Overlay));
  elem.type = "radio";
  elem.name = name;
  elem.value = "on";
  return /**@type {Object}*/ (Js.m_uncheckedCast__java_lang_Object(elem));
 }
 /** @return {Object} */
 static m_ensureDocumentScrollingElement__$devirt__org_gwtproject_dom_client_Document(/** !Object */ $thisArg) {
  let scrollingElement = /**@type {Object}*/ (Js.m_uncheckedCast__java_lang_Object(/**@type {HTMLDocument}*/ (Js.m_uncheckedCast__java_lang_Object($thisArg)).scrollingElement));
  if (!$Equality.$same(scrollingElement, null)) {
   return scrollingElement;
  }
  scrollingElement = Document_$Overlay.m_getViewportElement__$devirt__org_gwtproject_dom_client_Document($thisArg);
  return !$Equality.$same(scrollingElement, null) ? scrollingElement : $thisArg.documentElement;
 }
 
 static $clinit() {
  Document_$Overlay.$clinit = () =>{};
  Document_$Overlay.$loadModules();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Object;
 }
 
 static $loadModules() {
  EventInit_$Overlay = goog.module.get('elemental2.dom.EventInit.$Overlay$impl');
  HTMLButtonElement_$Overlay = goog.module.get('elemental2.dom.HTMLButtonElement.$Overlay$impl');
  HTMLDocument_$Overlay = goog.module.get('elemental2.dom.HTMLDocument.$Overlay$impl');
  HTMLInputElement_$Overlay = goog.module.get('elemental2.dom.HTMLInputElement.$Overlay$impl');
  KeyboardEventInit_$Overlay = goog.module.get('elemental2.dom.KeyboardEventInit.$Overlay$impl');
  MouseEventInit_$Overlay = goog.module.get('elemental2.dom.MouseEventInit.$Overlay$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  Js = goog.module.get('jsinterop.base.Js$impl');
  JsPropertyMap_$Overlay = goog.module.get('jsinterop.base.JsPropertyMap.$Overlay$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  $Overlay = goog.module.get('org.gwtproject.dom.client.AnchorElement.$Overlay$impl');
  AreaElement_$Overlay = goog.module.get('org.gwtproject.dom.client.AreaElement.$Overlay$impl');
  AudioElement_$Overlay = goog.module.get('org.gwtproject.dom.client.AudioElement.$Overlay$impl');
  BRElement_$Overlay = goog.module.get('org.gwtproject.dom.client.BRElement.$Overlay$impl');
  BaseElement_$Overlay = goog.module.get('org.gwtproject.dom.client.BaseElement.$Overlay$impl');
  BrowserEvents = goog.module.get('org.gwtproject.dom.client.BrowserEvents$impl');
  CanvasElement_$Overlay = goog.module.get('org.gwtproject.dom.client.CanvasElement.$Overlay$impl');
  DListElement_$Overlay = goog.module.get('org.gwtproject.dom.client.DListElement.$Overlay$impl');
  DivElement_$Overlay = goog.module.get('org.gwtproject.dom.client.DivElement.$Overlay$impl');
  DocumentHolder = goog.module.get('org.gwtproject.dom.client.Document.DocumentHolder$impl');
  Element_$Overlay = goog.module.get('org.gwtproject.dom.client.Element.$Overlay$impl');
  FieldSetElement_$Overlay = goog.module.get('org.gwtproject.dom.client.FieldSetElement.$Overlay$impl');
  FormElement_$Overlay = goog.module.get('org.gwtproject.dom.client.FormElement.$Overlay$impl');
  FrameElement_$Overlay = goog.module.get('org.gwtproject.dom.client.FrameElement.$Overlay$impl');
  FrameSetElement_$Overlay = goog.module.get('org.gwtproject.dom.client.FrameSetElement.$Overlay$impl');
  HRElement_$Overlay = goog.module.get('org.gwtproject.dom.client.HRElement.$Overlay$impl');
  HeadElement_$Overlay = goog.module.get('org.gwtproject.dom.client.HeadElement.$Overlay$impl');
  HeadingElement_$Overlay = goog.module.get('org.gwtproject.dom.client.HeadingElement.$Overlay$impl');
  IFrameElement_$Overlay = goog.module.get('org.gwtproject.dom.client.IFrameElement.$Overlay$impl');
  ImageElement_$Overlay = goog.module.get('org.gwtproject.dom.client.ImageElement.$Overlay$impl');
  LIElement_$Overlay = goog.module.get('org.gwtproject.dom.client.LIElement.$Overlay$impl');
  LabelElement_$Overlay = goog.module.get('org.gwtproject.dom.client.LabelElement.$Overlay$impl');
  LegendElement_$Overlay = goog.module.get('org.gwtproject.dom.client.LegendElement.$Overlay$impl');
  LinkElement_$Overlay = goog.module.get('org.gwtproject.dom.client.LinkElement.$Overlay$impl');
  MapElement_$Overlay = goog.module.get('org.gwtproject.dom.client.MapElement.$Overlay$impl');
  MetaElement_$Overlay = goog.module.get('org.gwtproject.dom.client.MetaElement.$Overlay$impl');
  ModElement_$Overlay = goog.module.get('org.gwtproject.dom.client.ModElement.$Overlay$impl');
  NativeEvent_$Overlay = goog.module.get('org.gwtproject.dom.client.NativeEvent.$Overlay$impl');
  OListElement_$Overlay = goog.module.get('org.gwtproject.dom.client.OListElement.$Overlay$impl');
  ObjectElement_$Overlay = goog.module.get('org.gwtproject.dom.client.ObjectElement.$Overlay$impl');
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
  Style_$Overlay = goog.module.get('org.gwtproject.dom.client.Style.$Overlay$impl');
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
  $Asserts = goog.module.get('vmbootstrap.Asserts$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
 
}
$Util.$setClassMetadata(Document_$Overlay, 'Object');

exports = Document_$Overlay; 
//# sourceMappingURL=Document$$Overlay.js.map
