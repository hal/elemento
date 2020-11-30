goog.module('io.crysknife.client.internal.collections.Multimap$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let ArrayList = goog.forwardDeclare('java.util.ArrayList$impl');
let Collection = goog.forwardDeclare('java.util.Collection$impl');
let Collections = goog.forwardDeclare('java.util.Collections$impl');
let HashMap = goog.forwardDeclare('java.util.HashMap$impl');
let HashSet = goog.forwardDeclare('java.util.HashSet$impl');
let List = goog.forwardDeclare('java.util.List$impl');
let Map = goog.forwardDeclare('java.util.Map$impl');
let Set = goog.forwardDeclare('java.util.Set$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @template K, V
  */
class Multimap extends j_l_Object {
 /** @protected */
 constructor() {
  super();
  /**@type {Map<K, List<V>>}*/
  this.f_holder__io_crysknife_client_internal_collections_Multimap;
 }
 //Factory method corresponding to constructor 'Multimap(Map)'.
 /** @template K, V @return {!Multimap<K, V>} */
 static $create__java_util_Map(/** Map<K, List<V>> */ holder) {
  Multimap.$clinit();
  let $instance = new Multimap();
  $instance.$ctor__io_crysknife_client_internal_collections_Multimap__java_util_Map(holder);
  return $instance;
 }
 //Initialization from constructor 'Multimap(Map)'.
 
 $ctor__io_crysknife_client_internal_collections_Multimap__java_util_Map(/** Map<K, List<V>> */ holder) {
  this.$ctor__java_lang_Object__();
  this.f_holder__io_crysknife_client_internal_collections_Multimap = holder;
 }
 //Factory method corresponding to constructor 'Multimap()'.
 /** @template K, V @return {!Multimap<K, V>} */
 static $create__() {
  Multimap.$clinit();
  let $instance = new Multimap();
  $instance.$ctor__io_crysknife_client_internal_collections_Multimap__();
  return $instance;
 }
 //Initialization from constructor 'Multimap()'.
 
 $ctor__io_crysknife_client_internal_collections_Multimap__() {
  this.$ctor__io_crysknife_client_internal_collections_Multimap__java_util_Map(/**@type {!HashMap<K, List<V>>}*/ (HashMap.$create__()));
 }
 
 m_put__java_lang_Object__java_lang_Object(/** K */ key, /** V */ value) {
  if (!this.f_holder__io_crysknife_client_internal_collections_Multimap.containsKey(key)) {
   this.f_holder__io_crysknife_client_internal_collections_Multimap.put(key, /**@type {!ArrayList<V>}*/ (ArrayList.$create__()));
  }
  /**@type {List<V>}*/ ($Casts.$to(this.f_holder__io_crysknife_client_internal_collections_Multimap.get(key), List)).add(value);
 }
 /** @return {Collection<V>} */
 m_values__() {
  let result = /**@type {!HashSet<V>}*/ (HashSet.$create__());
  for (let $iterator = this.f_holder__io_crysknife_client_internal_collections_Multimap.values().m_iterator__(); $iterator.m_hasNext__(); ) {
   let values = /**@type {List<V>}*/ ($Casts.$to($iterator.m_next__(), List));
   for (let $iterator_1 = values.m_iterator__(); $iterator_1.m_hasNext__(); ) {
    let value = $iterator_1.m_next__();
    result.add(value);
   }
  }
  return result;
 }
 /** @return {List<V>} */
 m_get__java_lang_Object(/** K */ key) {
  if (!this.f_holder__io_crysknife_client_internal_collections_Multimap.containsKey(key)) {
   return Collections.f_EMPTY_LIST__java_util_Collections;
  }
  return /**@type {List<V>}*/ ($Casts.$to(this.f_holder__io_crysknife_client_internal_collections_Multimap.get(key), List));
 }
 /** @return {boolean} */
 m_isEmpty__() {
  return this.f_holder__io_crysknife_client_internal_collections_Multimap.isEmpty();
 }
 
 m_remove__java_lang_Object__java_lang_Object(/** K */ key, /** V */ value) {
  if (this.f_holder__io_crysknife_client_internal_collections_Multimap.containsKey(key)) {
   /**@type {List<V>}*/ ($Casts.$to(this.f_holder__io_crysknife_client_internal_collections_Multimap.get(key), List)).remove(value);
  }
 }
 /** @return {boolean} */
 m_containsKey__java_lang_Object(/** K */ key) {
  return this.f_holder__io_crysknife_client_internal_collections_Multimap.containsKey(key);
 }
 /** @return {Collection<K>} */
 m_keys__() {
  return this.f_holder__io_crysknife_client_internal_collections_Multimap.keySet();
 }
 /** @return {Set<K>} */
 m_keySet__() {
  return this.f_holder__io_crysknife_client_internal_collections_Multimap.keySet();
 }
 /** @return {boolean} */
 m_containsEntry__java_lang_Object__java_lang_Object(/** K */ key, /** V */ value) {
  return /**@type {List<V>}*/ ($Casts.$to(this.f_holder__io_crysknife_client_internal_collections_Multimap.get(key), List)).contains(value);
 }
 
 m_clear__() {
  this.f_holder__io_crysknife_client_internal_collections_Multimap.clear();
 }
 
 m_removeAll__java_lang_Object(/** K */ key) {
  /**@type {List<V>}*/ ($Casts.$to(this.f_holder__io_crysknife_client_internal_collections_Multimap.get(key), List)).clear();
 }
 
 static $clinit() {
  Multimap.$clinit = () =>{};
  Multimap.$loadModules();
  j_l_Object.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Multimap;
 }
 
 static $loadModules() {
  ArrayList = goog.module.get('java.util.ArrayList$impl');
  Collections = goog.module.get('java.util.Collections$impl');
  HashMap = goog.module.get('java.util.HashMap$impl');
  HashSet = goog.module.get('java.util.HashSet$impl');
  List = goog.module.get('java.util.List$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
 
}
$Util.$setClassMetadata(Multimap, 'io.crysknife.client.internal.collections.Multimap');

exports = Multimap; 
//# sourceMappingURL=Multimap.js.map
