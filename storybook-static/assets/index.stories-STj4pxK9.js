import{j as e,I as b,E as m,C as k,B as S,T as q,d as V,a as B}from"./react-icons.esm-1R2FhWcg.js";import{a as W}from"./client-oSl7Hle7.js";import"./index-4g5l5LRQ.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./iframe-Jdz-iwlF.js";import"../sb-preview/runtime.js";import"./extends-dGVwEr9R.js";const p=({title:r="Alert",description:a="No description.",type:s="default"})=>{const t=()=>{const d=document.getElementById("coolert-alert");d!==null&&d.remove()};return e.jsx("div",{id:"coolert-alert",className:"fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",children:e.jsxs("div",{className:"fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",children:[e.jsx("div",{className:"flex justify-between items-center gap-16",children:e.jsxs("div",{className:"text-xl font-bold flex gap-2 items-center",children:[{info:e.jsx(b,{className:"w-8 h-8"}),warning:e.jsx(m,{className:"w-8 h-8 text-yellow-500"}),error:e.jsx(m,{className:"w-8 h-8 text-red-500"}),success:e.jsx(k,{className:"w-8 h-8 text-green-500"}),default:null}[s],e.jsx("h1",{className:"text-xl font-bold",id:"coolert-alert-title",children:r})]})}),e.jsx("div",{children:e.jsx("p",{className:"text-sm text-gray-500",id:"coolert-alert-description",children:a})}),e.jsx("div",{className:"flex w-full justify-end",children:e.jsx(S,{onClick:t,children:"Close"})})]})})},u=({title:r="Alert",description:a="",type:s="default"})=>{const t=document.getElementById("coolert-wrapper");if(!t)return;W(t).render(e.jsx(p,{title:r,description:a,type:s}))};try{p.displayName="AlertComponent",p.__docgenInfo={description:"",displayName:"AlertComponent",props:{title:{defaultValue:{value:"Alert"},description:"",name:"title",required:!1,type:{name:"string"}},description:{defaultValue:{value:""},description:"",name:"description",required:!1,type:{name:"string"}},type:{defaultValue:{value:"default"},description:"",name:"type",required:!1,type:{name:"enum",value:[{value:'"info"'},{value:'"warning"'},{value:'"error"'},{value:'"success"'},{value:'"default"'}]}}}}}catch{}try{u.displayName="coolert",u.__docgenInfo={description:"",displayName:"coolert",props:{title:{defaultValue:{value:"Alert"},description:"",name:"title",required:!1,type:{name:"string"}},description:{defaultValue:{value:""},description:"",name:"description",required:!1,type:{name:"string"}},type:{defaultValue:{value:"default"},description:"",name:"type",required:!1,type:{name:"enum",value:[{value:'"info"'},{value:'"warning"'},{value:'"error"'},{value:'"success"'},{value:'"default"'}]}}}}}catch{}const z=r=>{const{title:a,description:s,type:t}=r;return e.jsxs("div",{className:"h-[640px] flex flex-col gap-4 items-center justify-start",children:[e.jsx(B,{}),e.jsx(S,{onClick:()=>{u({title:a,description:s,type:t})},children:t},t)]})},J={title:"Components/coolert",component:z,parameters:{layout:"left",docs:{page:()=>e.jsxs(e.Fragment,{children:[e.jsx("h1",{children:"Alert"}),e.jsx("p",{children:"Alert component"}),e.jsx("h2",{children:"Usage"}),e.jsx(q,{text:`
            coolert({
              title: "Alert",
              description: "This is an alert",
              type: "default",
            });
            `,theme:V,language:"tsx"})]})}},tags:["autodocs"]},o={args:{title:"Default Alert",description:"This is a default alert",type:"default"}},n={args:{title:"Info Alert",description:"This is an info alert",type:"info"}},l={args:{title:"Warning Alert",description:"This is a warning alert",type:"warning"}},i={args:{title:"Error Alert",description:"This is an error alert",type:"error"}},c={args:{title:"Success Alert",description:"This is a success alert",type:"success"}};var f,g,x;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    title: "Default Alert",
    description: "This is a default alert",
    type: "default"
  }
}`,...(x=(g=o.parameters)==null?void 0:g.docs)==null?void 0:x.source}}};var h,y,A;n.parameters={...n.parameters,docs:{...(h=n.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    title: "Info Alert",
    description: "This is an info alert",
    type: "info"
  }
}`,...(A=(y=n.parameters)==null?void 0:y.docs)==null?void 0:A.source}}};var j,v,w;l.parameters={...l.parameters,docs:{...(j=l.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    title: "Warning Alert",
    description: "This is a warning alert",
    type: "warning"
  }
}`,...(w=(v=l.parameters)==null?void 0:v.docs)==null?void 0:w.source}}};var _,N,C;i.parameters={...i.parameters,docs:{...(_=i.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    title: "Error Alert",
    description: "This is an error alert",
    type: "error"
  }
}`,...(C=(N=i.parameters)==null?void 0:N.docs)==null?void 0:C.source}}};var T,I,E;c.parameters={...c.parameters,docs:{...(T=c.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    title: "Success Alert",
    description: "This is a success alert",
    type: "success"
  }
}`,...(E=(I=c.parameters)==null?void 0:I.docs)==null?void 0:E.source}}};const K=["AlertDefault","AlertInfo","AlertWarning","AlertError","AlertSuccess"];export{o as AlertDefault,i as AlertError,n as AlertInfo,c as AlertSuccess,l as AlertWarning,K as __namedExportsOrder,J as default};
