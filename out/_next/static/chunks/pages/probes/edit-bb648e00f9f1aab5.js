(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[159],{9694:function(e,s,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/probes/edit",function(){return t(2840)}])},5181:function(e,s,t){"use strict";t.d(s,{G:function(){return d}});var l=t(5893);t(7294);var c=t(5193),r=t.n(c),n=t(1664),o=t.n(n),a=t(3435);let i=e=>{let{children:s}=e;return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)("div",{className:r().header,children:[(0,l.jsx)("div",{className:"".concat(r().probesupperleft," ").concat(r().display),children:(0,l.jsx)(o(),{href:"/",children:"PIXIS CRM System"})}),(0,l.jsx)("div",{className:"".concat(r().probesuppermid),children:(0,l.jsx)(a.default,{})}),(0,l.jsx)("div",{className:"".concat(r().probesuppermid)}),(0,l.jsx)("div",{className:"".concat(r().probesupperright," ").concat(r().display),children:(0,l.jsx)(o(),{href:"/probes",children:"登入"})})]}),s]})},d=e=>(0,l.jsx)(i,{children:e})},2840:function(e,s,t){"use strict";t.r(s);var l=t(5893),c=t(5193),r=t.n(c),n=t(5181);t(1664);var o=t(9008),a=t.n(o),i=t(1163),d=t(7294);let p=()=>{let e=(0,i.useRouter)(),[s,t]=(0,d.useState)(""),[c,n]=(0,d.useState)(""),[o,p]=(0,d.useState)(""),[_,u]=(0,d.useState)(""),[h,b]=(0,d.useState)(""),[m,y]=(0,d.useState)({}),[x,j]=(0,d.useState)(!1),v=()=>{fetch("http://".concat("127.0.0.1:8000","/api/Probe/"),{method:"POST",body:JSON.stringify({probeId:s,type:o,harddiskdrive:c,price:_,note:h}),headers:{"content-type":"application/json"}}).then(s=>{s.json(),e.push("/probes/probelist")})};(0,d.useEffect)(()=>{let e={};s?Number(s)||(e.probeId="probeId no a number."):e.probeId="probeId is required.",c||(e.hddcode="hddcode is required."),o||(e.typecode="typecode is required."),_?Number(_)||(e.price="price no a number."):e.price="price is required.",y(e),j(0===Object.keys(e).length)},[s,c,o,_]);let f=()=>{x?(console.log("Form submitted successfully!"),v()):console.log("Form has errors. Please correct them.")};return(0,l.jsxs)("div",{className:"".concat(r().display),children:[(0,l.jsx)(a(),{children:(0,l.jsx)("title",{children:"新增設備資訊"})}),(0,l.jsx)("form",{className:"".concat(r().display," ").concat(r().editprobe),children:(0,l.jsxs)("div",{className:"".concat(r().probeInfo," ").concat(r().display),children:[(0,l.jsx)("div",{className:"".concat(r().probetitle," ").concat(r().display),children:(0,l.jsx)("h1",{children:"新增設備資訊"})}),(0,l.jsxs)("div",{className:"".concat(r().probecontent),children:[(0,l.jsxs)("div",{className:"".concat(r().probeInfoCell," ").concat(r().display),children:[(0,l.jsx)("div",{className:"".concat(r().itemcell),children:"probe ID: "}),(0,l.jsx)("div",{className:" ".concat(r().imputcell),children:(0,l.jsx)("input",{type:"text",name:"probeId",placeholder:"請輸入 probeID",value:s,onChange:e=>{t(e.target.value)}})})]}),!!m.probeId&&(0,l.jsx)("p",{className:r().error1,children:m.probeId}),(0,l.jsxs)("div",{className:"".concat(r().probeInfoCell," ").concat(r().display),children:[(0,l.jsx)("div",{className:"".concat(r().itemcell),children:"硬碟: "}),(0,l.jsx)("div",{className:" ".concat(r().imputcell),children:(0,l.jsxs)("select",{name:"harddiskdrive",required:!0,onChange:e=>{n(e.target.value)},children:[(0,l.jsx)("option",{value:"",children:"請選擇容量大小"}),(0,l.jsx)("option",{value:0,children:"8GB"}),(0,l.jsx)("option",{value:1,children:"16GB"})]})})]}),!!m.hddcode&&(0,l.jsx)("p",{className:r().error1,children:m.hddcode}),(0,l.jsxs)("div",{className:"".concat(r().probeInfoCell," ").concat(r().display),children:[(0,l.jsx)("div",{className:"".concat(r().itemcell),children:"型號: "}),(0,l.jsx)("div",{className:" ".concat(r().imputcell),children:(0,l.jsxs)("select",{name:"probetype",required:!0,onChange:e=>{p(e.target.value)},children:[(0,l.jsx)("option",{value:"",children:"請選擇型號"}),(0,l.jsx)("option",{value:0,children:"P110"}),(0,l.jsx)("option",{value:1,children:"P120"}),(0,l.jsx)("option",{value:2,children:"P220"}),(0,l.jsx)("option",{value:3,children:"P360"}),(0,l.jsx)("option",{value:4,children:"P560"}),(0,l.jsx)("option",{value:5,children:"P110+(樹苺派4)"})]})})]}),!!m.typecode&&(0,l.jsx)("p",{className:r().error1,children:m.typecode}),(0,l.jsxs)("div",{className:"".concat(r().probeInfoCell," ").concat(r().display),children:[(0,l.jsx)("div",{className:"".concat(r().itemcell),children:"單價:  "}),(0,l.jsx)("div",{className:" ".concat(r().imputcell),children:(0,l.jsx)("input",{type:"text",name:"probeId",placeholder:"請輸入 單價",required:!0,onChange:e=>{u(e.target.value)}})})]}),!!m.price&&(0,l.jsx)("p",{className:r().error1,children:m.price}),(0,l.jsxs)("div",{className:"".concat(r().probeInfoCell," ").concat(r().note," ").concat(r().display),children:[(0,l.jsx)("div",{className:"".concat(r().itemcell),children:"備註: "}),(0,l.jsx)("div",{className:" ".concat(r().textareacell),children:(0,l.jsx)("textarea",{name:"note",onChange:e=>{b(e.target.value)}})})]})]}),(0,l.jsxs)("div",{className:" ".concat(r().confirm," ").concat(r().display," "),children:[(0,l.jsx)("div",{className:"".concat(r().flex1," ").concat(r().display," ").concat(r().btnleft),onClick:()=>{e.back()},children:"返回"}),(0,l.jsx)("div",{className:"".concat(r().flex1," ").concat(r().display," ").concat(r().btnright),onClick:()=>{f()},children:"送出"})]})]})})]})};p.getLayout=n.G,s.default=p},3435:function(e,s,t){"use strict";t.r(s),t.d(s,{default:function(){return a}});var l=t(5893),c=t(1664),r=t.n(c),n=t(5193),o=t.n(n);function a(e){let{title:s}=e;return(0,l.jsxs)("div",{className:"".concat(o().header),children:[(0,l.jsx)(r(),{href:"/probes",children:(0,l.jsx)("div",{className:o().option,children:"設備管理"})}),(0,l.jsx)(r(),{href:"/customers",children:(0,l.jsx)("div",{className:o().option,children:"客戶管理 "})}),(0,l.jsx)(r(),{href:"/transfers",children:(0,l.jsx)("div",{className:o().option,children:"出貨管理"})}),(0,l.jsx)(r(),{href:"/staffs",children:(0,l.jsx)("div",{className:o().option,children:"員工管理 "})})]})}},5193:function(e){e.exports={nomargin:"styles_nomargin__mZx0d",test:"styles_test__EjHrQ",header:"styles_header__4HpNK",option:"styles_option__q82WJ",display:"styles_display__54Iml",flex1:"styles_flex1__D68VL",flex3:"styles_flex3__FQvA1",btn:"styles_btn__3ftX1",column:"styles_column_____PD",probescontent:"styles_probescontent___jhPF",probelistcontent:"styles_probelistcontent__rv4oD",card:"styles_card__Q1DxY",cardupper:"styles_cardupper__PrSHI",cardcontent:"styles_cardcontent__m3dPT",cardbuttom:"styles_cardbuttom__Y164a",btnleft:"styles_btnleft__B1quw",btnright:"styles_btnright__Q873l",probesupper:"styles_probesupper__l3r5B",probesteleport:"styles_probesteleport__eisIe",probescube:"styles_probescube__BsWHU",probesstatus:"styles_probesstatus__zXVAT",dashboardcube:"styles_dashboardcube__9DZzW",cubeup:"styles_cubeup__inGzA",cubebuttom:"styles_cubebuttom__vuUjt",dashboardmid:"styles_dashboardmid__4Z88V",event:"styles_event__q5ft_",eventtitle:"styles_eventtitle__qzw57",eventcontent:"styles_eventcontent__niTrY",eventlist:"styles_eventlist__91nrG",cell:"styles_cell__9bcow",celltype:"styles_celltype__3oAsl",cellcustomer:"styles_cellcustomer__5Dao1",probesupperright:"styles_probesupperright__VpeON",probesupperleft:"styles_probesupperleft__2DlOQ",probeid:"styles_probeid__Dlg1B",probestatus:"styles_probestatus__B132d",probesuppermid:"styles_probesuppermid__ADIsM",editprobe:"styles_editprobe__PBfpd",probeInfo:"styles_probeInfo__wKa5_",probetitle:"styles_probetitle__lmKxT",probecontent:"styles_probecontent__a_j3d",probeInfoCell:"styles_probeInfoCell__gLGsa",imputcell:"styles_imputcell__nMxXl",textareacell:"styles_textareacell__0LRB9",itemcell:"styles_itemcell__f43EC",note:"styles_note__3B2DB",confirm:"styles_confirm__gyeu3",customer:"styles_customer__feL2i",error1:"styles_error1__vjPlJ",justfycenter:"styles_justfycenter__Wcjn_"}},9008:function(e,s,t){e.exports=t(2636)},1163:function(e,s,t){e.exports=t(6885)}},function(e){e.O(0,[664,774,888,179],function(){return e(e.s=9694)}),_N_E=e.O()}]);