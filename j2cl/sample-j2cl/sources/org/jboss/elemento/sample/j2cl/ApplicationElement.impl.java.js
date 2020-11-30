goog.module('org.jboss.elemento.sample.j2cl.ApplicationElement$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const IsElement = goog.require('org.jboss.elemento.IsElement$impl');

let Event_$Overlay = goog.forwardDeclare('elemental2.dom.Event.$Overlay$impl');
let HTMLAnchorElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLAnchorElement.$Overlay$impl');
let HTMLButtonElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLButtonElement.$Overlay$impl');
let HTMLElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLElement.$Overlay$impl');
let HTMLHeadingElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLHeadingElement.$Overlay$impl');
let $Overlay = goog.forwardDeclare('elemental2.dom.HTMLInputElement.$Overlay$impl');
let HTMLLIElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLLIElement.$Overlay$impl');
let HTMLLabelElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLLabelElement.$Overlay$impl');
let HTMLUListElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLUListElement.$Overlay$impl');
let KeyboardEvent_$Overlay = goog.forwardDeclare('elemental2.dom.KeyboardEvent.$Overlay$impl');
let MouseEvent_$Overlay = goog.forwardDeclare('elemental2.dom.MouseEvent.$Overlay$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let HashSet = goog.forwardDeclare('java.util.HashSet$impl');
let Consumer = goog.forwardDeclare('java.util.function.Consumer$impl');
let JsPropertyMap_$Overlay = goog.forwardDeclare('jsinterop.base.JsPropertyMap.$Overlay$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let By = goog.forwardDeclare('org.jboss.elemento.By$impl');
let Elements = goog.forwardDeclare('org.jboss.elemento.Elements$impl');
let EventType = goog.forwardDeclare('org.jboss.elemento.EventType$impl');
let HtmlContentBuilder = goog.forwardDeclare('org.jboss.elemento.HtmlContentBuilder$impl');
let InputBuilder = goog.forwardDeclare('org.jboss.elemento.InputBuilder$impl');
let InputType = goog.forwardDeclare('org.jboss.elemento.InputType$impl');
let Key = goog.forwardDeclare('org.jboss.elemento.Key$impl');
let Filter = goog.forwardDeclare('org.jboss.elemento.sample.j2cl.Filter$impl');
let Messages = goog.forwardDeclare('org.jboss.elemento.sample.j2cl.Messages$impl');
let Todo_$Overlay = goog.forwardDeclare('org.jboss.elemento.sample.j2cl.Todo.$Overlay$impl');
let TodoElement = goog.forwardDeclare('org.jboss.elemento.sample.j2cl.TodoElement$impl');
let TodoRepository = goog.forwardDeclare('org.jboss.elemento.sample.j2cl.TodoRepository$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @implements {IsElement<HTMLElement>}
  */
class ApplicationElement extends j_l_Object {
 /** @protected */
 constructor() {
  super();
  /**@type {TodoRepository}*/
  this.f_repository__org_jboss_elemento_sample_j2cl_ApplicationElement_;
  /**@type {Filter}*/
  this.f_filter__org_jboss_elemento_sample_j2cl_ApplicationElement_;
  /**@type {HTMLElement}*/
  this.f_root__org_jboss_elemento_sample_j2cl_ApplicationElement_;
  /**@type {HTMLInputElement}*/
  this.f_newTodo__org_jboss_elemento_sample_j2cl_ApplicationElement_;
  /**@type {HTMLElement}*/
  this.f_main__org_jboss_elemento_sample_j2cl_ApplicationElement_;
  /**@type {HTMLInputElement}*/
  this.f_toggleAll__org_jboss_elemento_sample_j2cl_ApplicationElement_;
  /**@type {HtmlContentBuilder<HTMLUListElement>}*/
  this.f_list__org_jboss_elemento_sample_j2cl_ApplicationElement_;
  /**@type {HTMLElement}*/
  this.f_footer__org_jboss_elemento_sample_j2cl_ApplicationElement_;
  /**@type {HTMLElement}*/
  this.f_count__org_jboss_elemento_sample_j2cl_ApplicationElement_;
  /**@type {HTMLElement}*/
  this.f_filterAll__org_jboss_elemento_sample_j2cl_ApplicationElement_;
  /**@type {HTMLElement}*/
  this.f_filterActive__org_jboss_elemento_sample_j2cl_ApplicationElement_;
  /**@type {HTMLElement}*/
  this.f_filterCompleted__org_jboss_elemento_sample_j2cl_ApplicationElement_;
  /**@type {HTMLButtonElement}*/
  this.f_clearCompleted__org_jboss_elemento_sample_j2cl_ApplicationElement_;
 }
 /** @return {!ApplicationElement} */
 static $create__org_jboss_elemento_sample_j2cl_TodoRepository(/** TodoRepository */ repository) {
  ApplicationElement.$clinit();
  let $instance = new ApplicationElement();
  $instance.$ctor__org_jboss_elemento_sample_j2cl_ApplicationElement__org_jboss_elemento_sample_j2cl_TodoRepository(repository);
  return $instance;
 }
 
 $ctor__org_jboss_elemento_sample_j2cl_ApplicationElement__org_jboss_elemento_sample_j2cl_TodoRepository(/** TodoRepository */ repository) {
  this.$ctor__java_lang_Object__();
  this.f_repository__org_jboss_elemento_sample_j2cl_ApplicationElement_ = repository;
  this.f_root__org_jboss_elemento_sample_j2cl_ApplicationElement_ = /**@type {HtmlContentBuilder<HTMLElement>}*/ ($Casts.$to(/**@type {HtmlContentBuilder<HTMLElement>}*/ ($Casts.$to(/**@type {HtmlContentBuilder<HTMLElement>}*/ ($Casts.$to(/**@type {HtmlContentBuilder<HTMLElement>}*/ ($Casts.$to(Elements.m_section__().m_css__arrayOf_java_lang_String(/**@type {!Array<?string>}*/ ($Arrays.$init(["todoapp"], j_l_String))), HtmlContentBuilder)).m_add__org_jboss_elemento_IsElement(/**@type {HtmlContentBuilder<HTMLElement>}*/ ($Casts.$to(/**@type {HtmlContentBuilder<HTMLElement>}*/ ($Casts.$to(/**@type {HtmlContentBuilder<HTMLElement>}*/ ($Casts.$to(Elements.m_header__().m_css__arrayOf_java_lang_String(/**@type {!Array<?string>}*/ ($Arrays.$init(["header"], j_l_String))), HtmlContentBuilder)).m_add__org_jboss_elemento_IsElement(/**@type {HtmlContentBuilder<HTMLHeadingElement>}*/ ($Casts.$to(Elements.m_h__int(1).m_textContent__java_lang_String("todos"), HtmlContentBuilder))), HtmlContentBuilder)).m_add__elemental2_dom_Node(this.f_newTodo__org_jboss_elemento_sample_j2cl_ApplicationElement_ = /**@type {HTMLInputElement}*/ ($Casts.$to(/**@type {InputBuilder<HTMLInputElement>}*/ ($Casts.$to(Elements.m_input__org_jboss_elemento_InputType(InputType.f_text__org_jboss_elemento_InputType).m_css__arrayOf_java_lang_String(/**@type {!Array<?string>}*/ ($Arrays.$init(["new-todo"], j_l_String))), InputBuilder)).m_autofocus__boolean(true).m_placeholder__java_lang_String("What needs to be done?").m_element__(), $Overlay))), HtmlContentBuilder))), HtmlContentBuilder)).m_add__elemental2_dom_Node(this.f_main__org_jboss_elemento_sample_j2cl_ApplicationElement_ = /**@type {HtmlContentBuilder<HTMLElement>}*/ ($Casts.$to(/**@type {HtmlContentBuilder<HTMLElement>}*/ ($Casts.$to(/**@type {HtmlContentBuilder<HTMLElement>}*/ ($Casts.$to(/**@type {HtmlContentBuilder<HTMLElement>}*/ ($Casts.$to(Elements.m_section__().m_css__arrayOf_java_lang_String(/**@type {!Array<?string>}*/ ($Arrays.$init(["main"], j_l_String))), HtmlContentBuilder)).m_add__elemental2_dom_Node(this.f_toggleAll__org_jboss_elemento_sample_j2cl_ApplicationElement_ = /**@type {HTMLInputElement}*/ ($Casts.$to(/**@type {InputBuilder<HTMLInputElement>}*/ ($Casts.$to(/**@type {InputBuilder<HTMLInputElement>}*/ ($Casts.$to(Elements.m_input__org_jboss_elemento_InputType(InputType.f_checkbox__org_jboss_elemento_InputType).m_css__arrayOf_java_lang_String(/**@type {!Array<?string>}*/ ($Arrays.$init(["toggle-all"], j_l_String))), InputBuilder)).m_id__java_lang_String("toggle-all"), InputBuilder)).m_element__(), $Overlay))), HtmlContentBuilder)).m_add__org_jboss_elemento_IsElement(/**@type {HtmlContentBuilder<HTMLLabelElement>}*/ ($Casts.$to(/**@type {HtmlContentBuilder<HTMLLabelElement>}*/ ($Casts.$to(Elements.m_label__().m_apply__java_util_function_Consumer(Consumer.$adapt((l) =>{
   let l_1 = /**@type {HTMLLabelElement}*/ ($Casts.$to(l, HTMLLabelElement_$Overlay));
   l_1.htmlFor = "toggle-all";
  })), HtmlContentBuilder)).m_textContent__java_lang_String("Mark all as complete"), HtmlContentBuilder))), HtmlContentBuilder)).m_add__org_jboss_elemento_IsElement(this.f_list__org_jboss_elemento_sample_j2cl_ApplicationElement_ = /**@type {HtmlContentBuilder<HTMLUListElement>}*/ ($Casts.$to(Elements.m_ul__().m_css__arrayOf_java_lang_String(/**@type {!Array<?string>}*/ ($Arrays.$init(["todo-list"], j_l_String))), HtmlContentBuilder))), HtmlContentBuilder)).m_element__()), HtmlContentBuilder)).m_add__elemental2_dom_Node(this.f_footer__org_jboss_elemento_sample_j2cl_ApplicationElement_ = /**@type {HtmlContentBuilder<HTMLElement>}*/ ($Casts.$to(/**@type {HtmlContentBuilder<HTMLElement>}*/ ($Casts.$to(/**@type {HtmlContentBuilder<HTMLElement>}*/ ($Casts.$to(/**@type {HtmlContentBuilder<HTMLElement>}*/ ($Casts.$to(Elements.m_footer__().m_css__arrayOf_java_lang_String(/**@type {!Array<?string>}*/ ($Arrays.$init(["footer"], j_l_String))), HtmlContentBuilder)).m_add__elemental2_dom_Node(this.f_count__org_jboss_elemento_sample_j2cl_ApplicationElement_ = /**@type {HtmlContentBuilder<HTMLElement>}*/ ($Casts.$to(/**@type {HtmlContentBuilder<HTMLElement>}*/ ($Casts.$to(Elements.m_span__().m_css__arrayOf_java_lang_String(/**@type {!Array<?string>}*/ ($Arrays.$init(["todo-count"], j_l_String))), HtmlContentBuilder)).m_innerHtml__org_gwtproject_safehtml_shared_SafeHtml(Messages.m_items__int(0)), HtmlContentBuilder)).m_element__()), HtmlContentBuilder)).m_add__org_jboss_elemento_IsElement(/**@type {HtmlContentBuilder<HTMLUListElement>}*/ ($Casts.$to(/**@type {HtmlContentBuilder<HTMLUListElement>}*/ ($Casts.$to(/**@type {HtmlContentBuilder<HTMLUListElement>}*/ ($Casts.$to(/**@type {HtmlContentBuilder<HTMLUListElement>}*/ ($Casts.$to(Elements.m_ul__().m_css__arrayOf_java_lang_String(/**@type {!Array<?string>}*/ ($Arrays.$init(["filters"], j_l_String))), HtmlContentBuilder)).m_add__org_jboss_elemento_IsElement(/**@type {HtmlContentBuilder<HTMLLIElement>}*/ ($Casts.$to(Elements.m_li__().m_add__elemental2_dom_Node(this.f_filterAll__org_jboss_elemento_sample_j2cl_ApplicationElement_ = /**@type {HTMLAnchorElement}*/ ($Casts.$to(/**@type {HtmlContentBuilder<HTMLAnchorElement>}*/ ($Casts.$to(Elements.m_a__java_lang_String(Filter.f_ALL__org_jboss_elemento_sample_j2cl_Filter.m_fragment__()).m_textContent__java_lang_String("All"), HtmlContentBuilder)).m_element__(), HTMLAnchorElement_$Overlay))), HtmlContentBuilder))), HtmlContentBuilder)).m_add__org_jboss_elemento_IsElement(/**@type {HtmlContentBuilder<HTMLLIElement>}*/ ($Casts.$to(Elements.m_li__().m_add__elemental2_dom_Node(this.f_filterActive__org_jboss_elemento_sample_j2cl_ApplicationElement_ = /**@type {HTMLAnchorElement}*/ ($Casts.$to(/**@type {HtmlContentBuilder<HTMLAnchorElement>}*/ ($Casts.$to(Elements.m_a__java_lang_String(Filter.f_ACTIVE__org_jboss_elemento_sample_j2cl_Filter.m_fragment__()).m_textContent__java_lang_String("Active"), HtmlContentBuilder)).m_element__(), HTMLAnchorElement_$Overlay))), HtmlContentBuilder))), HtmlContentBuilder)).m_add__org_jboss_elemento_IsElement(/**@type {HtmlContentBuilder<HTMLLIElement>}*/ ($Casts.$to(Elements.m_li__().m_add__elemental2_dom_Node(this.f_filterCompleted__org_jboss_elemento_sample_j2cl_ApplicationElement_ = /**@type {HTMLAnchorElement}*/ ($Casts.$to(/**@type {HtmlContentBuilder<HTMLAnchorElement>}*/ ($Casts.$to(Elements.m_a__java_lang_String(Filter.f_COMPLETED__org_jboss_elemento_sample_j2cl_Filter.m_fragment__()).m_textContent__java_lang_String("Completed"), HtmlContentBuilder)).m_element__(), HTMLAnchorElement_$Overlay))), HtmlContentBuilder))), HtmlContentBuilder))), HtmlContentBuilder)).m_add__elemental2_dom_Node(this.f_clearCompleted__org_jboss_elemento_sample_j2cl_ApplicationElement_ = /**@type {HTMLButtonElement}*/ ($Casts.$to(/**@type {HtmlContentBuilder<HTMLButtonElement>}*/ ($Casts.$to(/**@type {HtmlContentBuilder<HTMLButtonElement>}*/ ($Casts.$to(Elements.m_button__().m_css__arrayOf_java_lang_String(/**@type {!Array<?string>}*/ ($Arrays.$init(["clear-completed"], j_l_String))), HtmlContentBuilder)).m_textContent__java_lang_String("Clear completed"), HtmlContentBuilder)).m_element__(), HTMLButtonElement_$Overlay))), HtmlContentBuilder)).m_element__()), HtmlContentBuilder)).m_element__();
  EventType.m_bind__elemental2_dom_EventTarget__org_jboss_elemento_EventType__org_jboss_elemento_EventCallbackFn(this.f_newTodo__org_jboss_elemento_sample_j2cl_ApplicationElement_, EventType.f_keydown__org_jboss_elemento_EventType, (arg0) =>{
   let arg0_1 = /**@type {KeyboardEvent}*/ ($Casts.$to(arg0, KeyboardEvent_$Overlay));
   this.m_newTodo__elemental2_dom_Event_$p_org_jboss_elemento_sample_j2cl_ApplicationElement(arg0_1);
  });
  EventType.m_bind__elemental2_dom_EventTarget__org_jboss_elemento_EventType__org_jboss_elemento_EventCallbackFn(this.f_toggleAll__org_jboss_elemento_sample_j2cl_ApplicationElement_, EventType.f_change__org_jboss_elemento_EventType, (/** Event */ event) =>{
   this.m_toggleAll___$p_org_jboss_elemento_sample_j2cl_ApplicationElement();
  });
  EventType.m_bind__elemental2_dom_EventTarget__org_jboss_elemento_EventType__org_jboss_elemento_EventCallbackFn(this.f_clearCompleted__org_jboss_elemento_sample_j2cl_ApplicationElement_, EventType.f_click__org_jboss_elemento_EventType, (event_1) =>{
   let event_2 = /**@type {MouseEvent}*/ ($Casts.$to(event_1, MouseEvent_$Overlay));
   this.m_clearCompleted___$p_org_jboss_elemento_sample_j2cl_ApplicationElement();
  });
  this.m_reset___$p_org_jboss_elemento_sample_j2cl_ApplicationElement();
  this.m_update___$pp_org_jboss_elemento_sample_j2cl();
 }
 
 m_reset___$p_org_jboss_elemento_sample_j2cl_ApplicationElement() {
  Elements.m_removeChildrenFrom__org_jboss_elemento_IsElement(this.f_list__org_jboss_elemento_sample_j2cl_ApplicationElement_);
  for (let $iterator = this.f_repository__org_jboss_elemento_sample_j2cl_ApplicationElement_.m_items__().m_iterator__(); $iterator.m_hasNext__(); ) {
   let item = /**@type {Object}*/ ($Casts.$to($iterator.m_next__(), Todo_$Overlay));
   this.f_list__org_jboss_elemento_sample_j2cl_ApplicationElement_.m_add__elemental2_dom_Node(TodoElement.$create__org_jboss_elemento_sample_j2cl_ApplicationElement__org_jboss_elemento_sample_j2cl_TodoRepository__org_jboss_elemento_sample_j2cl_Todo(this, this.f_repository__org_jboss_elemento_sample_j2cl_ApplicationElement_, item).m_element__());
  }
 }
 /** @override @return {HTMLElement} */
 m_element__() {
  return this.f_root__org_jboss_elemento_sample_j2cl_ApplicationElement_;
 }
 
 m_newTodo__elemental2_dom_Event_$p_org_jboss_elemento_sample_j2cl_ApplicationElement(/** Event */ event) {
  if (Key.f_Enter__org_jboss_elemento_Key.m_match__elemental2_dom_Event(event)) {
   let text = j_l_String.m_trim__java_lang_String(this.f_newTodo__org_jboss_elemento_sample_j2cl_ApplicationElement_.value);
   if (j_l_String.m_length__java_lang_String(text) != 0) {
    let item = this.f_repository__org_jboss_elemento_sample_j2cl_ApplicationElement_.m_add__java_lang_String(text);
    this.f_list__org_jboss_elemento_sample_j2cl_ApplicationElement_.m_add__org_jboss_elemento_IsElement(TodoElement.$create__org_jboss_elemento_sample_j2cl_ApplicationElement__org_jboss_elemento_sample_j2cl_TodoRepository__org_jboss_elemento_sample_j2cl_Todo(this, this.f_repository__org_jboss_elemento_sample_j2cl_ApplicationElement_, item));
    this.f_newTodo__org_jboss_elemento_sample_j2cl_ApplicationElement_.value = "";
    this.m_update___$pp_org_jboss_elemento_sample_j2cl();
   }
  }
 }
 
 m_toggleAll___$p_org_jboss_elemento_sample_j2cl_ApplicationElement() {
  for (let $iterator = Elements.m_children__org_jboss_elemento_IsElement(this.f_list__org_jboss_elemento_sample_j2cl_ApplicationElement_).m_iterator__(); $iterator.m_hasNext__(); ) {
   let li = /**@type {HTMLElement}*/ ($Casts.$to($iterator.m_next__(), HTMLElement_$Overlay));
   Elements.m_toggle__elemental2_dom_HTMLElement__java_lang_String__boolean(li, "completed", this.f_toggleAll__org_jboss_elemento_sample_j2cl_ApplicationElement_.checked);
   let cb = /**@type {HTMLInputElement}*/ ($Casts.$to(Elements.m_find__elemental2_dom_Node__org_jboss_elemento_By(li, By.m_classname__java_lang_String("toggle")), $Overlay));
   if (!$Equality.$same(cb, null)) {
    cb.checked = this.f_toggleAll__org_jboss_elemento_sample_j2cl_ApplicationElement_.checked;
   }
  }
  this.f_repository__org_jboss_elemento_sample_j2cl_ApplicationElement_.m_completeAll__boolean(this.f_toggleAll__org_jboss_elemento_sample_j2cl_ApplicationElement_.checked);
  this.m_update___$pp_org_jboss_elemento_sample_j2cl();
 }
 
 m_clearCompleted___$p_org_jboss_elemento_sample_j2cl_ApplicationElement() {
  let ids = /**@type {!HashSet<?string>}*/ (HashSet.$create__());
  for (let iterator = Elements.m_iterator__org_jboss_elemento_IsElement(this.f_list__org_jboss_elemento_sample_j2cl_ApplicationElement_); iterator.m_hasNext__(); ) {
   let li = /**@type {HTMLElement}*/ ($Casts.$to(iterator.m_next__(), HTMLElement_$Overlay));
   if (li.classList.contains("completed")) {
    let id = j_l_String.m_valueOf__java_lang_Object(/**@type {?string}*/ ($Casts.$to(JsPropertyMap_$Overlay.m_get__$devirt__jsinterop_base_JsPropertyMap__java_lang_String(li.dataset, "item"), j_l_String)));
    if (!$Equality.$same(id, null)) {
     ids.add(id);
    }
    iterator.m_remove__();
   }
  }
  this.f_repository__org_jboss_elemento_sample_j2cl_ApplicationElement_.m_removeAll__java_util_Set(ids);
  this.m_update___$pp_org_jboss_elemento_sample_j2cl();
 }
 
 m_filter__java_lang_String_$pp_org_jboss_elemento_sample_j2cl(/** ?string */ token) {
  this.f_filter__org_jboss_elemento_sample_j2cl_ApplicationElement_ = Filter.m_parseToken__java_lang_String(token);
  switch (this.f_filter__org_jboss_elemento_sample_j2cl_ApplicationElement_.ordinal()) {
   case Filter.$ordinal$f_ALL__org_jboss_elemento_sample_j2cl_Filter: 
    this.f_filterAll__org_jboss_elemento_sample_j2cl_ApplicationElement_.classList.add("selected");
    this.f_filterActive__org_jboss_elemento_sample_j2cl_ApplicationElement_.classList.remove("selected");
    this.f_filterCompleted__org_jboss_elemento_sample_j2cl_ApplicationElement_.classList.remove("selected");
    break;
   case Filter.$ordinal$f_ACTIVE__org_jboss_elemento_sample_j2cl_Filter: 
    this.f_filterAll__org_jboss_elemento_sample_j2cl_ApplicationElement_.classList.remove("selected");
    this.f_filterActive__org_jboss_elemento_sample_j2cl_ApplicationElement_.classList.add("selected");
    this.f_filterCompleted__org_jboss_elemento_sample_j2cl_ApplicationElement_.classList.remove("selected");
    break;
   case Filter.$ordinal$f_COMPLETED__org_jboss_elemento_sample_j2cl_Filter: 
    this.f_filterAll__org_jboss_elemento_sample_j2cl_ApplicationElement_.classList.remove("selected");
    this.f_filterActive__org_jboss_elemento_sample_j2cl_ApplicationElement_.classList.remove("selected");
    this.f_filterCompleted__org_jboss_elemento_sample_j2cl_ApplicationElement_.classList.add("selected");
    break;
   default: 
    break;
  }
  this.m_update___$pp_org_jboss_elemento_sample_j2cl();
 }
 
 m_update___$pp_org_jboss_elemento_sample_j2cl() {
  let activeCount = 0;
  let completedCount = 0;
  let size = /**@type {HTMLUListElement}*/ ($Casts.$to(this.f_list__org_jboss_elemento_sample_j2cl_ApplicationElement_.m_element__(), HTMLUListElement_$Overlay)).childElementCount;
  Elements.m_setVisible__elemental2_dom_HTMLElement__boolean(this.f_main__org_jboss_elemento_sample_j2cl_ApplicationElement_, size > 0);
  Elements.m_setVisible__elemental2_dom_HTMLElement__boolean(this.f_footer__org_jboss_elemento_sample_j2cl_ApplicationElement_, size > 0);
  for (let $iterator = Elements.m_children__org_jboss_elemento_IsElement(this.f_list__org_jboss_elemento_sample_j2cl_ApplicationElement_).m_iterator__(); $iterator.m_hasNext__(); ) {
   let li = /**@type {HTMLElement}*/ ($Casts.$to($iterator.m_next__(), HTMLElement_$Overlay));
   if (li.classList.contains("completed")) {
    completedCount++;
    Elements.m_setVisible__elemental2_dom_HTMLElement__boolean(li, !$Equality.$same(this.f_filter__org_jboss_elemento_sample_j2cl_ApplicationElement_, Filter.f_ACTIVE__org_jboss_elemento_sample_j2cl_Filter));
   } else {
    activeCount++;
    Elements.m_setVisible__elemental2_dom_HTMLElement__boolean(li, !$Equality.$same(this.f_filter__org_jboss_elemento_sample_j2cl_ApplicationElement_, Filter.f_COMPLETED__org_jboss_elemento_sample_j2cl_Filter));
   }
  }
  this.f_toggleAll__org_jboss_elemento_sample_j2cl_ApplicationElement_.checked = (size == completedCount);
  Elements.m_innerHtml__elemental2_dom_HTMLElement__org_gwtproject_safehtml_shared_SafeHtml(this.f_count__org_jboss_elemento_sample_j2cl_ApplicationElement_, Messages.m_items__int(activeCount));
  Elements.m_setVisible__elemental2_dom_HTMLElement__boolean(this.f_clearCompleted__org_jboss_elemento_sample_j2cl_ApplicationElement_, completedCount != 0);
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
  HTMLAnchorElement_$Overlay = goog.module.get('elemental2.dom.HTMLAnchorElement.$Overlay$impl');
  HTMLButtonElement_$Overlay = goog.module.get('elemental2.dom.HTMLButtonElement.$Overlay$impl');
  HTMLElement_$Overlay = goog.module.get('elemental2.dom.HTMLElement.$Overlay$impl');
  $Overlay = goog.module.get('elemental2.dom.HTMLInputElement.$Overlay$impl');
  HTMLLabelElement_$Overlay = goog.module.get('elemental2.dom.HTMLLabelElement.$Overlay$impl');
  HTMLUListElement_$Overlay = goog.module.get('elemental2.dom.HTMLUListElement.$Overlay$impl');
  KeyboardEvent_$Overlay = goog.module.get('elemental2.dom.KeyboardEvent.$Overlay$impl');
  MouseEvent_$Overlay = goog.module.get('elemental2.dom.MouseEvent.$Overlay$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  HashSet = goog.module.get('java.util.HashSet$impl');
  Consumer = goog.module.get('java.util.function.Consumer$impl');
  JsPropertyMap_$Overlay = goog.module.get('jsinterop.base.JsPropertyMap.$Overlay$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  By = goog.module.get('org.jboss.elemento.By$impl');
  Elements = goog.module.get('org.jboss.elemento.Elements$impl');
  EventType = goog.module.get('org.jboss.elemento.EventType$impl');
  HtmlContentBuilder = goog.module.get('org.jboss.elemento.HtmlContentBuilder$impl');
  InputBuilder = goog.module.get('org.jboss.elemento.InputBuilder$impl');
  InputType = goog.module.get('org.jboss.elemento.InputType$impl');
  Key = goog.module.get('org.jboss.elemento.Key$impl');
  Filter = goog.module.get('org.jboss.elemento.sample.j2cl.Filter$impl');
  Messages = goog.module.get('org.jboss.elemento.sample.j2cl.Messages$impl');
  Todo_$Overlay = goog.module.get('org.jboss.elemento.sample.j2cl.Todo.$Overlay$impl');
  TodoElement = goog.module.get('org.jboss.elemento.sample.j2cl.TodoElement$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
 
}
$Util.$setClassMetadata(ApplicationElement, 'org.jboss.elemento.sample.j2cl.ApplicationElement');

IsElement.$markImplementor(ApplicationElement);

exports = ApplicationElement; 
//# sourceMappingURL=ApplicationElement.js.map
