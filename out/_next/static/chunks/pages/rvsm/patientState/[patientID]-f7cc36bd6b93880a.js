(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[287],{6635:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/rvsm/patientState/[patientID]",function(){return n(2630)}])},2630:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return p}});var r=n(5893),i=n(7294),a=(n(9217),n(5376)),s=n(6589),o=n.n(s);function u(t){var e=t.patientName,n=t.adminName,i=t.highestHeartRate,s=t.lowestHeartRate,u=(t.highestSpo2,t.lowestSpo2,t.highestTemperature),c=t.lowestTemperature,l=t.dates,_=t.heartRates,d=(t.spo2s,{labels:l,datasets:[{type:"line",label:"HeartRate",backgroundColor:"rgba(255, 99, 132, 1)",borderColor:"rgba(255, 99, 132, 1)",borderWidth:1,data:_},{type:"line",label:"Temperature",backgroundColor:"rgba(247, 198, 154, 1)",borderColor:"rgba(247, 198, 154, 1)",borderWidth:1,data:t.temperature}]});return(0,r.jsxs)("div",{children:[(0,r.jsx)("div",{className:o().top_box}),(0,r.jsx)("div",{className:o().red_line}),(0,r.jsxs)("div",{id:o().info_box,children:[(0,r.jsxs)("div",{id:o().user_info_box,className:o().text,children:[(0,r.jsx)("span",{children:"\uc774\ub984"}),(0,r.jsx)("span",{className:o().name_box,children:e}),(0,r.jsx)("hr",{className:o().hr_solid}),(0,r.jsx)("span",{className:o().bio_title,children:"\uccb4\uc628"}),(0,r.jsxs)("div",{className:o().bio_val_box,children:[(0,r.jsx)("div",{children:"\ucd5c\uc800"}),(0,r.jsx)("div",{children:c})]}),(0,r.jsxs)("div",{className:o().bio_val_box,children:[(0,r.jsx)("div",{children:"\ucd5c\uace0"}),(0,r.jsx)("div",{children:u})]}),(0,r.jsx)("hr",{className:o().hr_dotted}),(0,r.jsx)("span",{className:o().bio_title,children:"\uc2ec\ubc15"}),(0,r.jsxs)("div",{className:o().bio_val_box,children:[(0,r.jsx)("div",{children:"\ucd5c\uc800"}),(0,r.jsx)("div",{children:s})]}),(0,r.jsxs)("div",{className:o().bio_val_box,children:[(0,r.jsx)("div",{children:"\ucd5c\uace0"}),(0,r.jsx)("div",{children:i})]}),(0,r.jsx)("hr",{className:o().hr_dotted}),(0,r.jsx)("span",{children:"\uad00\ub9ac\uc790"}),(0,r.jsx)("span",{className:o().name_box,children:n}),(0,r.jsx)("hr",{className:o().hr_dotted})]}),(0,r.jsx)("div",{id:o().notice_box,children:(0,r.jsx)("div",{id:o().notice,children:"\uce21\uc815 \uc218\uce58\ub294 \uc5ec\ub7ec \uc694\uc18c\uc5d0 \ub530\ub77c \ub2ec\ub77c\uc9c8 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc790\uc138\ud55c \ub0b4\uc6a9\uc740 xx\ub97c \ucc38\uc870\ud558\uc138\uc694."})})]}),(0,r.jsx)("div",{children:"\ucc28\ud2b8"}),(0,r.jsx)("div",{className:o().green_line}),(0,r.jsx)("div",{id:o().chart_box,children:(0,r.jsx)(a.x1,{type:"line",data:d,options:{maintainAspectRatio:!1,plugins:{legend:{position:"bottom",labels:{boxHeight:1}}},animation:{duration:0},scales:{y:{beginAtZero:!0}}}})}),(0,r.jsx)("div",{className:o().green_line})]})}var c=n(1163),l=n(6809),_=n.n(l),d=n(8894),h=n(6866);function f(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function x(t){return function(t){if(Array.isArray(t))return f(t)}(t)||function(t){if("undefined"!==typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||function(t,e){if(!t)return;if("string"===typeof t)return f(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return f(t,e)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var b=n(4422).d5;function p(){var t=function(){var t={patientID:l,time:m.current};f.current.emit("request_bio_data",t)},e=function(){var t=function(t){S((function(e){var n=x(e);return n.push(p.current[t].Time),n.shift(),n})),y((function(e){var r=x(e);return r.push(p.current[t].HeartRate),r.shift(),console.log("heartrate :"+p.current[t].HeartRate),n(p.current[t].HeartRate),r})),w((function(e){var n=x(e);return n.push(p.current[t].Spo2),n.shift(),a(p.current[t].Spo2),n})),A((function(e){var n=x(e);return n.push(p.current[t].Temperature),n.shift(),s(p.current[t].Temperature),n}))},e=Object.keys(p.current).length;m.current=p.current[e-1].Time;for(var r=0;r<e;r++)t(r)},n=function(t){C((function(e){return-1==e||e<t?t:e})),O((function(e){return-1==e||e>t?t:e}))},a=function(t){q((function(e){return-1==e||e<t?t:e})),L((function(e){return-1==e||e>t?t:e}))},s=function(t){F((function(e){return-1==e||e<t?t:e})),K((function(e){return-1==e||e>t?t:e}))},o=(0,c.useRouter)(),l=(0,i.useRef)(null),f=(0,i.useRef)(null),p=(0,i.useRef)([]),m=(0,i.useRef)(null),v=(0,i.useState)(["0","0","0","0","0","0","0","0","0"]),j=v[0],S=v[1],g=(0,i.useState)([0,0,0,0,0,0,0,0,0]),N=g[0],y=g[1],R=(0,i.useState)([0,0,0,0,0,0,0,0,0]),P=R[0],w=R[1],T=(0,i.useState)([0,0,0,0,0,0,0,0,0]),H=T[0],A=T[1],k=(0,i.useState)(-1),I=k[0],C=k[1],D=(0,i.useState)(-1),E=D[0],O=D[1],W=(0,i.useState)(-1),X=W[0],q=W[1],Z=(0,i.useState)(-1),z=Z[0],L=Z[1],M=(0,i.useState)(-1),B=M[0],F=M[1],G=(0,i.useState)(-1),J=G[0],K=G[1],U=(0,i.useState)(""),V=U[0],Y=U[1],$=(0,i.useState)(""),Q=$[0],tt=$[1];return(0,i.useEffect)((function(){if(o.isReady&&(l=o.query.patientID,f.current=_()(b,{transports:["websocket"]}),m.current="2022-09-17 00:30:00",null!=f.current)){f.current.connect(),f.current.emit("request_user_info",l),t(),f.current.on("response_bio_data",(function(t){0!=t.length&&(p.current=t,e())})),f.current.on("bioData-v2",(function(t){console.log("bioData v2 execute..."),0!=t.length&&(p.current=t,e())})),f.current.on("response_user_info",(function(t){Y(t.patient_name),tt(t.admin_name)}));var n=setInterval(t,1e3);return function(){clearInterval(n),f.current.disconnect()}}}),[o.isReady]),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(d.Z,{}),(0,r.jsx)(u,{patientName:V,adminName:Q,highestHeartRate:I,lowestHeartRate:E,highestSpo2:X,lowestSpo2:z,highestTemperature:B,lowestTemperature:J,dates:j,heartRates:N,spo2s:P,temperature:H}),(0,r.jsx)(h.Z,{})]})}},4422:function(t,e,n){"use strict";n.d(e,{d5:function(){return r},hf:function(){return s},kj:function(){return i},p6:function(){return a}});var r="http://3.34.99.247:3333/",i="http://3.34.99.247:3333/login/session",a="http://3.34.99.247:3333/patientList/session",s="http://3.34.99.247:3333/patientRegistration/session"},6589:function(t){t.exports={title:"PatientState_title__Dpfb8",red_line:"PatientState_red_line__TytBo",green_line:"PatientState_green_line__lzztK",info_box:"PatientState_info_box__b0puw",user_info_box:"PatientState_user_info_box__vOXPR",notice_box:"PatientState_notice_box__5MDN4",notice:"PatientState_notice___oJgq",chart_box:"PatientState_chart_box__TXisW",hr_solid:"PatientState_hr_solid__xVHy1",hr_dotted:"PatientState_hr_dotted__AbibZ",name_box:"PatientState_name_box__xsW9G",bio_val_box:"PatientState_bio_val_box__WdLii",bio_title:"PatientState_bio_title__9njjn",text:"PatientState_text__17HIe",top_box:"PatientState_top_box__SxXYn"}},7020:function(){}},function(t){t.O(0,[757,637,809,985,335,774,888,179],(function(){return e=6635,t(t.s=e);var e}));var e=t.O();_N_E=e}]);