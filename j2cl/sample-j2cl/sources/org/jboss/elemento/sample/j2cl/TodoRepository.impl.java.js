goog.module('org.jboss.elemento.sample.j2cl.TodoRepository$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let JsArray_$Overlay = goog.forwardDeclare('elemental2.core.JsArray.$Overlay$impl');
let Storage_$Overlay = goog.forwardDeclare('elemental2.webstorage.Storage.$Overlay$impl');
let $Overlay = goog.forwardDeclare('elemental2.webstorage.WebStorageWindow.$Overlay$impl');
let Exception = goog.forwardDeclare('java.lang.Exception$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let Collection = goog.forwardDeclare('java.util.Collection$impl');
let LinkedHashMap = goog.forwardDeclare('java.util.LinkedHashMap$impl');
let Set = goog.forwardDeclare('java.util.Set$impl');
let Js = goog.forwardDeclare('jsinterop.base.Js$impl');
let JsArrayLike_$Overlay = goog.forwardDeclare('jsinterop.base.JsArrayLike.$Overlay$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let Todo_$Overlay = goog.forwardDeclare('org.jboss.elemento.sample.j2cl.Todo.$Overlay$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');
let $Exceptions = goog.forwardDeclare('vmbootstrap.Exceptions$impl');
let $Primitives = goog.forwardDeclare('vmbootstrap.Primitives$impl');
let $char = goog.forwardDeclare('vmbootstrap.primitives.$char$impl');

class TodoRepository extends j_l_Object {
 /** @protected */
 constructor() {
  super();
  /**@type {?string}*/
  this.f_key__org_jboss_elemento_sample_j2cl_TodoRepository_;
  /**@type {Storage}*/
  this.f_storage__org_jboss_elemento_sample_j2cl_TodoRepository_;
 }
 /** @return {?string} */
 static m_uuid__() {
  let uuid = /**@type {!Array<number>}*/ ($Arrays.$create([36], $char));
  let /** number */ r;
  $Arrays.$set(uuid, 8, $Arrays.$set(uuid, 13, $Arrays.$set(uuid, 18, $Arrays.$set(uuid, 23, 45 /* '-' */))));
  $Arrays.$set(uuid, 14, 52 /* '4' */);
  for (let i = 0; i < 36; i++) {
   if (uuid[i] == 0) {
    r = $Primitives.$narrowDoubleToInt((Math.random() * 16));
    $Arrays.$set(uuid, i, TodoRepository.f_CHARS__org_jboss_elemento_sample_j2cl_TodoRepository_[(i == 19) ? (r & 3) | 8 : r & 15]);
   }
  }
  return j_l_String.$create__arrayOf_char(uuid);
 }
 //Factory method corresponding to constructor 'TodoRepository()'.
 /** @return {!TodoRepository} */
 static $create__() {
  TodoRepository.$clinit();
  let $instance = new TodoRepository();
  $instance.$ctor__org_jboss_elemento_sample_j2cl_TodoRepository__();
  return $instance;
 }
 //Initialization from constructor 'TodoRepository()'.
 
 $ctor__org_jboss_elemento_sample_j2cl_TodoRepository__() {
  this.$ctor__org_jboss_elemento_sample_j2cl_TodoRepository__java_lang_String(TodoRepository.f_DEFAULT_KEY__org_jboss_elemento_sample_j2cl_TodoRepository_);
 }
 //Factory method corresponding to constructor 'TodoRepository(String)'.
 /** @return {!TodoRepository} */
 static $create__java_lang_String(/** ?string */ key) {
  TodoRepository.$clinit();
  let $instance = new TodoRepository();
  $instance.$ctor__org_jboss_elemento_sample_j2cl_TodoRepository__java_lang_String(key);
  return $instance;
 }
 //Initialization from constructor 'TodoRepository(String)'.
 
 $ctor__org_jboss_elemento_sample_j2cl_TodoRepository__java_lang_String(/** ?string */ key) {
  this.$ctor__java_lang_Object__();
  this.f_key__org_jboss_elemento_sample_j2cl_TodoRepository_ = key;
  this.f_storage__org_jboss_elemento_sample_j2cl_TodoRepository_ = $Overlay.m_of__elemental2_dom_Window(goog.global.window).localStorage;
 }
 /** @return {Object} */
 m_add__java_lang_String(/** ?string */ text) {
  let item = new Object();
  item.id = TodoRepository.m_uuid__();
  item.text = text;
  item.completed = false;
  let items = this.m_load___$p_org_jboss_elemento_sample_j2cl_TodoRepository();
  items.put(item.id, item);
  this.m_save__java_util_Collection_$p_org_jboss_elemento_sample_j2cl_TodoRepository(items.values());
  return item;
 }
 
 m_completeAll__boolean(/** boolean */ completed) {
  for (let $iterator = this.m_items__().m_iterator__(); $iterator.m_hasNext__(); ) {
   let item = /**@type {Object}*/ ($Casts.$to($iterator.m_next__(), Todo_$Overlay));
   item.completed = completed;
  }
  this.m_save__java_util_Collection_$p_org_jboss_elemento_sample_j2cl_TodoRepository(this.m_items__());
 }
 
 m_complete__org_jboss_elemento_sample_j2cl_Todo__boolean(/** Object */ item, /** boolean */ completed) {
  let items = this.m_load___$p_org_jboss_elemento_sample_j2cl_TodoRepository();
  let existingItem = /**@type {Object}*/ ($Casts.$to(items.get(item.id), Todo_$Overlay));
  if (!$Equality.$same(existingItem, null)) {
   existingItem.completed = completed;
   this.m_save__java_util_Collection_$p_org_jboss_elemento_sample_j2cl_TodoRepository(items.values());
  }
 }
 
 m_rename__org_jboss_elemento_sample_j2cl_Todo__java_lang_String(/** Object */ item, /** ?string */ text) {
  let items = this.m_load___$p_org_jboss_elemento_sample_j2cl_TodoRepository();
  let existingItem = /**@type {Object}*/ ($Casts.$to(items.get(item.id), Todo_$Overlay));
  if (!$Equality.$same(existingItem, null)) {
   existingItem.text = text;
   this.m_save__java_util_Collection_$p_org_jboss_elemento_sample_j2cl_TodoRepository(items.values());
  }
 }
 /** @return {Collection<Object>} */
 m_items__() {
  return this.m_load___$p_org_jboss_elemento_sample_j2cl_TodoRepository().values();
 }
 
 m_remove__org_jboss_elemento_sample_j2cl_Todo(/** Object */ item) {
  let items = this.m_load___$p_org_jboss_elemento_sample_j2cl_TodoRepository();
  items.remove(item.id);
  this.m_save__java_util_Collection_$p_org_jboss_elemento_sample_j2cl_TodoRepository(items.values());
 }
 
 m_removeAll__java_util_Set(/** Set<?string> */ ids) {
  let items = this.m_load___$p_org_jboss_elemento_sample_j2cl_TodoRepository();
  for (let $iterator = ids.m_iterator__(); $iterator.m_hasNext__(); ) {
   let id = /**@type {?string}*/ ($Casts.$to($iterator.m_next__(), j_l_String));
   items.remove(id);
  }
  this.m_save__java_util_Collection_$p_org_jboss_elemento_sample_j2cl_TodoRepository(items.values());
 }
 /** @return {LinkedHashMap<?string, Object>} */
 m_load___$p_org_jboss_elemento_sample_j2cl_TodoRepository() {
  let items = /**@type {!LinkedHashMap<?string, Object>}*/ (LinkedHashMap.$create__());
  if (!$Equality.$same(this.f_storage__org_jboss_elemento_sample_j2cl_TodoRepository_, null)) {
   let json = this.f_storage__org_jboss_elemento_sample_j2cl_TodoRepository_.getItem(this.f_key__org_jboss_elemento_sample_j2cl_TodoRepository_);
   if (!$Equality.$same(json, null)) {
    try {
     let jsonArray = /**@type {Array<Object>}*/ ($Casts.$to(Js.m_cast__java_lang_Object(goog.global.JSON.parse(json)), JsArray_$Overlay));
     if (!$Equality.$same(jsonArray, null)) {
      for (let i = 0; i < jsonArray.length; i++) {
       let todo = /**@type {Object}*/ ($Casts.$to(JsArrayLike_$Overlay.m_getAt__$devirt__jsinterop_base_JsArrayLike__int(jsonArray, i), Todo_$Overlay));
       items.put(todo.id, todo);
      }
     }
    } catch (__$exc) {
     __$exc = $Exceptions.toJava(__$exc);
     if (Exception.$isInstance(__$exc)) {
      let parseError = /**@type {Exception}*/ (__$exc);
      goog.global.console.error("error parsing stored data", parseError);
      goog.global.console.log("discarding stored data", json);
     } else {
      throw $Exceptions.toJs(__$exc);
     }
    }
   }
  }
  return items;
 }
 
 m_save__java_util_Collection_$p_org_jboss_elemento_sample_j2cl_TodoRepository(/** Collection<Object> */ items) {
  if (!$Equality.$same(this.f_storage__org_jboss_elemento_sample_j2cl_TodoRepository_, null)) {
   let todos = /**@type {Array<Object>}*/ ($Arrays.$castToNative(items.m_toArray__arrayOf_java_lang_Object(new Array(0))));
   this.f_storage__org_jboss_elemento_sample_j2cl_TodoRepository_.setItem(this.f_key__org_jboss_elemento_sample_j2cl_TodoRepository_, goog.global.JSON.stringify(todos));
  }
 }
 
 static $clinit() {
  TodoRepository.$clinit = () =>{};
  TodoRepository.$loadModules();
  j_l_Object.$clinit();
  TodoRepository.f_CHARS__org_jboss_elemento_sample_j2cl_TodoRepository_ = j_l_String.m_toCharArray__java_lang_String("0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz");
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof TodoRepository;
 }
 
 static $loadModules() {
  JsArray_$Overlay = goog.module.get('elemental2.core.JsArray.$Overlay$impl');
  $Overlay = goog.module.get('elemental2.webstorage.WebStorageWindow.$Overlay$impl');
  Exception = goog.module.get('java.lang.Exception$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  LinkedHashMap = goog.module.get('java.util.LinkedHashMap$impl');
  Js = goog.module.get('jsinterop.base.Js$impl');
  JsArrayLike_$Overlay = goog.module.get('jsinterop.base.JsArrayLike.$Overlay$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  Todo_$Overlay = goog.module.get('org.jboss.elemento.sample.j2cl.Todo.$Overlay$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
  $Exceptions = goog.module.get('vmbootstrap.Exceptions$impl');
  $Primitives = goog.module.get('vmbootstrap.Primitives$impl');
  $char = goog.module.get('vmbootstrap.primitives.$char$impl');
 }
 
}
$Util.$setClassMetadata(TodoRepository, 'org.jboss.elemento.sample.j2cl.TodoRepository');

/**@const {?string}*/
TodoRepository.f_DEFAULT_KEY__org_jboss_elemento_sample_j2cl_TodoRepository_ = "todos-elemento";
/**@type {Array<number>}*/
TodoRepository.f_CHARS__org_jboss_elemento_sample_j2cl_TodoRepository_;

exports = TodoRepository; 
//# sourceMappingURL=TodoRepository.js.map
