goog.module('io.crysknife.client.internal.AbstractBeanManager');

goog.require('io.crysknife.client.BeanManager');
goog.require('java.lang.Object');
goog.require('nativebootstrap.Util');
goog.require('io.crysknife.client.Instance');
goog.require('io.crysknife.client.internal.InstanceImpl');
goog.require('java.lang.Class');
goog.require('java.lang.Error');
goog.require('java.lang.String');
goog.require('java.util.HashMap');
goog.require('java.util.Map');
goog.require('javax.enterprise.inject.Default');
goog.require('javax.inject.Provider');
goog.require('nativebootstrap.Equality');
goog.require('vmbootstrap.Casts');
goog.require('vmbootstrap.Exceptions');

const AbstractBeanManager = goog.require('io.crysknife.client.internal.AbstractBeanManager$impl');
exports = AbstractBeanManager; 
