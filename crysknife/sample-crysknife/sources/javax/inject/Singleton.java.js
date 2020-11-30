goog.module('javax.inject.Singleton');

goog.require('java.lang.annotation.Annotation');
goog.require('nativebootstrap.Util');
goog.require('java.lang.Class');
goog.require('javax.inject.Singleton.$LambdaAdaptor');

const Singleton = goog.require('javax.inject.Singleton$impl');
exports = Singleton; 
