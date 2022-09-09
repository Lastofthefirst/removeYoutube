const q=function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))i(l);new MutationObserver(l=>{for(const o of l)if(o.type==="childList")for(const f of o.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&i(f)}).observe(document,{childList:!0,subtree:!0});function t(l){const o={};return l.integrity&&(o.integrity=l.integrity),l.referrerpolicy&&(o.referrerPolicy=l.referrerpolicy),l.crossorigin==="use-credentials"?o.credentials="include":l.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(l){if(l.ep)return;l.ep=!0;const o=t(l);fetch(l.href,o)}};q();const y={};let G=I;const m=1,v=2,O={owned:null,cleanups:null,context:null,owner:null};var d=null;let x=null,c=null,g=null,N=0;function H(e,s){const t=d,i=e.length===0,l=i?O:{owned:null,cleanups:null,context:null,owner:s||t},o=i?e:()=>e(()=>T(()=>L(l)));d=l;try{return A(o,!0)}finally{d=t}}function _(e,s,t){const i=Y(e,s,!1,m);R(i)}function T(e){let s;return s=e(),s}function K(e,s,t){let i=e.value;return(!e.comparator||!e.comparator(i,s))&&(e.value=s,e.observers&&e.observers.length&&A(()=>{for(let l=0;l<e.observers.length;l+=1){const o=e.observers[l],f=x&&x.running;f&&x.disposed.has(o),(f&&!o.tState||!f&&!o.state)&&(o.pure?c.push(o):g.push(o),o.observers&&F(o)),f||(o.state=m)}if(c.length>1e6)throw c=[],new Error},!1)),s}function R(e){if(!e.fn)return;L(e);const s=d,t=N;d=e,Q(e,e.value,t),d=s}function Q(e,s,t){let i;try{i=e.fn(s)}catch(l){e.pure&&(e.state=m),M(l)}(!e.updatedAt||e.updatedAt<=t)&&(e.updatedAt!=null&&"observers"in e?K(e,i):e.value=i,e.updatedAt=t)}function Y(e,s,t,i=m,l){const o={fn:e,state:i,updatedAt:null,owned:null,sources:null,sourceSlots:null,cleanups:null,value:s,owner:d,context:null,pure:t};return d===null||d!==O&&(d.owned?d.owned.push(o):d.owned=[o]),o}function U(e){const s=x;if(e.state===0||s)return;if(e.state===v||s)return $(e);if(e.suspense&&T(e.suspense.inFallback))return e.suspense.effects.push(e);const t=[e];for(;(e=e.owner)&&(!e.updatedAt||e.updatedAt<N);)(e.state||s)&&t.push(e);for(let i=t.length-1;i>=0;i--)if(e=t[i],e.state===m||s)R(e);else if(e.state===v||s){const l=c;c=null,A(()=>$(e,t[0]),!1),c=l}}function A(e,s){if(c)return e();let t=!1;s||(c=[]),g?t=!0:g=[],N++;try{const i=e();return j(t),i}catch(i){c||(g=null),M(i)}}function j(e){if(c&&(I(c),c=null),e)return;const s=g;g=null,s.length&&A(()=>G(s),!1)}function I(e){for(let s=0;s<e.length;s++)U(e[s])}function $(e,s){const t=x;e.state=0;for(let i=0;i<e.sources.length;i+=1){const l=e.sources[i];l.sources&&(l.state===m||t?l!==s&&U(l):(l.state===v||t)&&$(l,s))}}function F(e){const s=x;for(let t=0;t<e.observers.length;t+=1){const i=e.observers[t];(!i.state||s)&&(i.state=v,i.pure?c.push(i):g.push(i),i.observers&&F(i))}}function L(e){let s;if(e.sources)for(;e.sources.length;){const t=e.sources.pop(),i=e.sourceSlots.pop(),l=t.observers;if(l&&l.length){const o=l.pop(),f=t.observerSlots.pop();i<l.length&&(o.sourceSlots[f]=i,l[i]=o,t.observerSlots[i]=f)}}if(e.owned){for(s=0;s<e.owned.length;s++)L(e.owned[s]);e.owned=null}if(e.cleanups){for(s=0;s<e.cleanups.length;s++)e.cleanups[s]();e.cleanups=null}e.state=0,e.context=null}function J(e){return e instanceof Error||typeof e=="string"?e:new Error("Unknown error")}function M(e){throw e=J(e),e}function X(e,s){return T(()=>e(s||{}))}function Z(e,s,t){let i=t.length,l=s.length,o=i,f=0,n=0,r=s[l-1].nextSibling,u=null;for(;f<l||n<o;){if(s[f]===t[n]){f++,n++;continue}for(;s[l-1]===t[o-1];)l--,o--;if(l===f){const a=o<i?n?t[n-1].nextSibling:t[o-n]:r;for(;n<o;)e.insertBefore(t[n++],a)}else if(o===n)for(;f<l;)(!u||!u.has(s[f]))&&s[f].remove(),f++;else if(s[f]===t[o-1]&&t[n]===s[l-1]){const a=s[--l].nextSibling;e.insertBefore(t[n++],s[f++].nextSibling),e.insertBefore(t[--o],a),s[l]=t[o]}else{if(!u){u=new Map;let h=n;for(;h<o;)u.set(t[h],h++)}const a=u.get(s[f]);if(a!=null)if(n<a&&a<o){let h=f,w=1,b;for(;++h<l&&h<o&&!((b=u.get(s[h]))==null||b!==a+w);)w++;if(w>a-n){const S=s[f];for(;n<a;)e.insertBefore(t[n++],S)}else e.replaceChild(t[n++],s[f++])}else f++;else s[f++].remove()}}}function z(e,s,t){let i;return H(l=>{i=l,s===document?e():te(s,e(),s.firstChild?null:void 0,t)}),()=>{i(),s.textContent=""}}function ee(e,s,t){const i=document.createElement("template");i.innerHTML=e;let l=i.content.firstChild;return t&&(l=l.firstChild),l}function B(e,s,t){t==null?e.removeAttribute(s):e.setAttribute(s,t)}function te(e,s,t,i){if(t!==void 0&&!i&&(i=[]),typeof s!="function")return C(e,s,i,t);_(l=>C(e,s(),l,t),i)}function C(e,s,t,i,l){for(y.context&&!t&&(t=[...e.childNodes]);typeof t=="function";)t=t();if(s===t)return t;const o=typeof s,f=i!==void 0;if(e=f&&t[0]&&t[0].parentNode||e,o==="string"||o==="number"){if(y.context)return t;if(o==="number"&&(s=s.toString()),f){let n=t[0];n&&n.nodeType===3?n.data=s:n=document.createTextNode(s),t=p(e,t,i,n)}else t!==""&&typeof t=="string"?t=e.firstChild.data=s:t=e.textContent=s}else if(s==null||o==="boolean"){if(y.context)return t;t=p(e,t,i)}else{if(o==="function")return _(()=>{let n=s();for(;typeof n=="function";)n=n();t=C(e,n,t,i)}),()=>t;if(Array.isArray(s)){const n=[],r=t&&Array.isArray(t);if(E(n,s,t,l))return _(()=>t=C(e,n,t,i,!0)),()=>t;if(y.context){if(!n.length)return t;for(let u=0;u<n.length;u++)if(n[u].parentNode)return t=n}if(n.length===0){if(t=p(e,t,i),f)return t}else r?t.length===0?D(e,n,i):Z(e,t,n):(t&&p(e),D(e,n));t=n}else if(s instanceof Node){if(y.context&&s.parentNode)return t=f?[s]:s;if(Array.isArray(t)){if(f)return t=p(e,t,i,s);p(e,t,null,s)}else t==null||t===""||!e.firstChild?e.appendChild(s):e.replaceChild(s,e.firstChild);t=s}}return t}function E(e,s,t,i){let l=!1;for(let o=0,f=s.length;o<f;o++){let n=s[o],r=t&&t[o];if(n instanceof Node)e.push(n);else if(!(n==null||n===!0||n===!1))if(Array.isArray(n))l=E(e,n,r)||l;else if(typeof n=="function")if(i){for(;typeof n=="function";)n=n();l=E(e,Array.isArray(n)?n:[n],Array.isArray(r)?r:[r])||l}else e.push(n),l=!0;else{const u=String(n);r&&r.nodeType===3&&r.data===u?e.push(r):e.push(document.createTextNode(u))}}return l}function D(e,s,t){for(let i=0,l=s.length;i<l;i++)e.insertBefore(s[i],t)}function p(e,s,t,i){if(t===void 0)return e.textContent="";const l=i||document.createTextNode("");if(s.length){let o=!1;for(let f=s.length-1;f>=0;f--){const n=s[f];if(l!==n){const r=n.parentNode===e;!o&&!f?r?e.replaceChild(l,n):e.insertBefore(l,t):r&&n.remove()}else o=!0}}else e.insertBefore(l,t);return[l]}var se="/assets/shortcuts.afb99e93.png",le="/assets/Lantern.08c54b11.svg";const ie=ee('<div class="flex-1 bg-gray-900"><header class="relative"></header><main class=""><div class="flex-1 pt-10 h-screen bg-gray-900 sm:pt-16 lg:overflow-hidden lg:pt-8 lg:pb-14"><div class="mx-auto max-w-7xl lg:px-8"><div class="lg:grid lg:grid-cols-2 lg:gap-8"><div class="px-4 mx-auto max-w-md sm:max-w-2xl sm:px-6 sm:text-center lg:flex lg:items-center lg:px-0 lg:text-left"><div class="lg:py-24"><a href="https://reflect.ridvan.org/removeyoutube" class="inline-flex items-center p-1 pr-2 text-white bg-black rounded-full hover:text-gray-200 sm:text-base lg:text-sm xl:text-base"><span class="rounded-full bg-yellow-500 px-3 py-0.5 text-sm font-semibold leading-5 text-white">3 second code</span><span class="ml-4 text-sm">by Ridv\xE1n.org</span><svg class="ml-2 w-5 h-5 text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path fill-rule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clip-rule="evenodd"></path></svg></a><h1 class="mt-4 text-4xl font-bold tracking-tight text-white sm:mt-5 sm:text-6xl lg:mt-6 xl:text-6xl"><span class="block">A better way to</span><span class="block text-yellow-400">Watch Videos</span></h1><p class="mt-3 text-base text-gray-300 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">Redirect youtube links with the share menu. No Ads. No tracking. Download video or audio. Autoplay off by default.</p><div class="mt-10 sm:mt-12"><form action="#" class="sm:mx-auto sm:max-w-xl lg:mx-0"><div class="sm:flex"><a href="https://www.icloud.com/shortcuts/24ee13ada44b48f78e0fe0186f50bb1a" class="inline-flex items-center py-2 px-4 rounded-lg space-x-2 text-white hover:shadow-2xl bg-[#1D1F57]"><img class="w-9 h-9"><div class="px-2 font-light leading-none">Download the <br><b class="text-3xl font-semibold">Shortcut</b></div></a></div><p class="mt-3 text-sm text-gray-300 sm:mt-4">Remove Youtube uses <a href="https://invidious.io/" class="font-medium text-yellow-400">Invidious</a> and the particular server being used can be manually edited once the shortcut is downloaded.</p></form></div></div></div><div class="mt-12 -mb-16 bg-black-400 sm:-mb-48 lg:relative lg:m-0"><div class="px-4 mx-auto max-w-md sm:max-w-2xl sm:px-6 lg:max-w-none lg:px-0"><img class="w-full lg:absolute lg:inset-y-0 lg:left-0 lg:h-full lg:w-auto lg:max-w-none" alt=""></div></div></div></div></div></main></div>');function ne(){return(()=>{const e=ie.cloneNode(!0),s=e.firstChild,t=s.nextSibling,i=t.firstChild,l=i.firstChild,o=l.firstChild,f=o.firstChild,n=f.firstChild,r=n.firstChild,u=r.nextSibling,a=u.nextSibling,h=a.nextSibling,w=h.firstChild,b=w.firstChild,S=b.firstChild,P=S.firstChild,k=f.nextSibling,V=k.firstChild,W=V.firstChild;return B(P,"src",se),B(W,"src",le),e})()}z(()=>X(ne,{}),document.getElementById("root"));
