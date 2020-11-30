goog.module('org.jboss.elemento.InputBuilder$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const ElementBuilder = goog.require('org.jboss.elemento.ElementBuilder$impl');

let $Overlay = goog.forwardDeclare('elemental2.dom.HTMLInputElement.$Overlay$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @template E
 * @extends {ElementBuilder<E, InputBuilder<E>>}
  */
class InputBuilder extends ElementBuilder {
 /** @protected */
 constructor() {
  super();
 }
 /** @template E @return {!InputBuilder<E>} */
 static $create__elemental2_dom_HTMLInputElement(/** E */ element) {
  InputBuilder.$clinit();
  let $instance = new InputBuilder();
  $instance.$ctor__org_jboss_elemento_InputBuilder__elemental2_dom_HTMLInputElement(element);
  return $instance;
 }
 
 $ctor__org_jboss_elemento_InputBuilder__elemental2_dom_HTMLInputElement(/** E */ element) {
  this.$ctor__org_jboss_elemento_ElementBuilder__elemental2_dom_HTMLElement(element);
 }
 /** @override @return {InputBuilder<E>} */
 m_that__() {
  return this;
 }
 /** @return {InputBuilder<E>} */
 m_autofocus__boolean(/** boolean */ autofocus) {
  /**@type {HTMLInputElement}*/ ($Casts.$to(this.m_element__(), $Overlay)).autofocus = autofocus;
  return this.m_that__();
 }
 /** @return {InputBuilder<E>} */
 m_autocomplete__java_lang_String(/** ?string */ autocomplete) {
  /**@type {HTMLInputElement}*/ ($Casts.$to(this.m_element__(), $Overlay)).autocomplete = autocomplete;
  return this.m_that__();
 }
 /** @return {InputBuilder<E>} */
 m_checked__boolean(/** boolean */ checked) {
  /**@type {HTMLInputElement}*/ ($Casts.$to(this.m_element__(), $Overlay)).checked = checked;
  return this.m_that__();
 }
 /** @return {InputBuilder<E>} */
 m_indeterminate__boolean(/** boolean */ indeterminate) {
  /**@type {HTMLInputElement}*/ ($Casts.$to(this.m_element__(), $Overlay)).indeterminate = indeterminate;
  return this.m_that__();
 }
 /** @return {InputBuilder<E>} */
 m_readOnly__boolean(/** boolean */ readOnly) {
  /**@type {HTMLInputElement}*/ ($Casts.$to(this.m_element__(), $Overlay)).readOnly = readOnly;
  return this.m_that__();
 }
 /** @return {InputBuilder<E>} */
 m_disabled__boolean(/** boolean */ disabled) {
  /**@type {HTMLInputElement}*/ ($Casts.$to(this.m_element__(), $Overlay)).disabled = disabled;
  return this.m_that__();
 }
 /** @return {InputBuilder<E>} */
 m_required__boolean(/** boolean */ required) {
  /**@type {HTMLInputElement}*/ ($Casts.$to(this.m_element__(), $Overlay)).required = required;
  return this.m_that__();
 }
 /** @return {InputBuilder<E>} */
 m_name__java_lang_String(/** ?string */ name) {
  /**@type {HTMLInputElement}*/ ($Casts.$to(this.m_element__(), $Overlay)).name = name;
  return this.m_that__();
 }
 /** @return {InputBuilder<E>} */
 m_min__int(/** number */ min) {
  return this.m_min__java_lang_String(j_l_String.m_valueOf__int(min));
 }
 /** @return {InputBuilder<E>} */
 m_min__java_lang_String(/** ?string */ min) {
  /**@type {HTMLInputElement}*/ ($Casts.$to(this.m_element__(), $Overlay)).min = min;
  return this.m_that__();
 }
 /** @return {InputBuilder<E>} */
 m_max__int(/** number */ max) {
  return this.m_max__java_lang_String(j_l_String.m_valueOf__int(max));
 }
 /** @return {InputBuilder<E>} */
 m_max__java_lang_String(/** ?string */ max) {
  /**@type {HTMLInputElement}*/ ($Casts.$to(this.m_element__(), $Overlay)).max = max;
  return this.m_that__();
 }
 /** @return {InputBuilder<E>} */
 m_placeholder__java_lang_String(/** ?string */ placeholder) {
  /**@type {HTMLInputElement}*/ ($Casts.$to(this.m_element__(), $Overlay)).placeholder = placeholder;
  return this.m_that__();
 }
 /** @return {InputBuilder<E>} */
 m_tabIndex__int(/** number */ tabIndex) {
  /**@type {HTMLInputElement}*/ ($Casts.$to(this.m_element__(), $Overlay)).tabIndex = tabIndex;
  return this.m_that__();
 }
 /** @return {InputBuilder<E>} */
 m_multiple__boolean(/** boolean */ multiple) {
  /**@type {HTMLInputElement}*/ ($Casts.$to(this.m_element__(), $Overlay)).multiple = multiple;
  return this.m_that__();
 }
 /** @return {InputBuilder<E>} */
 m_accept__java_lang_String(/** ?string */ accept) {
  /**@type {HTMLInputElement}*/ ($Casts.$to(this.m_element__(), $Overlay)).accept = accept;
  return this.m_that__();
 }
 
 static $clinit() {
  InputBuilder.$clinit = () =>{};
  InputBuilder.$loadModules();
  ElementBuilder.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof InputBuilder;
 }
 
 static $loadModules() {
  $Overlay = goog.module.get('elemental2.dom.HTMLInputElement.$Overlay$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
 
}
$Util.$setClassMetadata(InputBuilder, 'org.jboss.elemento.InputBuilder');

exports = InputBuilder; 
//# sourceMappingURL=InputBuilder.js.map
