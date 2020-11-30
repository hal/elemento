goog.module('org.jboss.elemento.sample.crysknife.ApplicationElement_Factory.ApplicationElement$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const ApplicationElement = goog.require('org.jboss.elemento.sample.crysknife.ApplicationElement$impl');

let DomGlobal_$Overlay = goog.forwardDeclare('elemental2.dom.DomGlobal.$Overlay$impl');
let $Overlay = goog.forwardDeclare('elemental2.dom.Element.$Overlay$impl');
let HTMLElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLElement.$Overlay$impl');
let ApplicationElement__Factory = goog.forwardDeclare('org.jboss.elemento.sample.crysknife.ApplicationElement_Factory$impl');
let TodoRepository = goog.forwardDeclare('org.jboss.elemento.sample.crysknife.TodoRepository$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

class ApplicationElement__Factory_ApplicationElement extends ApplicationElement {
 /** @protected */
 constructor() {
  super();
  /**@type {ApplicationElement__Factory}*/
  this.f_$outer_this__org_jboss_elemento_sample_crysknife_ApplicationElement_Factory_ApplicationElement;
  /**@type {HTMLElement}*/
  this.f_root__org_jboss_elemento_sample_crysknife_ApplicationElement_Factory_ApplicationElement_;
 }
 /** @return {!ApplicationElement__Factory_ApplicationElement} */
 static $create__org_jboss_elemento_sample_crysknife_ApplicationElement_Factory__org_jboss_elemento_sample_crysknife_TodoRepository(/** ApplicationElement__Factory */ $outer_this, /** TodoRepository */ repository) {
  ApplicationElement__Factory_ApplicationElement.$clinit();
  let $instance = new ApplicationElement__Factory_ApplicationElement();
  $instance.$ctor__org_jboss_elemento_sample_crysknife_ApplicationElement_Factory_ApplicationElement__org_jboss_elemento_sample_crysknife_ApplicationElement_Factory__org_jboss_elemento_sample_crysknife_TodoRepository($outer_this, repository);
  return $instance;
 }
 
 $ctor__org_jboss_elemento_sample_crysknife_ApplicationElement_Factory_ApplicationElement__org_jboss_elemento_sample_crysknife_ApplicationElement_Factory__org_jboss_elemento_sample_crysknife_TodoRepository(/** ApplicationElement__Factory */ $outer_this, /** TodoRepository */ repository) {
  this.f_$outer_this__org_jboss_elemento_sample_crysknife_ApplicationElement_Factory_ApplicationElement = $outer_this;
  this.$ctor__org_jboss_elemento_sample_crysknife_ApplicationElement__org_jboss_elemento_sample_crysknife_TodoRepository(repository);
  this.$init___$p_org_jboss_elemento_sample_crysknife_ApplicationElement_Factory_ApplicationElement();
  $Overlay.m_setAttribute__$devirt__elemental2_dom_Element__java_lang_String__java_lang_String(this.f_root__org_jboss_elemento_sample_crysknife_ApplicationElement_Factory_ApplicationElement_, "class", "todoapp");
  this.f_root__org_jboss_elemento_sample_crysknife_ApplicationElement_Factory_ApplicationElement_.innerHTML = "<header class=\"header\">  <h1>todos</h1>  <input data-field=\"newTodo\" class=\"new-todo\" placeholder=\"What needs to be done?\" autofocus> </header> <section data-field=\"main\" class=\"main\">  <input data-field=\"toggleAll\" class=\"toggle-all\" id=\"toggle-all\" type=\"checkbox\">  <label for=\"toggle-all\">Mark all as complete</label>  <ul data-field=\"list\" class=\"todo-list\">   <li>    <div class=\"view\">     <input class=\"toggle\" type=\"checkbox\" checked>     <label>Taste Elemento</label>     <button class=\"destroy\"></button>    </div> <input class=\"edit\" value=\"Taste Elemento\"> </li>   <li class=\"completed\">    <div class=\"view\">     <input class=\"toggle\" type=\"checkbox\">     <label>Rule the web</label>     <button class=\"destroy\"></button>    </div> <input class=\"edit\" value=\"Rule the web\"> </li>  </ul> </section> <footer data-field=\"footer\" class=\"footer\">  <span data-field=\"count\" class=\"todo-count\"><strong>0</strong> item left</span>  <ul class=\"filters\">   <li> <a data-field=\"filterAll\" href=\"#/\">All</a> </li>   <li> <a data-field=\"filterActive\" href=\"#/active\">Active</a> </li>   <li> <a data-field=\"filterCompleted\" href=\"#/completed\">Completed</a> </li>  </ul>  <button data-field=\"clearCompleted\" class=\"clear-completed\">Clear completed</button> </footer>";
 }
 /** @override @return {HTMLElement} */
 m_element__() {
  return /**@type {HTMLElement}*/ (this.f_root__org_jboss_elemento_sample_crysknife_ApplicationElement_Factory_ApplicationElement_);
 }
 /** @private */
 $init___$p_org_jboss_elemento_sample_crysknife_ApplicationElement_Factory_ApplicationElement() {
  this.f_root__org_jboss_elemento_sample_crysknife_ApplicationElement_Factory_ApplicationElement_ = /**@type {HTMLElement}*/ ($Casts.$to(DomGlobal_$Overlay.f_document__elemental2_dom_DomGlobal_$Overlay.createElement("section"), HTMLElement_$Overlay));
 }
 
 static $clinit() {
  ApplicationElement__Factory_ApplicationElement.$clinit = () =>{};
  ApplicationElement__Factory_ApplicationElement.$loadModules();
  ApplicationElement.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof ApplicationElement__Factory_ApplicationElement;
 }
 
 static $loadModules() {
  DomGlobal_$Overlay = goog.module.get('elemental2.dom.DomGlobal.$Overlay$impl');
  $Overlay = goog.module.get('elemental2.dom.Element.$Overlay$impl');
  HTMLElement_$Overlay = goog.module.get('elemental2.dom.HTMLElement.$Overlay$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
 
}
$Util.$setClassMetadata(ApplicationElement__Factory_ApplicationElement, 'org.jboss.elemento.sample.crysknife.ApplicationElement_Factory$ApplicationElement');

exports = ApplicationElement__Factory_ApplicationElement; 
//# sourceMappingURL=ApplicationElement_Factory$ApplicationElement.js.map
