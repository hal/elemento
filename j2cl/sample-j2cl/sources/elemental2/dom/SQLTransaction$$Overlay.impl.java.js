goog.module('elemental2.dom.SQLTransaction.$Overlay$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let $Overlay = goog.forwardDeclare('elemental2.core.JsArray.$Overlay$impl');
let SQLError_$Overlay = goog.forwardDeclare('elemental2.dom.SQLError.$Overlay$impl');
let SQLResultSet_$Overlay = goog.forwardDeclare('elemental2.dom.SQLResultSet.$Overlay$impl');
let Js = goog.forwardDeclare('jsinterop.base.Js$impl');

class SQLTransaction_$Overlay {
 
 static m_executeSql__$devirt__elemental2_dom_SQLTransaction__java_lang_String__arrayOf_java_lang_Object__elemental2_dom_SQLStatementCallback__elemental2_dom_SQLTransaction_ExecuteSqlErrorCallbackFn(/** !SQLTransaction */ $thisArg, /** ?string */ sqlStatement, /** Array<*> */ queryArgs, /** ?function(SQLTransaction, SQLResultSet):void */ callback, /** ?function(SQLTransaction, SQLError):boolean */ errorCallback) {
  SQLTransaction_$Overlay.$clinit();
  $thisArg.executeSql(sqlStatement, /**@type {Array<*>}*/ (Js.m_uncheckedCast__java_lang_Object(queryArgs)), callback, errorCallback);
 }
 
 static m_executeSql__$devirt__elemental2_dom_SQLTransaction__java_lang_String__arrayOf_java_lang_Object__elemental2_dom_SQLStatementCallback(/** !SQLTransaction */ $thisArg, /** ?string */ sqlStatement, /** Array<*> */ queryArgs, /** ?function(SQLTransaction, SQLResultSet):void */ callback) {
  SQLTransaction_$Overlay.$clinit();
  $thisArg.executeSql(sqlStatement, /**@type {Array<*>}*/ (Js.m_uncheckedCast__java_lang_Object(queryArgs)), callback);
 }
 
 static m_executeSql__$devirt__elemental2_dom_SQLTransaction__java_lang_String__arrayOf_java_lang_Object(/** !SQLTransaction */ $thisArg, /** ?string */ sqlStatement, /** Array<*> */ queryArgs) {
  SQLTransaction_$Overlay.$clinit();
  $thisArg.executeSql(sqlStatement, /**@type {Array<*>}*/ (Js.m_uncheckedCast__java_lang_Object(queryArgs)));
 }
 
 static $clinit() {
  SQLTransaction_$Overlay.$clinit = () =>{};
  SQLTransaction_$Overlay.$loadModules();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof SQLTransaction;
 }
 
 static $loadModules() {
  Js = goog.module.get('jsinterop.base.Js$impl');
 }
 
}
$Util.$setClassMetadata(SQLTransaction_$Overlay, 'SQLTransaction');

exports = SQLTransaction_$Overlay; 
//# sourceMappingURL=SQLTransaction$$Overlay.js.map
