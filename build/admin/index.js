!function(){"use strict";var e=window.wp.element,t=window.wp.i18n,a=window.React,n=a=>{let{adminNoticeVisible:n,setAdminNoticeVisible:l,adminNoticeText:r,adminNoticeStatus:i}=a;return n?(0,e.createElement)("div",{className:`notice ${i}is-dismissible`},(0,e.createElement)("p",null,r),(0,e.createElement)("button",{onClick:e=>{e.preventDefault(),l(!1)},type:"button",className:"notice-dismiss"},(0,e.createElement)("span",{className:"screen-reader-text"},(0,t.__)("Dismiss this notice.","weather-widget-wp")))):null},l=a=>{let{apiKey:n,setApiKey:l}=a;return(0,e.createElement)("tr",null,(0,e.createElement)("th",{scope:"row"},(0,e.createElement)("label",{htmlFor:"api_key"},(0,t.__)("Open Weather API Key","weather-widget-wp"))),(0,e.createElement)("td",null,(0,e.createElement)("input",{value:n,onChange:e=>{l(e.target.value)},type:"text",name:"api_key",id:"api_key",className:"regular-text",placeholder:(0,t.__)("Enter your API key here","weather-widget-wp")}),(0,e.createElement)("br",null),(0,e.createElement)("small",null,(0,t.__)("You need to have or ","weather-widget-wp"),(0,e.createElement)("a",{href:"https://home.openweathermap.org/users/sign_up",target:"_blank"},(0,t.__)("create","weather-widget-wp")),(0,t.__)(" (free) account via Open Weather API.","weather-widget-wp"),(0,e.createElement)("br",null),(0,t.__)("After that click on your name > My API keys > Generate API key.","weather-widget-wp"),(0,e.createElement)("br",null),(0,e.createElement)("strong",null,(0,t.__)("API key would take around 15 min to get activated,","weather-widget-wp")),(0,e.createElement)("br",null),(0,t.__)("this means you won't see any weather data in that time.","weather-widget-wp"))))},r=a=>{let{caching:n,setCaching:l}=a;return(0,e.createElement)("tr",null,(0,e.createElement)("th",{scope:"row"},(0,e.createElement)("label",{htmlFor:"caching"},(0,t.__)("Caching","weather-widget-wp"))),(0,e.createElement)("td",null,(0,e.createElement)("input",{value:n,onChange:e=>{l(e.target.value)},type:"number",min:"0",max:"24",name:"caching",id:"caching",className:"regular-text",placeholder:(0,t.__)("4 hours","weather-widget-wp")}),(0,e.createElement)("br",null),(0,e.createElement)("small",null,(0,t.__)("Save the weather result (hours) so you don't hit the API","weather-widget-wp"),(0,e.createElement)("br",null),(0,t.__)("on every page reload and exceed your free quota.","weather-widget-wp"))))},i=a=>{let{uninstallData:n,setUninstallData:l}=a;return(0,e.createElement)("tr",null,(0,e.createElement)("th",{scope:"row"},(0,e.createElement)("label",null,(0,t.__)("Save/Delete plugin data","weather-widget-wp"))),(0,e.createElement)("td",null,(0,e.createElement)("input",{checked:n,onChange:e=>{l(e.target.checked)},type:"checkbox",name:"uninstall-data",id:"uninstall-data",value:"1"}),(0,e.createElement)("label",{htmlFor:"uninstall-data"},(0,t.__)("Remove all plugin data when the plugin is removed.","weather-widget-wp"))))},c=t=>{let{saveButtonText:a}=t;return(0,e.createElement)("tr",null,(0,e.createElement)("th",{scope:"row"},(0,e.createElement)("p",null,(0,e.createElement)("button",{type:"submit",className:"button button-primary"},a))))},s=()=>{const[s,o]=(0,a.useState)(""),[w,u]=(0,a.useState)(""),[m,d]=(0,a.useState)(!0),[h,p]=(0,a.useState)((0,t.__)("Save Settings","weather-widget-wp")),[g,_]=(0,a.useState)(""),[E,b]=(0,a.useState)(""),[y,v]=(0,a.useState)(!1),S=`${weatherWidgetWpObject.apiUrl}weather-widget-wp/api/settings`;return(0,a.useEffect)((()=>{fetch(S,{method:"GET",headers:{"Content-Type":"application/json","X-WP-NONCE":weatherWidgetWpObject.nonce}}).then((e=>{if(!e.ok)throw Error(e.status+" - Settings could not be loaded.");return e})).then((e=>e.json())).then((e=>{o(e.api_key),u(e.caching),d(e.uninstall_data)})).catch((e=>console.log(e)))}),[]),(0,e.createElement)(e.Fragment,null,(0,e.createElement)(n,{adminNoticeVisible:y,setAdminNoticeVisible:v,adminNoticeText:g,adminNoticeStatus:E}),(0,e.createElement)("form",{onSubmit:e=>{e.preventDefault(),p((0,t.__)("Saving ...","weather-widget-wp")),fetch(S,{method:"POST",headers:{"Content-Type":"application/json","X-WP-NONCE":weatherWidgetWpObject.nonce},body:JSON.stringify({api_key:s,caching:w,uninstall_data:m})}).then((e=>{v(!0),p((0,t.__)("Save Settings","weather-widget-wp")),e.ok?(console.log((0,t.__)("Plugin settings saved.","weather-widget-wp")),_((0,t.__)("Settings saved.","weather-widget-wp")),b("notice-success ")):(console.log((0,t.__)("Error ","weather-widget-wp")+e.status+(0,t.__)(": Settings could not be saved.","weather-widget-wp")),_((0,t.__)("Oops! Something went wrong! Settings where not saved.","weather-widget-wp")),b("notice-error "))}))}},(0,e.createElement)("table",{className:"form-table",role:"presentation"},(0,e.createElement)("tbody",null,(0,e.createElement)(l,{apiKey:s,setApiKey:o}),(0,e.createElement)(r,{caching:w,setCaching:u}),(0,e.createElement)(i,{uninstallData:m,setUninstallData:d}),(0,e.createElement)(c,{saveButtonText:h})))))},o=window.ReactDOM;const w=document.getElementById("weather-widget-wp-settings-page");w&&(0,o.render)((0,e.createElement)((()=>(0,e.createElement)("div",{id:"weather-widget-wp-settings-page",className:"wrap"},(0,e.createElement)("h2",null,(0,t.__)("Weather Widget Settings","weather-widget-wp")),(0,e.createElement)(s,null))),null),w)}();