import{c as z,h as j,a as Re,b as We,d as st}from"./render.a56b067a.js";import{c as b,h as q,r as C,i as ue,s as De,g as E,p as Se,n as le,a as $e,w as T,o as Ae,d as K,e as ct,l as he,f as Le,j as Ke,k as dt,T as ft,m as Ne,q as ge,t as vt,u as ht,v as R,x as be,y as re,z as Ie,A as mt,B as je,C as Z,_ as gt,D as bt,E as P,F as B,G as x,H as S,I as F,J as M,K as ee,L as yt}from"./index.23d01748.js";import{u as ye,a as pe}from"./use-dark.5abf75f7.js";import{u as pt,a as xt,v as wt,g as te,b as Ue,Q as He}from"./QBtn.57c8e080.js";import{c as qt}from"./selection.7a10b150.js";import{g as ne,a as kt,Q as oe,b as _t}from"./QScrollObserver.d805ccf4.js";import{c as Ct}from"./dom.af558b44.js";var Q=z({name:"QItemSection",props:{avatar:Boolean,thumbnail:Boolean,side:Boolean,top:Boolean,noWrap:Boolean},setup(e,{slots:l}){const o=b(()=>`q-item__section column q-item__section--${e.avatar===!0||e.side===!0||e.thumbnail===!0?"side":"main"}`+(e.top===!0?" q-item__section--top justify-start":" justify-center")+(e.avatar===!0?" q-item__section--avatar":"")+(e.thumbnail===!0?" q-item__section--thumbnail":"")+(e.noWrap===!0?" q-item__section--nowrap":""));return()=>q("div",{class:o.value},j(l.default))}}),V=z({name:"QItem",props:{...ye,...pt,tag:{type:String,default:"div"},active:{type:Boolean,default:null},clickable:Boolean,dense:Boolean,insetLevel:Number,tabindex:[String,Number],focused:Boolean,manualFocus:Boolean},emits:["click","keyup"],setup(e,{slots:l,emit:o}){const{proxy:{$q:n}}=E(),t=pe(e,n),{hasLink:r,linkAttrs:a,linkClass:c,linkTag:d,navigateOnClick:s}=xt(),f=C(null),y=C(null),w=b(()=>e.clickable===!0||r.value===!0||e.tag==="label"),u=b(()=>e.disable!==!0&&w.value===!0),p=b(()=>"q-item q-item-type row no-wrap"+(e.dense===!0?" q-item--dense":"")+(t.value===!0?" q-item--dark":"")+(r.value===!0&&e.active===null?c.value:e.active===!0?` q-item--active${e.activeClass!==void 0?` ${e.activeClass}`:""}`:"")+(e.disable===!0?" disabled":"")+(u.value===!0?" q-item--clickable q-link cursor-pointer "+(e.manualFocus===!0?"q-manual-focusable":"q-focusable q-hoverable")+(e.focused===!0?" q-manual-focusable--focused":""):"")),_=b(()=>{if(e.insetLevel===void 0)return null;const h=n.lang.rtl===!0?"Right":"Left";return{["padding"+h]:16+e.insetLevel*56+"px"}});function $(h){u.value===!0&&(y.value!==null&&(h.qKeyEvent!==!0&&document.activeElement===f.value?y.value.focus():document.activeElement===y.value&&f.value.focus()),s(h))}function L(h){if(u.value===!0&&ue(h,13)===!0){De(h),h.qKeyEvent=!0;const m=new MouseEvent("click",h);m.qKeyEvent=!0,f.value.dispatchEvent(m)}o("keyup",h)}function i(){const h=Re(l.default,[]);return u.value===!0&&h.unshift(q("div",{class:"q-focus-helper",tabindex:-1,ref:y})),h}return()=>{const h={ref:f,class:p.value,style:_.value,role:"listitem",onClick:$,onKeyup:L};return u.value===!0?(h.tabindex=e.tabindex||"0",Object.assign(h,a.value)):w.value===!0&&(h["aria-disabled"]="true"),q(d.value,h,i())}}}),Tt=z({name:"QList",props:{...ye,bordered:Boolean,dense:Boolean,separator:Boolean,padding:Boolean,tag:{type:String,default:"div"}},setup(e,{slots:l}){const o=E(),n=pe(e,o.proxy.$q),t=b(()=>"q-list"+(e.bordered===!0?" q-list--bordered":"")+(e.dense===!0?" q-list--dense":"")+(e.separator===!0?" q-list--separator":"")+(n.value===!0?" q-list--dark":"")+(e.padding===!0?" q-list--padding":""));return()=>q(e.tag,{class:t.value},j(l.default))}});const St={target:{default:!0},noParentEvent:Boolean,contextMenu:Boolean};function $t({showing:e,avoidEmit:l,configureAnchorEl:o}){const{props:n,proxy:t,emit:r}=E(),a=C(null);let c=null;function d(u){return a.value===null?!1:u===void 0||u.touches===void 0||u.touches.length<=1}const s={};o===void 0&&(Object.assign(s,{hide(u){t.hide(u)},toggle(u){t.toggle(u),u.qAnchorHandled=!0},toggleKey(u){ue(u,13)===!0&&s.toggle(u)},contextClick(u){t.hide(u),Se(u),le(()=>{t.show(u),u.qAnchorHandled=!0})},prevent:Se,mobileTouch(u){if(s.mobileCleanup(u),d(u)!==!0)return;t.hide(u),a.value.classList.add("non-selectable");const p=u.target;$e(s,"anchor",[[p,"touchmove","mobileCleanup","passive"],[p,"touchend","mobileCleanup","passive"],[p,"touchcancel","mobileCleanup","passive"],[a.value,"contextmenu","prevent","notPassive"]]),c=setTimeout(()=>{c=null,t.show(u),u.qAnchorHandled=!0},300)},mobileCleanup(u){a.value.classList.remove("non-selectable"),c!==null&&(clearTimeout(c),c=null),e.value===!0&&u!==void 0&&qt()}}),o=function(u=n.contextMenu){if(n.noParentEvent===!0||a.value===null)return;let p;u===!0?t.$q.platform.is.mobile===!0?p=[[a.value,"touchstart","mobileTouch","passive"]]:p=[[a.value,"mousedown","hide","passive"],[a.value,"contextmenu","contextClick","notPassive"]]:p=[[a.value,"click","toggle","passive"],[a.value,"keyup","toggleKey","passive"]],$e(s,"anchor",p)});function f(){ct(s,"anchor")}function y(u){for(a.value=u;a.value.classList.contains("q-anchor--skip");)a.value=a.value.parentNode;o()}function w(){if(n.target===!1||n.target===""||t.$el.parentNode===null)a.value=null;else if(n.target===!0)y(t.$el.parentNode);else{let u=n.target;if(typeof n.target=="string")try{u=document.querySelector(n.target)}catch{u=void 0}u!=null?(a.value=u.$el||u,o()):(a.value=null,console.error(`Anchor: target "${n.target}" not found`))}}return T(()=>n.contextMenu,u=>{a.value!==null&&(f(),o(u))}),T(()=>n.target,()=>{a.value!==null&&f(),w()}),T(()=>n.noParentEvent,u=>{a.value!==null&&(u===!0?f():o())}),Ae(()=>{w(),l!==!0&&n.modelValue===!0&&a.value===null&&r("update:modelValue",!1)}),K(()=>{c!==null&&clearTimeout(c),f()}),{anchorEl:a,canShow:d,anchorEvents:s}}function Lt(e,l){const o=C(null);let n;function t(c,d){const s=`${d!==void 0?"add":"remove"}EventListener`,f=d!==void 0?d:n;c!==window&&c[s]("scroll",f,he.passive),window[s]("scroll",f,he.passive),n=d}function r(){o.value!==null&&(t(o.value),o.value=null)}const a=T(()=>e.noParentEvent,()=>{o.value!==null&&(r(),l())});return K(a),{localScrollTarget:o,unconfigureScrollTarget:r,changeScrollEvent:t}}const Ht={modelValue:{type:Boolean,default:null},"onUpdate:modelValue":[Function,Array]},Et=["beforeShow","show","beforeHide","hide"];function Pt({showing:e,canShow:l,hideOnRouteChange:o,handleShow:n,handleHide:t,processOnMount:r}){const a=E(),{props:c,emit:d,proxy:s}=a;let f;function y(i){e.value===!0?p(i):w(i)}function w(i){if(c.disable===!0||i!==void 0&&i.qAnchorHandled===!0||l!==void 0&&l(i)!==!0)return;const h=c["onUpdate:modelValue"]!==void 0;h===!0&&(d("update:modelValue",!0),f=i,le(()=>{f===i&&(f=void 0)})),(c.modelValue===null||h===!1)&&u(i)}function u(i){e.value!==!0&&(e.value=!0,d("beforeShow",i),n!==void 0?n(i):d("show",i))}function p(i){if(c.disable===!0)return;const h=c["onUpdate:modelValue"]!==void 0;h===!0&&(d("update:modelValue",!1),f=i,le(()=>{f===i&&(f=void 0)})),(c.modelValue===null||h===!1)&&_(i)}function _(i){e.value!==!1&&(e.value=!1,d("beforeHide",i),t!==void 0?t(i):d("hide",i))}function $(i){c.disable===!0&&i===!0?c["onUpdate:modelValue"]!==void 0&&d("update:modelValue",!1):i===!0!==e.value&&(i===!0?u:_)(f)}T(()=>c.modelValue,$),o!==void 0&&wt(a)===!0&&T(()=>s.$route.fullPath,()=>{o.value===!0&&e.value===!0&&p()}),r===!0&&Ae(()=>{$(c.modelValue)});const L={show:w,hide:p,toggle:y};return Object.assign(s,L),L}let Y=[],J=[];function Ge(e){J=J.filter(l=>l!==e)}function Bt(e){Ge(e),J.push(e)}function Ee(e){Ge(e),J.length===0&&Y.length>0&&(Y[Y.length-1](),Y=[])}function zt(e){J.length===0?e():Y.push(e)}let Ft=1,Mt=document.body;function Qt(e,l){const o=document.createElement("div");if(o.id=l!==void 0?`q-portal--${l}--${Ft++}`:e,Le.globalNodes!==void 0){const n=Le.globalNodes.class;n!==void 0&&(o.className=n)}return Mt.appendChild(o),o}function Vt(e){e.remove()}const N=[];function Ot(e){return N.find(l=>l.contentEl!==null&&l.contentEl.contains(e))}function Xe(e,l){do{if(e.$options.name==="QMenu"){if(e.hide(l),e.$props.separateClosePopup===!0)return te(e)}else if(e.__qPortal===!0){const o=te(e);return o!==void 0&&o.$options.name==="QPopupProxy"?(e.hide(l),o):e}e=te(e)}while(e!=null)}function Rt(e,l,o){for(;o!==0&&e!==void 0&&e!==null;){if(e.__qPortal===!0){if(o--,e.$options.name==="QMenu"){e=Xe(e,l);continue}e.hide(l)}e=te(e)}}function Wt(e){for(e=e.parent;e!=null;){if(e.type.name==="QGlobalDialog")return!0;if(e.type.name==="QDialog"||e.type.name==="QMenu")return!1;e=e.parent}return!1}function Dt(e,l,o,n){const t=C(!1),r=C(!1);let a=null;const c={},d=n==="dialog"&&Wt(e);function s(y){if(y===!0){Ee(c),r.value=!0;return}r.value=!1,t.value===!1&&(d===!1&&a===null&&(a=Qt(!1,n)),t.value=!0,N.push(e.proxy),Bt(c))}function f(y){if(r.value=!1,y!==!0)return;Ee(c),t.value=!1;const w=N.indexOf(e.proxy);w!==-1&&N.splice(w,1),a!==null&&(Vt(a),a=null)}return Ke(()=>{f(!0)}),e.proxy.__qPortal=!0,dt(e.proxy,"contentEl",()=>l.value),{showPortal:s,hidePortal:f,portalIsActive:t,portalIsAccessible:r,renderPortal:()=>d===!0?o():t.value===!0?[q(ft,{to:a},o())]:void 0}}const At={transitionShow:{type:String,default:"fade"},transitionHide:{type:String,default:"fade"},transitionDuration:{type:[String,Number],default:300}};function Kt(e,l=()=>{},o=()=>{}){return{transitionProps:b(()=>{const n=`q-transition--${e.transitionShow||l()}`,t=`q-transition--${e.transitionHide||o()}`;return{appear:!0,enterFromClass:`${n}-enter-from`,enterActiveClass:`${n}-enter-active`,enterToClass:`${n}-enter-to`,leaveFromClass:`${t}-leave-from`,leaveActiveClass:`${t}-leave-active`,leaveToClass:`${t}-leave-to`}}),transitionStyle:b(()=>`--q-transition-duration: ${e.transitionDuration}ms`)}}function Nt(){let e;const l=E();function o(){e=void 0}return Ne(o),K(o),{removeTick:o,registerTick(n){e=n,le(()=>{e===n&&(Ue(l)===!1&&e(),e=void 0)})}}}function It(){let e=null;const l=E();function o(){e!==null&&(clearTimeout(e),e=null)}return Ne(o),K(o),{removeTimeout:o,registerTimeout(n,t){o(),Ue(l)===!1&&(e=setTimeout(n,t))}}}const W=[];let I;function jt(e){I=e.keyCode===27}function Ut(){I===!0&&(I=!1)}function Gt(e){I===!0&&(I=!1,ue(e,27)===!0&&W[W.length-1](e))}function Ye(e){window[e]("keydown",jt),window[e]("blur",Ut),window[e]("keyup",Gt),I=!1}function Xt(e){ge.is.desktop===!0&&(W.push(e),W.length===1&&Ye("addEventListener"))}function Pe(e){const l=W.indexOf(e);l>-1&&(W.splice(l,1),W.length===0&&Ye("removeEventListener"))}const D=[];function Je(e){D[D.length-1](e)}function Yt(e){ge.is.desktop===!0&&(D.push(e),D.length===1&&document.body.addEventListener("focusin",Je))}function Jt(e){const l=D.indexOf(e);l>-1&&(D.splice(l,1),D.length===0&&document.body.removeEventListener("focusin",Je))}const{notPassiveCapture:ae}=he,A=[];function ie(e){const l=e.target;if(l===void 0||l.nodeType===8||l.classList.contains("no-pointer-events")===!0)return;let o=N.length-1;for(;o>=0;){const n=N[o].$;if(n.type.name!=="QDialog")break;if(n.props.seamless!==!0)return;o--}for(let n=A.length-1;n>=0;n--){const t=A[n];if((t.anchorEl.value===null||t.anchorEl.value.contains(l)===!1)&&(l===document.body||t.innerRef.value!==null&&t.innerRef.value.contains(l)===!1))e.qClickOutside=!0,t.onClickOutside(e);else return}}function Zt(e){A.push(e),A.length===1&&(document.addEventListener("mousedown",ie,ae),document.addEventListener("touchstart",ie,ae))}function Be(e){const l=A.findIndex(o=>o===e);l>-1&&(A.splice(l,1),A.length===0&&(document.removeEventListener("mousedown",ie,ae),document.removeEventListener("touchstart",ie,ae)))}let ze,Fe;function Me(e){const l=e.split(" ");return l.length!==2?!1:["top","center","bottom"].includes(l[0])!==!0?(console.error("Anchor/Self position must start with one of top/center/bottom"),!1):["left","middle","right","start","end"].includes(l[1])!==!0?(console.error("Anchor/Self position must end with one of left/middle/right/start/end"),!1):!0}function en(e){return e?!(e.length!==2||typeof e[0]!="number"||typeof e[1]!="number"):!0}const me={"start#ltr":"left","start#rtl":"right","end#ltr":"right","end#rtl":"left"};["left","middle","right"].forEach(e=>{me[`${e}#ltr`]=e,me[`${e}#rtl`]=e});function Qe(e,l){const o=e.split(" ");return{vertical:o[0],horizontal:me[`${o[1]}#${l===!0?"rtl":"ltr"}`]}}function tn(e,l){let{top:o,left:n,right:t,bottom:r,width:a,height:c}=e.getBoundingClientRect();return l!==void 0&&(o-=l[1],n-=l[0],r+=l[1],t+=l[0],a+=l[0],c+=l[1]),{top:o,bottom:r,height:c,left:n,right:t,width:a,middle:n+(t-n)/2,center:o+(r-o)/2}}function nn(e,l,o){let{top:n,left:t}=e.getBoundingClientRect();return n+=l.top,t+=l.left,o!==void 0&&(n+=o[1],t+=o[0]),{top:n,bottom:n+1,height:1,left:t,right:t+1,width:1,middle:t,center:n}}function ln(e){return{top:0,center:e.offsetHeight/2,bottom:e.offsetHeight,left:0,middle:e.offsetWidth/2,right:e.offsetWidth}}function Ve(e,l,o){return{top:e[o.anchorOrigin.vertical]-l[o.selfOrigin.vertical],left:e[o.anchorOrigin.horizontal]-l[o.selfOrigin.horizontal]}}function on(e){if(ge.is.ios===!0&&window.visualViewport!==void 0){const c=document.body.style,{offsetLeft:d,offsetTop:s}=window.visualViewport;d!==ze&&(c.setProperty("--q-pe-left",d+"px"),ze=d),s!==Fe&&(c.setProperty("--q-pe-top",s+"px"),Fe=s)}const{scrollLeft:l,scrollTop:o}=e.el,n=e.absoluteOffset===void 0?tn(e.anchorEl,e.cover===!0?[0,0]:e.offset):nn(e.anchorEl,e.absoluteOffset,e.offset);let t={maxHeight:e.maxHeight,maxWidth:e.maxWidth,visibility:"visible"};(e.fit===!0||e.cover===!0)&&(t.minWidth=n.width+"px",e.cover===!0&&(t.minHeight=n.height+"px")),Object.assign(e.el.style,t);const r=ln(e.el);let a=Ve(n,r,e);if(e.absoluteOffset===void 0||e.offset===void 0)ve(a,n,r,e.anchorOrigin,e.selfOrigin);else{const{top:c,left:d}=a;ve(a,n,r,e.anchorOrigin,e.selfOrigin);let s=!1;if(a.top!==c){s=!0;const f=2*e.offset[1];n.center=n.top-=f,n.bottom-=f+2}if(a.left!==d){s=!0;const f=2*e.offset[0];n.middle=n.left-=f,n.right-=f+2}s===!0&&(a=Ve(n,r,e),ve(a,n,r,e.anchorOrigin,e.selfOrigin))}t={top:a.top+"px",left:a.left+"px"},a.maxHeight!==void 0&&(t.maxHeight=a.maxHeight+"px",n.height>a.maxHeight&&(t.minHeight=t.maxHeight)),a.maxWidth!==void 0&&(t.maxWidth=a.maxWidth+"px",n.width>a.maxWidth&&(t.minWidth=t.maxWidth)),Object.assign(e.el.style,t),e.el.scrollTop!==o&&(e.el.scrollTop=o),e.el.scrollLeft!==l&&(e.el.scrollLeft=l)}function ve(e,l,o,n,t){const r=o.bottom,a=o.right,c=ne(),d=window.innerHeight-c,s=document.body.clientWidth;if(e.top<0||e.top+r>d)if(t.vertical==="center")e.top=l[n.vertical]>d/2?Math.max(0,d-r):0,e.maxHeight=Math.min(r,d);else if(l[n.vertical]>d/2){const f=Math.min(d,n.vertical==="center"?l.center:n.vertical===t.vertical?l.bottom:l.top);e.maxHeight=Math.min(r,f),e.top=Math.max(0,f-r)}else e.top=Math.max(0,n.vertical==="center"?l.center:n.vertical===t.vertical?l.top:l.bottom),e.maxHeight=Math.min(r,d-e.top);if(e.left<0||e.left+a>s)if(e.maxWidth=Math.min(a,s),t.horizontal==="middle")e.left=l[n.horizontal]>s/2?Math.max(0,s-a):0;else if(l[n.horizontal]>s/2){const f=Math.min(s,n.horizontal==="middle"?l.middle:n.horizontal===t.horizontal?l.right:l.left);e.maxWidth=Math.min(a,f),e.left=Math.max(0,f-e.maxWidth)}else e.left=Math.max(0,n.horizontal==="middle"?l.middle:n.horizontal===t.horizontal?l.left:l.right),e.maxWidth=Math.min(a,s-e.left)}var an=z({name:"QMenu",inheritAttrs:!1,props:{...St,...Ht,...ye,...At,persistent:Boolean,autoClose:Boolean,separateClosePopup:Boolean,noRouteDismiss:Boolean,noRefocus:Boolean,noFocus:Boolean,fit:Boolean,cover:Boolean,square:Boolean,anchor:{type:String,validator:Me},self:{type:String,validator:Me},offset:{type:Array,validator:en},scrollTarget:{default:void 0},touchPosition:Boolean,maxHeight:{type:String,default:null},maxWidth:{type:String,default:null}},emits:[...Et,"click","escapeKey"],setup(e,{slots:l,emit:o,attrs:n}){let t=null,r,a,c;const d=E(),{proxy:s}=d,{$q:f}=s,y=C(null),w=C(!1),u=b(()=>e.persistent!==!0&&e.noRouteDismiss!==!0),p=pe(e,f),{registerTick:_,removeTick:$}=Nt(),{registerTimeout:L}=It(),{transitionProps:i,transitionStyle:h}=Kt(e),{localScrollTarget:m,changeScrollEvent:v,unconfigureScrollTarget:k}=Lt(e,Ce),{anchorEl:H,canShow:U}=$t({showing:w}),{hide:G}=Pt({showing:w,canShow:U,handleShow:lt,handleHide:ot,hideOnRouteChange:u,processOnMount:!0}),{showPortal:xe,hidePortal:we,renderPortal:Ze}=Dt(d,y,it,"menu"),se={anchorEl:H,innerRef:y,onClickOutside(g){if(e.persistent!==!0&&w.value===!0)return G(g),(g.type==="touchstart"||g.target.classList.contains("q-dialog__backdrop"))&&De(g),!0}},qe=b(()=>Qe(e.anchor||(e.cover===!0?"center middle":"bottom start"),f.lang.rtl)),et=b(()=>e.cover===!0?qe.value:Qe(e.self||"top start",f.lang.rtl)),tt=b(()=>(e.square===!0?" q-menu--square":"")+(p.value===!0?" q-menu--dark q-dark":"")),nt=b(()=>e.autoClose===!0?{onClick:at}:{}),ke=b(()=>w.value===!0&&e.persistent!==!0);T(ke,g=>{g===!0?(Xt(de),Zt(se)):(Pe(de),Be(se))});function ce(){zt(()=>{let g=y.value;g&&g.contains(document.activeElement)!==!0&&(g=g.querySelector("[autofocus][tabindex], [data-autofocus][tabindex]")||g.querySelector("[autofocus] [tabindex], [data-autofocus] [tabindex]")||g.querySelector("[autofocus], [data-autofocus]")||g,g.focus({preventScroll:!0}))})}function lt(g){if(t=e.noRefocus===!1?document.activeElement:null,Yt(Te),xe(),Ce(),r=void 0,g!==void 0&&(e.touchPosition||e.contextMenu)){const fe=vt(g);if(fe.left!==void 0){const{top:ut,left:rt}=H.value.getBoundingClientRect();r={left:fe.left-rt,top:fe.top-ut}}}a===void 0&&(a=T(()=>f.screen.width+"|"+f.screen.height+"|"+e.self+"|"+e.anchor+"|"+f.lang.rtl,X)),e.noFocus!==!0&&document.activeElement.blur(),_(()=>{X(),e.noFocus!==!0&&ce()}),L(()=>{f.platform.is.ios===!0&&(c=e.autoClose,y.value.click()),X(),xe(!0),o("show",g)},e.transitionDuration)}function ot(g){$(),we(),_e(!0),t!==null&&(g===void 0||g.qClickOutside!==!0)&&(((g&&g.type.indexOf("key")===0?t.closest('[tabindex]:not([tabindex^="-"])'):void 0)||t).focus(),t=null),L(()=>{we(!0),o("hide",g)},e.transitionDuration)}function _e(g){r=void 0,a!==void 0&&(a(),a=void 0),(g===!0||w.value===!0)&&(Jt(Te),k(),Be(se),Pe(de)),g!==!0&&(t=null)}function Ce(){(H.value!==null||e.scrollTarget!==void 0)&&(m.value=kt(H.value,e.scrollTarget),v(m.value,X))}function at(g){c!==!0?(Xe(s,g),o("click",g)):c=!1}function Te(g){ke.value===!0&&e.noFocus!==!0&&Ct(y.value,g.target)!==!0&&ce()}function de(g){o("escapeKey"),G(g)}function X(){const g=y.value;g===null||H.value===null||on({el:g,offset:e.offset,anchorEl:H.value,anchorOrigin:qe.value,selfOrigin:et.value,absoluteOffset:r,fit:e.fit,cover:e.cover,maxHeight:e.maxHeight,maxWidth:e.maxWidth})}function it(){return q(ht,i.value,()=>w.value===!0?q("div",{role:"menu",...n,ref:y,tabindex:-1,class:["q-menu q-position-engine scroll"+tt.value,n.class],style:[n.style,h.value],...nt.value},j(l.default)):null)}return K(_e),Object.assign(s,{focus:ce,updatePosition:X}),Ze}}),un=z({name:"QToolbarTitle",props:{shrink:Boolean},setup(e,{slots:l}){const o=b(()=>"q-toolbar__title ellipsis"+(e.shrink===!0?" col-shrink":""));return()=>q("div",{class:o.value},j(l.default))}}),rn=z({name:"QToolbar",props:{inset:Boolean},setup(e,{slots:l}){const o=b(()=>"q-toolbar row no-wrap items-center"+(e.inset===!0?" q-toolbar--inset":""));return()=>q("div",{class:o.value,role:"toolbar"},j(l.default))}}),sn=z({name:"QHeader",props:{modelValue:{type:Boolean,default:!0},reveal:Boolean,revealOffset:{type:Number,default:250},bordered:Boolean,elevated:Boolean,heightHint:{type:[String,Number],default:50}},emits:["reveal","focusin"],setup(e,{slots:l,emit:o}){const{proxy:{$q:n}}=E(),t=be(re,R);if(t===R)return console.error("QHeader needs to be child of QLayout"),R;const r=C(parseInt(e.heightHint,10)),a=C(!0),c=b(()=>e.reveal===!0||t.view.value.indexOf("H")>-1||n.platform.is.ios&&t.isContainer.value===!0),d=b(()=>{if(e.modelValue!==!0)return 0;if(c.value===!0)return a.value===!0?r.value:0;const i=r.value-t.scroll.value.position;return i>0?i:0}),s=b(()=>e.modelValue!==!0||c.value===!0&&a.value!==!0),f=b(()=>e.modelValue===!0&&s.value===!0&&e.reveal===!0),y=b(()=>"q-header q-layout__section--marginal "+(c.value===!0?"fixed":"absolute")+"-top"+(e.bordered===!0?" q-header--bordered":"")+(s.value===!0?" q-header--hidden":"")+(e.modelValue!==!0?" q-layout--prevent-focus":"")),w=b(()=>{const i=t.rows.value.top,h={};return i[0]==="l"&&t.left.space===!0&&(h[n.lang.rtl===!0?"right":"left"]=`${t.left.size}px`),i[2]==="r"&&t.right.space===!0&&(h[n.lang.rtl===!0?"left":"right"]=`${t.right.size}px`),h});function u(i,h){t.update("header",i,h)}function p(i,h){i.value!==h&&(i.value=h)}function _({height:i}){p(r,i),u("size",i)}function $(i){f.value===!0&&p(a,!0),o("focusin",i)}T(()=>e.modelValue,i=>{u("space",i),p(a,!0),t.animate()}),T(d,i=>{u("offset",i)}),T(()=>e.reveal,i=>{i===!1&&p(a,e.modelValue)}),T(a,i=>{t.animate(),o("reveal",i)}),T(t.scroll,i=>{e.reveal===!0&&p(a,i.direction==="up"||i.position<=e.revealOffset||i.position-i.inflectionPoint<100)});const L={};return t.instances.header=L,e.modelValue===!0&&u("size",r.value),u("space",e.modelValue),u("offset",d.value),K(()=>{t.instances.header===L&&(t.instances.header=void 0,u("size",0),u("offset",0),u("space",!1))}),()=>{const i=Re(l.default,[]);return e.elevated===!0&&i.push(q("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),i.push(q(oe,{debounce:0,onResize:_})),q("header",{class:y.value,style:w.value,onFocusin:$},i)}}}),cn=z({name:"QPageContainer",setup(e,{slots:l}){const{proxy:{$q:o}}=E(),n=be(re,R);if(n===R)return console.error("QPageContainer needs to be child of QLayout"),R;Ie(mt,!0);const t=b(()=>{const r={};return n.header.space===!0&&(r.paddingTop=`${n.header.size}px`),n.right.space===!0&&(r[`padding${o.lang.rtl===!0?"Left":"Right"}`]=`${n.right.size}px`),n.footer.space===!0&&(r.paddingBottom=`${n.footer.size}px`),n.left.space===!0&&(r[`padding${o.lang.rtl===!0?"Right":"Left"}`]=`${n.left.size}px`),r});return()=>q("div",{class:"q-page-container",style:t.value},j(l.default))}}),dn=z({name:"QFooter",props:{modelValue:{type:Boolean,default:!0},reveal:Boolean,bordered:Boolean,elevated:Boolean,heightHint:{type:[String,Number],default:50}},emits:["reveal","focusin"],setup(e,{slots:l,emit:o}){const{proxy:{$q:n}}=E(),t=be(re,R);if(t===R)return console.error("QFooter needs to be child of QLayout"),R;const r=C(parseInt(e.heightHint,10)),a=C(!0),c=C(je.value===!0||t.isContainer.value===!0?0:window.innerHeight),d=b(()=>e.reveal===!0||t.view.value.indexOf("F")>-1||n.platform.is.ios&&t.isContainer.value===!0),s=b(()=>t.isContainer.value===!0?t.containerHeight.value:c.value),f=b(()=>{if(e.modelValue!==!0)return 0;if(d.value===!0)return a.value===!0?r.value:0;const v=t.scroll.value.position+s.value+r.value-t.height.value;return v>0?v:0}),y=b(()=>e.modelValue!==!0||d.value===!0&&a.value!==!0),w=b(()=>e.modelValue===!0&&y.value===!0&&e.reveal===!0),u=b(()=>"q-footer q-layout__section--marginal "+(d.value===!0?"fixed":"absolute")+"-bottom"+(e.bordered===!0?" q-footer--bordered":"")+(y.value===!0?" q-footer--hidden":"")+(e.modelValue!==!0?" q-layout--prevent-focus"+(d.value!==!0?" hidden":""):"")),p=b(()=>{const v=t.rows.value.bottom,k={};return v[0]==="l"&&t.left.space===!0&&(k[n.lang.rtl===!0?"right":"left"]=`${t.left.size}px`),v[2]==="r"&&t.right.space===!0&&(k[n.lang.rtl===!0?"left":"right"]=`${t.right.size}px`),k});function _(v,k){t.update("footer",v,k)}function $(v,k){v.value!==k&&(v.value=k)}function L({height:v}){$(r,v),_("size",v)}function i(){if(e.reveal!==!0)return;const{direction:v,position:k,inflectionPoint:H}=t.scroll.value;$(a,v==="up"||k-H<100||t.height.value-s.value-k-r.value<300)}function h(v){w.value===!0&&$(a,!0),o("focusin",v)}T(()=>e.modelValue,v=>{_("space",v),$(a,!0),t.animate()}),T(f,v=>{_("offset",v)}),T(()=>e.reveal,v=>{v===!1&&$(a,e.modelValue)}),T(a,v=>{t.animate(),o("reveal",v)}),T([r,t.scroll,t.height],i),T(()=>n.screen.height,v=>{t.isContainer.value!==!0&&$(c,v)});const m={};return t.instances.footer=m,e.modelValue===!0&&_("size",r.value),_("space",e.modelValue),_("offset",f.value),K(()=>{t.instances.footer===m&&(t.instances.footer=void 0,_("size",0),_("offset",0),_("space",!1))}),()=>{const v=We(l.default,[q(oe,{debounce:0,onResize:L})]);return e.elevated===!0&&v.push(q("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),q("footer",{class:u.value,style:p.value,onFocusin:h},v)}}}),fn=z({name:"QLayout",props:{container:Boolean,view:{type:String,default:"hhh lpr fff",validator:e=>/^(h|l)h(h|r) lpr (f|l)f(f|r)$/.test(e.toLowerCase())},onScroll:Function,onScrollHeight:Function,onResize:Function},setup(e,{slots:l,emit:o}){const{proxy:{$q:n}}=E(),t=C(null),r=C(n.screen.height),a=C(e.container===!0?0:n.screen.width),c=C({position:0,direction:"down",inflectionPoint:0}),d=C(0),s=C(je.value===!0?0:ne()),f=b(()=>"q-layout q-layout--"+(e.container===!0?"containerized":"standard")),y=b(()=>e.container===!1?{minHeight:n.screen.height+"px"}:null),w=b(()=>s.value!==0?{[n.lang.rtl===!0?"left":"right"]:`${s.value}px`}:null),u=b(()=>s.value!==0?{[n.lang.rtl===!0?"right":"left"]:0,[n.lang.rtl===!0?"left":"right"]:`-${s.value}px`,width:`calc(100% + ${s.value}px)`}:null);function p(m){if(e.container===!0||document.qScrollPrevented!==!0){const v={position:m.position.top,direction:m.direction,directionChanged:m.directionChanged,inflectionPoint:m.inflectionPoint.top,delta:m.delta.top};c.value=v,e.onScroll!==void 0&&o("scroll",v)}}function _(m){const{height:v,width:k}=m;let H=!1;r.value!==v&&(H=!0,r.value=v,e.onScrollHeight!==void 0&&o("scrollHeight",v),L()),a.value!==k&&(H=!0,a.value=k),H===!0&&e.onResize!==void 0&&o("resize",m)}function $({height:m}){d.value!==m&&(d.value=m,L())}function L(){if(e.container===!0){const m=r.value>d.value?ne():0;s.value!==m&&(s.value=m)}}let i=null;const h={instances:{},view:b(()=>e.view),isContainer:b(()=>e.container),rootRef:t,height:r,containerHeight:d,scrollbarWidth:s,totalWidth:b(()=>a.value+s.value),rows:b(()=>{const m=e.view.toLowerCase().split(" ");return{top:m[0].split(""),middle:m[1].split(""),bottom:m[2].split("")}}),header:Z({size:0,offset:0,space:!1}),right:Z({size:300,offset:0,space:!1}),footer:Z({size:0,offset:0,space:!1}),left:Z({size:300,offset:0,space:!1}),scroll:c,animate(){i!==null?clearTimeout(i):document.body.classList.add("q-body--layout-animate"),i=setTimeout(()=>{i=null,document.body.classList.remove("q-body--layout-animate")},155)},update(m,v,k){h[m][v]=k}};if(Ie(re,h),ne()>0){let k=function(){m=null,v.classList.remove("hide-scrollbar")},H=function(){if(m===null){if(v.scrollHeight>n.screen.height)return;v.classList.add("hide-scrollbar")}else clearTimeout(m);m=setTimeout(k,300)},U=function(G){m!==null&&G==="remove"&&(clearTimeout(m),k()),window[`${G}EventListener`]("resize",H)},m=null;const v=document.body;T(()=>e.container!==!0?"add":"remove",U),e.container!==!0&&U("add"),Ke(()=>{U("remove")})}return()=>{const m=We(l.default,[q(_t,{onScroll:p}),q(oe,{onResize:_})]),v=q("div",{class:f.value,style:y.value,ref:e.container===!0?void 0:t,tabindex:-1},m);return e.container===!0?q("div",{class:"q-layout-container overflow-hidden",ref:t},[q(oe,{onResize:$}),q("div",{class:"absolute-full",style:w.value},[q("div",{class:"scroll",style:u.value},[v])])]):v}}});function Oe(e){if(e===!1)return 0;if(e===!0||e===void 0)return 1;const l=parseInt(e,10);return isNaN(l)?0:l}var O=st({name:"close-popup",beforeMount(e,{value:l}){const o={depth:Oe(l),handler(n){o.depth!==0&&setTimeout(()=>{const t=Ot(e);t!==void 0&&Rt(t,n,o.depth)})},handlerKey(n){ue(n,13)===!0&&o.handler(n)}};e.__qclosepopup=o,e.addEventListener("click",o.handler),e.addEventListener("keyup",o.handlerKey)},updated(e,{value:l,oldValue:o}){l!==o&&(e.__qclosepopup.depth=Oe(l))},beforeUnmount(e){const l=e.__qclosepopup;e.removeEventListener("click",l.handler),e.removeEventListener("keyup",l.handlerKey),delete e.__qclosepopup}});const vn=bt({name:"MainLayout",setup(){const e=C(!1);return{drawerOpen:e,toggleDrawer(){e.value=!e.value}}}}),hn=ee("div",null,[ee("div",{style:{"z-index":"0"}},[ee("img",{src:"logo.png",style:{height:"19vh"}})]),ee("div",{class:"text-weight-bold",style:{"margin-left":"2.75vh","margin-top":"-9.4vh"}}," MARS AIR STUDIO ")],-1);function mn(e,l,o,n,t,r){const a=yt("router-view");return P(),B(fn,{view:"hHh LpR lFf"},{default:x(()=>[S(sn,{elevated:""},{default:x(()=>[S(rn,{class:"text-center",style:{background:"linear-gradient(270deg, black 87%, gray)"}},{default:x(()=>[S(He,{flat:"",dense:"",round:"",icon:"menu","aria-label":"Menu"},{default:x(()=>[S(an,{persistent:"","auto-close":""},{default:x(()=>[S(Tt,{class:"column"},{default:x(()=>[F((P(),B(V,{clickable:"",href:"/"},{default:x(()=>[S(Q,null,{default:x(()=>[M("Home")]),_:1})]),_:1})),[[O]]),F((P(),B(V,{clickable:"",href:"/graduations"},{default:x(()=>[S(Q,null,{default:x(()=>[M("Graduations")]),_:1})]),_:1})),[[O]]),F((P(),B(V,{clickable:"",href:"/weddings"},{default:x(()=>[S(Q,null,{default:x(()=>[M("Weddings")]),_:1})]),_:1})),[[O]]),F((P(),B(V,{clickable:"",href:"/children"},{default:x(()=>[S(Q,null,{default:x(()=>[M("Children")]),_:1})]),_:1})),[[O]]),F((P(),B(V,{clickable:"",href:"/family"},{default:x(()=>[S(Q,null,{default:x(()=>[M("Family")]),_:1})]),_:1})),[[O]]),F((P(),B(V,{clickable:"",href:"/events"},{default:x(()=>[S(Q,null,{default:x(()=>[M("Parties & Events")]),_:1})]),_:1})),[[O]]),F((P(),B(V,{clickable:"",href:"/artwork"},{default:x(()=>[S(Q,null,{default:x(()=>[M("Digital Art Work")]),_:1})]),_:1})),[[O]]),F((P(),B(V,{clickable:"",href:"/landscapes"},{default:x(()=>[S(Q,null,{default:x(()=>[M("Landscapes")]),_:1})]),_:1})),[[O]]),F((P(),B(V,{clickable:"",href:"https://migsbeast.github.io"},{default:x(()=>[S(Q,null,{default:x(()=>[M("Website Designs")]),_:1})]),_:1})),[[O]])]),_:1})]),_:1})]),_:1}),S(un,{class:"text-center"}),S(He,{icon:"camera",type:"a",href:"https://instagram.com/mars.air.studio",target:"_blank"})]),_:1})]),_:1}),S(cn,null,{default:x(()=>[S(a)]),_:1}),S(dn,{class:"column bg-white text-center items-center text-grey q-pt-xs"},{default:x(()=>[hn]),_:1})]),_:1})}var kn=gt(vn,[["render",mn]]);export{kn as default};
