goog.module('io.crysknife.client.internal.AbstractEventFactory$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let EventHolder = goog.forwardDeclare('io.crysknife.client.internal.AbstractEventFactory.EventHolder$impl');
let Class = goog.forwardDeclare('java.lang.Class$impl');
let HashMap = goog.forwardDeclare('java.util.HashMap$impl');
let Map = goog.forwardDeclare('java.util.Map$impl');
let Event = goog.forwardDeclare('javax.enterprise.event.Event$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @abstract
  */
class AbstractEventFactory extends j_l_Object {
 /** @protected */
 constructor() {
  super();
  /**@type {Map<Class, EventHolder>}*/
  this.f_holder__io_crysknife_client_internal_AbstractEventFactory;
 }
 
 $ctor__io_crysknife_client_internal_AbstractEventFactory__() {
  this.$ctor__java_lang_Object__();
  this.$init___$p_io_crysknife_client_internal_AbstractEventFactory();
 }
 /** @template T @return {Event<T>} */
 m_get__java_lang_Class(/** Class */ type) {
  if (!this.f_holder__io_crysknife_client_internal_AbstractEventFactory.containsKey(type)) {
   this.f_holder__io_crysknife_client_internal_AbstractEventFactory.put(type, EventHolder.$create__io_crysknife_client_internal_AbstractEventFactory__java_lang_Class(this, type));
  }
  return /**@type {EventHolder}*/ ($Casts.$to(this.f_holder__io_crysknife_client_internal_AbstractEventFactory.get(type), EventHolder));
 }
 /** @private */
 $init___$p_io_crysknife_client_internal_AbstractEventFactory() {
  this.f_holder__io_crysknife_client_internal_AbstractEventFactory = /**@type {!HashMap<Class, EventHolder>}*/ (HashMap.$create__());
 }
 
 static $clinit() {
  AbstractEventFactory.$clinit = () =>{};
  AbstractEventFactory.$loadModules();
  j_l_Object.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof AbstractEventFactory;
 }
 
 static $loadModules() {
  EventHolder = goog.module.get('io.crysknife.client.internal.AbstractEventFactory.EventHolder$impl');
  HashMap = goog.module.get('java.util.HashMap$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
 
}
$Util.$setClassMetadata(AbstractEventFactory, 'io.crysknife.client.internal.AbstractEventFactory');

exports = AbstractEventFactory; 
//# sourceMappingURL=AbstractEventFactory.js.map
