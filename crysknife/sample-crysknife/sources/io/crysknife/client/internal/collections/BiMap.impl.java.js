goog.module('io.crysknife.client.internal.collections.BiMap$impl');

const HashMap = goog.require('java.util.HashMap$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let Map = goog.forwardDeclare('java.util.Map$impl');
let Entry = goog.forwardDeclare('java.util.Map.Entry$impl');
let BiConsumer = goog.forwardDeclare('java.util.function.BiConsumer$impl');
let BiFunction = goog.forwardDeclare('java.util.function.BiFunction$impl');
let j_u_function_Function = goog.forwardDeclare('java.util.function.Function$impl');
let Collector = goog.forwardDeclare('java.util.stream.Collector$impl');
let Collectors = goog.forwardDeclare('java.util.stream.Collectors$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @template K, V
 * @extends {HashMap<K, V>}
  */
class BiMap extends HashMap {
 /** @protected */
 constructor() {
  super();
 }
 /** @template K, V @return {!BiMap<K, V>} */
 static $create__() {
  BiMap.$clinit();
  let $instance = new BiMap();
  $instance.$ctor__io_crysknife_client_internal_collections_BiMap__();
  return $instance;
 }
 
 $ctor__io_crysknife_client_internal_collections_BiMap__() {
  this.$ctor__java_util_HashMap__();
 }
 /** @return {Map<V, K>} */
 m_inverse__() {
  return /**@type {Map<V, K>}*/ (this.m_inverse__java_util_Map_$p_io_crysknife_client_internal_collections_BiMap(this));
 }
 /** @template V_1, K_1 @return {Map<V_1, K_1>} */
 m_inverse__java_util_Map_$p_io_crysknife_client_internal_collections_BiMap(/** Map<K_1, V_1> */ map) {
  return /**@type {Map<V_1, K_1>}*/ ($Casts.$to(map.m_entrySet__().m_stream__().m_collect__java_util_stream_Collector(/**@type {Collector<Entry<K_1, V_1>, *, Map<V_1, K_1>>}*/ (Collectors.m_toMap__java_util_function_Function__java_util_function_Function(j_u_function_Function.$adapt((arg0) =>{
   let arg0_1 = /**@type {Entry}*/ ($Casts.$to(arg0, Entry));
   return arg0_1.m_getValue__();
  }), j_u_function_Function.$adapt((arg0_2) =>{
   let arg0_3 = /**@type {Entry}*/ ($Casts.$to(arg0_2, Entry));
   return arg0_3.m_getKey__();
  })))), Map));
 }
 //Default method forwarding stub.
 /** @override @return {V} */
 m_compute__java_lang_Object__java_util_function_BiFunction(/** K */ arg0, /** BiFunction<?, ?, ?> */ arg1) {
  return Map.m_compute__$default__java_util_Map__java_lang_Object__java_util_function_BiFunction(this, arg0, arg1);
 }
 //Default method forwarding stub.
 /** @override @return {V} */
 m_computeIfAbsent__java_lang_Object__java_util_function_Function(/** K */ arg0, /** j_u_function_Function<?, ?> */ arg1) {
  return Map.m_computeIfAbsent__$default__java_util_Map__java_lang_Object__java_util_function_Function(this, arg0, arg1);
 }
 //Default method forwarding stub.
 /** @override @return {V} */
 m_computeIfPresent__java_lang_Object__java_util_function_BiFunction(/** K */ arg0, /** BiFunction<?, ?, ?> */ arg1) {
  return Map.m_computeIfPresent__$default__java_util_Map__java_lang_Object__java_util_function_BiFunction(this, arg0, arg1);
 }
 //Default method forwarding stub.
 /** @override */
 m_forEach__java_util_function_BiConsumer(/** BiConsumer<?, ?> */ arg0) {
  Map.m_forEach__$default__java_util_Map__java_util_function_BiConsumer(this, arg0);
 }
 //Default method forwarding stub.
 /** @override @return {V} */
 getOrDefault(/** * */ arg0, /** V */ arg1) {
  return Map.m_getOrDefault__$default__java_util_Map__java_lang_Object__java_lang_Object(this, arg0, arg1);
 }
 //Default method forwarding stub.
 /** @override @return {V} */
 m_merge__java_lang_Object__java_lang_Object__java_util_function_BiFunction(/** K */ arg0, /** V */ arg1, /** BiFunction<?, ?, ?> */ arg2) {
  return Map.m_merge__$default__java_util_Map__java_lang_Object__java_lang_Object__java_util_function_BiFunction(this, arg0, arg1, arg2);
 }
 //Default method forwarding stub.
 /** @override @return {V} */
 putIfAbsent(/** K */ arg0, /** V */ arg1) {
  return Map.m_putIfAbsent__$default__java_util_Map__java_lang_Object__java_lang_Object(this, arg0, arg1);
 }
 //Default method forwarding stub.
 /** @override @return {boolean} */
 m_remove__java_lang_Object__java_lang_Object(/** * */ arg0, /** * */ arg1) {
  return Map.m_remove__$default__java_util_Map__java_lang_Object__java_lang_Object(this, arg0, arg1);
 }
 //Default method forwarding stub.
 /** @override @return {V} */
 replace(/** K */ arg0, /** V */ arg1) {
  return Map.m_replace__$default__java_util_Map__java_lang_Object__java_lang_Object(this, arg0, arg1);
 }
 //Default method forwarding stub.
 /** @override @return {boolean} */
 m_replace__java_lang_Object__java_lang_Object__java_lang_Object(/** K */ arg0, /** V */ arg1, /** V */ arg2) {
  return Map.m_replace__$default__java_util_Map__java_lang_Object__java_lang_Object__java_lang_Object(this, arg0, arg1, arg2);
 }
 //Default method forwarding stub.
 /** @override */
 m_replaceAll__java_util_function_BiFunction(/** BiFunction<?, ?, ?> */ arg0) {
  Map.m_replaceAll__$default__java_util_Map__java_util_function_BiFunction(this, arg0);
 }
 
 static $clinit() {
  BiMap.$clinit = () =>{};
  BiMap.$loadModules();
  HashMap.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof BiMap;
 }
 
 static $loadModules() {
  Map = goog.module.get('java.util.Map$impl');
  Entry = goog.module.get('java.util.Map.Entry$impl');
  j_u_function_Function = goog.module.get('java.util.function.Function$impl');
  Collectors = goog.module.get('java.util.stream.Collectors$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
 
}
$Util.$setClassMetadata(BiMap, 'io.crysknife.client.internal.collections.BiMap');

exports = BiMap; 
//# sourceMappingURL=BiMap.js.map
