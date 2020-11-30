goog.module('org.gwtproject.dom.client.Text.$Overlay$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let $Overlay = goog.forwardDeclare('org.gwtproject.dom.client.Node.$Overlay$impl');
let $Asserts = goog.forwardDeclare('vmbootstrap.Asserts$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

class Text_$Overlay {
 /** @return {Object} */
 static m_as__org_gwtproject_dom_client_Node(/** Object */ node) {
  Text_$Overlay.$clinit();
  $Asserts.$assert(node.nodeType == Node.TEXT_NODE);
  return /**@type {Object}*/ ($Casts.$to(node, Text_$Overlay));
 }
 
 static $clinit() {
  Text_$Overlay.$clinit = () =>{};
  Text_$Overlay.$loadModules();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Object;
 }
 
 static $loadModules() {
  $Asserts = goog.module.get('vmbootstrap.Asserts$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
 
}
$Util.$setClassMetadata(Text_$Overlay, 'Object');

exports = Text_$Overlay; 
//# sourceMappingURL=Text$$Overlay.js.map
