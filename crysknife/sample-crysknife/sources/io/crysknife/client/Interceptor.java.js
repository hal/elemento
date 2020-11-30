goog.module('io.crysknife.client.Interceptor');

goog.require('java.lang.Object');
goog.require('nativebootstrap.Util');
goog.require('io.crysknife.client.Proxy.$Overlay');
goog.require('io.crysknife.client.ProxyGetInterceptor');
goog.require('io.crysknife.client.ProxySetInterceptor');
goog.require('java.util.function.BiFunction');
goog.require('jsinterop.base.Js');
goog.require('jsinterop.base.JsPropertyMap.$Overlay');

const Interceptor = goog.require('io.crysknife.client.Interceptor$impl');
exports = Interceptor; 
