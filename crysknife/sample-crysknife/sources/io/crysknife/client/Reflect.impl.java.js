goog.module('io.crysknife.client.Reflect$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let reflect = goog.forwardDeclare('goog.reflect');

class Reflect extends j_l_Object {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!Reflect} */
 static $create__() {
  Reflect.$clinit();
  let $instance = new Reflect();
  $instance.$ctor__io_crysknife_client_Reflect__();
  return $instance;
 }
 
 $ctor__io_crysknife_client_Reflect__() {
  this.$ctor__java_lang_Object__();
 }
 
 static $clinit() {
  Reflect.$clinit = () =>{};
  Reflect.$loadModules();
  j_l_Object.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Reflect;
 }
 
 static $loadModules() {
  reflect = goog.module.get('goog.reflect');
 }
 
}
$Util.$setClassMetadata(Reflect, 'io.crysknife.client.Reflect');

exports = Reflect; 
//# sourceMappingURL=Reflect.js.map
