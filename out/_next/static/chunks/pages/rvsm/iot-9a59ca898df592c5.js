(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[254],{1433:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/rvsm/iot",function(){return n(9548)}])},9548:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return x}});var i=n(5893),a=n(7294),r=(n(9217),n(5376)),o=n(6589),s=n.n(o);function l(t){var e=t.patientName,n=t.adminName,a=t.highestHeartRate,o=t.lowestHeartRate,l=t.highestSpo2,_=t.lowestSpo2,c={labels:t.dates,datasets:[{type:"line",label:"HeartRate",backgroundColor:"rgba(255, 99, 132, 1)",borderColor:"rgba(255, 99, 132, 1)",borderWidth:1,data:t.heartRates},{type:"line",label:"Spo2",backgroundColor:"rgba(87, 98, 255, 1)",borderColor:"rgba(87, 98, 255, 1)",borderWidth:1,data:t.spo2s}]};return(0,i.jsxs)("div",{children:[(0,i.jsx)("div",{id:s().title,children:"Vital Sign Chart"}),(0,i.jsx)("div",{id:s().red_line}),(0,i.jsxs)("div",{id:s().info_box,children:[(0,i.jsxs)("div",{id:s().user_info_box,className:s().text,children:[(0,i.jsx)("span",{children:"\uc774\ub984"}),(0,i.jsx)("span",{className:s().name_box,children:e}),(0,i.jsx)("hr",{className:s().hr_solid}),(0,i.jsx)("span",{className:s().bio_title,children:"\uc2ec\ubc15"}),(0,i.jsxs)("div",{className:s().bio_val_box,children:[(0,i.jsx)("div",{children:"\ucd5c\uc800"}),(0,i.jsx)("div",{children:o})]}),(0,i.jsxs)("div",{className:s().bio_val_box,children:[(0,i.jsx)("div",{children:"\ucd5c\uace0"}),(0,i.jsx)("div",{children:a})]}),(0,i.jsx)("hr",{className:s().hr_dotted}),(0,i.jsx)("span",{className:s().bio_title,children:"\uc0b0\uc18c\ud3ec\ud654\ub3c4"}),(0,i.jsxs)("div",{className:s().bio_val_box,children:[(0,i.jsx)("div",{children:"\ucd5c\uc800"}),(0,i.jsx)("div",{children:_})]}),(0,i.jsxs)("div",{className:s().bio_val_box,children:[(0,i.jsx)("div",{children:"\ucd5c\uace0"}),(0,i.jsx)("div",{children:l})]}),(0,i.jsx)("hr",{className:s().hr_dotted}),(0,i.jsx)("span",{children:"\uad00\ub9ac\uc790"}),(0,i.jsx)("span",{className:s().name_box,children:n}),(0,i.jsx)("hr",{className:s().hr_dotted})]}),(0,i.jsx)("div",{id:s().notice_box,children:(0,i.jsx)("div",{id:s().notice,children:"\uce21\uc815 \uc218\uce58\ub294 \uc5ec\ub7ec \uc694\uc18c\uc5d0 \ub530\ub77c \ub2ec\ub77c\uc9c8 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc790\uc138\ud55c \ub0b4\uc6a9\uc740 xx\ub97c \ucc38\uc870\ud558\uc138\uc694."})})]}),(0,i.jsx)("div",{children:"\ucc28\ud2b8"}),(0,i.jsx)("div",{className:s().green_line}),(0,i.jsx)("div",{id:s().chart_box,children:(0,i.jsx)(r.x1,{type:"line",data:c,options:{maintainAspectRatio:!1,plugins:{legend:{position:"bottom",labels:{boxHeight:1}}},animation:{duration:0},scales:{y:{beginAtZero:!0}}}})}),(0,i.jsx)("div",{className:s().green_line})]})}var _=n(6809),c=n(8894),d=n(6866);function u(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,i=new Array(e);n<e;n++)i[n]=t[n];return i}function h(t){return function(t){if(Array.isArray(t))return u(t)}(t)||function(t){if("undefined"!==typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||function(t,e){if(!t)return;if("string"===typeof t)return u(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return u(t,e)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function x(){var t,e,n=function(){var n={user_name:s,time:e};t.emit("request_data",n)},r=function(t){y((function(e){return-1==e||e<t?t:e})),A((function(e){return-1==e||e>t?t:e}))},o=function(t){T((function(e){return-1==e||e<t?t:e})),I((function(e){return-1==e||e>t?t:e}))},s="PATIENT_STATE",u=(0,a.useState)(["0","0","0","0","0","0","0","0","0"]),x=u[0],b=u[1],f=(0,a.useState)([0,0,0,0,0,0,0,0,0]),m=f[0],v=f[1],p=(0,a.useState)([0,0,0,0,0,0,0,0,0]),j=p[0],S=p[1],g=(0,a.useState)(-1),N=g[0],y=g[1],P=(0,a.useState)(-1),w=P[0],A=P[1],E=(0,a.useState)(-1),R=E[0],T=E[1],H=(0,a.useState)(-1),C=H[0],I=H[1],k=(0,a.useState)(""),O=k[0],W=k[1],M=(0,a.useState)(""),X=M[0],Z=M[1],q=[];return(0,a.useEffect)((function(){e="2022-05-20 17:30:26",(t=_.io.connect("http://localhost:3333")).emit("web_request_user_info","1"),t.on("response_data",(function(t){0!=t.length&&(q=t,function(){var t=function(t){b((function(e){var n=h(e);return n.push(q[t].TIME),n.shift(),n})),v((function(e){var n=h(e);return n.push(q[t].HeartRate),n.shift(),r(q[t].HeartRate),n})),S((function(e){var n=h(e);return n.push(q[t].Spo2),n.shift(),o(q[t].Spo2),n}))},n=Object.keys(q).length;e=q[n-1].TIME;for(var i=0;i<n;i++)t(i)}())})),t.on("patient_info",(function(t){W(t.patient_name),Z(t.admin_name)}));setInterval(n,3e3);return function(){t&&t.disconnect()}}),[]),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(c.Z,{}),(0,i.jsx)(l,{patientName:O,adminName:X,highestHeartRate:N,lowestHeartRate:w,highestSpo2:R,lowestSpo2:C,dates:x,heartRates:m,spo2s:j}),(0,i.jsx)(d.Z,{})]})}},6589:function(t){t.exports={title:"PatientState_title__Dpfb8",red_line:"PatientState_red_line__TytBo",green_line:"PatientState_green_line__lzztK",info_box:"PatientState_info_box__b0puw",user_info_box:"PatientState_user_info_box__vOXPR",notice_box:"PatientState_notice_box__5MDN4",notice:"PatientState_notice___oJgq",chart_box:"PatientState_chart_box__TXisW",hr_solid:"PatientState_hr_solid__xVHy1",hr_dotted:"PatientState_hr_dotted__AbibZ",name_box:"PatientState_name_box__xsW9G",bio_val_box:"PatientState_bio_val_box__WdLii",bio_title:"PatientState_bio_title__9njjn",text:"PatientState_text__17HIe"}},7020:function(){}},function(t){t.O(0,[757,809,11,335,774,888,179],(function(){return e=1433,t(t.s=e);var e}));var e=t.O();_N_E=e}]);