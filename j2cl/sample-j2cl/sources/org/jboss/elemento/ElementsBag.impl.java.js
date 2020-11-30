goog.module('org.jboss.elemento.ElementsBag$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const TypedBuilder = goog.require('org.jboss.elemento.TypedBuilder$impl');

let $Overlay = goog.forwardDeclare('elemental2.dom.HTMLElement.$Overlay$impl');
let Iterable = goog.forwardDeclare('java.lang.Iterable$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let IterableImpl = goog.forwardDeclare('org.jboss.elemento.ElementsBag.IterableImpl$impl');
let IsElement = goog.forwardDeclare('org.jboss.elemento.IsElement$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @implements {TypedBuilder<Iterable<HTMLElement>, ElementsBag>}
  */
class ElementsBag extends j_l_Object {
 /** @protected */
 constructor() {
  super();
  /**@type {IterableImpl}*/
  this.f_iterable__org_jboss_elemento_ElementsBag_;
 }
 /** @return {!ElementsBag} */
 static $create__() {
  ElementsBag.$clinit();
  let $instance = new ElementsBag();
  $instance.$ctor__org_jboss_elemento_ElementsBag__();
  return $instance;
 }
 
 $ctor__org_jboss_elemento_ElementsBag__() {
  this.$ctor__java_lang_Object__();
  this.f_iterable__org_jboss_elemento_ElementsBag_ = IterableImpl.$create__();
 }
 /** @override @return {ElementsBag} */
 m_that__() {
  return this;
 }
 /** @return {Iterable<HTMLElement>} */
 m_elements__() {
  return this.f_iterable__org_jboss_elemento_ElementsBag_;
 }
 /** @return {ElementsBag} */
 m_add__elemental2_dom_HTMLElement(/** HTMLElement */ element) {
  this.f_iterable__org_jboss_elemento_ElementsBag_.f_elements__org_jboss_elemento_ElementsBag_IterableImpl.push(element);
  return this.m_that__();
 }
 /** @return {ElementsBag} */
 m_add__org_jboss_elemento_IsElement(/** IsElement<?> */ element) {
  if (!$Equality.$same(element, null)) {
   return this.m_add__elemental2_dom_HTMLElement(element.m_element__());
  }
  return this.m_that__();
 }
 /** @return {ElementsBag} */
 m_addAll__arrayOf_elemental2_dom_HTMLElement(/** Array<HTMLElement> */ elements) {
  for (let $array = elements, $index = 0; $index < $array.length; $index++) {
   let element = $array[$index];
   this.m_add__elemental2_dom_HTMLElement(element);
  }
  return this.m_that__();
 }
 /** @return {ElementsBag} */
 m_addAll__arrayOf_org_jboss_elemento_IsElement(/** Array<IsElement<?>> */ elements) {
  for (let $array = elements, $index = 0; $index < $array.length; $index++) {
   let element = $array[$index];
   if (!$Equality.$same(element, null)) {
    this.m_add__elemental2_dom_HTMLElement(element.m_element__());
   }
  }
  return this.m_that__();
 }
 /** @return {ElementsBag} */
 m_addAll__java_lang_Iterable(/** Iterable<?> */ elements) {
  for (let $iterator = elements.m_iterator__(); $iterator.m_hasNext__(); ) {
   let element = $iterator.m_next__();
   if ($Overlay.$isInstance(element)) {
    this.m_add__elemental2_dom_HTMLElement(/**@type {HTMLElement}*/ ($Casts.$to(element, $Overlay)));
   } else if (IsElement.$isInstance(element)) {
    this.m_add__elemental2_dom_HTMLElement(/**@type {IsElement}*/ ($Casts.$to(element, IsElement)).m_element__());
   }
  }
  return this.m_that__();
 }
 
 static $clinit() {
  ElementsBag.$clinit = () =>{};
  ElementsBag.$loadModules();
  j_l_Object.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof ElementsBag;
 }
 
 static $loadModules() {
  $Overlay = goog.module.get('elemental2.dom.HTMLElement.$Overlay$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  IterableImpl = goog.module.get('org.jboss.elemento.ElementsBag.IterableImpl$impl');
  IsElement = goog.module.get('org.jboss.elemento.IsElement$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
 
}
$Util.$setClassMetadata(ElementsBag, 'org.jboss.elemento.ElementsBag');

TypedBuilder.$markImplementor(ElementsBag);

exports = ElementsBag; 
//# sourceMappingURL=ElementsBag.js.map
