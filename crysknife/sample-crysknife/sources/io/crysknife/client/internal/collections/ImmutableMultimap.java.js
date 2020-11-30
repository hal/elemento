goog.module('io.crysknife.client.internal.collections.ImmutableMultimap');

goog.require('io.crysknife.client.internal.collections.Multimap');
goog.require('nativebootstrap.Util');
goog.require('java.lang.UnsupportedOperationException');
goog.require('java.util.Collection');
goog.require('java.util.Collections');
goog.require('java.util.HashMap');
goog.require('java.util.List');
goog.require('java.util.Map');
goog.require('java.util.Map.Entry');
goog.require('java.util.Set');
goog.require('java.util.TreeMap');
goog.require('java.util.function.Consumer');
goog.require('java.util.stream.Collector');
goog.require('java.util.stream.Collectors');
goog.require('vmbootstrap.Casts');
goog.require('vmbootstrap.Exceptions');

const ImmutableMultimap = goog.require('io.crysknife.client.internal.collections.ImmutableMultimap$impl');
exports = ImmutableMultimap; 
