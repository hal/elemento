goog.module('org.jboss.elemento.BodyObserver$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let JsArray_$Overlay = goog.forwardDeclare('elemental2.core.JsArray.$Overlay$impl');
let DomGlobal_$Overlay = goog.forwardDeclare('elemental2.dom.DomGlobal.$Overlay$impl');
let Element_$Overlay = goog.forwardDeclare('elemental2.dom.Element.$Overlay$impl');
let HTMLElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLElement.$Overlay$impl');
let MutationObserver_$Overlay = goog.forwardDeclare('elemental2.dom.MutationObserver.$Overlay$impl');
let $Overlay = goog.forwardDeclare('elemental2.dom.MutationObserverInit.$Overlay$impl');
let MutationRecord_$Overlay = goog.forwardDeclare('elemental2.dom.MutationRecord.$Overlay$impl');
let Node_$Overlay = goog.forwardDeclare('elemental2.dom.Node.$Overlay$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let ArrayList = goog.forwardDeclare('java.util.ArrayList$impl');
let List = goog.forwardDeclare('java.util.List$impl');
let j_u_function_Function = goog.forwardDeclare('java.util.function.Function$impl');
let Predicate = goog.forwardDeclare('java.util.function.Predicate$impl');
let Collector = goog.forwardDeclare('java.util.stream.Collector$impl');
let Collectors = goog.forwardDeclare('java.util.stream.Collectors$impl');
let Stream = goog.forwardDeclare('java.util.stream.Stream$impl');
let Js = goog.forwardDeclare('jsinterop.base.Js$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let $1 = goog.forwardDeclare('org.jboss.elemento.BodyObserver.$1$impl');
let ElementObserver = goog.forwardDeclare('org.jboss.elemento.BodyObserver.ElementObserver$impl');
let Elements = goog.forwardDeclare('org.jboss.elemento.Elements$impl');
let Id = goog.forwardDeclare('org.jboss.elemento.Id$impl');
let ObserverCallback = goog.forwardDeclare('org.jboss.elemento.ObserverCallback$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

class BodyObserver extends j_l_Object {
 /** @protected */
 constructor() {
  super();
 }
 
 static m_startObserving__() {
  let mutationObserver = new MutationObserver((/** Array<MutationRecord> */ mutationRecords, /** MutationObserver */ observer) =>{
   let records = /**@type {Array<MutationRecord>}*/ (Js.m_uncheckedCast__java_lang_Object(mutationRecords));
   for (let i = 0; i < records.length; i++) {
    BodyObserver.m_onElementsRemoved__elemental2_dom_MutationRecord(records[i]);
    BodyObserver.m_onElementsAppended__elemental2_dom_MutationRecord(records[i]);
   }
   return null;
  });
  let mutationObserverInit = $Overlay.m_create__();
  mutationObserverInit.childList = true;
  mutationObserverInit.subtree = true;
  mutationObserver.observe(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.body, mutationObserverInit);
  BodyObserver.f_ready__org_jboss_elemento_BodyObserver_ = true;
 }
 
 static m_onElementsAppended__elemental2_dom_MutationRecord(/** MutationRecord */ record) {
  let observed = /**@type {!ArrayList<ElementObserver>}*/ (ArrayList.$create__());
  let addedElements = /**@type {List<HTMLElement>}*/ ($Casts.$to(/**@type {Stream<HTMLElement>}*/ (/**@type {Stream<Node>}*/ (Elements.m_stream__jsinterop_base_JsArrayLike(record.addedNodes)).m_filter__java_util_function_Predicate(/**@type {Predicate<Node>}*/ (Elements.m_htmlElements__())).m_map__java_util_function_Function(/**@type {j_u_function_Function<Node, HTMLElement>}*/ (Elements.m_asHtmlElement__()))).m_collect__java_util_stream_Collector(/**@type {Collector<HTMLElement, *, List<HTMLElement>>}*/ (Collectors.m_toList__())), List));
  for (let $iterator = BodyObserver.f_attachObservers__org_jboss_elemento_BodyObserver_.m_iterator__(); $iterator.m_hasNext__(); ) {
   let elementObserver = /**@type {ElementObserver}*/ ($Casts.$to($iterator.m_next__(), ElementObserver));
   if ($Equality.$same(elementObserver.m_observedElement__(), null)) {
    observed.add(elementObserver);
   } else {
    if (addedElements.contains(elementObserver.m_observedElement__()) || BodyObserver.m_isChildOfObservedElement__java_util_List__java_lang_String__java_lang_String(addedElements, BodyObserver.f_ATTACH_UID_KEY__org_jboss_elemento_BodyObserver_, elementObserver.m_attachId__())) {
     elementObserver.m_callback__().m_onObserved__elemental2_dom_MutationRecord(record);
     elementObserver.m_observedElement__().removeAttribute(BodyObserver.f_ATTACH_UID_KEY__org_jboss_elemento_BodyObserver_);
     observed.add(elementObserver);
    }
   }
  }
  BodyObserver.f_attachObservers__org_jboss_elemento_BodyObserver_.removeAll(observed);
 }
 
 static m_onElementsRemoved__elemental2_dom_MutationRecord(/** MutationRecord */ record) {
  let observed = /**@type {!ArrayList<ElementObserver>}*/ (ArrayList.$create__());
  let removedElements = /**@type {List<HTMLElement>}*/ ($Casts.$to(/**@type {Stream<HTMLElement>}*/ (/**@type {Stream<Node>}*/ (Elements.m_stream__jsinterop_base_JsArrayLike(record.removedNodes)).m_filter__java_util_function_Predicate(/**@type {Predicate<Node>}*/ (Elements.m_htmlElements__())).m_map__java_util_function_Function(/**@type {j_u_function_Function<Node, HTMLElement>}*/ (Elements.m_asHtmlElement__()))).m_collect__java_util_stream_Collector(/**@type {Collector<HTMLElement, *, List<HTMLElement>>}*/ (Collectors.m_toList__())), List));
  for (let $iterator = BodyObserver.f_detachObservers__org_jboss_elemento_BodyObserver_.m_iterator__(); $iterator.m_hasNext__(); ) {
   let elementObserver = /**@type {ElementObserver}*/ ($Casts.$to($iterator.m_next__(), ElementObserver));
   if ($Equality.$same(elementObserver.m_observedElement__(), null)) {
    observed.add(elementObserver);
   } else {
    if (removedElements.contains(elementObserver.m_observedElement__()) || BodyObserver.m_isChildOfObservedElement__java_util_List__java_lang_String__java_lang_String(removedElements, BodyObserver.f_DETACH_UID_KEY__org_jboss_elemento_BodyObserver_, elementObserver.m_attachId__())) {
     elementObserver.m_callback__().m_onObserved__elemental2_dom_MutationRecord(record);
     elementObserver.m_observedElement__().removeAttribute(BodyObserver.f_DETACH_UID_KEY__org_jboss_elemento_BodyObserver_);
     observed.add(elementObserver);
    }
   }
  }
  BodyObserver.f_detachObservers__org_jboss_elemento_BodyObserver_.removeAll(observed);
 }
 /** @return {boolean} */
 static m_isChildOfObservedElement__java_util_List__java_lang_String__java_lang_String(/** List<HTMLElement> */ elements, /** ?string */ attribute, /** ?string */ attachId) {
  for (let $iterator = elements.m_iterator__(); $iterator.m_hasNext__(); ) {
   let element = /**@type {HTMLElement}*/ ($Casts.$to($iterator.m_next__(), HTMLElement_$Overlay));
   if (!$Equality.$same(element.querySelector("[" + j_l_String.m_valueOf__java_lang_Object(attribute) + "='" + j_l_String.m_valueOf__java_lang_Object(attachId) + "']"), null)) {
    return true;
   }
  }
  return false;
 }
 
 static m_addAttachObserver__elemental2_dom_HTMLElement__org_jboss_elemento_ObserverCallback(/** HTMLElement */ element, /** ObserverCallback */ callback) {
  BodyObserver.$clinit();
  if (!BodyObserver.f_ready__org_jboss_elemento_BodyObserver_) {
   BodyObserver.m_startObserving__();
  }
  BodyObserver.f_attachObservers__org_jboss_elemento_BodyObserver_.add(BodyObserver.m_createObserver__elemental2_dom_HTMLElement__org_jboss_elemento_ObserverCallback__java_lang_String(element, callback, BodyObserver.f_ATTACH_UID_KEY__org_jboss_elemento_BodyObserver_));
 }
 
 static m_addDetachObserver__elemental2_dom_HTMLElement__org_jboss_elemento_ObserverCallback(/** HTMLElement */ element, /** ObserverCallback */ callback) {
  BodyObserver.$clinit();
  if (!BodyObserver.f_ready__org_jboss_elemento_BodyObserver_) {
   BodyObserver.m_startObserving__();
  }
  BodyObserver.f_detachObservers__org_jboss_elemento_BodyObserver_.add(BodyObserver.m_createObserver__elemental2_dom_HTMLElement__org_jboss_elemento_ObserverCallback__java_lang_String(element, callback, BodyObserver.f_DETACH_UID_KEY__org_jboss_elemento_BodyObserver_));
 }
 /** @return {ElementObserver} */
 static m_createObserver__elemental2_dom_HTMLElement__org_jboss_elemento_ObserverCallback__java_lang_String(/** HTMLElement */ element, /** ObserverCallback */ callback, /** ?string */ attribute) {
  let elementId = element.getAttribute(attribute);
  if ($Equality.$same(elementId, null)) {
   Element_$Overlay.m_setAttribute__$devirt__elemental2_dom_Element__java_lang_String__java_lang_String(element, attribute, Id.m_unique__());
  }
  return $1.$create__elemental2_dom_HTMLElement__java_lang_String__org_jboss_elemento_ObserverCallback(element, attribute, callback);
 }
 /** @return {!BodyObserver} */
 static $create__() {
  let $instance = new BodyObserver();
  $instance.$ctor__org_jboss_elemento_BodyObserver__();
  return $instance;
 }
 
 $ctor__org_jboss_elemento_BodyObserver__() {
  this.$ctor__java_lang_Object__();
 }
 
 static $clinit() {
  BodyObserver.$clinit = () =>{};
  BodyObserver.$loadModules();
  j_l_Object.$clinit();
  BodyObserver.f_detachObservers__org_jboss_elemento_BodyObserver_ = /**@type {!ArrayList<ElementObserver>}*/ (ArrayList.$create__());
  BodyObserver.f_attachObservers__org_jboss_elemento_BodyObserver_ = /**@type {!ArrayList<ElementObserver>}*/ (ArrayList.$create__());
  BodyObserver.f_ready__org_jboss_elemento_BodyObserver_ = false;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof BodyObserver;
 }
 
 static $loadModules() {
  DomGlobal_$Overlay = goog.module.get('elemental2.dom.DomGlobal.$Overlay$impl');
  Element_$Overlay = goog.module.get('elemental2.dom.Element.$Overlay$impl');
  HTMLElement_$Overlay = goog.module.get('elemental2.dom.HTMLElement.$Overlay$impl');
  $Overlay = goog.module.get('elemental2.dom.MutationObserverInit.$Overlay$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  ArrayList = goog.module.get('java.util.ArrayList$impl');
  List = goog.module.get('java.util.List$impl');
  Collectors = goog.module.get('java.util.stream.Collectors$impl');
  Js = goog.module.get('jsinterop.base.Js$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  $1 = goog.module.get('org.jboss.elemento.BodyObserver.$1$impl');
  ElementObserver = goog.module.get('org.jboss.elemento.BodyObserver.ElementObserver$impl');
  Elements = goog.module.get('org.jboss.elemento.Elements$impl');
  Id = goog.module.get('org.jboss.elemento.Id$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
 
}
$Util.$setClassMetadata(BodyObserver, 'org.jboss.elemento.BodyObserver');

/**@const {?string}*/
BodyObserver.f_ATTACH_UID_KEY__org_jboss_elemento_BodyObserver_ = "on-attach-uid";
/**@const {?string}*/
BodyObserver.f_DETACH_UID_KEY__org_jboss_elemento_BodyObserver_ = "on-detach-uid";
/**@type {List<ElementObserver>}*/
BodyObserver.f_detachObservers__org_jboss_elemento_BodyObserver_;
/**@type {List<ElementObserver>}*/
BodyObserver.f_attachObservers__org_jboss_elemento_BodyObserver_;
/**@type {boolean}*/
BodyObserver.f_ready__org_jboss_elemento_BodyObserver_ = false;

exports = BodyObserver; 
//# sourceMappingURL=BodyObserver.js.map
