webpackJsonp([46],{406:function(n,a,s){n.exports={basic:s(883)}},883:function(n,a,s){n.exports={content:[],meta:{order:0,title:{"en-US":"Notice Bar","zh-CN":"\u901a\u544a\u680f"},filename:"components/notice-bar/demo/basic.md",id:"components-notice-bar-demo-basic"},highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword">import</span> <span class="token punctuation">{</span> NoticeBar<span class="token punctuation">,</span> WhiteSpace<span class="token punctuation">,</span> Icon <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'antd-mobile\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> NoticeBarExample <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>WhiteSpace</span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>lg<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>NoticeBar</span> <span class="token attr-name">marqueeProps</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> loop<span class="token punctuation">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> style<span class="token punctuation">:</span> <span class="token punctuation">{</span> padding<span class="token punctuation">:</span> <span class="token string">\'0 7.5px\'</span> <span class="token punctuation">}</span> <span class="token punctuation">}</span></span><span class="token attr-name">}</span><span class="token punctuation">></span></span>\n      Notice<span class="token punctuation">:</span> The arrival time <span class="token keyword">of</span> incomes and transfers <span class="token keyword">of</span> Yu <span class="token entity" title="&#39;">&amp;#39;</span>E Bao will be delayed during National Day<span class="token punctuation">.</span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>NoticeBar</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>WhiteSpace</span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>lg<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>NoticeBar</span> <span class="token attr-name">mode</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>link<span class="token punctuation">"</span></span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">\'1\'</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\n      Notice<span class="token punctuation">:</span> The arrival time <span class="token keyword">of</span> incomes and transfers <span class="token keyword">of</span> Yu <span class="token entity" title="&#39;">&amp;#39;</span>E Bao will be delayed during National Day<span class="token punctuation">.</span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>NoticeBar</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>WhiteSpace</span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>lg<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>NoticeBar</span> <span class="token attr-name">mode</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>closable<span class="token punctuation">"</span></span> <span class="token attr-name">icon</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">null</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>Remove the <span class="token keyword">default</span> icon<span class="token punctuation">.</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>NoticeBar</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>WhiteSpace</span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>lg<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>NoticeBar</span> <span class="token attr-name">mode</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>closable<span class="token punctuation">"</span></span> <span class="token attr-name">icon={&lt;Icon</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>check-circle-o<span class="token punctuation">"</span></span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>xxs<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">}</span><span class="token operator">></span>\n      Customized icon<span class="token punctuation">.</span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>NoticeBar</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>WhiteSpace</span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>lg<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>NoticeBar</span> <span class="token attr-name">mode</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>closable<span class="token punctuation">"</span></span> <span class="token attr-name">action</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token operator">&lt;</span>span style<span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> color<span class="token punctuation">:</span> <span class="token string">\'#a1a1a1\'</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\u4e0d\u518d\u63d0\u793a<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span><span class="token punctuation">}</span><span class="token operator">></span>\n      Closable demo <span class="token keyword">for</span> <span class="token template-string"><span class="token string">`actionText`</span></span><span class="token punctuation">.</span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>NoticeBar</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>WhiteSpace</span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>lg<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>NoticeBar</span> <span class="token attr-name">mode</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>link<span class="token punctuation">"</span></span> <span class="token attr-name">action={&lt;span</span><span class="token punctuation">></span></span>\u53bb\u770b\u770b<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span><span class="token punctuation">}</span><span class="token operator">></span>\n      Link demo <span class="token keyword">for</span> <span class="token template-string"><span class="token string">`actionText`</span></span><span class="token punctuation">.</span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>NoticeBar</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>NoticeBarExample</span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span> mountNode<span class="token punctuation">)</span><span class="token punctuation">;</span>'}],preview:function(){var n=s(0);s(0);s(140);var a=d(s(141)).default;s(128);var t=d(s(129)).default;s(140);var p=d(s(141)).default;s(128);var e=d(s(129)).default;s(140);var o=d(s(141)).default;s(43);var c=d(s(44)).default;s(128);var l=d(s(129)).default;s(140);var u=d(s(141)).default;s(128);var i=d(s(129)).default;s(140);var k=d(s(141)).default;s(128);var r=d(s(129)).default;s(140);var g=d(s(141)).default;s(128);var m=d(s(129)).default;function d(n){return n&&n.__esModule?n:{default:n}}return n.createElement(function(){return n.createElement("div",null,n.createElement(m,{size:"lg"}),n.createElement(g,{marqueeProps:{loop:!0,style:{padding:"0 7.5px"}}},"Notice: The arrival time of incomes and transfers of Yu 'E Bao will be delayed during National Day."),n.createElement(r,{size:"lg"}),n.createElement(k,{mode:"link",onClick:function(){return alert("1")}},"Notice: The arrival time of incomes and transfers of Yu 'E Bao will be delayed during National Day."),n.createElement(i,{size:"lg"}),n.createElement(u,{mode:"closable",icon:null},"Remove the default icon."),n.createElement(l,{size:"lg"}),n.createElement(o,{mode:"closable",icon:n.createElement(c,{type:"check-circle-o",size:"xxs"})},"Customized icon."),n.createElement(e,{size:"lg"}),n.createElement(p,{mode:"closable",action:n.createElement("span",{style:{color:"#a1a1a1"}},"\u4e0d\u518d\u63d0\u793a")},"Closable demo for `actionText`."),n.createElement(t,{size:"lg"}),n.createElement(a,{mode:"link",action:n.createElement("span",null,"\u53bb\u770b\u770b")},"Link demo for `actionText`."))},null)}}}});