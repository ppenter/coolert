import{j as e,c as R,I as P,E as h,C as F,B as f,T as O,d as U,a as G}from"./react-icons.esm-1R2FhWcg.js";import{r as W}from"./index-4g5l5LRQ.js";import{a as H}from"./client-oSl7Hle7.js";import"./iframe-Jdz-iwlF.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./extends-dGVwEr9R.js";const p=W.forwardRef(({className:a,type:r,...n},t)=>e.jsx("input",{type:r,className:R("flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",a),ref:t,...n}));p.displayName="Input";try{p.displayName="Input",p.__docgenInfo={description:"",displayName:"Input",props:{}}}catch{}const g=({title:a="Confirm",description:r="No description",type:n="default",onConfirm:t,onCancel:o})=>{const[s,x]=W.useState(""),C=()=>{const i=document.getElementById("coolert-confirm");i!==null&&i.remove()},z=async()=>{o&&await o(s),C()},D=async()=>{t&&await t(s),C()};return e.jsx("div",{id:"coolert-confirm",className:"fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",children:e.jsxs("div",{className:"fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",children:[e.jsx("div",{className:"flex justify-between items-center gap-16",children:e.jsxs("div",{className:"text-xl font-bold flex gap-2 items-center",children:[{info:e.jsx(P,{className:"w-8 h-8"}),warning:e.jsx(h,{className:"w-8 h-8 text-yellow-500"}),error:e.jsx(h,{className:"w-8 h-8 text-red-500"}),success:e.jsx(F,{className:"w-8 h-8 text-green-500"}),default:null}[n],e.jsx("h1",{className:"text-xl font-bold",id:"coolert-alert-title",children:a})]})}),r&&e.jsx("div",{children:e.jsx("p",{className:"text-sm text-gray-500",id:"coolert-alert-description",children:r})}),e.jsx("div",{children:e.jsx(p,{value:s,onChange:i=>x(i.target.value)})}),e.jsxs("div",{className:"flex w-full justify-end gap-2",children:[e.jsx(f,{variant:"secondary",onClick:z,children:"Cancel"}),e.jsx(f,{onClick:D,children:"Confirm"})]})]})})},y=({title:a="Alert",description:r="",type:n="default",onConfirm:t,onCancel:o})=>{const s=document.getElementById("coolert-wrapper");if(!s)return;H(s).render(e.jsx(g,{title:a,description:r,type:n,onCancel:o,onConfirm:t}))};try{g.displayName="ConfirmComponent",g.__docgenInfo={description:"",displayName:"ConfirmComponent",props:{onConfirm:{defaultValue:null,description:"",name:"onConfirm",required:!1,type:{name:"((value: any) => any)"}},onCancel:{defaultValue:null,description:"",name:"onCancel",required:!1,type:{name:"((value: any) => void | Promise<void>)"}},title:{defaultValue:{value:"Alert"},description:"",name:"title",required:!1,type:{name:"string"}},description:{defaultValue:{value:""},description:"",name:"description",required:!1,type:{name:"string"}},type:{defaultValue:{value:"default"},description:"",name:"type",required:!1,type:{name:"enum",value:[{value:'"info"'},{value:'"warning"'},{value:'"error"'},{value:'"success"'},{value:'"default"'}]}}}}}catch{}try{y.displayName="coolfirm",y.__docgenInfo={description:"",displayName:"coolfirm",props:{onConfirm:{defaultValue:null,description:"",name:"onConfirm",required:!1,type:{name:"((value: any) => any)"}},onCancel:{defaultValue:null,description:"",name:"onCancel",required:!1,type:{name:"((value: any) => void | Promise<void>)"}},title:{defaultValue:{value:"Alert"},description:"",name:"title",required:!1,type:{name:"string"}},description:{defaultValue:{value:""},description:"",name:"description",required:!1,type:{name:"string"}},type:{defaultValue:{value:"default"},description:"",name:"type",required:!1,type:{name:"enum",value:[{value:'"info"'},{value:'"warning"'},{value:'"error"'},{value:'"success"'},{value:'"default"'}]}}}}}catch{}const J=a=>{const{title:r,description:n,type:t}=a;return e.jsxs("div",{className:"h-[640px] flex flex-col gap-4 items-center justify-start",children:[e.jsx(G,{}),e.jsx(f,{onClick:()=>{y({title:r,description:n,type:t,onConfirm:o=>{console.log("Confirm: ",o)},onCancel:()=>{console.log("Cancel")}})},children:t},t)]})},$={title:"Components/coolfirm",component:J,parameters:{layout:"left",docs:{page:()=>e.jsxs(e.Fragment,{children:[e.jsx("h1",{children:"Alert"}),e.jsx("p",{children:"Alert component"}),e.jsx("h2",{children:"Usage"}),e.jsx(O,{text:`
            coolfirm({
              title: "Alert",
              description: "This is an alert",
              type: "default",
              onConfirm: (value) => {
                console.log("Confirm: ", value);
              },
              onCancel: () => {
                console.log("Cancel");
              },
            });
            `,theme:U,language:"tsx"})]})}},tags:["autodocs"]},l={args:{title:"Default Confirm",description:"This is a default confirm",type:"default"}},c={args:{title:"Info Confirm",description:"This is an info confirm",type:"info"}},d={args:{title:"Warning Confirm",description:"This is a warning confirm",type:"warning"}},m={args:{title:"Error Confirm",description:"This is an error confirm",type:"error"}},u={args:{title:"Success Confirm",description:"This is a success confirm",type:"success"}};var v,j,_;l.parameters={...l.parameters,docs:{...(v=l.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    title: "Default Confirm",
    description: "This is a default confirm",
    type: "default"
  }
}`,...(_=(j=l.parameters)==null?void 0:j.docs)==null?void 0:_.source}}};var w,b,N;c.parameters={...c.parameters,docs:{...(w=c.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    title: "Info Confirm",
    description: "This is an info confirm",
    type: "info"
  }
}`,...(N=(b=c.parameters)==null?void 0:b.docs)==null?void 0:N.source}}};var I,T,E;d.parameters={...d.parameters,docs:{...(I=d.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    title: "Warning Confirm",
    description: "This is a warning confirm",
    type: "warning"
  }
}`,...(E=(T=d.parameters)==null?void 0:T.docs)==null?void 0:E.source}}};var V,q,S;m.parameters={...m.parameters,docs:{...(V=m.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    title: "Error Confirm",
    description: "This is an error confirm",
    type: "error"
  }
}`,...(S=(q=m.parameters)==null?void 0:q.docs)==null?void 0:S.source}}};var k,A,B;u.parameters={...u.parameters,docs:{...(k=u.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    title: "Success Confirm",
    description: "This is a success confirm",
    type: "success"
  }
}`,...(B=(A=u.parameters)==null?void 0:A.docs)==null?void 0:B.source}}};const ee=["ConfirmDefault","ConfirmInfo","ConfirmWarning","ConfirmError","ConfirmSuccess"];export{l as ConfirmDefault,m as ConfirmError,c as ConfirmInfo,u as ConfirmSuccess,d as ConfirmWarning,ee as __namedExportsOrder,$ as default};
