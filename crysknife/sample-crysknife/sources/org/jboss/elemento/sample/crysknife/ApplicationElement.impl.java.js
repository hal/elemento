goog.module('org.jboss.elemento.sample.crysknife.ApplicationElement$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const IsElement = goog.require('org.jboss.elemento.IsElement$impl');

let Event_$Overlay = goog.forwardDeclare('elemental2.dom.Event.$Overlay$impl');
let HTMLButtonElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLButtonElement.$Overlay$impl');
let $Overlay = goog.forwardDeclare('elemental2.dom.HTMLElement.$Overlay$impl');
let HTMLInputElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLInputElement.$Overlay$impl');
let HTMLUListElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLUListElement.$Overlay$impl');
let KeyboardEvent_$Overlay = goog.forwardDeclare('elemental2.dom.KeyboardEvent.$Overlay$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let HashSet = goog.forwardDeclare('java.util.HashSet$impl');
let JsPropertyMap_$Overlay = goog.forwardDeclare('jsinterop.base.JsPropertyMap.$Overlay$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let By = goog.forwardDeclare('org.jboss.elemento.By$impl');
let Elements = goog.forwardDeclare('org.jboss.elemento.Elements$impl');
let Key = goog.forwardDeclare('org.jboss.elemento.Key$impl');
let Filter = goog.forwardDeclare('org.jboss.elemento.sample.crysknife.Filter$impl');
let Messages = goog.forwardDeclare('org.jboss.elemento.sample.crysknife.Messages$impl');
let Todo_$Overlay = goog.forwardDeclare('org.jboss.elemento.sample.crysknife.Todo.$Overlay$impl');
let TodoElement = goog.forwardDeclare('org.jboss.elemento.sample.crysknife.TodoElement$impl');
let TodoRepository = goog.forwardDeclare('org.jboss.elemento.sample.crysknife.TodoRepository$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @implements {IsElement<HTMLElement>}
  */
class ApplicationElement extends j_l_Object {
 /** @protected */
 constructor() {
  super();
  /**@type {TodoRepository}*/
  this.f_repository__org_jboss_elemento_sample_crysknife_ApplicationElement_;
  /**@type {Filter}*/
  this.f_filter__org_jboss_elemento_sample_crysknife_ApplicationElement_;
  /**@type {HTMLElement}*/
  this.f_todos__org_jboss_elemento_sample_crysknife_ApplicationElement;
  /**@type {HTMLInputElement}*/
  this.f_newTodo__org_jboss_elemento_sample_crysknife_ApplicationElement;
  /**@type {HTMLElement}*/
  this.f_main__org_jboss_elemento_sample_crysknife_ApplicationElement;
  /**@type {HTMLInputElement}*/
  this.f_toggleAll__org_jboss_elemento_sample_crysknife_ApplicationElement;
  /**@type {HTMLUListElement}*/
  this.f_list__org_jboss_elemento_sample_crysknife_ApplicationElement;
  /**@type {HTMLElement}*/
  this.f_footer__org_jboss_elemento_sample_crysknife_ApplicationElement;
  /**@type {HTMLElement}*/
  this.f_count__org_jboss_elemento_sample_crysknife_ApplicationElement;
  /**@type {HTMLElement}*/
  this.f_filterAll__org_jboss_elemento_sample_crysknife_ApplicationElement;
  /**@type {HTMLElement}*/
  this.f_filterActive__org_jboss_elemento_sample_crysknife_ApplicationElement;
  /**@type {HTMLElement}*/
  this.f_filterCompleted__org_jboss_elemento_sample_crysknife_ApplicationElement;
  /**@type {HTMLButtonElement}*/
  this.f_clearCompleted__org_jboss_elemento_sample_crysknife_ApplicationElement;
 }
 /** @return {!ApplicationElement} */
 static $create__org_jboss_elemento_sample_crysknife_TodoRepository(/** TodoRepository */ repository) {
  ApplicationElement.$clinit();
  let $instance = new ApplicationElement();
  $instance.$ctor__org_jboss_elemento_sample_crysknife_ApplicationElement__org_jboss_elemento_sample_crysknife_TodoRepository(repository);
  return $instance;
 }
 
 $ctor__org_jboss_elemento_sample_crysknife_ApplicationElement__org_jboss_elemento_sample_crysknife_TodoRepository(/** TodoRepository */ repository) {
  this.$ctor__java_lang_Object__();
  this.f_repository__org_jboss_elemento_sample_crysknife_ApplicationElement_ = repository;
 }
 
 m_init___$pp_org_jboss_elemento_sample_crysknife() {
  this.m_reset___$p_org_jboss_elemento_sample_crysknife_ApplicationElement();
  this.m_update___$pp_org_jboss_elemento_sample_crysknife();
 }
 /** @override @return {HTMLElement} */
 m_element__() {
  return this.f_todos__org_jboss_elemento_sample_crysknife_ApplicationElement;
 }
 
 m_newTodo__elemental2_dom_KeyboardEvent_$pp_org_jboss_elemento_sample_crysknife(/** KeyboardEvent */ event) {
  if (Key.f_Enter__org_jboss_elemento_Key.m_match__elemental2_dom_KeyboardEvent(event)) {
   let text = j_l_String.m_trim__java_lang_String(this.f_newTodo__org_jboss_elemento_sample_crysknife_ApplicationElement.value);
   if (j_l_String.m_length__java_lang_String(text) != 0) {
    let item = this.f_repository__org_jboss_elemento_sample_crysknife_ApplicationElement_.m_add__java_lang_String(text);
    this.f_list__org_jboss_elemento_sample_crysknife_ApplicationElement.appendChild(TodoElement.$create__org_jboss_elemento_sample_crysknife_ApplicationElement__org_jboss_elemento_sample_crysknife_TodoRepository__org_jboss_elemento_sample_crysknife_Todo(this, this.f_repository__org_jboss_elemento_sample_crysknife_ApplicationElement_, item).m_element__());
    this.f_newTodo__org_jboss_elemento_sample_crysknife_ApplicationElement.value = "";
    this.m_update___$pp_org_jboss_elemento_sample_crysknife();
   }
  }
 }
 
 m_toggleAll__elemental2_dom_Event_$pp_org_jboss_elemento_sample_crysknife(/** Event */ event) {
  for (let $iterator = Elements.m_children__elemental2_dom_HTMLElement(this.f_list__org_jboss_elemento_sample_crysknife_ApplicationElement).m_iterator__(); $iterator.m_hasNext__(); ) {
   let li = /**@type {HTMLElement}*/ ($Casts.$to($iterator.m_next__(), $Overlay));
   Elements.m_toggle__elemental2_dom_HTMLElement__java_lang_String__boolean(li, "completed", this.f_toggleAll__org_jboss_elemento_sample_crysknife_ApplicationElement.checked);
   let cb = /**@type {HTMLInputElement}*/ ($Casts.$to(Elements.m_find__elemental2_dom_Node__org_jboss_elemento_By(li, By.m_classname__java_lang_String("toggle")), HTMLInputElement_$Overlay));
   if (!$Equality.$same(cb, null)) {
    cb.checked = this.f_toggleAll__org_jboss_elemento_sample_crysknife_ApplicationElement.checked;
   }
  }
  this.f_repository__org_jboss_elemento_sample_crysknife_ApplicationElement_.m_completeAll__boolean(this.f_toggleAll__org_jboss_elemento_sample_crysknife_ApplicationElement.checked);
  this.m_update___$pp_org_jboss_elemento_sample_crysknife();
 }
 
 m_clearCompleted__elemental2_dom_Event_$pp_org_jboss_elemento_sample_crysknife(/** Event */ event) {
  let ids = /**@type {!HashSet<?string>}*/ (HashSet.$create__());
  for (let iterator = Elements.m_iterator__elemental2_dom_HTMLElement(this.f_list__org_jboss_elemento_sample_crysknife_ApplicationElement); iterator.m_hasNext__(); ) {
   let li = /**@type {HTMLElement}*/ ($Casts.$to(iterator.m_next__(), $Overlay));
   if (li.classList.contains("completed")) {
    let id = j_l_String.m_valueOf__java_lang_Object(/**@type {?string}*/ ($Casts.$to(JsPropertyMap_$Overlay.m_get__$devirt__jsinterop_base_JsPropertyMap__java_lang_String(li.dataset, "item"), j_l_String)));
    if (!$Equality.$same(id, null)) {
     ids.add(id);
    }
    iterator.m_remove__();
   }
  }
  this.f_repository__org_jboss_elemento_sample_crysknife_ApplicationElement_.m_removeAll__java_util_Set(ids);
  this.m_update___$pp_org_jboss_elemento_sample_crysknife();
 }
 
 m_update___$pp_org_jboss_elemento_sample_crysknife() {
  let activeCount = 0;
  let completedCount = 0;
  let size = this.f_list__org_jboss_elemento_sample_crysknife_ApplicationElement.childElementCount;
  Elements.m_setVisible__elemental2_dom_HTMLElement__boolean(this.f_main__org_jboss_elemento_sample_crysknife_ApplicationElement, size > 0);
  Elements.m_setVisible__elemental2_dom_HTMLElement__boolean(this.f_footer__org_jboss_elemento_sample_crysknife_ApplicationElement, size > 0);
  for (let $iterator = Elements.m_children__elemental2_dom_HTMLElement(this.f_list__org_jboss_elemento_sample_crysknife_ApplicationElement).m_iterator__(); $iterator.m_hasNext__(); ) {
   let li = /**@type {HTMLElement}*/ ($Casts.$to($iterator.m_next__(), $Overlay));
   if (li.classList.contains("completed")) {
    completedCount++;
    Elements.m_setVisible__elemental2_dom_HTMLElement__boolean(li, !$Equality.$same(this.f_filter__org_jboss_elemento_sample_crysknife_ApplicationElement_, Filter.f_ACTIVE__org_jboss_elemento_sample_crysknife_Filter));
   } else {
    activeCount++;
    Elements.m_setVisible__elemental2_dom_HTMLElement__boolean(li, !$Equality.$same(this.f_filter__org_jboss_elemento_sample_crysknife_ApplicationElement_, Filter.f_COMPLETED__org_jboss_elemento_sample_crysknife_Filter));
   }
  }
  this.f_toggleAll__org_jboss_elemento_sample_crysknife_ApplicationElement.checked = (size == completedCount);
  Elements.m_innerHtml__elemental2_dom_HTMLElement__org_gwtproject_safehtml_shared_SafeHtml(this.f_count__org_jboss_elemento_sample_crysknife_ApplicationElement, Messages.m_items__int(activeCount));
  Elements.m_setVisible__elemental2_dom_HTMLElement__boolean(this.f_clearCompleted__org_jboss_elemento_sample_crysknife_ApplicationElement, completedCount != 0);
 }
 
 m_filter__java_lang_String_$pp_org_jboss_elemento_sample_crysknife(/** ?string */ token) {
  this.f_filter__org_jboss_elemento_sample_crysknife_ApplicationElement_ = Filter.m_parseToken__java_lang_String(token);
  switch (this.f_filter__org_jboss_elemento_sample_crysknife_ApplicationElement_.ordinal()) {
   case Filter.$ordinal$f_ALL__org_jboss_elemento_sample_crysknife_Filter: 
    this.f_filterAll__org_jboss_elemento_sample_crysknife_ApplicationElement.classList.add("selected");
    this.f_filterActive__org_jboss_elemento_sample_crysknife_ApplicationElement.classList.remove("selected");
    this.f_filterCompleted__org_jboss_elemento_sample_crysknife_ApplicationElement.classList.remove("selected");
    break;
   case Filter.$ordinal$f_ACTIVE__org_jboss_elemento_sample_crysknife_Filter: 
    this.f_filterAll__org_jboss_elemento_sample_crysknife_ApplicationElement.classList.remove("selected");
    this.f_filterActive__org_jboss_elemento_sample_crysknife_ApplicationElement.classList.add("selected");
    this.f_filterCompleted__org_jboss_elemento_sample_crysknife_ApplicationElement.classList.remove("selected");
    break;
   case Filter.$ordinal$f_COMPLETED__org_jboss_elemento_sample_crysknife_Filter: 
    this.f_filterAll__org_jboss_elemento_sample_crysknife_ApplicationElement.classList.remove("selected");
    this.f_filterActive__org_jboss_elemento_sample_crysknife_ApplicationElement.classList.remove("selected");
    this.f_filterCompleted__org_jboss_elemento_sample_crysknife_ApplicationElement.classList.add("selected");
    break;
   default: 
    break;
  }
  this.m_update___$pp_org_jboss_elemento_sample_crysknife();
 }
 
 m_reset___$p_org_jboss_elemento_sample_crysknife_ApplicationElement() {
  Elements.m_removeChildrenFrom__elemental2_dom_Element(this.f_list__org_jboss_elemento_sample_crysknife_ApplicationElement);
  for (let $iterator = this.f_repository__org_jboss_elemento_sample_crysknife_ApplicationElement_.m_items__().m_iterator__(); $iterator.m_hasNext__(); ) {
   let item = /**@type {Object}*/ ($Casts.$to($iterator.m_next__(), Todo_$Overlay));
   this.f_list__org_jboss_elemento_sample_crysknife_ApplicationElement.appendChild(TodoElement.$create__org_jboss_elemento_sample_crysknife_ApplicationElement__org_jboss_elemento_sample_crysknife_TodoRepository__org_jboss_elemento_sample_crysknife_Todo(this, this.f_repository__org_jboss_elemento_sample_crysknife_ApplicationElement_, item).m_element__());
  }
 }
 
 static $clinit() {
  ApplicationElement.$clinit = () =>{};
  ApplicationElement.$loadModules();
  j_l_Object.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof ApplicationElement;
 }
 
 static $loadModules() {
  $Overlay = goog.module.get('elemental2.dom.HTMLElement.$Overlay$impl');
  HTMLInputElement_$Overlay = goog.module.get('elemental2.dom.HTMLInputElement.$Overlay$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  HashSet = goog.module.get('java.util.HashSet$impl');
  JsPropertyMap_$Overlay = goog.module.get('jsinterop.base.JsPropertyMap.$Overlay$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  By = goog.module.get('org.jboss.elemento.By$impl');
  Elements = goog.module.get('org.jboss.elemento.Elements$impl');
  Key = goog.module.get('org.jboss.elemento.Key$impl');
  Filter = goog.module.get('org.jboss.elemento.sample.crysknife.Filter$impl');
  Messages = goog.module.get('org.jboss.elemento.sample.crysknife.Messages$impl');
  Todo_$Overlay = goog.module.get('org.jboss.elemento.sample.crysknife.Todo.$Overlay$impl');
  TodoElement = goog.module.get('org.jboss.elemento.sample.crysknife.TodoElement$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
 
}
$Util.$setClassMetadata(ApplicationElement, 'org.jboss.elemento.sample.crysknife.ApplicationElement');

IsElement.$markImplementor(ApplicationElement);

exports = ApplicationElement; 
//# sourceMappingURL=ApplicationElement.js.map
