goog.module('io.crysknife.client.internal.collections.BiMap');

goog.require('java.util.HashMap');
goog.require('nativebootstrap.Util');
goog.require('java.util.Map');
goog.require('java.util.Map.Entry');
goog.require('java.util.function.BiConsumer');
goog.require('java.util.function.BiFunction');
goog.require('java.util.function.Function');
goog.require('java.util.stream.Collector');
goog.require('java.util.stream.Collectors');
goog.require('vmbootstrap.Casts');

const BiMap = goog.require('io.crysknife.client.internal.collections.BiMap$impl');
exports = BiMap; 
