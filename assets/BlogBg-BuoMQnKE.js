import{h as i,i as m,n as _,r as p,o as u,j as g,f as v,a as f}from"./app-DOFjIsLX.js";import{_ as B}from"./plugin-vue_export-helper-DlAUqK2U.js";const y=i({__name:"BlogBg",setup(l,{expose:a}){a();const r=()=>{if(!document.getElementById("mo7_BlogBg")){const e=document.createElement("div");e.id="mo7_BlogBg",document.body.appendChild(e)}},s=()=>{if(!document.getElementById("mo7_bg_canvas_nest")){const t=document.createElement("canvas");t.id="mo7_bg_canvas_nest",document.body.appendChild(t)}if(!document.getElementById("canvas_nest_js")){var e=document.createElement("script");e.id="canvas_nest_js",e.src="/mo7-script/canvas-nest.js",e.type="text/javascript",document.body.appendChild(e)}},c=()=>{if(!document.getElementById("mo7_grain_parallax_css")){const t=document.createElement("link");t.type="text/css",t.rel="stylesheet",t.href="/mo7-script/grain-parallax.css",t.id="mo7_grain_parallax_css",document.body.appendChild(t)}if(!document.getElementById("mo7_bg_grain_parallax")){const t=document.createElement("div");t.id="mo7_bg_grain_parallax",document.body.appendChild(t),t.innerHTML=`
<div id="particles-background"></div>
<div id="particles-foreground"></div>
    `}if(!document.getElementById("mo7_grain_parallax_js")){console.log("执行 mo7_grain_parallax_js");var e=document.createElement("script");e.id="mo7_grain_parallax_js",e.type="text/javascript",e.src="/mo7-script/grain-parallax.js",document.body.appendChild(e)}};function n(){setTimeout(()=>{const t=document.getElementsByTagName("html")[0].getAttribute("data-theme");t==="dark"?c():t==="light"&&s()},100)}var o=()=>{const e=document.getElementById("color-mode-switch");e&&(e.removeEventListener("click",n),e.addEventListener("click",n))};m(()=>{_(()=>{console.log("执行背景美化"),r(),n(),o()})});const d={BlogBg:r,CanvasNest:s,GrainParallax:c,LoadColorModelCanvas:n,get ObserverColorModel(){return o},set ObserverColorModel(e){o=e}};return Object.defineProperty(d,"__isScriptSetup",{enumerable:!1,value:!0}),d}});function C(l,a,r,s,c,n){const o=p("ClientOnly");return u(),g(o,null,{default:v(()=>a[0]||(a[0]=[f("div",{class:"none"},"背景美化",-1)])),_:1})}const h=B(y,[["render",C],["__file","BlogBg.vue"]]);export{h as default};