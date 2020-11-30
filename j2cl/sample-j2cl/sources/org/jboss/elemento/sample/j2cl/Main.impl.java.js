goog.module('org.jboss.elemento.sample.j2cl.Main$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let DomGlobal_$Overlay = goog.forwardDeclare('elemental2.dom.DomGlobal.$Overlay$impl');
let Event_$Overlay = goog.forwardDeclare('elemental2.dom.Event.$Overlay$impl');
let HTMLBodyElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLBodyElement.$Overlay$impl');
let $Overlay = goog.forwardDeclare('elemental2.dom.HashChangeEvent.$Overlay$impl');
let Elements = goog.forwardDeclare('org.jboss.elemento.Elements$impl');
let EventType = goog.forwardDeclare('org.jboss.elemento.EventType$impl');
let HtmlContentBuilder = goog.forwardDeclare('org.jboss.elemento.HtmlContentBuilder$impl');
let ApplicationElement = goog.forwardDeclare('org.jboss.elemento.sample.j2cl.ApplicationElement$impl');
let FooterElement = goog.forwardDeclare('org.jboss.elemento.sample.j2cl.FooterElement$impl');
let TodoRepository = goog.forwardDeclare('org.jboss.elemento.sample.j2cl.TodoRepository$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

class Main extends j_l_Object {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!Main} */
 static $create__() {
  Main.$clinit();
  let $instance = new Main();
  $instance.$ctor__org_jboss_elemento_sample_j2cl_Main__();
  return $instance;
 }
 
 $ctor__org_jboss_elemento_sample_j2cl_Main__() {
  this.$ctor__java_lang_Object__();
 }
 
 m_onModuleLoad__() {
  let repository = TodoRepository.$create__();
  let application = ApplicationElement.$create__org_jboss_elemento_sample_j2cl_TodoRepository(repository);
  let footer = FooterElement.$create__();
  /**@type {HtmlContentBuilder<HTMLBodyElement>}*/ ($Casts.$to(Elements.m_body__().m_add__org_jboss_elemento_IsElement(application), HtmlContentBuilder)).m_add__org_jboss_elemento_IsElement(footer);
  EventType.m_bind__elemental2_dom_EventTarget__org_jboss_elemento_EventType__org_jboss_elemento_EventCallbackFn(goog.global.window, EventType.f_hashchange__org_jboss_elemento_EventType, (event) =>{
   let event_1 = /**@type {HashChangeEvent}*/ ($Casts.$to(event, $Overlay));
   application.m_filter__java_lang_String_$pp_org_jboss_elemento_sample_j2cl(DomGlobal_$Overlay.f_location__elemental2_dom_DomGlobal_$Overlay.hash);
  });
  application.m_filter__java_lang_String_$pp_org_jboss_elemento_sample_j2cl(DomGlobal_$Overlay.f_location__elemental2_dom_DomGlobal_$Overlay.hash);
 }
 
 static $clinit() {
  Main.$clinit = () =>{};
  Main.$loadModules();
  j_l_Object.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Main;
 }
 
 static $loadModules() {
  DomGlobal_$Overlay = goog.module.get('elemental2.dom.DomGlobal.$Overlay$impl');
  $Overlay = goog.module.get('elemental2.dom.HashChangeEvent.$Overlay$impl');
  Elements = goog.module.get('org.jboss.elemento.Elements$impl');
  EventType = goog.module.get('org.jboss.elemento.EventType$impl');
  HtmlContentBuilder = goog.module.get('org.jboss.elemento.HtmlContentBuilder$impl');
  ApplicationElement = goog.module.get('org.jboss.elemento.sample.j2cl.ApplicationElement$impl');
  FooterElement = goog.module.get('org.jboss.elemento.sample.j2cl.FooterElement$impl');
  TodoRepository = goog.module.get('org.jboss.elemento.sample.j2cl.TodoRepository$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
 
}
$Util.$setClassMetadata(Main, 'org.jboss.elemento.sample.j2cl.Main');

/* NATIVE.JS EPILOG */

const org_jboss_elemento_sample_j2cl_Main = Main;

setTimeout(function(){
    var ep = Main.$create__();
    ep.m_onModuleLoad__()
}, 0);



exports = Main; 
//# sourceMappingURL=Main.js.map
