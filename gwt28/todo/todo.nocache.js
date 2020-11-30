function todo(){
  var $intern_0 = 'bootstrap', $intern_1 = 'begin', $intern_2 = 'gwt.codesvr.todo=', $intern_3 = 'gwt.codesvr=', $intern_4 = 'todo', $intern_5 = 'startup', $intern_6 = 'DUMMY', $intern_7 = 0, $intern_8 = 1, $intern_9 = 'iframe', $intern_10 = 'position:absolute; width:0; height:0; border:none; left: -1000px;', $intern_11 = ' top: -1000px;', $intern_12 = 'CSS1Compat', $intern_13 = '<!doctype html>', $intern_14 = '', $intern_15 = '<html><head><\/head><body><\/body><\/html>', $intern_16 = 'undefined', $intern_17 = 'readystatechange', $intern_18 = 10, $intern_19 = 'script', $intern_20 = 'javascript', $intern_21 = 'Failed to load ', $intern_22 = 'moduleStartup', $intern_23 = 'scriptTagAdded', $intern_24 = 'moduleRequested', $intern_25 = 'meta', $intern_26 = 'name', $intern_27 = 'todo::', $intern_28 = '::', $intern_29 = 'gwt:property', $intern_30 = 'content', $intern_31 = '=', $intern_32 = 'gwt:onPropertyErrorFn', $intern_33 = 'Bad handler "', $intern_34 = '" for "gwt:onPropertyErrorFn"', $intern_35 = 'gwt:onLoadErrorFn', $intern_36 = '" for "gwt:onLoadErrorFn"', $intern_37 = '#', $intern_38 = '?', $intern_39 = '/', $intern_40 = 'img', $intern_41 = 'clear.cache.gif', $intern_42 = 'baseUrl', $intern_43 = 'todo.nocache.js', $intern_44 = 'base', $intern_45 = '//', $intern_46 = 'selectingPermutation', $intern_47 = 'todo.devmode.js', $intern_48 = '3E9ECF086693EB3D1F365C6BA32C78B9', $intern_49 = ':', $intern_50 = '.cache.js', $intern_51 = 'loadExternalRefs', $intern_52 = 'end', $intern_53 = 'http:', $intern_54 = 'file:', $intern_55 = '_gwt_dummy_', $intern_56 = '__gwtDevModeHook:todo', $intern_57 = 'Ignoring non-whitelisted Dev Mode URL: ', $intern_58 = ':moduleBase', $intern_59 = 'head';
  var $wnd = window;
  var $doc = document;
  sendStats($intern_0, $intern_1);
  function isHostedMode(){
    var query = $wnd.location.search;
    return query.indexOf($intern_2) != -1 || query.indexOf($intern_3) != -1;
  }

  function sendStats(evtGroupString, typeString){
    if ($wnd.__gwtStatsEvent) {
      $wnd.__gwtStatsEvent({moduleName:$intern_4, sessionId:$wnd.__gwtStatsSessionId, subSystem:$intern_5, evtGroup:evtGroupString, millis:(new Date).getTime(), type:typeString});
    }
  }

  todo.__sendStats = sendStats;
  todo.__moduleName = $intern_4;
  todo.__errFn = null;
  todo.__moduleBase = $intern_6;
  todo.__softPermutationId = $intern_7;
  todo.__computePropValue = null;
  todo.__getPropMap = null;
  todo.__installRunAsyncCode = function(){
  }
  ;
  todo.__gwtStartLoadingFragment = function(){
    return null;
  }
  ;
  todo.__gwt_isKnownPropertyValue = function(){
    return false;
  }
  ;
  todo.__gwt_getMetaProperty = function(){
    return null;
  }
  ;
  var __propertyErrorFunction = null;
  var activeModules = $wnd.__gwt_activeModules = $wnd.__gwt_activeModules || {};
  activeModules[$intern_4] = {moduleName:$intern_4};
  todo.__moduleStartupDone = function(permProps){
    var oldBindings = activeModules[$intern_4].bindings;
    activeModules[$intern_4].bindings = function(){
      var props = oldBindings?oldBindings():{};
      var embeddedProps = permProps[todo.__softPermutationId];
      for (var i = $intern_7; i < embeddedProps.length; i++) {
        var pair = embeddedProps[i];
        props[pair[$intern_7]] = pair[$intern_8];
      }
      return props;
    }
    ;
  }
  ;
  var frameDoc;
  function getInstallLocationDoc(){
    setupInstallLocation();
    return frameDoc;
  }

  function setupInstallLocation(){
    if (frameDoc) {
      return;
    }
    var scriptFrame = $doc.createElement($intern_9);
    scriptFrame.id = $intern_4;
    scriptFrame.style.cssText = $intern_10 + $intern_11;
    scriptFrame.tabIndex = -1;
    $doc.body.appendChild(scriptFrame);
    frameDoc = scriptFrame.contentWindow.document;
    frameDoc.open();
    var doctype = document.compatMode == $intern_12?$intern_13:$intern_14;
    frameDoc.write(doctype + $intern_15);
    frameDoc.close();
  }

  function installScript(filename){
    function setupWaitForBodyLoad(callback){
      function isBodyLoaded(){
        if (typeof $doc.readyState == $intern_16) {
          return typeof $doc.body != $intern_16 && $doc.body != null;
        }
        return /loaded|complete/.test($doc.readyState);
      }

      var bodyDone = isBodyLoaded();
      if (bodyDone) {
        callback();
        return;
      }
      function checkBodyDone(){
        if (!bodyDone) {
          if (!isBodyLoaded()) {
            return;
          }
          bodyDone = true;
          callback();
          if ($doc.removeEventListener) {
            $doc.removeEventListener($intern_17, checkBodyDone, false);
          }
          if (onBodyDoneTimerId) {
            clearInterval(onBodyDoneTimerId);
          }
        }
      }

      if ($doc.addEventListener) {
        $doc.addEventListener($intern_17, checkBodyDone, false);
      }
      var onBodyDoneTimerId = setInterval(function(){
        checkBodyDone();
      }
      , $intern_18);
    }

    function installCode(code_0){
      var doc = getInstallLocationDoc();
      var docbody = doc.body;
      var script = doc.createElement($intern_19);
      script.language = $intern_20;
      script.src = code_0;
      if (todo.__errFn) {
        script.onerror = function(){
          todo.__errFn($intern_4, new Error($intern_21 + code_0));
        }
        ;
      }
      docbody.appendChild(script);
      sendStats($intern_22, $intern_23);
    }

    sendStats($intern_22, $intern_24);
    setupWaitForBodyLoad(function(){
      installCode(filename);
    }
    );
  }

  todo.__startLoadingFragment = function(fragmentFile){
    return computeUrlForResource(fragmentFile);
  }
  ;
  todo.__installRunAsyncCode = function(code_0){
    var doc = getInstallLocationDoc();
    var docbody = doc.body;
    var script = doc.createElement($intern_19);
    script.language = $intern_20;
    script.text = code_0;
    docbody.appendChild(script);
  }
  ;
  function processMetas(){
    var metaProps = {};
    var propertyErrorFunc;
    var onLoadErrorFunc;
    var metas = $doc.getElementsByTagName($intern_25);
    for (var i = $intern_7, n = metas.length; i < n; ++i) {
      var meta = metas[i], name_0 = meta.getAttribute($intern_26), content;
      if (name_0) {
        name_0 = name_0.replace($intern_27, $intern_14);
        if (name_0.indexOf($intern_28) >= $intern_7) {
          continue;
        }
        if (name_0 == $intern_29) {
          content = meta.getAttribute($intern_30);
          if (content) {
            var value_0, eq = content.indexOf($intern_31);
            if (eq >= $intern_7) {
              name_0 = content.substring($intern_7, eq);
              value_0 = content.substring(eq + $intern_8);
            }
             else {
              name_0 = content;
              value_0 = $intern_14;
            }
            metaProps[name_0] = value_0;
          }
        }
         else if (name_0 == $intern_32) {
          content = meta.getAttribute($intern_30);
          if (content) {
            try {
              propertyErrorFunc = eval(content);
            }
             catch (e) {
              alert($intern_33 + content + $intern_34);
            }
          }
        }
         else if (name_0 == $intern_35) {
          content = meta.getAttribute($intern_30);
          if (content) {
            try {
              onLoadErrorFunc = eval(content);
            }
             catch (e) {
              alert($intern_33 + content + $intern_36);
            }
          }
        }
      }
    }
    __gwt_getMetaProperty = function(name_0){
      var value_0 = metaProps[name_0];
      return value_0 == null?null:value_0;
    }
    ;
    __propertyErrorFunction = propertyErrorFunc;
    todo.__errFn = onLoadErrorFunc;
  }

  function computeScriptBase(){
    function getDirectoryOfFile(path){
      var hashIndex = path.lastIndexOf($intern_37);
      if (hashIndex == -1) {
        hashIndex = path.length;
      }
      var queryIndex = path.indexOf($intern_38);
      if (queryIndex == -1) {
        queryIndex = path.length;
      }
      var slashIndex = path.lastIndexOf($intern_39, Math.min(queryIndex, hashIndex));
      return slashIndex >= $intern_7?path.substring($intern_7, slashIndex + $intern_8):$intern_14;
    }

    function ensureAbsoluteUrl(url_0){
      if (url_0.match(/^\w+:\/\//)) {
      }
       else {
        var img = $doc.createElement($intern_40);
        img.src = url_0 + $intern_41;
        url_0 = getDirectoryOfFile(img.src);
      }
      return url_0;
    }

    function tryMetaTag(){
      var metaVal = __gwt_getMetaProperty($intern_42);
      if (metaVal != null) {
        return metaVal;
      }
      return $intern_14;
    }

    function tryNocacheJsTag(){
      var scriptTags = $doc.getElementsByTagName($intern_19);
      for (var i = $intern_7; i < scriptTags.length; ++i) {
        if (scriptTags[i].src.indexOf($intern_43) != -1) {
          return getDirectoryOfFile(scriptTags[i].src);
        }
      }
      return $intern_14;
    }

    function tryBaseTag(){
      var baseElements = $doc.getElementsByTagName($intern_44);
      if (baseElements.length > $intern_7) {
        return baseElements[baseElements.length - $intern_8].href;
      }
      return $intern_14;
    }

    function isLocationOk(){
      var loc = $doc.location;
      return loc.href == loc.protocol + $intern_45 + loc.host + loc.pathname + loc.search + loc.hash;
    }

    var tempBase = tryMetaTag();
    if (tempBase == $intern_14) {
      tempBase = tryNocacheJsTag();
    }
    if (tempBase == $intern_14) {
      tempBase = tryBaseTag();
    }
    if (tempBase == $intern_14 && isLocationOk()) {
      tempBase = getDirectoryOfFile($doc.location.href);
    }
    tempBase = ensureAbsoluteUrl(tempBase);
    return tempBase;
  }

  function computeUrlForResource(resource){
    if (resource.match(/^\//)) {
      return resource;
    }
    if (resource.match(/^[a-zA-Z]+:\/\//)) {
      return resource;
    }
    return todo.__moduleBase + resource;
  }

  function getCompiledCodeFilename(){
    var answers = [];
    var softPermutationId = $intern_7;
    var values = [];
    var providers = [];
    function computePropValue(propName){
      var value_0 = providers[propName](), allowedValuesMap = values[propName];
      if (value_0 in allowedValuesMap) {
        return value_0;
      }
      var allowedValuesList = [];
      for (var k in allowedValuesMap) {
        allowedValuesList[allowedValuesMap[k]] = k;
      }
      if (__propertyErrorFunction) {
        __propertyErrorFunction(propName, allowedValuesList, value_0);
      }
      throw null;
    }

    __gwt_isKnownPropertyValue = function(propName, propValue){
      return propValue in values[propName];
    }
    ;
    todo.__getPropMap = function(){
      var result = {};
      for (var key in values) {
        if (values.hasOwnProperty(key)) {
          result[key] = computePropValue(key);
        }
      }
      return result;
    }
    ;
    todo.__computePropValue = computePropValue;
    $wnd.__gwt_activeModules[$intern_4].bindings = todo.__getPropMap;
    sendStats($intern_0, $intern_46);
    if (isHostedMode()) {
      return computeUrlForResource($intern_47);
    }
    var strongName;
    try {
      strongName = $intern_48;
      var idx = strongName.indexOf($intern_49);
      if (idx != -1) {
        softPermutationId = parseInt(strongName.substring(idx + $intern_8), $intern_18);
        strongName = strongName.substring($intern_7, idx);
      }
    }
     catch (e) {
    }
    todo.__softPermutationId = softPermutationId;
    return computeUrlForResource(strongName + $intern_50);
  }

  function loadExternalStylesheets(){
    if (!$wnd.__gwt_stylesLoaded) {
      $wnd.__gwt_stylesLoaded = {};
    }
    sendStats($intern_51, $intern_1);
    sendStats($intern_51, $intern_52);
  }

  processMetas();
  todo.__moduleBase = computeScriptBase();
  activeModules[$intern_4].moduleBase = todo.__moduleBase;
  var filename = getCompiledCodeFilename();
  if ($wnd) {
    var devModePermitted = !!($wnd.location.protocol == $intern_53 || $wnd.location.protocol == $intern_54);
    $wnd.__gwt_activeModules[$intern_4].canRedirect = devModePermitted;
    function supportsSessionStorage(){
      var key = $intern_55;
      try {
        $wnd.sessionStorage.setItem(key, key);
        $wnd.sessionStorage.removeItem(key);
        return true;
      }
       catch (e) {
        return false;
      }
    }

    if (devModePermitted && supportsSessionStorage()) {
      var devModeKey = $intern_56;
      var devModeUrl = $wnd.sessionStorage[devModeKey];
      if (!/^http:\/\/(localhost|127\.0\.0\.1)(:\d+)?\/.*$/.test(devModeUrl)) {
        if (devModeUrl && (window.console && console.log)) {
          console.log($intern_57 + devModeUrl);
        }
        devModeUrl = $intern_14;
      }
      if (devModeUrl && !$wnd[devModeKey]) {
        $wnd[devModeKey] = true;
        $wnd[devModeKey + $intern_58] = computeScriptBase();
        var devModeScript = $doc.createElement($intern_19);
        devModeScript.src = devModeUrl;
        var head = $doc.getElementsByTagName($intern_59)[$intern_7];
        head.insertBefore(devModeScript, head.firstElementChild || head.children[$intern_7]);
        return false;
      }
    }
  }
  loadExternalStylesheets();
  sendStats($intern_0, $intern_52);
  installScript(filename);
  return true;
}

todo.succeeded = todo();
