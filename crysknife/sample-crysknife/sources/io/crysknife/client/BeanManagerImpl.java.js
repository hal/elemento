goog.module('io.crysknife.client.BeanManagerImpl');

goog.require('io.crysknife.client.internal.AbstractBeanManager');
goog.require('nativebootstrap.Util');
goog.require('io.crysknife.client.BeanManager');
goog.require('io.crysknife.client.BeanManager_Factory');
goog.require('java.lang.Class');
goog.require('nativebootstrap.Equality');
goog.require('org.jboss.elemento.sample.crysknife.ApplicationElement');
goog.require('org.jboss.elemento.sample.crysknife.ApplicationElement_Factory');
goog.require('org.jboss.elemento.sample.crysknife.FooterElement');
goog.require('org.jboss.elemento.sample.crysknife.FooterElement_Factory');
goog.require('org.jboss.elemento.sample.crysknife.TodoRepository');
goog.require('org.jboss.elemento.sample.crysknife.TodoRepository_Factory');

const BeanManagerImpl = goog.require('io.crysknife.client.BeanManagerImpl$impl');
exports = BeanManagerImpl; 
