var N=Object.defineProperty,$=Object.defineProperties;var D=Object.getOwnPropertyDescriptors;var C=Object.getOwnPropertySymbols;var x=Object.prototype.hasOwnProperty,F=Object.prototype.propertyIsEnumerable;var f=(e,t,s)=>t in e?N(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s,l=(e,t)=>{for(var s in t||(t={}))x.call(t,s)&&f(e,s,t[s]);if(C)for(var s of C(t))F.call(t,s)&&f(e,s,t[s]);return e},d=(e,t)=>$(e,D(t));import{c as y,t as I,u as R,j as c,a,d as B,S as j,b as L,C as P,e as O,T as k,I as S,f as _,r as p,g as H,h as T,B as v,i as z,k as G,l as q,m as K,n as Y,o as U,p as W,q as J,s as Q,v as V,F as X,A as Z,w as ee,x as te,y as se,z as ae,D as oe,R as re,P as ne}from"./vendor.abce9f04.js";const ce=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const n of o)if(n.type==="childList")for(const i of n.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function s(o){const n={};return o.integrity&&(n.integrity=o.integrity),o.referrerpolicy&&(n.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?n.credentials="include":o.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function r(o){if(o.ep)return;o.ep=!0;const n=s(o);fetch(o.href,n)}};ce();const b=y({name:"theme",initialState:"dark",reducers:{toggleTheme:e=>e==="light"?"dark":"light"}}),ie=b.reducer,{toggleTheme:le}=b.actions,{makeStyles:m,withStyles:_e}=I.createMakeAndWithStyles({useTheme:R}),de=m()({root:{display:"grid",gridTemplateColumns:"auto auto auto",justifyContent:"start",alignItems:"center"},icon:{margin:4}}),me=({theme:e,onToggleTheme:t})=>{const{classes:s}=de();return c("div",{className:s.root,children:[a(B,{className:s.icon}),a(j,{checked:e==="dark",onChange:t,color:"default"}),a(L,{className:s.icon})]})},ue={messages:[{timestamp:1568011059155,text:"This pretends to be a chat, but is just a list of one line messages \u{1F937}\u{1F3FC}\u200D\u2640\uFE0F"},{timestamp:1568011059165,text:"Hey there!"}],errors:[]},w=y({name:"chat",initialState:ue,reducers:{addChatMessage:(e,t)=>{var s;return d(l({},e),{messages:e.messages.concat({text:t.payload.text,timestamp:(s=t.payload.timestamp)!=null?s:Date.now()})})},deleteChatMessage:(e,t)=>d(l({},e),{messages:e.messages.filter(s=>s.timestamp!==t.payload)}),addChatError:(e,t)=>d(l({},e),{errors:e.errors.concat({error:t.payload})}),dismissChatErrors:e=>d(l({},e),{errors:[]})}}),{addChatMessage:A,deleteChatMessage:he,addChatError:E,dismissChatErrors:ge}=w.actions,pe=w.reducer,Ce=e=>async t=>fetch(e).then(s=>{if(s.ok)return s.text();throw new Error("Network response not ok.")}).then(s=>t(A({text:s}))).catch(s=>t(E(s.message))),fe=m()(e=>({messageCard:{marginTop:e.spacing(1),marginBottom:e.spacing(1)},messageCardContent:{display:"grid",gridTemplateColumns:"1fr auto","&:last-child":{paddingBottom:e.spacing(2)}}})),ye=({messages:e,onDeleteMessage:t})=>{const{classes:s}=fe(),r=o=>()=>t(o);return a("div",{children:e.map(o=>a(P,{className:s.messageCard,children:c(O,{className:s.messageCardContent,children:[a(k,{children:o.text}),a(S,{"aria-label":"delete",onClick:r(o.timestamp),size:"large",children:a(_,{})})]})},o.timestamp))})},ke=()=>{const e=h(r=>[...r.chat.messages].sort((o,n)=>n.timestamp-o.timestamp)),t=u();return a(ye,{messages:e,onDeleteMessage:r=>t(he(r))})},Se=m()(e=>({root:{display:"grid",gridTemplateColumns:"50% auto",gridColumnGap:e.spacing(1),alignItems:"center"},buttons:{display:"grid",gridTemplateColumns:"auto auto",gridColumnGap:e.spacing(1),justifyContent:"right",alignItems:"center"},icon:{marginLeft:e.spacing(1)}})),Te=({onAddMessage:e,onFetchAsyncMessage:t,onDemoError:s})=>{const{classes:r}=Se(),[o,n]=p.exports.useState(""),i=g=>n(g.target.value),M=g=>{g.key==="Enter"&&o.trim().length!==0&&(e(o),n(""))};return c("div",{className:r.root,children:[a(H,{value:o,label:"Compose Message",onChange:i,onKeyPress:M}),c("div",{className:r.buttons,children:[a(T,{title:"Fetch Async Message",children:c(v,{color:"primary",variant:"outlined",onClick:t,children:["Async",a(z,{className:r.icon})]})}),a(T,{title:"Demo Error Handling",children:c(v,{color:"secondary",variant:"outlined",onClick:s,children:["Error",a(G,{className:r.icon})]})})]})]})},ve="message.txt",be="A demo error",we=()=>{const e=u();return a(Te,{onAddMessage:o=>e(A({text:o})),onFetchAsyncMessage:()=>e(Ce(ve)),onDemoError:()=>e(E(be))})},Ae=m()(e=>({snackbarContent:{color:e.palette.common.white,backgroundColor:e.palette.error.dark},closeIcon:{color:e.palette.common.white}})),Ee=({errors:e,onDismissErrors:t})=>{const{classes:s}=Ae(),[r,o]=p.exports.useState(!1);return p.exports.useEffect(()=>o(e.length>0),[e.length]),a(q,{open:r,ClickAwayListenerProps:{onClickAway:()=>null},children:a(K,{className:s.snackbarContent,message:`${e.length} error(s) \u2013 check Console...`,action:[a(S,{className:s.closeIcon,"aria-label":"close",onClick:t,size:"large",children:a(Y,{})},"close")]})})},Me=()=>{const e=h(r=>r.chat.errors),t=u();return a(Ee,{errors:e,onDismissErrors:()=>t(ge())})},Ne=U({theme:ie,chat:pe}),$e=()=>W({reducer:Ne}),De=$e(),u=()=>Q(),h=e=>J(e),xe=()=>{const e=h(r=>r.theme),t=u();return a(me,{theme:e,onToggleTheme:()=>t(le())})},Fe=()=>h(e=>V({palette:{mode:e.theme}})),Ie=m()({toolbar:{display:"grid",gridTemplateColumns:"auto auto",justifyItems:"end"},main:{display:"grid",height:"100vh",width:"100vw",gridTemplateRows:"auto 1fr",gridRowGap:8,paddingTop:100,paddingLeft:"20vw",paddingRight:"20vw"}}),Re=()=>{const{classes:e}=Ie();return c(X,{children:[a(Z,{children:c(ee,{className:e.toolbar,children:[a(k,{children:"React You Do You \u2013 v2.1.0"}),a(xe,{})]})}),c("div",{className:e.main,children:[a(we,{}),a(ke,{})]}),a(Me,{})]})},Be=te({key:"mui",prepend:!0}),je=()=>{const e=Fe();return a(se,{value:Be,children:c(ae,{theme:e,children:[a(oe,{}),a(Re,{})]})})},Le=()=>a(ne,{store:De,children:a(je,{})});re.render(a(Le,{}),document.getElementById("root"));