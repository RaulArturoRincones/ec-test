function a(){console.log("econ-starter -> fileUpload.utils.js"),[].slice.call(document.querySelectorAll(".econ-form-control-file")).map(function(e){const t=e.querySelector(".econ-form-control"),r=e.querySelector(".econ-file-message"),l=e.querySelector(".econ-file-remove-button"),c=r.textContent,o=e.querySelector(".econ-file-drop-area");o.addEventListener("dragenter",()=>o.classList.add("is-dragover")),o.addEventListener("dragleave",()=>o.classList.remove("is-dragover")),o.addEventListener("drop",()=>o.classList.remove("is-dragover")),t.addEventListener("change",()=>{const i=t.files.length;r.textContent=i===1?t.value.split("\\").pop():`${i} Dateien ausgewählt`,l.removeAttribute("disabled")}),l.addEventListener("click",()=>{t.value="",r.textContent=c,l.setAttribute("disabled","true")})})}function d(n,e){return Math.round(n/e*100)-1}function S(n,e){return n>50?"-"+e+"px":"0"}function f(n,e,t){n.setAttribute("style","width:"+t+"%"),e.setAttribute("style","left:"+t+"%; margin-left:"+S(t,e.offsetWidth))}function g(){[].slice.call(document.querySelectorAll(".econ-slider")).map(function(e){const t=e.querySelector(".form-range"),r=e.querySelector(".econ-slider-process"),l=e.querySelector(".econ-slider-thumb"),c=t.max-t.min;f(r,l,d(t.value,c)),t.addEventListener("input",o=>{f(r,l,d(o.target.value,c))})})}const v=()=>{console.log("econ-starter -> econ-starter.js"),a(),g(),typeof Wicket<"u"&&Wicket.Event.subscribe("/dom/node/added",function(){a(),g()})};function m(n,e){for(const t in e)n.setAttribute(t,e[t])}function p(){[].slice.call(document.querySelectorAll(".econ-fragment-multiple")).map(function(e){const t=e.querySelector(".econ-form-label"),r=t.getAttribute("class").includes("required")?"econ-form-label required":"econ-form-label",l=t.querySelector("label").textContent.split(","),c=[].slice.call(e.querySelectorAll(".econ-form-control-inner"));t.remove(),c.map(function(o,i){const y=o.querySelector(".form-control"),s=document.createElement("div"),u=document.createElement("label");m(s,{class:r}),m(u,{for:y.id,class:"form-label"}),s.append(u),u.textContent=l[i],o.prepend(s)})})}function L(n){return!!n.querySelector(".input-group-text")}function b(){[].slice.call(document.querySelectorAll(".econ-fragment-form-row")).map(function(e){const t=e.querySelector(".econ-control-icon").querySelector(".input-group-append");if(L(e)){const r=e.querySelector(".input-group-text").offsetWidth;t.setAttribute("style","margin-right:"+r+"px")}})}v();b();p();typeof Wicket<"u"&&Wicket.Event.subscribe("/dom/node/added",function(){b(),p()});
