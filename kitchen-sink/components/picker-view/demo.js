webpackJsonp([24],{415:function(e,n,t){e.exports={basic:t(886)}},522:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a=t(2),s=t.n(a),o=t(0),l=t(3),r=t.n(l),c=t(528);n.default=Object(c.a)(function(e){var n=e.prefixCls,t=e.className,a=e.rootNativeProps,l=e.children,c=e.style,u=e.getValue(),i=o.default.Children.map(l,function(n,t){return o.default.cloneElement(n,{selectedValue:u[t],onValueChange:function(){for(var n=arguments.length,a=Array(n),s=0;s<n;s++)a[s]=arguments[s];return e.onValueChange.apply(e,[t].concat(a))},onScrollChange:e.onScrollChange&&function(){for(var n=arguments.length,a=Array(n),s=0;s<n;s++)a[s]=arguments[s];return e.onScrollChange.apply(e,[t].concat(a))}})});return o.default.createElement("div",s()({},a,{style:c,className:r()(t,n)}),i)})},524:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a=d(t(34)),s=d(t(2)),o=d(t(5)),l=d(t(8)),r=d(t(6)),c=d(t(7)),u=d(t(0)),i=d(t(3)),p=d(t(529));function d(e){return e&&e.__esModule?e:{default:e}}var f=function(e){function n(e){(0,o.default)(this,n);var t,a,s,l,c,i,p,d,f,h,v,k,m=(0,r.default)(this,(n.__proto__||Object.getPrototypeOf(n)).call(this,e));m.scrollHanders=(t=-1,a=0,s=0,l=!1,c=!1,i=function(e,n){e.transform=n,e.webkitTransform=n},p=function(e,n){e.transition=n,e.webkitTransition=n},d=function(e,n){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:.3;t!==n&&(t=n,a&&!m.props.noAnimate&&p(m.contentRef.style,"cubic-bezier(0,0,0.2,1.15) "+a+"s"),i(m.contentRef.style,"translate3d(0,"+-n+"px,0)"),setTimeout(function(){m.scrollingComplete(),m.contentRef&&p(m.contentRef.style,"")},1e3*+a))},f=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:30,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:100,t=0,a=0,s=0,o={record:function(o){var l=+new Date;s=(o-a)/(l-t),l-t>=e&&(s=l-t<=n?s:0,a=o,t=l)},getVelocity:function(e){return e!==a&&o.record(e),s}};return o}(),h=function(){c=!1;var e=t,n=(m.props.children.length-1)*m.itemHeight,a=.3,s=4*f.getVelocity(e);s&&(e=40*s+e,a=.1*Math.abs(s)),e%m.itemHeight!=0&&(e=Math.round(e/m.itemHeight)*m.itemHeight),e<0?e=0:e>n&&(e=n),d(0,e,a<.3?.3:a),m.onScrollChange()},v=function(e){l||(c=!0,s=e,a=t)},k=function(e){!l&&c&&(t=a-e+s,f.record(t),m.onScrollChange(),i(m.contentRef.style,"translate3d(0,"+-t+"px,0)"))},{touchstart:function(e){return v(e.touches[0].screenY)},mousedown:function(e){return v(e.screenY)},touchmove:function(e){e.preventDefault(),k(e.touches[0].screenY)},mousemove:function(e){e.preventDefault(),k(e.screenY)},touchend:function(){return h()},touchcancel:function(){return h()},mouseup:function(){return h()},getValue:function(){return t},scrollTo:d,setDisabled:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];l=e}}),m.scrollTo=function(e){m.scrollHanders.scrollTo(0,e)},m.scrollToWithoutAnimation=function(e){m.scrollHanders.scrollTo(0,e,0)},m.fireValueChange=function(e){e!==m.state.selectedValue&&("selectedValue"in m.props||m.setState({selectedValue:e}),m.props.onValueChange&&m.props.onValueChange(e))},m.onScrollChange=function(){var e=m.scrollHanders.getValue();if(e>=0){var n=u.default.Children.toArray(m.props.children),t=m.props.coumputeChildIndex(e,m.itemHeight,n.length);if(m.scrollValue!==t){m.scrollValue=t;var a=n[t];a&&m.props.onScrollChange?m.props.onScrollChange(a.props.value):!a&&console.warn&&console.warn("child not found",n,t)}}},m.scrollingComplete=function(){var e=m.scrollHanders.getValue();e>=0&&m.props.doScrollingComplete(e,m.itemHeight,m.fireValueChange)};var g=void 0,y=m.props,C=y.selectedValue,b=y.defaultSelectedValue;if(void 0!==C)g=C;else if(void 0!==b)g=b;else{var V=u.default.Children.toArray(m.props.children);g=V&&V[0]&&V[0].props.value}return m.state={selectedValue:g},m}return(0,c.default)(n,e),(0,l.default)(n,[{key:"componentDidMount",value:function(){var e=this,n=this.contentRef,t=this.indicatorRef,a=this.maskRef,s=this.rootRef,o=s.getBoundingClientRect().height,l=this.itemHeight=t.getBoundingClientRect().height,r=Math.floor(o/l);r%2==0&&r--,r--,r/=2,n.style.padding=l*r+"px 0",t.style.top=l*r+"px",a.style.backgroundSize="100% "+l*r+"px",this.scrollHanders.setDisabled(this.props.disabled),this.props.select(this.state.selectedValue,this.itemHeight,this.scrollTo);var c=this.passiveSupported(),u=!!c&&{passive:!1},i=!!c&&{passive:!0};Object.keys(this.scrollHanders).forEach(function(n){if(0===n.indexOf("touch")||0===n.indexOf("mouse")){var t=n.indexOf("move")>=0?u:i;s.addEventListener(n,e.scrollHanders[n],t)}})}},{key:"componentWillUnmount",value:function(){var e=this;Object.keys(this.scrollHanders).forEach(function(n){0!==n.indexOf("touch")&&0!==n.indexOf("mouse")||e.rootRef.removeEventListener(n,e.scrollHanders[n])})}},{key:"passiveSupported",value:function(){var e=!1;try{var n=Object.defineProperty({},"passive",{get:function(){e=!0}});window.addEventListener("test",null,n)}catch(e){}return e}},{key:"componentWillReceiveProps",value:function(e){var n=this;"selectedValue"in e&&this.state.selectedValue!==e.selectedValue&&this.setState({selectedValue:e.selectedValue},function(){n.props.select(e.selectedValue,n.itemHeight,e.noAnimate?n.scrollToWithoutAnimation:n.scrollTo)}),this.scrollHanders.setDisabled(e.disabled)}},{key:"shouldComponentUpdate",value:function(e,n){return this.state.selectedValue!==n.selectedValue||this.props.children!==e.children}},{key:"componentDidUpdate",value:function(){this.props.select(this.state.selectedValue,this.itemHeight,this.scrollToWithoutAnimation)}},{key:"getValue",value:function(){if("selectedValue"in this.props)return this.props.selectedValue;var e=u.default.Children.toArray(this.props.children);return e&&e[0]&&e[0].props.value}},{key:"render",value:function(){var e,n=this,t=this.props,o=t.prefixCls,l=t.itemStyle,r=t.indicatorStyle,c=t.indicatorClassName,p=void 0===c?"":c,d=t.children,f=this.state.selectedValue,h=o+"-item",v=h+" "+o+"-item-selected",k=function(e){var n=e.props,t=n.className,a=void 0===t?"":t,o=n.style,r=n.value;return u.default.createElement("div",{style:(0,s.default)({},l,o),className:(f===r?v:h)+" "+a,key:r},e.children||e.props.children)},m=u.default.Children?u.default.Children.map(d,k):[].concat(d).map(k),g=(e={},(0,a.default)(e,t.className,!!t.className),(0,a.default)(e,o,!0),e);return u.default.createElement("div",{className:(0,i.default)(g),ref:function(e){return n.rootRef=e},style:this.props.style},u.default.createElement("div",{className:o+"-mask",ref:function(e){return n.maskRef=e}}),u.default.createElement("div",{className:o+"-indicator "+p,ref:function(e){return n.indicatorRef=e},style:r}),u.default.createElement("div",{className:o+"-content",ref:function(e){return n.contentRef=e}},m))}}]),n}(u.default.Component);f.defaultProps={prefixCls:"rmc-picker"},n.default=(0,p.default)(f),e.exports=n.default},528:function(e,n,t){"use strict";var a=t(2),s=t.n(a),o=t(5),l=t.n(o),r=t(8),c=t.n(r),u=t(6),i=t.n(u),p=t(7),d=t.n(p),f=t(0);n.a=function(e){return(n=function(n){function t(){l()(this,t);var e=i()(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments));return e.getValue=function(){var n=e.props,t=n.children,a=n.selectedValue;return a&&a.length?a:t?f.default.Children.map(t,function(e){var n=f.default.Children.toArray(e.children||e.props.children);return n&&n[0]&&n[0].props.value}):[]},e.onChange=function(n,t,a){var s=e.getValue().concat();s[n]=t,a&&a(s,n)},e.onValueChange=function(n,t){e.onChange(n,t,e.props.onValueChange)},e.onScrollChange=function(n,t){e.onChange(n,t,e.props.onScrollChange)},e}return d()(t,n),c()(t,[{key:"render",value:function(){return f.default.createElement(e,s()({},this.props,{getValue:this.getValue,onValueChange:this.onValueChange,onScrollChange:this.props.onScrollChange&&this.onScrollChange}))}}]),t}(f.default.Component)).defaultProps={prefixCls:"rmc-multi-picker",onValueChange:function(){}},n;var n}},529:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a=u(t(2)),s=u(t(5)),o=u(t(8)),l=u(t(6)),r=u(t(7));n.default=function(e){return(n=function(n){function t(){(0,s.default)(this,t);var e=(0,l.default)(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments));return e.select=function(n,t,a){for(var s=c.default.Children.toArray(e.props.children),o=0,l=s.length;o<l;o++)if(s[o].props.value===n)return void e.selectByIndex(o,t,a);e.selectByIndex(0,t,a)},e.doScrollingComplete=function(n,t,a){var s=c.default.Children.toArray(e.props.children),o=e.coumputeChildIndex(n,t,s.length),l=s[o];l?a(l.props.value):console.warn&&console.warn("child not found",s,o)},e}return(0,r.default)(t,n),(0,o.default)(t,[{key:"selectByIndex",value:function(e,n,t){e<0||e>=c.default.Children.count(this.props.children)||!n||t(e*n)}},{key:"coumputeChildIndex",value:function(e,n,t){var a=e/n,s=Math.floor(a);return a=a-s>.5?s+1:s,Math.min(a,t-1)}},{key:"render",value:function(){return c.default.createElement(e,(0,a.default)({},this.props,{doScrollingComplete:this.doScrollingComplete,coumputeChildIndex:this.coumputeChildIndex,select:this.select}))}}]),t}(c.default.Component)).Item=i,n;var n};var c=u(t(0));function u(e){return e&&e.__esModule?e:{default:e}}var i=function(e){return null};e.exports=n.default},531:function(e,n,t){"use strict";t(29),t(532)},532:function(e,n){},699:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a=t(2),s=t.n(a),o=t(5),l=t.n(o),r=t(8),c=t.n(r),u=t(6),i=t.n(u),p=t(7),d=t.n(p),f=t(0),h=t(700),v=t.n(h),k=t(522),m=t(524),g=t.n(m),y=function(e){function n(){l()(this,n);var e=i()(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments));return e.state={value:e.getValue(e.props.data,e.props.defaultValue||e.props.value)},e.onValueChange=function(n,t){var a=v()(e.props.data,function(e,a){return a<=t&&e.value===n[a]})[t],s=void 0;for(s=t+1;a&&a.children&&a.children.length&&s<e.props.cols;s++)a=a.children[0],n[s]=a.value;n.length=s,"value"in e.props||e.setState({value:n}),e.props.onChange&&e.props.onChange(n)},e}return d()(n,e),c()(n,[{key:"componentWillReceiveProps",value:function(e){"value"in e&&this.setState({value:this.getValue(e.data,e.value)})}},{key:"getValue",value:function(e,n){var t=e||this.props.data,a=n||this.props.value||this.props.defaultValue;if(!a||!a.length){a=[];for(var s=0;s<this.props.cols;s++)t&&t.length&&(a[s]=t[0].value,t=t[0].children)}return a}},{key:"getCols",value:function(){var e=this.props,n=e.data,t=e.cols,a=e.pickerPrefixCls,s=e.disabled,o=e.pickerItemStyle,l=e.indicatorStyle,r=this.state.value,c=v()(n,function(e,n){return e.value===r[n]}).map(function(e){return e.children}),u=t-c.length;if(u>0)for(var i=0;i<u;i++)c.push([]);return c.length=t-1,c.unshift(n),c.map(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],n=arguments[1];return f.default.createElement(g.a,{key:n,prefixCls:a,style:{flex:1},disabled:s,itemStyle:o,indicatorStyle:l},e.map(function(e){return f.default.createElement(g.a.Item,{value:e.value,key:e.value},e.label)}))})}},{key:"render",value:function(){var e=this.props,n=e.prefixCls,t=e.className,a=e.rootNativeProps,o=e.style,l=this.getCols(),r=s()({flexDirection:"row",alignItems:"center"},o);return f.default.createElement(k.default,{style:r,prefixCls:n,className:t,selectedValue:this.state.value,rootNativeProps:a,onValueChange:this.onValueChange,onScrollChange:e.onScrollChange},l)}}]),n}(f.default.Component);y.defaultProps={cols:3,prefixCls:"rmc-cascader",pickerPrefixCls:"rmc-picker",data:[],disabled:!1},n.default=y},700:function(e,n){e.exports=function(e,n,t){(t=t||{}).childrenKeyName=t.childrenKeyName||"children";var a=e||[],s=[],o=0;do{var l;if(!(l=a.filter(function(e){return n(e,o)})[0]))break;s.push(l),a=l[t.childrenKeyName]||[],o+=1}while(a.length>0);return s}},701:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a=t(34),s=t.n(a),o=t(2),l=t.n(o),r=t(5),c=t.n(r),u=t(8),i=t.n(u),p=t(6),d=t.n(p),f=t(7),h=t.n(f),v=t(0),k=t(3),m=t.n(k),g=t(702),y=function(e){function n(e){c()(this,n);var t,a,s,o,l,r,u,i,p,f,h,k,m=d()(this,(n.__proto__||Object.getPrototypeOf(n)).call(this,e));m.scrollHanders=(t=-1,a=0,s=0,o=!1,l=!1,r=function(e,n){e.transform=n,e.webkitTransform=n},u=function(e,n){e.transition=n,e.webkitTransition=n},i=function(e,n){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:.3;t!==n&&(t=n,a&&!m.props.noAnimate&&u(m.contentRef.style,"cubic-bezier(0,0,0.2,1.15) "+a+"s"),r(m.contentRef.style,"translate3d(0,"+-n+"px,0)"),setTimeout(function(){m.scrollingComplete(),m.contentRef&&u(m.contentRef.style,"")},1e3*+a))},p=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:30,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:100,t=0,a=0,s=0,o={record:function(o){var l=+new Date;s=(o-a)/(l-t),l-t>=e&&(s=l-t<=n?s:0,a=o,t=l)},getVelocity:function(e){return e!==a&&o.record(e),s}};return o}(),f=function(){l=!1;var e=t,n=(m.props.children.length-1)*m.itemHeight,a=.3,s=4*p.getVelocity(e);s&&(e=40*s+e,a=.1*Math.abs(s)),e%m.itemHeight!=0&&(e=Math.round(e/m.itemHeight)*m.itemHeight),e<0?e=0:e>n&&(e=n),i(0,e,a<.3?.3:a),m.onScrollChange()},h=function(e){o||(l=!0,s=e,a=t)},k=function(e){!o&&l&&(t=a-e+s,p.record(t),m.onScrollChange(),r(m.contentRef.style,"translate3d(0,"+-t+"px,0)"))},{touchstart:function(e){return h(e.touches[0].screenY)},mousedown:function(e){return h(e.screenY)},touchmove:function(e){e.preventDefault(),k(e.touches[0].screenY)},mousemove:function(e){e.preventDefault(),k(e.screenY)},touchend:function(){return f()},touchcancel:function(){return f()},mouseup:function(){return f()},getValue:function(){return t},scrollTo:i,setDisabled:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];o=e}}),m.scrollTo=function(e){m.scrollHanders.scrollTo(0,e)},m.scrollToWithoutAnimation=function(e){m.scrollHanders.scrollTo(0,e,0)},m.fireValueChange=function(e){e!==m.state.selectedValue&&("selectedValue"in m.props||m.setState({selectedValue:e}),m.props.onValueChange&&m.props.onValueChange(e))},m.onScrollChange=function(){var e=m.scrollHanders.getValue();if(e>=0){var n=v.default.Children.toArray(m.props.children),t=m.props.coumputeChildIndex(e,m.itemHeight,n.length);if(m.scrollValue!==t){m.scrollValue=t;var a=n[t];a&&m.props.onScrollChange?m.props.onScrollChange(a.props.value):!a&&console.warn&&console.warn("child not found",n,t)}}},m.scrollingComplete=function(){var e=m.scrollHanders.getValue();e>=0&&m.props.doScrollingComplete(e,m.itemHeight,m.fireValueChange)};var g=void 0,y=m.props,C=y.selectedValue,b=y.defaultSelectedValue;if(void 0!==C)g=C;else if(void 0!==b)g=b;else{var V=v.default.Children.toArray(m.props.children);g=V&&V[0]&&V[0].props.value}return m.state={selectedValue:g},m}return h()(n,e),i()(n,[{key:"componentDidMount",value:function(){var e=this,n=this.contentRef,t=this.indicatorRef,a=this.maskRef,s=this.rootRef,o=s.getBoundingClientRect().height,l=this.itemHeight=t.getBoundingClientRect().height,r=Math.floor(o/l);r%2==0&&r--,r--,r/=2,n.style.padding=l*r+"px 0",t.style.top=l*r+"px",a.style.backgroundSize="100% "+l*r+"px",this.scrollHanders.setDisabled(this.props.disabled),this.props.select(this.state.selectedValue,this.itemHeight,this.scrollTo);var c=this.passiveSupported(),u=!!c&&{passive:!1},i=!!c&&{passive:!0};Object.keys(this.scrollHanders).forEach(function(n){if(0===n.indexOf("touch")||0===n.indexOf("mouse")){var t=n.indexOf("move")>=0?u:i;s.addEventListener(n,e.scrollHanders[n],t)}})}},{key:"componentWillUnmount",value:function(){var e=this;Object.keys(this.scrollHanders).forEach(function(n){0!==n.indexOf("touch")&&0!==n.indexOf("mouse")||e.rootRef.removeEventListener(n,e.scrollHanders[n])})}},{key:"passiveSupported",value:function(){var e=!1;try{var n=Object.defineProperty({},"passive",{get:function(){e=!0}});window.addEventListener("test",null,n)}catch(e){}return e}},{key:"componentWillReceiveProps",value:function(e){var n=this;"selectedValue"in e&&this.state.selectedValue!==e.selectedValue&&this.setState({selectedValue:e.selectedValue},function(){n.props.select(e.selectedValue,n.itemHeight,e.noAnimate?n.scrollToWithoutAnimation:n.scrollTo)}),this.scrollHanders.setDisabled(e.disabled)}},{key:"shouldComponentUpdate",value:function(e,n){return this.state.selectedValue!==n.selectedValue||this.props.children!==e.children}},{key:"componentDidUpdate",value:function(){this.props.select(this.state.selectedValue,this.itemHeight,this.scrollToWithoutAnimation)}},{key:"getValue",value:function(){if("selectedValue"in this.props)return this.props.selectedValue;var e=v.default.Children.toArray(this.props.children);return e&&e[0]&&e[0].props.value}},{key:"render",value:function(){var e,n=this,t=this.props,a=t.prefixCls,o=t.itemStyle,r=t.indicatorStyle,c=t.indicatorClassName,u=void 0===c?"":c,i=t.children,p=this.state.selectedValue,d=a+"-item",f=d+" "+a+"-item-selected",h=function(e){var n=e.props,t=n.className,a=void 0===t?"":t,s=n.style,r=n.value;return v.default.createElement("div",{style:l()({},o,s),className:(p===r?f:d)+" "+a,key:r},e.children||e.props.children)},k=v.default.Children?v.default.Children.map(i,h):[].concat(i).map(h),g=(e={},s()(e,t.className,!!t.className),s()(e,a,!0),e);return v.default.createElement("div",{className:m()(g),ref:function(e){return n.rootRef=e},style:this.props.style},v.default.createElement("div",{className:a+"-mask",ref:function(e){return n.maskRef=e}}),v.default.createElement("div",{className:a+"-indicator "+u,ref:function(e){return n.indicatorRef=e},style:r}),v.default.createElement("div",{className:a+"-content",ref:function(e){return n.contentRef=e}},k))}}]),n}(v.default.Component);y.defaultProps={prefixCls:"rmc-picker"},n.default=Object(g.a)(y)},702:function(e,n,t){"use strict";var a=t(2),s=t.n(a),o=t(5),l=t.n(o),r=t(8),c=t.n(r),u=t(6),i=t.n(u),p=t(7),d=t.n(p),f=t(0),h=function(e){return null};n.a=function(e){return(n=function(n){function t(){l()(this,t);var e=i()(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments));return e.select=function(n,t,a){for(var s=f.default.Children.toArray(e.props.children),o=0,l=s.length;o<l;o++)if(s[o].props.value===n)return void e.selectByIndex(o,t,a);e.selectByIndex(0,t,a)},e.doScrollingComplete=function(n,t,a){var s=f.default.Children.toArray(e.props.children),o=e.coumputeChildIndex(n,t,s.length),l=s[o];l?a(l.props.value):console.warn&&console.warn("child not found",s,o)},e}return d()(t,n),c()(t,[{key:"selectByIndex",value:function(e,n,t){e<0||e>=f.default.Children.count(this.props.children)||!n||t(e*n)}},{key:"coumputeChildIndex",value:function(e,n,t){var a=e/n,s=Math.floor(a);return a=a-s>.5?s+1:s,Math.min(a,t-1)}},{key:"render",value:function(){return f.default.createElement(e,s()({},this.props,{doScrollingComplete:this.doScrollingComplete,coumputeChildIndex:this.coumputeChildIndex,select:this.select}))}}]),t}(f.default.Component)).Item=h,n;var n}},886:function(e,n,t){e.exports={content:[],meta:{order:0,title:{"zh-CN":"\u9009\u62e9\u5668","en-US":"Basic"},filename:"components/picker-view/demo/basic.md",id:"components-picker-view-demo-basic"},highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword">import</span> <span class="token punctuation">{</span> PickerView <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'antd-mobile\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> seasons <span class="token operator">=</span> <span class="token punctuation">[</span>\n  <span class="token punctuation">[</span>\n    <span class="token punctuation">{</span>\n      label<span class="token punctuation">:</span> <span class="token string">\'2013\'</span><span class="token punctuation">,</span>\n      value<span class="token punctuation">:</span> <span class="token string">\'2013\'</span><span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token punctuation">{</span>\n      label<span class="token punctuation">:</span> <span class="token string">\'2014\'</span><span class="token punctuation">,</span>\n      value<span class="token punctuation">:</span> <span class="token string">\'2014\'</span><span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">]</span><span class="token punctuation">,</span>\n  <span class="token punctuation">[</span>\n    <span class="token punctuation">{</span>\n      label<span class="token punctuation">:</span> <span class="token string">\'\u6625\'</span><span class="token punctuation">,</span>\n      value<span class="token punctuation">:</span> <span class="token string">\'\u6625\'</span><span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token punctuation">{</span>\n      label<span class="token punctuation">:</span> <span class="token string">\'\u590f\'</span><span class="token punctuation">,</span>\n      value<span class="token punctuation">:</span> <span class="token string">\'\u590f\'</span><span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">]</span><span class="token punctuation">,</span>\n<span class="token punctuation">]</span><span class="token punctuation">;</span>\n<span class="token keyword">class</span> <span class="token class-name">PickerViewExample</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>\n  state <span class="token operator">=</span> <span class="token punctuation">{</span>\n    value<span class="token punctuation">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">;</span>\n  onChange <span class="token operator">=</span> <span class="token punctuation">(</span>value<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>\n    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n      value<span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n  onScrollChange <span class="token operator">=</span> <span class="token punctuation">(</span>value<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>\n    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token punctuation">(</span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>PickerView</span>\n        <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>onChange<span class="token punctuation">}</span></span>\n        <span class="token attr-name">onScrollChange</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>onScrollChange<span class="token punctuation">}</span></span>\n        <span class="token attr-name">value</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>value<span class="token punctuation">}</span></span>\n        <span class="token attr-name">data</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>seasons<span class="token punctuation">}</span></span>\n        <span class="token attr-name">cascade</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token boolean">false</span><span class="token punctuation">}</span></span>\n      <span class="token punctuation">/></span></span>\n    <span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>PickerViewExample</span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span> mountNode<span class="token punctuation">)</span><span class="token punctuation">;</span>'}],preview:function(){var e=t(0);t(0);t(531);var n,a=(n=t(887),n&&n.__esModule?n:{default:n}).default,s=function(){function e(e,n){for(var t=0;t<n.length;t++){var a=n[t];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(n,t,a){return t&&e(n.prototype,t),a&&e(n,a),n}}();function o(e,n){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!=typeof n&&"function"!=typeof n?e:n}var l=[[{label:"2013",value:"2013"},{label:"2014",value:"2014"}],[{label:"\u6625",value:"\u6625"},{label:"\u590f",value:"\u590f"}]],r=function(n){function t(){var e,n,a;!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,t);for(var s=arguments.length,l=Array(s),r=0;r<s;r++)l[r]=arguments[r];return n=a=o(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(l))),a.state={value:null},a.onChange=function(e){console.log(e),a.setState({value:e})},a.onScrollChange=function(e){console.log(e)},o(a,n)}return function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+typeof n);e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(e,n):e.__proto__=n)}(t,e.Component),s(t,[{key:"render",value:function(){return e.createElement(a,{onChange:this.onChange,onScrollChange:this.onScrollChange,value:this.state.value,data:l,cascade:!1})}}]),t}();return e.createElement(r,null)}}},887:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a,s=t(888),o=(a=s)&&a.__esModule?a:{default:a};n.default=o.default,e.exports=n.default},888:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a=function(){function e(e,n){for(var t=0;t<n.length;t++){var a=n[t];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(n,t,a){return t&&e(n.prototype,t),a&&e(n,a),n}}(),s=c(t(0)),o=c(t(699)),l=c(t(522)),r=c(t(701));function c(e){return e&&e.__esModule?e:{default:e}}var u=function(e){function n(){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,n);var e=function(e,n){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!=typeof n&&"function"!=typeof n?e:n}(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments));return e.getCol=function(){var n=e.props,t=n.data,a=n.pickerPrefixCls,o=n.indicatorStyle,l=n.itemStyle;return t.map(function(e,n){return s.default.createElement(r.default,{key:n,prefixCls:a,style:{flex:1},indicatorStyle:o,itemStyle:l},e.map(function(e){return s.default.createElement(r.default.Item,{key:e.value,value:e.value},e.label)}))})},e}return function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+typeof n);e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(e,n):e.__proto__=n)}(n,s.default.Component),a(n,[{key:"render",value:function(){var e=this.props;return e.cascade?s.default.createElement(o.default,{prefixCls:e.prefixCls,pickerPrefixCls:e.pickerPrefixCls,data:e.data,value:e.value,onChange:e.onChange,onScrollChange:e.onScrollChange,cols:e.cols,indicatorStyle:e.indicatorStyle,pickerItemStyle:e.itemStyle}):s.default.createElement(l.default,{prefixCls:e.prefixCls,selectedValue:e.value,onValueChange:e.onChange,onScrollChange:e.onScrollChange,style:{flexDirection:"row"}},this.getCol())}}]),n}();n.default=u,u.defaultProps={prefixCls:"am-picker",pickerPrefixCls:"am-picker-col",cols:3,cascade:!0,value:[],onChange:function(){}},e.exports=n.default}});