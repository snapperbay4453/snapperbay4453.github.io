window.dataLayer=window.dataLayer||[];function S(){dataLayer.push(arguments)}S("js",new Date);S("config",{}.G_ANALYTICS_ID);var y=document.documentElement,x=new FontFaceObserver("Nanum Gothic");y.classList.add("fonts-loading");x.load().then(function(){y.classList.remove("fonts-loading"),y.classList.add("fonts-loaded")}).catch(function(){y.classList.remove("fonts-loading"),y.classList.add("fonts-failed")});const R=n=>history.state&&history.replaceState(n,""),A=!!document.startViewTransition,w=()=>!!document.querySelector('[name="astro-view-transitions-enabled"]'),v=n=>document.dispatchEvent(new Event(n)),T=()=>v("astro:page-load"),h="data-astro-transition-persist";let u=0;history.state?(u=history.state.index,scrollTo({left:history.state.scrollX,top:history.state.scrollY})):w()&&history.replaceState({index:u,scrollX,scrollY},"");const Y=(n,e)=>{let t=!1,o=!1;return(...l)=>{if(t){o=!0;return}n(...l),t=!0,setTimeout(()=>{o&&(o=!1,n(...l)),t=!1},e)}};async function P(n){try{const e=await fetch(n),t=await e.text();return{ok:e.ok,html:t,redirected:e.redirected?e.url:void 0,mediaType:e.headers.get("content-type")?.replace(/;.*$/,"")}}catch{return{ok:!1}}}function L(){const n=document.querySelector('[name="astro-view-transitions-fallback"]');return n?n.getAttribute("content"):"animate"}function k(){for(const n of document.scripts)n.dataset.astroExec=""}function q(){let n=Promise.resolve();for(const e of Array.from(document.scripts)){if(e.dataset.astroExec==="")continue;const t=document.createElement("script");t.innerHTML=e.innerHTML;for(const o of e.attributes){if(o.name==="src"){const l=new Promise(m=>{t.onload=m});n=n.then(()=>l)}t.setAttribute(o.name,o.value)}t.dataset.astroExec="",e.replaceWith(t)}return n}function I(n){const e=n.effect;return!e||!(e instanceof KeyframeEffect)||!e.target?!1:window.getComputedStyle(e.target,e.pseudoElement).animationIterationCount==="infinite"}const X=new DOMParser;async function E(n,e,t,o){const l=r=>{const s=r.getAttribute(h),c=s&&n.head.querySelector(`[${h}="${s}"]`);if(c)return c;if(r.matches("link[rel=stylesheet]")){const i=r.getAttribute("href");return n.head.querySelector(`link[rel=stylesheet][href="${i}"]`)}if(r.tagName==="SCRIPT"){let i=r;for(const d of n.scripts)if(i.textContent&&i.textContent===d.textContent||i.type===d.type&&i.src===d.src)return d}return null},m=()=>{n.querySelectorAll("head noscript").forEach(a=>a.remove());const r=document.documentElement,s=[...r.attributes].filter(({name:a})=>(r.removeAttribute(a),a.startsWith("data-astro-")));[...n.documentElement.attributes,...s].forEach(({name:a,value:f})=>r.setAttribute(a,f));for(const a of Array.from(document.head.children)){const f=l(a);f?f.remove():a.remove()}document.head.append(...n.head.children);const c=document.body;document.body.replaceWith(n.body);for(const a of c.querySelectorAll(`[${h}]`)){const f=a.getAttribute(h),g=document.querySelector(`[${h}="${f}"]`);g&&g.replaceWith(a)}scrollTo({left:0,top:0,behavior:"instant"});let i=0,d=0;if(!t&&e.hash){const a=decodeURIComponent(e.hash.slice(1)),f=document.getElementById(a);f&&(f.scrollIntoView(),i=Math.max(0,f.offsetLeft+f.offsetWidth-document.documentElement.clientWidth),d=f.offsetTop)}else t&&scrollTo(t.scrollX,t.scrollY);!t&&history.pushState({index:++u,scrollX:i,scrollY:d},"",e.href),v("astro:after-swap")},p=[];for(const r of n.querySelectorAll("head link[rel=stylesheet]"))if(!document.querySelector(`[${h}="${r.getAttribute(h)}"], link[rel=stylesheet]`)){const s=document.createElement("link");s.setAttribute("rel","preload"),s.setAttribute("as","style"),s.setAttribute("href",r.getAttribute("href")),p.push(new Promise(c=>{["load","error"].forEach(i=>s.addEventListener(i,c)),document.head.append(s)}))}if(p.length&&await Promise.all(p),o==="animate"){const r=document.getAnimations();document.documentElement.dataset.astroTransitionFallback="old";const s=document.getAnimations().filter(d=>!r.includes(d)&&!I(d)),c=Promise.all(s.map(d=>d.finished)),i=()=>{m(),document.documentElement.dataset.astroTransitionFallback="new"};await c,i()}else m()}async function b(n,e,t){let o;const l=e.href,{html:m,ok:p,mediaType:r,redirected:s}=await P(l);if(s&&(e=new URL(s)),!p||!(r==="text/html"||r==="application/xhtml+xml")){location.href=l;return}const c=X.parseFromString(m,r);if(!c.querySelector('[name="astro-view-transitions-enabled"]')){location.href=l;return}!t&&history.replaceState({index:u,scrollX,scrollY},""),document.documentElement.dataset.astroTransition=n,A?o=document.startViewTransition(()=>E(c,e,t)).finished:o=E(c,e,t,L());try{await o}finally{await q(),k(),T()}}function $(n){if(document.querySelector(`link[rel=prefetch][href="${n}"]`))return;if(navigator.connection){let t=navigator.connection;if(t.saveData||/(2|3)g/.test(t.effectiveType||""))return}let e=document.createElement("link");e.setAttribute("rel","prefetch"),e.setAttribute("href",n),document.head.append(e)}if(A||L()!=="none"){k(),document.addEventListener("click",e=>{let t=e.target;if(t instanceof Element&&t.tagName!=="A"&&(t=t.closest("a")),!(!t||!(t instanceof HTMLAnchorElement)||t.dataset.astroReload!==void 0||t.hasAttribute("download")||!t.href||t.target&&t.target!=="_self"||t.origin!==location.origin||e.button!==0||e.metaKey||e.ctrlKey||e.altKey||e.shiftKey||e.defaultPrevented||!w())){if(location.pathname===t.pathname&&location.search===t.search){if(t.hash)return;if(e.preventDefault(),location.hash){history.replaceState({index:u,scrollX,scrollY:-(scrollY+1)},"");const o={index:++u,scrollX:0,scrollY:0};history.pushState(o,"",t.href)}scrollTo({left:0,top:0,behavior:"instant"});return}e.preventDefault(),b("forward",new URL(t.href))}}),addEventListener("popstate",e=>{if(!w()&&e.state){history.scrollRestoration&&(history.scrollRestoration="manual"),location.reload();return}if(e.state===null){history.scrollRestoration&&(history.scrollRestoration="auto");return}history.scrollRestoration&&(history.scrollRestoration="manual");const t=history.state,o=t.index,l=o>u?"forward":"back";u=o,t.scrollY<0?scrollTo(t.scrollX,-(t.scrollY+1)):b(l,new URL(location.href),t)}),["mouseenter","touchstart","focus"].forEach(e=>{document.addEventListener(e,t=>{if(t.target instanceof HTMLAnchorElement){let o=t.target;o.origin===location.origin&&o.pathname!==location.pathname&&w()&&$(o.pathname)}},{passive:!0,capture:!0})}),addEventListener("load",T);const n=()=>{R({...history.state,scrollX,scrollY})};"onscrollend"in window?addEventListener("scrollend",n):addEventListener("scroll",Y(n,300))}
