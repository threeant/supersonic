"use strict";(self.webpackChunk_coreui_coreui_free_react_admin_template=self.webpackChunk_coreui_coreui_free_react_admin_template||[]).push([[4215],{74215:(e,t,s)=>{s.r(t),s.d(t,{default:()=>d});var c=s(72791),n=(s(68639),s(24846),s(57689)),a=s(15614),r=s(12620),l=s(78983),i=s(80184);const d=()=>{const e=(0,n.s0)(),[t]=(0,c.useState)((0,a.ri)("MEDIA")),[s]=(0,c.useState)((0,a.ri)("CNTRY")),[d,o]=(0,c.useState)(null),[x,h]=(0,c.useState)(null),[m,u]=(0,c.useState)({contents:[]}),[j,p]=(0,c.useState)([]),[N,g]=(0,c.useState)({}),[v,C]=(0,c.useState)({code:"",description:""}),[y,f]=(0,c.useState)({codeMstId:"",codeNm:"",codeEtc1:"",codeEtc2:"",useYn:!0}),b=async t=>{try{const e=await r.Z.post("/api/code/"+t.id,t,{headers:{"Content-Type":"application/json"}});if(e.data.statusCode)return void alert(e.data.resultMsg);alert("\uc218\uc815\ub418\uc5c8\uc2b5\ub2c8\ub2e4."),D(N.id),C({code:"",description:""})}catch(s){console.log(s),(0,a._y)(s,e)}},_=async()=>{try{const e=await r.Z.post("/api/code",y,{headers:{"Content-Type":"application/json"}});if(e.data.statusCode)return void alert(e.data.resultMsg);alert("\ub4f1\ub85d\ub418\uc5c8\uc2b5\ub2c8\ub2e4.");const t=y.codeMstId;f((e=>({...e,codeNm:"",codeEtc1:"",codeEtc2:"",useYn:!0}))),D(t)}catch(t){console.log(t),(0,a._y)(t,e)}},k=async()=>{try{const e=await r.Z.post("/api/code/master",v,{headers:{"Content-Type":"application/json"}});if(e.data.statusCode)return void alert(e.data.resultMsg);alert("\ub4f1\ub85d\ub418\uc5c8\uc2b5\ub2c8\ub2e4."),C({code:"",description:""}),S()}catch(t){console.log(t),(0,a._y)(t,e)}},w=async t=>{try{const e=await r.Z.post("/api/code/master/"+t.id,t,{headers:{"Content-Type":"application/json"}});if(e.data.statusCode)return void alert(e.data.resultMsg);alert("\uc218\uc815\ub418\uc5c8\uc2b5\ub2c8\ub2e4."),C({code:"",description:""}),S()}catch(s){console.log(s),(0,a._y)(s,e)}},[E,T]=(0,c.useState)({codeStr:""}),S=async()=>{try{const e=(await r.Z.get("/api/code/search/master",{params:E,headers:{"Content-Type":"application/json"}})).data;console.log(e),u(e)}catch(t){console.log(t),(0,a._y)(t,e)}},O=(e,t)=>{e.preventDefault(),t&&(g(t),D(t.id),f((e=>({...e,codeMstId:t.id}))))},D=async t=>{try{const e=(await r.Z.get("/api/code/searchAll/"+t)).data;p(e)}catch(s){console.log(s),(0,a._y)(s,e)}},L=async t=>{try{await r.Z.delete("/api/code/"+t);alert("\uc0ad\uc81c\ub418\uc5c8\uc2b5\ub2c8\ub2e4.");const e=y.codeMstId;D(e)}catch(s){console.log(s),(0,a._y)(s,e)}};return(0,i.jsx)(i.Fragment,{children:(0,i.jsx)(l.rb,{children:(0,i.jsxs)(l.b7,{children:[(0,i.jsxs)(l.xH,{className:"mb-4",children:[(0,i.jsx)(l.bn,{children:"\ucf54\ub4dc\ub9c8\uc2a4\ud130"}),(0,i.jsxs)(l.sl,{children:[(0,i.jsxs)(l.lx,{className:"row",children:[(0,i.jsxs)(l.rb,{className:"mb-3",children:[(0,i.jsx)(l.b7,{xs:2,children:(0,i.jsx)(l.L8,{htmlFor:"inputName",className:"col-form-label",children:"\ucf54\ub4dc\uc815\ubcf4"})}),(0,i.jsx)(l.b7,{xs:10,children:(0,i.jsx)(l.jO,{type:"text",id:"inputName","aria-label":"\ucf54\ub4dc\uc815\ubcf4",placeholder:"\uc804\uccb4",onChange:e=>T({...E,codeStr:e.target.value})})})]}),(0,i.jsx)("div",{className:"d-grid gap-2",children:(0,i.jsxs)(l.rb,{className:"justify-content-between",children:[(0,i.jsx)(l.b7,{xs:4}),(0,i.jsx)(l.b7,{xs:4,children:(0,i.jsxs)("div",{className:"d-grid gap-2 d-md-flex justify-content-md-end",children:[(0,i.jsx)(l.u5,{component:"input",type:"reset",color:"light",value:"\ucd08\uae30\ud654",onClick:e=>{T({codeStr:""})}}),(0,i.jsx)(l.u5,{component:"input",color:"primary",type:"submit",value:"\uc870\ud68c\ud558\uae30",onClick:e=>{e.preventDefault(),S()}})]})})]})})]}),(0,i.jsx)("br",{}),(0,i.jsxs)(l.Sx,{align:"middle",hover:!0,children:[(0,i.jsx)(l.V,{color:"light",children:(0,i.jsxs)(l.T6,{children:[(0,i.jsx)(l.is,{className:"text-center",children:"No"}),(0,i.jsx)(l.is,{className:"text-center",children:"CODE"}),(0,i.jsx)(l.is,{className:"text-center",children:"\ucf54\ub4dc\uc124\uba85"}),(0,i.jsx)(l.is,{className:"text-center"})]})}),(0,i.jsxs)(l.NR,{children:[(0,i.jsxs)(l.T6,{"v-for":"item in tableItems",onClick:e=>O(e),children:[(0,i.jsx)(l.NN,{className:"text-center",children:"-"}),(0,i.jsx)(l.NN,{className:"text-center",children:(0,i.jsx)(l.jO,{type:"text",id:"inputTrackNumber",value:v.code,onChange:e=>C({...v,code:e.target.value}),maxLength:20})}),(0,i.jsx)(l.NN,{className:"text-center",children:(0,i.jsx)(l.jO,{type:"text",id:"inputTrackNumber",value:v.description,onChange:e=>C({...v,description:e.target.value}),maxLength:20})}),(0,i.jsx)(l.NN,{className:"text-center",children:(0,i.jsx)(l.u5,{color:"info",shape:"rounded-pill",className:"mb-3",onClick:e=>(e=>{if(e.preventDefault(),!v.code)return void alert("\ucf54\ub4dc\ub97c \uc785\ub825\ud574 \uc8fc\uc138\uc694.");if(!v.description)return void alert("\ucf54\ub4dc \uc124\uba85\uc744 \uc785\ub825\ud574\uc8fc\uc138\uc694.");window.confirm("\ud574\ub2f9 \ucf54\ub4dc \ub9c8\uc2a4\ud130\ub97c \ub4f1\ub85d \ud558\uc2dc\uaca0\uc2b5\ub2c8\uae4c?")&&k()})(e),children:"\ucd94\uac00"})})]},"row0"),m.contents&&m.contents.length>0?m.contents.map(((e,t)=>(0,i.jsxs)(l.T6,{"v-for":"item in tableItems",onClick:t=>O(t,e),children:[(0,i.jsx)(l.NN,{className:"text-center",children:(0,i.jsx)("strong",{children:e.id})}),(0,i.jsx)(l.NN,{className:"text-center",children:(0,i.jsx)(l.jO,{type:"text",id:"inputCode",value:e.code,onChange:e=>u((s=>({...s,contents:s.contents.map(((s,c)=>c===t?{...s,code:e.target.value}:s))}))),maxLength:20})}),(0,i.jsx)(l.NN,{className:"text-center",children:(0,i.jsx)(l.jO,{type:"text",id:"inputCode",value:e.description,onChange:e=>u((s=>({...s,contents:s.contents.map(((s,c)=>c===t?{...s,description:e.target.value}:s))}))),maxLength:20})}),(0,i.jsx)(l.NN,{className:"text-center",children:(0,i.jsx)(l.u5,{color:"success",shape:"rounded-pill",className:"mb-3",onClick:e=>((e,t)=>{var s=m.contents[t];if(e.preventDefault(),!s.code)return void alert("\ucf54\ub4dc\ub97c \uc785\ub825\ud574 \uc8fc\uc138\uc694.");if(!s.description)return void alert("\ucf54\ub4dc \uc124\uba85\uc744 \uc785\ub825\ud574\uc8fc\uc138\uc694.");window.confirm("\ud574\ub2f9 \ucf54\ub4dc \ub9c8\uc2a4\ud130\ub97c \uc218\uc815 \ud558\uc2dc\uaca0\uc2b5\ub2c8\uae4c?")&&w(s)})(e,t),children:"\uc218\uc815"})})]},t))):""]})]}),(0,i.jsx)("br",{}),m.contents&&m.contents.length>0?(0,i.jsxs)(l.rb,{children:[(0,i.jsx)(l.b7,{md:{span:6,offset:5}}),(0,i.jsxs)(l.b7,{md:1,children:["\ucd1d ",m.totalCount,"\uac74"]})]}):""]})]}),N.code?(0,i.jsxs)(l.xH,{className:"mb-4",children:[(0,i.jsx)(l.bn,{children:"\ucf54\ub4dc\uc0c1\uc138"}),(0,i.jsxs)(l.sl,{children:[(0,i.jsx)(l.Sx,{align:"middle",children:(0,i.jsx)(l.V,{color:"dark",children:(0,i.jsxs)(l.T6,{children:[(0,i.jsx)(l.is,{className:"text-center",children:N.id}),(0,i.jsx)(l.is,{className:"text-center",children:N.code}),(0,i.jsx)(l.is,{className:"text-center",children:N.description})]})})}),(0,i.jsxs)(l.Sx,{align:"middle",children:[(0,i.jsx)(l.V,{color:"light",children:(0,i.jsxs)(l.T6,{children:[(0,i.jsx)(l.is,{className:"text-center",children:"No"}),(0,i.jsx)(l.is,{className:"text-center",children:"CODE_NM"}),(0,i.jsx)(l.is,{className:"text-center",children:"CODE_ETC_1"}),(0,i.jsx)(l.is,{className:"text-center",children:"CODE_ETC_2"}),(0,i.jsx)(l.is,{className:"text-center",children:"\uc0ac\uc6a9\uc5ec\ubd80"}),(0,i.jsx)(l.is,{className:"text-center"})]})}),(0,i.jsxs)(l.NR,{children:[(0,i.jsxs)(l.T6,{"v-for":"item in tableItems",children:[(0,i.jsx)(l.NN,{className:"text-center",children:"-"}),(0,i.jsx)(l.NN,{className:"text-center",children:(0,i.jsx)(l.jO,{type:"text",id:"inputName",value:y.codeNm,onChange:e=>f({...y,codeNm:e.target.value}),maxLength:20})}),(0,i.jsx)(l.NN,{className:"text-center",children:(0,i.jsx)(l.jO,{type:"text",id:"inputEtc1",value:y.codeEtc1,onChange:e=>f({...y,codeEtc1:e.target.value}),maxLength:20})}),(0,i.jsx)(l.NN,{className:"text-center",children:(0,i.jsx)(l.jO,{type:"text",id:"inputEtc2",value:y.codeEtc2,onChange:e=>f({...y,codeEtc2:e.target.value}),maxLength:20})}),(0,i.jsx)(l.NN,{className:"text-center",children:(0,i.jsx)(l.kV,{id:"inputUseYn",checked:y.useYn,onChange:e=>f({...y,useYn:e.target.checked})})}),(0,i.jsx)(l.NN,{className:"text-center",children:(0,i.jsx)(l.u5,{color:"info",shape:"rounded-pill",className:"mb-3",onClick:e=>(e=>{if(e.preventDefault(),!y.codeNm)return void alert("\ucf54\ub4dc\uba85 \uc785\ub825\ud574 \uc8fc\uc138\uc694.");window.confirm("\ud574\ub2f9 \ucf54\ub4dc\ub97c \ub4f1\ub85d \ud558\uc2dc\uaca0\uc2b5\ub2c8\uae4c?")&&_()})(e),children:"\ucd94\uac00"})})]},"row2"),j.map(((e,t)=>(0,i.jsxs)(l.T6,{"v-for":"item in tableItems",children:[(0,i.jsx)(l.NN,{className:"text-center",children:(0,i.jsx)("strong",{children:e.id})}),(0,i.jsx)(l.NN,{className:"text-center",children:(0,i.jsx)(l.jO,{type:"text",id:t+"inputName",value:e.name,onChange:e=>p((s=>s.map(((s,c)=>c===t?{...s,name:e.target.value}:s)))),maxLength:20})}),(0,i.jsx)(l.NN,{className:"text-center",children:(0,i.jsx)(l.jO,{type:"text",id:t+"inputEtc1",value:e.etc1,onChange:e=>p((s=>s.map(((s,c)=>c===t?{...s,etc1:e.target.value}:s)))),maxLength:20})}),(0,i.jsx)(l.NN,{className:"text-center",children:(0,i.jsx)(l.jO,{type:"text",id:t+"inputEtc2",value:e.etc2,onChange:e=>p((s=>s.map(((s,c)=>c===t?{...s,etc2:e.target.value}:s)))),maxLength:20})}),(0,i.jsx)(l.NN,{className:"text-center",children:(0,i.jsx)(l.kV,{id:t+"useYn",defaultChecked:e.useYn,onChange:e=>p((s=>s.map(((s,c)=>c===t?{...s,useYn:e.target.checked}:s))))})}),(0,i.jsxs)(l.NN,{className:"text-center",children:[(0,i.jsx)(l.u5,{color:"success",shape:"rounded-pill",className:"mb-3",onClick:e=>((e,t)=>{var s=j[t];if(e.preventDefault(),!s.name)return void alert("\ucf54\ub4dc\ub97c \uc785\ub825\ud574 \uc8fc\uc138\uc694.");window.confirm("\ud574\ub2f9 \ucf54\ub4dc\ub97c \uc218\uc815 \ud558\uc2dc\uaca0\uc2b5\ub2c8\uae4c?")&&b(s)})(e,t),children:"\uc218\uc815"}),(0,i.jsx)(l.u5,{color:"dark",shape:"rounded-pill",className:"mb-3",onClick:t=>((e,t)=>{e.preventDefault(),window.confirm("\ud574\ub2f9\ucf54\ub4dc\ub97c \uc0ad\uc81c \ud558\uc2dc\uaca0\uc2b5\ub2c8\uae4c?")&&L(t)})(t,e.id),children:"\uc0ad\uc81c"})]})]},t)))]})]})]})]}):""]})})})}},68639:()=>{}}]);
//# sourceMappingURL=4215.d95be66b.chunk.js.map