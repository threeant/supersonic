"use strict";(self.webpackChunk_coreui_coreui_free_react_admin_template=self.webpackChunk_coreui_coreui_free_react_admin_template||[]).push([[7761],{67761:(e,s,t)=>{t.r(s),t.d(s,{default:()=>m});var l=t(72791),n=(t(68639),t(24846)),a=t(97071),i=t(29106),c=t(51034),o=t(57689),r=t(15614),d=t(48936),x=t(10426),h=t(12620),p=t(26385),u=t(78983),j=t(80184);const m=()=>{const e=(0,o.TH)(),{displayId:s}=e.state,t=(0,o.s0)(),[m]=(0,l.useState)((0,r.ri)("DISP")),[g]=(0,l.useState)((0,r.ri)("MEDIA")),[y]=(0,l.useState)((0,r.ri)("CNTRY")),[N,b]=(0,l.useState)(""),[v,f]=(0,l.useState)(!1),[C,S]=(0,l.useState)(""),[k,I]=(0,l.useState)(""),_=e=>{b("alert"),S(e),f(!0)},w=(e,s)=>{b("confirm"),S(e),f(!0),I(s)};(0,l.useEffect)((()=>{console.log("displayId>>>> "+s),U(),R()}),[s]);const[D,T]=(0,l.useState)(!1),[Z,L]=(0,l.useState)(!1),[O,H]=(0,l.useState)(),[Y,z]=(0,l.useState)(!1),[E,M]=(0,l.useState)([]),[P,V]=(0,l.useState)({}),[A,F]=(0,l.useState)({}),q=async()=>{const e=(0,r.Ux)();R(e)},U=async()=>{try{const e=(await h.Z.get("/api/display/"+s)).data;console.log("\uc0c1\uc138\uacb0\uacfc ----"),console.log(e),F({codeId:e.displayTypeId,displayCount:e.displayNum,sort:e.sort,title:e.title,useYn:e.useYn})}catch(e){console.log(e),(0,r._y)(e,t)}},R=async e=>{try{const e=(await h.Z.get("/api/display/"+s+"/display-content",{headers:{"Content-Type":"application/json"}})).data;M(e),console.log(e)}catch(l){console.log(l),(0,r._y)(l,t)}},[Q,X]=(0,l.useState)(""),B=async()=>{console.log(Q);try{const e=await h.Z.delete("/api/display/"+s+"/display-content/"+Q);console.log("API \uc751\ub2f5:",e.data),_("\uc0ad\uc81c\ub418\uc5c8\uc2b5\ub2c8\ub2e4."),q()}catch(e){console.log(e),(0,r._y)(e,t)}},G=async()=>{try{const e=await h.Z.post("/api/display/"+s,A,{headers:{"Content-Type":"multipart/form-data"}});console.log("API \uc751\ub2f5:",e.data),_("\ubcc0\uacbd\ub418\uc5c8\uc2b5\ub2c8\ub2e4."),z(!1)}catch(e){console.log(e),(0,r._y)(e,t)}},J=async()=>{var e=E;console.log(e);for(var l=[],n=0;n<e.length;n++)l.push(e[n].displayContentId);if(l.length<1)_("\ubcc0\uacbd\ub418\ub294 \ub370\uc774\ud130\uac00 \uc5c6\uc2b5\ub2c8\ub2e4.");else{console.log(l);try{const e=await h.Z.patch("/api/display/"+s+"/display-content",{displayContentIds:l},{headers:{"Content-Type":"application/json"}});console.log(e),"200"==e.status&&_("\ubcc0\uacbd\ub418\uc5c8\uc2b5\ub2c8\ub2e4.")}catch(a){console.log(a),(0,r._y)(a,t)}}};return(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)(p.Z,{type:N,visible:v,onClose:()=>{f(!1)},alertText:C,onAccpet:()=>{f(!1),"updateDisp"===k?G():"deletSong"===k?B():"updateSongSort"===k&&J()}}),(0,j.jsxs)(u.Tk,{size:"xl",visible:D,onClose:()=>T(!1),"aria-labelledby":"OptionalSizesExample2",children:[(0,j.jsx)(u.p0,{children:(0,j.jsx)(u.fl,{id:"OptionalSizesExample1",children:"\uc804\uc2dc\uace1 \ucd94\uac00"})}),(0,j.jsx)(u.sD,{children:(0,j.jsx)(d.Z,{openModal:e=>{T(e)},sendDataToParent:async e=>{console.log("Data from child:",e),console.log(e);for(var l=[],n=0;n<e.length;n++)l[n]=e[n].songId;var a={songIds:l};console.log(a),console.log("setNewSongDatas >>> ");try{const e=await h.Z.post("/api/display/"+s+"/display-content",a,{headers:{"Content-Type":"application/json"}});console.log("API \uc751\ub2f5:",e.data),_("\ucd94\uac00\ub418\uc5c8\uc2b5\ub2c8\ub2e4."),q()}catch(i){console.log(i),(0,r._y)(i,t)}}})})]}),(0,j.jsxs)(u.Tk,{size:"xl",visible:Z,onClose:()=>L(!1),"aria-labelledby":"OptionalSizesExample4",children:[(0,j.jsx)(u.p0,{children:(0,j.jsx)(u.fl,{id:"OptionalSizesExample3",children:"\uc568\ubc94\uc815\ubcf4"})}),(0,j.jsx)(u.sD,{children:(0,j.jsx)(x.Z,{openModal:e=>{L(e)},albumId:O})})]}),(0,j.jsx)(u.rb,{children:(0,j.jsxs)(u.b7,{children:[(0,j.jsxs)(u.xH,{className:"mb-4",children:[(0,j.jsx)(u.bn,{children:(0,j.jsx)("strong",{children:"\uc804\uc2dc\uc218\uc815"})}),(0,j.jsx)(u.sl,{children:A?(0,j.jsxs)(u.lx,{className:"row g-3 needs-validation",noValidate:!0,validated:Y,onSubmit:async e=>{e.preventDefault(),console.log(A),z(!0);!1!==e.currentTarget.checkValidity()?w("\uc804\uc2dc\uc815\ubcf4\ub97c \uc218\uc815\ud558\uc2dc\uaca0\uc2b5\ub2c8\uae4c?","updateDisp"):e.stopPropagation()},children:[(0,j.jsx)(u.b7,{xs:10,children:(0,j.jsxs)(u.L8,{htmlFor:"validationCustom04",children:["ID : ",s]})}),(0,j.jsxs)(u.b7,{xs:2,children:[(0,j.jsx)(u.CO,{invalid:!0,children:"You must agree before submitting."}),(0,j.jsx)(u.kV,{label:"\uc0ac\uc6a9\uc5ec\ubd80",id:"formSwitchCheckChecked",checked:A.useYn,onChange:e=>F({...A,useYn:e.target.checked})})]}),(0,j.jsxs)(u.b7,{xs:12,children:[(0,j.jsx)(u.L8,{htmlFor:"inputName",children:"\uc81c\ubaa9*"}),(0,j.jsx)(u.jO,{type:"text",id:"inputName",value:A.title,required:!0,onChange:e=>F({...A,title:e.target.value}),maxLength:100}),(0,j.jsx)(u.CO,{invalid:!0,children:"\uc568\ubc94\uba85\uc744 \uc785\ub825\ud574\uc8fc\uc138\uc694."})]}),(0,j.jsxs)(u.b7,{xs:6,children:[(0,j.jsx)(u.L8,{htmlFor:"inputName",children:"\ub178\ucd9c\uace1\uc218*"}),(0,j.jsx)(u.jO,{type:"number",id:"inputDisplayCount",value:A.displayCount,required:!0,onChange:e=>F({...A,displayCount:e.target.value}),maxLength:100}),(0,j.jsx)(u.CO,{invalid:!0,children:"\ub178\ucd9c\uace1 \uac2f\uc218\ub97c \uc785\ub825\ud574\uc8fc\uc138\uc694."})]}),(0,j.jsxs)(u.b7,{xs:6,children:[(0,j.jsx)(u.L8,{htmlFor:"inputName",children:"\uc804\uc2dc\ud0c0\uc785*"}),(0,j.jsxs)(u.LX,{id:"sel_media",value:A.codeId,onChange:e=>F({...A,codeId:e.target.value}),required:!0,children:[(0,j.jsx)("option",{value:"",children:"-\uc120\ud0dd-"},"-1"),m.map(((e,s)=>(0,j.jsx)("option",{value:e.id,children:e.name},s)))]}),(0,j.jsx)(u.CO,{invalid:!0,children:"\uc804\uc2dc\ud0c0\uc785\uc744 \uc120\ud0dd\ud574\uc8fc\uc138\uc694."})]}),(0,j.jsx)("div",{className:"d-grid gap-2",children:(0,j.jsx)(u.rb,{className:"justify-content-between",children:(0,j.jsx)(u.b7,{xs:12,children:(0,j.jsxs)("div",{className:"d-grid gap-2 d-md-flex justify-content-md-end",children:[(0,j.jsx)(u.u5,{component:"input",type:"button",color:"light",value:"\ubaa9\ub85d",onClick:()=>{t("/display/displayList")}}),(0,j.jsx)(u.u5,{component:"input",color:"primary",type:"submit",value:"\uc218\uc815\ud558\uae30"})]})})})})]}):(0,j.jsx)("div",{className:"d-flex justify-content-center",children:(0,j.jsx)(u.LQ,{})})})]}),(0,j.jsxs)(u.xH,{className:"mb-4",children:[(0,j.jsxs)(u.bn,{children:[(0,j.jsx)("strong",{children:"\uace1\ubaa9\ub85d"})," ",E&&E.length>0?(0,j.jsxs)("small",{children:["\ucd1d ",E.length,"\uac74"]}):""]}),(0,j.jsxs)(u.sl,{children:[(0,j.jsx)("div",{className:"d-grid gap-2",children:(0,j.jsx)(u.rb,{className:"justify-content-between",children:(0,j.jsx)(u.b7,{xs:12,children:(0,j.jsxs)("div",{className:"d-grid gap-2 d-md-flex justify-content-md-end",children:[(0,j.jsx)(u.u5,{component:"input",type:"reset",color:"secondary",value:"\uc804\uc2dc\uace1 \ucd94\uac00",onClick:()=>{T(!D)}}),(0,j.jsx)(u.u5,{component:"input",color:"primary",type:"submit",value:"\uc21c\uc11c\ubcc0\uacbd\ud558\uae30",onClick:()=>w("\uc804\uc2dc\uc21c\uc11c\ub97c \ubcc0\uacbd\ud558\uc2dc\uaca0\uc2b5\ub2c8\uae4c?","updateSongSort")}),(0,j.jsx)(u.u5,{color:"light",onClick:q,children:(0,j.jsx)(n.Z,{icon:a.H,title:"Download file"})})]})})})}),(0,j.jsx)("br",{}),(0,j.jsxs)(u.Sx,{align:"middle",className:"mb-0 border",hover:!0,responsive:!0,children:[(0,j.jsx)(u.V,{color:"light",children:(0,j.jsxs)(u.T6,{children:[(0,j.jsx)(u.is,{className:"text-center",children:"No"}),(0,j.jsx)(u.is,{className:"text-center",children:"\uc568\ubc94\uba85"}),(0,j.jsx)(u.is,{className:"text-center",children:"\uc544\ud2f0\uc2a4\ud2b8"}),(0,j.jsx)(u.is,{className:"text-center",children:"Title"}),(0,j.jsx)(u.is,{className:"text-center",children:"Track Number"}),(0,j.jsx)(u.is,{className:"text-center",children:"\uc804\uc2dc\uc21c\uc11c"}),(0,j.jsx)(u.is,{className:"text-center"})]})}),(0,j.jsx)(u.NR,{children:E&&E.length>0?E.map(((e,s)=>(0,j.jsxs)(u.T6,{"v-for":"item in tableItems",children:[(0,j.jsx)(u.NN,{className:"text-center",children:(0,j.jsx)("strong",{children:s+1})}),(0,j.jsx)(u.NN,{className:"text-center",children:(0,j.jsx)("strong",{children:(0,j.jsx)("a",{href:"/",onClick:s=>((e,s)=>{e.preventDefault(),H(s),console.log(s),L(!Z)})(s,e.albumId),children:e.albumName})})}),(0,j.jsx)(u.NN,{className:"text-center",children:e.artist}),(0,j.jsx)(u.NN,{className:"text-center",children:(0,j.jsx)("strong",{children:e.trackName})}),(0,j.jsx)(u.NN,{className:"text-center",children:e.trackInfo}),(0,j.jsxs)(u.NN,{className:"text-center",children:[0!==s?(0,j.jsx)(u.u5,{color:"info",variant:"outline",onClick:()=>(e=>{if(e>0){const s=[...E];[s[e-1],s[e]]=[s[e],s[e-1]],M(s)}})(s),disabled:0===s,children:(0,j.jsx)(n.Z,{icon:i.U,title:"Download file"})}):"",s+1!==E.length?(0,j.jsx)(u.u5,{color:"info",variant:"outline",onClick:()=>(e=>{if(e<E.length-1){const s=[...E];[s[e],s[e+1]]=[s[e+1],s[e]],M(s)}})(s),disabled:s===E.length-1,children:(0,j.jsx)(n.Z,{icon:c.p,title:"Download file"})}):""]}),(0,j.jsx)(u.NN,{className:"text-center",children:!0!==e.newYn?(0,j.jsx)(u.u5,{color:"dark",shape:"rounded-pill",className:"mb-3",onClick:s=>((e,s)=>{e.preventDefault(),X(s),w("\ud574\ub2f9\uace1\uc744 \uc0ad\uc81c \ud558\uc2dc\uaca0\uc2b5\ub2c8\uae4c?","deletSong")})(s,e.displayContentId),children:"\uc0ad\uc81c"}):"[\uc2e0\uaddc]"})]},s))):(0,j.jsx)(u.T6,{"v-for":"item in tableItems",children:(0,j.jsx)(u.NN,{className:"text-center",colSpan:7,children:"\uc870\ud68c\ub41c \ub370\uc774\ud130\uac00 \uc5c6\uc2b5\ub2c8\ub2e4."},0)})})]})]})]})]})})]})}},51034:(e,s,t)=>{t.d(s,{p:()=>l});var l=["512 512","<path fill='var(--ci-primary-color, currentColor)' d='M256.286,408.357,16.333,138.548V104H496v36.45ZM56.892,136,256.358,360.287,457.042,136Z' class='ci-primary'/>"]},29106:(e,s,t)=>{t.d(s,{U:()=>l});var l=["512 512","<path fill='var(--ci-primary-color, currentColor)' d='M496,400.357H16.333V363.908L256.047,96,496,365.81Zm-440.708-32H455.441L255.975,144.07Z' class='ci-primary'/>"]}}]);
//# sourceMappingURL=7761.0873fe34.chunk.js.map