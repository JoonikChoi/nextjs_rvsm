(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[287],{6635:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/rvsm/patientState/[patientID]",function(){return n(2630)}])},2630:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return f}});var r=n(5893),i=n(7294),a=(n(9217),n(5376)),s=n(6589),o=n.n(s);function c(t){var e=t.patientName,n=t.adminName,i=t.highestHeartRate,s=t.lowestHeartRate,c=t.highestSpo2,l=t.lowestSpo2,u={labels:t.dates,datasets:[{type:"line",label:"HeartRate",backgroundColor:"rgba(255, 99, 132, 1)",borderColor:"rgba(255, 99, 132, 1)",borderWidth:1,data:t.heartRates},{type:"line",label:"Spo2",backgroundColor:"rgba(87, 98, 255, 1)",borderColor:"rgba(87, 98, 255, 1)",borderWidth:1,data:t.spo2s}]};return(0,r.jsxs)("div",{children:[(0,r.jsx)("div",{className:o().top_box}),(0,r.jsx)("div",{className:o().red_line}),(0,r.jsxs)("div",{id:o().info_box,children:[(0,r.jsxs)("div",{id:o().user_info_box,className:o().text,children:[(0,r.jsx)("span",{children:"\uc774\ub984"}),(0,r.jsx)("span",{className:o().name_box,children:e}),(0,r.jsx)("hr",{className:o().hr_solid}),(0,r.jsx)("span",{className:o().bio_title,children:"\uc2ec\ubc15"}),(0,r.jsxs)("div",{className:o().bio_val_box,children:[(0,r.jsx)("div",{children:"\ucd5c\uc800"}),(0,r.jsx)("div",{children:s})]}),(0,r.jsxs)("div",{className:o().bio_val_box,children:[(0,r.jsx)("div",{children:"\ucd5c\uace0"}),(0,r.jsx)("div",{children:i})]}),(0,r.jsx)("hr",{className:o().hr_dotted}),(0,r.jsx)("span",{className:o().bio_title,children:"\uc0b0\uc18c\ud3ec\ud654\ub3c4"}),(0,r.jsxs)("div",{className:o().bio_val_box,children:[(0,r.jsx)("div",{children:"\ucd5c\uc800"}),(0,r.jsx)("div",{children:l})]}),(0,r.jsxs)("div",{className:o().bio_val_box,children:[(0,r.jsx)("div",{children:"\ucd5c\uace0"}),(0,r.jsx)("div",{children:c})]}),(0,r.jsx)("hr",{className:o().hr_dotted}),(0,r.jsx)("span",{children:"\uad00\ub9ac\uc790"}),(0,r.jsx)("span",{className:o().name_box,children:n}),(0,r.jsx)("hr",{className:o().hr_dotted})]}),(0,r.jsx)("div",{id:o().notice_box,children:(0,r.jsx)("div",{id:o().notice,children:"\uce21\uc815 \uc218\uce58\ub294 \uc5ec\ub7ec \uc694\uc18c\uc5d0 \ub530\ub77c \ub2ec\ub77c\uc9c8 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc790\uc138\ud55c \ub0b4\uc6a9\uc740 xx\ub97c \ucc38\uc870\ud558\uc138\uc694."})})]}),(0,r.jsx)("div",{children:"\ucc28\ud2b8"}),(0,r.jsx)("div",{className:o().green_line}),(0,r.jsx)("div",{id:o().chart_box,children:(0,r.jsx)(a.x1,{type:"line",data:u,options:{maintainAspectRatio:!1,plugins:{legend:{position:"bottom",labels:{boxHeight:1}}},animation:{duration:0},scales:{y:{beginAtZero:!0}}}})}),(0,r.jsx)("div",{className:o().green_line})]})}var l=n(1163),u=n(6809),_=n.n(u),d=n(8894),x=n(6866);function h(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function b(t){return function(t){if(Array.isArray(t))return h(t)}(t)||function(t){if("undefined"!==typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||function(t,e){if(!t)return;if("string"===typeof t)return h(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return h(t,e)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function f(){var t=function(){var t={patientID:s,time:h.current};o.current.emit("request_bio_data",t)},e=function(t){w((function(e){return-1==e||e<t?t:e})),H((function(e){return-1==e||e>t?t:e}))},n=function(t){C((function(e){return-1==e||e<t?t:e})),D((function(e){return-1==e||e>t?t:e}))},a=(0,l.useRouter)(),s=(0,i.useRef)(null),o=(0,i.useRef)(null),u=(0,i.useRef)([]),h=(0,i.useRef)(null),f=(0,i.useState)(["0","0","0","0","0","0","0","0","0"]),p=f[0],v=f[1],m=(0,i.useState)([0,0,0,0,0,0,0,0,0]),j=m[0],S=m[1],g=(0,i.useState)([0,0,0,0,0,0,0,0,0]),N=g[0],y=g[1],P=(0,i.useState)(-1),R=P[0],w=P[1],I=(0,i.useState)(-1),A=I[0],H=I[1],E=(0,i.useState)(-1),k=E[0],C=E[1],T=(0,i.useState)(-1),O=T[0],D=T[1],W=(0,i.useState)(""),X=W[0],q=W[1],M=(0,i.useState)(""),Z=M[0],z=M[1];return(0,i.useEffect)((function(){if(a.isReady&&(s=a.query.patientID,o.current=_()("http://localhost:3333",{transports:["websocket"]}),h.current="2022-09-17 00:30:00",null!=o.current)){o.current.connect(),o.current.emit("request_user_info",s),t(),o.current.on("response_bio_data",(function(t){0!=t.length&&(u.current=t,function(){var t=function(t){v((function(e){var n=b(e);return n.push(u.current[t].TIME),n.shift(),n})),S((function(n){var r=b(n);return r.push(u.current[t].HeartRate),r.shift(),e(u.current[t].HeartRate),r})),y((function(e){var r=b(e);return r.push(u.current[t].Spo2),r.shift(),n(u.current[t].Spo2),r}))},r=Object.keys(u.current).length;h.current=u.current[r-1].TIME;for(var i=0;i<r;i++)t(i)}())})),o.current.on("response_user_info",(function(t){q(t.patient_name),z(t.admin_name)}));var r=setInterval(t,3e3);return function(){clearInterval(r),o.current.disconnect()}}}),[a.isReady]),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(d.Z,{}),(0,r.jsx)(c,{patientName:X,adminName:Z,highestHeartRate:R,lowestHeartRate:A,highestSpo2:k,lowestSpo2:O,dates:p,heartRates:j,spo2s:N}),(0,r.jsx)(x.Z,{})]})}},6589:function(t){t.exports={title:"PatientState_title__Dpfb8",red_line:"PatientState_red_line__TytBo",green_line:"PatientState_green_line__lzztK",info_box:"PatientState_info_box__b0puw",user_info_box:"PatientState_user_info_box__vOXPR",notice_box:"PatientState_notice_box__5MDN4",notice:"PatientState_notice___oJgq",chart_box:"PatientState_chart_box__TXisW",hr_solid:"PatientState_hr_solid__xVHy1",hr_dotted:"PatientState_hr_dotted__AbibZ",name_box:"PatientState_name_box__xsW9G",bio_val_box:"PatientState_bio_val_box__WdLii",bio_title:"PatientState_bio_title__9njjn",text:"PatientState_text__17HIe",top_box:"PatientState_top_box__SxXYn"}},7020:function(){}},function(t){t.O(0,[757,637,809,985,335,774,888,179],(function(){return e=6635,t(t.s=e);var e}));var e=t.O();_N_E=e}]);