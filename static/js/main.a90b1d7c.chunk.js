(this["webpackJsonpreact-weather-app"]=this["webpackJsonpreact-weather-app"]||[]).push([[0],{31:function(n,e,t){},55:function(n,e,t){"use strict";t.r(e);var a,i,c,r,o,s,l,d,p,u,x,b,j,h,v,f=t(1),g=t.n(f),m=t(21),O=t.n(m),w=(t(31),t(22)),y=t(10),z=t(2),k=t(7),C=t.n(k),M=t(3),S=t(23),W=t.n(S),_=t(0),D=M.a.form(a||(a=Object(z.a)(["\n  display: flex;\n  flex-direction: row;\n  justify-content: space-evenly;\n  margin: 20px;\n  border: black solid 1px;\n  border-radius: 2px;\n\n  & input {\n    padding: 10px;\n    font-size: 14px;\n    border: none;\n    outline: none;\n    font-family: Montserrat;\n    font-weight: bold;\n  }\n  & button {\n    background-color: black;\n    font-size: 14px;\n    padding: 0 10px;\n    color: white;\n    border: none;\n    outline: none;\n    cursor: pointer;\n    font-family: Montserrat;\n    font-weight: bold;\n  }\n"]))),F=M.a.span(i||(i=Object(z.a)(["\n  color: black;\n  margin: 10px auto;\n  font-size: 18px;\n  font-weight: bold;\n"]))),q=M.a.img(c||(c=Object(z.a)(["\n  width: 140px;\n  height: 140px;\n  margin: 40px auto;\n"]))),I=function(n){var e=n.updateCity,t=n.fetchWeather;return Object(_.jsxs)(_.Fragment,{children:[Object(_.jsx)(q,{src:"/react-weather-app/icons/perfect-day.svg"}),Object(_.jsx)(F,{children:"Find Weather of your city"}),Object(_.jsxs)(D,{onSubmit:t,children:[Object(_.jsx)("input",{onChange:function(n){return e(n.target.value)},placeholder:"City"}),Object(_.jsx)("button",{type:"submit",children:"Search"})]})]})},J={sunset:"/react-weather-app/icons/temp.svg",sunrise:"/react-weather-app/icons/temp.svg",humidity:"/react-weather-app/icons/humidity.svg",wind:"/react-weather-app/icons/wind.svg",pressure:"/react-weather-app/icons/pressure.svg"},A=M.a.span(r||(r=Object(z.a)(["\n  margin: 15px auto;\n  text-transform: capitalize;\n  font-size: 28px;\n  font-weight: bold;\n"]))),B=M.a.span(o||(o=Object(z.a)(["\n  margin: 20px auto;\n  text-transform: capitalize;\n  font-size: 14px;\n  & span {\n    font-size: 28px;\n  }\n"]))),E=M.a.span(s||(s=Object(z.a)(["\n  margin: 20px 25px 10px;\n  text-transform: capitalize;\n  text-align: start;\n  width: 90%;\n  font-weight: bold;\n  font-size: 14px;\n"]))),H=M.a.img(l||(l=Object(z.a)(["\n  width: 100px;\n  height: 100px;\n  margin: 5px auto;\n"]))),R=M.a.div(d||(d=Object(z.a)(["\n  display: flex;\n  width: 100%;\n  margin: 30px auto;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n"]))),G=M.a.div(p||(p=Object(z.a)(["\n  display: flex;\n  width: 90%;\n  flex-direction: row;\n  justify-content: space-evenly;\n  align-items: center;\n  flex-wrap: wrap;\n"]))),K=M.a.div(u||(u=Object(z.a)(["\n  display: flex;\n  margin: 5px 10px;\n  flex-direction: row;\n  justify-content: space-evenly;\n  align-items: center;\n"]))),L=M.a.img(x||(x=Object(z.a)(["\n  width: 36px;\n  height: 36px;\n"]))),N=M.a.span(b||(b=Object(z.a)(["\n  display: flex;\n  flex-direction: column;\n  font-size: 14px;\n  margin: 15px;\n  & span {\n    font-size: 12px;\n    text-transform: capitalize;\n  }\n"]))),P=function(n){var e=n.name,t=n.value;return Object(_.jsxs)(K,{children:[Object(_.jsx)(L,{src:J[e]}),Object(_.jsxs)(N,{children:[t,Object(_.jsx)("span",{children:e})]})]})},Q=function(n){var e,t,a,i,c,r,o,s,l,d,p,u,x,b,j,h=n.weather,v=null===h||void 0===h||null===(e=h.current)||void 0===e||null===(t=e.condition)||void 0===t||null===(a=t.icon)||void 0===a?void 0:a.includes("d");return Object(_.jsxs)(_.Fragment,{children:[Object(_.jsxs)(R,{children:[Object(_.jsxs)(B,{children:[Object(_.jsx)("span",{children:"".concat(null===h||void 0===h||null===(i=h.current)||void 0===i?void 0:i.temp_c,"\xb0C")}),"  |  ".concat(null===h||void 0===h||null===(c=h.current)||void 0===c||null===(r=c.condition)||void 0===r?void 0:r.text)]}),Object(_.jsx)(H,{src:"".concat(null===h||void 0===h||null===(o=h.current)||void 0===o||null===(s=o.condition)||void 0===s?void 0:s.icon)})]}),Object(_.jsx)(A,{children:"".concat(null===h||void 0===h||null===(l=h.location)||void 0===l?void 0:l.name,", ").concat(null===h||void 0===h||null===(d=h.location)||void 0===d?void 0:d.country)}),Object(_.jsx)(E,{children:"Weather Info"}),Object(_.jsxs)(G,{children:[Object(_.jsx)(P,{name:v?"sunset":"sunrise",value:"".concat((j=null===h||void 0===h||null===(p=h.current)||void 0===p?void 0:p.is_day,"".concat(new Date(1e3*j).getHours()," : ").concat(new Date(1e3*j).getMinutes())))}),Object(_.jsx)(P,{name:"humidity",value:null===h||void 0===h||null===(u=h.current)||void 0===u?void 0:u.humidity}),Object(_.jsx)(P,{name:"wind",value:null===h||void 0===h||null===(x=h.current)||void 0===x?void 0:x.wind_kph}),Object(_.jsx)(P,{name:"pressure",value:null===h||void 0===h||null===(b=h.current)||void 0===b?void 0:b.pressure_mb})]})]})},T=M.a.div(j||(j=Object(z.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: 380px;\n  padding: 20px 10px;\n  margin: auto;\n  border-radius: 4px;\n  box-shadow: 0 3px 6px 0 #555;\n  background: white;\n  font-family: Montserrat;\n"]))),U=M.a.span(h||(h=Object(z.a)(["\n  color: black;\n  margin: 20px auto;\n  font-size: 18px;\n  font-weight: bold;\n"])));M.a.span(v||(v=Object(z.a)(["\n  padding: 2px 3px;\n  background-color: black;\n  border-radius: 50%;\n  color: white;\n  position: absolute;\n"])));var V=function(){var n=Object(f.useState)(),e=Object(y.a)(n,2),t=e[0],a=e[1],i=Object(f.useState)(),c=Object(y.a)(i,2),r=c[0],o=c[1],s=function(){var n=Object(w.a)(C.a.mark((function n(e){var a;return C.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e.preventDefault(),n.next=3,W.a.get("http://api.weatherapi.com/v1/current.json?key=c8d8bfe6b5ee4ce3be7111129220604&q=".concat(t,"&aqi=no"));case 3:a=n.sent,console.log(a.data),o(a.data);case 6:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}();return Object(_.jsxs)(T,{children:[Object(_.jsx)(U,{children:"React Weather App"}),t&&r?Object(_.jsx)(Q,{weather:r,city:t}):Object(_.jsx)(I,{updateCity:a,fetchWeather:s})]})};O.a.render(Object(_.jsxs)(g.a.StrictMode,{children:[Object(_.jsx)(V,{}),","]}),document.getElementById("root"))}},[[55,1,2]]]);
//# sourceMappingURL=main.a90b1d7c.chunk.js.map