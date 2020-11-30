goog.module('org.jboss.elemento.Attachable$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let HTMLElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLElement.$Overlay$impl');
let $Overlay = goog.forwardDeclare('elemental2.dom.MutationRecord.$Overlay$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let $LambdaAdaptor = goog.forwardDeclare('org.jboss.elemento.Attachable.$LambdaAdaptor$impl');
let Elements = goog.forwardDeclare('org.jboss.elemento.Elements$impl');
let IsElement = goog.forwardDeclare('org.jboss.elemento.IsElement$impl');
let ObserverCallback = goog.forwardDeclare('org.jboss.elemento.ObserverCallback$impl');

/**
 * @interface
 */
class Attachable {
 
 static m_register__elemental2_dom_HTMLElement__org_jboss_elemento_Attachable(/** HTMLElement */ element, /** Attachable */ attachable) {
  Attachable.$clinit();
  if (!$Equality.$same(element, null)) {
   Elements.m_onAttach__elemental2_dom_HTMLElement__org_jboss_elemento_ObserverCallback(element, ObserverCallback.$adapt((/** MutationRecord */ arg0) =>{
    attachable.m_attach__elemental2_dom_MutationRecord(arg0);
   }));
   Elements.m_onDetach__elemental2_dom_HTMLElement__org_jboss_elemento_ObserverCallback(element, ObserverCallback.$adapt((/** MutationRecord */ arg0_1) =>{
    attachable.m_detach__elemental2_dom_MutationRecord(arg0_1);
   }));
  }
 }
 /** @template E */
 static m_register__org_jboss_elemento_IsElement__org_jboss_elemento_Attachable(/** IsElement<E> */ element, /** Attachable */ attachable) {
  Attachable.$clinit();
  if (!$Equality.$same(element, null)) {
   Attachable.m_register__elemental2_dom_HTMLElement__org_jboss_elemento_Attachable(element.m_element__(), attachable);
  }
 }
 /** @abstract */
 m_attach__elemental2_dom_MutationRecord(/** MutationRecord */ mutationRecord) {}
 /** @abstract */
 m_detach__elemental2_dom_MutationRecord(/** MutationRecord */ mutationRecord) {}
 /** @return {Attachable} */
 static $adapt(/** ?function(MutationRecord):void */ fn) {
  Attachable.$clinit();
  return new $LambdaAdaptor(fn);
 }
 
 static m_detach__$default__org_jboss_elemento_Attachable__elemental2_dom_MutationRecord(/** !Attachable */ $thisArg, /** MutationRecord */ mutationRecord) {
  Attachable.$clinit();
 }
 
 static $clinit() {
  Attachable.$clinit = () =>{};
  Attachable.$loadModules();
 }
 
 static $markImplementor(/** Function*/ ctor)
 {
  ctor.prototype.$implements__org_jboss_elemento_Attachable = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_jboss_elemento_Attachable;
 }
 
 static $loadModules() {
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  $LambdaAdaptor = goog.module.get('org.jboss.elemento.Attachable.$LambdaAdaptor$impl');
  Elements = goog.module.get('org.jboss.elemento.Elements$impl');
  ObserverCallback = goog.module.get('org.jboss.elemento.ObserverCallback$impl');
 }
 
}
$Util.$setClassMetadataForInterface(Attachable, 'org.jboss.elemento.Attachable');

Attachable.$markImplementor(/** @type {Function} */ (Attachable));

exports = Attachable; 
//# sourceMappingURL=Attachable.js.map
