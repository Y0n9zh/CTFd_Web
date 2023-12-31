(function(modules){var installedModules={};function __webpack_require__(moduleId){if(installedModules[moduleId]){return installedModules[moduleId].exports}var module=installedModules[moduleId]={i:moduleId,l:false,exports:{}};modules[moduleId].call(module.exports,module,module.exports,__webpack_require__);module.l=true;return module.exports}__webpack_require__.m=modules;__webpack_require__.c=installedModules;__webpack_require__.d=function(exports,name,getter){if(!__webpack_require__.o(exports,name)){Object.defineProperty(exports,name,{enumerable:true,get:getter})}};__webpack_require__.r=function(exports){if(typeof Symbol!=="undefined"&&Symbol.toStringTag){Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"})}Object.defineProperty(exports,"__esModule",{value:true})};__webpack_require__.t=function(value,mode){if(mode&1){value=__webpack_require__(value)}if(mode&8){return value}if((mode&4)&&typeof value==="object"&&value&&value.__esModule){return value}var ns=Object.create(null);__webpack_require__.r(ns);Object.defineProperty(ns,"default",{enumerable:true,value:value});if(mode&2&&typeof value!="string"){for(var key in value){__webpack_require__.d(ns,key,function(key){return value[key]}.bind(null,key))}}return ns};__webpack_require__.n=function(module){var getter=module&&module.__esModule?function getDefault(){return module["default"]}:function getModuleExports(){return module};__webpack_require__.d(getter,"a",getter);return getter};__webpack_require__.o=function(object,property){return Object.prototype.hasOwnProperty.call(object,property)};__webpack_require__.p="";return __webpack_require__(__webpack_require__.s=26)})([,(function(module,exports,__webpack_require__){exports.__esModule=true;function translate(info,source){if(source===void 0){source=""}var version=info.version,size=info.size,downloadURL=info.downloadURL,downloadURLForNotSource=info.downloadURLForNotSource,date=info.date;if(source){return{version:version,size:size,downloadURL:downloadURL,date:date}}return{version:version,size:size,downloadURL:downloadURLForNotSource,date:date}}exports.translate=translate;function getURL(){var map={"www.flash.cn":"api.flash.cn","stage.flash.cn":"stage-api.flash.cn"};if(map[location.host]){return"//"+map[location.host]+"/config/flashVersion"}return"/config/flashVersion"}function request(callback){var callbackName="_flash_install_packages_";var original=window[callbackName];var script=document.createElement("script");window[callbackName]=function(json){window[callbackName]=original;setTimeout(function(){return document.body.removeChild(script)});callback(json)};script.src=getURL();document.body.appendChild(script)}var cache,loading;var callbacks=[];function getPackages(callback){if(cache){callback(cache)}else{callbacks.push(callback);if(!loading){loading=true;request(function(data){cache=data;for(var i=0;i<callbacks.length;i++){callbacks[i](data)}})}}}exports.getPackages=getPackages;exports.activex={check:function(browser){return/(IE|Microsoft Edge)/i.test(browser)},info:function(source,callback){if(source===void 0){source=""}getPackages(function(data){return callback(translate(data.activex,source))})}};exports.ppapi={check:function(browser){return/(Opera|Chrome)/i.test(browser)},info:function(source,callback){if(source===void 0){source=""}getPackages(function(data){return callback(translate(data.ppapi,source))})}};exports.npapi={check:function(browser){return/(Firefox|Safari)/i.test(browser)},info:function(source,callback){if(source===void 0){source=""}getPackages(function(data){return callback(translate(data.npapi,source))})}};var Linux=(function(){function Linux(){}Linux.prototype.arch=function(arch){return(this._arch=arch),this};Linux.prototype.type=function(type){return(this._type=type),this};Linux.prototype.get=function(){var _a=this,_arch=_a._arch,_type=_a._type;var info=function(source,callback){if(source===void 0){source=""}var key="linux-"+_arch+"-"+_type;getPackages(function(data){return callback(translate(data[key],source))})};return{info:info}};return Linux}());exports.linux=new Linux()}),(function(module,exports,__webpack_require__){exports.__esModule=true;var query={add:function(){var isEvent="addEventListener" in document;return isEvent?function(ele,type,handler){ele.addEventListener(type,handler,false)}:function(ele,type,handler){ele.attachEvent("on"+type,handler)}}(),remove:function(ele,type,handler){var isEvent="addEventListener" in document;return isEvent?function(ele,type,handler){ele.removeEventListener(type,handler,false)}:function(ele,type,handler){ele.detachEvent("on"+type,handler)}}(),getEvent:function(event){return event||window.event},getTarget:function(event){var e=query.getEvent(event);return e.target||e.srcElement},preventDefault:function(event){var e=query.getEvent(event);if(e.preventDefault){e.preventDefault()}else{e.returnValue=false}},stopPropagation:function(event){var e=query.getEvent(event);if(e.stopPropagation){e.stopPropagation()}else{e.cancelBubble=true}},addClass:function(node,classname){if(node.classList){node.classList.add(classname)
}else{if(node.className.indexOf(classname)==-1){node.className+=" "+classname}}},removeClass:function(node,classname){if(node.classList){node.classList.remove(classname)}else{var reg=eval("/\\s*"+classname+"/ig");node.className=node.className.replace(reg,"")}},hasClass:function(ele,className){if(ele.classList){return ele.classList.contains(className)}return new RegExp("\\b"+className+"\\b","i").test(ele.className)},getByClass:function(Classname,ele){var ele=ele||document;return ele.querySelectorAll?ele.querySelectorAll("."+Classname):(function(ele){var ele=ele.getElementsByTagName("*"),Result=[],re=new RegExp("\\b"+Classname+"\\b","i"),i=0;for(;i<ele.length;i++){if(re.test(ele[i].className)){Result.push(ele[i])}}return Result}(ele))},getNextNode:function(ele){if(ele.nextElementSibling){return ele.nextElementSibling}var e=ele.nextSibling;while(e&&1!==e.nodeType){e=e.nextSibling}return e},toArray:function(arr){var reduced=[];try{reduced=Array.prototype.slice.call(arr,0)}catch(ex){for(var i=0,len=arr.length;i<len;i++){reduced[i]=arr[i]}}return reduced},forEach:function(ary,callback){if(typeof ary.forEach=="function"){ary.forEach(function(value,index,a){callback.call(ary,value,index,a)})}else{for(var k=0,length=ary.length;k<length;k++){callback.call(ary,ary[k],k,ary)}}}};exports["default"]=query}),,(function(module,exports,__webpack_require__){exports.__esModule=true;function default_1(){var _hmt=_hmt||[];(function(){var hm=document.createElement("script");hm.src="https://hm.baidu.com/hm.js?ade42d4f682c4fca28c5f093052433c1";var s=document.getElementsByTagName("script")[0];s.parentNode.insertBefore(hm,s)})()}exports["default"]=default_1}),,,,,,,(function(module,exports,__webpack_require__){(function(module,global){var __WEBPACK_AMD_DEFINE_RESULT__;
/*!
 * Platform.js <https://mths.be/platform>
 * Copyright 2014-2018 Benjamin Tan <https://bnjmnt4n.now.sh/>
 * Copyright 2011-2013 John-David Dalton <http://allyoucanleet.com/>
 * Available under MIT license <https://mths.be/mit>
 */
(function(){var objectTypes={"function":true,"object":true};var root=(objectTypes[typeof window]&&window)||this;var oldRoot=root;var freeExports=objectTypes[typeof exports]&&exports;var freeModule=objectTypes[typeof module]&&module&&!module.nodeType&&module;var freeGlobal=freeExports&&freeModule&&typeof global=="object"&&global;if(freeGlobal&&(freeGlobal.global===freeGlobal||freeGlobal.window===freeGlobal||freeGlobal.self===freeGlobal)){root=freeGlobal}var maxSafeInteger=Math.pow(2,53)-1;var reOpera=/\bOpera/;var thisBinding=this;var objectProto=Object.prototype;var hasOwnProperty=objectProto.hasOwnProperty;var toString=objectProto.toString;function capitalize(string){string=String(string);return string.charAt(0).toUpperCase()+string.slice(1)}function cleanupOS(os,pattern,label){var data={"10.0":"10","6.4":"10 Technical Preview","6.3":"8.1","6.2":"8","6.1":"Server 2008 R2 / 7","6.0":"Server 2008 / Vista","5.2":"Server 2003 / XP 64-bit","5.1":"XP","5.01":"2000 SP1","5.0":"2000","4.0":"NT","4.90":"ME"};if(pattern&&label&&/^Win/i.test(os)&&!/^Windows Phone /i.test(os)&&(data=data[/[\d.]+$/.exec(os)])){os="Windows "+data}os=String(os);if(pattern&&label){os=os.replace(RegExp(pattern,"i"),label)}os=format(os.replace(/ ce$/i," CE").replace(/\bhpw/i,"web").replace(/\bMacintosh\b/,"Mac OS").replace(/_PowerPC\b/i," OS").replace(/\b(OS X) [^ \d]+/i,"$1").replace(/\bMac (OS X)\b/,"$1").replace(/\/(\d)/," $1").replace(/_/g,".").replace(/(?: BePC|[ .]*fc[ \d.]+)$/i,"").replace(/\bx86\.64\b/gi,"x86_64").replace(/\b(Windows Phone) OS\b/,"$1").replace(/\b(Chrome OS \w+) [\d.]+\b/,"$1").split(" on ")[0]);return os}function each(object,callback){var index=-1,length=object?object.length:0;if(typeof length=="number"&&length>-1&&length<=maxSafeInteger){while(++index<length){callback(object[index],index,object)}}else{forOwn(object,callback)}}function format(string){string=trim(string);return/^(?:webOS|i(?:OS|P))/.test(string)?string:capitalize(string)}function forOwn(object,callback){for(var key in object){if(hasOwnProperty.call(object,key)){callback(object[key],key,object)}}}function getClassOf(value){return value==null?capitalize(value):toString.call(value).slice(8,-1)}function isHostType(object,property){var type=object!=null?typeof object[property]:"number";return !/^(?:boolean|number|string|undefined)$/.test(type)&&(type=="object"?!!object[property]:true)}function qualify(string){return String(string).replace(/([ -])(?!$)/g,"$1?")}function reduce(array,callback){var accumulator=null;each(array,function(value,index){accumulator=callback(accumulator,value,index,array)});return accumulator}function trim(string){return String(string).replace(/^ +| +$/g,"")}function parse(ua){var context=root;var isCustomContext=ua&&typeof ua=="object"&&getClassOf(ua)!="String";if(isCustomContext){context=ua;ua=null}var nav=context.navigator||{};var userAgent=nav.userAgent||"";ua||(ua=userAgent);var isModuleScope=isCustomContext||thisBinding==oldRoot;var likeChrome=isCustomContext?!!nav.likeChrome:/\bChrome\b/.test(ua)&&!/internal|\n/i.test(toString.toString());
var objectClass="Object",airRuntimeClass=isCustomContext?objectClass:"ScriptBridgingProxyObject",enviroClass=isCustomContext?objectClass:"Environment",javaClass=(isCustomContext&&context.java)?"JavaPackage":getClassOf(context.java),phantomClass=isCustomContext?objectClass:"RuntimeObject";var java=/\bJava/.test(javaClass)&&context.java;var rhino=java&&getClassOf(context.environment)==enviroClass;var alpha=java?"a":"\u03b1";var beta=java?"b":"\u03b2";var doc=context.document||{};var opera=context.operamini||context.opera;var operaClass=reOpera.test(operaClass=(isCustomContext&&opera)?opera["[[Class]]"]:getClassOf(opera))?operaClass:(opera=null);var data;var arch=ua;var description=[];var prerelease=null;var useFeatures=ua==userAgent;var version=useFeatures&&opera&&typeof opera.version=="function"&&opera.version();var isSpecialCasedOS;var layout=getLayout([{"label":"EdgeHTML","pattern":"Edge"},"Trident",{"label":"WebKit","pattern":"AppleWebKit"},"iCab","Presto","NetFront","Tasman","KHTML","Gecko"]);var name=getName(["Adobe AIR","Arora","Avant Browser","Breach","Camino","Electron","Epiphany","Fennec","Flock","Galeon","GreenBrowser","iCab","Iceweasel","K-Meleon","Konqueror","Lunascape","Maxthon",{"label":"Microsoft Edge","pattern":"Edge"},"Midori","Nook Browser","PaleMoon","PhantomJS","Raven","Rekonq","RockMelt",{"label":"Samsung Internet","pattern":"SamsungBrowser"},"SeaMonkey",{"label":"Silk","pattern":"(?:Cloud9|Silk-Accelerated)"},"Sleipnir","SlimBrowser",{"label":"SRWare Iron","pattern":"Iron"},"Sunrise","Swiftfox","Waterfox","WebPositive","Opera Mini",{"label":"Opera Mini","pattern":"OPiOS"},"Opera",{"label":"Opera","pattern":"OPR"},"Chrome",{"label":"Chrome Mobile","pattern":"(?:CriOS|CrMo)"},{"label":"Firefox","pattern":"(?:Firefox|Minefield)"},{"label":"Firefox for iOS","pattern":"FxiOS"},{"label":"IE","pattern":"IEMobile"},{"label":"IE","pattern":"MSIE"},"Safari"]);var product=getProduct([{"label":"BlackBerry","pattern":"BB10"},"BlackBerry",{"label":"Galaxy S","pattern":"GT-I9000"},{"label":"Galaxy S2","pattern":"GT-I9100"},{"label":"Galaxy S3","pattern":"GT-I9300"},{"label":"Galaxy S4","pattern":"GT-I9500"},{"label":"Galaxy S5","pattern":"SM-G900"},{"label":"Galaxy S6","pattern":"SM-G920"},{"label":"Galaxy S6 Edge","pattern":"SM-G925"},{"label":"Galaxy S7","pattern":"SM-G930"},{"label":"Galaxy S7 Edge","pattern":"SM-G935"},"Google TV","Lumia","iPad","iPod","iPhone","Kindle",{"label":"Kindle Fire","pattern":"(?:Cloud9|Silk-Accelerated)"},"Nexus","Nook","PlayBook","PlayStation Vita","PlayStation","TouchPad","Transformer",{"label":"Wii U","pattern":"WiiU"},"Wii","Xbox One",{"label":"Xbox 360","pattern":"Xbox"},"Xoom"]);var manufacturer=getManufacturer({"Apple":{"iPad":1,"iPhone":1,"iPod":1},"Archos":{},"Amazon":{"Kindle":1,"Kindle Fire":1},"Asus":{"Transformer":1},"Barnes & Noble":{"Nook":1},"BlackBerry":{"PlayBook":1},"Google":{"Google TV":1,"Nexus":1},"HP":{"TouchPad":1},"HTC":{},"LG":{},"Microsoft":{"Xbox":1,"Xbox One":1},"Motorola":{"Xoom":1},"Nintendo":{"Wii U":1,"Wii":1},"Nokia":{"Lumia":1},"Samsung":{"Galaxy S":1,"Galaxy S2":1,"Galaxy S3":1,"Galaxy S4":1},"Sony":{"PlayStation":1,"PlayStation Vita":1}});var os=getOS(["Windows Phone","Android","CentOS",{"label":"Chrome OS","pattern":"CrOS"},"Debian","Fedora","FreeBSD","Gentoo","Haiku","Kubuntu","Linux Mint","OpenBSD","Red Hat","SuSE","Ubuntu","Xubuntu","Cygwin","Symbian OS","hpwOS","webOS ","webOS","Tablet OS","Tizen","Linux","Mac OS X","Macintosh","Mac","Windows 98;","Windows "]);function getLayout(guesses){return reduce(guesses,function(result,guess){return result||RegExp("\\b"+(guess.pattern||qualify(guess))+"\\b","i").exec(ua)&&(guess.label||guess)})}function getManufacturer(guesses){return reduce(guesses,function(result,value,key){return result||(value[product]||value[/^[a-z]+(?: +[a-z]+\b)*/i.exec(product)]||RegExp("\\b"+qualify(key)+"(?:\\b|\\w*\\d)","i").exec(ua))&&key})}function getName(guesses){return reduce(guesses,function(result,guess){return result||RegExp("\\b"+(guess.pattern||qualify(guess))+"\\b","i").exec(ua)&&(guess.label||guess)})}function getOS(guesses){return reduce(guesses,function(result,guess){var pattern=guess.pattern||qualify(guess);if(!result&&(result=RegExp("\\b"+pattern+"(?:/[\\d.]+|[ \\w.]*)","i").exec(ua))){result=cleanupOS(result,pattern,guess.label||guess)}return result})}function getProduct(guesses){return reduce(guesses,function(result,guess){var pattern=guess.pattern||qualify(guess);if(!result&&(result=RegExp("\\b"+pattern+" *\\d+[.\\w_]*","i").exec(ua)||RegExp("\\b"+pattern+" *\\w+-[\\w]*","i").exec(ua)||RegExp("\\b"+pattern+"(?:; *(?:[a-z]+[_-])?[a-z]+\\d+|[^ ();-]*)","i").exec(ua))){if((result=String((guess.label&&!RegExp(pattern,"i").test(guess.label))?guess.label:result).split("/"))[1]&&!/[\d.]+/.test(result[0])){result[0]+=" "+result[1]}guess=guess.label||guess;result=format(result[0].replace(RegExp(pattern,"i"),guess).replace(RegExp("; *(?:"+guess+"[_-])?","i")," ").replace(RegExp("("+guess+")[-_.]?(\\w)","i"),"$1 $2"))
}return result})}function getVersion(patterns){return reduce(patterns,function(result,pattern){return result||(RegExp(pattern+"(?:-[\\d.]+/|(?: for [\\w-]+)?[ /-])([\\d.]+[^ ();/_-]*)","i").exec(ua)||0)[1]||null})}function toStringPlatform(){return this.description||""}layout&&(layout=[layout]);if(manufacturer&&!product){product=getProduct([manufacturer])}if((data=/\bGoogle TV\b/.exec(product))){product=data[0]}if(/\bSimulator\b/i.test(ua)){product=(product?product+" ":"")+"Simulator"}if(name=="Opera Mini"&&/\bOPiOS\b/.test(ua)){description.push("running in Turbo/Uncompressed mode")}if(name=="IE"&&/\blike iPhone OS\b/.test(ua)){data=parse(ua.replace(/like iPhone OS/,""));manufacturer=data.manufacturer;product=data.product}else{if(/^iP/.test(product)){name||(name="Safari");os="iOS"+((data=/ OS ([\d_]+)/i.exec(ua))?" "+data[1].replace(/_/g,"."):"")}else{if(name=="Konqueror"&&!/buntu/i.test(os)){os="Kubuntu"}else{if((manufacturer&&manufacturer!="Google"&&((/Chrome/.test(name)&&!/\bMobile Safari\b/i.test(ua))||/\bVita\b/.test(product)))||(/\bAndroid\b/.test(os)&&/^Chrome/.test(name)&&/\bVersion\//i.test(ua))){name="Android Browser";os=/\bAndroid\b/.test(os)?os:"Android"}else{if(name=="Silk"){if(!/\bMobi/i.test(ua)){os="Android";description.unshift("desktop mode")}if(/Accelerated *= *true/i.test(ua)){description.unshift("accelerated")}}else{if(name=="PaleMoon"&&(data=/\bFirefox\/([\d.]+)\b/.exec(ua))){description.push("identifying as Firefox "+data[1])}else{if(name=="Firefox"&&(data=/\b(Mobile|Tablet|TV)\b/i.exec(ua))){os||(os="Firefox OS");product||(product=data[1])}else{if(!name||(data=!/\bMinefield\b/i.test(ua)&&/\b(?:Firefox|Safari)\b/.exec(name))){if(name&&!product&&/[\/,]|^[^(]+?\)/.test(ua.slice(ua.indexOf(data+"/")+8))){name=null}if((data=product||manufacturer||os)&&(product||manufacturer||/\b(?:Android|Symbian OS|Tablet OS|webOS)\b/.test(os))){name=/[a-z]+(?: Hat)?/i.exec(/\bAndroid\b/.test(os)?os:data)+" Browser"}}else{if(name=="Electron"&&(data=(/\bChrome\/([\d.]+)\b/.exec(ua)||0)[1])){description.push("Chromium "+data)}}}}}}}}}if(!version){version=getVersion(["(?:Cloud9|CriOS|CrMo|Edge|FxiOS|IEMobile|Iron|Opera ?Mini|OPiOS|OPR|Raven|SamsungBrowser|Silk(?!/[\\d.]+$))","Version",qualify(name),"(?:Firefox|Minefield|NetFront)"])}if((data=layout=="iCab"&&parseFloat(version)>3&&"WebKit"||/\bOpera\b/.test(name)&&(/\bOPR\b/.test(ua)?"Blink":"Presto")||/\b(?:Midori|Nook|Safari)\b/i.test(ua)&&!/^(?:Trident|EdgeHTML)$/.test(layout)&&"WebKit"||!layout&&/\bMSIE\b/i.test(ua)&&(os=="Mac OS"?"Tasman":"Trident")||layout=="WebKit"&&/\bPlayStation\b(?! Vita\b)/i.test(name)&&"NetFront")){layout=[data]}if(name=="IE"&&(data=(/; *(?:XBLWP|ZuneWP)(\d+)/i.exec(ua)||0)[1])){name+=" Mobile";os="Windows Phone "+(/\+$/.test(data)?data:data+".x");description.unshift("desktop mode")}else{if(/\bWPDesktop\b/i.test(ua)){name="IE Mobile";os="Windows Phone 8.x";description.unshift("desktop mode");version||(version=(/\brv:([\d.]+)/.exec(ua)||0)[1])}else{if(name!="IE"&&layout=="Trident"&&(data=/\brv:([\d.]+)/.exec(ua))){if(name){description.push("identifying as "+name+(version?" "+version:""))}name="IE";version=data[1]}}}if(useFeatures){if(isHostType(context,"global")){if(java){data=java.lang.System;arch=data.getProperty("os.arch");os=os||data.getProperty("os.name")+" "+data.getProperty("os.version")}if(rhino){try{version=context.require("ringo/engine").version.join(".");name="RingoJS"}catch(e){if((data=context.system)&&data.global.system==context.system){name="Narwhal";os||(os=data[0].os||null)}}if(!name){name="Rhino"}}else{if(typeof context.process=="object"&&!context.process.browser&&(data=context.process)){if(typeof data.versions=="object"){if(typeof data.versions.electron=="string"){description.push("Node "+data.versions.node);name="Electron";version=data.versions.electron}else{if(typeof data.versions.nw=="string"){description.push("Chromium "+version,"Node "+data.versions.node);name="NW.js";version=data.versions.nw}}}if(!name){name="Node.js";arch=data.arch;os=data.platform;version=/[\d.]+/.exec(data.version);version=version?version[0]:null}}}}else{if(getClassOf((data=context.runtime))==airRuntimeClass){name="Adobe AIR";os=data.flash.system.Capabilities.os}else{if(getClassOf((data=context.phantom))==phantomClass){name="PhantomJS";version=(data=data.version||null)&&(data.major+"."+data.minor+"."+data.patch)}else{if(typeof doc.documentMode=="number"&&(data=/\bTrident\/(\d+)/i.exec(ua))){version=[version,doc.documentMode];if((data=+data[1]+4)!=version[1]){description.push("IE "+version[1]+" mode");layout&&(layout[1]="");version[1]=data}version=name=="IE"?String(version[1].toFixed(1)):version[0]}else{if(typeof doc.documentMode=="number"&&/^(?:Chrome|Firefox)\b/.test(name)){description.push("masking as "+name+" "+version);name="IE";version="11.0";layout=["Trident"];os="Windows"}}}}}os=os&&format(os)}if(version&&(data=/(?:[ab]|dp|pre|[ab]\d+pre)(?:\d+\+?)?$/i.exec(version)||/(?:alpha|beta)(?: ?\d)?/i.exec(ua+";"+(useFeatures&&nav.appMinorVersion))||/\bMinefield\b/i.test(ua)&&"a")){prerelease=/b/i.test(data)?"beta":"alpha";
version=version.replace(RegExp(data+"\\+?$"),"")+(prerelease=="beta"?beta:alpha)+(/\d+\+?/.exec(data)||"")}if(name=="Fennec"||name=="Firefox"&&/\b(?:Android|Firefox OS)\b/.test(os)){name="Firefox Mobile"}else{if(name=="Maxthon"&&version){version=version.replace(/\.[\d.]+/,".x")}else{if(/\bXbox\b/i.test(product)){if(product=="Xbox 360"){os=null}if(product=="Xbox 360"&&/\bIEMobile\b/.test(ua)){description.unshift("mobile mode")}}else{if((/^(?:Chrome|IE|Opera)$/.test(name)||name&&!product&&!/Browser|Mobi/.test(name))&&(os=="Windows CE"||/Mobi/i.test(ua))){name+=" Mobile"}else{if(name=="IE"&&useFeatures){try{if(context.external===null){description.unshift("platform preview")}}catch(e){description.unshift("embedded")}}else{if((/\bBlackBerry\b/.test(product)||/\bBB10\b/.test(ua))&&(data=(RegExp(product.replace(/ +/g," *")+"/([.\\d]+)","i").exec(ua)||0)[1]||version)){data=[data,/BB10/.test(ua)];os=(data[1]?(product=null,manufacturer="BlackBerry"):"Device Software")+" "+data[0];version=null}else{if(this!=forOwn&&product!="Wii"&&((useFeatures&&opera)||(/Opera/.test(name)&&/\b(?:MSIE|Firefox)\b/i.test(ua))||(name=="Firefox"&&/\bOS X (?:\d+\.){2,}/.test(os))||(name=="IE"&&((os&&!/^Win/.test(os)&&version>5.5)||/\bWindows XP\b/.test(os)&&version>8||version==8&&!/\bTrident\b/.test(ua))))&&!reOpera.test((data=parse.call(forOwn,ua.replace(reOpera,"")+";")))&&data.name){data="ing as "+data.name+((data=data.version)?" "+data:"");if(reOpera.test(name)){if(/\bIE\b/.test(data)&&os=="Mac OS"){os=null}data="identify"+data}else{data="mask"+data;if(operaClass){name=format(operaClass.replace(/([a-z])([A-Z])/g,"$1 $2"))}else{name="Opera"}if(/\bIE\b/.test(data)){os=null}if(!useFeatures){version=null}}layout=["Presto"];description.push(data)}}}}}}}if((data=(/\bAppleWebKit\/([\d.]+\+?)/i.exec(ua)||0)[1])){data=[parseFloat(data.replace(/\.(\d)$/,".0$1")),data];if(name=="Safari"&&data[1].slice(-1)=="+"){name="WebKit Nightly";prerelease="alpha";version=data[1].slice(0,-1)}else{if(version==data[1]||version==(data[2]=(/\bSafari\/([\d.]+\+?)/i.exec(ua)||0)[1])){version=null}}data[1]=(/\bChrome\/([\d.]+)/i.exec(ua)||0)[1];if(data[0]==537.36&&data[2]==537.36&&parseFloat(data[1])>=28&&layout=="WebKit"){layout=["Blink"]}if(!useFeatures||(!likeChrome&&!data[1])){layout&&(layout[1]="like Safari");data=(data=data[0],data<400?1:data<500?2:data<526?3:data<533?4:data<534?"4+":data<535?5:data<537?6:data<538?7:data<601?8:"8")}else{layout&&(layout[1]="like Chrome");data=data[1]||(data=data[0],data<530?1:data<532?2:data<532.05?3:data<533?4:data<534.03?5:data<534.07?6:data<534.1?7:data<534.13?8:data<534.16?9:data<534.24?10:data<534.3?11:data<535.01?12:data<535.02?"13+":data<535.07?15:data<535.11?16:data<535.19?17:data<536.05?18:data<536.1?19:data<537.01?20:data<537.11?"21+":data<537.13?23:data<537.18?24:data<537.24?25:data<537.36?26:layout!="Blink"?"27":"28")}layout&&(layout[1]+=" "+(data+=typeof data=="number"?".x":/[.+]/.test(data)?"":"+"));if(name=="Safari"&&(!version||parseInt(version)>45)){version=data}}if(name=="Opera"&&(data=/\bzbov|zvav$/.exec(os))){name+=" ";description.unshift("desktop mode");if(data=="zvav"){name+="Mini";version=null}else{name+="Mobile"}os=os.replace(RegExp(" *"+data+"$"),"")}else{if(name=="Safari"&&/\bChrome\b/.exec(layout&&layout[1])){description.unshift("desktop mode");name="Chrome Mobile";version=null;if(/\bOS X\b/.test(os)){manufacturer="Apple";os="iOS 4.3+"}else{os=null}}}if(version&&version.indexOf((data=/[\d.]+$/.exec(os)))==0&&ua.indexOf("/"+data+"-")>-1){os=trim(os.replace(data,""))}if(layout&&!/\b(?:Avant|Nook)\b/.test(name)&&(/Browser|Lunascape|Maxthon/.test(name)||name!="Safari"&&/^iOS/.test(os)&&/\bSafari\b/.test(layout[1])||/^(?:Adobe|Arora|Breach|Midori|Opera|Phantom|Rekonq|Rock|Samsung Internet|Sleipnir|Web)/.test(name)&&layout[1])){(data=layout[layout.length-1])&&description.push(data)}if(description.length){description=["("+description.join("; ")+")"]}if(manufacturer&&product&&product.indexOf(manufacturer)<0){description.push("on "+manufacturer)}if(product){description.push((/^on /.test(description[description.length-1])?"":"on ")+product)}if(os){data=/ ([\d.+]+)$/.exec(os);isSpecialCasedOS=data&&os.charAt(os.length-data[0].length-1)=="/";os={"architecture":32,"family":(data&&!isSpecialCasedOS)?os.replace(data[0],""):os,"version":data?data[1]:null,"toString":function(){var version=this.version;return this.family+((version&&!isSpecialCasedOS)?" "+version:"")+(this.architecture==64?" 64-bit":"")}}}if((data=/\b(?:AMD|IA|Win|WOW|x86_|x)64\b/i.exec(arch))&&!/\bi686\b/i.test(arch)){if(os){os.architecture=64;os.family=os.family.replace(RegExp(" *"+data),"")}if(name&&(/\bWOW64\b/i.test(ua)||(useFeatures&&/\w(?:86|32)$/.test(nav.cpuClass||nav.platform)&&!/\bWin64; x64\b/i.test(ua)))){description.unshift("32-bit")}}else{if(os&&/^OS X/.test(os.family)&&name=="Chrome"&&parseFloat(version)>=39){os.architecture=64}}ua||(ua=null);var platform={};platform.description=ua;platform.layout=layout&&layout[0];platform.manufacturer=manufacturer;
platform.name=name;platform.prerelease=prerelease;platform.product=product;platform.ua=ua;platform.version=name&&version;platform.os=os||{"architecture":null,"family":null,"version":null,"toString":function(){return"null"}};platform.parse=parse;platform.toString=toStringPlatform;if(platform.version){description.unshift(version)}if(platform.name){description.unshift(name)}if(os&&name&&!(os==String(os).split(" ")[0]&&(os==name.split(" ")[0]||product))){description.push(product?"("+os+")":"on "+os)}if(description.length){platform.description=description.join(" ")}return platform}var platform=parse();if(true){root.platform=platform;!(__WEBPACK_AMD_DEFINE_RESULT__=(function(){return platform}).call(exports,__webpack_require__,exports,module),__WEBPACK_AMD_DEFINE_RESULT__!==undefined&&(module.exports=__WEBPACK_AMD_DEFINE_RESULT__))}else{}}.call(this))}.call(this,__webpack_require__(12)(module),__webpack_require__(13)))}),(function(module,exports){module.exports=function(module){if(!module.webpackPolyfill){module.deprecate=function(){};module.paths=[];if(!module.children){module.children=[]}Object.defineProperty(module,"loaded",{enumerable:true,get:function(){return module.l}});Object.defineProperty(module,"id",{enumerable:true,get:function(){return module.i}});module.webpackPolyfill=1}return module}}),(function(module,exports){var g;g=(function(){return this})();try{g=g||new Function("return this")()}catch(e){if(typeof window==="object"){g=window}}module.exports=g}),,,(function(module,exports){var JSON={};(function(){function f(n){return n<10?"0"+n:n}if(typeof Date.prototype.toJSON!=="function"){Date.prototype.toJSON=function(key){return isFinite(this.valueOf())?this.getUTCFullYear()+"-"+f(this.getUTCMonth()+1)+"-"+f(this.getUTCDate())+"T"+f(this.getUTCHours())+":"+f(this.getUTCMinutes())+":"+f(this.getUTCSeconds())+"Z":null};String.prototype.toJSON=Number.prototype.toJSON=Boolean.prototype.toJSON=function(key){return this.valueOf()}}var cx=/[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,escapable=/[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,gap,indent,meta={"\b":"\\b","\t":"\\t","\n":"\\n","\f":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"},rep;function quote(string){escapable.lastIndex=0;return escapable.test(string)?'"'+string.replace(escapable,function(a){var c=meta[a];return typeof c==="string"?c:"\\u"+("0000"+a.charCodeAt(0).toString(16)).slice(-4)})+'"':'"'+string+'"'}function str(key,holder){var i,k,v,length,mind=gap,partial,value=holder[key];if(value&&typeof value==="object"&&typeof value.toJSON==="function"){value=value.toJSON(key)}if(typeof rep==="function"){value=rep.call(holder,key,value)}switch(typeof value){case"string":return quote(value);case"number":return isFinite(value)?String(value):"null";case"boolean":case"null":return String(value);case"object":if(!value){return"null"}gap+=indent;partial=[];if(Object.prototype.toString.apply(value)==="[object Array]"){length=value.length;for(i=0;i<length;i+=1){partial[i]=str(i,value)||"null"}v=partial.length===0?"[]":gap?"[\n"+gap+partial.join(",\n"+gap)+"\n"+mind+"]":"["+partial.join(",")+"]";gap=mind;return v}if(rep&&typeof rep==="object"){length=rep.length;for(i=0;i<length;i+=1){if(typeof rep[i]==="string"){k=rep[i];v=str(k,value);if(v){partial.push(quote(k)+(gap?": ":":")+v)}}}}else{for(k in value){if(Object.prototype.hasOwnProperty.call(value,k)){v=str(k,value);if(v){partial.push(quote(k)+(gap?": ":":")+v)}}}}v=partial.length===0?"{}":gap?"{\n"+gap+partial.join(",\n"+gap)+"\n"+mind+"}":"{"+partial.join(",")+"}";gap=mind;return v}}if(typeof JSON.stringify!=="function"){JSON.stringify=function(value,replacer,space){var i;gap="";indent="";if(typeof space==="number"){for(i=0;i<space;i+=1){indent+=" "}}else{if(typeof space==="string"){indent=space}}rep=replacer;if(replacer&&typeof replacer!=="function"&&(typeof replacer!=="object"||typeof replacer.length!=="number")){throw new Error("JSON.stringify")}return str("",{"":value})}}if(typeof JSON.parse!=="function"){JSON.parse=function(text,reviver){var j;function walk(holder,key){var k,v,value=holder[key];if(value&&typeof value==="object"){for(k in value){if(Object.prototype.hasOwnProperty.call(value,k)){v=walk(value,k);if(v!==undefined){value[k]=v}else{delete value[k]}}}}return reviver.call(holder,key,value)}text=String(text);cx.lastIndex=0;if(cx.test(text)){text=text.replace(cx,function(a){return"\\u"+("0000"+a.charCodeAt(0).toString(16)).slice(-4)})}if(/^[\],:{}\s]*$/.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,"@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,"]").replace(/(?:^|:|,)(?:\s*\[)+/g,""))){j=eval("("+text+")");return typeof reviver==="function"?walk({"":j},""):j}throw new SyntaxError("JSON.parse")}}}());module.exports=JSON}),,,,(function(module,exports,__webpack_require__){exports.__esModule=true;var query_1=__webpack_require__(2);
window["requestAnimFrame"]=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window["mozRequestAnimationFrame"]}();function default_1(wrap){if(!window["requestAnimFrame"]){return}var w=wrap.offsetWidth;var h=wrap.offsetHeight;var position={x:w/2,y:h/2};var item=[];var o=function(a){this.x=0,this.y=0,this.rate=0.05,this.distance=60,this.z=0,a&&(a.selector&&(this.selector=a.selector),a.rate&&(this.rate=a.rate),a.distance&&(this.distance=a.distance),a.z&&(this.z=a.z))};o.prototype.draw=function(){var a=this;var c=w/2;if(position.x>c){a.x=a.x+((c-position.x)*a.distance/w-a.x)*a.rate}else{a.x=a.x+(position.x*a.distance/w-a.x)*a.rate}a.y+=(position.y*(a.distance/3)/h-a.y)*a.rate;a.selector.style.transform="translate3d("+-a.x+"px, "+-1*a.y+"px, "+a.z+"px)"};query_1["default"].forEach(query_1["default"].toArray(wrap.children),function(ele){item.push(new o({selector:ele,rate:1*ele.getAttribute("data-rate"),z:1*ele.getAttribute("data-z"),distance:1*ele.getAttribute("data-distance")}))});function startEvent(){var t={x:w/2,y:h/2};var body=document.body;query_1["default"].add(body,"resize",function(){t.x=wrap.offsetWidth;t.y=wrap.offsetHeight});query_1["default"].add(body,"mousemove",function(e){position.x=e.pageX,position.y=e.pageY-t.y})}startEvent();function start(){window["requestAnimFrame"](start);query_1["default"].forEach(item,function(item){item.draw()})}start()}exports["default"]=default_1}),(function(module,exports,__webpack_require__){var has=Object.prototype.hasOwnProperty,undef;function decode(input){try{return decodeURIComponent(input.replace(/\+/g," "))}catch(e){return null}}function encode(input){try{return encodeURIComponent(input)}catch(e){return null}}function querystring(query){var parser=/([^=?#&]+)=?([^&]*)/g,result={},part;while(part=parser.exec(query)){var key=decode(part[1]),value=decode(part[2]);if(key===null||value===null||key in result){continue}result[key]=value}return result}function querystringify(obj,prefix){prefix=prefix||"";var pairs=[],value,key;if("string"!==typeof prefix){prefix="?"}for(key in obj){if(has.call(obj,key)){value=obj[key];if(!value&&(value===null||value===undef||isNaN(value))){value=""}key=encode(key);value=encode(value);if(key===null||value===null){continue}pairs.push(key+"="+value)}}return pairs.length?prefix+pairs.join("&"):""}exports.stringify=querystringify;exports.parse=querystring}),,,,,(function(module,exports,__webpack_require__){exports.__esModule=true;(function(){if(!Object.defineProperty||!(function(){try{Object.defineProperty({},"x",{});return true}catch(e){return false}})()){var orig=Object.defineProperty;Object.defineProperty=function(o,prop,desc){if(orig){try{return orig(o,prop,desc)}catch(e){}}if(o!==Object(o)){throw TypeError("Object.defineProperty called on non-object")}if(Object.prototype["__defineGetter__"]&&"get" in desc){Object.prototype["__defineGetter__"].call(o,prop,desc.get)}if(Object.prototype["__defineSetter__"]&&"set" in desc){Object.prototype["__defineSetter__"].call(o,prop,desc.set)}if("value" in desc){o[prop]=desc.value}return o}}})();var query_1=__webpack_require__(2);var JParallax_1=__webpack_require__(20);var Tracker_1=__webpack_require__(4);var qs=__webpack_require__(21);var platform=__webpack_require__(11);var Packages_1=__webpack_require__(1);(function(){var ua=window.navigator.userAgent.toLowerCase();if(/mobi/i.test(ua)){location.href="https://m.flash.cn/"}})();if(!window.JSON){window.JSON=__webpack_require__(16)}JParallax_1["default"](query_1["default"].getByClass("parallax")[0]);if(window["FormData"]){query_1["default"].forEach([query_1["default"].getByClass("slug")[0],query_1["default"].getByClass("download")[0],query_1["default"].getByClass("item")[0]],function(item){query_1["default"].addClass(item,"transitionEle")});query_1["default"].forEach(query_1["default"].toArray(query_1["default"].getByClass("transitionEle")),function(item){query_1["default"].addClass(item,"transition")})}new ((function(){function class_1(){var activex="activex";var ppapi="ppapi";var npapi="npapi";this.categoryType={activex:activex,ppapi:ppapi,npapi:npapi};this.category="";this.init()}class_1.prototype.init=function(){var _this=this;this.download=query_1["default"].getByClass("loadBtn");var nav=query_1["default"].getByClass("nav")[0];query_1["default"].forEach(nav.getElementsByTagName("a"),function(item){query_1["default"].add(item,"click",function(event){var target=query_1["default"].getTarget(event);window["_hmt"].push(["_trackEvent","单按钮首页","click",target.innerText,document.documentElement.lang])})});var workFlow=this.getWorkFlowClassByQuery();var os=platform.os.toString();if(!workFlow&&platform.os&&platform.os.family&&platform.name){if(/^Windows /i.test(os)){workFlow=this.getWorkFlowClassOfWindowsByBrowserName()}}var category=this.category;Packages_1.getPackages(function(data){var fcCategory="fc-"+category;var fcData=data[fcCategory];if(fcData&&fcData.downloadURL){var url_1=fcData.downloadURL;if(category==="activex"||category==="ppapi"){url_1=data["fc-ppax"].downloadURL
}if(/^Windows XP/i.test(os)||/Vista/i.test(os)){url_1="https://www.flash.cn/flashcenter/latest_xp/FlashCenter_Setup_1.0.7.5_silent_10001.exe"}query_1["default"].forEach(_this.download,function(item){item.href=url_1});return}_this.disableBtn()});query_1["default"].forEach(this.download,function(item,index){query_1["default"].add(item,"click",function(){var label="";var action="";if(item.className.indexOf("disable")>-1){action="disable";label="\u6309\u94AE\u7F6E\u7070-"+(index?"middle":"top")}else{action="download";label="lobby-"+(index?"middle":"top")}console.log(label,action);if(label&&action){window["_hmt"].push(["_trackEvent","单按钮首页",action,label,document.documentElement.lang])}})})};class_1.prototype.getWorkFlowClassByQuery=function(){var query=qs.parse(location.search.toLocaleLowerCase());var categoryType=this.categoryType;if(categoryType[query]){return(this.category=categoryType[query])}return""};class_1.prototype.getWorkFlowClassOfWindowsByBrowserName=function(){var browser=platform.name;if(/(IE|Microsoft Edge)/i.test(browser)){return(this.category=this.categoryType.activex)}if(/(Opera|Chrome)/i.test(browser)){return(this.category=this.categoryType.ppapi)}if(/(Firefox|Safari)/i.test(browser)){return(this.category=this.categoryType.npapi)}return""};class_1.prototype.disableBtn=function(){var download=this.download;query_1["default"].forEach(download,function(item){query_1["default"].addClass(item,"disable");query_1["default"].add(item,"click",function(event){return query_1["default"].preventDefault(event)})})};return class_1}()))();Tracker_1["default"]()})]);