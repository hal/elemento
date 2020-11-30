goog.module('org.jboss.elemento.Key$impl');

const Enum = goog.require('java.lang.Enum$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let Event_$Overlay = goog.forwardDeclare('elemental2.dom.Event.$Overlay$impl');
let $Overlay = goog.forwardDeclare('elemental2.dom.KeyboardEvent.$Overlay$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let HashMap = goog.forwardDeclare('java.util.HashMap$impl');
let j_u_Map = goog.forwardDeclare('java.util.Map$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');
let $Enums = goog.forwardDeclare('vmbootstrap.Enums$impl');

/**
 * @extends {Enum<Key>}
  */
class Key extends Enum {
 /** @protected */
 constructor() {
  super();
  /**@type {?string}*/
  this.f_key__org_jboss_elemento_Key_;
  /**@type {Array<?string>}*/
  this.f_alternatives__org_jboss_elemento_Key_;
 }
 /** @return {Key} */
 static m_fromEvent__elemental2_dom_KeyboardEvent(/** KeyboardEvent */ event) {
  Key.$clinit();
  return /**@type {Key}*/ ($Casts.$to(Key.f_keys__org_jboss_elemento_Key_.getOrDefault(event.key, Key.$f_Unidentified__org_jboss_elemento_Key), Key));
 }
 //Factory method corresponding to constructor 'Key(String, int, String)'.
 /** @return {!Key} */
 static $create__java_lang_String__int__java_lang_String(/** ?string */ $name, /** number */ $ordinal, /** ?string */ key) {
  let $instance = new Key();
  $instance.$ctor__org_jboss_elemento_Key__java_lang_String__int__java_lang_String($name, $ordinal, key);
  return $instance;
 }
 //Initialization from constructor 'Key(String, int, String)'.
 
 $ctor__org_jboss_elemento_Key__java_lang_String__int__java_lang_String(/** ?string */ $name, /** number */ $ordinal, /** ?string */ key) {
  this.f_name__java_lang_Enum_ = $name;
  this.f_ordinal__java_lang_Enum_ = $ordinal;
  this.$ctor__org_jboss_elemento_Key__java_lang_String__int__java_lang_String__arrayOf_java_lang_String($name, $ordinal, key, null);
 }
 //Factory method corresponding to constructor 'Key(String, int, String, String[])'.
 /** @return {!Key} */
 static $create__java_lang_String__int__java_lang_String__arrayOf_java_lang_String(/** ?string */ $name, /** number */ $ordinal, /** ?string */ key, /** Array<?string> */ alternatives) {
  let $instance = new Key();
  $instance.$ctor__org_jboss_elemento_Key__java_lang_String__int__java_lang_String__arrayOf_java_lang_String($name, $ordinal, key, alternatives);
  return $instance;
 }
 //Initialization from constructor 'Key(String, int, String, String[])'.
 
 $ctor__org_jboss_elemento_Key__java_lang_String__int__java_lang_String__arrayOf_java_lang_String(/** ?string */ $name, /** number */ $ordinal, /** ?string */ key, /** Array<?string> */ alternatives) {
  this.f_name__java_lang_Enum_ = $name;
  this.f_ordinal__java_lang_Enum_ = $ordinal;
  this.$ctor__java_lang_Enum__java_lang_String__int($name, $ordinal);
  this.f_key__org_jboss_elemento_Key_ = key;
  this.f_alternatives__org_jboss_elemento_Key_ = alternatives;
 }
 /** @return {boolean} */
 m_match__elemental2_dom_Event(/** Event */ event) {
  return $Overlay.$isInstance(event) && this.m_match__elemental2_dom_KeyboardEvent(/**@type {KeyboardEvent}*/ ($Casts.$to(event, $Overlay)));
 }
 /** @return {boolean} */
 m_match__elemental2_dom_KeyboardEvent(/** KeyboardEvent */ event) {
  if (j_l_String.m_equals__java_lang_String__java_lang_Object(this.f_key__org_jboss_elemento_Key_, event.key)) {
   return true;
  }
  if (!$Equality.$same(this.f_alternatives__org_jboss_elemento_Key_, null)) {
   for (let $array = this.f_alternatives__org_jboss_elemento_Key_, $index = 0; $index < $array.length; $index++) {
    let alternative = $array[$index];
    if (j_l_String.m_equals__java_lang_String__java_lang_Object(alternative, event.key)) {
     return true;
    }
   }
  }
  return false;
 }
 /** @return {!Key} */
 static m_valueOf__java_lang_String(/** string */ name) {
  Key.$clinit();
  if ($Equality.$same(Key.f_namesToValuesMap__org_jboss_elemento_Key_, null)) {
   Key.f_namesToValuesMap__org_jboss_elemento_Key_ = $Enums.createMapFromValues(Key.m_values__());
  }
  return $Enums.getValueFromNameAndMap(name, Key.f_namesToValuesMap__org_jboss_elemento_Key_);
 }
 /** @return {!Array<!Key>} */
 static m_values__() {
  Key.$clinit();
  return /**@type {!Array<Key>}*/ ($Arrays.$init([Key.$f_Accept__org_jboss_elemento_Key, Key.$f_Again__org_jboss_elemento_Key, Key.$f_Alt__org_jboss_elemento_Key, Key.$f_AltGraph__org_jboss_elemento_Key, Key.$f_ArrowDown__org_jboss_elemento_Key, Key.$f_ArrowLeft__org_jboss_elemento_Key, Key.$f_ArrowRight__org_jboss_elemento_Key, Key.$f_ArrowUp__org_jboss_elemento_Key, Key.$f_Attn__org_jboss_elemento_Key, Key.$f_Backspace__org_jboss_elemento_Key, Key.$f_BrightnessDown__org_jboss_elemento_Key, Key.$f_BrightnessUp__org_jboss_elemento_Key, Key.$f_Cancel__org_jboss_elemento_Key, Key.$f_CapsLock__org_jboss_elemento_Key, Key.$f_Clear__org_jboss_elemento_Key, Key.$f_ContextMenu__org_jboss_elemento_Key, Key.$f_Control__org_jboss_elemento_Key, Key.$f_Copy__org_jboss_elemento_Key, Key.$f_CrSel__org_jboss_elemento_Key, Key.$f_Cut__org_jboss_elemento_Key, Key.$f_Delete__org_jboss_elemento_Key, Key.$f_Eject__org_jboss_elemento_Key, Key.$f_End__org_jboss_elemento_Key, Key.$f_Enter__org_jboss_elemento_Key, Key.$f_EraseEof__org_jboss_elemento_Key, Key.$f_Escape__org_jboss_elemento_Key, Key.$f_Execute__org_jboss_elemento_Key, Key.$f_ExSel__org_jboss_elemento_Key, Key.$f_F1__org_jboss_elemento_Key, Key.$f_F10__org_jboss_elemento_Key, Key.$f_F11__org_jboss_elemento_Key, Key.$f_F13__org_jboss_elemento_Key, Key.$f_F14__org_jboss_elemento_Key, Key.$f_F15__org_jboss_elemento_Key, Key.$f_F16__org_jboss_elemento_Key, Key.$f_F17__org_jboss_elemento_Key, Key.$f_F18__org_jboss_elemento_Key, Key.$f_F19__org_jboss_elemento_Key, Key.$f_F2__org_jboss_elemento_Key, Key.$f_F20__org_jboss_elemento_Key, Key.$f_F3__org_jboss_elemento_Key, Key.$f_F4__org_jboss_elemento_Key, Key.$f_F5__org_jboss_elemento_Key, Key.$f_F6__org_jboss_elemento_Key, Key.$f_F7__org_jboss_elemento_Key, Key.$f_F8__org_jboss_elemento_Key, Key.$f_F9__org_jboss_elemento_Key, Key.$f_Find__org_jboss_elemento_Key, Key.$f_Finish__org_jboss_elemento_Key, Key.$f_Fn__org_jboss_elemento_Key, Key.$f_FnLock__org_jboss_elemento_Key, Key.$f_Help__org_jboss_elemento_Key, Key.$f_Hibernate__org_jboss_elemento_Key, Key.$f_Home__org_jboss_elemento_Key, Key.$f_Insert__org_jboss_elemento_Key, Key.$f_LogOff__org_jboss_elemento_Key, Key.$f_Meta__org_jboss_elemento_Key, Key.$f_NumLock__org_jboss_elemento_Key, Key.$f_PageDown__org_jboss_elemento_Key, Key.$f_PageUp__org_jboss_elemento_Key, Key.$f_Paste__org_jboss_elemento_Key, Key.$f_Pause__org_jboss_elemento_Key, Key.$f_Play__org_jboss_elemento_Key, Key.$f_Power__org_jboss_elemento_Key, Key.$f_PowerOff__org_jboss_elemento_Key, Key.$f_PrintScreen__org_jboss_elemento_Key, Key.$f_Props__org_jboss_elemento_Key, Key.$f_Redo__org_jboss_elemento_Key, Key.$f_ScrollLock__org_jboss_elemento_Key, Key.$f_Select__org_jboss_elemento_Key, Key.$f_Shift__org_jboss_elemento_Key, Key.$f_Soft1__org_jboss_elemento_Key, Key.$f_Soft2__org_jboss_elemento_Key, Key.$f_Soft3__org_jboss_elemento_Key, Key.$f_Soft4__org_jboss_elemento_Key, Key.$f_Spacebar__org_jboss_elemento_Key, Key.$f_Standby__org_jboss_elemento_Key, Key.$f_Symbol__org_jboss_elemento_Key, Key.$f_SymbolLock__org_jboss_elemento_Key, Key.$f_Tab__org_jboss_elemento_Key, Key.$f_Undo__org_jboss_elemento_Key, Key.$f_Unidentified__org_jboss_elemento_Key, Key.$f_WakeUp__org_jboss_elemento_Key, Key.$f_ZoomIn__org_jboss_elemento_Key, Key.$f_ZoomOut__org_jboss_elemento_Key], Key));
 }
 //Bridge method.
 /** @override @return {number} */
 m_compareTo__java_lang_Object(/** Key */ arg0) {
  return super.compareTo(/**@type {Key}*/ ($Casts.$to(arg0, Key)));
 }
 /** @return {!Key} */
 static get f_Accept__org_jboss_elemento_Key() {
  return (Key.$clinit(), Key.$f_Accept__org_jboss_elemento_Key);
 }
 /** @return {!Key} */
 static get f_Again__org_jboss_elemento_Key() {
  return (Key.$clinit(), Key.$f_Again__org_jboss_elemento_Key);
 }
 /** @return {!Key} */
 static get f_Alt__org_jboss_elemento_Key() {
  return (Key.$clinit(), Key.$f_Alt__org_jboss_elemento_Key);
 }
 /** @return {!Key} */
 static get f_AltGraph__org_jboss_elemento_Key() {
  return (Key.$clinit(), Key.$f_AltGraph__org_jboss_elemento_Key);
 }
 /** @return {!Key} */
 static get f_ArrowDown__org_jboss_elemento_Key() {
  return (Key.$clinit(), Key.$f_ArrowDown__org_jboss_elemento_Key);
 }
 /** @return {!Key} */
 static get f_ArrowLeft__org_jboss_elemento_Key() {
  return (Key.$clinit(), Key.$f_ArrowLeft__org_jboss_elemento_Key);
 }
 /** @return {!Key} */
 static get f_ArrowRight__org_jboss_elemento_Key() {
  return (Key.$clinit(), Key.$f_ArrowRight__org_jboss_elemento_Key);
 }
 /** @return {!Key} */
 static get f_ArrowUp__org_jboss_elemento_Key() {
  return (Key.$clinit(), Key.$f_ArrowUp__org_jboss_elemento_Key);
 }
 /** @return {!Key} */
 static get f_Attn__org_jboss_elemento_Key() {
  return (Key.$clinit(), Key.$f_Attn__org_jboss_elemento_Key);
 }
 /** @return {!Key} */
 static get f_Backspace__org_jboss_elemento_Key() {
  return (Key.$clinit(), Key.$f_Backspace__org_jboss_elemento_Key);
 }
 /** @return {!Key} */
 static get f_BrightnessDown__org_jboss_elemento_Key() {
  return (Key.$clinit(), Key.$f_BrightnessDown__org_jboss_elemento_Key);
 }
 /** @return {!Key} */
 static get f_BrightnessUp__org_jboss_elemento_Key() {
  return (Key.$clinit(), Key.$f_BrightnessUp__org_jboss_elemento_Key);
 }
 /** @return {!Key} */
 static get f_Cancel__org_jboss_elemento_Key() {
  return (Key.$clinit(), Key.$f_Cancel__org_jboss_elemento_Key);
 }
 /** @return {!Key} */
 static get f_CapsLock__org_jboss_elemento_Key() {
  return (Key.$clinit(), Key.$f_CapsLock__org_jboss_elemento_Key);
 }
 /** @return {!Key} */
 static get f_Clear__org_jboss_elemento_Key() {
  return (Key.$clinit(), Key.$f_Clear__org_jboss_elemento_Key);
 }
 /** @return {!Key} */
 static get f_ContextMenu__org_jboss_elemento_Key() {
  return (Key.$clinit(), Key.$f_ContextMenu__org_jboss_elemento_Key);
 }
 /** @return {!Key} */
 static get f_Control__org_jboss_elemento_Key() {
  return (Key.$clinit(), Key.$f_Control__org_jboss_elemento_Key);
 }
 /** @return {!Key} */
 static get f_Copy__org_jboss_elemento_Key() {
  return (Key.$clinit(), Key.$f_Copy__org_jboss_elemento_Key);
 }
 /** @return {!Key} */
 static get f_CrSel__org_jboss_elemento_Key() {
  return (Key.$clinit(), Key.$f_CrSel__org_jboss_elemento_Key);
 }
 /** @return {!Key} */
 static get f_Cut__org_jboss_elemento_Key() {
  return (Key.$clinit(), Key.$f_Cut__org_jboss_elemento_Key);
 }
 /** @return {!Key} */
 static get f_Delete__org_jboss_elemento_Key() {
  return (Key.$clinit(), Key.$f_Delete__org_jboss_elemento_Key);
 }
 /** @return {!Key} */
 static get f_Eject__org_jboss_elemento_Key() {
  return (Key.$clinit(), Key.$f_Eject__org_jboss_elemento_Key);
 }
 /** @return {!Key} */
 static get f_End__org_jboss_elemento_Key() {
  return (Key.$clinit(), Key.$f_End__org_jboss_elemento_Key);
 }
 /** @return {!Key} */
 static get f_Enter__org_jboss_elemento_Key() {
  return (Key.$clinit(), Key.$f_Enter__org_jboss_elemento_Key);
 }
 /** @return {!Key} */
 static get f_EraseEof__org_jboss_elemento_Key() {
  return (Key.$clinit(), Key.$f_EraseEof__org_jboss_elemento_Key);
 }
 /** @return {!Key} */
 static get f_Escape__org_jboss_elemento_Key() {
  return (Key.$clinit(), Key.$f_Escape__org_jboss_elemento_Key);
 }
 /** @return {!Key} */
 static get f_Execute__org_jboss_elemento_Key() {
  return (Key.$clinit(), Key.$f_Execute__org_jboss_elemento_Key);
 }
 /** @return {!Key} */
 static get f_ExSel__org_jboss_elemento_Key() {
  return (Key.$clinit(), Key.$f_ExSel__org_jboss_elemento_Key);
 }
 /** @return {!Key} */
 static get f_F1__org_jboss_elemento_Key() {
  return (Key.$clinit(), Key.$f_F1__org_jboss_elemento_Key);
 }
 /** @return {!Key} */
 static get f_F10__org_jboss_elemento_Key() {
  return (Key.$clinit(), Key.$f_F10__org_jboss_elemento_Key);
 }
 /** @return {!Key} */
 static get f_F11__org_jboss_elemento_Key() {
  return (Key.$clinit(), Key.$f_F11__org_jboss_elemento_Key);
 }
 /** @return {!Key} */
 static get f_F13__org_jboss_elemento_Key() {
  return (Key.$clinit(), Key.$f_F13__org_jboss_elemento_Key);
 }
 /** @return {!Key} */
 static get f_F14__org_jboss_elemento_Key() {
  return (Key.$clinit(), Key.$f_F14__org_jboss_elemento_Key);
 }
 /** @return {!Key} */
 static get f_F15__org_jboss_elemento_Key() {
  return (Key.$clinit(), Key.$f_F15__org_jboss_elemento_Key);
 }
 /** @return {!Key} */
 static get f_F16__org_jboss_elemento_Key() {
  return (Key.$clinit(), Key.$f_F16__org_jboss_elemento_Key);
 }
 /** @return {!Key} */
 static get f_F17__org_jboss_elemento_Key() {
  return (Key.$clinit(), Key.$f_F17__org_jboss_elemento_Key);
 }
 /** @return {!Key} */
 static get f_F18__org_jboss_elemento_Key() {
  return (Key.$clinit(), Key.$f_F18__org_jboss_elemento_Key);
 }
 /** @return {!Key} */
 static get f_F19__org_jboss_elemento_Key() {
  return (Key.$clinit(), Key.$f_F19__org_jboss_elemento_Key);
 }
 /** @return {!Key} */
 static get f_F2__org_jboss_elemento_Key() {
  return (Key.$clinit(), Key.$f_F2__org_jboss_elemento_Key);
 }
 /** @return {!Key} */
 static get f_F20__org_jboss_elemento_Key() {
  return (Key.$clinit(), Key.$f_F20__org_jboss_elemento_Key);
 }
 /** @return {!Key} */
 static get f_F3__org_jboss_elemento_Key() {
  return (Key.$clinit(), Key.$f_F3__org_jboss_elemento_Key);
 }
 /** @return {!Key} */
 static get f_F4__org_jboss_elemento_Key() {
  return (Key.$clinit(), Key.$f_F4__org_jboss_elemento_Key);
 }
 /** @return {!Key} */
 static get f_F5__org_jboss_elemento_Key() {
  return (Key.$clinit(), Key.$f_F5__org_jboss_elemento_Key);
 }
 /** @return {!Key} */
 static get f_F6__org_jboss_elemento_Key() {
  return (Key.$clinit(), Key.$f_F6__org_jboss_elemento_Key);
 }
 /** @return {!Key} */
 static get f_F7__org_jboss_elemento_Key() {
  return (Key.$clinit(), Key.$f_F7__org_jboss_elemento_Key);
 }
 /** @return {!Key} */
 static get f_F8__org_jboss_elemento_Key() {
  return (Key.$clinit(), Key.$f_F8__org_jboss_elemento_Key);
 }
 /** @return {!Key} */
 static get f_F9__org_jboss_elemento_Key() {
  return (Key.$clinit(), Key.$f_F9__org_jboss_elemento_Key);
 }
 /** @return {!Key} */
 static get f_Find__org_jboss_elemento_Key() {
  return (Key.$clinit(), Key.$f_Find__org_jboss_elemento_Key);
 }
 /** @return {!Key} */
 static get f_Finish__org_jboss_elemento_Key() {
  return (Key.$clinit(), Key.$f_Finish__org_jboss_elemento_Key);
 }
 /** @return {!Key} */
 static get f_Fn__org_jboss_elemento_Key() {
  return (Key.$clinit(), Key.$f_Fn__org_jboss_elemento_Key);
 }
 /** @return {!Key} */
 static get f_FnLock__org_jboss_elemento_Key() {
  return (Key.$clinit(), Key.$f_FnLock__org_jboss_elemento_Key);
 }
 /** @return {!Key} */
 static get f_Help__org_jboss_elemento_Key() {
  return (Key.$clinit(), Key.$f_Help__org_jboss_elemento_Key);
 }
 /** @return {!Key} */
 static get f_Hibernate__org_jboss_elemento_Key() {
  return (Key.$clinit(), Key.$f_Hibernate__org_jboss_elemento_Key);
 }
 /** @return {!Key} */
 static get f_Home__org_jboss_elemento_Key() {
  return (Key.$clinit(), Key.$f_Home__org_jboss_elemento_Key);
 }
 /** @return {!Key} */
 static get f_Insert__org_jboss_elemento_Key() {
  return (Key.$clinit(), Key.$f_Insert__org_jboss_elemento_Key);
 }
 /** @return {!Key} */
 static get f_LogOff__org_jboss_elemento_Key() {
  return (Key.$clinit(), Key.$f_LogOff__org_jboss_elemento_Key);
 }
 /** @return {!Key} */
 static get f_Meta__org_jboss_elemento_Key() {
  return (Key.$clinit(), Key.$f_Meta__org_jboss_elemento_Key);
 }
 /** @return {!Key} */
 static get f_NumLock__org_jboss_elemento_Key() {
  return (Key.$clinit(), Key.$f_NumLock__org_jboss_elemento_Key);
 }
 /** @return {!Key} */
 static get f_PageDown__org_jboss_elemento_Key() {
  return (Key.$clinit(), Key.$f_PageDown__org_jboss_elemento_Key);
 }
 /** @return {!Key} */
 static get f_PageUp__org_jboss_elemento_Key() {
  return (Key.$clinit(), Key.$f_PageUp__org_jboss_elemento_Key);
 }
 /** @return {!Key} */
 static get f_Paste__org_jboss_elemento_Key() {
  return (Key.$clinit(), Key.$f_Paste__org_jboss_elemento_Key);
 }
 /** @return {!Key} */
 static get f_Pause__org_jboss_elemento_Key() {
  return (Key.$clinit(), Key.$f_Pause__org_jboss_elemento_Key);
 }
 /** @return {!Key} */
 static get f_Play__org_jboss_elemento_Key() {
  return (Key.$clinit(), Key.$f_Play__org_jboss_elemento_Key);
 }
 /** @return {!Key} */
 static get f_Power__org_jboss_elemento_Key() {
  return (Key.$clinit(), Key.$f_Power__org_jboss_elemento_Key);
 }
 /** @return {!Key} */
 static get f_PowerOff__org_jboss_elemento_Key() {
  return (Key.$clinit(), Key.$f_PowerOff__org_jboss_elemento_Key);
 }
 /** @return {!Key} */
 static get f_PrintScreen__org_jboss_elemento_Key() {
  return (Key.$clinit(), Key.$f_PrintScreen__org_jboss_elemento_Key);
 }
 /** @return {!Key} */
 static get f_Props__org_jboss_elemento_Key() {
  return (Key.$clinit(), Key.$f_Props__org_jboss_elemento_Key);
 }
 /** @return {!Key} */
 static get f_Redo__org_jboss_elemento_Key() {
  return (Key.$clinit(), Key.$f_Redo__org_jboss_elemento_Key);
 }
 /** @return {!Key} */
 static get f_ScrollLock__org_jboss_elemento_Key() {
  return (Key.$clinit(), Key.$f_ScrollLock__org_jboss_elemento_Key);
 }
 /** @return {!Key} */
 static get f_Select__org_jboss_elemento_Key() {
  return (Key.$clinit(), Key.$f_Select__org_jboss_elemento_Key);
 }
 /** @return {!Key} */
 static get f_Shift__org_jboss_elemento_Key() {
  return (Key.$clinit(), Key.$f_Shift__org_jboss_elemento_Key);
 }
 /** @return {!Key} */
 static get f_Soft1__org_jboss_elemento_Key() {
  return (Key.$clinit(), Key.$f_Soft1__org_jboss_elemento_Key);
 }
 /** @return {!Key} */
 static get f_Soft2__org_jboss_elemento_Key() {
  return (Key.$clinit(), Key.$f_Soft2__org_jboss_elemento_Key);
 }
 /** @return {!Key} */
 static get f_Soft3__org_jboss_elemento_Key() {
  return (Key.$clinit(), Key.$f_Soft3__org_jboss_elemento_Key);
 }
 /** @return {!Key} */
 static get f_Soft4__org_jboss_elemento_Key() {
  return (Key.$clinit(), Key.$f_Soft4__org_jboss_elemento_Key);
 }
 /** @return {!Key} */
 static get f_Spacebar__org_jboss_elemento_Key() {
  return (Key.$clinit(), Key.$f_Spacebar__org_jboss_elemento_Key);
 }
 /** @return {!Key} */
 static get f_Standby__org_jboss_elemento_Key() {
  return (Key.$clinit(), Key.$f_Standby__org_jboss_elemento_Key);
 }
 /** @return {!Key} */
 static get f_Symbol__org_jboss_elemento_Key() {
  return (Key.$clinit(), Key.$f_Symbol__org_jboss_elemento_Key);
 }
 /** @return {!Key} */
 static get f_SymbolLock__org_jboss_elemento_Key() {
  return (Key.$clinit(), Key.$f_SymbolLock__org_jboss_elemento_Key);
 }
 /** @return {!Key} */
 static get f_Tab__org_jboss_elemento_Key() {
  return (Key.$clinit(), Key.$f_Tab__org_jboss_elemento_Key);
 }
 /** @return {!Key} */
 static get f_Undo__org_jboss_elemento_Key() {
  return (Key.$clinit(), Key.$f_Undo__org_jboss_elemento_Key);
 }
 /** @return {!Key} */
 static get f_Unidentified__org_jboss_elemento_Key() {
  return (Key.$clinit(), Key.$f_Unidentified__org_jboss_elemento_Key);
 }
 /** @return {!Key} */
 static get f_WakeUp__org_jboss_elemento_Key() {
  return (Key.$clinit(), Key.$f_WakeUp__org_jboss_elemento_Key);
 }
 /** @return {!Key} */
 static get f_ZoomIn__org_jboss_elemento_Key() {
  return (Key.$clinit(), Key.$f_ZoomIn__org_jboss_elemento_Key);
 }
 /** @return {!Key} */
 static get f_ZoomOut__org_jboss_elemento_Key() {
  return (Key.$clinit(), Key.$f_ZoomOut__org_jboss_elemento_Key);
 }
 
 static $clinit() {
  Key.$clinit = () =>{};
  Key.$loadModules();
  Enum.$clinit();
  Key.$f_Accept__org_jboss_elemento_Key = Key.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("Accept"), Key.$ordinal$f_Accept__org_jboss_elemento_Key, "Accept");
  Key.$f_Again__org_jboss_elemento_Key = Key.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("Again"), Key.$ordinal$f_Again__org_jboss_elemento_Key, "Again");
  Key.$f_Alt__org_jboss_elemento_Key = Key.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("Alt"), Key.$ordinal$f_Alt__org_jboss_elemento_Key, "Alt");
  Key.$f_AltGraph__org_jboss_elemento_Key = Key.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("AltGraph"), Key.$ordinal$f_AltGraph__org_jboss_elemento_Key, "AltGraph");
  Key.$f_ArrowDown__org_jboss_elemento_Key = Key.$create__java_lang_String__int__java_lang_String__arrayOf_java_lang_String($Util.$makeEnumName("ArrowDown"), Key.$ordinal$f_ArrowDown__org_jboss_elemento_Key, "ArrowDown", /**@type {!Array<?string>}*/ ($Arrays.$init(["Down"], j_l_String)));
  Key.$f_ArrowLeft__org_jboss_elemento_Key = Key.$create__java_lang_String__int__java_lang_String__arrayOf_java_lang_String($Util.$makeEnumName("ArrowLeft"), Key.$ordinal$f_ArrowLeft__org_jboss_elemento_Key, "ArrowLeft", /**@type {!Array<?string>}*/ ($Arrays.$init(["Left"], j_l_String)));
  Key.$f_ArrowRight__org_jboss_elemento_Key = Key.$create__java_lang_String__int__java_lang_String__arrayOf_java_lang_String($Util.$makeEnumName("ArrowRight"), Key.$ordinal$f_ArrowRight__org_jboss_elemento_Key, "ArrowRight", /**@type {!Array<?string>}*/ ($Arrays.$init(["Right"], j_l_String)));
  Key.$f_ArrowUp__org_jboss_elemento_Key = Key.$create__java_lang_String__int__java_lang_String__arrayOf_java_lang_String($Util.$makeEnumName("ArrowUp"), Key.$ordinal$f_ArrowUp__org_jboss_elemento_Key, "ArrowUp", /**@type {!Array<?string>}*/ ($Arrays.$init(["Up"], j_l_String)));
  Key.$f_Attn__org_jboss_elemento_Key = Key.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("Attn"), Key.$ordinal$f_Attn__org_jboss_elemento_Key, "Attn");
  Key.$f_Backspace__org_jboss_elemento_Key = Key.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("Backspace"), Key.$ordinal$f_Backspace__org_jboss_elemento_Key, "Backspace");
  Key.$f_BrightnessDown__org_jboss_elemento_Key = Key.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("BrightnessDown"), Key.$ordinal$f_BrightnessDown__org_jboss_elemento_Key, "BrightnessDown");
  Key.$f_BrightnessUp__org_jboss_elemento_Key = Key.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("BrightnessUp"), Key.$ordinal$f_BrightnessUp__org_jboss_elemento_Key, "BrightnessUp");
  Key.$f_Cancel__org_jboss_elemento_Key = Key.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("Cancel"), Key.$ordinal$f_Cancel__org_jboss_elemento_Key, "Cancel");
  Key.$f_CapsLock__org_jboss_elemento_Key = Key.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("CapsLock"), Key.$ordinal$f_CapsLock__org_jboss_elemento_Key, "CapsLock");
  Key.$f_Clear__org_jboss_elemento_Key = Key.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("Clear"), Key.$ordinal$f_Clear__org_jboss_elemento_Key, "Clear");
  Key.$f_ContextMenu__org_jboss_elemento_Key = Key.$create__java_lang_String__int__java_lang_String__arrayOf_java_lang_String($Util.$makeEnumName("ContextMenu"), Key.$ordinal$f_ContextMenu__org_jboss_elemento_Key, "ContextMenu", /**@type {!Array<?string>}*/ ($Arrays.$init(["Apps"], j_l_String)));
  Key.$f_Control__org_jboss_elemento_Key = Key.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("Control"), Key.$ordinal$f_Control__org_jboss_elemento_Key, "Control");
  Key.$f_Copy__org_jboss_elemento_Key = Key.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("Copy"), Key.$ordinal$f_Copy__org_jboss_elemento_Key, "Copy");
  Key.$f_CrSel__org_jboss_elemento_Key = Key.$create__java_lang_String__int__java_lang_String__arrayOf_java_lang_String($Util.$makeEnumName("CrSel"), Key.$ordinal$f_CrSel__org_jboss_elemento_Key, "CrSel", /**@type {!Array<?string>}*/ ($Arrays.$init(["Crsel"], j_l_String)));
  Key.$f_Cut__org_jboss_elemento_Key = Key.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("Cut"), Key.$ordinal$f_Cut__org_jboss_elemento_Key, "Cut");
  Key.$f_Delete__org_jboss_elemento_Key = Key.$create__java_lang_String__int__java_lang_String__arrayOf_java_lang_String($Util.$makeEnumName("Delete"), Key.$ordinal$f_Delete__org_jboss_elemento_Key, "Delete", /**@type {!Array<?string>}*/ ($Arrays.$init(["Del"], j_l_String)));
  Key.$f_Eject__org_jboss_elemento_Key = Key.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("Eject"), Key.$ordinal$f_Eject__org_jboss_elemento_Key, "Eject");
  Key.$f_End__org_jboss_elemento_Key = Key.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("End"), Key.$ordinal$f_End__org_jboss_elemento_Key, "End");
  Key.$f_Enter__org_jboss_elemento_Key = Key.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("Enter"), Key.$ordinal$f_Enter__org_jboss_elemento_Key, "Enter");
  Key.$f_EraseEof__org_jboss_elemento_Key = Key.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("EraseEof"), Key.$ordinal$f_EraseEof__org_jboss_elemento_Key, "EraseEof");
  Key.$f_Escape__org_jboss_elemento_Key = Key.$create__java_lang_String__int__java_lang_String__arrayOf_java_lang_String($Util.$makeEnumName("Escape"), Key.$ordinal$f_Escape__org_jboss_elemento_Key, "Escape", /**@type {!Array<?string>}*/ ($Arrays.$init(["Esc"], j_l_String)));
  Key.$f_Execute__org_jboss_elemento_Key = Key.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("Execute"), Key.$ordinal$f_Execute__org_jboss_elemento_Key, "Execute");
  Key.$f_ExSel__org_jboss_elemento_Key = Key.$create__java_lang_String__int__java_lang_String__arrayOf_java_lang_String($Util.$makeEnumName("ExSel"), Key.$ordinal$f_ExSel__org_jboss_elemento_Key, "ExSel", /**@type {!Array<?string>}*/ ($Arrays.$init(["Exsel"], j_l_String)));
  Key.$f_F1__org_jboss_elemento_Key = Key.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("F1"), Key.$ordinal$f_F1__org_jboss_elemento_Key, "F1");
  Key.$f_F10__org_jboss_elemento_Key = Key.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("F10"), Key.$ordinal$f_F10__org_jboss_elemento_Key, "F10");
  Key.$f_F11__org_jboss_elemento_Key = Key.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("F11"), Key.$ordinal$f_F11__org_jboss_elemento_Key, "F11");
  Key.$f_F13__org_jboss_elemento_Key = Key.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("F13"), Key.$ordinal$f_F13__org_jboss_elemento_Key, "F13");
  Key.$f_F14__org_jboss_elemento_Key = Key.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("F14"), Key.$ordinal$f_F14__org_jboss_elemento_Key, "F14");
  Key.$f_F15__org_jboss_elemento_Key = Key.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("F15"), Key.$ordinal$f_F15__org_jboss_elemento_Key, "F15");
  Key.$f_F16__org_jboss_elemento_Key = Key.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("F16"), Key.$ordinal$f_F16__org_jboss_elemento_Key, "F16");
  Key.$f_F17__org_jboss_elemento_Key = Key.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("F17"), Key.$ordinal$f_F17__org_jboss_elemento_Key, "F17");
  Key.$f_F18__org_jboss_elemento_Key = Key.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("F18"), Key.$ordinal$f_F18__org_jboss_elemento_Key, "F18");
  Key.$f_F19__org_jboss_elemento_Key = Key.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("F19"), Key.$ordinal$f_F19__org_jboss_elemento_Key, "F19");
  Key.$f_F2__org_jboss_elemento_Key = Key.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("F2"), Key.$ordinal$f_F2__org_jboss_elemento_Key, "F2");
  Key.$f_F20__org_jboss_elemento_Key = Key.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("F20"), Key.$ordinal$f_F20__org_jboss_elemento_Key, "F20");
  Key.$f_F3__org_jboss_elemento_Key = Key.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("F3"), Key.$ordinal$f_F3__org_jboss_elemento_Key, "F3");
  Key.$f_F4__org_jboss_elemento_Key = Key.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("F4"), Key.$ordinal$f_F4__org_jboss_elemento_Key, "F4");
  Key.$f_F5__org_jboss_elemento_Key = Key.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("F5"), Key.$ordinal$f_F5__org_jboss_elemento_Key, "F5");
  Key.$f_F6__org_jboss_elemento_Key = Key.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("F6"), Key.$ordinal$f_F6__org_jboss_elemento_Key, "F6");
  Key.$f_F7__org_jboss_elemento_Key = Key.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("F7"), Key.$ordinal$f_F7__org_jboss_elemento_Key, "F7");
  Key.$f_F8__org_jboss_elemento_Key = Key.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("F8"), Key.$ordinal$f_F8__org_jboss_elemento_Key, "F8");
  Key.$f_F9__org_jboss_elemento_Key = Key.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("F9"), Key.$ordinal$f_F9__org_jboss_elemento_Key, "F9");
  Key.$f_Find__org_jboss_elemento_Key = Key.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("Find"), Key.$ordinal$f_Find__org_jboss_elemento_Key, "Find");
  Key.$f_Finish__org_jboss_elemento_Key = Key.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("Finish"), Key.$ordinal$f_Finish__org_jboss_elemento_Key, "Finish");
  Key.$f_Fn__org_jboss_elemento_Key = Key.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("Fn"), Key.$ordinal$f_Fn__org_jboss_elemento_Key, "Fn");
  Key.$f_FnLock__org_jboss_elemento_Key = Key.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("FnLock"), Key.$ordinal$f_FnLock__org_jboss_elemento_Key, "FnLock");
  Key.$f_Help__org_jboss_elemento_Key = Key.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("Help"), Key.$ordinal$f_Help__org_jboss_elemento_Key, "Help");
  Key.$f_Hibernate__org_jboss_elemento_Key = Key.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("Hibernate"), Key.$ordinal$f_Hibernate__org_jboss_elemento_Key, "Hibernate");
  Key.$f_Home__org_jboss_elemento_Key = Key.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("Home"), Key.$ordinal$f_Home__org_jboss_elemento_Key, "Home");
  Key.$f_Insert__org_jboss_elemento_Key = Key.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("Insert"), Key.$ordinal$f_Insert__org_jboss_elemento_Key, "Insert");
  Key.$f_LogOff__org_jboss_elemento_Key = Key.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("LogOff"), Key.$ordinal$f_LogOff__org_jboss_elemento_Key, "LogOff");
  Key.$f_Meta__org_jboss_elemento_Key = Key.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("Meta"), Key.$ordinal$f_Meta__org_jboss_elemento_Key, "Meta");
  Key.$f_NumLock__org_jboss_elemento_Key = Key.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("NumLock"), Key.$ordinal$f_NumLock__org_jboss_elemento_Key, "NumLock");
  Key.$f_PageDown__org_jboss_elemento_Key = Key.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("PageDown"), Key.$ordinal$f_PageDown__org_jboss_elemento_Key, "PageDown");
  Key.$f_PageUp__org_jboss_elemento_Key = Key.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("PageUp"), Key.$ordinal$f_PageUp__org_jboss_elemento_Key, "PageUp");
  Key.$f_Paste__org_jboss_elemento_Key = Key.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("Paste"), Key.$ordinal$f_Paste__org_jboss_elemento_Key, "Paste");
  Key.$f_Pause__org_jboss_elemento_Key = Key.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("Pause"), Key.$ordinal$f_Pause__org_jboss_elemento_Key, "Pause");
  Key.$f_Play__org_jboss_elemento_Key = Key.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("Play"), Key.$ordinal$f_Play__org_jboss_elemento_Key, "Play");
  Key.$f_Power__org_jboss_elemento_Key = Key.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("Power"), Key.$ordinal$f_Power__org_jboss_elemento_Key, "Power");
  Key.$f_PowerOff__org_jboss_elemento_Key = Key.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("PowerOff"), Key.$ordinal$f_PowerOff__org_jboss_elemento_Key, "PowerOff");
  Key.$f_PrintScreen__org_jboss_elemento_Key = Key.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("PrintScreen"), Key.$ordinal$f_PrintScreen__org_jboss_elemento_Key, "PrintScreen");
  Key.$f_Props__org_jboss_elemento_Key = Key.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("Props"), Key.$ordinal$f_Props__org_jboss_elemento_Key, "Props");
  Key.$f_Redo__org_jboss_elemento_Key = Key.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("Redo"), Key.$ordinal$f_Redo__org_jboss_elemento_Key, "Redo");
  Key.$f_ScrollLock__org_jboss_elemento_Key = Key.$create__java_lang_String__int__java_lang_String__arrayOf_java_lang_String($Util.$makeEnumName("ScrollLock"), Key.$ordinal$f_ScrollLock__org_jboss_elemento_Key, "ScrollLock", /**@type {!Array<?string>}*/ ($Arrays.$init(["Scroll"], j_l_String)));
  Key.$f_Select__org_jboss_elemento_Key = Key.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("Select"), Key.$ordinal$f_Select__org_jboss_elemento_Key, "Select");
  Key.$f_Shift__org_jboss_elemento_Key = Key.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("Shift"), Key.$ordinal$f_Shift__org_jboss_elemento_Key, "Shift");
  Key.$f_Soft1__org_jboss_elemento_Key = Key.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("Soft1"), Key.$ordinal$f_Soft1__org_jboss_elemento_Key, "Soft1");
  Key.$f_Soft2__org_jboss_elemento_Key = Key.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("Soft2"), Key.$ordinal$f_Soft2__org_jboss_elemento_Key, "Soft2");
  Key.$f_Soft3__org_jboss_elemento_Key = Key.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("Soft3"), Key.$ordinal$f_Soft3__org_jboss_elemento_Key, "Soft3");
  Key.$f_Soft4__org_jboss_elemento_Key = Key.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("Soft4"), Key.$ordinal$f_Soft4__org_jboss_elemento_Key, "Soft4");
  Key.$f_Spacebar__org_jboss_elemento_Key = Key.$create__java_lang_String__int__java_lang_String__arrayOf_java_lang_String($Util.$makeEnumName("Spacebar"), Key.$ordinal$f_Spacebar__org_jboss_elemento_Key, " ", /**@type {!Array<?string>}*/ ($Arrays.$init(["Spacebar"], j_l_String)));
  Key.$f_Standby__org_jboss_elemento_Key = Key.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("Standby"), Key.$ordinal$f_Standby__org_jboss_elemento_Key, "Standby");
  Key.$f_Symbol__org_jboss_elemento_Key = Key.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("Symbol"), Key.$ordinal$f_Symbol__org_jboss_elemento_Key, "Symbol");
  Key.$f_SymbolLock__org_jboss_elemento_Key = Key.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("SymbolLock"), Key.$ordinal$f_SymbolLock__org_jboss_elemento_Key, "SymbolLock");
  Key.$f_Tab__org_jboss_elemento_Key = Key.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("Tab"), Key.$ordinal$f_Tab__org_jboss_elemento_Key, "Tab");
  Key.$f_Undo__org_jboss_elemento_Key = Key.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("Undo"), Key.$ordinal$f_Undo__org_jboss_elemento_Key, "Undo");
  Key.$f_Unidentified__org_jboss_elemento_Key = Key.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("Unidentified"), Key.$ordinal$f_Unidentified__org_jboss_elemento_Key, "");
  Key.$f_WakeUp__org_jboss_elemento_Key = Key.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("WakeUp"), Key.$ordinal$f_WakeUp__org_jboss_elemento_Key, "WakeUp");
  Key.$f_ZoomIn__org_jboss_elemento_Key = Key.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("ZoomIn"), Key.$ordinal$f_ZoomIn__org_jboss_elemento_Key, "ZoomIn");
  Key.$f_ZoomOut__org_jboss_elemento_Key = Key.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("ZoomOut"), Key.$ordinal$f_ZoomOut__org_jboss_elemento_Key, "ZoomOut");
  Key.f_keys__org_jboss_elemento_Key_ = /**@type {!HashMap<?string, Key>}*/ (HashMap.$create__());
  for (let $array = Key.m_values__(), $index = 0; $index < $array.length; $index++) {
   let key = $array[$index];
   Key.f_keys__org_jboss_elemento_Key_.put(key.f_key__org_jboss_elemento_Key_, key);
   if (!$Equality.$same(key.f_alternatives__org_jboss_elemento_Key_, null)) {
    for (let $array_1 = key.f_alternatives__org_jboss_elemento_Key_, $index_1 = 0; $index_1 < $array_1.length; $index_1++) {
     let alternative = $array_1[$index_1];
     Key.f_keys__org_jboss_elemento_Key_.put(alternative, key);
    }
   }
  }
  Key.f_namesToValuesMap__org_jboss_elemento_Key_ = null;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Key;
 }
 
 static $loadModules() {
  $Overlay = goog.module.get('elemental2.dom.KeyboardEvent.$Overlay$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  HashMap = goog.module.get('java.util.HashMap$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
  $Enums = goog.module.get('vmbootstrap.Enums$impl');
 }
 
}
$Util.$setClassMetadataForEnum(Key, 'org.jboss.elemento.Key');

/**@private {!Key}*/
Key.$f_Accept__org_jboss_elemento_Key;
/**@private {!Key}*/
Key.$f_Again__org_jboss_elemento_Key;
/**@private {!Key}*/
Key.$f_Alt__org_jboss_elemento_Key;
/**@private {!Key}*/
Key.$f_AltGraph__org_jboss_elemento_Key;
/**@private {!Key}*/
Key.$f_ArrowDown__org_jboss_elemento_Key;
/**@private {!Key}*/
Key.$f_ArrowLeft__org_jboss_elemento_Key;
/**@private {!Key}*/
Key.$f_ArrowRight__org_jboss_elemento_Key;
/**@private {!Key}*/
Key.$f_ArrowUp__org_jboss_elemento_Key;
/**@private {!Key}*/
Key.$f_Attn__org_jboss_elemento_Key;
/**@private {!Key}*/
Key.$f_Backspace__org_jboss_elemento_Key;
/**@private {!Key}*/
Key.$f_BrightnessDown__org_jboss_elemento_Key;
/**@private {!Key}*/
Key.$f_BrightnessUp__org_jboss_elemento_Key;
/**@private {!Key}*/
Key.$f_Cancel__org_jboss_elemento_Key;
/**@private {!Key}*/
Key.$f_CapsLock__org_jboss_elemento_Key;
/**@private {!Key}*/
Key.$f_Clear__org_jboss_elemento_Key;
/**@private {!Key}*/
Key.$f_ContextMenu__org_jboss_elemento_Key;
/**@private {!Key}*/
Key.$f_Control__org_jboss_elemento_Key;
/**@private {!Key}*/
Key.$f_Copy__org_jboss_elemento_Key;
/**@private {!Key}*/
Key.$f_CrSel__org_jboss_elemento_Key;
/**@private {!Key}*/
Key.$f_Cut__org_jboss_elemento_Key;
/**@private {!Key}*/
Key.$f_Delete__org_jboss_elemento_Key;
/**@private {!Key}*/
Key.$f_Eject__org_jboss_elemento_Key;
/**@private {!Key}*/
Key.$f_End__org_jboss_elemento_Key;
/**@private {!Key}*/
Key.$f_Enter__org_jboss_elemento_Key;
/**@private {!Key}*/
Key.$f_EraseEof__org_jboss_elemento_Key;
/**@private {!Key}*/
Key.$f_Escape__org_jboss_elemento_Key;
/**@private {!Key}*/
Key.$f_Execute__org_jboss_elemento_Key;
/**@private {!Key}*/
Key.$f_ExSel__org_jboss_elemento_Key;
/**@private {!Key}*/
Key.$f_F1__org_jboss_elemento_Key;
/**@private {!Key}*/
Key.$f_F10__org_jboss_elemento_Key;
/**@private {!Key}*/
Key.$f_F11__org_jboss_elemento_Key;
/**@private {!Key}*/
Key.$f_F13__org_jboss_elemento_Key;
/**@private {!Key}*/
Key.$f_F14__org_jboss_elemento_Key;
/**@private {!Key}*/
Key.$f_F15__org_jboss_elemento_Key;
/**@private {!Key}*/
Key.$f_F16__org_jboss_elemento_Key;
/**@private {!Key}*/
Key.$f_F17__org_jboss_elemento_Key;
/**@private {!Key}*/
Key.$f_F18__org_jboss_elemento_Key;
/**@private {!Key}*/
Key.$f_F19__org_jboss_elemento_Key;
/**@private {!Key}*/
Key.$f_F2__org_jboss_elemento_Key;
/**@private {!Key}*/
Key.$f_F20__org_jboss_elemento_Key;
/**@private {!Key}*/
Key.$f_F3__org_jboss_elemento_Key;
/**@private {!Key}*/
Key.$f_F4__org_jboss_elemento_Key;
/**@private {!Key}*/
Key.$f_F5__org_jboss_elemento_Key;
/**@private {!Key}*/
Key.$f_F6__org_jboss_elemento_Key;
/**@private {!Key}*/
Key.$f_F7__org_jboss_elemento_Key;
/**@private {!Key}*/
Key.$f_F8__org_jboss_elemento_Key;
/**@private {!Key}*/
Key.$f_F9__org_jboss_elemento_Key;
/**@private {!Key}*/
Key.$f_Find__org_jboss_elemento_Key;
/**@private {!Key}*/
Key.$f_Finish__org_jboss_elemento_Key;
/**@private {!Key}*/
Key.$f_Fn__org_jboss_elemento_Key;
/**@private {!Key}*/
Key.$f_FnLock__org_jboss_elemento_Key;
/**@private {!Key}*/
Key.$f_Help__org_jboss_elemento_Key;
/**@private {!Key}*/
Key.$f_Hibernate__org_jboss_elemento_Key;
/**@private {!Key}*/
Key.$f_Home__org_jboss_elemento_Key;
/**@private {!Key}*/
Key.$f_Insert__org_jboss_elemento_Key;
/**@private {!Key}*/
Key.$f_LogOff__org_jboss_elemento_Key;
/**@private {!Key}*/
Key.$f_Meta__org_jboss_elemento_Key;
/**@private {!Key}*/
Key.$f_NumLock__org_jboss_elemento_Key;
/**@private {!Key}*/
Key.$f_PageDown__org_jboss_elemento_Key;
/**@private {!Key}*/
Key.$f_PageUp__org_jboss_elemento_Key;
/**@private {!Key}*/
Key.$f_Paste__org_jboss_elemento_Key;
/**@private {!Key}*/
Key.$f_Pause__org_jboss_elemento_Key;
/**@private {!Key}*/
Key.$f_Play__org_jboss_elemento_Key;
/**@private {!Key}*/
Key.$f_Power__org_jboss_elemento_Key;
/**@private {!Key}*/
Key.$f_PowerOff__org_jboss_elemento_Key;
/**@private {!Key}*/
Key.$f_PrintScreen__org_jboss_elemento_Key;
/**@private {!Key}*/
Key.$f_Props__org_jboss_elemento_Key;
/**@private {!Key}*/
Key.$f_Redo__org_jboss_elemento_Key;
/**@private {!Key}*/
Key.$f_ScrollLock__org_jboss_elemento_Key;
/**@private {!Key}*/
Key.$f_Select__org_jboss_elemento_Key;
/**@private {!Key}*/
Key.$f_Shift__org_jboss_elemento_Key;
/**@private {!Key}*/
Key.$f_Soft1__org_jboss_elemento_Key;
/**@private {!Key}*/
Key.$f_Soft2__org_jboss_elemento_Key;
/**@private {!Key}*/
Key.$f_Soft3__org_jboss_elemento_Key;
/**@private {!Key}*/
Key.$f_Soft4__org_jboss_elemento_Key;
/**@private {!Key}*/
Key.$f_Spacebar__org_jboss_elemento_Key;
/**@private {!Key}*/
Key.$f_Standby__org_jboss_elemento_Key;
/**@private {!Key}*/
Key.$f_Symbol__org_jboss_elemento_Key;
/**@private {!Key}*/
Key.$f_SymbolLock__org_jboss_elemento_Key;
/**@private {!Key}*/
Key.$f_Tab__org_jboss_elemento_Key;
/**@private {!Key}*/
Key.$f_Undo__org_jboss_elemento_Key;
/**@private {!Key}*/
Key.$f_Unidentified__org_jboss_elemento_Key;
/**@private {!Key}*/
Key.$f_WakeUp__org_jboss_elemento_Key;
/**@private {!Key}*/
Key.$f_ZoomIn__org_jboss_elemento_Key;
/**@private {!Key}*/
Key.$f_ZoomOut__org_jboss_elemento_Key;
/**@type {j_u_Map<?string, Key>}*/
Key.f_keys__org_jboss_elemento_Key_;
/**@type {Map<?string, !Key>}*/
Key.f_namesToValuesMap__org_jboss_elemento_Key_;
/**@const {number}*/
Key.$ordinal$f_Accept__org_jboss_elemento_Key = 0;
/**@const {number}*/
Key.$ordinal$f_Again__org_jboss_elemento_Key = 1;
/**@const {number}*/
Key.$ordinal$f_Alt__org_jboss_elemento_Key = 2;
/**@const {number}*/
Key.$ordinal$f_AltGraph__org_jboss_elemento_Key = 3;
/**@const {number}*/
Key.$ordinal$f_ArrowDown__org_jboss_elemento_Key = 4;
/**@const {number}*/
Key.$ordinal$f_ArrowLeft__org_jboss_elemento_Key = 5;
/**@const {number}*/
Key.$ordinal$f_ArrowRight__org_jboss_elemento_Key = 6;
/**@const {number}*/
Key.$ordinal$f_ArrowUp__org_jboss_elemento_Key = 7;
/**@const {number}*/
Key.$ordinal$f_Attn__org_jboss_elemento_Key = 8;
/**@const {number}*/
Key.$ordinal$f_Backspace__org_jboss_elemento_Key = 9;
/**@const {number}*/
Key.$ordinal$f_BrightnessDown__org_jboss_elemento_Key = 10;
/**@const {number}*/
Key.$ordinal$f_BrightnessUp__org_jboss_elemento_Key = 11;
/**@const {number}*/
Key.$ordinal$f_Cancel__org_jboss_elemento_Key = 12;
/**@const {number}*/
Key.$ordinal$f_CapsLock__org_jboss_elemento_Key = 13;
/**@const {number}*/
Key.$ordinal$f_Clear__org_jboss_elemento_Key = 14;
/**@const {number}*/
Key.$ordinal$f_ContextMenu__org_jboss_elemento_Key = 15;
/**@const {number}*/
Key.$ordinal$f_Control__org_jboss_elemento_Key = 16;
/**@const {number}*/
Key.$ordinal$f_Copy__org_jboss_elemento_Key = 17;
/**@const {number}*/
Key.$ordinal$f_CrSel__org_jboss_elemento_Key = 18;
/**@const {number}*/
Key.$ordinal$f_Cut__org_jboss_elemento_Key = 19;
/**@const {number}*/
Key.$ordinal$f_Delete__org_jboss_elemento_Key = 20;
/**@const {number}*/
Key.$ordinal$f_Eject__org_jboss_elemento_Key = 21;
/**@const {number}*/
Key.$ordinal$f_End__org_jboss_elemento_Key = 22;
/**@const {number}*/
Key.$ordinal$f_Enter__org_jboss_elemento_Key = 23;
/**@const {number}*/
Key.$ordinal$f_EraseEof__org_jboss_elemento_Key = 24;
/**@const {number}*/
Key.$ordinal$f_Escape__org_jboss_elemento_Key = 25;
/**@const {number}*/
Key.$ordinal$f_Execute__org_jboss_elemento_Key = 26;
/**@const {number}*/
Key.$ordinal$f_ExSel__org_jboss_elemento_Key = 27;
/**@const {number}*/
Key.$ordinal$f_F1__org_jboss_elemento_Key = 28;
/**@const {number}*/
Key.$ordinal$f_F10__org_jboss_elemento_Key = 29;
/**@const {number}*/
Key.$ordinal$f_F11__org_jboss_elemento_Key = 30;
/**@const {number}*/
Key.$ordinal$f_F13__org_jboss_elemento_Key = 31;
/**@const {number}*/
Key.$ordinal$f_F14__org_jboss_elemento_Key = 32;
/**@const {number}*/
Key.$ordinal$f_F15__org_jboss_elemento_Key = 33;
/**@const {number}*/
Key.$ordinal$f_F16__org_jboss_elemento_Key = 34;
/**@const {number}*/
Key.$ordinal$f_F17__org_jboss_elemento_Key = 35;
/**@const {number}*/
Key.$ordinal$f_F18__org_jboss_elemento_Key = 36;
/**@const {number}*/
Key.$ordinal$f_F19__org_jboss_elemento_Key = 37;
/**@const {number}*/
Key.$ordinal$f_F2__org_jboss_elemento_Key = 38;
/**@const {number}*/
Key.$ordinal$f_F20__org_jboss_elemento_Key = 39;
/**@const {number}*/
Key.$ordinal$f_F3__org_jboss_elemento_Key = 40;
/**@const {number}*/
Key.$ordinal$f_F4__org_jboss_elemento_Key = 41;
/**@const {number}*/
Key.$ordinal$f_F5__org_jboss_elemento_Key = 42;
/**@const {number}*/
Key.$ordinal$f_F6__org_jboss_elemento_Key = 43;
/**@const {number}*/
Key.$ordinal$f_F7__org_jboss_elemento_Key = 44;
/**@const {number}*/
Key.$ordinal$f_F8__org_jboss_elemento_Key = 45;
/**@const {number}*/
Key.$ordinal$f_F9__org_jboss_elemento_Key = 46;
/**@const {number}*/
Key.$ordinal$f_Find__org_jboss_elemento_Key = 47;
/**@const {number}*/
Key.$ordinal$f_Finish__org_jboss_elemento_Key = 48;
/**@const {number}*/
Key.$ordinal$f_Fn__org_jboss_elemento_Key = 49;
/**@const {number}*/
Key.$ordinal$f_FnLock__org_jboss_elemento_Key = 50;
/**@const {number}*/
Key.$ordinal$f_Help__org_jboss_elemento_Key = 51;
/**@const {number}*/
Key.$ordinal$f_Hibernate__org_jboss_elemento_Key = 52;
/**@const {number}*/
Key.$ordinal$f_Home__org_jboss_elemento_Key = 53;
/**@const {number}*/
Key.$ordinal$f_Insert__org_jboss_elemento_Key = 54;
/**@const {number}*/
Key.$ordinal$f_LogOff__org_jboss_elemento_Key = 55;
/**@const {number}*/
Key.$ordinal$f_Meta__org_jboss_elemento_Key = 56;
/**@const {number}*/
Key.$ordinal$f_NumLock__org_jboss_elemento_Key = 57;
/**@const {number}*/
Key.$ordinal$f_PageDown__org_jboss_elemento_Key = 58;
/**@const {number}*/
Key.$ordinal$f_PageUp__org_jboss_elemento_Key = 59;
/**@const {number}*/
Key.$ordinal$f_Paste__org_jboss_elemento_Key = 60;
/**@const {number}*/
Key.$ordinal$f_Pause__org_jboss_elemento_Key = 61;
/**@const {number}*/
Key.$ordinal$f_Play__org_jboss_elemento_Key = 62;
/**@const {number}*/
Key.$ordinal$f_Power__org_jboss_elemento_Key = 63;
/**@const {number}*/
Key.$ordinal$f_PowerOff__org_jboss_elemento_Key = 64;
/**@const {number}*/
Key.$ordinal$f_PrintScreen__org_jboss_elemento_Key = 65;
/**@const {number}*/
Key.$ordinal$f_Props__org_jboss_elemento_Key = 66;
/**@const {number}*/
Key.$ordinal$f_Redo__org_jboss_elemento_Key = 67;
/**@const {number}*/
Key.$ordinal$f_ScrollLock__org_jboss_elemento_Key = 68;
/**@const {number}*/
Key.$ordinal$f_Select__org_jboss_elemento_Key = 69;
/**@const {number}*/
Key.$ordinal$f_Shift__org_jboss_elemento_Key = 70;
/**@const {number}*/
Key.$ordinal$f_Soft1__org_jboss_elemento_Key = 71;
/**@const {number}*/
Key.$ordinal$f_Soft2__org_jboss_elemento_Key = 72;
/**@const {number}*/
Key.$ordinal$f_Soft3__org_jboss_elemento_Key = 73;
/**@const {number}*/
Key.$ordinal$f_Soft4__org_jboss_elemento_Key = 74;
/**@const {number}*/
Key.$ordinal$f_Spacebar__org_jboss_elemento_Key = 75;
/**@const {number}*/
Key.$ordinal$f_Standby__org_jboss_elemento_Key = 76;
/**@const {number}*/
Key.$ordinal$f_Symbol__org_jboss_elemento_Key = 77;
/**@const {number}*/
Key.$ordinal$f_SymbolLock__org_jboss_elemento_Key = 78;
/**@const {number}*/
Key.$ordinal$f_Tab__org_jboss_elemento_Key = 79;
/**@const {number}*/
Key.$ordinal$f_Undo__org_jboss_elemento_Key = 80;
/**@const {number}*/
Key.$ordinal$f_Unidentified__org_jboss_elemento_Key = 81;
/**@const {number}*/
Key.$ordinal$f_WakeUp__org_jboss_elemento_Key = 82;
/**@const {number}*/
Key.$ordinal$f_ZoomIn__org_jboss_elemento_Key = 83;
/**@const {number}*/
Key.$ordinal$f_ZoomOut__org_jboss_elemento_Key = 84;

exports = Key; 
//# sourceMappingURL=Key.js.map
