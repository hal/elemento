goog.module('io.crysknife.client.internal.collections.ImmutableMultimap$impl');

const Multimap = goog.require('io.crysknife.client.internal.collections.Multimap$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let UnsupportedOperationException = goog.forwardDeclare('java.lang.UnsupportedOperationException$impl');
let Collection = goog.forwardDeclare('java.util.Collection$impl');
let Collections = goog.forwardDeclare('java.util.Collections$impl');
let HashMap = goog.forwardDeclare('java.util.HashMap$impl');
let List = goog.forwardDeclare('java.util.List$impl');
let Map = goog.forwardDeclare('java.util.Map$impl');
let Entry = goog.forwardDeclare('java.util.Map.Entry$impl');
let Set = goog.forwardDeclare('java.util.Set$impl');
let TreeMap = goog.forwardDeclare('java.util.TreeMap$impl');
let Consumer = goog.forwardDeclare('java.util.function.Consumer$impl');
let Collector = goog.forwardDeclare('java.util.stream.Collector$impl');
let Collectors = goog.forwardDeclare('java.util.stream.Collectors$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');
let $Exceptions = goog.forwardDeclare('vmbootstrap.Exceptions$impl');

/**
 * @template K, V
 * @extends {Multimap<K, V>}
  */
class ImmutableMultimap extends Multimap {
 /** @protected */
 constructor() {
  super();
 }
 //Factory method corresponding to constructor 'ImmutableMultimap()'.
 /** @template K, V @return {!ImmutableMultimap<K, V>} */
 static $create__() {
  let $instance = new ImmutableMultimap();
  $instance.$ctor__io_crysknife_client_internal_collections_ImmutableMultimap__();
  return $instance;
 }
 //Initialization from constructor 'ImmutableMultimap()'.
 
 $ctor__io_crysknife_client_internal_collections_ImmutableMultimap__() {
  this.$ctor__io_crysknife_client_internal_collections_Multimap__java_util_Map(/**@type {Map<K, List<V>>}*/ (Collections.m_emptyMap__()));
 }
 //Factory method corresponding to constructor 'ImmutableMultimap(Map)'.
 /** @template K, V @return {!ImmutableMultimap<K, V>} */
 static $create__java_util_Map(/** Map<K, List<V>> */ holder) {
  let $instance = new ImmutableMultimap();
  $instance.$ctor__io_crysknife_client_internal_collections_ImmutableMultimap__java_util_Map(holder);
  return $instance;
 }
 //Initialization from constructor 'ImmutableMultimap(Map)'.
 
 $ctor__io_crysknife_client_internal_collections_ImmutableMultimap__java_util_Map(/** Map<K, List<V>> */ holder) {
  this.$ctor__io_crysknife_client_internal_collections_Multimap__java_util_Map(holder);
 }
 /** @template K_1, V_1 @return {ImmutableMultimap<K_1, V_1>} */
 static m_of__() {
  ImmutableMultimap.$clinit();
  return /**@type {!ImmutableMultimap}*/ (ImmutableMultimap.$create__());
 }
 /** @template K_1, V_1 @return {ImmutableMultimap<K_1, V_1>} */
 static m_copyOf__io_crysknife_client_internal_collections_Multimap(/** Multimap<?, ?> */ multimap) {
  ImmutableMultimap.$clinit();
  return /**@type {!ImmutableMultimap<K_1, V_1>}*/ (ImmutableMultimap.$create__java_util_Map(/**@type {Map<K_1, List<V_1>>}*/ (HashMap.$create__java_util_Map(/**@type {Map<*, *>}*/ (multimap.f_holder__io_crysknife_client_internal_collections_Multimap)))));
 }
 /** @override */
 m_put__java_lang_Object__java_lang_Object(/** K */ key, /** V */ value) {
  throw $Exceptions.toJs(UnsupportedOperationException.$create__());
 }
 /** @override @return {Collection<V>} */
 m_values__() {
  return /**@type {Set<V>}*/ ($Casts.$to(this.m_values__().m_stream__().m_collect__java_util_stream_Collector(/**@type {Collector<V, *, Set<V>>}*/ (Collectors.m_toSet__())), Set));
 }
 /** @override @return {List<V>} */
 m_get__java_lang_Object(/** K */ key) {
  return /**@type {List<V>}*/ ($Casts.$to(super.m_get__java_lang_Object(key).m_stream__().m_collect__java_util_stream_Collector(/**@type {Collector<V, *, List<V>>}*/ (Collectors.m_toList__())), List));
 }
 /** @override */
 m_remove__java_lang_Object__java_lang_Object(/** K */ key, /** V */ value) {
  throw $Exceptions.toJs(UnsupportedOperationException.$create__());
 }
 /** @override @return {Collection<K>} */
 m_keys__() {
  return /**@type {Set<K>}*/ ($Casts.$to(super.m_keySet__().m_stream__().m_collect__java_util_stream_Collector(/**@type {Collector<K, *, Set<K>>}*/ (Collectors.m_toSet__())), Set));
 }
 /** @override @return {Set<K>} */
 m_keySet__() {
  return /**@type {Set<K>}*/ ($Casts.$to(super.m_keySet__().m_stream__().m_collect__java_util_stream_Collector(/**@type {Collector<K, *, Set<K>>}*/ (Collectors.m_toSet__())), Set));
 }
 /** @override */
 m_clear__() {
  throw $Exceptions.toJs(UnsupportedOperationException.$create__());
 }
 /** @override */
 m_removeAll__java_lang_Object(/** K */ key) {
  throw $Exceptions.toJs(UnsupportedOperationException.$create__());
 }
 /** @return {Collection<Entry<K, V>>} */
 m_entries__() {
  let map = /**@type {!TreeMap<K, V>}*/ (TreeMap.$create__());
  super.m_keys__().m_forEach__java_util_function_Consumer(Consumer.$adapt((/** K */ key) =>{
   super.m_get__java_lang_Object(key).m_stream__().m_forEach__java_util_function_Consumer(Consumer.$adapt((/** V */ v) =>{
    map.put(key, v);
   }));
  }));
  return map.m_entrySet__();
 }
 
 static $clinit() {
  ImmutableMultimap.$clinit = () =>{};
  ImmutableMultimap.$loadModules();
  Multimap.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof ImmutableMultimap;
 }
 
 static $loadModules() {
  UnsupportedOperationException = goog.module.get('java.lang.UnsupportedOperationException$impl');
  Collections = goog.module.get('java.util.Collections$impl');
  HashMap = goog.module.get('java.util.HashMap$impl');
  List = goog.module.get('java.util.List$impl');
  Set = goog.module.get('java.util.Set$impl');
  TreeMap = goog.module.get('java.util.TreeMap$impl');
  Consumer = goog.module.get('java.util.function.Consumer$impl');
  Collectors = goog.module.get('java.util.stream.Collectors$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
  $Exceptions = goog.module.get('vmbootstrap.Exceptions$impl');
 }
 
}
$Util.$setClassMetadata(ImmutableMultimap, 'io.crysknife.client.internal.collections.ImmutableMultimap');

exports = ImmutableMultimap; 
//# sourceMappingURL=ImmutableMultimap.js.map
