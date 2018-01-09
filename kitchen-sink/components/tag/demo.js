webpackJsonp([36],{463:function(n,a,s){n.exports={basic:s(948)}},521:function(n,a,s){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=function(n){return Object.keys(n).reduce(function(a,s){return"aria-"!==s.substr(0,5)&&"data-"!==s.substr(0,5)&&"role"!==s||(a[s]=n[s]),a},{})},n.exports=a.default},664:function(n,a,s){"use strict";s(29),s(43),s(949)},665:function(n,a,s){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var t=Object.assign||function(n){for(var a=1;a<arguments.length;a++){var s=arguments[a];for(var t in s)Object.prototype.hasOwnProperty.call(s,t)&&(n[t]=s[t])}return n},e=function(){function n(n,a){for(var s=0;s<a.length;s++){var t=a[s];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(n,t.key,t)}}return function(a,s,t){return s&&n(a.prototype,s),t&&n(a,t),a}}(),p=i(s(0)),o=i(s(3)),c=i(s(44)),l=i(s(521)),u=i(s(76));function i(n){return n&&n.__esModule?n:{default:n}}function r(n,a,s){return a in n?Object.defineProperty(n,a,{value:s,enumerable:!0,configurable:!0,writable:!0}):n[a]=s,n}var k=function(n){function a(n){!function(n,a){if(!(n instanceof a))throw new TypeError("Cannot call a class as a function")}(this,a);var s=function(n,a){if(!n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!a||"object"!=typeof a&&"function"!=typeof a?n:a}(this,(a.__proto__||Object.getPrototypeOf(a)).call(this,n));return s.onClick=function(){var n=s.props,a=n.disabled,t=n.onChange;if(!a){var e=s.state.selected;s.setState({selected:!e},function(){t&&t(!e)})}},s.onTagClose=function(){s.props.onClose&&s.props.onClose(),s.setState({closed:!0},s.props.afterClose)},s.state={selected:n.selected,closed:!1},s}return function(n,a){if("function"!=typeof a&&null!==a)throw new TypeError("Super expression must either be null or a function, not "+typeof a);n.prototype=Object.create(a&&a.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),a&&(Object.setPrototypeOf?Object.setPrototypeOf(n,a):n.__proto__=a)}(a,p.default.Component),e(a,[{key:"componentWillReceiveProps",value:function(n){this.props.selected!==n.selected&&this.setState({selected:n.selected})}},{key:"render",value:function(){var n,a=this.props,s=a.children,e=a.className,i=a.prefixCls,k=a.disabled,d=a.closable,f=a.small,g=a.style,m=(0,o.default)(e,i,(r(n={},i+"-normal",!k&&(!this.state.selected||f||d)),r(n,i+"-small",f),r(n,i+"-active",this.state.selected&&!k&&!f&&!d),r(n,i+"-disabled",k),r(n,i+"-closable",d),n)),b=!d||k||f?null:p.default.createElement(u.default,{activeClassName:i+"-close-active"},p.default.createElement("div",{className:i+"-close",role:"button",onClick:this.onTagClose,"aria-label":"remove tag"},p.default.createElement(c.default,{type:"cross-circle",size:"xs","aria-hidden":"true"})));return this.state.closed?null:p.default.createElement("div",t({},(0,l.default)(this.props),{className:m,onClick:this.onClick,style:g}),p.default.createElement("div",{className:i+"-text"},s),b)}}]),a}();a.default=k,k.defaultProps={prefixCls:"am-tag",disabled:!1,selected:!1,closable:!1,small:!1,onChange:function(){},onClose:function(){},afterClose:function(){}},n.exports=a.default},948:function(n,a,s){n.exports={content:{"zh-CN":[["p","Tag \u5206\u4e3a\u4e24\u79cd\u7c7b\u578b\uff1a",["code","selectable"]," / ",["code","readonly"],", \u540e\u8005\u662f\u65e0\u4ea4\u4e92\u7684\uff0c\u5c3a\u5bf8\u66f4\u5c0f\uff0c\u901a\u5e38\u7528\u4e8e\u5185\u5bb9\u5c55\u793a\u3002"]],"en-US":[["p","There are two kinds of Tag, selectable and readonly type, the latter is a smaller tag without interactive behavior, which is typically used for display content."]]},meta:{order:0,title:{"zh-CN":"\u57fa\u672c","en-US":"Basic"},filename:"components/tag/demo/basic.md",id:"components-tag-demo-basic"},highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword">import</span> <span class="token punctuation">{</span> Tag <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'antd-mobile\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">function</span> <span class="token function">onChange</span><span class="token punctuation">(</span>selected<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token string">`tag selected: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>selected<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>tag-container<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Tag</span> <span class="token attr-name">data-seed</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>logId<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Basic<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Tag</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Tag</span> <span class="token attr-name">selected</span><span class="token punctuation">></span></span>Selected<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Tag</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Tag</span> <span class="token attr-name">disabled</span><span class="token punctuation">></span></span>Disabled<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Tag</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Tag</span> <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>onChange<span class="token punctuation">}</span></span><span class="token punctuation">></span></span>Callback<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Tag</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Tag</span> <span class="token attr-name">closable</span>\n      <span class="token attr-name">onClose</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>\n        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">\'onClose\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n      <span class="token punctuation">}</span><span class="token punctuation">}</span></span>\n      <span class="token attr-name">afterClose</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>\n        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">\'afterClose\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n      <span class="token punctuation">}</span><span class="token punctuation">}</span></span>\n    <span class="token punctuation">></span></span>\n      Closable\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Tag</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Tag</span> <span class="token attr-name">small</span><span class="token punctuation">></span></span>Small and Readonly<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Tag</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token punctuation">,</span> mountNode<span class="token punctuation">)</span><span class="token punctuation">;</span>'}],preview:function(){var n=s(0);s(0);s(664);var a=l(s(665)).default;s(664);var t=l(s(665)).default;s(664);var e=l(s(665)).default;s(664);var p=l(s(665)).default;s(664);var o=l(s(665)).default;s(664);var c=l(s(665)).default;function l(n){return n&&n.__esModule?n:{default:n}}return n.createElement("div",{className:"tag-container"},n.createElement(c,{"data-seed":"logId"},"Basic"),n.createElement(o,{selected:!0},"Selected"),n.createElement(p,{disabled:!0},"Disabled"),n.createElement(e,{onChange:function(n){console.log("tag selected: "+n)}},"Callback"),n.createElement(t,{closable:!0,onClose:function(){console.log("onClose")},afterClose:function(){console.log("afterClose")}},"Closable"),n.createElement(a,{small:!0},"Small and Readonly"))},style:".tag-container{\n  display: flex;\n  padding-top: 9px;\n  flex-direction: row;\n  flex-wrap: wrap;\n}\n.tag-container > div {\n  margin-left: 9px;\n  margin-bottom: 9px;\n}",highlightedStyle:'<span class="token selector"><span class="token class">.tag-container</span></span><span class="token punctuation">{</span>\n  <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>\n  <span class="token property">padding-top</span><span class="token punctuation">:</span> <span class="token number">9</span>px<span class="token punctuation">;</span>\n  <span class="token property">flex-direction</span><span class="token punctuation">:</span> row<span class="token punctuation">;</span>\n  <span class="token property">flex-wrap</span><span class="token punctuation">:</span> wrap<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n<span class="token selector"><span class="token class">.tag-container</span> > div </span><span class="token punctuation">{</span>\n  <span class="token property">margin-left</span><span class="token punctuation">:</span> <span class="token number">9</span>px<span class="token punctuation">;</span>\n  <span class="token property">margin-bottom</span><span class="token punctuation">:</span> <span class="token number">9</span>px<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>'}},949:function(n,a){}});