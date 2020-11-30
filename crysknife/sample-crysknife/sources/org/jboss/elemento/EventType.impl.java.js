goog.module('org.jboss.elemento.EventType$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let ClipboardEvent_$Overlay = goog.forwardDeclare('elemental2.dom.ClipboardEvent.$Overlay$impl');
let Document_$Overlay = goog.forwardDeclare('elemental2.dom.Document.$Overlay$impl');
let DragEvent_$Overlay = goog.forwardDeclare('elemental2.dom.DragEvent.$Overlay$impl');
let Element_$Overlay = goog.forwardDeclare('elemental2.dom.Element.$Overlay$impl');
let Event_$Overlay = goog.forwardDeclare('elemental2.dom.Event.$Overlay$impl');
let $Overlay = goog.forwardDeclare('elemental2.dom.EventListener.$Overlay$impl');
let EventTarget_$Overlay = goog.forwardDeclare('elemental2.dom.EventTarget.$Overlay$impl');
let FocusEvent_$Overlay = goog.forwardDeclare('elemental2.dom.FocusEvent.$Overlay$impl');
let HTMLElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLElement.$Overlay$impl');
let HashChangeEvent_$Overlay = goog.forwardDeclare('elemental2.dom.HashChangeEvent.$Overlay$impl');
let KeyboardEvent_$Overlay = goog.forwardDeclare('elemental2.dom.KeyboardEvent.$Overlay$impl');
let MessageEvent_$Overlay = goog.forwardDeclare('elemental2.dom.MessageEvent.$Overlay$impl');
let MouseEvent_$Overlay = goog.forwardDeclare('elemental2.dom.MouseEvent.$Overlay$impl');
let PageTransitionEvent_$Overlay = goog.forwardDeclare('elemental2.dom.PageTransitionEvent.$Overlay$impl');
let PopStateEvent_$Overlay = goog.forwardDeclare('elemental2.dom.PopStateEvent.$Overlay$impl');
let TouchEvent_$Overlay = goog.forwardDeclare('elemental2.dom.TouchEvent.$Overlay$impl');
let UIEvent_$Overlay = goog.forwardDeclare('elemental2.dom.UIEvent.$Overlay$impl');
let WheelEvent_$Overlay = goog.forwardDeclare('elemental2.dom.WheelEvent.$Overlay$impl');
let Window_$Overlay = goog.forwardDeclare('elemental2.dom.Window.$Overlay$impl');
let StorageEvent_$Overlay = goog.forwardDeclare('elemental2.webstorage.StorageEvent.$Overlay$impl');
let Js = goog.forwardDeclare('jsinterop.base.Js$impl');
let HandlerRegistration = goog.forwardDeclare('org.gwtproject.event.shared.HandlerRegistration$impl');
let IsElement = goog.forwardDeclare('org.jboss.elemento.IsElement$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @template T, V
  */
class EventType extends j_l_Object {
 /** @protected */
 constructor() {
  super();
  /**@type {?string}*/
  this.f_name__org_jboss_elemento_EventType_;
 }
 /** @template T_1, V_1 @return {EventType<T_1, V_1>} */
 static m_of__java_lang_String(/** ?string */ name) {
  EventType.$clinit();
  return /**@type {!EventType<T_1, V_1>}*/ (EventType.$create__java_lang_String(name));
 }
 /** @template T_1 @return {HandlerRegistration} */
 static m_bind__elemental2_dom_EventTarget__org_jboss_elemento_EventType__org_jboss_elemento_EventCallbackFn(/** EventTarget */ target, /** EventType<T_1, ?> */ type, /** ?function(T_1):void */ listener) {
  EventType.$clinit();
  return EventType.m_bind__elemental2_dom_EventTarget__java_lang_String__elemental2_dom_EventListener(target, type.f_name__org_jboss_elemento_EventType_, $Overlay.$adapt__elemental2_dom_EventListener_$JsFunction((/** Event */ e) =>{
   listener(/**@type {T_1}*/ ($Casts.$to(Js.m_cast__java_lang_Object(e), Event_$Overlay)));
  }));
 }
 /** @return {HandlerRegistration} */
 static m_bind__elemental2_dom_EventTarget__java_lang_String__elemental2_dom_EventListener(/** EventTarget */ target, /** ?string */ type, /** EventListener */ listener) {
  EventType.$clinit();
  target.addEventListener(type, listener);
  return HandlerRegistration.$adapt(() =>{
   target.removeEventListener(type, listener);
  });
 }
 /** @template T_1 @return {HandlerRegistration} */
 static m_bind__elemental2_dom_EventTarget__org_jboss_elemento_EventType__boolean__org_jboss_elemento_EventCallbackFn(/** EventTarget */ target, /** EventType<T_1, ?> */ type, /** boolean */ useCapture, /** ?function(T_1):void */ listener) {
  EventType.$clinit();
  return EventType.m_bind__elemental2_dom_EventTarget__java_lang_String__boolean__elemental2_dom_EventListener(target, type.f_name__org_jboss_elemento_EventType_, useCapture, $Overlay.$adapt__elemental2_dom_EventListener_$JsFunction((/** Event */ e) =>{
   listener(/**@type {T_1}*/ ($Casts.$to(Js.m_cast__java_lang_Object(e), Event_$Overlay)));
  }));
 }
 /** @return {HandlerRegistration} */
 static m_bind__elemental2_dom_EventTarget__java_lang_String__boolean__elemental2_dom_EventListener(/** EventTarget */ target, /** ?string */ type, /** boolean */ useCapture, /** EventListener */ listener) {
  EventType.$clinit();
  EventTarget_$Overlay.m_addEventListener__$devirt__elemental2_dom_EventTarget__java_lang_String__elemental2_dom_EventListener__boolean(target, type, listener, useCapture);
  return HandlerRegistration.$adapt(() =>{
   EventTarget_$Overlay.m_removeEventListener__$devirt__elemental2_dom_EventTarget__java_lang_String__elemental2_dom_EventListener__boolean(target, type, listener, useCapture);
  });
 }
 /** @template T_1, E @return {HandlerRegistration} */
 static m_bind__org_jboss_elemento_IsElement__org_jboss_elemento_EventType__org_jboss_elemento_EventCallbackFn(/** IsElement<E> */ target, /** EventType<T_1, ?> */ type, /** ?function(T_1):void */ listener) {
  EventType.$clinit();
  return EventType.m_bind__elemental2_dom_EventTarget__org_jboss_elemento_EventType__org_jboss_elemento_EventCallbackFn(target.m_element__(), type, listener);
 }
 /** @template E @return {HandlerRegistration} */
 static m_bind__org_jboss_elemento_IsElement__java_lang_String__elemental2_dom_EventListener(/** IsElement<E> */ target, /** ?string */ type, /** EventListener */ listener) {
  EventType.$clinit();
  return EventType.m_bind__elemental2_dom_EventTarget__java_lang_String__elemental2_dom_EventListener(target.m_element__(), type, listener);
 }
 /** @template T_1, E @return {HandlerRegistration} */
 static m_bind__org_jboss_elemento_IsElement__org_jboss_elemento_EventType__boolean__org_jboss_elemento_EventCallbackFn(/** IsElement<E> */ target, /** EventType<T_1, ?> */ type, /** boolean */ useCapture, /** ?function(T_1):void */ listener) {
  EventType.$clinit();
  return EventType.m_bind__elemental2_dom_EventTarget__org_jboss_elemento_EventType__boolean__org_jboss_elemento_EventCallbackFn(target.m_element__(), type, useCapture, listener);
 }
 /** @template E @return {HandlerRegistration} */
 static m_bind__org_jboss_elemento_IsElement__java_lang_String__boolean__elemental2_dom_EventListener(/** IsElement<E> */ target, /** ?string */ type, /** boolean */ useCapture, /** EventListener */ listener) {
  EventType.$clinit();
  return EventType.m_bind__elemental2_dom_EventTarget__java_lang_String__boolean__elemental2_dom_EventListener(target.m_element__(), type, useCapture, listener);
 }
 /** @template T, V @return {!EventType<T, V>} */
 static $create__java_lang_String(/** ?string */ name) {
  let $instance = new EventType();
  $instance.$ctor__org_jboss_elemento_EventType__java_lang_String(name);
  return $instance;
 }
 
 $ctor__org_jboss_elemento_EventType__java_lang_String(/** ?string */ name) {
  this.$ctor__java_lang_Object__();
  this.f_name__org_jboss_elemento_EventType_ = name;
 }
 /** @return {?string} */
 m_getName__() {
  return this.f_name__org_jboss_elemento_EventType_;
 }
 /** @return {EventType<Event, Window>} */
 static get f_online__org_jboss_elemento_EventType() {
  return (EventType.$clinit(), EventType.$f_online__org_jboss_elemento_EventType);
 }
 /** @return {EventType<Event, Window>} */
 static get f_offline__org_jboss_elemento_EventType() {
  return (EventType.$clinit(), EventType.$f_offline__org_jboss_elemento_EventType);
 }
 /** @return {EventType<FocusEvent, Element>} */
 static get f_focus__org_jboss_elemento_EventType() {
  return (EventType.$clinit(), EventType.$f_focus__org_jboss_elemento_EventType);
 }
 /** @return {EventType<FocusEvent, Element>} */
 static get f_blur__org_jboss_elemento_EventType() {
  return (EventType.$clinit(), EventType.$f_blur__org_jboss_elemento_EventType);
 }
 /** @return {EventType<PageTransitionEvent, Document>} */
 static get f_pagehide__org_jboss_elemento_EventType() {
  return (EventType.$clinit(), EventType.$f_pagehide__org_jboss_elemento_EventType);
 }
 /** @return {EventType<PageTransitionEvent, Document>} */
 static get f_pageshow__org_jboss_elemento_EventType() {
  return (EventType.$clinit(), EventType.$f_pageshow__org_jboss_elemento_EventType);
 }
 /** @return {EventType<PopStateEvent, Window>} */
 static get f_popstate__org_jboss_elemento_EventType() {
  return (EventType.$clinit(), EventType.$f_popstate__org_jboss_elemento_EventType);
 }
 /** @return {EventType<Event, Element>} */
 static get f_reset__org_jboss_elemento_EventType() {
  return (EventType.$clinit(), EventType.$f_reset__org_jboss_elemento_EventType);
 }
 /** @return {EventType<Event, Element>} */
 static get f_submit__org_jboss_elemento_EventType() {
  return (EventType.$clinit(), EventType.$f_submit__org_jboss_elemento_EventType);
 }
 /** @return {EventType<Event, Window>} */
 static get f_beforeprint__org_jboss_elemento_EventType() {
  return (EventType.$clinit(), EventType.$f_beforeprint__org_jboss_elemento_EventType);
 }
 /** @return {EventType<Event, Window>} */
 static get f_afterprint__org_jboss_elemento_EventType() {
  return (EventType.$clinit(), EventType.$f_afterprint__org_jboss_elemento_EventType);
 }
 /** @return {EventType<TouchEvent, Element>} */
 static get f_compositionstart__org_jboss_elemento_EventType() {
  return (EventType.$clinit(), EventType.$f_compositionstart__org_jboss_elemento_EventType);
 }
 /** @return {EventType<TouchEvent, Element>} */
 static get f_compositionupdate__org_jboss_elemento_EventType() {
  return (EventType.$clinit(), EventType.$f_compositionupdate__org_jboss_elemento_EventType);
 }
 /** @return {EventType<TouchEvent, Element>} */
 static get f_compositionend__org_jboss_elemento_EventType() {
  return (EventType.$clinit(), EventType.$f_compositionend__org_jboss_elemento_EventType);
 }
 /** @return {EventType<Event, Document>} */
 static get f_fullscreenchange__org_jboss_elemento_EventType() {
  return (EventType.$clinit(), EventType.$f_fullscreenchange__org_jboss_elemento_EventType);
 }
 /** @return {EventType<Event, Document>} */
 static get f_fullscreenerror__org_jboss_elemento_EventType() {
  return (EventType.$clinit(), EventType.$f_fullscreenerror__org_jboss_elemento_EventType);
 }
 /** @return {EventType<UIEvent, Window>} */
 static get f_resize__org_jboss_elemento_EventType() {
  return (EventType.$clinit(), EventType.$f_resize__org_jboss_elemento_EventType);
 }
 /** @return {EventType<UIEvent, EventTarget>} */
 static get f_scroll__org_jboss_elemento_EventType() {
  return (EventType.$clinit(), EventType.$f_scroll__org_jboss_elemento_EventType);
 }
 /** @return {EventType<ClipboardEvent, EventTarget>} */
 static get f_cut__org_jboss_elemento_EventType() {
  return (EventType.$clinit(), EventType.$f_cut__org_jboss_elemento_EventType);
 }
 /** @return {EventType<ClipboardEvent, EventTarget>} */
 static get f_copy__org_jboss_elemento_EventType() {
  return (EventType.$clinit(), EventType.$f_copy__org_jboss_elemento_EventType);
 }
 /** @return {EventType<ClipboardEvent, EventTarget>} */
 static get f_paste__org_jboss_elemento_EventType() {
  return (EventType.$clinit(), EventType.$f_paste__org_jboss_elemento_EventType);
 }
 /** @return {EventType<KeyboardEvent, EventTarget>} */
 static get f_keydown__org_jboss_elemento_EventType() {
  return (EventType.$clinit(), EventType.$f_keydown__org_jboss_elemento_EventType);
 }
 /** @return {EventType<KeyboardEvent, EventTarget>} */
 static get f_keypress__org_jboss_elemento_EventType() {
  return (EventType.$clinit(), EventType.$f_keypress__org_jboss_elemento_EventType);
 }
 /** @return {EventType<KeyboardEvent, EventTarget>} */
 static get f_keyup__org_jboss_elemento_EventType() {
  return (EventType.$clinit(), EventType.$f_keyup__org_jboss_elemento_EventType);
 }
 /** @return {EventType<MouseEvent, EventTarget>} */
 static get f_mouseenter__org_jboss_elemento_EventType() {
  return (EventType.$clinit(), EventType.$f_mouseenter__org_jboss_elemento_EventType);
 }
 /** @return {EventType<MouseEvent, EventTarget>} */
 static get f_mouseover__org_jboss_elemento_EventType() {
  return (EventType.$clinit(), EventType.$f_mouseover__org_jboss_elemento_EventType);
 }
 /** @return {EventType<MouseEvent, EventTarget>} */
 static get f_mousemove__org_jboss_elemento_EventType() {
  return (EventType.$clinit(), EventType.$f_mousemove__org_jboss_elemento_EventType);
 }
 /** @return {EventType<MouseEvent, EventTarget>} */
 static get f_mousedown__org_jboss_elemento_EventType() {
  return (EventType.$clinit(), EventType.$f_mousedown__org_jboss_elemento_EventType);
 }
 /** @return {EventType<MouseEvent, EventTarget>} */
 static get f_mouseup__org_jboss_elemento_EventType() {
  return (EventType.$clinit(), EventType.$f_mouseup__org_jboss_elemento_EventType);
 }
 /** @return {EventType<MouseEvent, Element>} */
 static get f_auxclick__org_jboss_elemento_EventType() {
  return (EventType.$clinit(), EventType.$f_auxclick__org_jboss_elemento_EventType);
 }
 /** @return {EventType<MouseEvent, Element>} */
 static get f_click__org_jboss_elemento_EventType() {
  return (EventType.$clinit(), EventType.$f_click__org_jboss_elemento_EventType);
 }
 /** @return {EventType<MouseEvent, Element>} */
 static get f_dblclick__org_jboss_elemento_EventType() {
  return (EventType.$clinit(), EventType.$f_dblclick__org_jboss_elemento_EventType);
 }
 /** @return {EventType<MouseEvent, Element>} */
 static get f_contextmenu__org_jboss_elemento_EventType() {
  return (EventType.$clinit(), EventType.$f_contextmenu__org_jboss_elemento_EventType);
 }
 /** @return {EventType<WheelEvent, EventTarget>} */
 static get f_wheel__org_jboss_elemento_EventType() {
  return (EventType.$clinit(), EventType.$f_wheel__org_jboss_elemento_EventType);
 }
 /** @return {EventType<MouseEvent, Element>} */
 static get f_mouseleave__org_jboss_elemento_EventType() {
  return (EventType.$clinit(), EventType.$f_mouseleave__org_jboss_elemento_EventType);
 }
 /** @return {EventType<MouseEvent, Element>} */
 static get f_mouseout__org_jboss_elemento_EventType() {
  return (EventType.$clinit(), EventType.$f_mouseout__org_jboss_elemento_EventType);
 }
 /** @return {EventType<Event, Document>} */
 static get f_pointerlockchange__org_jboss_elemento_EventType() {
  return (EventType.$clinit(), EventType.$f_pointerlockchange__org_jboss_elemento_EventType);
 }
 /** @return {EventType<Event, Document>} */
 static get f_pointerlockerror__org_jboss_elemento_EventType() {
  return (EventType.$clinit(), EventType.$f_pointerlockerror__org_jboss_elemento_EventType);
 }
 /** @return {EventType<DragEvent, EventTarget>} */
 static get f_dragstart__org_jboss_elemento_EventType() {
  return (EventType.$clinit(), EventType.$f_dragstart__org_jboss_elemento_EventType);
 }
 /** @return {EventType<DragEvent, EventTarget>} */
 static get f_drag__org_jboss_elemento_EventType() {
  return (EventType.$clinit(), EventType.$f_drag__org_jboss_elemento_EventType);
 }
 /** @return {EventType<DragEvent, EventTarget>} */
 static get f_dragend__org_jboss_elemento_EventType() {
  return (EventType.$clinit(), EventType.$f_dragend__org_jboss_elemento_EventType);
 }
 /** @return {EventType<DragEvent, EventTarget>} */
 static get f_dragenter__org_jboss_elemento_EventType() {
  return (EventType.$clinit(), EventType.$f_dragenter__org_jboss_elemento_EventType);
 }
 /** @return {EventType<DragEvent, EventTarget>} */
 static get f_dragover__org_jboss_elemento_EventType() {
  return (EventType.$clinit(), EventType.$f_dragover__org_jboss_elemento_EventType);
 }
 /** @return {EventType<DragEvent, EventTarget>} */
 static get f_dragleave__org_jboss_elemento_EventType() {
  return (EventType.$clinit(), EventType.$f_dragleave__org_jboss_elemento_EventType);
 }
 /** @return {EventType<DragEvent, EventTarget>} */
 static get f_drop__org_jboss_elemento_EventType() {
  return (EventType.$clinit(), EventType.$f_drop__org_jboss_elemento_EventType);
 }
 /** @return {EventType<TouchEvent, Element>} */
 static get f_touchcancel__org_jboss_elemento_EventType() {
  return (EventType.$clinit(), EventType.$f_touchcancel__org_jboss_elemento_EventType);
 }
 /** @return {EventType<TouchEvent, Element>} */
 static get f_touchend__org_jboss_elemento_EventType() {
  return (EventType.$clinit(), EventType.$f_touchend__org_jboss_elemento_EventType);
 }
 /** @return {EventType<TouchEvent, Element>} */
 static get f_touchmove__org_jboss_elemento_EventType() {
  return (EventType.$clinit(), EventType.$f_touchmove__org_jboss_elemento_EventType);
 }
 /** @return {EventType<TouchEvent, Element>} */
 static get f_touchstart__org_jboss_elemento_EventType() {
  return (EventType.$clinit(), EventType.$f_touchstart__org_jboss_elemento_EventType);
 }
 /** @return {EventType<HashChangeEvent, Window>} */
 static get f_hashchange__org_jboss_elemento_EventType() {
  return (EventType.$clinit(), EventType.$f_hashchange__org_jboss_elemento_EventType);
 }
 /** @return {EventType<Event, Element>} */
 static get f_input__org_jboss_elemento_EventType() {
  return (EventType.$clinit(), EventType.$f_input__org_jboss_elemento_EventType);
 }
 /** @return {EventType<Event, Document>} */
 static get f_readystatechange__org_jboss_elemento_EventType() {
  return (EventType.$clinit(), EventType.$f_readystatechange__org_jboss_elemento_EventType);
 }
 /** @return {EventType<Event, Element>} */
 static get f_change__org_jboss_elemento_EventType() {
  return (EventType.$clinit(), EventType.$f_change__org_jboss_elemento_EventType);
 }
 /** @return {EventType<Event, Element>} */
 static get f_search__org_jboss_elemento_EventType() {
  return (EventType.$clinit(), EventType.$f_search__org_jboss_elemento_EventType);
 }
 /** @return {EventType<Event, Element>} */
 static get f_invalid__org_jboss_elemento_EventType() {
  return (EventType.$clinit(), EventType.$f_invalid__org_jboss_elemento_EventType);
 }
 /** @return {EventType<Event, Element>} */
 static get f_show__org_jboss_elemento_EventType() {
  return (EventType.$clinit(), EventType.$f_show__org_jboss_elemento_EventType);
 }
 /** @return {EventType<MessageEvent<?>, EventTarget>} */
 static get f_message__org_jboss_elemento_EventType() {
  return (EventType.$clinit(), EventType.$f_message__org_jboss_elemento_EventType);
 }
 /** @return {EventType<StorageEvent, Window>} */
 static get f_storage__org_jboss_elemento_EventType() {
  return (EventType.$clinit(), EventType.$f_storage__org_jboss_elemento_EventType);
 }
 /** @return {EventType<Event, Window>} */
 static get f_load__org_jboss_elemento_EventType() {
  return (EventType.$clinit(), EventType.$f_load__org_jboss_elemento_EventType);
 }
 /** @return {EventType<Event, Document>} */
 static get f_visibilitychange__org_jboss_elemento_EventType() {
  return (EventType.$clinit(), EventType.$f_visibilitychange__org_jboss_elemento_EventType);
 }
 
 static $clinit() {
  EventType.$clinit = () =>{};
  EventType.$loadModules();
  j_l_Object.$clinit();
  EventType.$f_online__org_jboss_elemento_EventType = /**@type {EventType<Event, Window>}*/ (EventType.m_of__java_lang_String("online"));
  EventType.$f_offline__org_jboss_elemento_EventType = /**@type {EventType<Event, Window>}*/ (EventType.m_of__java_lang_String("offline"));
  EventType.$f_focus__org_jboss_elemento_EventType = /**@type {EventType<FocusEvent, Element>}*/ (EventType.m_of__java_lang_String("focus"));
  EventType.$f_blur__org_jboss_elemento_EventType = /**@type {EventType<FocusEvent, Element>}*/ (EventType.m_of__java_lang_String("blur"));
  EventType.$f_pagehide__org_jboss_elemento_EventType = /**@type {EventType<PageTransitionEvent, Document>}*/ (EventType.m_of__java_lang_String("pagehide"));
  EventType.$f_pageshow__org_jboss_elemento_EventType = /**@type {EventType<PageTransitionEvent, Document>}*/ (EventType.m_of__java_lang_String("pageshow"));
  EventType.$f_popstate__org_jboss_elemento_EventType = /**@type {EventType<PopStateEvent, Window>}*/ (EventType.m_of__java_lang_String("popstate"));
  EventType.$f_reset__org_jboss_elemento_EventType = /**@type {EventType<Event, Element>}*/ (EventType.m_of__java_lang_String("reset"));
  EventType.$f_submit__org_jboss_elemento_EventType = /**@type {EventType<Event, Element>}*/ (EventType.m_of__java_lang_String("submit"));
  EventType.$f_beforeprint__org_jboss_elemento_EventType = /**@type {EventType<Event, Window>}*/ (EventType.m_of__java_lang_String("beforeprint"));
  EventType.$f_afterprint__org_jboss_elemento_EventType = /**@type {EventType<Event, Window>}*/ (EventType.m_of__java_lang_String("afterprint"));
  EventType.$f_compositionstart__org_jboss_elemento_EventType = /**@type {EventType<TouchEvent, Element>}*/ (EventType.m_of__java_lang_String("compositionstart"));
  EventType.$f_compositionupdate__org_jboss_elemento_EventType = /**@type {EventType<TouchEvent, Element>}*/ (EventType.m_of__java_lang_String("compositionupdate"));
  EventType.$f_compositionend__org_jboss_elemento_EventType = /**@type {EventType<TouchEvent, Element>}*/ (EventType.m_of__java_lang_String("compositionend"));
  EventType.$f_fullscreenchange__org_jboss_elemento_EventType = /**@type {EventType<Event, Document>}*/ (EventType.m_of__java_lang_String("fullscreenchange"));
  EventType.$f_fullscreenerror__org_jboss_elemento_EventType = /**@type {EventType<Event, Document>}*/ (EventType.m_of__java_lang_String("fullscreenerror"));
  EventType.$f_resize__org_jboss_elemento_EventType = /**@type {EventType<UIEvent, Window>}*/ (EventType.m_of__java_lang_String("resize"));
  EventType.$f_scroll__org_jboss_elemento_EventType = /**@type {EventType<UIEvent, EventTarget>}*/ (EventType.m_of__java_lang_String("scroll"));
  EventType.$f_cut__org_jboss_elemento_EventType = /**@type {EventType<ClipboardEvent, EventTarget>}*/ (EventType.m_of__java_lang_String("cut"));
  EventType.$f_copy__org_jboss_elemento_EventType = /**@type {EventType<ClipboardEvent, EventTarget>}*/ (EventType.m_of__java_lang_String("copy"));
  EventType.$f_paste__org_jboss_elemento_EventType = /**@type {EventType<ClipboardEvent, EventTarget>}*/ (EventType.m_of__java_lang_String("paste"));
  EventType.$f_keydown__org_jboss_elemento_EventType = /**@type {EventType<KeyboardEvent, EventTarget>}*/ (EventType.m_of__java_lang_String("keydown"));
  EventType.$f_keypress__org_jboss_elemento_EventType = /**@type {EventType<KeyboardEvent, EventTarget>}*/ (EventType.m_of__java_lang_String("keypress"));
  EventType.$f_keyup__org_jboss_elemento_EventType = /**@type {EventType<KeyboardEvent, EventTarget>}*/ (EventType.m_of__java_lang_String("keyup"));
  EventType.$f_mouseenter__org_jboss_elemento_EventType = /**@type {EventType<MouseEvent, EventTarget>}*/ (EventType.m_of__java_lang_String("mouseenter"));
  EventType.$f_mouseover__org_jboss_elemento_EventType = /**@type {EventType<MouseEvent, EventTarget>}*/ (EventType.m_of__java_lang_String("mouseover"));
  EventType.$f_mousemove__org_jboss_elemento_EventType = /**@type {EventType<MouseEvent, EventTarget>}*/ (EventType.m_of__java_lang_String("mousemove"));
  EventType.$f_mousedown__org_jboss_elemento_EventType = /**@type {EventType<MouseEvent, EventTarget>}*/ (EventType.m_of__java_lang_String("mousedown"));
  EventType.$f_mouseup__org_jboss_elemento_EventType = /**@type {EventType<MouseEvent, EventTarget>}*/ (EventType.m_of__java_lang_String("mouseup"));
  EventType.$f_auxclick__org_jboss_elemento_EventType = /**@type {EventType<MouseEvent, Element>}*/ (EventType.m_of__java_lang_String("auxclick"));
  EventType.$f_click__org_jboss_elemento_EventType = /**@type {EventType<MouseEvent, Element>}*/ (EventType.m_of__java_lang_String("click"));
  EventType.$f_dblclick__org_jboss_elemento_EventType = /**@type {EventType<MouseEvent, Element>}*/ (EventType.m_of__java_lang_String("dblclick"));
  EventType.$f_contextmenu__org_jboss_elemento_EventType = /**@type {EventType<MouseEvent, Element>}*/ (EventType.m_of__java_lang_String("contextmenu"));
  EventType.$f_wheel__org_jboss_elemento_EventType = /**@type {EventType<WheelEvent, EventTarget>}*/ (EventType.m_of__java_lang_String("wheel"));
  EventType.$f_mouseleave__org_jboss_elemento_EventType = /**@type {EventType<MouseEvent, Element>}*/ (EventType.m_of__java_lang_String("mouseleave"));
  EventType.$f_mouseout__org_jboss_elemento_EventType = /**@type {EventType<MouseEvent, Element>}*/ (EventType.m_of__java_lang_String("mouseout"));
  EventType.$f_pointerlockchange__org_jboss_elemento_EventType = /**@type {EventType<Event, Document>}*/ (EventType.m_of__java_lang_String("pointerlockchange"));
  EventType.$f_pointerlockerror__org_jboss_elemento_EventType = /**@type {EventType<Event, Document>}*/ (EventType.m_of__java_lang_String("pointerlockerror"));
  EventType.$f_dragstart__org_jboss_elemento_EventType = /**@type {EventType<DragEvent, EventTarget>}*/ (EventType.m_of__java_lang_String("dragstart"));
  EventType.$f_drag__org_jboss_elemento_EventType = /**@type {EventType<DragEvent, EventTarget>}*/ (EventType.m_of__java_lang_String("drag"));
  EventType.$f_dragend__org_jboss_elemento_EventType = /**@type {EventType<DragEvent, EventTarget>}*/ (EventType.m_of__java_lang_String("dragend"));
  EventType.$f_dragenter__org_jboss_elemento_EventType = /**@type {EventType<DragEvent, EventTarget>}*/ (EventType.m_of__java_lang_String("dragenter"));
  EventType.$f_dragover__org_jboss_elemento_EventType = /**@type {EventType<DragEvent, EventTarget>}*/ (EventType.m_of__java_lang_String("dragover"));
  EventType.$f_dragleave__org_jboss_elemento_EventType = /**@type {EventType<DragEvent, EventTarget>}*/ (EventType.m_of__java_lang_String("dragleave"));
  EventType.$f_drop__org_jboss_elemento_EventType = /**@type {EventType<DragEvent, EventTarget>}*/ (EventType.m_of__java_lang_String("drop"));
  EventType.$f_touchcancel__org_jboss_elemento_EventType = /**@type {EventType<TouchEvent, Element>}*/ (EventType.m_of__java_lang_String("touchcancel"));
  EventType.$f_touchend__org_jboss_elemento_EventType = /**@type {EventType<TouchEvent, Element>}*/ (EventType.m_of__java_lang_String("touchend"));
  EventType.$f_touchmove__org_jboss_elemento_EventType = /**@type {EventType<TouchEvent, Element>}*/ (EventType.m_of__java_lang_String("touchmove"));
  EventType.$f_touchstart__org_jboss_elemento_EventType = /**@type {EventType<TouchEvent, Element>}*/ (EventType.m_of__java_lang_String("touchstart"));
  EventType.$f_hashchange__org_jboss_elemento_EventType = /**@type {EventType<HashChangeEvent, Window>}*/ (EventType.m_of__java_lang_String("hashchange"));
  EventType.$f_input__org_jboss_elemento_EventType = /**@type {EventType<Event, Element>}*/ (EventType.m_of__java_lang_String("input"));
  EventType.$f_readystatechange__org_jboss_elemento_EventType = /**@type {EventType<Event, Document>}*/ (EventType.m_of__java_lang_String("readystatechange"));
  EventType.$f_change__org_jboss_elemento_EventType = /**@type {EventType<Event, Element>}*/ (EventType.m_of__java_lang_String("change"));
  EventType.$f_search__org_jboss_elemento_EventType = /**@type {EventType<Event, Element>}*/ (EventType.m_of__java_lang_String("search"));
  EventType.$f_invalid__org_jboss_elemento_EventType = /**@type {EventType<Event, Element>}*/ (EventType.m_of__java_lang_String("invalid"));
  EventType.$f_show__org_jboss_elemento_EventType = /**@type {EventType<Event, Element>}*/ (EventType.m_of__java_lang_String("show"));
  EventType.$f_message__org_jboss_elemento_EventType = /**@type {EventType<MessageEvent<?>, EventTarget>}*/ (EventType.m_of__java_lang_String("message"));
  EventType.$f_storage__org_jboss_elemento_EventType = /**@type {EventType<StorageEvent, Window>}*/ (EventType.m_of__java_lang_String("storage"));
  EventType.$f_load__org_jboss_elemento_EventType = /**@type {EventType<Event, Window>}*/ (EventType.m_of__java_lang_String("load"));
  EventType.$f_visibilitychange__org_jboss_elemento_EventType = /**@type {EventType<Event, Document>}*/ (EventType.m_of__java_lang_String("visibilitychange"));
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof EventType;
 }
 
 static $loadModules() {
  Event_$Overlay = goog.module.get('elemental2.dom.Event.$Overlay$impl');
  $Overlay = goog.module.get('elemental2.dom.EventListener.$Overlay$impl');
  EventTarget_$Overlay = goog.module.get('elemental2.dom.EventTarget.$Overlay$impl');
  Js = goog.module.get('jsinterop.base.Js$impl');
  HandlerRegistration = goog.module.get('org.gwtproject.event.shared.HandlerRegistration$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
 
}
$Util.$setClassMetadata(EventType, 'org.jboss.elemento.EventType');

/**@private {EventType<Event, Window>}*/
EventType.$f_online__org_jboss_elemento_EventType;
/**@private {EventType<Event, Window>}*/
EventType.$f_offline__org_jboss_elemento_EventType;
/**@private {EventType<FocusEvent, Element>}*/
EventType.$f_focus__org_jboss_elemento_EventType;
/**@private {EventType<FocusEvent, Element>}*/
EventType.$f_blur__org_jboss_elemento_EventType;
/**@private {EventType<PageTransitionEvent, Document>}*/
EventType.$f_pagehide__org_jboss_elemento_EventType;
/**@private {EventType<PageTransitionEvent, Document>}*/
EventType.$f_pageshow__org_jboss_elemento_EventType;
/**@private {EventType<PopStateEvent, Window>}*/
EventType.$f_popstate__org_jboss_elemento_EventType;
/**@private {EventType<Event, Element>}*/
EventType.$f_reset__org_jboss_elemento_EventType;
/**@private {EventType<Event, Element>}*/
EventType.$f_submit__org_jboss_elemento_EventType;
/**@private {EventType<Event, Window>}*/
EventType.$f_beforeprint__org_jboss_elemento_EventType;
/**@private {EventType<Event, Window>}*/
EventType.$f_afterprint__org_jboss_elemento_EventType;
/**@private {EventType<TouchEvent, Element>}*/
EventType.$f_compositionstart__org_jboss_elemento_EventType;
/**@private {EventType<TouchEvent, Element>}*/
EventType.$f_compositionupdate__org_jboss_elemento_EventType;
/**@private {EventType<TouchEvent, Element>}*/
EventType.$f_compositionend__org_jboss_elemento_EventType;
/**@private {EventType<Event, Document>}*/
EventType.$f_fullscreenchange__org_jboss_elemento_EventType;
/**@private {EventType<Event, Document>}*/
EventType.$f_fullscreenerror__org_jboss_elemento_EventType;
/**@private {EventType<UIEvent, Window>}*/
EventType.$f_resize__org_jboss_elemento_EventType;
/**@private {EventType<UIEvent, EventTarget>}*/
EventType.$f_scroll__org_jboss_elemento_EventType;
/**@private {EventType<ClipboardEvent, EventTarget>}*/
EventType.$f_cut__org_jboss_elemento_EventType;
/**@private {EventType<ClipboardEvent, EventTarget>}*/
EventType.$f_copy__org_jboss_elemento_EventType;
/**@private {EventType<ClipboardEvent, EventTarget>}*/
EventType.$f_paste__org_jboss_elemento_EventType;
/**@private {EventType<KeyboardEvent, EventTarget>}*/
EventType.$f_keydown__org_jboss_elemento_EventType;
/**@private {EventType<KeyboardEvent, EventTarget>}*/
EventType.$f_keypress__org_jboss_elemento_EventType;
/**@private {EventType<KeyboardEvent, EventTarget>}*/
EventType.$f_keyup__org_jboss_elemento_EventType;
/**@private {EventType<MouseEvent, EventTarget>}*/
EventType.$f_mouseenter__org_jboss_elemento_EventType;
/**@private {EventType<MouseEvent, EventTarget>}*/
EventType.$f_mouseover__org_jboss_elemento_EventType;
/**@private {EventType<MouseEvent, EventTarget>}*/
EventType.$f_mousemove__org_jboss_elemento_EventType;
/**@private {EventType<MouseEvent, EventTarget>}*/
EventType.$f_mousedown__org_jboss_elemento_EventType;
/**@private {EventType<MouseEvent, EventTarget>}*/
EventType.$f_mouseup__org_jboss_elemento_EventType;
/**@private {EventType<MouseEvent, Element>}*/
EventType.$f_auxclick__org_jboss_elemento_EventType;
/**@private {EventType<MouseEvent, Element>}*/
EventType.$f_click__org_jboss_elemento_EventType;
/**@private {EventType<MouseEvent, Element>}*/
EventType.$f_dblclick__org_jboss_elemento_EventType;
/**@private {EventType<MouseEvent, Element>}*/
EventType.$f_contextmenu__org_jboss_elemento_EventType;
/**@private {EventType<WheelEvent, EventTarget>}*/
EventType.$f_wheel__org_jboss_elemento_EventType;
/**@private {EventType<MouseEvent, Element>}*/
EventType.$f_mouseleave__org_jboss_elemento_EventType;
/**@private {EventType<MouseEvent, Element>}*/
EventType.$f_mouseout__org_jboss_elemento_EventType;
/**@private {EventType<Event, Document>}*/
EventType.$f_pointerlockchange__org_jboss_elemento_EventType;
/**@private {EventType<Event, Document>}*/
EventType.$f_pointerlockerror__org_jboss_elemento_EventType;
/**@private {EventType<DragEvent, EventTarget>}*/
EventType.$f_dragstart__org_jboss_elemento_EventType;
/**@private {EventType<DragEvent, EventTarget>}*/
EventType.$f_drag__org_jboss_elemento_EventType;
/**@private {EventType<DragEvent, EventTarget>}*/
EventType.$f_dragend__org_jboss_elemento_EventType;
/**@private {EventType<DragEvent, EventTarget>}*/
EventType.$f_dragenter__org_jboss_elemento_EventType;
/**@private {EventType<DragEvent, EventTarget>}*/
EventType.$f_dragover__org_jboss_elemento_EventType;
/**@private {EventType<DragEvent, EventTarget>}*/
EventType.$f_dragleave__org_jboss_elemento_EventType;
/**@private {EventType<DragEvent, EventTarget>}*/
EventType.$f_drop__org_jboss_elemento_EventType;
/**@private {EventType<TouchEvent, Element>}*/
EventType.$f_touchcancel__org_jboss_elemento_EventType;
/**@private {EventType<TouchEvent, Element>}*/
EventType.$f_touchend__org_jboss_elemento_EventType;
/**@private {EventType<TouchEvent, Element>}*/
EventType.$f_touchmove__org_jboss_elemento_EventType;
/**@private {EventType<TouchEvent, Element>}*/
EventType.$f_touchstart__org_jboss_elemento_EventType;
/**@private {EventType<HashChangeEvent, Window>}*/
EventType.$f_hashchange__org_jboss_elemento_EventType;
/**@private {EventType<Event, Element>}*/
EventType.$f_input__org_jboss_elemento_EventType;
/**@private {EventType<Event, Document>}*/
EventType.$f_readystatechange__org_jboss_elemento_EventType;
/**@private {EventType<Event, Element>}*/
EventType.$f_change__org_jboss_elemento_EventType;
/**@private {EventType<Event, Element>}*/
EventType.$f_search__org_jboss_elemento_EventType;
/**@private {EventType<Event, Element>}*/
EventType.$f_invalid__org_jboss_elemento_EventType;
/**@private {EventType<Event, Element>}*/
EventType.$f_show__org_jboss_elemento_EventType;
/**@private {EventType<MessageEvent<?>, EventTarget>}*/
EventType.$f_message__org_jboss_elemento_EventType;
/**@private {EventType<StorageEvent, Window>}*/
EventType.$f_storage__org_jboss_elemento_EventType;
/**@private {EventType<Event, Window>}*/
EventType.$f_load__org_jboss_elemento_EventType;
/**@private {EventType<Event, Document>}*/
EventType.$f_visibilitychange__org_jboss_elemento_EventType;

exports = EventType; 
//# sourceMappingURL=EventType.js.map
