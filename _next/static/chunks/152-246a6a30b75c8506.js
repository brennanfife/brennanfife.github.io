"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[152],{3569:function(e,t,r){r.d(t,{hE:function(){return y},hU:function(){return h}});var n=r(7294),a=r(7277),i=r(4520),l=r(8387),o=r(5610),s=(...e)=>e.filter(Boolean).join(" "),c=e=>e?"":void 0,[m,u]=(0,l.k)({strict:!1,name:"ButtonGroupContext"});function d(e){let{children:t,className:r,...i}=e,l=(0,n.isValidElement)(t)?(0,n.cloneElement)(t,{"aria-hidden":!0,focusable:!1}):t,o=s("chakra-button__icon",r);return n.createElement(a.m$.span,{display:"inline-flex",alignSelf:"center",flexShrink:0,...i,className:o},l)}function p(e){let{label:t,placement:r,spacing:i="0.5rem",children:l=n.createElement(o.$,{color:"currentColor",width:"1em",height:"1em"}),className:c,__css:m,...u}=e,d=s("chakra-button__spinner",c),p="start"===r?"marginEnd":"marginStart",f=(0,n.useMemo)(()=>({display:"flex",alignItems:"center",position:t?"relative":"absolute",[p]:t?i:0,fontSize:"1em",lineHeight:"normal",...m}),[m,t,p,i]);return n.createElement(a.m$.div,{className:d,...u,__css:f},l)}d.displayName="ButtonIcon",p.displayName="ButtonSpinner";var f=(0,a.Gp)((e,t)=>{let r=u(),l=(0,a.mq)("Button",{...r,...e}),{isDisabled:o=null==r?void 0:r.isDisabled,isLoading:m,isActive:d,children:f,leftIcon:y,rightIcon:h,loadingText:v,iconSpacing:b="0.5rem",type:x,spinner:_,spinnerPlacement:E="start",className:N,as:k,...w}=(0,i.Lr)(e),G=(0,n.useMemo)(()=>{let e={...null==l?void 0:l._focus,zIndex:1};return{display:"inline-flex",appearance:"none",alignItems:"center",justifyContent:"center",userSelect:"none",position:"relative",whiteSpace:"nowrap",verticalAlign:"middle",outline:"none",...l,...!!r&&{_focus:e}}},[l,r]),{ref:S,type:$}=function(e){let[t,r]=(0,n.useState)(!e),a=(0,n.useCallback)(e=>{e&&r("BUTTON"===e.tagName)},[]);return{ref:a,type:t?"button":void 0}}(k),C={rightIcon:h,leftIcon:y,iconSpacing:b,children:f};return n.createElement(a.m$.button,{disabled:o||m,ref:function(...e){return(0,n.useMemo)(()=>(function(...e){return t=>{e.forEach(e=>{!function(e,t){if(null!=e){if("function"==typeof e){e(t);return}try{e.current=t}catch(r){throw Error(`Cannot assign value '${t}' to ref '${e}'`)}}}(e,t)})}})(...e),e)}(t,S),as:k,type:x??$,"data-active":c(d),"data-loading":c(m),__css:G,className:s("chakra-button",N),...w},m&&"start"===E&&n.createElement(p,{className:"chakra-button__spinner--start",label:v,placement:"start",spacing:b},_),m?v||n.createElement(a.m$.span,{opacity:0},n.createElement(g,{...C})):n.createElement(g,{...C}),m&&"end"===E&&n.createElement(p,{className:"chakra-button__spinner--end",label:v,placement:"end",spacing:b},_))});function g(e){let{leftIcon:t,rightIcon:r,children:a,iconSpacing:i}=e;return n.createElement(n.Fragment,null,t&&n.createElement(d,{marginEnd:i},t),a,r&&n.createElement(d,{marginStart:i},r))}f.displayName="Button";var y=(0,a.Gp)(function(e,t){let{size:r,colorScheme:i,variant:l,className:o,spacing:c="0.5rem",isAttached:u,isDisabled:d,...p}=e,f=s("chakra-button__group",o),g=(0,n.useMemo)(()=>({size:r,colorScheme:i,variant:l,isDisabled:d}),[r,i,l,d]),y={display:"inline-flex"};return y=u?{...y,"> *:first-of-type:not(:last-of-type)":{borderEndRadius:0},"> *:not(:first-of-type):not(:last-of-type)":{borderRadius:0},"> *:not(:first-of-type):last-of-type":{borderStartRadius:0}}:{...y,"& > *:not(style) ~ *:not(style)":{marginStart:c}},n.createElement(m,{value:g},n.createElement(a.m$.div,{ref:t,role:"group",__css:y,className:f,"data-attached":u?"":void 0,...p}))});y.displayName="ButtonGroup";var h=(0,a.Gp)((e,t)=>{let{icon:r,children:a,isRound:i,"aria-label":l,...o}=e,s=r||a,c=(0,n.isValidElement)(s)?(0,n.cloneElement)(s,{"aria-hidden":!0,focusable:!1}):null;return n.createElement(f,{padding:"0",borderRadius:i?"full":void 0,ref:t,"aria-label":l,...o},c)});h.displayName="IconButton"},3887:function(e,t,r){r.d(t,{Ei:function(){return s}});var n=r(7294),a=r(7277),i=r(4040),l=(e,t)=>"loaded"!==e&&"beforeLoadOrError"===t||"failed"===e&&"onError"===t,o=(0,a.Gp)(function(e,t){let{htmlWidth:r,htmlHeight:a,alt:i,...l}=e;return n.createElement("img",{width:r,height:a,ref:t,alt:i,...l})});o.displayName="NativeImage",(0,a.Gp)(function(e,t){let{fallbackSrc:r,fallback:s,src:c,srcSet:m,align:u,fit:d,loading:p,ignoreFallback:f,crossOrigin:g,fallbackStrategy:y="beforeLoadOrError",referrerPolicy:h,...v}=e,b=null!=p||f||!(void 0!==r||void 0!==s),x=function(e){let{loading:t,src:r,srcSet:a,onLoad:l,onError:o,crossOrigin:s,sizes:c,ignoreFallback:m}=e,[u,d]=(0,n.useState)("pending");(0,n.useEffect)(()=>{d(r?"loading":"pending")},[r]);let p=(0,n.useRef)(),f=(0,n.useCallback)(()=>{if(!r)return;g();let e=new Image;e.src=r,s&&(e.crossOrigin=s),a&&(e.srcset=a),c&&(e.sizes=c),t&&(e.loading=t),e.onload=e=>{g(),d("loaded"),null==l||l(e)},e.onerror=e=>{g(),d("failed"),null==o||o(e)},p.current=e},[r,s,a,c,l,o,t]),g=()=>{p.current&&(p.current.onload=null,p.current.onerror=null,p.current=null)};return(0,i.G)(()=>{if(!m)return"loading"===u&&f(),()=>{g()}},[u,f,m]),m?"loaded":u}({...e,ignoreFallback:b}),_=l(x,y),E={ref:t,objectFit:d,objectPosition:u,...b?v:function(e,t=[]){let r=Object.assign({},e);for(let n of t)n in r&&delete r[n];return r}(v,["onError","onLoad"])};return _?s||n.createElement(a.m$.img,{as:o,className:"chakra-image__placeholder",src:r,...E}):n.createElement(a.m$.img,{as:o,src:c,srcSet:m,crossOrigin:g,loading:p,referrerPolicy:h,className:"chakra-image",...E})}).displayName="Image";var s=(0,a.Gp)((e,t)=>n.createElement(a.m$.img,{ref:t,as:o,className:"chakra-image",...e}))},4902:function(e,t,r){r.d(t,{xu:function(){return d},kC:function(){return g},X6:function(){return v}});var n=r(7294),a=r(7277);function i(e,t){return Array.isArray(e)?e.map(e=>null===e?null:t(e)):!function(e){let t=typeof e;return null!=e&&("object"===t||"function"===t)&&!Array.isArray(e)}(e)?null!=e?t(e):null:Object.keys(e).reduce((r,n)=>(r[n]=t(e[n]),r),{})}Object.freeze(["base","sm","md","lg","xl","2xl"]);var l=r(5336),o=r(4520);function s(e){let t=Object.assign({},e);for(let r in t)void 0===t[r]&&delete t[r];return t}var c=r(2494),m=r(8387);function u(e){return n.Children.toArray(e).filter(e=>(0,n.isValidElement)(e))}(0,a.Gp)(function(e,t){let{ratio:r=4/3,children:o,className:s,...c}=e,m=n.Children.only(o),u=(0,l.cx)("chakra-aspect-ratio",s);return n.createElement(a.m$.div,{ref:t,position:"relative",className:u,_before:{height:0,content:'""',display:"block",paddingBottom:i(r,e=>`${1/e*100}%`)},__css:{"& > *:not(style)":{overflow:"hidden",position:"absolute",top:"0",right:"0",bottom:"0",left:"0",display:"flex",justifyContent:"center",alignItems:"center",width:"100%",height:"100%"},"& > img, & > video":{objectFit:"cover"}},...c},m)}).displayName="AspectRatio",(0,a.Gp)(function(e,t){let r=(0,a.mq)("Badge",e),{className:i,...s}=(0,o.Lr)(e);return n.createElement(a.m$.span,{ref:t,className:(0,l.cx)("chakra-badge",e.className),...s,__css:{display:"inline-block",whiteSpace:"nowrap",verticalAlign:"middle",...r}})}).displayName="Badge";var d=(0,a.m$)("div");d.displayName="Box";var p=(0,a.Gp)(function(e,t){let{size:r,centerContent:a=!0,...i}=e;return n.createElement(d,{ref:t,boxSize:r,__css:{...a?{display:"flex",alignItems:"center",justifyContent:"center"}:{},flexShrink:0,flexGrow:0},...i})});p.displayName="Square",(0,a.Gp)(function(e,t){let{size:r,...a}=e;return n.createElement(p,{size:r,ref:t,borderRadius:"9999px",...a})}).displayName="Circle",(0,a.m$)("div",{baseStyle:{display:"flex",alignItems:"center",justifyContent:"center"}}).displayName="Center";var f={horizontal:{insetStart:"50%",transform:"translateX(-50%)"},vertical:{top:"50%",transform:"translateY(-50%)"},both:{insetStart:"50%",top:"50%",transform:"translate(-50%, -50%)"}};(0,a.Gp)(function(e,t){let{axis:r="both",...i}=e;return n.createElement(a.m$.div,{ref:t,__css:f[r],...i,position:"absolute"})}),(0,a.Gp)(function(e,t){let r=(0,a.mq)("Code",e),{className:i,...s}=(0,o.Lr)(e);return n.createElement(a.m$.code,{ref:t,className:(0,l.cx)("chakra-code",e.className),...s,__css:{display:"inline-block",...r}})}).displayName="Code",(0,a.Gp)(function(e,t){let{className:r,centerContent:i,...s}=(0,o.Lr)(e),c=(0,a.mq)("Container",e);return n.createElement(a.m$.div,{ref:t,className:(0,l.cx)("chakra-container",r),...s,__css:{...c,...i&&{display:"flex",flexDirection:"column",alignItems:"center"}}})}).displayName="Container",(0,a.Gp)(function(e,t){let{borderLeftWidth:r,borderBottomWidth:i,borderTopWidth:s,borderRightWidth:c,borderWidth:m,borderStyle:u,borderColor:d,...p}=(0,a.mq)("Divider",e),{className:f,orientation:g="horizontal",__css:y,...h}=(0,o.Lr)(e);return n.createElement(a.m$.hr,{ref:t,"aria-orientation":g,...h,__css:{...p,border:"0",borderColor:d,borderStyle:u,...{vertical:{borderLeftWidth:r||c||m||"1px",height:"100%"},horizontal:{borderBottomWidth:i||s||m||"1px",width:"100%"}}[g],...y},className:(0,l.cx)("chakra-divider",f)})}).displayName="Divider";var g=(0,a.Gp)(function(e,t){let{direction:r,align:i,justify:l,wrap:o,basis:s,grow:c,shrink:m,...u}=e;return n.createElement(a.m$.div,{ref:t,__css:{display:"flex",flexDirection:r,alignItems:i,justifyContent:l,flexWrap:o,flexBasis:s,flexGrow:c,flexShrink:m},...u})});g.displayName="Flex";var y=(0,a.Gp)(function(e,t){let{templateAreas:r,gap:i,rowGap:l,columnGap:o,column:s,row:c,autoFlow:m,autoRows:u,templateRows:d,autoColumns:p,templateColumns:f,...g}=e;return n.createElement(a.m$.div,{ref:t,__css:{display:"grid",gridTemplateAreas:r,gridGap:i,gridRowGap:l,gridColumnGap:o,gridAutoColumns:p,gridColumn:s,gridRow:c,gridAutoFlow:m,gridAutoRows:u,gridTemplateRows:d,gridTemplateColumns:f},...g})});function h(e){return i(e,e=>"auto"===e?"auto":`span ${e}/span ${e}`)}y.displayName="Grid",(0,a.Gp)(function(e,t){let{area:r,colSpan:i,colStart:l,colEnd:o,rowEnd:c,rowSpan:m,rowStart:u,...d}=e,p=s({gridArea:r,gridColumn:h(i),gridRow:h(m),gridColumnStart:l,gridColumnEnd:o,gridRowStart:u,gridRowEnd:c});return n.createElement(a.m$.div,{ref:t,__css:p,...d})}).displayName="GridItem";var v=(0,a.Gp)(function(e,t){let r=(0,a.mq)("Heading",e),{className:i,...s}=(0,o.Lr)(e);return n.createElement(a.m$.h2,{ref:t,className:(0,l.cx)("chakra-heading",e.className),...s,__css:r})});v.displayName="Heading",(0,a.Gp)(function(e,t){let r=(0,a.mq)("Mark",e),i=(0,o.Lr)(e);return n.createElement(d,{ref:t,...i,as:"mark",__css:{bg:"transparent",whiteSpace:"nowrap",...r}})}),(0,a.Gp)(function(e,t){let r=(0,a.mq)("Kbd",e),{className:i,...s}=(0,o.Lr)(e);return n.createElement(a.m$.kbd,{ref:t,className:(0,l.cx)("chakra-kbd",i),...s,__css:{fontFamily:"mono",...r}})}).displayName="Kbd",(0,a.Gp)(function(e,t){let r=(0,a.mq)("Link",e),{className:i,isExternal:s,...c}=(0,o.Lr)(e);return n.createElement(a.m$.a,{target:s?"_blank":void 0,rel:s?"noopener":void 0,ref:t,className:(0,l.cx)("chakra-link",i),...c,__css:r})}).displayName="Link",(0,a.Gp)(function(e,t){let{isExternal:r,target:i,rel:o,className:s,...c}=e;return n.createElement(a.m$.a,{...c,ref:t,className:(0,l.cx)("chakra-linkbox__overlay",s),rel:r?"noopener noreferrer":o,target:r?"_blank":i,__css:{position:"static","&::before":{content:"''",cursor:"inherit",display:"block",position:"absolute",top:0,left:0,zIndex:0,width:"100%",height:"100%"}}})}),(0,a.Gp)(function(e,t){let{className:r,...i}=e;return n.createElement(a.m$.div,{ref:t,position:"relative",...i,className:(0,l.cx)("chakra-linkbox",r),__css:{"a[href]:not(.chakra-linkbox__overlay), abbr[title]":{position:"relative",zIndex:1}}})});var[b,x]=(0,m.k)({name:"ListStylesContext",errorMessage:"useListStyles returned is 'undefined'. Seems you forgot to wrap the components in \"<List />\" "}),_=(0,a.Gp)(function(e,t){let r=(0,a.jC)("List",e),{children:i,styleType:l="none",stylePosition:s,spacing:c,...m}=(0,o.Lr)(e),d=u(i);return n.createElement(b,{value:r},n.createElement(a.m$.ul,{ref:t,listStyleType:l,listStylePosition:s,role:"list",__css:{...r.container,...c?{"& > *:not(style) ~ *:not(style)":{mt:c}}:{}},...m},d))});_.displayName="List",(0,a.Gp)((e,t)=>{let{as:r,...a}=e;return n.createElement(_,{ref:t,as:"ol",styleType:"decimal",marginStart:"1em",...a})}).displayName="OrderedList",(0,a.Gp)(function(e,t){let{as:r,...a}=e;return n.createElement(_,{ref:t,as:"ul",styleType:"initial",marginStart:"1em",...a})}).displayName="UnorderedList",(0,a.Gp)(function(e,t){let r=x();return n.createElement(a.m$.li,{ref:t,...e,__css:r.item})}).displayName="ListItem",(0,a.Gp)(function(e,t){let r=x();return n.createElement(c.JO,{ref:t,role:"presentation",...e,__css:r.icon})}).displayName="ListIcon",(0,a.Gp)(function(e,t){let{columns:r,spacingX:l,spacingY:o,spacing:s,minChildWidth:c,...m}=e,u=(0,a.Fg)(),d=c?i(c,e=>{let t=(0,a.LP)("sizes",e,"number"==typeof e?`${e}px`:e)(u);return null===e?null:`repeat(auto-fit, minmax(${t}, 1fr))`}):i(r,e=>null===e?null:`repeat(${e}, minmax(0, 1fr))`);return n.createElement(y,{ref:t,gap:s,columnGap:l,rowGap:o,templateColumns:d,...m})}).displayName="SimpleGrid",(0,a.m$)("div",{baseStyle:{flex:1,justifySelf:"stretch",alignSelf:"stretch"}}).displayName="Spacer";var E="& > *:not(style) ~ *:not(style)",N=e=>n.createElement(a.m$.div,{className:"chakra-stack__item",...e,__css:{display:"inline-block",flex:"0 0 auto",minWidth:0,...e.__css}});N.displayName="StackItem";var k=(0,a.Gp)((e,t)=>{let{isInline:r,direction:o,align:s,justify:c,spacing:m="0.5rem",wrap:d,children:p,divider:f,className:g,shouldWrapChildren:y,...h}=e,v=r?"row":o??"column",b=(0,n.useMemo)(()=>(function(e){let{spacing:t,direction:r}=e,n={column:{marginTop:t,marginEnd:0,marginBottom:0,marginStart:0},row:{marginTop:0,marginEnd:0,marginBottom:0,marginStart:t},"column-reverse":{marginTop:0,marginEnd:0,marginBottom:t,marginStart:0},"row-reverse":{marginTop:0,marginEnd:t,marginBottom:0,marginStart:0}};return{flexDirection:r,[E]:i(r,e=>n[e])}})({direction:v,spacing:m}),[v,m]),x=(0,n.useMemo)(()=>(function(e){let{spacing:t,direction:r}=e,n={column:{my:t,mx:0,borderLeftWidth:0,borderBottomWidth:"1px"},"column-reverse":{my:t,mx:0,borderLeftWidth:0,borderBottomWidth:"1px"},row:{mx:t,my:0,borderLeftWidth:"1px",borderBottomWidth:0},"row-reverse":{mx:t,my:0,borderLeftWidth:"1px",borderBottomWidth:0}};return{"&":i(r,e=>n[e])}})({spacing:m,direction:v}),[m,v]),_=!!f,k=!y&&!_,w=(0,n.useMemo)(()=>{let e=u(p);return k?e:e.map((t,r)=>{let a=void 0!==t.key?t.key:r,i=r+1===e.length,l=n.createElement(N,{key:a},t),o=y?l:t;if(!_)return o;let s=(0,n.cloneElement)(f,{__css:x});return n.createElement(n.Fragment,{key:a},o,i?null:s)})},[f,x,_,k,y,p]),G=(0,l.cx)("chakra-stack",g);return n.createElement(a.m$.div,{ref:t,display:"flex",alignItems:s,justifyContent:c,flexDirection:b.flexDirection,flexWrap:d,className:G,__css:_?{}:{[E]:b[E]},...h},w)});function w(e){return"number"==typeof e?`${e}px`:e}k.displayName="Stack",(0,a.Gp)((e,t)=>n.createElement(k,{align:"center",...e,direction:"row",ref:t})).displayName="HStack",(0,a.Gp)((e,t)=>n.createElement(k,{align:"center",...e,direction:"column",ref:t})).displayName="VStack",(0,a.Gp)(function(e,t){let r=(0,a.mq)("Text",e),{className:i,align:c,decoration:m,casing:u,...d}=(0,o.Lr)(e),p=s({textAlign:e.align,textDecoration:e.decoration,textTransform:e.casing});return n.createElement(a.m$.p,{ref:t,className:(0,l.cx)("chakra-text",e.className),...p,...d,__css:r})}).displayName="Text",(0,a.Gp)(function(e,t){let{spacing:r="0.5rem",spacingX:s,spacingY:c,children:m,justify:u,direction:d,align:p,className:f,shouldWrapChildren:g,...y}=e,h=(0,n.useMemo)(()=>{let{spacingX:e=r,spacingY:t=r}={spacingX:s,spacingY:c};return{"--chakra-wrap-x-spacing":t=>i(e,e=>w((0,o.fr)("space",e)(t))),"--chakra-wrap-y-spacing":e=>i(t,t=>w((0,o.fr)("space",t)(e))),"--wrap-x-spacing":"calc(var(--chakra-wrap-x-spacing) / 2)","--wrap-y-spacing":"calc(var(--chakra-wrap-y-spacing) / 2)",display:"flex",flexWrap:"wrap",justifyContent:u,alignItems:p,flexDirection:d,listStyleType:"none",padding:"0",margin:"calc(var(--wrap-y-spacing) * -1) calc(var(--wrap-x-spacing) * -1)","& > *:not(style)":{margin:"var(--wrap-y-spacing) var(--wrap-x-spacing)"}}},[r,s,c,u,p,d]),v=(0,n.useMemo)(()=>g?n.Children.map(m,(e,t)=>n.createElement(G,{key:t},e)):m,[m,g]);return n.createElement(a.m$.div,{ref:t,className:(0,l.cx)("chakra-wrap",f),overflow:"hidden",...y},n.createElement(a.m$.ul,{className:"chakra-wrap__list",__css:h},v))}).displayName="Wrap";var G=(0,a.Gp)(function(e,t){let{className:r,...i}=e;return n.createElement(a.m$.li,{ref:t,__css:{display:"flex",alignItems:"flex-start"},className:(0,l.cx)("chakra-wrap__listitem",r),...i})});G.displayName="WrapItem"},8357:function(e,t,r){r.d(t,{w_:function(){return s}});var n=r(7294),a={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},i=n.createContext&&n.createContext(a),l=function(){return(l=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var a in t=arguments[r])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)},o=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&0>t.indexOf(n)&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)0>t.indexOf(n[a])&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]]);return r};function s(e){return function(t){return n.createElement(c,l({attr:l({},e.attr)},t),function e(t){return t&&t.map(function(t,r){return n.createElement(t.tag,l({key:r},t.attr),e(t.child))})}(e.child))}}function c(e){var t=function(t){var r,a=e.attr,i=e.size,s=e.title,c=o(e,["attr","size","title"]),m=i||t.size||"1em";return t.className&&(r=t.className),e.className&&(r=(r?r+" ":"")+e.className),n.createElement("svg",l({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,a,c,{className:r,style:l(l({color:e.color||t.color},t.style),e.style),height:m,width:m,xmlns:"http://www.w3.org/2000/svg"}),s&&n.createElement("title",null,s),e.children)};return void 0!==i?n.createElement(i.Consumer,null,function(e){return t(e)}):t(a)}}}]);