(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[698],{3614:function(t){t.exports=function(t){var e={};function n(s){if(e[s])return e[s].exports;var r=e[s]={exports:{},id:s,loaded:!1};return t[s].call(r.exports,r,r.exports,n),r.loaded=!0,r.exports}return n.m=t,n.c=e,n.p="",n(0)}([function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=function(){function t(t,e){for(var n=0;n<e.length;n++){var s=e[n];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(t,s.key,s)}}return function(e,n,s){return n&&t(e.prototype,n),s&&t(e,s),e}}(),r=n(1),i=n(3),o=function(){function t(e,n){(function(t,e){if(!(t instanceof e))throw TypeError("Cannot call a class as a function")})(this,t),r.initializer.load(this,n,e),this.begin()}return s(t,[{key:"toggle",value:function(){this.pause.status?this.start():this.stop()}},{key:"stop",value:function(){!this.typingComplete&&(this.pause.status||(this.toggleBlinking(!0),this.pause.status=!0,this.options.onStop(this.arrayPos,this)))}},{key:"start",value:function(){!this.typingComplete&&this.pause.status&&(this.pause.status=!1,this.pause.typewrite?this.typewrite(this.pause.curString,this.pause.curStrPos):this.backspace(this.pause.curString,this.pause.curStrPos),this.options.onStart(this.arrayPos,this))}},{key:"destroy",value:function(){this.reset(!1),this.options.onDestroy(this)}},{key:"reset",value:function(){var t=arguments.length<=0||void 0===arguments[0]||arguments[0];clearInterval(this.timeout),this.replaceText(""),this.cursor&&this.cursor.parentNode&&(this.cursor.parentNode.removeChild(this.cursor),this.cursor=null),this.strPos=0,this.arrayPos=0,this.curLoop=0,t&&(this.insertCursor(),this.options.onReset(this),this.begin())}},{key:"begin",value:function(){var t=this;this.options.onBegin(this),this.typingComplete=!1,this.shuffleStringsIfNeeded(this),this.insertCursor(),this.bindInputFocusEvents&&this.bindFocusEvents(),this.timeout=setTimeout(function(){t.currentElContent&&0!==t.currentElContent.length?t.backspace(t.currentElContent,t.currentElContent.length):t.typewrite(t.strings[t.sequence[t.arrayPos]],t.strPos)},this.startDelay)}},{key:"typewrite",value:function(t,e){var n=this;this.fadeOut&&this.el.classList.contains(this.fadeOutClass)&&(this.el.classList.remove(this.fadeOutClass),this.cursor&&this.cursor.classList.remove(this.fadeOutClass));var s=this.humanizer(this.typeSpeed),r=1;if(!0===this.pause.status){this.setPauseStatus(t,e,!0);return}this.timeout=setTimeout(function(){e=i.htmlParser.typeHtmlChars(t,e,n);var s,o=0,a=t.substr(e);if("^"===a.charAt(0)&&/^\^\d+/.test(a)&&(s=1+(a=/\d+/.exec(a)[0]).length,o=parseInt(a),n.temporaryPause=!0,n.options.onTypingPaused(n.arrayPos,n),t=t.substring(0,e)+t.substring(e+s),n.toggleBlinking(!0)),"`"===a.charAt(0)){for(;"`"!==t.substr(e+r).charAt(0)&&!(e+ ++r>t.length););var u=t.substring(0,e),l=t.substring(u.length+1,e+r);t=u+l+t.substring(e+r+1),r--}n.timeout=setTimeout(function(){n.toggleBlinking(!1),e>=t.length?n.doneTyping(t,e):n.keepTyping(t,e,r),n.temporaryPause&&(n.temporaryPause=!1,n.options.onTypingResumed(n.arrayPos,n))},o)},s)}},{key:"keepTyping",value:function(t,e,n){0===e&&(this.toggleBlinking(!1),this.options.preStringTyped(this.arrayPos,this)),e+=n;var s=t.substr(0,e);this.replaceText(s),this.typewrite(t,e)}},{key:"doneTyping",value:function(t,e){var n=this;this.options.onStringTyped(this.arrayPos,this),this.toggleBlinking(!0),(this.arrayPos!==this.strings.length-1||(this.complete(),!1!==this.loop&&this.curLoop!==this.loopCount))&&(this.timeout=setTimeout(function(){n.backspace(t,e)},this.backDelay))}},{key:"backspace",value:function(t,e){var n=this;if(!0===this.pause.status){this.setPauseStatus(t,e,!1);return}if(this.fadeOut)return this.initFadeOut();this.toggleBlinking(!1);var s=this.humanizer(this.backSpeed);this.timeout=setTimeout(function(){e=i.htmlParser.backSpaceHtmlChars(t,e,n);var s=t.substr(0,e);if(n.replaceText(s),n.smartBackspace){var r=n.strings[n.arrayPos+1];r&&s===r.substr(0,e)?n.stopNum=e:n.stopNum=0}e>n.stopNum?(e--,n.backspace(t,e)):e<=n.stopNum&&(n.arrayPos++,n.arrayPos===n.strings.length?(n.arrayPos=0,n.options.onLastStringBackspaced(),n.shuffleStringsIfNeeded(),n.begin()):n.typewrite(n.strings[n.sequence[n.arrayPos]],e))},s)}},{key:"complete",value:function(){this.options.onComplete(this),this.loop?this.curLoop++:this.typingComplete=!0}},{key:"setPauseStatus",value:function(t,e,n){this.pause.typewrite=n,this.pause.curString=t,this.pause.curStrPos=e}},{key:"toggleBlinking",value:function(t){this.cursor&&!this.pause.status&&this.cursorBlinking!==t&&(this.cursorBlinking=t,t?this.cursor.classList.add("typed-cursor--blink"):this.cursor.classList.remove("typed-cursor--blink"))}},{key:"humanizer",value:function(t){return Math.round(Math.random()*t/2)+t}},{key:"shuffleStringsIfNeeded",value:function(){this.shuffle&&(this.sequence=this.sequence.sort(function(){return Math.random()-.5}))}},{key:"initFadeOut",value:function(){var t=this;return this.el.className+=" "+this.fadeOutClass,this.cursor&&(this.cursor.className+=" "+this.fadeOutClass),setTimeout(function(){t.arrayPos++,t.replaceText(""),t.strings.length>t.arrayPos?t.typewrite(t.strings[t.sequence[t.arrayPos]],0):(t.typewrite(t.strings[0],0),t.arrayPos=0)},this.fadeOutDelay)}},{key:"replaceText",value:function(t){this.attr?this.el.setAttribute(this.attr,t):this.isInput?this.el.value=t:"html"===this.contentType?this.el.innerHTML=t:this.el.textContent=t}},{key:"bindFocusEvents",value:function(){var t=this;this.isInput&&(this.el.addEventListener("focus",function(e){t.stop()}),this.el.addEventListener("blur",function(e){t.el.value&&0!==t.el.value.length||t.start()}))}},{key:"insertCursor",value:function(){this.showCursor&&!this.cursor&&(this.cursor=document.createElement("span"),this.cursor.className="typed-cursor",this.cursor.setAttribute("aria-hidden",!0),this.cursor.innerHTML=this.cursorChar,this.el.parentNode&&this.el.parentNode.insertBefore(this.cursor,this.el.nextSibling))}}]),t}();e.default=o,t.exports=e.default},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s,r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(t[s]=n[s])}return t},i=function(){function t(t,e){for(var n=0;n<e.length;n++){var s=e[n];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(t,s.key,s)}}return function(e,n,s){return n&&t(e.prototype,n),s&&t(e,s),e}}(),o=(s=n(2))&&s.__esModule?s:{default:s},a=function(){function t(){!function(t,e){if(!(t instanceof e))throw TypeError("Cannot call a class as a function")}(this,t)}return i(t,[{key:"load",value:function(t,e,n){if("string"==typeof n?t.el=document.querySelector(n):t.el=n,t.options=r({},o.default,e),t.isInput="input"===t.el.tagName.toLowerCase(),t.attr=t.options.attr,t.bindInputFocusEvents=t.options.bindInputFocusEvents,t.showCursor=!t.isInput&&t.options.showCursor,t.cursorChar=t.options.cursorChar,t.cursorBlinking=!0,t.elContent=t.attr?t.el.getAttribute(t.attr):t.el.textContent,t.contentType=t.options.contentType,t.typeSpeed=t.options.typeSpeed,t.startDelay=t.options.startDelay,t.backSpeed=t.options.backSpeed,t.smartBackspace=t.options.smartBackspace,t.backDelay=t.options.backDelay,t.fadeOut=t.options.fadeOut,t.fadeOutClass=t.options.fadeOutClass,t.fadeOutDelay=t.options.fadeOutDelay,t.isPaused=!1,t.strings=t.options.strings.map(function(t){return t.trim()}),"string"==typeof t.options.stringsElement?t.stringsElement=document.querySelector(t.options.stringsElement):t.stringsElement=t.options.stringsElement,t.stringsElement){t.strings=[],t.stringsElement.style.display="none";var s=Array.prototype.slice.apply(t.stringsElement.children),i=s.length;if(i)for(var a=0;a<i;a+=1){var u=s[a];t.strings.push(u.innerHTML.trim())}}for(var a in t.strPos=0,t.arrayPos=0,t.stopNum=0,t.loop=t.options.loop,t.loopCount=t.options.loopCount,t.curLoop=0,t.shuffle=t.options.shuffle,t.sequence=[],t.pause={status:!1,typewrite:!0,curString:"",curStrPos:0},t.typingComplete=!1,t.strings)t.sequence[a]=a;t.currentElContent=this.getCurrentElContent(t),t.autoInsertCss=t.options.autoInsertCss,this.appendAnimationCss(t)}},{key:"getCurrentElContent",value:function(t){return t.attr?t.el.getAttribute(t.attr):t.isInput?t.el.value:"html"===t.contentType?t.el.innerHTML:t.el.textContent}},{key:"appendAnimationCss",value:function(t){var e="data-typed-js-css";if(!(!t.autoInsertCss||!t.showCursor&&!t.fadeOut||document.querySelector("["+e+"]"))){var n=document.createElement("style");n.type="text/css",n.setAttribute(e,!0);var s="";t.showCursor&&(s+="\n        .typed-cursor{\n          opacity: 1;\n        }\n        .typed-cursor.typed-cursor--blink{\n          animation: typedjsBlink 0.7s infinite;\n          -webkit-animation: typedjsBlink 0.7s infinite;\n                  animation: typedjsBlink 0.7s infinite;\n        }\n        @keyframes typedjsBlink{\n          50% { opacity: 0.0; }\n        }\n        @-webkit-keyframes typedjsBlink{\n          0% { opacity: 1; }\n          50% { opacity: 0.0; }\n          100% { opacity: 1; }\n        }\n      "),t.fadeOut&&(s+="\n        .typed-fade-out{\n          opacity: 0;\n          transition: opacity .25s;\n        }\n        .typed-cursor.typed-cursor--blink.typed-fade-out{\n          -webkit-animation: 0;\n          animation: 0;\n        }\n      "),0!==n.length&&(n.innerHTML=s,document.body.appendChild(n))}}}]),t}();e.default=a;var u=new a;e.initializer=u},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={strings:["These are the default values...","You know what you should do?","Use your own!","Have a great day!"],stringsElement:null,typeSpeed:0,startDelay:0,backSpeed:0,smartBackspace:!0,shuffle:!1,backDelay:700,fadeOut:!1,fadeOutClass:"typed-fade-out",fadeOutDelay:500,loop:!1,loopCount:1/0,showCursor:!0,cursorChar:"|",autoInsertCss:!0,attr:null,bindInputFocusEvents:!1,contentType:"html",onBegin:function(t){},onComplete:function(t){},preStringTyped:function(t,e){},onStringTyped:function(t,e){},onLastStringBackspaced:function(t){},onTypingPaused:function(t,e){},onTypingResumed:function(t,e){},onReset:function(t){},onStop:function(t,e){},onStart:function(t,e){},onDestroy:function(t){}},t.exports=e.default},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=function(){function t(t,e){for(var n=0;n<e.length;n++){var s=e[n];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(t,s.key,s)}}return function(e,n,s){return n&&t(e.prototype,n),s&&t(e,s),e}}(),s=function(){function t(){!function(t,e){if(!(t instanceof e))throw TypeError("Cannot call a class as a function")}(this,t)}return n(t,[{key:"typeHtmlChars",value:function(t,e,n){if("html"!==n.contentType)return e;var s=t.substr(e).charAt(0);if("<"===s||"&"===s){var r="";for(r="<"===s?">":";";t.substr(e+1).charAt(0)!==r&&!(++e+1>t.length););e++}return e}},{key:"backSpaceHtmlChars",value:function(t,e,n){if("html"!==n.contentType)return e;var s=t.substr(e).charAt(0);if(">"===s||";"===s){var r="";for(r=">"===s?"<":"&";t.substr(e-1).charAt(0)!==r&&!(--e<0););e--}return e}}]),t}();e.default=s;var r=new s;e.htmlParser=r}])},335:function(t,e,n){"use strict";n.d(e,{r:function(){return b}});var s=n(7294),r=n(2351),i=n(9946),o=n(1363),a=n(4103),u=n(6723),l=n(3784),c=n(3781);let p=(0,s.createContext)(null),h=(0,r.yV)(function(t,e){let n=(0,i.M)(),{id:o=`headlessui-label-${n}`,passive:a=!1,...c}=t,h=function t(){let e=(0,s.useContext)(p);if(null===e){let e=Error("You used a <Label /> component, but it is not inside a relevant parent.");throw Error.captureStackTrace&&Error.captureStackTrace(e,t),e}return e}(),f=(0,l.T)(e);(0,u.e)(()=>h.register(o),[o,h.register]);let d={ref:f,...h.props,id:o};return a&&("onClick"in d&&delete d.onClick,"onClick"in c&&delete c.onClick),(0,r.sY)({ourProps:d,theirProps:c,slot:h.slot||{},defaultTag:"label",name:h.name||"Label"})});var f=n(9516),d=n(4157),y=n(6045),g=n(4192);let m=(0,s.createContext)(null);m.displayName="GroupContext";let v=s.Fragment,b=Object.assign((0,r.yV)(function(t,e){let n=(0,i.M)(),{id:u=`headlessui-switch-${n}`,checked:p,defaultChecked:h=!1,onChange:f,name:v,value:b,...k}=t,C=(0,s.useContext)(m),P=(0,s.useRef)(null),T=(0,l.T)(P,e,null===C?null:C.setSwitch),[S,w]=function(t,e,n){let[r,i]=(0,s.useState)(n),o=void 0!==t,a=(0,s.useRef)(o),u=(0,s.useRef)(!1),l=(0,s.useRef)(!1);return!o||a.current||u.current?o||!a.current||l.current||(l.current=!0,a.current=o,console.error("A component is changing from controlled to uncontrolled. This may be caused by the value changing from a defined value to undefined, which should not happen.")):(u.current=!0,a.current=o,console.error("A component is changing from uncontrolled to controlled. This may be caused by the value changing from undefined to a defined value, which should not happen.")),[o?t:r,(0,c.z)(t=>(o||i(t),null==e?void 0:e(t)))]}(p,f,h),E=(0,c.z)(()=>null==w?void 0:w(!S)),O=(0,c.z)(t=>{if((0,a.P)(t.currentTarget))return t.preventDefault();t.preventDefault(),E()}),x=(0,c.z)(t=>{t.key===o.R.Space?(t.preventDefault(),E()):t.key===o.R.Enter&&function(t){var e;let n=null!=(e=null==t?void 0:t.form)?e:t.closest("form");if(n){for(let t of n.elements)if("INPUT"===t.tagName&&"submit"===t.type||"BUTTON"===t.tagName&&"submit"===t.type||"INPUT"===t.nodeName&&"image"===t.type){t.click();return}}}(t.currentTarget)}),B=(0,c.z)(t=>t.preventDefault()),N=(0,s.useMemo)(()=>({checked:S}),[S]),L={id:u,ref:T,role:"switch",type:(0,d.f)(t,P),tabIndex:0,"aria-checked":S,"aria-labelledby":null==C?void 0:C.labelledby,"aria-describedby":null==C?void 0:C.describedby,onClick:O,onKeyUp:x,onKeyPress:B},I=(0,g.G)();return(0,s.useEffect)(()=>{var t;let e=null==(t=P.current)?void 0:t.closest("form");e&&void 0!==h&&I.addEventListener(e,"reset",()=>{w(h)})},[P,w]),s.createElement(s.Fragment,null,null!=v&&S&&s.createElement(y._,{features:y.A.Hidden,...(0,r.oA)({as:"input",type:"checkbox",hidden:!0,readOnly:!0,checked:S,name:v,value:b})}),(0,r.sY)({ourProps:L,theirProps:k,slot:N,defaultTag:"button",name:"Switch"}))}),{Group:function(t){let[e,n]=(0,s.useState)(null),[i,o]=function(){let[t,e]=(0,s.useState)([]);return[t.length>0?t.join(" "):void 0,(0,s.useMemo)(()=>function(t){let n=(0,c.z)(t=>(e(e=>[...e,t]),()=>e(e=>{let n=e.slice(),s=n.indexOf(t);return -1!==s&&n.splice(s,1),n}))),r=(0,s.useMemo)(()=>({register:n,slot:t.slot,name:t.name,props:t.props}),[n,t.slot,t.name,t.props]);return s.createElement(p.Provider,{value:r},t.children)},[e])]}(),[a,u]=(0,f.f)(),l=(0,s.useMemo)(()=>({switch:e,setSwitch:n,labelledby:i,describedby:a}),[e,n,i,a]);return s.createElement(u,{name:"Switch.Description"},s.createElement(o,{name:"Switch.Label",props:{onClick(){e&&(e.click(),e.focus({preventScroll:!0}))}}},s.createElement(m.Provider,{value:l},(0,r.sY)({ourProps:{},theirProps:t,defaultTag:v,name:"Switch.Group"}))))},Label:h,Description:f.d})}}]);