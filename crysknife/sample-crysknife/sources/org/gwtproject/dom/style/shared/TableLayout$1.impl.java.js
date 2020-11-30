goog.module('org.gwtproject.dom.style.shared.TableLayout.$1$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const TableLayout = goog.require('org.gwtproject.dom.style.shared.TableLayout$impl');

let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

class $1 extends TableLayout {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!$1} */
 static $create__java_lang_String__int(/** ?string */ $name, /** number */ $ordinal) {
  $1.$clinit();
  let $instance = new $1();
  $instance.$ctor__org_gwtproject_dom_style_shared_TableLayout_1__java_lang_String__int($name, $ordinal);
  return $instance;
 }
 
 $ctor__org_gwtproject_dom_style_shared_TableLayout_1__java_lang_String__int(/** ?string */ $name, /** number */ $ordinal) {
  this.$ctor__org_gwtproject_dom_style_shared_TableLayout__java_lang_String__int($name, $ordinal);
 }
 /** @override @return {?string} */
 m_getCssName__() {
  return "auto";
 }
 //Bridge method.
 /** @override @return {number} */
 m_compareTo__java_lang_Object(/** TableLayout */ arg0) {
  return super.compareTo(/**@type {TableLayout}*/ ($Casts.$to(arg0, TableLayout)));
 }
 
 static $clinit() {
  $1.$clinit = () =>{};
  $1.$loadModules();
  TableLayout.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof $1;
 }
 
 static $loadModules() {
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
 
}
$Util.$setClassMetadata($1, 'org.gwtproject.dom.style.shared.TableLayout$1');

exports = $1; 
//# sourceMappingURL=TableLayout$1.js.map
