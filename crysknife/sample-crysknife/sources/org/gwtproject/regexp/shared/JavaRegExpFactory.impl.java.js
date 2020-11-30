goog.module('org.gwtproject.regexp.shared.JavaRegExpFactory$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const NativeRegExpFactory = goog.require('org.gwtproject.regexp.shared.NativeRegExpFactory$impl');

class JavaRegExpFactory extends NativeRegExpFactory {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!JavaRegExpFactory} */
 static $create__() {
  JavaRegExpFactory.$clinit();
  let $instance = new JavaRegExpFactory();
  $instance.$ctor__org_gwtproject_regexp_shared_JavaRegExpFactory__();
  return $instance;
 }
 
 $ctor__org_gwtproject_regexp_shared_JavaRegExpFactory__() {
  this.$ctor__org_gwtproject_regexp_shared_NativeRegExpFactory__();
 }
 
 static $clinit() {
  JavaRegExpFactory.$clinit = () =>{};
  JavaRegExpFactory.$loadModules();
  NativeRegExpFactory.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof JavaRegExpFactory;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadata(JavaRegExpFactory, 'org.gwtproject.regexp.shared.JavaRegExpFactory');

exports = JavaRegExpFactory; 
//# sourceMappingURL=JavaRegExpFactory.js.map
