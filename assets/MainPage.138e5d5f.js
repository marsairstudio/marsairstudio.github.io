import{c as H,i as de,l as ve,h as O,v as fe,m as me,Q as C,f as he}from"./QBtn.0b8919d6.js";import{h as p,q as j,x as pe,R as ge,a as K,S as G,t as te,s as J,e as Z,r as z,c as g,w as E,g as Y,u as ye,n as _e,U as we,V as xe,o as se,d as le,W as ne,X as be,_ as qe,F as ke,Y as Ce,L as q,I as o,H as d,K as l}from"./index.418b2584.js";import{c as Ie,u as ue,a as ce,s as Pe}from"./scroll.2ce6b1b2.js";const Se=p("div",{class:"q-space"});var m=H({name:"QSpace",setup(){return()=>Se}});const ee={left:!0,right:!0,up:!0,down:!0,horizontal:!0,vertical:!0},Te=Object.keys(ee);ee.all=!0;function ae(e){const t={};for(const r of Te)e[r]===!0&&(t[r]=!0);return Object.keys(t).length===0?ee:(t.horizontal===!0?t.left=t.right=!0:t.left===!0&&t.right===!0&&(t.horizontal=!0),t.vertical===!0?t.up=t.down=!0:t.up===!0&&t.down===!0&&(t.vertical=!0),t.horizontal===!0&&t.vertical===!0&&(t.all=!0),t)}function oe(e,t){return t.event===void 0&&e.target!==void 0&&e.target.draggable!==!0&&typeof t.handler=="function"&&e.target.nodeName.toUpperCase()!=="INPUT"&&(e.qClonedBy===void 0||e.qClonedBy.indexOf(t.uid)===-1)}function Be(e){const t=[.06,6,50];return typeof e=="string"&&e.length&&e.split(":").forEach((r,u)=>{const s=parseFloat(r);s&&(t[u]=s)}),t}var $e=de({name:"touch-swipe",beforeMount(e,{value:t,arg:r,modifiers:u}){if(u.mouse!==!0&&j.has.touch!==!0)return;const s=u.mouseCapture===!0?"Capture":"",n={handler:t,sensitivity:Be(r),direction:ae(u),noop:pe,mouseStart(i){oe(i,n)&&ge(i)&&(K(n,"temp",[[document,"mousemove","move",`notPassive${s}`],[document,"mouseup","end","notPassiveCapture"]]),n.start(i,!0))},touchStart(i){if(oe(i,n)){const c=i.target;K(n,"temp",[[c,"touchmove","move","notPassiveCapture"],[c,"touchcancel","end","notPassiveCapture"],[c,"touchend","end","notPassiveCapture"]]),n.start(i)}},start(i,c){j.is.firefox===!0&&G(e,!0);const w=te(i);n.event={x:w.left,y:w.top,time:Date.now(),mouse:c===!0,dir:!1}},move(i){if(n.event===void 0)return;if(n.event.dir!==!1){J(i);return}const c=Date.now()-n.event.time;if(c===0)return;const w=te(i),x=w.left-n.event.x,v=Math.abs(x),_=w.top-n.event.y,h=Math.abs(_);if(n.event.mouse!==!0){if(v<n.sensitivity[1]&&h<n.sensitivity[1]){n.end(i);return}}else if(v<n.sensitivity[2]&&h<n.sensitivity[2])return;const b=v/c,I=h/c;n.direction.vertical===!0&&v<h&&v<100&&I>n.sensitivity[0]&&(n.event.dir=_<0?"up":"down"),n.direction.horizontal===!0&&v>h&&h<100&&b>n.sensitivity[0]&&(n.event.dir=x<0?"left":"right"),n.direction.up===!0&&v<h&&_<0&&v<100&&I>n.sensitivity[0]&&(n.event.dir="up"),n.direction.down===!0&&v<h&&_>0&&v<100&&I>n.sensitivity[0]&&(n.event.dir="down"),n.direction.left===!0&&v>h&&x<0&&h<100&&b>n.sensitivity[0]&&(n.event.dir="left"),n.direction.right===!0&&v>h&&x>0&&h<100&&b>n.sensitivity[0]&&(n.event.dir="right"),n.event.dir!==!1?(J(i),n.event.mouse===!0&&(document.body.classList.add("no-pointer-events--children"),document.body.classList.add("non-selectable"),Ie(),n.styleCleanup=V=>{n.styleCleanup=void 0,document.body.classList.remove("non-selectable");const P=()=>{document.body.classList.remove("no-pointer-events--children")};V===!0?setTimeout(P,50):P()}),n.handler({evt:i,touch:n.event.mouse!==!0,mouse:n.event.mouse,direction:n.event.dir,duration:c,distance:{x:v,y:h}})):n.end(i)},end(i){n.event!==void 0&&(Z(n,"temp"),j.is.firefox===!0&&G(e,!1),n.styleCleanup!==void 0&&n.styleCleanup(!0),i!==void 0&&n.event.dir!==!1&&J(i),n.event=void 0)}};if(e.__qtouchswipe=n,u.mouse===!0){const i=u.mouseCapture===!0||u.mousecapture===!0?"Capture":"";K(n,"main",[[e,"mousedown","mouseStart",`passive${i}`]])}j.has.touch===!0&&K(n,"main",[[e,"touchstart","touchStart",`passive${u.capture===!0?"Capture":""}`],[e,"touchmove","noop","notPassiveCapture"]])},updated(e,t){const r=e.__qtouchswipe;r!==void 0&&(t.oldValue!==t.value&&(typeof t.value!="function"&&r.end(),r.handler=t.value),r.direction=ae(t.modifiers))},beforeUnmount(e){const t=e.__qtouchswipe;t!==void 0&&(Z(t,"main"),Z(t,"temp"),j.is.firefox===!0&&G(e,!1),t.styleCleanup!==void 0&&t.styleCleanup(),delete e.__qtouchswipe)}});function Ae(){const e=new Map;return{getCache:function(t,r){return e[t]===void 0?e[t]=r:e[t]},getCacheWithFn:function(t,r){return e[t]===void 0?e[t]=r():e[t]}}}const Ve={name:{required:!0},disable:Boolean},ie={setup(e,{slots:t}){return()=>p("div",{class:"q-panel scroll",role:"tabpanel"},O(t.default))}},Me={modelValue:{required:!0},animated:Boolean,infinite:Boolean,swipeable:Boolean,vertical:Boolean,transitionPrev:String,transitionNext:String,transitionDuration:{type:[String,Number],default:300},keepAlive:Boolean,keepAliveInclude:[String,Array,RegExp],keepAliveExclude:[String,Array,RegExp],keepAliveMax:Number},Ne=["update:modelValue","beforeTransition","transition"];function ze(){const{props:e,emit:t,proxy:r}=Y(),{getCacheWithFn:u}=Ae();let s,n;const i=z(null),c=z(null);function w(a){const f=e.vertical===!0?"up":"left";S((r.$q.lang.rtl===!0?-1:1)*(a.direction===f?1:-1))}const x=g(()=>[[$e,w,void 0,{horizontal:e.vertical!==!0,vertical:e.vertical,mouse:!0}]]),v=g(()=>e.transitionPrev||`slide-${e.vertical===!0?"down":"right"}`),_=g(()=>e.transitionNext||`slide-${e.vertical===!0?"up":"left"}`),h=g(()=>`--q-transition-duration: ${e.transitionDuration}ms`),b=g(()=>typeof e.modelValue=="string"||typeof e.modelValue=="number"?e.modelValue:String(e.modelValue)),I=g(()=>({include:e.keepAliveInclude,exclude:e.keepAliveExclude,max:e.keepAliveMax})),V=g(()=>e.keepAliveInclude!==void 0||e.keepAliveExclude!==void 0);E(()=>e.modelValue,(a,f)=>{const k=B(a)===!0?F(a):-1;n!==!0&&M(k===-1?0:k<F(f)?-1:1),i.value!==k&&(i.value=k,t("beforeTransition",a,f),_e(()=>{t("transition",a,f)}))});function P(){S(1)}function W(){S(-1)}function D(a){t("update:modelValue",a)}function B(a){return a!=null&&a!==""}function F(a){return s.findIndex(f=>f.props.name===a&&f.props.disable!==""&&f.props.disable!==!0)}function R(){return s.filter(a=>a.props.disable!==""&&a.props.disable!==!0)}function M(a){const f=a!==0&&e.animated===!0&&i.value!==-1?"q-transition--"+(a===-1?v.value:_.value):null;c.value!==f&&(c.value=f)}function S(a,f=i.value){let k=f+a;for(;k>-1&&k<s.length;){const A=s[k];if(A!==void 0&&A.props.disable!==""&&A.props.disable!==!0){M(a),n=!0,t("update:modelValue",A.props.name),setTimeout(()=>{n=!1});return}k+=a}e.infinite===!0&&s.length>0&&f!==-1&&f!==s.length&&S(a,a===-1?s.length:-1)}function L(){const a=F(e.modelValue);return i.value!==a&&(i.value=a),!0}function X(){const a=B(e.modelValue)===!0&&L()&&s[i.value];return e.keepAlive===!0?[p(we,I.value,[p(V.value===!0?u(b.value,()=>({...ie,name:b.value})):ie,{key:b.value,style:h.value},()=>a)])]:[p("div",{class:"q-panel scroll",style:h.value,key:b.value,role:"tabpanel"},[a])]}function y(){if(s.length!==0)return e.animated===!0?[p(ye,{name:c.value},X)]:X()}function $(a){return s=ve(O(a.default,[])).filter(f=>f.props!==null&&f.props.slot===void 0&&B(f.props.name)===!0),s.length}function Q(){return s}return Object.assign(r,{next:P,previous:W,goTo:D}),{panelIndex:i,panelDirectives:x,updatePanelsList:$,updatePanelIndex:L,getPanelContent:y,getEnabledPanels:R,getPanels:Q,isValidPanelName:B,keepAliveProps:I,needsUniqueKeepAliveWrapper:V,goToPanelByOffset:S,goToPanel:D,nextPanel:P,previousPanel:W}}var N=H({name:"QCarouselSlide",props:{...Ve,imgSrc:String},setup(e,{slots:t}){const r=g(()=>e.imgSrc?{backgroundImage:`url("${e.imgSrc}")`}:{});return()=>p("div",{class:"q-carousel__slide",style:r.value},O(t.default))}});let U=0;const Ee={fullscreen:Boolean,noRouteFullscreenExit:Boolean},De=["update:fullscreen","fullscreen"];function Fe(){const e=Y(),{props:t,emit:r,proxy:u}=e;let s,n,i;const c=z(!1);fe(e)===!0&&E(()=>u.$route.fullPath,()=>{t.noRouteFullscreenExit!==!0&&v()}),E(()=>t.fullscreen,_=>{c.value!==_&&w()}),E(c,_=>{r("update:fullscreen",_),r("fullscreen",_)});function w(){c.value===!0?v():x()}function x(){c.value!==!0&&(c.value=!0,i=u.$el.parentNode,i.replaceChild(n,u.$el),document.body.appendChild(u.$el),U++,U===1&&document.body.classList.add("q-body--fullscreen-mixin"),s={handler:v},ne.add(s))}function v(){c.value===!0&&(s!==void 0&&(ne.remove(s),s=void 0),i.replaceChild(u.$el,n),c.value=!1,U=Math.max(0,U-1),U===0&&(document.body.classList.remove("q-body--fullscreen-mixin"),u.$el.scrollIntoView!==void 0&&setTimeout(()=>{u.$el.scrollIntoView()})))}return xe(()=>{n=document.createElement("span")}),se(()=>{t.fullscreen===!0&&x()}),le(v),Object.assign(u,{toggleFullscreen:w,setFullscreen:x,exitFullscreen:v}),{inFullscreen:c,toggleFullscreen:w}}const Le=["top","right","bottom","left"],Qe=["regular","flat","outline","push","unelevated"];var je=H({name:"QCarousel",props:{...ue,...Me,...Ee,transitionPrev:{type:String,default:"fade"},transitionNext:{type:String,default:"fade"},height:String,padding:Boolean,controlColor:String,controlTextColor:String,controlType:{type:String,validator:e=>Qe.includes(e),default:"flat"},autoplay:[Number,Boolean],arrows:Boolean,prevIcon:String,nextIcon:String,navigation:Boolean,navigationPosition:{type:String,validator:e=>Le.includes(e)},navigationIcon:String,navigationActiveIcon:String,thumbnails:Boolean},emits:[...De,...Ne],setup(e,{slots:t}){const{proxy:{$q:r}}=Y(),u=ce(e,r);let s=null,n;const{updatePanelsList:i,getPanelContent:c,panelDirectives:w,goToPanel:x,previousPanel:v,nextPanel:_,getEnabledPanels:h,panelIndex:b}=ze(),{inFullscreen:I}=Fe(),V=g(()=>I.value!==!0&&e.height!==void 0?{height:e.height}:{}),P=g(()=>e.vertical===!0?"vertical":"horizontal"),W=g(()=>`q-carousel q-panel-parent q-carousel--with${e.padding===!0?"":"out"}-padding`+(I.value===!0?" fullscreen":"")+(u.value===!0?" q-carousel--dark q-dark":"")+(e.arrows===!0?` q-carousel--arrows-${P.value}`:"")+(e.navigation===!0?` q-carousel--navigation-${R.value}`:"")),D=g(()=>{const y=[e.prevIcon||r.iconSet.carousel[e.vertical===!0?"up":"left"],e.nextIcon||r.iconSet.carousel[e.vertical===!0?"down":"right"]];return e.vertical===!1&&r.lang.rtl===!0?y.reverse():y}),B=g(()=>e.navigationIcon||r.iconSet.carousel.navigationIcon),F=g(()=>e.navigationActiveIcon||B.value),R=g(()=>e.navigationPosition||(e.vertical===!0?"right":"bottom")),M=g(()=>({color:e.controlColor,textColor:e.controlTextColor,round:!0,[e.controlType]:!0,dense:!0}));E(()=>e.modelValue,()=>{e.autoplay&&S()}),E(()=>e.autoplay,y=>{y?S():s!==null&&(clearTimeout(s),s=null)});function S(){const y=be(e.autoplay)===!0?Math.abs(e.autoplay):5e3;s!==null&&clearTimeout(s),s=setTimeout(()=>{s=null,y>=0?_():v()},y)}se(()=>{e.autoplay&&S()}),le(()=>{s!==null&&clearTimeout(s)});function L(y,$){return p("div",{class:`q-carousel__control q-carousel__navigation no-wrap absolute flex q-carousel__navigation--${y} q-carousel__navigation--${R.value}`+(e.controlColor!==void 0?` text-${e.controlColor}`:"")},[p("div",{class:"q-carousel__navigation-inner flex flex-center no-wrap"},h().map($))])}function X(){const y=[];if(e.navigation===!0){const $=t["navigation-icon"]!==void 0?t["navigation-icon"]:a=>p(C,{key:"nav"+a.name,class:`q-carousel__navigation-icon q-carousel__navigation-icon--${a.active===!0?"":"in"}active`,...a.btnProps,onClick:a.onClick}),Q=n-1;y.push(L("buttons",(a,f)=>{const k=a.props.name,A=b.value===f;return $({index:f,maxIndex:Q,name:k,active:A,btnProps:{icon:A===!0?F.value:B.value,size:"sm",...M.value},onClick:()=>{x(k)}})}))}else if(e.thumbnails===!0){const $=e.controlColor!==void 0?` text-${e.controlColor}`:"";y.push(L("thumbnails",Q=>{const a=Q.props;return p("img",{key:"tmb#"+a.name,class:`q-carousel__thumbnail q-carousel__thumbnail--${a.name===e.modelValue?"":"in"}active`+$,src:a.imgSrc||a["img-src"],onClick:()=>{x(a.name)}})}))}return e.arrows===!0&&b.value>=0&&((e.infinite===!0||b.value>0)&&y.push(p("div",{key:"prev",class:`q-carousel__control q-carousel__arrow q-carousel__prev-arrow q-carousel__prev-arrow--${P.value} absolute flex flex-center`},[p(C,{icon:D.value[0],...M.value,onClick:v})])),(e.infinite===!0||b.value<n-1)&&y.push(p("div",{key:"next",class:`q-carousel__control q-carousel__arrow q-carousel__next-arrow q-carousel__next-arrow--${P.value} absolute flex flex-center`},[p(C,{icon:D.value[1],...M.value,onClick:_})]))),he(t.control,y)}return()=>(n=i(t),p("div",{class:W.value,style:V.value},[me("div",{class:"q-carousel__slides-container"},c(),"sl-cont",e.swipeable,()=>w.value)].concat(X())))}}),T=H({name:"QCardSection",props:{tag:{type:String,default:"div"},horizontal:Boolean},setup(e,{slots:t}){const r=g(()=>`q-card__section q-card__section--${e.horizontal===!0?"horiz row no-wrap":"vert"}`);return()=>p(e.tag,{class:r.value},O(t.default))}}),re=H({name:"QCard",props:{...ue,tag:{type:String,default:"div"},square:Boolean,flat:Boolean,bordered:Boolean},setup(e,{slots:t}){const{proxy:{$q:r}}=Y(),u=ce(e,r),s=g(()=>"q-card"+(u.value===!0?" q-card--dark q-dark":"")+(e.bordered===!0?" q-card--bordered":"")+(e.square===!0?" q-card--square no-border-radius":"")+(e.flat===!0?" q-card--flat no-shadow":""));return()=>p(e.tag,{class:s.value},O(t.default))}});const{getScrollTarget:Ue,getVerticalScrollPosition:ct,setVerticalScrollPosition:He}=Pe,Oe={setup(){return{slide:z("weddings"),fullscreen:z(!1),shwBttn:z(!1),showButton(){shwBttn=!shwBttn},scrollTo(){const e=document.getElementById("id_info"),t=Ue(e),r=e.offsetTop;He(t,r,1e3)}}}},We={class:"q-pt-lg column body"},Re={class:"column items-center justify-center"},Xe={class:"q-px-md q-py-lg descript"},Ke={class:"text-white text-center",style:{"font-size":"2rem"}},Ye={class:"q-px-md q-py-lg descript"},Ge={class:"q-mt-md text-center text-white",style:{"font-size":"2rem"}},Je={class:"q-px-md q-py-lg descript"},Ze={class:"q-mt-md text-center text-white",style:{"font-size":"2rem"}},et={class:"q-px-md q-py-lg descript"},tt={class:"q-mt-md text-center text-white",style:{"font-size":"2rem"}},nt={class:"q-px-md q-py-lg descript"},at={class:"q-mt-md text-center text-white",style:{"font-size":"2rem"}},ot={class:"q-px-md q-py-lg descript"},it={class:"q-mt-md text-center text-white",style:{"font-size":"2rem"}};function rt(e,t,r,u,s,n){return ke(),Ce("div",We,[q("div",Re,[o(je,{modelValue:u.slide,"onUpdate:modelValue":t[0]||(t[0]=i=>u.slide=i),"transition-prev":"slide-right","transition-next":"slide-left",animated:"",arrows:"",swipeable:"","control-color":"white",class:"slider"},{default:d(()=>[o(N,{name:"weddings",class:"column no-wrap flex-center","img-src":"statics/wedding1.jpg"},{default:d(()=>[q("div",Xe,[q("div",Ke,[l(" Weddings "),o(m),o(C,{href:"/weddings"},{default:d(()=>[l("View More ")]),_:1})])])]),_:1}),o(N,{name:"children",class:"column no-wrap flex-center","img-src":"statics/children1.jpg"},{default:d(()=>[q("div",Ye,[q("div",Ge,[l(" Children "),o(m),o(C,{href:"/children"},{default:d(()=>[l("View More ")]),_:1})])])]),_:1}),o(N,{name:"graduation",class:"column no-wrap flex-center","img-src":"statics/graduation1.jpg"},{default:d(()=>[q("div",Je,[q("div",Ze,[l(" Graduation "),o(m),o(C,{href:"/graduations"},{default:d(()=>[l("View More ")]),_:1})])])]),_:1}),o(N,{name:"events",class:"column no-wrap flex-center","img-src":"statics/event1.jpg"},{default:d(()=>[q("div",et,[q("div",tt,[l(" Events "),o(m),o(C,{href:"/events"},{default:d(()=>[l("View More ")]),_:1})])])]),_:1}),o(N,{name:"landscapes",class:"column no-wrap flex-center","img-src":"statics/landscape1.jpg"},{default:d(()=>[q("div",nt,[q("div",at,[l(" Landscapes "),o(m),o(C,{href:"/landscapes"},{default:d(()=>[l("View More ")]),_:1})])])]),_:1}),o(N,{name:"art_work",class:"column no-wrap flex-center","img-src":"statics/art1.jpg"},{default:d(()=>[q("div",ot,[q("div",it,[l(" Digital Art Work "),o(m),o(C,{href:"/artwork"},{default:d(()=>[l("View More ")]),_:1})])])]),_:1})]),_:1},8,["modelValue"])]),o(re,{class:"column items-center text-white cards desktop-only"},{default:d(()=>[o(T,{class:"bounce",style:{"font-size":"2vh"}},{default:d(()=>[o(C,{class:"text-white","icon-right":"arrow_drop_down",onClick:t[1]||(t[1]=i=>u.scrollTo())},{default:d(()=>[l("background info")]),_:1})]),_:1}),o(T,{class:"text-subheading desktop-only",style:{width:"35vw"}},{default:d(()=>[l(" I am a Mexican American Panamanian raised in the Northside of Houston, TX. I graduated with a Bachelor of Science in Computer Science from the University of Houston with a minor in Art back in 2020. Before I attended UH I was at A&M back in 2014 and that's where I learned about photography. I picked up my first camera, a Nikon D3300, back in 2015. This is my portfolio on a website that I created myself. I'm part of the LGBTQIA community and gladly accept all types of clients or events! ")]),_:1}),o(T,{style:{width:"35vw"}},{default:d(()=>[l(" Passionate about what I do, and helping "),o(m),l(" people is engrained into my very being. "),o(m),l(" I capture the emotions of cherishable mo-"),o(m),l(" ments. Technology makes life easier in ma-"),o(m),l(" ny aspects and hope that my work positively "),o(m),l(" impacts the lives of strangers. I have he-"),o(m),l(" lped big companies achieve great things, "),o(m),l(" but now I want to focus on individuals and "),o(m),l(" small businesses reach their highest potential! ")]),_:1}),o(T,{class:"text-weight-bold desktop-only",id:"id_info",style:{width:"35vw"}},{default:d(()=>[l(" I've worked in different events and have honned my skills to finally open up my studio. My speciality is in street photography and using natural lights. I enjoy capturing true happiness, which is difficult to do naturally. I make sure that my clients are beyond satisfied with my results. If you want someone to do it correctly you have to pick the right person, so if you don't pick me for your event I hope that the person you did choose gives you something beyond magical! Thank you for visiting and hope you have an amazing day. If want to contact me please do via Instagram's Direct Messages! ")]),_:1})]),_:1}),o(re,{class:"column items-center text-white cards mobile-only"},{default:d(()=>[o(T,{class:"bounce",style:{"font-size":"2vh"}},{default:d(()=>[o(C,{class:"text-white","icon-right":"arrow_drop_down",onClick:t[2]||(t[2]=i=>u.scrollTo())},{default:d(()=>[l("background info")]),_:1})]),_:1}),o(T,{class:"text-weight-thin q-ma-sm"},{default:d(()=>[l(" I am a Mexican American Panamanian raised in the Northside of Houston, TX. I graduated with a Bachelor of Science in Computer Science from the University of Houston with a minor in Art back in 2020. Before I attended UH I was at A&M back in 2014 and that's where I learned about photography. I picked up my first camera a Nikon D3300 back in 2015 and have all my portfolio on my wesbite that I created myself. I'm part of the LGBTQIA community and gladly accept all types of clients or event! ")]),_:1}),o(T,null,{default:d(()=>[l(" Passionate about what I do, and helping "),o(m),l(" people is engrained into my very being. "),o(m),l(" I capture the emotions of cherishable mo-"),o(m),l(" ments. Technology makes life easier in ma-"),o(m),l(" ny aspects and hope that my work positively "),o(m),l(" impacts the lives of strangers. I have he-"),o(m),l(" lped big companies achieve great things, "),o(m),l(" but now I want to focus on individuals and "),o(m),l(" small businesses reach their highest potential! ")]),_:1}),o(T,{class:"text-weight-thin q-ma-sm",id:"id_info"},{default:d(()=>[l(" I've worked in different events and have honned my skills to finally open up my studio. My speciality is in street photography and using natural lights. I enjoy capturing true happiness, which is difficult to do naturally. I make sure that my clients are beyond satisfied with my results. If you want someone to do it correctly you have to pick the right person, so if you don't pick me for your event I hope that the person you did choose gives you something beyond magical! ")]),_:1})]),_:1})])}var dt=qe(Oe,[["render",rt]]);export{dt as default};
