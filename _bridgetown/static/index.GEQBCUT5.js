(()=>{var Hr=Object.create;var Eo=Object.defineProperty;var _r=Object.getOwnPropertyDescriptor;var Kr=Object.getOwnPropertyNames;var $r=Object.getPrototypeOf,Pr=Object.prototype.hasOwnProperty;var qr=(t,e)=>()=>(e||t((e={exports:{}}).exports,e),e.exports);var ti=(t,e,o,s)=>{if(e&&typeof e=="object"||typeof e=="function")for(let r of Kr(e))!Pr.call(t,r)&&r!==o&&Eo(t,r,{get:()=>e[r],enumerable:!(s=_r(e,r))||s.enumerable});return t};var ei=(t,e,o)=>(o=t!=null?Hr($r(t)):{},ti(e||!t||!t.__esModule?Eo(o,"default",{value:t,enumerable:!0}):o,t));var Yr=qr(()=>{function fl(t){let e=document.querySelector("body > nav sl-bar");e.setAttribute("expanded",!0);for(let o of e.querySelectorAll("sl-bar-item[expandable]"))o.classList.add("fade-in-always");return t.querySelector("sl-icon").name="system/close"}function Vr(t){let e=document.querySelector("body > nav sl-bar");e.setAttribute("expanded",!1);for(let o of e.querySelectorAll("sl-bar-item[expandable]"))o.classList.remove("fade-in-always");return t.querySelector("sl-icon").name="system/menu"}function Le(t,e){let o=t.querySelector(`a[href="${e}"]`);return new URL(o.href).pathname===location.pathname?o.setAttribute("aria-current","page"):o.setAttribute("aria-current","true")}document.addEventListener("turbo:load",()=>{let t=document.querySelector("bridgetown-search-results");t.showResults=!1,t.results=[];let e=document.querySelector("body > nav");Vr(e.querySelector("sl-button[menutoggle]"));for(let o of e.querySelectorAll("a"))o.removeAttribute("aria-current");if(location.pathname==="/")return Le(e,"/");if(location.pathname.startsWith("/docs"))return Le(e,"/docs");if(location.pathname.startsWith("/plugins"))return Le(e,"/plugins");if(location.pathname.startsWith("/community"))return Le(e,"/community");if(location.pathname.startsWith("/blog")||document.body.classList.contains("post"))return Le(e,"/blog")});window.menuHide=Vr;window.menuShow=fl});var To=["\u042F \u0432 \u0442\u043E\u043C \u0433\u043E\u0434\u0443 \u043D\u0430\u0447\u0438\u0442\u0430\u043B\u0441\u044F \u043D\u0430\u0432\u0435\u0440\u043D\u043E \u0432\u0441\u0435 \u0447\u0442\u043E \u0442\u044B \u0441\u0435\u0439\u0447\u0430\u0441 \u0447\u0438\u0442\u0430\u0435\u0448\u044C. \u042F \u0442\u0430\u043A \u0438 \u043D\u0435 \u0440\u0435\u0448\u0438\u043B\u0441\u044F \u043E\u0434\u0438\u043D.","\u0411\u043B\u0438\u043D, \u041A\u043E\u043B\u044C, \u0442\u044B \u0443\u0436\u0435 \u043F\u0440\u043E\u0437\u0440\u0435\u043B:) \u043D\u043E \u0434\u043E\u0441\u0442\u0443\u0447\u0430\u0442\u044C\u0441\u044F \u0441\u043B\u043E\u0436\u043D\u043E, \u043D\u0430\u0434\u043E \u043F\u0440\u043E\u0439\u0442\u0438 \u043F\u0443\u0442\u0435\u043C \u0438 \u043F\u043E\u043B\u0443\u0447\u0438\u0442\u044C \u043E\u043F\u044B\u0442. \u0418 \u043E\u0441\u043E\u0437\u043D\u0430\u0442\u044C. \u0410 \u043F\u0443\u0442\u044C \u0432\u0441\u0435 \u0442\u0430\u043A\u0438 \u0438\u043D\u0434\u0438\u0432\u0438\u0434\u0443\u0430\u043B\u0435\u043D. \u041C\u0435\u043D\u044F \u043F\u043E\u0434\u0432\u044B\u0442\u0430\u0449\u0438\u043B \u0442\u043E\u0447\u043D\u043E","\u0423\u0442\u0440\u043E \u0434\u043E\u0431\u0440\u043E\u0435! \u041A\u043E\u043B\u044C, \u043E\u0442\u043A\u0440\u044B\u0432\u0430\u044E \u0443\u0442\u0440\u043E\u043C \u0442\u0435\u043B\u0435\u0433\u0440\u0430\u043C \u0438 \u0431\u0435\u0433\u0443 \u0441\u043C\u043E\u0442\u0440\u0435\u0442\u044C \u0447\u0442\u043E \u0442\u044B \u043D\u0430\u043F\u0438\u0441\u0430\u043B. \u0421\u043F\u0430\u0441\u0438\u0431\u043E","\u0420\u0435\u0431\u0435\u043D\u043E\u043A \u0441\u0442\u0430\u043B \u0431\u043E\u043B\u0435\u0435 \u0441\u043F\u043E\u043A\u043E\u0439\u043D\u044B\u0439. \u041E\u043D \u0432\u0440\u043E\u0434\u0435 \u0442\u0430\u043A\u043E\u0439 \u0436\u0435, \u043D\u043E \u043F\u0440\u043E\u0441\u0442\u043E \u0440\u043E\u0432\u043D\u0435\u0435. \u0421\u043F\u0430\u0441\u0438\u0431\u043E \u{1F44D}","\u0427\u0442\u043E \u0442\u043E \u044F \u0447\u0430\u0441\u0442\u043E \u0441\u0442\u0430\u043B \u0432 \u0434\u0435\u0442\u0441\u0442\u0432\u043E \u0432\u043E\u0437\u0432\u0440\u0430\u0449\u0430\u0442\u044C\u0441\u044F","\u041C\u043D\u0435 \u0442\u043E\u043B\u044C\u043A\u043E \u043F\u043E\u0441\u043B\u0435 \u0441\u0442\u0430\u043B\u043E \u0434\u043E\u0445\u043E\u0434\u0438\u0442\u044C \u0432\u043E\u043E\u0431\u0449\u0435 \u043E \u0447\u0435\u043C \u043A\u043D\u0438\u0436\u043A\u0438","\u042F \u043D\u0435 \u043F\u043E\u043F\u0440\u043E\u0431\u043E\u0432\u0430\u043B \u0431\u044B \u0441\u0430\u043C \u0435\u0441\u043B\u0438 \u0431\u044B \u043D\u0435 \u0442\u044B, \u043D\u043E \u044F \u043D\u0435 \u0438\u043D\u0442\u0435\u0440\u0435\u0441\u043E\u0432\u0430\u043B\u0441\u044F \u0438 \u043D\u0435 \u0447\u0438\u0442\u0430\u043B \u043D\u0438\u0447\u0435\u0433\u043E \u0434\u043E \u044D\u0442\u043E\u0433\u043E \u043C\u043E\u043C\u0435\u043D\u0442\u0430.","\u0415\u0441\u043B\u0438 \u0431\u044B \u043C\u043D\u0435 \u0442\u0432\u043E\u044F \u043F\u0440\u043E\u0433\u0440\u0430\u043C\u043C\u0430 \u043D\u0430\u043F\u0440\u0438\u043C\u0435\u0440 \u043F\u043E\u043F\u0430\u043B\u0430\u0441\u044C \u043B\u0435\u0442 7-8 \u043D\u0430\u0437\u0430\u0434, \u044F \u0431\u044B \u043D\u0430\u0432\u0435\u0440\u043D\u043E \u043F\u0440\u044B\u0433\u043D\u0443\u043B \u0432 \u0441\u0430\u043C\u043E\u043B\u0435\u0442 \u0438 \u043F\u0440\u0438\u043B\u0435\u0442\u0435\u043B.","\u042F \u043A\u0430\u043A \u044D\u0442\u0430 \u0438\u0441\u0442\u043E\u0440\u0438\u044F \u043D\u0430\u0447\u0430\u043B\u0430\u0441\u044C \u0434\u0430\u0432\u043D\u043E \u043D\u0435 \u043F\u043E\u043C\u043D\u044E \u0441\u0435\u0431\u044F \u0432 \u0434\u0435\u043F\u0440\u0435\u0441\u0441\u0438\u0438.","\u0422\u0430\u043A \u0438 \u0432 \u0431\u043E\u0433\u0430 \u043F\u043E\u0432\u0435\u0440\u0438\u0448\u044C...","\u0412\u0441\u0435 \u043A\u0430\u043A \u0434\u043E\u043B\u0436\u043D\u043E \u0431\u044B\u0442\u044C \u0447\u0442\u043E \u043B\u0438?","\u0427\u0442\u043E-\u0442\u043E \u0443 \u043C\u0435\u043D\u044F \u043E\u0442 \u043E\u0434\u043D\u043E\u0433\u043E \u0440\u0430\u0437\u0433\u043E\u0432\u043E\u0440\u0430 \u0443\u0436\u0435, \u043A\u0430\u0436\u0435\u0442\u0441\u044F, \u0431\u043E\u043E\u043E\u043B\u044C\u0448\u043E\u0439 \u044D\u0444\u0444\u0435\u043A\u0442","Last year, I probably read everything you're reading now. I never dared to do it alone.","Man, you've already seen the light :) But it's hard to get through, one has to go through the journey and gain experience himself. And understand. The path is still individual. It certainly pulled me out.","Good morning! I open the notebook in the morning and rush to see what you've written. Thank you.","The child has become calmer. He's the same, but just more even-tempered. Thanks \u{1F44D}.","I've been finding myself returning to childhood quite often.","It was only afterwards that I started to grasp what the books were really about.","I wouldn't have tried it myself if it weren't for you, but I wasn't interested and hadn't read anything until that moment.","If I had come across your program like 7-8 years ago, I probably would have jumped on a plane and flown over.","Since this story started, I hardly remember feeling depressed.","This makes you believe in God...","Is everything as it should be, perhaps?","Seems like I'm already feeling a huuuge effect from just one conversation.","\u041F\u0440\u0438\u0432\u0435\u0442, \u041A\u043E\u043B\u044F! \u041E\u0448\u0435\u043B\u043E\u043C\u0438\u0442\u0435\u043B\u044C\u043D\u044B\u0439 \u043E\u043F\u044B\u0442","\u042D\u0442\u043E \u043B\u0443\u0447\u0448\u0435\u0435 \u0447\u0442\u043E \u0431\u044B\u043B\u043E \u0432 \u043C\u043E\u0435\u0439 \u0436\u0438\u0437\u043D\u0438) \u0421\u043F\u0430\u0441\u0438\u0431\u043E \u2665\uFE0F","\u041D\u0430\u0434\u0435\u044E\u0441\u044C \u043D\u0430 \u043F\u0440\u043E\u0434\u043E\u043B\u0436\u0435\u043D\u0438\u0435, \u0442\u0430\u043A \u043A\u0430\u043A \u043E\u0447\u0435\u043D\u044C \u043F\u043E\u043D\u0440\u0430\u0432\u0438\u043B\u043E\u0441\u044C.","\u041E\u0447\u0435\u043D\u044C \u043F\u043E\u043D\u0440\u0430\u0432\u0438\u043B\u043E\u0441\u044C - \u0434\u0430\u0436\u0435 \u043D\u0435 \u0442\u0435 \u0441\u043B\u043E\u0432\u0430. \u041D\u0435 \u0441 \u0447\u0435\u043C \u0441\u0440\u0430\u0432\u043D\u0438\u0442\u044C - \u0431\u044B\u043B\u043E \u0431\u044B \u0442\u043E\u0447\u043D\u0435\u0435.","\u041E\u0447\u0435\u0432\u0438\u0434\u043D\u043E\u0441\u0442\u044C \u043C\u044B\u0441\u043B\u0438, \u043A\u0430\u043A \u043C\u044B\u0441\u043B\u044C \u0444\u043E\u0440\u043C\u0438\u0440\u0443\u0435\u0442 \u043F\u043E\u043B\u0435 \u0432\u0438\u0434\u0435\u043D\u0438\u0435 \u0441\u0435\u0431\u044F \u0441\u043E \u0441\u0442\u043E\u0440\u043E\u043D\u044B, \u0432\u0441\u0442\u0440\u0435\u0447\u0430 \u0441 \u0411\u043E\u0433\u043E\u043C.","\u041B\u044E\u0431\u043E\u0432\u044C - \u043D\u0430 \u0432\u0441\u0451 \u043E\u0442\u0432\u0435\u0442 \u0432 \u0438\u0442\u043E\u0433\u0435. \u0422\u0430 \u0441\u0430\u043C\u0430\u044F, \u043A\u043E\u0442\u043E\u0440\u0430\u044F \u0442\u0432\u043E\u0440\u0438\u0442 \u043C\u0438\u0440\u044B \u0432\u043D\u0443\u0442\u0440\u0438 \u0438 \u0441\u043D\u0430\u0440\u0443\u0436\u0438.","\u041E\u0433\u0440\u043E\u043C\u043D\u0430\u044F \u0431\u043B\u0430\u0433\u043E\u0434\u0430\u0440\u043D\u043E\u0441\u0442\u044C \u0437\u0430 \u044D\u0442\u043E\u0442 \u043D\u0435\u0437\u0430\u0431\u044B\u0432\u0430\u0435\u043C\u044B\u0439 \u0438 \u0437\u043D\u0430\u0447\u0438\u043C\u044B\u0439 \u043E\u043F\u044B\u0442! \u042D\u0442\u043E \u043E\u0447\u0435\u043D\u044C \u0446\u0435\u043D\u043D\u043E!","\u041F\u043E\u043B\u044C\u0437\u0430 \u0434\u043B\u044F \u0436\u0438\u0437\u043D\u0438: \u043F\u043E\u044F\u0432\u0438\u043B\u043E\u0441\u044C \u0441\u043E\u0441\u0442\u043E\u044F\u043D\u0438\u0435 \u0431\u0435\u0437\u043E\u043F\u0430\u0441\u043D\u043E\u0441\u0442\u0438 \u043C\u0438\u0440\u0430. \u0418\u043D\u043E\u0433\u0434\u0430 \u043E\u043D\u043E \u0437\u0430\u0431\u044B\u0432\u0430\u0435\u0442\u0441\u044F, \u043D\u043E \u043E\u043D\u043E \u0435\u0441\u0442\u044C \u0432\u043E \u043C\u043D\u0435.","\u0412\u0441\u0451 \u044D\u0442\u043E \u0432\u043C\u0435\u0441\u0442\u0435 \u043F\u0435\u0440\u0435\u043C\u0435\u0441\u0442\u0438\u043B\u043E \u043C\u0435\u043D\u044F \u0432 \u0441\u043E\u0432\u0435\u0440\u0448\u0435\u043D\u043D\u043E \u043D\u043E\u0432\u043E\u0435 \u043F\u0440\u043E\u0441\u0442\u0440\u0430\u043D\u0441\u0442\u0432\u043E, \u043A\u043E\u0442\u043E\u0440\u043E\u0435 \u0438\u043C\u0435\u0435\u0442 \u043F\u043E\u0442\u0435\u043D\u0446\u0438\u0430\u043B \u0440\u0430\u0437\u0432\u0435\u0440\u043D\u0443\u0442\u044C\u0441\u044F \u0435\u0449\u0451 \u0431\u043E\u043B\u0435\u0435 \u043D\u043E\u0432\u044B\u043C \u043E\u043F\u044B\u0442\u043E\u043C \u0438 \u043A\u0430\u0447\u0435\u0441\u0442\u0432\u0435\u043D\u043D\u043E \u0434\u0440\u0443\u0433\u0438\u043C \u043F\u0440\u043E\u0436\u0438\u0432\u0430\u043D\u0438\u0435\u043C \u0441\u0435\u0431\u044F, \u043F\u0440\u043E\u044F\u0432\u043B\u0435\u043D\u0438\u0435\u043C \u0441\u0435\u0431\u044F.","\u041A\u043E\u043B\u044F, \u043F\u0440\u0438\u0432\u0435\u0442, \u0443 \u043C\u0435\u043D\u044F \u0442\u0443\u0442 \u0432\u0441\u0435 \u0441\u0442\u0430\u043D\u043E\u0432\u0438\u0442\u0441\u044F \u043D\u0430 \u0441\u0432\u043E\u0438 \u043C\u0435\u0441\u0442\u0430 \u0432 \u0433\u043E\u043B\u043E\u0432\u0435 \u0438 \u0443\u043A\u043B\u0430\u0434\u044B\u0432\u0435\u0442\u0441\u044F, \u043A\u0430\u043A \u043D\u0430\u0434\u043E! \u041F\u0440\u043E\u0446\u0435\u0441\u0441 \u0438\u0434\u0435\u0442! \u0421\u043F\u0430\u0441\u0438\u0431\u043E \u0432\u0430\u043C \u043E\u0431\u043E\u0438\u043C, \u0432\u044B \u0434\u0430\u0436\u0435 \u043D\u0435 \u043F\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043B\u044F\u0435\u0442\u0435, \u0447\u0442\u043E \u0432\u044B \u0441\u0434\u0435\u043B\u0430\u043B\u0438 \u{1F600}","\u0422\u0435\u043F\u0435\u0440\u044C \u0431\u0443\u0434\u0443 \u0432\u044B\u0431\u0438\u0432\u0430\u0442\u044C \u0441\u043B\u0435\u0434\u0443\u044E\u0449\u0443\u044E \u043A\u043E\u043C\u0430\u043D\u0434\u0438\u0440\u043E\u0432\u043A\u0443 \u0441\u044E\u0434\u0430 \u{1F600}","\u0422\u0430\u043A\u0430\u044F \u043F\u0440\u0438\u044F\u0442\u043D\u0430\u044F \u0433\u0440\u0443\u0441\u0442\u044C, \u044F \u0440\u0430\u0434\u0430, \u0447\u0442\u043E \u0432\u0441\u0435 \u0442\u0430\u043A \u043A\u043B\u0430\u0441\u0441\u043D\u043E \u043F\u043E\u043B\u0443\u0447\u0438\u043B\u043E\u0441\u044C !","\u0420\u0430\u043D\u044C\u0448\u0435 \u0441\u043B\u044B\u0448\u0430\u043B\u0430 \u043C\u043D\u0435 \u043A\u0430\u0437\u0430\u043B\u043E\u0441\u044C \u0447\u0442\u043E \u044D\u0442\u043E \u0442\u0430\u043A\u043E\u0439 \u043F\u0440\u0435\u043A\u0440\u0430\u0441\u043D\u043E\u0434\u0443\u0448\u043D\u044B\u0439 \u0431\u0440\u0435\u0434","\u0423 \u043C\u0435\u043D\u044F \u0431\u044B\u043B\u043E \u043E\u0449\u0443\u0449\u0435\u043D\u0438\u0435, \u0447\u0442\u043E \u043D\u0435\u043B\u044C\u0437\u044F \u0443\u0436\u0435 \u043D\u0438\u0447\u0435\u0433\u043E \u0432\u0435\u0440\u043D\u0443\u0442\u044C\u2026 \u0447\u0442\u043E \u0432\u0441\u0435 \u0442\u0430\u043A, \u043A\u0430\u043A \u0435\u0441\u0442\u044C, \u0438 \u0432\u044B\u0445\u043E\u0434\u0430 \u043D\u0435\u0442","\u042F \u0432\u0438\u0436\u0443 \u0447\u0442\u043E \u0435\u0449\u0435 \u0435\u0441\u0442\u044C \u0436\u0438\u0437\u043D\u044C \u0432\u043F\u0435\u0440\u0435\u0434\u0438 \u0438 \u043A\u0430\u043A\u043E\u0439 \u043E\u043D\u0430 \u0431\u0443\u0434\u0435\u0442, \u0437\u0430\u0432\u0438\u0441\u0438\u0442 \u0442\u043E\u043B\u044C\u043A\u043E \u043E\u0442 \u043C\u0435\u043D\u044F","\u041C\u043D\u0435 \u043A\u0430\u0437\u0430\u043B\u043E\u0441\u044C, \u0447\u0442\u043E \u043D\u0438\u0447\u0435\u0433\u043E \u043D\u043E\u0432\u043E\u0433\u043E \u0438 \u0438\u043D\u0442\u0435\u0440\u0435\u0441\u043D\u043E\u0433\u043E \u0443\u0436\u0435 \u043E\u0441\u043E\u0431\u043E \u043D\u0435 \u0431\u0443\u0434\u0435\u0442","\u0421\u0435\u0439\u0447\u0430\u0441 \u0442\u0430\u043A\u043E\u0435 \u0441\u043E\u0441\u0442\u043E\u044F\u043D\u0438\u0435 \u043D\u0430\u043F\u043E\u043B\u043D\u0435\u043D\u043D\u043E\u0441\u0442\u0438. \u041D\u0435 \u0445\u043E\u0447\u0435\u0442\u0441\u044F \u0440\u0430\u0441\u043F\u043B\u0435\u0441\u043A\u0430\u0442\u044C, \u043A\u043E\u0433\u0434\u0430 \u043D\u0430\u0447\u043D\u0435\u0442\u0441\u044F \u043E\u0431\u044B\u0447\u043D\u0430\u044F \u0436\u0438\u0437\u043D\u044C \u0432\u043D\u0435 \u041F\u0445\u0443\u043A\u0435\u0442\u0430 \u{1F600}","\u042F \u0434\u0430\u0436\u0435 \u043D\u0435 \u043F\u0441\u0438\u0445\u0443\u044E \u0441\u0435\u0439\u0447\u0430\u0441 \u043D\u0438 \u043E\u0442 \u0447\u0435\u0433\u043E, \u0445\u043E\u0442\u044F \u0435\u0449\u0435 \u043D\u0435\u0434\u0435\u043B\u044E \u043D\u0430\u0437\u0430\u0434 \u043F\u0441\u0438\u0445\u043E\u0432\u0430\u043B\u0430 \u0431\u044B","\u0421\u043C\u044B\u0441\u043B \u0432 \u0442\u043E\u043C, \u0447\u0442\u043E \u044F \u043D\u0435 \u043D\u0435 \u043D\u0430 \u0442\u043E \u0442\u0440\u0430\u0442\u0438\u043B\u0430 \u0441\u0432\u043E\u044E \u0441\u0438\u043B\u0443 \u0438 \u044D\u043D\u0435\u0440\u0433\u0438\u044E","\u0423 \u043C\u0435\u043D\u044F \u0432 \u0433\u043E\u043B\u043E\u0432\u0435 \u043F\u043E\u044F\u0432\u0438\u043B\u0441\u044F \u0441\u043C\u044B\u0441\u043B \u{1F600}","\u0421\u043F\u0430\u0441\u0438\u0431\u043E \u0431\u043E\u043B\u044C\u0448\u043E\u0435 \u0432\u0430\u043C \u043E\u0431\u043E\u0438\u043C! \u042D\u0442\u043E \u0431\u044B\u043B\u043E \u043D\u0438 \u0441 \u0447\u0435\u043C \u043D\u0435\u0441\u0440\u0430\u0432\u043D\u0438\u043C\u043E !!!","Hi, Nick! An astounding experience.","This is the best thing that happened in my life) Thank you \u2665\uFE0F.","Hoping for a continuation, as I really liked it.","Liked it a lot - even that's an understatement. 'Nothing to compare it with' would be more accurate.","The obviousness of thought, how thought shapes the field of self-perception from outside, meeting with God.","Love - ultimately, the answer to everything. The very one that creates worlds inside and outside.","Immense gratitude for this unforgettable and significant experience! It's very valuable!","Life benefit: a sense of world safety emerged. Sometimes it's forgotten, but it's there in me.","All of this together moved me into a completely new space, which has the potential to unfold into an even newer experience and a qualitatively different way of living and expressing myself.","Hello, Kolya, everything's falling into place in my head and settling as it should! The process is ongoing! Thank you both, you can't even imagine what you've done \u{1F600}.","Now I'll be vying for another trip here \u{1F600}.","Such pleasant sadness, I'm glad that everything turned out so great!","I used to hear and think it was such a beautifully crazy nonsense.","I had a feeling that nothing could be undone anymore\u2026 that things are as they are, with no way out.","I see now that there's still life ahead and how it will be is up to me.","I thought nothing new or interesting would happen again.","Currently, I'm in a state of fulfillment. Don't want to spill it when regular life starts outside Phuket \u{1F600}.","I'm not freaking out about anything right now, even though I would have a week ago.","The point is that I wasn't spending my strength and energy on the right things.","A sense of purpose has emerged in my mind \u{1F600}.","Thank you both so much! It was incomparable !!!","\u0412\u0441\u0435 \u043F\u0435\u0440\u0435\u0441\u0435\u043A\u0430\u0435\u0442\u0441\u044F \u0433\u0430\u0440\u043C\u043E\u043D\u0438\u0447\u043D\u043E, \u043F\u043E\u0434 \u043D\u0430\u0448\u0443 \u043D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0443 \u0434\u0430?","\u0412\u043E\u043E\u0431\u0449\u0435\u043C \u0443 \u043C\u0435\u043D\u044F \u0442\u0430\u043A\u043E\u0435: \u0447\u0443\u0432\u0441\u0442\u0432\u0443\u044E \u0441\u0435\u0431\u044F \u043C\u043E\u043B\u043E\u0434\u043E, \u043D\u0435 \u043E\u0446\u0435\u043D\u0438\u0432\u0430\u044F \u0441\u0435\u0431\u044F, \u043D\u0435 \u043D\u0443\u0436\u0434\u0430\u044E\u0441\u044C \u0432 \u043E\u043F\u0440\u0430\u0432\u0434\u0430\u043D\u0438\u0438 \u0441\u0432\u043E\u0435\u0433\u043E \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u043E\u0432\u0430\u043D\u0438\u044F.","\u0412\u0435\u0440\u043D\u0443\u043B\u043E\u0441\u044C \u044F - \u044D\u0442\u043E \u044F, \u0430 \u043D\u0435 \u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u0435 \u0434\u043B\u044F \u0440\u0430\u0431\u043E\u0442\u044B, \u0440\u0430\u0431\u043E\u0442\u044B \u043F\u043E \u0434\u043E\u043C\u0443, \u043E\u0442\u0434\u0430\u043D\u0438\u044F \u0434\u043E\u043B\u0433\u0430 \u043F\u0440\u0435\u0434\u043A\u0430\u043C.","\u041F\u0440\u043E\u0441\u0442\u043E \u043E\u043A\u0430\u0437\u0430\u043B\u043E\u0441\u044C \u0447\u0442\u043E \u044F \u0442\u0443\u0442 \u043A\u043E\u043C\u043F\u043E\u0437\u0438\u0442\u043E\u0440 \u0438 \u0434\u0438\u0440\u0438\u0436\u0435\u0440, \u0438 \u043C\u0443\u0437\u044B\u043A\u0430 \u0434\u043B\u044F \u043C\u0435\u043D\u044F. \u041F\u0440\u043E\u0441\u0442\u043E \u0436\u0438\u0432\u0443.","\u0410 \u0441\u0435\u0439\u0447\u0430\u0441 \u043E\u0442\u043F\u0443\u0441\u0442\u0438\u043B\u043E. \u0412\u0441\u0435 \u0436\u0435 \u0445\u043E\u0440\u043E\u0448\u043E. \u042F \u0442\u0430\u043A \u0436\u0435 \u0438\u0445 \u043B\u044E\u0431\u043B\u044E \u0438 \u0437\u0430\u0431\u043E\u0447\u0443\u0441\u044C, \u043D\u043E \u0431\u0435\u0437 \u0440\u0430\u0437\u0440\u044B\u0432\u0430\u043D\u0438\u044F \u0441\u0435\u0431\u044F \u043D\u0430 \u043A\u0443\u0441\u043A\u0438","\u041F\u0440\u0430\u0432 \u0442\u044B \u0431\u044B\u043B, \u043A\u043E\u0433\u0434\u0430 \u0433\u043E\u0432\u043E\u0440\u0438\u043B \u0447\u0442\u043E \u044D\u0442\u043E \u0442\u043E \u043A \u0447\u0435\u043C\u0443 \u043B\u044E\u0434\u0438 \u0433\u043E\u0434\u0430\u043C\u0438 \u0438\u0434\u0443\u0442 \u0447\u0435\u0440\u0435\u0437 \u043F\u0441\u0438\u0445\u043E\u0442\u0435\u0440\u0430\u043F\u0438\u044E \u0438 \u043F\u0440.","\u0422\u044B \u043F\u043E\u043A\u0430\u0437\u0430\u043B \u043C\u043E\u0438 true colors \u0432 \u043C\u043E\u0435\u043C \u0441\u0438\u044F\u044E\u0449\u0435\u043C \u043D\u0435\u0431\u0435","\u0411\u044B\u043B \u043C\u043E\u043C\u0435\u043D\u0442 \u043A\u043E\u0433\u0434\u0430 \u044F \u0438\u0441\u043F\u0443\u0433\u0430\u043B\u0430\u0441\u044C \u0447\u0442\u043E \u044F \u043D\u0435 \u0432\u0435\u0440\u043D\u0443\u0441\u044C \u0432 \xAB\u043D\u043E\u0440\u043C\u0430\u043B\u044C\u043D\u0443\u044E \u0436\u0438\u0437\u043D\u044C \u0441 \u043F\u044F\u0442\u0435\u0440\u043E\u0447\u043A\u043E\u0439\xBB","\u042F \u0432\u0441\u0435 \u043F\u043E\u043C\u043D\u044E!","\u041F\u043E\u0434\u043F\u0438\u0441\u0430\u043D\u0430 \u043D\u0430 \u0442\u0435\u0431\u044F \u043F\u043E\u0436\u0438\u0437\u043D\u0435\u043D\u043D\u043E!","\u041F\u0443\u0442\u0435\u0448\u0435\u0441\u0442\u0432\u0438\u0435 \u0432 \u043F\u043E\u0434\u0441\u043E\u0437\u043D\u0430\u043D\u0438\u0435.","\u0418 \u0437\u043D\u0430\u0435\u0448\u044C, \u0432\u043E\u0442 \u043E\u0449\u0443\u0449\u0435\u043D\u0438\u0435, \u0447\u0442\u043E \u0432\u0441\u0435 \u0445\u043E\u0440\u043E\u0448\u043E","\u041C\u043D\u0435 \u043A\u0430\u0436\u0435\u0442\u0441\u044F \u0443 \u043C\u0435\u043D\u044F \u0432 \u0446\u0435\u043B\u043E\u043C \u043C\u043E\u0437\u0433 \u0441\u0442\u0430\u043B \u0436\u0438\u0432\u044B\u043C \u0432 \u043F\u043B\u0430\u043D\u0435 \u0443\u043B\u0435\u0442\u043E\u0432 \u0444\u0430\u043D\u0442\u0430\u0437\u0438\u0438","Everything shapes up harmoniously, to our tuning, right?","So here's my thing: I feel young, without judging myself, not needing to justify my existence.","I returned to being me - not just an app for work, housework, or repaying ancestral debts.","Turns out, I'm the composer and conductor here, and the music is for me. Just living.","And now it's let go. Everything is fine. I still love and care for them, but without tearing myself apart.","You were right when you said that this is what people take years of psychotherapy to reach.","You revealed my true colors in my shining sky.","There was a moment when I was scared that I wouldn't return to a 'normal life with grades'.","I remember everything!","I'm subscribed to you for life!","A journey into the subconscious.","And you know, I have this feeling that everything is alright.","I think my brain in general has become alive in terms of flights of fantasy.","\u0412\u0441\u0435 \u0445\u0435\u0440\u043D\u044F, \u041D\u0438\u043A\u043E\u043B\u0430\u0439 \u0431\u044B\u043B \u043F\u0440\u0430\u0432, \u043F\u0440\u0438\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u044E\u0441\u044C \u0438\u0441\u043A\u043B\u044E\u0447\u0438\u0442\u0435\u043B\u044C\u043D\u043E \u0435\u0433\u043E \u0437\u0430\u0432\u0435\u0442\u0430\u043C","\u0415\u0449\u0435 \u0440\u0430\u0437, \u0432\u0441\u0435 \u0447\u0442\u043E \u043F\u0438\u0448\u0435\u0442 \u041D\u0438\u043A\u043E\u043B\u0430\u0439 - \u0438\u0441\u0442\u0438\u043D\u0430","\u042F \u043D\u0435 \u0432\u0435\u0440\u0438\u043B \u0432 \u0440\u0430\u0441\u0441\u043A\u0430\u0437\u044B \u041D\u0438\u043A\u043E\u043B\u0430\u044F \u043F\u043E\u0440\u044F\u0434\u043A\u0430 \u0433\u043E\u0434\u0430-\u0434\u0432\u0443\u0445","\u0412\u043E\u0431\u0449\u0435\u043C \u0432\u0441\u0435 \u0447\u0442\u043E \u043C\u043D\u0435 \u0432\u0435\u0449\u0430\u043B \u041D\u0438\u043A\u043E\u043B\u0430\u0439 - \u043F\u0440\u0430\u0432\u0434\u0430. \u0425\u043E\u0447\u0435\u0448\u044C \u0431\u044B\u0442\u044C \u043F\u0441\u0438-\u043C\u0443\u0442\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u043E\u0439 \u0441\u043E\u0431\u0430\u043A\u043E\u0439, \u0434\u0435\u043B\u0430\u0439 \u043A\u0430\u043A \u043E\u043D","\u042F \u043F\u043E \u0442\u0432\u043E\u0438\u043C \u0437\u0430\u0432\u0435\u0442\u0430\u043C \u0441\u0442\u0430\u043B \u0436\u0438\u0442\u044C","\u041B\u0443\u0447\u0448\u0435\u0435 \u0440\u0435\u0448\u0435\u043D\u0438\u0435 \u0432 \u0436\u0438\u0437\u043D\u0438","Everything else is nonsense, Nick is right, I strictly adhere to his teachings.","Again, everything Nick writes is the truth.","I didn't believe in Nick's stories for about a year or two.","In short, everything Nick told me is true. If you want to be a psi-mutated dog, do as he does.","I started living by your teachings.","The best decision in life.","\u041D\u0435\u0442, \u043D\u0435 \u0441\u0430\u043C\u043E\u0432\u043D\u0443\u0448\u0435\u043D\u0438\u0435. \u042F \u0442\u043E\u0436\u0435 \u0438\u0441\u043F\u044B\u0442\u0430\u043B \u0432\u043E\u0441\u0442\u043E\u0440\u0433 \u043E\u0442 \u0442\u043E\u0433\u043E \u043A\u0430\u043A\u043E\u0439 \u043D\u0430 \u0441\u0430\u043C\u043E\u043C \u0434\u0435\u043B\u0435 \u043C\u0438\u0440 \u043C\u043E\u0436\u0435\u0442 \u0431\u044B\u0442\u044C \u043A\u043B\u0430\u0441\u0441\u043D\u044B\u043C.","\u041F\u043E\u0441\u043B\u0435 \u044D\u0442\u043E\u0433\u043E \u043C\u043E\u044F \u043A\u0430\u0440\u0442\u0438\u043D\u0430 \u043C\u0438\u0440\u0430 \u0440\u0430\u0437\u0434\u0435\u043B\u0438\u043B\u0430\u0441\u044C \u043D\u0430 \u043C\u043D\u043E\u0436\u0435\u0441\u0442\u0432\u043E \u0444\u0430\u043A\u0442\u043E\u0440\u043E\u0432 \u043A\u043E\u0442\u043E\u0440\u044B\u0435 \u0444\u043E\u0440\u043C\u0438\u0440\u0443\u044E\u0442 \u0435\u0435.","\u0414\u043E \u044D\u0442\u043E\u0433\u043E \u044D\u0442\u043E \u0431\u044B\u043B\u0430 \u043C\u043E\u043D\u043E\u043B\u0438\u0442\u043D\u0430\u044F \u0441\u0435\u0440\u0430\u044F \u043F\u043B\u043E\u0441\u043A\u0430\u044F \u043A\u0430\u0440\u0442\u0438\u043D\u0430 \u043C\u0438\u0440\u0430.","C\u0442\u0430\u0440\u0430\u044E\u0441\u044C \u0440\u0430\u0441\u043F\u043E\u0437\u043D\u0430\u0442\u044C \u0438 \u0443\u043B\u0443\u0447\u0448\u0438\u0442\u044C \u043A\u0430\u0436\u0434\u044B\u0439 \u044D\u043B\u0435\u043C\u0435\u043D\u0442, \u043A\u043E\u0442\u043E\u0440\u044B\u0439 \u0432\u044B\u0445\u043E\u0434\u0438\u0442 \u0438\u0437 \u043F\u043E\u0434 \u043A\u043E\u043D\u0442\u0440\u043E\u043B\u044F \u0438 \u0432\u043D\u043E\u0441\u0438\u0442 \u0432 \u0436\u0435\u043B\u0430\u0435\u043C\u0443\u044E \u043C\u043D\u043E\u0439 \u043A\u0430\u0440\u0442\u0438\u043D\u0443 \u043D\u0435\u0441\u043E\u043E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0443\u044E\u0449\u0438\u0435 \u043A\u0440\u0430\u0441\u043A\u0438.","\u0418 \u044F \u0431\u044B \u044D\u0442\u043E\u0433\u043E \u043D\u0435 \u043F\u043E\u043D\u044F\u043B \u0438 \u043D\u0435 \u043E\u0441\u043E\u0437\u043D\u0430\u043B \u0441\u0435\u0439\u0447\u0430\u0441 \u0435\u0441\u043B\u0438 \u0431\u044B \u0442\u044B \u043D\u0435 \u043F\u043E\u0434\u0435\u043B\u0438\u043B\u0441\u044F \u044D\u0442\u0438\u043C","\u0417\u0430\u043D\u0438\u043C\u0430\u044E\u0441\u044C \u0438\u0441\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u0435\u043C \u043A\u0440\u0430\u0441\u043E\u043A, \u043C\u0435\u043B\u043A\u0438\u0445 \u0434\u0435\u0442\u0430\u043B\u0435\u0439 \u043C\u043E\u0435\u0439 \u043A\u0430\u0440\u0442\u0438\u043D\u044B \u041C\u0438\u0440\u0430. \u041A\u0430\u0436\u0434\u044B\u0439 \u0438\u0437 \u043D\u0430\u0441 \u2014 \u0445\u0443\u0434\u043E\u0436\u043D\u0438\u043A \u0441\u0432\u043E\u0435\u0439 \u0436\u0438\u0437\u043D\u0438)","No, it's not self-delusion. I too was thrilled by how cool the world can actually be.","After that, my worldview split into many factors that shape it.","Before, it was a monolithic, grey, flat picture of the world.","I try to recognize and improve each element that gets out of control and brings inappropriate colors into the picture of the world I desire.","And I wouldn't have understood or realized this now if you hadn't shared it.","I'm working on correcting the colors, the small details of my World picture. Each of us is the artist of our life)","Bro if you have the secret powers to sort people out, do it as much as possible I say \u{1F601}","I wish I\u2019d started sooner as well \u{1F62C} This is amazing man!","Doing amazing. Quit smoking a month ago.","Am managing to keep the alcohol at bay without much trouble.","My back spasm released itself...5 kms later I was like - whoa, this was impossible just yesterday.","hahahah I will see you in January for my second trip!","I remember the rocks and trees as bodhisatvas from that trip and now I see them everywhere, gently smiling and looking out for me.","I keep remembering you standing in the door, glowing because the trip had kicked in and saying to me - enjoy your life.","I\u2019m just focused on the homework and getting healthy.","Please write it man. There are so many books and they all find the readers they need to.","Don't remember much else about BKK than the crazy Russian \u{1F60B}","Fuck yes. Do it. Seems this is your calling.","The struggles of daily life have certainly returned but I\u2019m grateful for the perspective","I want to explore more!","Came home with such a renewed appreciation for my family and my wife","Also really interesting introspection on the stimulus I let into my life daily. Lots of meta perspective about life."].sort(()=>Math.random()-.5),jo=document.getElementById("testimonials");function oi(t){let e=document.createElement("div");e.classList.add("testimonial-box","bg-sky-100"),e.style.left=`${Math.round(Math.random()*(window.innerWidth-316))}px`,e.textContent=t,jo.appendChild(e),setTimeout(()=>{e.remove()},5900)}var Oe=0;function si(){if(Oe<To.length){let t=To[Oe];oi(t),Oe++}else Oe=0}jo&&setTimeout(()=>{setInterval(si,6e3)},6e3);var bo="";function ie(t){bo=t}function uo(t=""){if(!bo){let e=[...document.getElementsByTagName("script")],o=e.find(s=>s.hasAttribute("data-shoelace"));if(o)ie(o.getAttribute("data-shoelace"));else{let s=e.find(i=>/shoelace(\.min)?\.js($|\?)/.test(i.src)||/shoelace-autoloader(\.min)?\.js($|\?)/.test(i.src)),r="";s&&(r=s.getAttribute("src")),ie(r.split("/").slice(0,-1).join("/"))}}return bo.replace(/\/$/,"")+(t?`/${t.replace(/^\//,"")}`:"")}var Jo=Object.defineProperty,ri=Object.defineProperties,ii=Object.getOwnPropertyDescriptor,li=Object.getOwnPropertyDescriptors,Vo=Object.getOwnPropertySymbols,ai=Object.prototype.hasOwnProperty,ni=Object.prototype.propertyIsEnumerable,ho=(t,e)=>(e=Symbol[t])?e:Symbol.for("Symbol."+t),po=t=>{throw TypeError(t)},Yo=(t,e,o)=>e in t?Jo(t,e,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[e]=o,_=(t,e)=>{for(var o in e||(e={}))ai.call(e,o)&&Yo(t,o,e[o]);if(Vo)for(var o of Vo(e))ni.call(e,o)&&Yo(t,o,e[o]);return t},xt=(t,e)=>ri(t,li(e)),a=(t,e,o,s)=>{for(var r=s>1?void 0:s?ii(e,o):e,i=t.length-1,l;i>=0;i--)(l=t[i])&&(r=(s?l(e,o,r):l(r))||r);return s&&r&&Jo(e,o,r),r},Ho=(t,e,o)=>e.has(t)||po("Cannot "+o),_o=(t,e,o)=>(Ho(t,e,"read from private field"),o?o.call(t):e.get(t)),Ko=(t,e,o)=>e.has(t)?po("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,o),$o=(t,e,o,s)=>(Ho(t,e,"write to private field"),s?s.call(t,o):e.set(t,o),o),ci=function(t,e){this[0]=t,this[1]=e},Po=t=>{var e=t[ho("asyncIterator")],o=!1,s,r={};return e==null?(e=t[ho("iterator")](),s=i=>r[i]=l=>e[i](l)):(e=e.call(t),s=i=>r[i]=l=>{if(o){if(o=!1,i==="throw")throw l;return l}return o=!0,{done:!1,value:new ci(new Promise(n=>{var c=e[i](l);c instanceof Object||po("Object expected"),n(c)}),1)}}),r[ho("iterator")]=()=>r,s("next"),"throw"in e?s("throw"):r.throw=i=>{throw i},"return"in e&&s("return"),r};var Ne=t=>{var e;let{activeElement:o}=document;o&&t.contains(o)&&((e=document.activeElement)==null||e.blur())};var Ae=globalThis,We=Ae.ShadowRoot&&(Ae.ShadyCSS===void 0||Ae.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,go=Symbol(),qo=new WeakMap,le=class{constructor(e,o,s){if(this._$cssResult$=!0,s!==go)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=o}get styleSheet(){let e=this.o,o=this.t;if(We&&e===void 0){let s=o!==void 0&&o.length===1;s&&(e=qo.get(o)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),s&&qo.set(o,e))}return e}toString(){return this.cssText}},ts=t=>new le(typeof t=="string"?t:t+"",void 0,go),U=(t,...e)=>{let o=t.length===1?t[0]:e.reduce((s,r,i)=>s+(l=>{if(l._$cssResult$===!0)return l.cssText;if(typeof l=="number")return l;throw Error("Value passed to 'css' function must be a 'css' function result: "+l+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(r)+t[i+1],t[0]);return new le(o,t,go)},es=(t,e)=>{if(We)t.adoptedStyleSheets=e.map(o=>o instanceof CSSStyleSheet?o:o.styleSheet);else for(let o of e){let s=document.createElement("style"),r=Ae.litNonce;r!==void 0&&s.setAttribute("nonce",r),s.textContent=o.cssText,t.appendChild(s)}},mo=We?t=>t:t=>t instanceof CSSStyleSheet?(e=>{let o="";for(let s of e.cssRules)o+=s.cssText;return ts(o)})(t):t;var{is:di,defineProperty:bi,getOwnPropertyDescriptor:ui,getOwnPropertyNames:hi,getOwnPropertySymbols:pi,getPrototypeOf:gi}=Object,Lt=globalThis,os=Lt.trustedTypes,mi=os?os.emptyScript:"",Qi=Lt.reactiveElementPolyfillSupport,ae=(t,e)=>t,Ot={toAttribute(t,e){switch(e){case Boolean:t=t?mi:null;break;case Object:case Array:t=t==null?t:JSON.stringify(t)}return t},fromAttribute(t,e){let o=t;switch(e){case Boolean:o=t!==null;break;case Number:o=t===null?null:Number(t);break;case Object:case Array:try{o=JSON.parse(t)}catch{o=null}}return o}},Me=(t,e)=>!di(t,e),ss={attribute:!0,type:String,converter:Ot,reflect:!1,useDefault:!1,hasChanged:Me};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),Lt.litPropertyMetadata??(Lt.litPropertyMetadata=new WeakMap);var Bt=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??(this.l=[])).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,o=ss){if(o.state&&(o.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((o=Object.create(o)).wrapped=!0),this.elementProperties.set(e,o),!o.noAccessor){let s=Symbol(),r=this.getPropertyDescriptor(e,s,o);r!==void 0&&bi(this.prototype,e,r)}}static getPropertyDescriptor(e,o,s){let{get:r,set:i}=ui(this.prototype,e)??{get(){return this[o]},set(l){this[o]=l}};return{get:r,set(l){let n=r?.call(this);i?.call(this,l),this.requestUpdate(e,n,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??ss}static _$Ei(){if(this.hasOwnProperty(ae("elementProperties")))return;let e=gi(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(ae("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(ae("properties"))){let o=this.properties,s=[...hi(o),...pi(o)];for(let r of s)this.createProperty(r,o[r])}let e=this[Symbol.metadata];if(e!==null){let o=litPropertyMetadata.get(e);if(o!==void 0)for(let[s,r]of o)this.elementProperties.set(s,r)}this._$Eh=new Map;for(let[o,s]of this.elementProperties){let r=this._$Eu(o,s);r!==void 0&&this._$Eh.set(r,o)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){let o=[];if(Array.isArray(e)){let s=new Set(e.flat(1/0).reverse());for(let r of s)o.unshift(mo(r))}else e!==void 0&&o.push(mo(e));return o}static _$Eu(e,o){let s=o.attribute;return s===!1?void 0:typeof s=="string"?s:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??(this._$EO=new Set)).add(e),this.renderRoot!==void 0&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){let e=new Map,o=this.constructor.elementProperties;for(let s of o.keys())this.hasOwnProperty(s)&&(e.set(s,this[s]),delete this[s]);e.size>0&&(this._$Ep=e)}createRenderRoot(){let e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return es(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,o,s){this._$AK(e,s)}_$ET(e,o){let s=this.constructor.elementProperties.get(e),r=this.constructor._$Eu(e,s);if(r!==void 0&&s.reflect===!0){let i=(s.converter?.toAttribute!==void 0?s.converter:Ot).toAttribute(o,s.type);this._$Em=e,i==null?this.removeAttribute(r):this.setAttribute(r,i),this._$Em=null}}_$AK(e,o){let s=this.constructor,r=s._$Eh.get(e);if(r!==void 0&&this._$Em!==r){let i=s.getPropertyOptions(r),l=typeof i.converter=="function"?{fromAttribute:i.converter}:i.converter?.fromAttribute!==void 0?i.converter:Ot;this._$Em=r;let n=l.fromAttribute(o,i.type);this[r]=n??this._$Ej?.get(r)??n,this._$Em=null}}requestUpdate(e,o,s,r=!1,i){if(e!==void 0){let l=this.constructor;if(r===!1&&(i=this[e]),s??(s=l.getPropertyOptions(e)),!((s.hasChanged??Me)(i,o)||s.useDefault&&s.reflect&&i===this._$Ej?.get(e)&&!this.hasAttribute(l._$Eu(e,s))))return;this.C(e,o,s)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(e,o,{useDefault:s,reflect:r,wrapped:i},l){s&&!(this._$Ej??(this._$Ej=new Map)).has(e)&&(this._$Ej.set(e,l??o??this[e]),i!==!0||l!==void 0)||(this._$AL.has(e)||(this.hasUpdated||s||(o=void 0),this._$AL.set(e,o)),r===!0&&this._$Em!==e&&(this._$Eq??(this._$Eq=new Set)).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(o){Promise.reject(o)}let e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(let[r,i]of this._$Ep)this[r]=i;this._$Ep=void 0}let s=this.constructor.elementProperties;if(s.size>0)for(let[r,i]of s){let{wrapped:l}=i,n=this[r];l!==!0||this._$AL.has(r)||n===void 0||this.C(r,void 0,i,n)}}let e=!1,o=this._$AL;try{e=this.shouldUpdate(o),e?(this.willUpdate(o),this._$EO?.forEach(s=>s.hostUpdate?.()),this.update(o)):this._$EM()}catch(s){throw e=!1,this._$EM(),s}e&&this._$AE(o)}willUpdate(e){}_$AE(e){this._$EO?.forEach(o=>o.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&(this._$Eq=this._$Eq.forEach(o=>this._$ET(o,this[o]))),this._$EM()}updated(e){}firstUpdated(e){}};Bt.elementStyles=[],Bt.shadowRootOptions={mode:"open"},Bt[ae("elementProperties")]=new Map,Bt[ae("finalized")]=new Map,Qi?.({ReactiveElement:Bt}),(Lt.reactiveElementVersions??(Lt.reactiveElementVersions=[])).push("2.1.2");var ce=globalThis,rs=t=>t,De=ce.trustedTypes,is=De?De.createPolicy("lit-html",{createHTML:t=>t}):void 0,Bo="$lit$",Ft=`lit$${Math.random().toFixed(9).slice(2)}$`,Fo="?"+Ft,Bi=`<${Fo}>`,Gt=document,de=()=>Gt.createComment(""),be=t=>t===null||typeof t!="object"&&typeof t!="function",Uo=Array.isArray,bs=t=>Uo(t)||typeof t?.[Symbol.iterator]=="function",Qo=`[ 	
\f\r]`,ne=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,ls=/-->/g,as=/>/g,Dt=RegExp(`>|${Qo}(?:([^\\s"'>=/]+)(${Qo}*=${Qo}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),ns=/'/g,cs=/"/g,us=/^(?:script|style|textarea|title)$/i,fo=t=>(e,...o)=>({_$litType$:t,strings:e,values:o}),Q=fo(1),hs=fo(2),ps=fo(3),V=Symbol.for("lit-noChange"),M=Symbol.for("lit-nothing"),ds=new WeakMap,zt=Gt.createTreeWalker(Gt,129);function gs(t,e){if(!Uo(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return is!==void 0?is.createHTML(e):e}var ms=(t,e)=>{let o=t.length-1,s=[],r,i=e===2?"<svg>":e===3?"<math>":"",l=ne;for(let n=0;n<o;n++){let c=t[n],b,u,h=-1,g=0;for(;g<c.length&&(l.lastIndex=g,u=l.exec(c),u!==null);)g=l.lastIndex,l===ne?u[1]==="!--"?l=ls:u[1]!==void 0?l=as:u[2]!==void 0?(us.test(u[2])&&(r=RegExp("</"+u[2],"g")),l=Dt):u[3]!==void 0&&(l=Dt):l===Dt?u[0]===">"?(l=r??ne,h=-1):u[1]===void 0?h=-2:(h=l.lastIndex-u[2].length,b=u[1],l=u[3]===void 0?Dt:u[3]==='"'?cs:ns):l===cs||l===ns?l=Dt:l===ls||l===as?l=ne:(l=Dt,r=void 0);let p=l===Dt&&t[n+1].startsWith("/>")?" ":"";i+=l===ne?c+Bi:h>=0?(s.push(b),c.slice(0,h)+Bo+c.slice(h)+Ft+p):c+Ft+(h===-2?n:p)}return[gs(t,i+(t[o]||"<?>")+(e===2?"</svg>":e===3?"</math>":"")),s]},ue=class t{constructor({strings:e,_$litType$:o},s){let r;this.parts=[];let i=0,l=0,n=e.length-1,c=this.parts,[b,u]=ms(e,o);if(this.el=t.createElement(b,s),zt.currentNode=this.el.content,o===2||o===3){let h=this.el.content.firstChild;h.replaceWith(...h.childNodes)}for(;(r=zt.nextNode())!==null&&c.length<n;){if(r.nodeType===1){if(r.hasAttributes())for(let h of r.getAttributeNames())if(h.endsWith(Bo)){let g=u[l++],p=r.getAttribute(h).split(Ft),m=/([.?@])?(.*)/.exec(g);c.push({type:1,index:i,name:m[2],strings:p,ctor:m[1]==="."?Ge:m[1]==="?"?ke:m[1]==="@"?Xe:Xt}),r.removeAttribute(h)}else h.startsWith(Ft)&&(c.push({type:6,index:i}),r.removeAttribute(h));if(us.test(r.tagName)){let h=r.textContent.split(Ft),g=h.length-1;if(g>0){r.textContent=De?De.emptyScript:"";for(let p=0;p<g;p++)r.append(h[p],de()),zt.nextNode(),c.push({type:2,index:++i});r.append(h[g],de())}}}else if(r.nodeType===8)if(r.data===Fo)c.push({type:2,index:i});else{let h=-1;for(;(h=r.data.indexOf(Ft,h+1))!==-1;)c.push({type:7,index:i}),h+=Ft.length-1}i++}}static createElement(e,o){let s=Gt.createElement("template");return s.innerHTML=e,s}};function kt(t,e,o=t,s){if(e===V)return e;let r=s!==void 0?o._$Co?.[s]:o._$Cl,i=be(e)?void 0:e._$litDirective$;return r?.constructor!==i&&(r?._$AO?.(!1),i===void 0?r=void 0:(r=new i(t),r._$AT(t,o,s)),s!==void 0?(o._$Co??(o._$Co=[]))[s]=r:o._$Cl=r),r!==void 0&&(e=kt(t,r._$AS(t,e.values),r,s)),e}var ze=class{constructor(e,o){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=o}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){let{el:{content:o},parts:s}=this._$AD,r=(e?.creationScope??Gt).importNode(o,!0);zt.currentNode=r;let i=zt.nextNode(),l=0,n=0,c=s[0];for(;c!==void 0;){if(l===c.index){let b;c.type===2?b=new $t(i,i.nextSibling,this,e):c.type===1?b=new c.ctor(i,c.name,c.strings,this,e):c.type===6&&(b=new Se(i,this,e)),this._$AV.push(b),c=s[++n]}l!==c?.index&&(i=zt.nextNode(),l++)}return zt.currentNode=Gt,r}p(e){let o=0;for(let s of this._$AV)s!==void 0&&(s.strings!==void 0?(s._$AI(e,s,o),o+=s.strings.length-2):s._$AI(e[o])),o++}},$t=class t{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,o,s,r){this.type=2,this._$AH=M,this._$AN=void 0,this._$AA=e,this._$AB=o,this._$AM=s,this.options=r,this._$Cv=r?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode,o=this._$AM;return o!==void 0&&e?.nodeType===11&&(e=o.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,o=this){e=kt(this,e,o),be(e)?e===M||e==null||e===""?(this._$AH!==M&&this._$AR(),this._$AH=M):e!==this._$AH&&e!==V&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):bs(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==M&&be(this._$AH)?this._$AA.nextSibling.data=e:this.T(Gt.createTextNode(e)),this._$AH=e}$(e){let{values:o,_$litType$:s}=e,r=typeof s=="number"?this._$AC(e):(s.el===void 0&&(s.el=ue.createElement(gs(s.h,s.h[0]),this.options)),s);if(this._$AH?._$AD===r)this._$AH.p(o);else{let i=new ze(r,this),l=i.u(this.options);i.p(o),this.T(l),this._$AH=i}}_$AC(e){let o=ds.get(e.strings);return o===void 0&&ds.set(e.strings,o=new ue(e)),o}k(e){Uo(this._$AH)||(this._$AH=[],this._$AR());let o=this._$AH,s,r=0;for(let i of e)r===o.length?o.push(s=new t(this.O(de()),this.O(de()),this,this.options)):s=o[r],s._$AI(i),r++;r<o.length&&(this._$AR(s&&s._$AB.nextSibling,r),o.length=r)}_$AR(e=this._$AA.nextSibling,o){for(this._$AP?.(!1,!0,o);e!==this._$AB;){let s=rs(e).nextSibling;rs(e).remove(),e=s}}setConnected(e){this._$AM===void 0&&(this._$Cv=e,this._$AP?.(e))}},Xt=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,o,s,r,i){this.type=1,this._$AH=M,this._$AN=void 0,this.element=e,this.name=o,this._$AM=r,this.options=i,s.length>2||s[0]!==""||s[1]!==""?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=M}_$AI(e,o=this,s,r){let i=this.strings,l=!1;if(i===void 0)e=kt(this,e,o,0),l=!be(e)||e!==this._$AH&&e!==V,l&&(this._$AH=e);else{let n=e,c,b;for(e=i[0],c=0;c<i.length-1;c++)b=kt(this,n[s+c],o,c),b===V&&(b=this._$AH[c]),l||(l=!be(b)||b!==this._$AH[c]),b===M?e=M:e!==M&&(e+=(b??"")+i[c+1]),this._$AH[c]=b}l&&!r&&this.j(e)}j(e){e===M?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}},Ge=class extends Xt{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===M?void 0:e}},ke=class extends Xt{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==M)}},Xe=class extends Xt{constructor(e,o,s,r,i){super(e,o,s,r,i),this.type=5}_$AI(e,o=this){if((e=kt(this,e,o,0)??M)===V)return;let s=this._$AH,r=e===M&&s!==M||e.capture!==s.capture||e.once!==s.once||e.passive!==s.passive,i=e!==M&&(s===M||r);r&&this.element.removeEventListener(this.name,this,s),i&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}},Se=class{constructor(e,o,s){this.element=e,this.type=6,this._$AN=void 0,this._$AM=o,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(e){kt(this,e)}},Qs={M:Bo,P:Ft,A:Fo,C:1,L:ms,R:ze,D:bs,V:kt,I:$t,H:Xt,N:ke,U:Xe,B:Ge,F:Se},Fi=ce.litHtmlPolyfillSupport;Fi?.(ue,$t),(ce.litHtmlVersions??(ce.litHtmlVersions=[])).push("3.3.2");var Bs=(t,e,o)=>{let s=o?.renderBefore??e,r=s._$litPart$;if(r===void 0){let i=o?.renderBefore??null;s._$litPart$=r=new $t(e.insertBefore(de(),i),i,void 0,o??{})}return r._$AI(t),r};var he=globalThis,Nt=class extends Bt{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var o;let e=super.createRenderRoot();return(o=this.renderOptions).renderBefore??(o.renderBefore=e.firstChild),e}update(e){let o=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=Bs(o,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return V}};Nt._$litElement$=!0,Nt.finalized=!0,he.litElementHydrateSupport?.({LitElement:Nt});var Ui=he.litElementPolyfillSupport;Ui?.({LitElement:Nt});(he.litElementVersions??(he.litElementVersions=[])).push("4.2.2");var Fs=U`
  :host {
    display: inline-block;
    color: var(--sl-color-neutral-600);
  }

  .icon-button {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    background: none;
    border: none;
    border-radius: var(--sl-border-radius-medium);
    font-size: inherit;
    color: inherit;
    padding: var(--sl-spacing-x-small);
    cursor: pointer;
    transition: var(--sl-transition-x-fast) color;
    -webkit-appearance: none;
  }

  .icon-button:hover:not(.icon-button--disabled),
  .icon-button:focus-visible:not(.icon-button--disabled) {
    color: var(--sl-color-primary-600);
  }

  .icon-button:active:not(.icon-button--disabled) {
    color: var(--sl-color-primary-700);
  }

  .icon-button:focus {
    outline: none;
  }

  .icon-button--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .icon-button:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .icon-button__icon {
    pointer-events: none;
  }
`;var fi={name:"default",resolver:t=>uo(`assets/icons/${t}.svg`)},Us=fi;var fs={caret:`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <polyline points="6 9 12 15 18 9"></polyline>
    </svg>
  `,check:`
    <svg part="checked-icon" class="checkbox__icon" viewBox="0 0 16 16">
      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round">
        <g stroke="currentColor">
          <g transform="translate(3.428571, 3.428571)">
            <path d="M0,5.71428571 L3.42857143,9.14285714"></path>
            <path d="M9.14285714,0 L3.42857143,9.14285714"></path>
          </g>
        </g>
      </g>
    </svg>
  `,"chevron-down":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
    </svg>
  `,"chevron-left":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
    </svg>
  `,"chevron-right":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
    </svg>
  `,copy:`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-copy" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M4 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V2Zm2-1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H6ZM2 5a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1h1v1a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h1v1H2Z"/>
    </svg>
  `,eye:`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye" viewBox="0 0 16 16">
      <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"/>
      <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"/>
    </svg>
  `,"eye-slash":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye-slash" viewBox="0 0 16 16">
      <path d="M13.359 11.238C15.06 9.72 16 8 16 8s-3-5.5-8-5.5a7.028 7.028 0 0 0-2.79.588l.77.771A5.944 5.944 0 0 1 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.134 13.134 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755-.165.165-.337.328-.517.486l.708.709z"/>
      <path d="M11.297 9.176a3.5 3.5 0 0 0-4.474-4.474l.823.823a2.5 2.5 0 0 1 2.829 2.829l.822.822zm-2.943 1.299.822.822a3.5 3.5 0 0 1-4.474-4.474l.823.823a2.5 2.5 0 0 0 2.829 2.829z"/>
      <path d="M3.35 5.47c-.18.16-.353.322-.518.487A13.134 13.134 0 0 0 1.172 8l.195.288c.335.48.83 1.12 1.465 1.755C4.121 11.332 5.881 12.5 8 12.5c.716 0 1.39-.133 2.02-.36l.77.772A7.029 7.029 0 0 1 8 13.5C3 13.5 0 8 0 8s.939-1.721 2.641-3.238l.708.709zm10.296 8.884-12-12 .708-.708 12 12-.708.708z"/>
    </svg>
  `,eyedropper:`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eyedropper" viewBox="0 0 16 16">
      <path d="M13.354.646a1.207 1.207 0 0 0-1.708 0L8.5 3.793l-.646-.647a.5.5 0 1 0-.708.708L8.293 5l-7.147 7.146A.5.5 0 0 0 1 12.5v1.793l-.854.853a.5.5 0 1 0 .708.707L1.707 15H3.5a.5.5 0 0 0 .354-.146L11 7.707l1.146 1.147a.5.5 0 0 0 .708-.708l-.647-.646 3.147-3.146a1.207 1.207 0 0 0 0-1.708l-2-2zM2 12.707l7-7L10.293 7l-7 7H2v-1.293z"></path>
    </svg>
  `,"grip-vertical":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-grip-vertical" viewBox="0 0 16 16">
      <path d="M7 2a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM7 5a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM7 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-3 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-3 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"></path>
    </svg>
  `,indeterminate:`
    <svg part="indeterminate-icon" class="checkbox__icon" viewBox="0 0 16 16">
      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round">
        <g stroke="currentColor" stroke-width="2">
          <g transform="translate(2.285714, 6.857143)">
            <path d="M10.2857143,1.14285714 L1.14285714,1.14285714"></path>
          </g>
        </g>
      </g>
    </svg>
  `,"person-fill":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-fill" viewBox="0 0 16 16">
      <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
    </svg>
  `,"play-fill":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-play-fill" viewBox="0 0 16 16">
      <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"></path>
    </svg>
  `,"pause-fill":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pause-fill" viewBox="0 0 16 16">
      <path d="M5.5 3.5A1.5 1.5 0 0 1 7 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5zm5 0A1.5 1.5 0 0 1 12 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5z"></path>
    </svg>
  `,radio:`
    <svg part="checked-icon" class="radio__icon" viewBox="0 0 16 16">
      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g fill="currentColor">
          <circle cx="8" cy="8" r="3.42857143"></circle>
        </g>
      </g>
    </svg>
  `,"star-fill":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
    </svg>
  `,"x-lg":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
      <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
    </svg>
  `,"x-circle-fill":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-circle-fill" viewBox="0 0 16 16">
      <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"></path>
    </svg>
  `},Ci={name:"system",resolver:t=>t in fs?`data:image/svg+xml,${encodeURIComponent(fs[t])}`:""},Cs=Ci;var Re=[Us,Cs],Ze=[];function ws(t){Ze.push(t)}function Is(t){Ze=Ze.filter(e=>e!==t)}function Co(t){return Re.find(e=>e.name===t)}function Ee(t,e){ys(t),Re.push({name:t,resolver:e.resolver,mutator:e.mutator,spriteSheet:e.spriteSheet}),Ze.forEach(o=>{o.library===t&&o.setIcon()})}function ys(t){Re=Re.filter(e=>e.name!==t)}var vs=U`
  :host {
    display: inline-block;
    width: 1em;
    height: 1em;
    box-sizing: content-box !important;
  }

  svg {
    display: block;
    height: 100%;
    width: 100%;
  }
`;function W(t,e){let o=_({waitUntilFirstUpdate:!1},e);return(s,r)=>{let{update:i}=s,l=Array.isArray(t)?t:[t];s.update=function(n){l.forEach(c=>{let b=c;if(n.has(b)){let u=n.get(b),h=this[b];u!==h&&(!o.waitUntilFirstUpdate||this.hasUpdated)&&this[r](u,h)}}),i.call(this,n)}}}var y=U`
  :host {
    box-sizing: border-box;
  }

  :host *,
  :host *::before,
  :host *::after {
    box-sizing: inherit;
  }

  [hidden] {
    display: none !important;
  }
`;var wi={attribute:!0,type:String,converter:Ot,reflect:!1,hasChanged:Me},Ii=(t=wi,e,o)=>{let{kind:s,metadata:r}=o,i=globalThis.litPropertyMetadata.get(r);if(i===void 0&&globalThis.litPropertyMetadata.set(r,i=new Map),s==="setter"&&((t=Object.create(t)).wrapped=!0),i.set(o.name,t),s==="accessor"){let{name:l}=o;return{set(n){let c=e.get.call(this);e.set.call(this,n),this.requestUpdate(l,c,t,!0,n)},init(n){return n!==void 0&&this.C(l,void 0,t,n),n}}}if(s==="setter"){let{name:l}=o;return function(n){let c=this[l];e.call(this,n),this.requestUpdate(l,c,t,!0,n)}}throw Error("Unsupported decorator location: "+s)};function d(t){return(e,o)=>typeof o=="object"?Ii(t,e,o):((s,r,i)=>{let l=r.hasOwnProperty(i);return r.constructor.createProperty(i,s),l?Object.getOwnPropertyDescriptor(r,i):void 0})(t,e,o)}function T(t){return d({...t,state:!0,attribute:!1})}var St=(t,e,o)=>(o.configurable=!0,o.enumerable=!0,Reflect.decorate&&typeof e!="object"&&Object.defineProperty(t,e,o),o);function v(t,e){return(o,s,r)=>{let i=l=>l.renderRoot?.querySelector(t)??null;if(e){let{get:l,set:n}=typeof s=="object"?o:r??(()=>{let c=Symbol();return{get(){return this[c]},set(b){this[c]=b}}})();return St(o,s,{get(){let c=l.call(this);return c===void 0&&(c=i(this),(c!==null||this.hasUpdated)&&n.call(this,c)),c}})}return St(o,s,{get(){return i(this)}})}}var Te,f=class extends Nt{constructor(){super(),Ko(this,Te,!1),this.initialReflectedProperties=new Map,Object.entries(this.constructor.dependencies).forEach(([t,e])=>{this.constructor.define(t,e)})}emit(t,e){let o=new CustomEvent(t,_({bubbles:!0,cancelable:!1,composed:!0,detail:{}},e));return this.dispatchEvent(o),o}static define(t,e=this,o={}){let s=customElements.get(t);if(!s){try{customElements.define(t,e,o)}catch{customElements.define(t,class extends e{},o)}return}let r=" (unknown version)",i=r;"version"in e&&e.version&&(r=" v"+e.version),"version"in s&&s.version&&(i=" v"+s.version),!(r&&i&&r===i)&&console.warn(`Attempted to register <${t}>${r}, but <${t}>${i} has already been registered.`)}attributeChangedCallback(t,e,o){_o(this,Te)||(this.constructor.elementProperties.forEach((s,r)=>{s.reflect&&this[r]!=null&&this.initialReflectedProperties.set(r,this[r])}),$o(this,Te,!0)),super.attributeChangedCallback(t,e,o)}willUpdate(t){super.willUpdate(t),this.initialReflectedProperties.forEach((e,o)=>{t.has(o)&&this[o]==null&&(this[o]=e)})}};Te=new WeakMap;f.version="2.20.1";f.dependencies={};a([d()],f.prototype,"dir",2);a([d()],f.prototype,"lang",2);var{I:Ja}=Qs;var xs=(t,e)=>e===void 0?t?._$litType$!==void 0:t?._$litType$===e;var je=t=>t.strings===void 0;var yi={},Ls=(t,e=yi)=>t._$AH=e;var pe=Symbol(),Ve=Symbol(),wo,Io=new Map,z=class extends f{constructor(){super(...arguments),this.initialRender=!1,this.svg=null,this.label="",this.library="default"}async resolveIcon(t,e){var o;let s;if(e?.spriteSheet)return this.svg=Q`<svg part="svg">
        <use part="use" href="${t}"></use>
      </svg>`,this.svg;try{if(s=await fetch(t,{mode:"cors"}),!s.ok)return s.status===410?pe:Ve}catch{return Ve}try{let r=document.createElement("div");r.innerHTML=await s.text();let i=r.firstElementChild;if(((o=i?.tagName)==null?void 0:o.toLowerCase())!=="svg")return pe;wo||(wo=new DOMParser);let n=wo.parseFromString(i.outerHTML,"text/html").body.querySelector("svg");return n?(n.part.add("svg"),document.adoptNode(n)):pe}catch{return pe}}connectedCallback(){super.connectedCallback(),ws(this)}firstUpdated(){this.initialRender=!0,this.setIcon()}disconnectedCallback(){super.disconnectedCallback(),Is(this)}getIconSource(){let t=Co(this.library);return this.name&&t?{url:t.resolver(this.name),fromLibrary:!0}:{url:this.src,fromLibrary:!1}}handleLabelChange(){typeof this.label=="string"&&this.label.length>0?(this.setAttribute("role","img"),this.setAttribute("aria-label",this.label),this.removeAttribute("aria-hidden")):(this.removeAttribute("role"),this.removeAttribute("aria-label"),this.setAttribute("aria-hidden","true"))}async setIcon(){var t;let{url:e,fromLibrary:o}=this.getIconSource(),s=o?Co(this.library):void 0;if(!e){this.svg=null;return}let r=Io.get(e);if(r||(r=this.resolveIcon(e,s),Io.set(e,r)),!this.initialRender)return;let i=await r;if(i===Ve&&Io.delete(e),e===this.getIconSource().url){if(xs(i)){if(this.svg=i,s){await this.updateComplete;let l=this.shadowRoot.querySelector("[part='svg']");typeof s.mutator=="function"&&l&&s.mutator(l)}return}switch(i){case Ve:case pe:this.svg=null,this.emit("sl-error");break;default:this.svg=i.cloneNode(!0),(t=s?.mutator)==null||t.call(s,this.svg),this.emit("sl-load")}}}render(){return this.svg}};z.styles=[y,vs];a([T()],z.prototype,"svg",2);a([d({reflect:!0})],z.prototype,"name",2);a([d()],z.prototype,"src",2);a([d()],z.prototype,"label",2);a([d({reflect:!0})],z.prototype,"library",2);a([W("label")],z.prototype,"handleLabelChange",1);a([W(["name","src","library"])],z.prototype,"setIcon",1);var it={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},Rt=t=>(...e)=>({_$litDirective$:t,values:e}),At=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,o,s){this._$Ct=e,this._$AM=o,this._$Ci=s}_$AS(e,o){return this.update(e,o)}update(e,o){return this.render(...o)}};var A=Rt(class extends At{constructor(t){if(super(t),t.type!==it.ATTRIBUTE||t.name!=="class"||t.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return" "+Object.keys(t).filter(e=>t[e]).join(" ")+" "}update(t,[e]){if(this.st===void 0){this.st=new Set,t.strings!==void 0&&(this.nt=new Set(t.strings.join(" ").split(/\s/).filter(s=>s!=="")));for(let s in e)e[s]&&!this.nt?.has(s)&&this.st.add(s);return this.render(e)}let o=t.element.classList;for(let s of this.st)s in e||(o.remove(s),this.st.delete(s));for(let s in e){let r=!!e[s];r===this.st.has(s)||this.nt?.has(s)||(r?(o.add(s),this.st.add(s)):(o.remove(s),this.st.delete(s)))}return V}});var Ns=Symbol.for(""),vi=t=>{if(t?.r===Ns)return t?._$litStatic$};var Pt=(t,...e)=>({_$litStatic$:e.reduce((o,s,r)=>o+(i=>{if(i._$litStatic$!==void 0)return i._$litStatic$;throw Error(`Value passed to 'literal' function must be a 'literal' result: ${i}. Use 'unsafeStatic' to pass non-literal values, but
            take care to ensure page security.`)})(s)+t[r+1],t[0]),r:Ns}),Os=new Map,yo=t=>(e,...o)=>{let s=o.length,r,i,l=[],n=[],c,b=0,u=!1;for(;b<s;){for(c=e[b];b<s&&(i=o[b],(r=vi(i))!==void 0);)c+=r+e[++b],u=!0;b!==s&&n.push(i),l.push(c),b++}if(b===s&&l.push(e[s]),u){let h=l.join("$$lit$$");(e=Os.get(h))===void 0&&(l.raw=l,Os.set(h,e=l)),o=n}return t(e,...o)},qt=yo(Q),Qn=yo(hs),Bn=yo(ps);var B=t=>t??M;var X=class extends f{constructor(){super(...arguments),this.hasFocus=!1,this.label="",this.disabled=!1}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleClick(t){this.disabled&&(t.preventDefault(),t.stopPropagation())}click(){this.button.click()}focus(t){this.button.focus(t)}blur(){this.button.blur()}render(){let t=!!this.href,e=t?Pt`a`:Pt`button`;return qt`
      <${e}
        part="base"
        class=${A({"icon-button":!0,"icon-button--disabled":!t&&this.disabled,"icon-button--focused":this.hasFocus})}
        ?disabled=${B(t?void 0:this.disabled)}
        type=${B(t?void 0:"button")}
        href=${B(t?this.href:void 0)}
        target=${B(t?this.target:void 0)}
        download=${B(t?this.download:void 0)}
        rel=${B(t&&this.target?"noreferrer noopener":void 0)}
        role=${B(t?void 0:"button")}
        aria-disabled=${this.disabled?"true":"false"}
        aria-label="${this.label}"
        tabindex=${this.disabled?"-1":"0"}
        @blur=${this.handleBlur}
        @focus=${this.handleFocus}
        @click=${this.handleClick}
      >
        <sl-icon
          class="icon-button__icon"
          name=${B(this.name)}
          library=${B(this.library)}
          src=${B(this.src)}
          aria-hidden="true"
        ></sl-icon>
      </${e}>
    `}};X.styles=[y,Fs];X.dependencies={"sl-icon":z};a([v(".icon-button")],X.prototype,"button",2);a([T()],X.prototype,"hasFocus",2);a([d()],X.prototype,"name",2);a([d()],X.prototype,"library",2);a([d()],X.prototype,"src",2);a([d()],X.prototype,"href",2);a([d()],X.prototype,"target",2);a([d()],X.prototype,"download",2);a([d()],X.prototype,"label",2);a([d({type:Boolean,reflect:!0})],X.prototype,"disabled",2);var Ws=new Map,xi=new WeakMap;function Li(t){return t??{keyframes:[],options:{duration:0}}}function As(t,e){return e.toLowerCase()==="rtl"?{keyframes:t.rtlKeyframes||t.keyframes,options:t.options}:t}function P(t,e){Ws.set(t,Li(e))}function q(t,e,o){let s=xi.get(t);if(s?.[e])return As(s[e],o.dir);let r=Ws.get(e);return r?As(r,o.dir):{keyframes:[],options:{duration:0}}}function Ut(t,e){return new Promise(o=>{function s(r){r.target===t&&(t.removeEventListener(e,s),o())}t.addEventListener(e,s)})}function tt(t,e,o){return new Promise(s=>{if(o?.duration===1/0)throw new Error("Promise-based animations must be finite.");let r=t.animate(e,xt(_({},o),{duration:Oi()?0:o.duration}));r.addEventListener("cancel",s,{once:!0}),r.addEventListener("finish",s,{once:!0})})}function Oi(){return window.matchMedia("(prefers-reduced-motion: reduce)").matches}function lt(t){return Promise.all(t.getAnimations().map(e=>new Promise(o=>{e.cancel(),requestAnimationFrame(o)})))}var Y=class{constructor(t,...e){this.slotNames=[],this.handleSlotChange=o=>{let s=o.target;(this.slotNames.includes("[default]")&&!s.name||s.name&&this.slotNames.includes(s.name))&&this.host.requestUpdate()},(this.host=t).addController(this),this.slotNames=e}hasDefaultSlot(){return[...this.host.childNodes].some(t=>{if(t.nodeType===t.TEXT_NODE&&t.textContent.trim()!=="")return!0;if(t.nodeType===t.ELEMENT_NODE){let e=t;if(e.tagName.toLowerCase()==="sl-visually-hidden")return!1;if(!e.hasAttribute("slot"))return!0}return!1})}hasNamedSlot(t){return this.host.querySelector(`:scope > [slot="${t}"]`)!==null}test(t){return t==="[default]"?this.hasDefaultSlot():this.hasNamedSlot(t)}hostConnected(){this.host.shadowRoot.addEventListener("slotchange",this.handleSlotChange)}hostDisconnected(){this.host.shadowRoot.removeEventListener("slotchange",this.handleSlotChange)}};function Ms(t){if(!t)return"";let e=t.assignedNodes({flatten:!0}),o="";return[...e].forEach(s=>{s.nodeType===Node.TEXT_NODE&&(o+=s.textContent)}),o}var vo=new Set,te=new Map,Zt,xo="ltr",Lo="en",Ds=typeof MutationObserver<"u"&&typeof document<"u"&&typeof document.documentElement<"u";if(Ds){let t=new MutationObserver(zs);xo=document.documentElement.dir||"ltr",Lo=document.documentElement.lang||navigator.language,t.observe(document.documentElement,{attributes:!0,attributeFilter:["dir","lang"]})}function ge(...t){t.map(e=>{let o=e.$code.toLowerCase();te.has(o)?te.set(o,Object.assign(Object.assign({},te.get(o)),e)):te.set(o,e),Zt||(Zt=e)}),zs()}function zs(){Ds&&(xo=document.documentElement.dir||"ltr",Lo=document.documentElement.lang||navigator.language),[...vo.keys()].map(t=>{typeof t.requestUpdate=="function"&&t.requestUpdate()})}var Ye=class{constructor(e){this.host=e,this.host.addController(this)}hostConnected(){vo.add(this.host)}hostDisconnected(){vo.delete(this.host)}dir(){return`${this.host.dir||xo}`.toLowerCase()}lang(){return`${this.host.lang||Lo}`.toLowerCase()}getTranslationData(e){var o,s;let r=new Intl.Locale(e.replace(/_/g,"-")),i=r?.language.toLowerCase(),l=(s=(o=r?.region)===null||o===void 0?void 0:o.toLowerCase())!==null&&s!==void 0?s:"",n=te.get(`${i}-${l}`),c=te.get(i);return{locale:r,language:i,region:l,primary:n,secondary:c}}exists(e,o){var s;let{primary:r,secondary:i}=this.getTranslationData((s=o.lang)!==null&&s!==void 0?s:this.lang());return o=Object.assign({includeFallback:!1},o),!!(r&&r[e]||i&&i[e]||o.includeFallback&&Zt&&Zt[e])}term(e,...o){let{primary:s,secondary:r}=this.getTranslationData(this.lang()),i;if(s&&s[e])i=s[e];else if(r&&r[e])i=r[e];else if(Zt&&Zt[e])i=Zt[e];else return console.error(`No translation found for: ${String(e)}`),String(e);return typeof i=="function"?i(...o):i}date(e,o){return e=new Date(e),new Intl.DateTimeFormat(this.lang(),o).format(e)}number(e,o){return e=Number(e),isNaN(e)?"":new Intl.NumberFormat(this.lang(),o).format(e)}relativeTime(e,o,s){return new Intl.RelativeTimeFormat(this.lang(),s).format(e,o)}};var Gs={$code:"en",$name:"English",$dir:"ltr",carousel:"Carousel",clearEntry:"Clear entry",close:"Close",copied:"Copied",copy:"Copy",currentValue:"Current value",error:"Error",goToSlide:(t,e)=>`Go to slide ${t} of ${e}`,hidePassword:"Hide password",loading:"Loading",nextSlide:"Next slide",numOptionsSelected:t=>t===0?"No options selected":t===1?"1 option selected":`${t} options selected`,previousSlide:"Previous slide",progress:"Progress",remove:"Remove",resize:"Resize",scrollToEnd:"Scroll to end",scrollToStart:"Scroll to start",selectAColorFromTheScreen:"Select a color from the screen",showPassword:"Show password",slideNum:t=>`Slide ${t}`,toggleColorFormat:"Toggle color format"};ge(Gs);var ks=Gs;var G=class extends Ye{};ge(ks);var Xs=U`
  :host {
    display: contents;

    /* For better DX, we'll reset the margin here so the base part can inherit it */
    margin: 0;
  }

  .alert {
    position: relative;
    display: flex;
    align-items: stretch;
    background-color: var(--sl-panel-background-color);
    border: solid var(--sl-panel-border-width) var(--sl-panel-border-color);
    border-top-width: calc(var(--sl-panel-border-width) * 3);
    border-radius: var(--sl-border-radius-medium);
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-small);
    font-weight: var(--sl-font-weight-normal);
    line-height: 1.6;
    color: var(--sl-color-neutral-700);
    margin: inherit;
    overflow: hidden;
  }

  .alert:not(.alert--has-icon) .alert__icon,
  .alert:not(.alert--closable) .alert__close-button {
    display: none;
  }

  .alert__icon {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    font-size: var(--sl-font-size-large);
    padding-inline-start: var(--sl-spacing-large);
  }

  .alert--has-countdown {
    border-bottom: none;
  }

  .alert--primary {
    border-top-color: var(--sl-color-primary-600);
  }

  .alert--primary .alert__icon {
    color: var(--sl-color-primary-600);
  }

  .alert--success {
    border-top-color: var(--sl-color-success-600);
  }

  .alert--success .alert__icon {
    color: var(--sl-color-success-600);
  }

  .alert--neutral {
    border-top-color: var(--sl-color-neutral-600);
  }

  .alert--neutral .alert__icon {
    color: var(--sl-color-neutral-600);
  }

  .alert--warning {
    border-top-color: var(--sl-color-warning-600);
  }

  .alert--warning .alert__icon {
    color: var(--sl-color-warning-600);
  }

  .alert--danger {
    border-top-color: var(--sl-color-danger-600);
  }

  .alert--danger .alert__icon {
    color: var(--sl-color-danger-600);
  }

  .alert__message {
    flex: 1 1 auto;
    display: block;
    padding: var(--sl-spacing-large);
    overflow: hidden;
  }

  .alert__close-button {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    font-size: var(--sl-font-size-medium);
    margin-inline-end: var(--sl-spacing-medium);
    align-self: center;
  }

  .alert__countdown {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: calc(var(--sl-panel-border-width) * 3);
    background-color: var(--sl-panel-border-color);
    display: flex;
  }

  .alert__countdown--ltr {
    justify-content: flex-end;
  }

  .alert__countdown .alert__countdown-elapsed {
    height: 100%;
    width: 0;
  }

  .alert--primary .alert__countdown-elapsed {
    background-color: var(--sl-color-primary-600);
  }

  .alert--success .alert__countdown-elapsed {
    background-color: var(--sl-color-success-600);
  }

  .alert--neutral .alert__countdown-elapsed {
    background-color: var(--sl-color-neutral-600);
  }

  .alert--warning .alert__countdown-elapsed {
    background-color: var(--sl-color-warning-600);
  }

  .alert--danger .alert__countdown-elapsed {
    background-color: var(--sl-color-danger-600);
  }

  .alert__timer {
    display: none;
  }
`;var K=class Et extends f{constructor(){super(...arguments),this.hasSlotController=new Y(this,"icon","suffix"),this.localize=new G(this),this.open=!1,this.closable=!1,this.variant="primary",this.duration=1/0,this.remainingTime=this.duration}static get toastStack(){return this.currentToastStack||(this.currentToastStack=Object.assign(document.createElement("div"),{className:"sl-toast-stack"})),this.currentToastStack}firstUpdated(){this.base.hidden=!this.open}restartAutoHide(){this.handleCountdownChange(),clearTimeout(this.autoHideTimeout),clearInterval(this.remainingTimeInterval),this.open&&this.duration<1/0&&(this.autoHideTimeout=window.setTimeout(()=>this.hide(),this.duration),this.remainingTime=this.duration,this.remainingTimeInterval=window.setInterval(()=>{this.remainingTime-=100},100))}pauseAutoHide(){var e;(e=this.countdownAnimation)==null||e.pause(),clearTimeout(this.autoHideTimeout),clearInterval(this.remainingTimeInterval)}resumeAutoHide(){var e;this.duration<1/0&&(this.autoHideTimeout=window.setTimeout(()=>this.hide(),this.remainingTime),this.remainingTimeInterval=window.setInterval(()=>{this.remainingTime-=100},100),(e=this.countdownAnimation)==null||e.play())}handleCountdownChange(){if(this.open&&this.duration<1/0&&this.countdown){let{countdownElement:e}=this,o="100%",s="0";this.countdownAnimation=e.animate([{width:o},{width:s}],{duration:this.duration,easing:"linear"})}}handleCloseClick(){this.hide()}async handleOpenChange(){if(this.open){this.emit("sl-show"),this.duration<1/0&&this.restartAutoHide(),await lt(this.base),this.base.hidden=!1;let{keyframes:e,options:o}=q(this,"alert.show",{dir:this.localize.dir()});await tt(this.base,e,o),this.emit("sl-after-show")}else{Ne(this),this.emit("sl-hide"),clearTimeout(this.autoHideTimeout),clearInterval(this.remainingTimeInterval),await lt(this.base);let{keyframes:e,options:o}=q(this,"alert.hide",{dir:this.localize.dir()});await tt(this.base,e,o),this.base.hidden=!0,this.emit("sl-after-hide")}}handleDurationChange(){this.restartAutoHide()}async show(){if(!this.open)return this.open=!0,Ut(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,Ut(this,"sl-after-hide")}async toast(){return new Promise(e=>{this.handleCountdownChange(),Et.toastStack.parentElement===null&&document.body.append(Et.toastStack),Et.toastStack.appendChild(this),requestAnimationFrame(()=>{this.clientWidth,this.show()}),this.addEventListener("sl-after-hide",()=>{Et.toastStack.removeChild(this),e(),Et.toastStack.querySelector("sl-alert")===null&&Et.toastStack.remove()},{once:!0})})}render(){return Q`
      <div
        part="base"
        class=${A({alert:!0,"alert--open":this.open,"alert--closable":this.closable,"alert--has-countdown":!!this.countdown,"alert--has-icon":this.hasSlotController.test("icon"),"alert--primary":this.variant==="primary","alert--success":this.variant==="success","alert--neutral":this.variant==="neutral","alert--warning":this.variant==="warning","alert--danger":this.variant==="danger"})}
        role="alert"
        aria-hidden=${this.open?"false":"true"}
        @mouseenter=${this.pauseAutoHide}
        @mouseleave=${this.resumeAutoHide}
      >
        <div part="icon" class="alert__icon">
          <slot name="icon"></slot>
        </div>

        <div part="message" class="alert__message" aria-live="polite">
          <slot></slot>
        </div>

        ${this.closable?Q`
              <sl-icon-button
                part="close-button"
                exportparts="base:close-button__base"
                class="alert__close-button"
                name="x-lg"
                library="system"
                label=${this.localize.term("close")}
                @click=${this.handleCloseClick}
              ></sl-icon-button>
            `:""}

        <div role="timer" class="alert__timer">${this.remainingTime}</div>

        ${this.countdown?Q`
              <div
                class=${A({alert__countdown:!0,"alert__countdown--ltr":this.countdown==="ltr"})}
              >
                <div class="alert__countdown-elapsed"></div>
              </div>
            `:""}
      </div>
    `}};K.styles=[y,Xs];K.dependencies={"sl-icon-button":X};a([v('[part~="base"]')],K.prototype,"base",2);a([v(".alert__countdown-elapsed")],K.prototype,"countdownElement",2);a([d({type:Boolean,reflect:!0})],K.prototype,"open",2);a([d({type:Boolean,reflect:!0})],K.prototype,"closable",2);a([d({reflect:!0})],K.prototype,"variant",2);a([d({type:Number})],K.prototype,"duration",2);a([d({type:String,reflect:!0})],K.prototype,"countdown",2);a([T()],K.prototype,"remainingTime",2);a([W("open",{waitUntilFirstUpdate:!0})],K.prototype,"handleOpenChange",1);a([W("duration")],K.prototype,"handleDurationChange",1);var Ss=K;P("alert.show",{keyframes:[{opacity:0,scale:.8},{opacity:1,scale:1}],options:{duration:250,easing:"ease"}});P("alert.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.8}],options:{duration:250,easing:"ease"}});Ss.define("sl-alert");var Rs=U`
  :host {
    display: inline-block;

    --size: 3rem;
  }

  .avatar {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    position: relative;
    width: var(--size);
    height: var(--size);
    background-color: var(--sl-color-neutral-400);
    font-family: var(--sl-font-sans);
    font-size: calc(var(--size) * 0.5);
    font-weight: var(--sl-font-weight-normal);
    color: var(--sl-color-neutral-0);
    user-select: none;
    -webkit-user-select: none;
    vertical-align: middle;
  }

  .avatar--circle,
  .avatar--circle .avatar__image {
    border-radius: var(--sl-border-radius-circle);
  }

  .avatar--rounded,
  .avatar--rounded .avatar__image {
    border-radius: var(--sl-border-radius-medium);
  }

  .avatar--square {
    border-radius: 0;
  }

  .avatar__icon {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  .avatar__initials {
    line-height: 1;
    text-transform: uppercase;
  }

  .avatar__image {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    overflow: hidden;
  }
`;var at=class extends f{constructor(){super(...arguments),this.hasError=!1,this.image="",this.label="",this.initials="",this.loading="eager",this.shape="circle"}handleImageChange(){this.hasError=!1}handleImageLoadError(){this.hasError=!0,this.emit("sl-error")}render(){let t=Q`
      <img
        part="image"
        class="avatar__image"
        src="${this.image}"
        loading="${this.loading}"
        alt=""
        @error="${this.handleImageLoadError}"
      />
    `,e=Q``;return this.initials?e=Q`<div part="initials" class="avatar__initials">${this.initials}</div>`:e=Q`
        <div part="icon" class="avatar__icon" aria-hidden="true">
          <slot name="icon">
            <sl-icon name="person-fill" library="system"></sl-icon>
          </slot>
        </div>
      `,Q`
      <div
        part="base"
        class=${A({avatar:!0,"avatar--circle":this.shape==="circle","avatar--rounded":this.shape==="rounded","avatar--square":this.shape==="square"})}
        role="img"
        aria-label=${this.label}
      >
        ${this.image&&!this.hasError?t:e}
      </div>
    `}};at.styles=[y,Rs];at.dependencies={"sl-icon":z};a([T()],at.prototype,"hasError",2);a([d()],at.prototype,"image",2);a([d()],at.prototype,"label",2);a([d()],at.prototype,"initials",2);a([d()],at.prototype,"loading",2);a([d({reflect:!0})],at.prototype,"shape",2);a([W("image")],at.prototype,"handleImageChange",1);at.define("sl-avatar");var Zs=U`
  .breadcrumb {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
  }
`;var Tt=class extends f{constructor(){super(...arguments),this.localize=new G(this),this.separatorDir=this.localize.dir(),this.label=""}getSeparator(){let e=this.separatorSlot.assignedElements({flatten:!0})[0].cloneNode(!0);return[e,...e.querySelectorAll("[id]")].forEach(o=>o.removeAttribute("id")),e.setAttribute("data-default",""),e.slot="separator",e}handleSlotChange(){let t=[...this.defaultSlot.assignedElements({flatten:!0})].filter(e=>e.tagName.toLowerCase()==="sl-breadcrumb-item");t.forEach((e,o)=>{let s=e.querySelector('[slot="separator"]');s===null?e.append(this.getSeparator()):s.hasAttribute("data-default")&&s.replaceWith(this.getSeparator()),o===t.length-1?e.setAttribute("aria-current","page"):e.removeAttribute("aria-current")})}render(){return this.separatorDir!==this.localize.dir()&&(this.separatorDir=this.localize.dir(),this.updateComplete.then(()=>this.handleSlotChange())),Q`
      <nav part="base" class="breadcrumb" aria-label=${this.label}>
        <slot @slotchange=${this.handleSlotChange}></slot>
      </nav>

      <span hidden aria-hidden="true">
        <slot name="separator">
          <sl-icon name=${this.localize.dir()==="rtl"?"chevron-left":"chevron-right"} library="system"></sl-icon>
        </slot>
      </span>
    `}};Tt.styles=[y,Zs];Tt.dependencies={"sl-icon":z};a([v("slot")],Tt.prototype,"defaultSlot",2);a([v('slot[name="separator"]')],Tt.prototype,"separatorSlot",2);a([d()],Tt.prototype,"label",2);Tt.define("sl-breadcrumb");var Es=U`
  :host {
    display: inline-flex;
  }

  .breadcrumb-item {
    display: inline-flex;
    align-items: center;
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-small);
    font-weight: var(--sl-font-weight-semibold);
    color: var(--sl-color-neutral-600);
    line-height: var(--sl-line-height-normal);
    white-space: nowrap;
  }

  .breadcrumb-item__label {
    display: inline-block;
    font-family: inherit;
    font-size: inherit;
    font-weight: inherit;
    line-height: inherit;
    text-decoration: none;
    color: inherit;
    background: none;
    border: none;
    border-radius: var(--sl-border-radius-medium);
    padding: 0;
    margin: 0;
    cursor: pointer;
    transition: var(--sl-transition-fast) --color;
  }

  :host(:not(:last-of-type)) .breadcrumb-item__label {
    color: var(--sl-color-primary-600);
  }

  :host(:not(:last-of-type)) .breadcrumb-item__label:hover {
    color: var(--sl-color-primary-500);
  }

  :host(:not(:last-of-type)) .breadcrumb-item__label:active {
    color: var(--sl-color-primary-600);
  }

  .breadcrumb-item__label:focus {
    outline: none;
  }

  .breadcrumb-item__label:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .breadcrumb-item__prefix,
  .breadcrumb-item__suffix {
    display: none;
    flex: 0 0 auto;
    display: flex;
    align-items: center;
  }

  .breadcrumb-item--has-prefix .breadcrumb-item__prefix {
    display: inline-flex;
    margin-inline-end: var(--sl-spacing-x-small);
  }

  .breadcrumb-item--has-suffix .breadcrumb-item__suffix {
    display: inline-flex;
    margin-inline-start: var(--sl-spacing-x-small);
  }

  :host(:last-of-type) .breadcrumb-item__separator {
    display: none;
  }

  .breadcrumb-item__separator {
    display: inline-flex;
    align-items: center;
    margin: 0 var(--sl-spacing-x-small);
    user-select: none;
    -webkit-user-select: none;
  }
`;var ft=class extends f{constructor(){super(...arguments),this.hasSlotController=new Y(this,"prefix","suffix"),this.renderType="button",this.rel="noreferrer noopener"}setRenderType(){let t=this.defaultSlot.assignedElements({flatten:!0}).filter(e=>e.tagName.toLowerCase()==="sl-dropdown").length>0;if(this.href){this.renderType="link";return}if(t){this.renderType="dropdown";return}this.renderType="button"}hrefChanged(){this.setRenderType()}handleSlotChange(){this.setRenderType()}render(){return Q`
      <div
        part="base"
        class=${A({"breadcrumb-item":!0,"breadcrumb-item--has-prefix":this.hasSlotController.test("prefix"),"breadcrumb-item--has-suffix":this.hasSlotController.test("suffix")})}
      >
        <span part="prefix" class="breadcrumb-item__prefix">
          <slot name="prefix"></slot>
        </span>

        ${this.renderType==="link"?Q`
              <a
                part="label"
                class="breadcrumb-item__label breadcrumb-item__label--link"
                href="${this.href}"
                target="${B(this.target?this.target:void 0)}"
                rel=${B(this.target?this.rel:void 0)}
              >
                <slot @slotchange=${this.handleSlotChange}></slot>
              </a>
            `:""}
        ${this.renderType==="button"?Q`
              <button part="label" type="button" class="breadcrumb-item__label breadcrumb-item__label--button">
                <slot @slotchange=${this.handleSlotChange}></slot>
              </button>
            `:""}
        ${this.renderType==="dropdown"?Q`
              <div part="label" class="breadcrumb-item__label breadcrumb-item__label--drop-down">
                <slot @slotchange=${this.handleSlotChange}></slot>
              </div>
            `:""}

        <span part="suffix" class="breadcrumb-item__suffix">
          <slot name="suffix"></slot>
        </span>

        <span part="separator" class="breadcrumb-item__separator" aria-hidden="true">
          <slot name="separator"></slot>
        </span>
      </div>
    `}};ft.styles=[y,Es];a([v("slot:not([name])")],ft.prototype,"defaultSlot",2);a([T()],ft.prototype,"renderType",2);a([d()],ft.prototype,"href",2);a([d()],ft.prototype,"target",2);a([d()],ft.prototype,"rel",2);a([W("href",{waitUntilFirstUpdate:!0})],ft.prototype,"hrefChanged",1);ft.define("sl-breadcrumb-item");var Ts=U`
  :host {
    --track-width: 2px;
    --track-color: rgb(128 128 128 / 25%);
    --indicator-color: var(--sl-color-primary-600);
    --speed: 2s;

    display: inline-flex;
    width: 1em;
    height: 1em;
    flex: none;
  }

  .spinner {
    flex: 1 1 auto;
    height: 100%;
    width: 100%;
  }

  .spinner__track,
  .spinner__indicator {
    fill: none;
    stroke-width: var(--track-width);
    r: calc(0.5em - var(--track-width) / 2);
    cx: 0.5em;
    cy: 0.5em;
    transform-origin: 50% 50%;
  }

  .spinner__track {
    stroke: var(--track-color);
    transform-origin: 0% 0%;
  }

  .spinner__indicator {
    stroke: var(--indicator-color);
    stroke-linecap: round;
    stroke-dasharray: 150% 75%;
    animation: spin var(--speed) linear infinite;
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
      stroke-dasharray: 0.05em, 3em;
    }

    50% {
      transform: rotate(450deg);
      stroke-dasharray: 1.375em, 1.375em;
    }

    100% {
      transform: rotate(1080deg);
      stroke-dasharray: 0.05em, 3em;
    }
  }
`;var jt=class extends f{constructor(){super(...arguments),this.localize=new G(this)}render(){return Q`
      <svg part="base" class="spinner" role="progressbar" aria-label=${this.localize.term("loading")}>
        <circle class="spinner__track"></circle>
        <circle class="spinner__indicator"></circle>
      </svg>
    `}};jt.styles=[y,Ts];var me=new WeakMap,Qe=new WeakMap,Be=new WeakMap,Oo=new WeakSet,Je=new WeakMap,He=class{constructor(t,e){this.handleFormData=o=>{let s=this.options.disabled(this.host),r=this.options.name(this.host),i=this.options.value(this.host),l=this.host.tagName.toLowerCase()==="sl-button";this.host.isConnected&&!s&&!l&&typeof r=="string"&&r.length>0&&typeof i<"u"&&(Array.isArray(i)?i.forEach(n=>{o.formData.append(r,n.toString())}):o.formData.append(r,i.toString()))},this.handleFormSubmit=o=>{var s;let r=this.options.disabled(this.host),i=this.options.reportValidity;this.form&&!this.form.noValidate&&((s=me.get(this.form))==null||s.forEach(l=>{this.setUserInteracted(l,!0)})),this.form&&!this.form.noValidate&&!r&&!i(this.host)&&(o.preventDefault(),o.stopImmediatePropagation())},this.handleFormReset=()=>{this.options.setValue(this.host,this.options.defaultValue(this.host)),this.setUserInteracted(this.host,!1),Je.set(this.host,[])},this.handleInteraction=o=>{let s=Je.get(this.host);s.includes(o.type)||s.push(o.type),s.length===this.options.assumeInteractionOn.length&&this.setUserInteracted(this.host,!0)},this.checkFormValidity=()=>{if(this.form&&!this.form.noValidate){let o=this.form.querySelectorAll("*");for(let s of o)if(typeof s.checkValidity=="function"&&!s.checkValidity())return!1}return!0},this.reportFormValidity=()=>{if(this.form&&!this.form.noValidate){let o=this.form.querySelectorAll("*");for(let s of o)if(typeof s.reportValidity=="function"&&!s.reportValidity())return!1}return!0},(this.host=t).addController(this),this.options=_({form:o=>{let s=o.form;if(s){let i=o.getRootNode().querySelector(`#${s}`);if(i)return i}return o.closest("form")},name:o=>o.name,value:o=>o.value,defaultValue:o=>o.defaultValue,disabled:o=>{var s;return(s=o.disabled)!=null?s:!1},reportValidity:o=>typeof o.reportValidity=="function"?o.reportValidity():!0,checkValidity:o=>typeof o.checkValidity=="function"?o.checkValidity():!0,setValue:(o,s)=>o.value=s,assumeInteractionOn:["sl-input"]},e)}hostConnected(){let t=this.options.form(this.host);t&&this.attachForm(t),Je.set(this.host,[]),this.options.assumeInteractionOn.forEach(e=>{this.host.addEventListener(e,this.handleInteraction)})}hostDisconnected(){this.detachForm(),Je.delete(this.host),this.options.assumeInteractionOn.forEach(t=>{this.host.removeEventListener(t,this.handleInteraction)})}hostUpdated(){let t=this.options.form(this.host);t||this.detachForm(),t&&this.form!==t&&(this.detachForm(),this.attachForm(t)),this.host.hasUpdated&&this.setValidity(this.host.validity.valid)}attachForm(t){t?(this.form=t,me.has(this.form)?me.get(this.form).add(this.host):me.set(this.form,new Set([this.host])),this.form.addEventListener("formdata",this.handleFormData),this.form.addEventListener("submit",this.handleFormSubmit),this.form.addEventListener("reset",this.handleFormReset),Qe.has(this.form)||(Qe.set(this.form,this.form.reportValidity),this.form.reportValidity=()=>this.reportFormValidity()),Be.has(this.form)||(Be.set(this.form,this.form.checkValidity),this.form.checkValidity=()=>this.checkFormValidity())):this.form=void 0}detachForm(){if(!this.form)return;let t=me.get(this.form);t&&(t.delete(this.host),t.size<=0&&(this.form.removeEventListener("formdata",this.handleFormData),this.form.removeEventListener("submit",this.handleFormSubmit),this.form.removeEventListener("reset",this.handleFormReset),Qe.has(this.form)&&(this.form.reportValidity=Qe.get(this.form),Qe.delete(this.form)),Be.has(this.form)&&(this.form.checkValidity=Be.get(this.form),Be.delete(this.form)),this.form=void 0))}setUserInteracted(t,e){e?Oo.add(t):Oo.delete(t),t.requestUpdate()}doAction(t,e){if(this.form){let o=document.createElement("button");o.type=t,o.style.position="absolute",o.style.width="0",o.style.height="0",o.style.clipPath="inset(50%)",o.style.overflow="hidden",o.style.whiteSpace="nowrap",e&&(o.name=e.name,o.value=e.value,["formaction","formenctype","formmethod","formnovalidate","formtarget"].forEach(s=>{e.hasAttribute(s)&&o.setAttribute(s,e.getAttribute(s))})),this.form.append(o),o.click(),o.remove()}}getForm(){var t;return(t=this.form)!=null?t:null}reset(t){this.doAction("reset",t)}submit(t){this.doAction("submit",t)}setValidity(t){let e=this.host,o=!!Oo.has(e),s=!!e.required;e.toggleAttribute("data-required",s),e.toggleAttribute("data-optional",!s),e.toggleAttribute("data-invalid",!t),e.toggleAttribute("data-valid",t),e.toggleAttribute("data-user-invalid",!t&&o),e.toggleAttribute("data-user-valid",t&&o)}updateValidity(){let t=this.host;this.setValidity(t.validity.valid)}emitInvalidEvent(t){let e=new CustomEvent("sl-invalid",{bubbles:!1,composed:!1,cancelable:!0,detail:{}});t||e.preventDefault(),this.host.dispatchEvent(e)||t?.preventDefault()}},_e=Object.freeze({badInput:!1,customError:!1,patternMismatch:!1,rangeOverflow:!1,rangeUnderflow:!1,stepMismatch:!1,tooLong:!1,tooShort:!1,typeMismatch:!1,valid:!0,valueMissing:!1}),Ad=Object.freeze(xt(_({},_e),{valid:!1,valueMissing:!0})),Wd=Object.freeze(xt(_({},_e),{valid:!1,customError:!0}));var js=U`
  :host {
    display: inline-block;
    position: relative;
    width: auto;
    cursor: pointer;
  }

  .button {
    display: inline-flex;
    align-items: stretch;
    justify-content: center;
    width: 100%;
    border-style: solid;
    border-width: var(--sl-input-border-width);
    font-family: var(--sl-input-font-family);
    font-weight: var(--sl-font-weight-semibold);
    text-decoration: none;
    user-select: none;
    -webkit-user-select: none;
    white-space: nowrap;
    vertical-align: middle;
    padding: 0;
    transition:
      var(--sl-transition-x-fast) background-color,
      var(--sl-transition-x-fast) color,
      var(--sl-transition-x-fast) border,
      var(--sl-transition-x-fast) box-shadow;
    cursor: inherit;
  }

  .button::-moz-focus-inner {
    border: 0;
  }

  .button:focus {
    outline: none;
  }

  .button:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .button--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  /* When disabled, prevent mouse events from bubbling up from children */
  .button--disabled * {
    pointer-events: none;
  }

  .button__prefix,
  .button__suffix {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    pointer-events: none;
  }

  .button__label {
    display: inline-block;
  }

  .button__label::slotted(sl-icon) {
    vertical-align: -2px;
  }

  /*
   * Standard buttons
   */

  /* Default */
  .button--standard.button--default {
    background-color: var(--sl-color-neutral-0);
    border-color: var(--sl-input-border-color);
    color: var(--sl-color-neutral-700);
  }

  .button--standard.button--default:hover:not(.button--disabled) {
    background-color: var(--sl-color-primary-50);
    border-color: var(--sl-color-primary-300);
    color: var(--sl-color-primary-700);
  }

  .button--standard.button--default:active:not(.button--disabled) {
    background-color: var(--sl-color-primary-100);
    border-color: var(--sl-color-primary-400);
    color: var(--sl-color-primary-700);
  }

  /* Primary */
  .button--standard.button--primary {
    background-color: var(--sl-color-primary-600);
    border-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--primary:hover:not(.button--disabled) {
    background-color: var(--sl-color-primary-500);
    border-color: var(--sl-color-primary-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--primary:active:not(.button--disabled) {
    background-color: var(--sl-color-primary-600);
    border-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  /* Success */
  .button--standard.button--success {
    background-color: var(--sl-color-success-600);
    border-color: var(--sl-color-success-600);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--success:hover:not(.button--disabled) {
    background-color: var(--sl-color-success-500);
    border-color: var(--sl-color-success-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--success:active:not(.button--disabled) {
    background-color: var(--sl-color-success-600);
    border-color: var(--sl-color-success-600);
    color: var(--sl-color-neutral-0);
  }

  /* Neutral */
  .button--standard.button--neutral {
    background-color: var(--sl-color-neutral-600);
    border-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--neutral:hover:not(.button--disabled) {
    background-color: var(--sl-color-neutral-500);
    border-color: var(--sl-color-neutral-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--neutral:active:not(.button--disabled) {
    background-color: var(--sl-color-neutral-600);
    border-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-0);
  }

  /* Warning */
  .button--standard.button--warning {
    background-color: var(--sl-color-warning-600);
    border-color: var(--sl-color-warning-600);
    color: var(--sl-color-neutral-0);
  }
  .button--standard.button--warning:hover:not(.button--disabled) {
    background-color: var(--sl-color-warning-500);
    border-color: var(--sl-color-warning-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--warning:active:not(.button--disabled) {
    background-color: var(--sl-color-warning-600);
    border-color: var(--sl-color-warning-600);
    color: var(--sl-color-neutral-0);
  }

  /* Danger */
  .button--standard.button--danger {
    background-color: var(--sl-color-danger-600);
    border-color: var(--sl-color-danger-600);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--danger:hover:not(.button--disabled) {
    background-color: var(--sl-color-danger-500);
    border-color: var(--sl-color-danger-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--danger:active:not(.button--disabled) {
    background-color: var(--sl-color-danger-600);
    border-color: var(--sl-color-danger-600);
    color: var(--sl-color-neutral-0);
  }

  /*
   * Outline buttons
   */

  .button--outline {
    background: none;
    border: solid 1px;
  }

  /* Default */
  .button--outline.button--default {
    border-color: var(--sl-input-border-color);
    color: var(--sl-color-neutral-700);
  }

  .button--outline.button--default:hover:not(.button--disabled),
  .button--outline.button--default.button--checked:not(.button--disabled) {
    border-color: var(--sl-color-primary-600);
    background-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--default:active:not(.button--disabled) {
    border-color: var(--sl-color-primary-700);
    background-color: var(--sl-color-primary-700);
    color: var(--sl-color-neutral-0);
  }

  /* Primary */
  .button--outline.button--primary {
    border-color: var(--sl-color-primary-600);
    color: var(--sl-color-primary-600);
  }

  .button--outline.button--primary:hover:not(.button--disabled),
  .button--outline.button--primary.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--primary:active:not(.button--disabled) {
    border-color: var(--sl-color-primary-700);
    background-color: var(--sl-color-primary-700);
    color: var(--sl-color-neutral-0);
  }

  /* Success */
  .button--outline.button--success {
    border-color: var(--sl-color-success-600);
    color: var(--sl-color-success-600);
  }

  .button--outline.button--success:hover:not(.button--disabled),
  .button--outline.button--success.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-success-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--success:active:not(.button--disabled) {
    border-color: var(--sl-color-success-700);
    background-color: var(--sl-color-success-700);
    color: var(--sl-color-neutral-0);
  }

  /* Neutral */
  .button--outline.button--neutral {
    border-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-600);
  }

  .button--outline.button--neutral:hover:not(.button--disabled),
  .button--outline.button--neutral.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--neutral:active:not(.button--disabled) {
    border-color: var(--sl-color-neutral-700);
    background-color: var(--sl-color-neutral-700);
    color: var(--sl-color-neutral-0);
  }

  /* Warning */
  .button--outline.button--warning {
    border-color: var(--sl-color-warning-600);
    color: var(--sl-color-warning-600);
  }

  .button--outline.button--warning:hover:not(.button--disabled),
  .button--outline.button--warning.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-warning-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--warning:active:not(.button--disabled) {
    border-color: var(--sl-color-warning-700);
    background-color: var(--sl-color-warning-700);
    color: var(--sl-color-neutral-0);
  }

  /* Danger */
  .button--outline.button--danger {
    border-color: var(--sl-color-danger-600);
    color: var(--sl-color-danger-600);
  }

  .button--outline.button--danger:hover:not(.button--disabled),
  .button--outline.button--danger.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-danger-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--danger:active:not(.button--disabled) {
    border-color: var(--sl-color-danger-700);
    background-color: var(--sl-color-danger-700);
    color: var(--sl-color-neutral-0);
  }

  @media (forced-colors: active) {
    .button.button--outline.button--checked:not(.button--disabled) {
      outline: solid 2px transparent;
    }
  }

  /*
   * Text buttons
   */

  .button--text {
    background-color: transparent;
    border-color: transparent;
    color: var(--sl-color-primary-600);
  }

  .button--text:hover:not(.button--disabled) {
    background-color: transparent;
    border-color: transparent;
    color: var(--sl-color-primary-500);
  }

  .button--text:focus-visible:not(.button--disabled) {
    background-color: transparent;
    border-color: transparent;
    color: var(--sl-color-primary-500);
  }

  .button--text:active:not(.button--disabled) {
    background-color: transparent;
    border-color: transparent;
    color: var(--sl-color-primary-700);
  }

  /*
   * Size modifiers
   */

  .button--small {
    height: auto;
    min-height: var(--sl-input-height-small);
    font-size: var(--sl-button-font-size-small);
    line-height: calc(var(--sl-input-height-small) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-small);
  }

  .button--medium {
    height: auto;
    min-height: var(--sl-input-height-medium);
    font-size: var(--sl-button-font-size-medium);
    line-height: calc(var(--sl-input-height-medium) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-medium);
  }

  .button--large {
    height: auto;
    min-height: var(--sl-input-height-large);
    font-size: var(--sl-button-font-size-large);
    line-height: calc(var(--sl-input-height-large) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-large);
  }

  /*
   * Pill modifier
   */

  .button--pill.button--small {
    border-radius: var(--sl-input-height-small);
  }

  .button--pill.button--medium {
    border-radius: var(--sl-input-height-medium);
  }

  .button--pill.button--large {
    border-radius: var(--sl-input-height-large);
  }

  /*
   * Circle modifier
   */

  .button--circle {
    padding-left: 0;
    padding-right: 0;
  }

  .button--circle.button--small {
    width: var(--sl-input-height-small);
    border-radius: 50%;
  }

  .button--circle.button--medium {
    width: var(--sl-input-height-medium);
    border-radius: 50%;
  }

  .button--circle.button--large {
    width: var(--sl-input-height-large);
    border-radius: 50%;
  }

  .button--circle .button__prefix,
  .button--circle .button__suffix,
  .button--circle .button__caret {
    display: none;
  }

  /*
   * Caret modifier
   */

  .button--caret .button__suffix {
    display: none;
  }

  .button--caret .button__caret {
    height: auto;
  }

  /*
   * Loading modifier
   */

  .button--loading {
    position: relative;
    cursor: wait;
  }

  .button--loading .button__prefix,
  .button--loading .button__label,
  .button--loading .button__suffix,
  .button--loading .button__caret {
    visibility: hidden;
  }

  .button--loading sl-spinner {
    --indicator-color: currentColor;
    position: absolute;
    font-size: 1em;
    height: 1em;
    width: 1em;
    top: calc(50% - 0.5em);
    left: calc(50% - 0.5em);
  }

  /*
   * Badges
   */

  .button ::slotted(sl-badge) {
    position: absolute;
    top: 0;
    right: 0;
    translate: 50% -50%;
    pointer-events: none;
  }

  .button--rtl ::slotted(sl-badge) {
    right: auto;
    left: 0;
    translate: -50% -50%;
  }

  /*
   * Button spacing
   */

  .button--has-label.button--small .button__label {
    padding: 0 var(--sl-spacing-small);
  }

  .button--has-label.button--medium .button__label {
    padding: 0 var(--sl-spacing-medium);
  }

  .button--has-label.button--large .button__label {
    padding: 0 var(--sl-spacing-large);
  }

  .button--has-prefix.button--small {
    padding-inline-start: var(--sl-spacing-x-small);
  }

  .button--has-prefix.button--small .button__label {
    padding-inline-start: var(--sl-spacing-x-small);
  }

  .button--has-prefix.button--medium {
    padding-inline-start: var(--sl-spacing-small);
  }

  .button--has-prefix.button--medium .button__label {
    padding-inline-start: var(--sl-spacing-small);
  }

  .button--has-prefix.button--large {
    padding-inline-start: var(--sl-spacing-small);
  }

  .button--has-prefix.button--large .button__label {
    padding-inline-start: var(--sl-spacing-small);
  }

  .button--has-suffix.button--small,
  .button--caret.button--small {
    padding-inline-end: var(--sl-spacing-x-small);
  }

  .button--has-suffix.button--small .button__label,
  .button--caret.button--small .button__label {
    padding-inline-end: var(--sl-spacing-x-small);
  }

  .button--has-suffix.button--medium,
  .button--caret.button--medium {
    padding-inline-end: var(--sl-spacing-small);
  }

  .button--has-suffix.button--medium .button__label,
  .button--caret.button--medium .button__label {
    padding-inline-end: var(--sl-spacing-small);
  }

  .button--has-suffix.button--large,
  .button--caret.button--large {
    padding-inline-end: var(--sl-spacing-small);
  }

  .button--has-suffix.button--large .button__label,
  .button--caret.button--large .button__label {
    padding-inline-end: var(--sl-spacing-small);
  }

  /*
   * Button groups support a variety of button types (e.g. buttons with tooltips, buttons as dropdown triggers, etc.).
   * This means buttons aren't always direct descendants of the button group, thus we can't target them with the
   * ::slotted selector. To work around this, the button group component does some magic to add these special classes to
   * buttons and we style them here instead.
   */

  :host([data-sl-button-group__button--first]:not([data-sl-button-group__button--last])) .button {
    border-start-end-radius: 0;
    border-end-end-radius: 0;
  }

  :host([data-sl-button-group__button--inner]) .button {
    border-radius: 0;
  }

  :host([data-sl-button-group__button--last]:not([data-sl-button-group__button--first])) .button {
    border-start-start-radius: 0;
    border-end-start-radius: 0;
  }

  /* All except the first */
  :host([data-sl-button-group__button]:not([data-sl-button-group__button--first])) {
    margin-inline-start: calc(-1 * var(--sl-input-border-width));
  }

  /* Add a visual separator between solid buttons */
  :host(
      [data-sl-button-group__button]:not(
          [data-sl-button-group__button--first],
          [data-sl-button-group__button--radio],
          [variant='default']
        ):not(:hover)
    )
    .button:after {
    content: '';
    position: absolute;
    top: 0;
    inset-inline-start: 0;
    bottom: 0;
    border-left: solid 1px rgb(128 128 128 / 33%);
    mix-blend-mode: multiply;
  }

  /* Bump hovered, focused, and checked buttons up so their focus ring isn't clipped */
  :host([data-sl-button-group__button--hover]) {
    z-index: 1;
  }

  /* Focus and checked are always on top */
  :host([data-sl-button-group__button--focus]),
  :host([data-sl-button-group__button][checked]) {
    z-index: 2;
  }
`;var x=class extends f{constructor(){super(...arguments),this.formControlController=new He(this,{assumeInteractionOn:["click"]}),this.hasSlotController=new Y(this,"[default]","prefix","suffix"),this.localize=new G(this),this.hasFocus=!1,this.invalid=!1,this.title="",this.variant="default",this.size="medium",this.caret=!1,this.disabled=!1,this.loading=!1,this.outline=!1,this.pill=!1,this.circle=!1,this.type="button",this.name="",this.value="",this.href="",this.rel="noreferrer noopener"}get validity(){return this.isButton()?this.button.validity:_e}get validationMessage(){return this.isButton()?this.button.validationMessage:""}firstUpdated(){this.isButton()&&this.formControlController.updateValidity()}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleClick(){this.type==="submit"&&this.formControlController.submit(this),this.type==="reset"&&this.formControlController.reset(this)}handleInvalid(t){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(t)}isButton(){return!this.href}isLink(){return!!this.href}handleDisabledChange(){this.isButton()&&this.formControlController.setValidity(this.disabled)}click(){this.button.click()}focus(t){this.button.focus(t)}blur(){this.button.blur()}checkValidity(){return this.isButton()?this.button.checkValidity():!0}getForm(){return this.formControlController.getForm()}reportValidity(){return this.isButton()?this.button.reportValidity():!0}setCustomValidity(t){this.isButton()&&(this.button.setCustomValidity(t),this.formControlController.updateValidity())}render(){let t=this.isLink(),e=t?Pt`a`:Pt`button`;return qt`
      <${e}
        part="base"
        class=${A({button:!0,"button--default":this.variant==="default","button--primary":this.variant==="primary","button--success":this.variant==="success","button--neutral":this.variant==="neutral","button--warning":this.variant==="warning","button--danger":this.variant==="danger","button--text":this.variant==="text","button--small":this.size==="small","button--medium":this.size==="medium","button--large":this.size==="large","button--caret":this.caret,"button--circle":this.circle,"button--disabled":this.disabled,"button--focused":this.hasFocus,"button--loading":this.loading,"button--standard":!this.outline,"button--outline":this.outline,"button--pill":this.pill,"button--rtl":this.localize.dir()==="rtl","button--has-label":this.hasSlotController.test("[default]"),"button--has-prefix":this.hasSlotController.test("prefix"),"button--has-suffix":this.hasSlotController.test("suffix")})}
        ?disabled=${B(t?void 0:this.disabled)}
        type=${B(t?void 0:this.type)}
        title=${this.title}
        name=${B(t?void 0:this.name)}
        value=${B(t?void 0:this.value)}
        href=${B(t&&!this.disabled?this.href:void 0)}
        target=${B(t?this.target:void 0)}
        download=${B(t?this.download:void 0)}
        rel=${B(t?this.rel:void 0)}
        role=${B(t?void 0:"button")}
        aria-disabled=${this.disabled?"true":"false"}
        tabindex=${this.disabled?"-1":"0"}
        @blur=${this.handleBlur}
        @focus=${this.handleFocus}
        @invalid=${this.isButton()?this.handleInvalid:null}
        @click=${this.handleClick}
      >
        <slot name="prefix" part="prefix" class="button__prefix"></slot>
        <slot part="label" class="button__label"></slot>
        <slot name="suffix" part="suffix" class="button__suffix"></slot>
        ${this.caret?qt` <sl-icon part="caret" class="button__caret" library="system" name="caret"></sl-icon> `:""}
        ${this.loading?qt`<sl-spinner part="spinner"></sl-spinner>`:""}
      </${e}>
    `}};x.styles=[y,js];x.dependencies={"sl-icon":z,"sl-spinner":jt};a([v(".button")],x.prototype,"button",2);a([T()],x.prototype,"hasFocus",2);a([T()],x.prototype,"invalid",2);a([d()],x.prototype,"title",2);a([d({reflect:!0})],x.prototype,"variant",2);a([d({reflect:!0})],x.prototype,"size",2);a([d({type:Boolean,reflect:!0})],x.prototype,"caret",2);a([d({type:Boolean,reflect:!0})],x.prototype,"disabled",2);a([d({type:Boolean,reflect:!0})],x.prototype,"loading",2);a([d({type:Boolean,reflect:!0})],x.prototype,"outline",2);a([d({type:Boolean,reflect:!0})],x.prototype,"pill",2);a([d({type:Boolean,reflect:!0})],x.prototype,"circle",2);a([d()],x.prototype,"type",2);a([d()],x.prototype,"name",2);a([d()],x.prototype,"value",2);a([d()],x.prototype,"href",2);a([d()],x.prototype,"target",2);a([d()],x.prototype,"rel",2);a([d()],x.prototype,"download",2);a([d()],x.prototype,"form",2);a([d({attribute:"formaction"})],x.prototype,"formAction",2);a([d({attribute:"formenctype"})],x.prototype,"formEnctype",2);a([d({attribute:"formmethod"})],x.prototype,"formMethod",2);a([d({attribute:"formnovalidate",type:Boolean})],x.prototype,"formNoValidate",2);a([d({attribute:"formtarget"})],x.prototype,"formTarget",2);a([W("disabled",{waitUntilFirstUpdate:!0})],x.prototype,"handleDisabledChange",1);x.define("sl-button");var Vs=U`
  :host {
    --border-color: var(--sl-color-neutral-200);
    --border-radius: var(--sl-border-radius-medium);
    --border-width: 1px;
    --padding: var(--sl-spacing-large);

    display: inline-block;
  }

  .card {
    display: flex;
    flex-direction: column;
    background-color: var(--sl-panel-background-color);
    box-shadow: var(--sl-shadow-x-small);
    border: solid var(--border-width) var(--border-color);
    border-radius: var(--border-radius);
  }

  .card__image {
    display: flex;
    border-top-left-radius: var(--border-radius);
    border-top-right-radius: var(--border-radius);
    margin: calc(-1 * var(--border-width));
    overflow: hidden;
  }

  .card__image::slotted(img) {
    display: block;
    width: 100%;
  }

  .card:not(.card--has-image) .card__image {
    display: none;
  }

  .card__header {
    display: block;
    border-bottom: solid var(--border-width) var(--border-color);
    padding: calc(var(--padding) / 2) var(--padding);
  }

  .card:not(.card--has-header) .card__header {
    display: none;
  }

  .card:not(.card--has-image) .card__header {
    border-top-left-radius: var(--border-radius);
    border-top-right-radius: var(--border-radius);
  }

  .card__body {
    display: block;
    padding: var(--padding);
  }

  .card--has-footer .card__footer {
    display: block;
    border-top: solid var(--border-width) var(--border-color);
    padding: var(--padding);
  }

  .card:not(.card--has-footer) .card__footer {
    display: none;
  }
`;var No=class extends f{constructor(){super(...arguments),this.hasSlotController=new Y(this,"footer","header","image")}render(){return Q`
      <div
        part="base"
        class=${A({card:!0,"card--has-footer":this.hasSlotController.test("footer"),"card--has-image":this.hasSlotController.test("image"),"card--has-header":this.hasSlotController.test("header")})}
      >
        <slot name="image" part="image" class="card__image"></slot>
        <slot name="header" part="header" class="card__header"></slot>
        <slot part="body" class="card__body"></slot>
        <slot name="footer" part="footer" class="card__footer"></slot>
      </div>
    `}};No.styles=[y,Vs];No.define("sl-card");jt.define("sl-spinner");function*Ke(t=document.activeElement){t!=null&&(yield t,"shadowRoot"in t&&t.shadowRoot&&t.shadowRoot.mode!=="closed"&&(yield*Po(Ke(t.shadowRoot.activeElement))))}function $e(){return[...Ke()].pop()}var Ys=new WeakMap;function Js(t){let e=Ys.get(t);return e||(e=window.getComputedStyle(t,null),Ys.set(t,e)),e}function Ni(t){if(typeof t.checkVisibility=="function")return t.checkVisibility({checkOpacity:!1,checkVisibilityCSS:!0});let e=Js(t);return e.visibility!=="hidden"&&e.display!=="none"}function Ai(t){let e=Js(t),{overflowY:o,overflowX:s}=e;return o==="scroll"||s==="scroll"?!0:o!=="auto"||s!=="auto"?!1:t.scrollHeight>t.clientHeight&&o==="auto"||t.scrollWidth>t.clientWidth&&s==="auto"}function Wi(t){let e=t.tagName.toLowerCase(),o=Number(t.getAttribute("tabindex"));if(t.hasAttribute("tabindex")&&(isNaN(o)||o<=-1)||t.hasAttribute("disabled")||t.closest("[inert]"))return!1;if(e==="input"&&t.getAttribute("type")==="radio"){let i=t.getRootNode(),l=`input[type='radio'][name="${t.getAttribute("name")}"]`,n=i.querySelector(`${l}:checked`);return n?n===t:i.querySelector(l)===t}return Ni(t)?(e==="audio"||e==="video")&&t.hasAttribute("controls")||t.hasAttribute("tabindex")||t.hasAttribute("contenteditable")&&t.getAttribute("contenteditable")!=="false"||["button","input","select","textarea","a","audio","video","summary","iframe"].includes(e)?!0:Ai(t):!1}function Hs(t){var e,o;let s=Pe(t),r=(e=s[0])!=null?e:null,i=(o=s[s.length-1])!=null?o:null;return{start:r,end:i}}function Mi(t,e){var o;return((o=t.getRootNode({composed:!0}))==null?void 0:o.host)!==e}function Pe(t){let e=new WeakMap,o=[];function s(r){if(r instanceof Element){if(r.hasAttribute("inert")||r.closest("[inert]")||e.has(r))return;e.set(r,!0),!o.includes(r)&&Wi(r)&&o.push(r),r instanceof HTMLSlotElement&&Mi(r,t)&&r.assignedElements({flatten:!0}).forEach(i=>{s(i)}),r.shadowRoot!==null&&r.shadowRoot.mode==="open"&&s(r.shadowRoot)}for(let i of r.children)s(i)}return s(t),o.sort((r,i)=>{let l=Number(r.getAttribute("tabindex"))||0;return(Number(i.getAttribute("tabindex"))||0)-l})}var Fe=[],_s=class{constructor(t){this.tabDirection="forward",this.handleFocusIn=()=>{this.isActive()&&this.checkFocus()},this.handleKeyDown=e=>{var o;if(e.key!=="Tab"||this.isExternalActivated||!this.isActive())return;let s=$e();if(this.previousFocus=s,this.previousFocus&&this.possiblyHasTabbableChildren(this.previousFocus))return;e.shiftKey?this.tabDirection="backward":this.tabDirection="forward";let r=Pe(this.element),i=r.findIndex(n=>n===s);this.previousFocus=this.currentFocus;let l=this.tabDirection==="forward"?1:-1;for(;;){i+l>=r.length?i=0:i+l<0?i=r.length-1:i+=l,this.previousFocus=this.currentFocus;let n=r[i];if(this.tabDirection==="backward"&&this.previousFocus&&this.possiblyHasTabbableChildren(this.previousFocus)||n&&this.possiblyHasTabbableChildren(n))return;e.preventDefault(),this.currentFocus=n,(o=this.currentFocus)==null||o.focus({preventScroll:!1});let c=[...Ke()];if(c.includes(this.currentFocus)||!c.includes(this.previousFocus))break}setTimeout(()=>this.checkFocus())},this.handleKeyUp=()=>{this.tabDirection="forward"},this.element=t,this.elementsWithTabbableControls=["iframe"]}activate(){Fe.push(this.element),document.addEventListener("focusin",this.handleFocusIn),document.addEventListener("keydown",this.handleKeyDown),document.addEventListener("keyup",this.handleKeyUp)}deactivate(){Fe=Fe.filter(t=>t!==this.element),this.currentFocus=null,document.removeEventListener("focusin",this.handleFocusIn),document.removeEventListener("keydown",this.handleKeyDown),document.removeEventListener("keyup",this.handleKeyUp)}isActive(){return Fe[Fe.length-1]===this.element}activateExternal(){this.isExternalActivated=!0}deactivateExternal(){this.isExternalActivated=!1}checkFocus(){if(this.isActive()&&!this.isExternalActivated){let t=Pe(this.element);if(!this.element.matches(":focus-within")){let e=t[0],o=t[t.length-1],s=this.tabDirection==="forward"?e:o;typeof s?.focus=="function"&&(this.currentFocus=s,s.focus({preventScroll:!1}))}}}possiblyHasTabbableChildren(t){return this.elementsWithTabbableControls.includes(t.tagName.toLowerCase())||t.hasAttribute("controls")}};var Ao=new Set;function Di(){let t=document.documentElement.clientWidth;return Math.abs(window.innerWidth-t)}function zi(){let t=Number(getComputedStyle(document.body).paddingRight.replace(/px/,""));return isNaN(t)||!t?0:t}function Wo(t){if(Ao.add(t),!document.documentElement.classList.contains("sl-scroll-lock")){let e=Di()+zi(),o=getComputedStyle(document.documentElement).scrollbarGutter;(!o||o==="auto")&&(o="stable"),e<2&&(o=""),document.documentElement.style.setProperty("--sl-scroll-lock-gutter",o),document.documentElement.classList.add("sl-scroll-lock"),document.documentElement.style.setProperty("--sl-scroll-lock-size",`${e}px`)}}function Mo(t){Ao.delete(t),Ao.size===0&&(document.documentElement.classList.remove("sl-scroll-lock"),document.documentElement.style.removeProperty("--sl-scroll-lock-size"))}var Ks=U`
  :host {
    --width: 31rem;
    --header-spacing: var(--sl-spacing-large);
    --body-spacing: var(--sl-spacing-large);
    --footer-spacing: var(--sl-spacing-large);

    display: contents;
  }

  .dialog {
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: var(--sl-z-index-dialog);
  }

  .dialog__panel {
    display: flex;
    flex-direction: column;
    z-index: 2;
    width: var(--width);
    max-width: calc(100% - var(--sl-spacing-2x-large));
    max-height: calc(100% - var(--sl-spacing-2x-large));
    background-color: var(--sl-panel-background-color);
    border-radius: var(--sl-border-radius-medium);
    box-shadow: var(--sl-shadow-x-large);
  }

  .dialog__panel:focus {
    outline: none;
  }

  /* Ensure there's enough vertical padding for phones that don't update vh when chrome appears (e.g. iPhone) */
  @media screen and (max-width: 420px) {
    .dialog__panel {
      max-height: 80vh;
    }
  }

  .dialog--open .dialog__panel {
    display: flex;
    opacity: 1;
  }

  .dialog__header {
    flex: 0 0 auto;
    display: flex;
  }

  .dialog__title {
    flex: 1 1 auto;
    font: inherit;
    font-size: var(--sl-font-size-large);
    line-height: var(--sl-line-height-dense);
    padding: var(--header-spacing);
    margin: 0;
  }

  .dialog__header-actions {
    flex-shrink: 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: end;
    gap: var(--sl-spacing-2x-small);
    padding: 0 var(--header-spacing);
  }

  .dialog__header-actions sl-icon-button,
  .dialog__header-actions ::slotted(sl-icon-button) {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    font-size: var(--sl-font-size-medium);
  }

  .dialog__body {
    flex: 1 1 auto;
    display: block;
    padding: var(--body-spacing);
    overflow: auto;
    -webkit-overflow-scrolling: touch;
  }

  .dialog__footer {
    flex: 0 0 auto;
    text-align: right;
    padding: var(--footer-spacing);
  }

  .dialog__footer ::slotted(sl-button:not(:first-of-type)) {
    margin-inline-start: var(--sl-spacing-x-small);
  }

  .dialog:not(.dialog--has-footer) .dialog__footer {
    display: none;
  }

  .dialog__overlay {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: var(--sl-overlay-background-color);
  }

  @media (forced-colors: active) {
    .dialog__panel {
      border: solid 1px var(--sl-color-neutral-0);
    }
  }
`;var nt=class extends f{constructor(){super(...arguments),this.hasSlotController=new Y(this,"footer"),this.localize=new G(this),this.modal=new _s(this),this.open=!1,this.label="",this.noHeader=!1,this.handleDocumentKeyDown=t=>{t.key==="Escape"&&this.modal.isActive()&&this.open&&(t.stopPropagation(),this.requestClose("keyboard"))}}firstUpdated(){this.dialog.hidden=!this.open,this.open&&(this.addOpenListeners(),this.modal.activate(),Wo(this))}disconnectedCallback(){super.disconnectedCallback(),this.modal.deactivate(),Mo(this),this.removeOpenListeners()}requestClose(t){if(this.emit("sl-request-close",{cancelable:!0,detail:{source:t}}).defaultPrevented){let o=q(this,"dialog.denyClose",{dir:this.localize.dir()});tt(this.panel,o.keyframes,o.options);return}this.hide()}addOpenListeners(){var t;"CloseWatcher"in window?((t=this.closeWatcher)==null||t.destroy(),this.closeWatcher=new CloseWatcher,this.closeWatcher.onclose=()=>this.requestClose("keyboard")):document.addEventListener("keydown",this.handleDocumentKeyDown)}removeOpenListeners(){var t;(t=this.closeWatcher)==null||t.destroy(),document.removeEventListener("keydown",this.handleDocumentKeyDown)}async handleOpenChange(){if(this.open){this.emit("sl-show"),this.addOpenListeners(),this.originalTrigger=document.activeElement,this.modal.activate(),Wo(this);let t=this.querySelector("[autofocus]");t&&t.removeAttribute("autofocus"),await Promise.all([lt(this.dialog),lt(this.overlay)]),this.dialog.hidden=!1,requestAnimationFrame(()=>{this.emit("sl-initial-focus",{cancelable:!0}).defaultPrevented||(t?t.focus({preventScroll:!0}):this.panel.focus({preventScroll:!0})),t&&t.setAttribute("autofocus","")});let e=q(this,"dialog.show",{dir:this.localize.dir()}),o=q(this,"dialog.overlay.show",{dir:this.localize.dir()});await Promise.all([tt(this.panel,e.keyframes,e.options),tt(this.overlay,o.keyframes,o.options)]),this.emit("sl-after-show")}else{Ne(this),this.emit("sl-hide"),this.removeOpenListeners(),this.modal.deactivate(),await Promise.all([lt(this.dialog),lt(this.overlay)]);let t=q(this,"dialog.hide",{dir:this.localize.dir()}),e=q(this,"dialog.overlay.hide",{dir:this.localize.dir()});await Promise.all([tt(this.overlay,e.keyframes,e.options).then(()=>{this.overlay.hidden=!0}),tt(this.panel,t.keyframes,t.options).then(()=>{this.panel.hidden=!0})]),this.dialog.hidden=!0,this.overlay.hidden=!1,this.panel.hidden=!1,Mo(this);let o=this.originalTrigger;typeof o?.focus=="function"&&setTimeout(()=>o.focus()),this.emit("sl-after-hide")}}async show(){if(!this.open)return this.open=!0,Ut(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,Ut(this,"sl-after-hide")}render(){return Q`
      <div
        part="base"
        class=${A({dialog:!0,"dialog--open":this.open,"dialog--has-footer":this.hasSlotController.test("footer")})}
      >
        <div part="overlay" class="dialog__overlay" @click=${()=>this.requestClose("overlay")} tabindex="-1"></div>

        <div
          part="panel"
          class="dialog__panel"
          role="dialog"
          aria-modal="true"
          aria-hidden=${this.open?"false":"true"}
          aria-label=${B(this.noHeader?this.label:void 0)}
          aria-labelledby=${B(this.noHeader?void 0:"title")}
          tabindex="-1"
        >
          ${this.noHeader?"":Q`
                <header part="header" class="dialog__header">
                  <h2 part="title" class="dialog__title" id="title">
                    <slot name="label"> ${this.label.length>0?this.label:"\uFEFF"} </slot>
                  </h2>
                  <div part="header-actions" class="dialog__header-actions">
                    <slot name="header-actions"></slot>
                    <sl-icon-button
                      part="close-button"
                      exportparts="base:close-button__base"
                      class="dialog__close"
                      name="x-lg"
                      label=${this.localize.term("close")}
                      library="system"
                      @click="${()=>this.requestClose("close-button")}"
                    ></sl-icon-button>
                  </div>
                </header>
              `}
          ${""}
          <div part="body" class="dialog__body" tabindex="-1"><slot></slot></div>

          <footer part="footer" class="dialog__footer">
            <slot name="footer"></slot>
          </footer>
        </div>
      </div>
    `}};nt.styles=[y,Ks];nt.dependencies={"sl-icon-button":X};a([v(".dialog")],nt.prototype,"dialog",2);a([v(".dialog__panel")],nt.prototype,"panel",2);a([v(".dialog__overlay")],nt.prototype,"overlay",2);a([d({type:Boolean,reflect:!0})],nt.prototype,"open",2);a([d({reflect:!0})],nt.prototype,"label",2);a([d({attribute:"no-header",type:Boolean,reflect:!0})],nt.prototype,"noHeader",2);a([W("open",{waitUntilFirstUpdate:!0})],nt.prototype,"handleOpenChange",1);P("dialog.show",{keyframes:[{opacity:0,scale:.8},{opacity:1,scale:1}],options:{duration:250,easing:"ease"}});P("dialog.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.8}],options:{duration:250,easing:"ease"}});P("dialog.denyClose",{keyframes:[{scale:1},{scale:1.02},{scale:1}],options:{duration:250}});P("dialog.overlay.show",{keyframes:[{opacity:0},{opacity:1}],options:{duration:250}});P("dialog.overlay.hide",{keyframes:[{opacity:1},{opacity:0}],options:{duration:250}});nt.define("sl-dialog");var $s=U`
  :host {
    --color: var(--sl-panel-border-color);
    --width: var(--sl-panel-border-width);
    --spacing: var(--sl-spacing-medium);
  }

  :host(:not([vertical])) {
    display: block;
    border-top: solid var(--width) var(--color);
    margin: var(--spacing) 0;
  }

  :host([vertical]) {
    display: inline-block;
    height: 100%;
    border-left: solid var(--width) var(--color);
    margin: 0 var(--spacing);
  }
`;var Ue=class extends f{constructor(){super(...arguments),this.vertical=!1}connectedCallback(){super.connectedCallback(),this.setAttribute("role","separator")}handleVerticalChange(){this.setAttribute("aria-orientation",this.vertical?"vertical":"horizontal")}};Ue.styles=[y,$s];a([d({type:Boolean,reflect:!0})],Ue.prototype,"vertical",2);a([W("vertical")],Ue.prototype,"handleVerticalChange",1);Ue.define("sl-divider");var Ps=U`
  :host {
    display: inline-block;
  }

  .dropdown::part(popup) {
    z-index: var(--sl-z-index-dropdown);
  }

  .dropdown[data-current-placement^='top']::part(popup) {
    transform-origin: bottom;
  }

  .dropdown[data-current-placement^='bottom']::part(popup) {
    transform-origin: top;
  }

  .dropdown[data-current-placement^='left']::part(popup) {
    transform-origin: right;
  }

  .dropdown[data-current-placement^='right']::part(popup) {
    transform-origin: left;
  }

  .dropdown__trigger {
    display: block;
  }

  .dropdown__panel {
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-medium);
    font-weight: var(--sl-font-weight-normal);
    box-shadow: var(--sl-shadow-large);
    border-radius: var(--sl-border-radius-medium);
    pointer-events: none;
  }

  .dropdown--open .dropdown__panel {
    display: block;
    pointer-events: all;
  }

  /* When users slot a menu, make sure it conforms to the popup's auto-size */
  ::slotted(sl-menu) {
    max-width: var(--auto-size-available-width) !important;
    max-height: var(--auto-size-available-height) !important;
  }
`;var qs=U`
  :host {
    --arrow-color: var(--sl-color-neutral-1000);
    --arrow-size: 6px;

    /*
     * These properties are computed to account for the arrow's dimensions after being rotated 45º. The constant
     * 0.7071 is derived from sin(45), which is the diagonal size of the arrow's container after rotating.
     */
    --arrow-size-diagonal: calc(var(--arrow-size) * 0.7071);
    --arrow-padding-offset: calc(var(--arrow-size-diagonal) - var(--arrow-size));

    display: contents;
  }

  .popup {
    position: absolute;
    isolation: isolate;
    max-width: var(--auto-size-available-width, none);
    max-height: var(--auto-size-available-height, none);
  }

  .popup--fixed {
    position: fixed;
  }

  .popup:not(.popup--active) {
    display: none;
  }

  .popup__arrow {
    position: absolute;
    width: calc(var(--arrow-size-diagonal) * 2);
    height: calc(var(--arrow-size-diagonal) * 2);
    rotate: 45deg;
    background: var(--arrow-color);
    z-index: -1;
  }

  /* Hover bridge */
  .popup-hover-bridge:not(.popup-hover-bridge--visible) {
    display: none;
  }

  .popup-hover-bridge {
    position: fixed;
    z-index: calc(var(--sl-z-index-dropdown) - 1);
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    clip-path: polygon(
      var(--hover-bridge-top-left-x, 0) var(--hover-bridge-top-left-y, 0),
      var(--hover-bridge-top-right-x, 0) var(--hover-bridge-top-right-y, 0),
      var(--hover-bridge-bottom-right-x, 0) var(--hover-bridge-bottom-right-y, 0),
      var(--hover-bridge-bottom-left-x, 0) var(--hover-bridge-bottom-left-y, 0)
    );
  }
`;var pt=Math.min,j=Math.max,Ce=Math.round,we=Math.floor,ct=t=>({x:t,y:t}),Gi={left:"right",right:"left",bottom:"top",top:"bottom"},ki={start:"end",end:"start"};function to(t,e,o){return j(t,pt(e,o))}function Vt(t,e){return typeof t=="function"?t(e):t}function Ct(t){return t.split("-")[0]}function Yt(t){return t.split("-")[1]}function Do(t){return t==="x"?"y":"x"}function eo(t){return t==="y"?"height":"width"}var Xi=new Set(["top","bottom"]);function gt(t){return Xi.has(Ct(t))?"y":"x"}function oo(t){return Do(gt(t))}function or(t,e,o){o===void 0&&(o=!1);let s=Yt(t),r=oo(t),i=eo(r),l=r==="x"?s===(o?"end":"start")?"right":"left":s==="start"?"bottom":"top";return e.reference[i]>e.floating[i]&&(l=fe(l)),[l,fe(l)]}function sr(t){let e=fe(t);return[qe(t),e,qe(e)]}function qe(t){return t.replace(/start|end/g,e=>ki[e])}var tr=["left","right"],er=["right","left"],Si=["top","bottom"],Ri=["bottom","top"];function Zi(t,e,o){switch(t){case"top":case"bottom":return o?e?er:tr:e?tr:er;case"left":case"right":return e?Si:Ri;default:return[]}}function rr(t,e,o,s){let r=Yt(t),i=Zi(Ct(t),o==="start",s);return r&&(i=i.map(l=>l+"-"+r),e&&(i=i.concat(i.map(qe)))),i}function fe(t){return t.replace(/left|right|bottom|top/g,e=>Gi[e])}function Ei(t){return{top:0,right:0,bottom:0,left:0,...t}}function zo(t){return typeof t!="number"?Ei(t):{top:t,right:t,bottom:t,left:t}}function Jt(t){let{x:e,y:o,width:s,height:r}=t;return{width:s,height:r,top:o,left:e,right:e+s,bottom:o+r,x:e,y:o}}function ir(t,e,o){let{reference:s,floating:r}=t,i=gt(e),l=oo(e),n=eo(l),c=Ct(e),b=i==="y",u=s.x+s.width/2-r.width/2,h=s.y+s.height/2-r.height/2,g=s[n]/2-r[n]/2,p;switch(c){case"top":p={x:u,y:s.y-r.height};break;case"bottom":p={x:u,y:s.y+s.height};break;case"right":p={x:s.x+s.width,y:h};break;case"left":p={x:s.x-r.width,y:h};break;default:p={x:s.x,y:s.y}}switch(Yt(e)){case"start":p[l]-=g*(o&&b?-1:1);break;case"end":p[l]+=g*(o&&b?-1:1);break}return p}async function lr(t,e){var o;e===void 0&&(e={});let{x:s,y:r,platform:i,rects:l,elements:n,strategy:c}=t,{boundary:b="clippingAncestors",rootBoundary:u="viewport",elementContext:h="floating",altBoundary:g=!1,padding:p=0}=Vt(e,t),m=zo(p),I=n[g?h==="floating"?"reference":"floating":h],w=Jt(await i.getClippingRect({element:(o=await(i.isElement==null?void 0:i.isElement(I)))==null||o?I:I.contextElement||await(i.getDocumentElement==null?void 0:i.getDocumentElement(n.floating)),boundary:b,rootBoundary:u,strategy:c})),L=h==="floating"?{x:s,y:r,width:l.floating.width,height:l.floating.height}:l.reference,N=await(i.getOffsetParent==null?void 0:i.getOffsetParent(n.floating)),D=await(i.isElement==null?void 0:i.isElement(N))?await(i.getScale==null?void 0:i.getScale(N))||{x:1,y:1}:{x:1,y:1},R=Jt(i.convertOffsetParentRelativeRectToViewportRelativeRect?await i.convertOffsetParentRelativeRectToViewportRelativeRect({elements:n,rect:L,offsetParent:N,strategy:c}):L);return{top:(w.top-R.top+m.top)/D.y,bottom:(R.bottom-w.bottom+m.bottom)/D.y,left:(w.left-R.left+m.left)/D.x,right:(R.right-w.right+m.right)/D.x}}var ar=async(t,e,o)=>{let{placement:s="bottom",strategy:r="absolute",middleware:i=[],platform:l}=o,n=i.filter(Boolean),c=await(l.isRTL==null?void 0:l.isRTL(e)),b=await l.getElementRects({reference:t,floating:e,strategy:r}),{x:u,y:h}=ir(b,s,c),g=s,p={},m=0;for(let I=0;I<n.length;I++){var C;let{name:w,fn:L}=n[I],{x:N,y:D,data:R,reset:k}=await L({x:u,y:h,initialPlacement:s,placement:g,strategy:r,middlewareData:p,rects:b,platform:{...l,detectOverflow:(C=l.detectOverflow)!=null?C:lr},elements:{reference:t,floating:e}});u=N??u,h=D??h,p={...p,[w]:{...p[w],...R}},k&&m<=50&&(m++,typeof k=="object"&&(k.placement&&(g=k.placement),k.rects&&(b=k.rects===!0?await l.getElementRects({reference:t,floating:e,strategy:r}):k.rects),{x:u,y:h}=ir(b,g,c)),I=-1)}return{x:u,y:h,placement:g,strategy:r,middlewareData:p}},nr=t=>({name:"arrow",options:t,async fn(e){let{x:o,y:s,placement:r,rects:i,platform:l,elements:n,middlewareData:c}=e,{element:b,padding:u=0}=Vt(t,e)||{};if(b==null)return{};let h=zo(u),g={x:o,y:s},p=oo(r),m=eo(p),C=await l.getDimensions(b),I=p==="y",w=I?"top":"left",L=I?"bottom":"right",N=I?"clientHeight":"clientWidth",D=i.reference[m]+i.reference[p]-g[p]-i.floating[m],R=g[p]-i.reference[p],k=await(l.getOffsetParent==null?void 0:l.getOffsetParent(b)),Z=k?k[N]:0;(!Z||!await(l.isElement==null?void 0:l.isElement(k)))&&(Z=n.floating[N]||i.floating[m]);let mt=D/2-R/2,ut=Z/2-C[m]/2-1,$=pt(h[w],ut),It=pt(h[L],ut),ht=$,yt=Z-C[m]-It,E=Z/2-C[m]/2+mt,Mt=to(ht,E,yt),Qt=!c.arrow&&Yt(r)!=null&&E!==Mt&&i.reference[m]/2-(E<ht?$:It)-C[m]/2<0,st=Qt?E<ht?E-ht:E-yt:0;return{[p]:g[p]+st,data:{[p]:Mt,centerOffset:E-Mt-st,...Qt&&{alignmentOffset:st}},reset:Qt}}});var cr=function(t){return t===void 0&&(t={}),{name:"flip",options:t,async fn(e){var o,s;let{placement:r,middlewareData:i,rects:l,initialPlacement:n,platform:c,elements:b}=e,{mainAxis:u=!0,crossAxis:h=!0,fallbackPlacements:g,fallbackStrategy:p="bestFit",fallbackAxisSideDirection:m="none",flipAlignment:C=!0,...I}=Vt(t,e);if((o=i.arrow)!=null&&o.alignmentOffset)return{};let w=Ct(r),L=gt(n),N=Ct(n)===n,D=await(c.isRTL==null?void 0:c.isRTL(b.floating)),R=g||(N||!C?[fe(n)]:sr(n)),k=m!=="none";!g&&k&&R.push(...rr(n,C,m,D));let Z=[n,...R],mt=await c.detectOverflow(e,I),ut=[],$=((s=i.flip)==null?void 0:s.overflows)||[];if(u&&ut.push(mt[w]),h){let E=or(r,l,D);ut.push(mt[E[0]],mt[E[1]])}if($=[...$,{placement:r,overflows:ut}],!ut.every(E=>E<=0)){var It,ht;let E=(((It=i.flip)==null?void 0:It.index)||0)+1,Mt=Z[E];if(Mt&&(!(h==="alignment"?L!==gt(Mt):!1)||$.every(rt=>gt(rt.placement)===L?rt.overflows[0]>0:!0)))return{data:{index:E,overflows:$},reset:{placement:Mt}};let Qt=(ht=$.filter(st=>st.overflows[0]<=0).sort((st,rt)=>st.overflows[1]-rt.overflows[1])[0])==null?void 0:ht.placement;if(!Qt)switch(p){case"bestFit":{var yt;let st=(yt=$.filter(rt=>{if(k){let vt=gt(rt.placement);return vt===L||vt==="y"}return!0}).map(rt=>[rt.placement,rt.overflows.filter(vt=>vt>0).reduce((vt,Jr)=>vt+Jr,0)]).sort((rt,vt)=>rt[1]-vt[1])[0])==null?void 0:yt[0];st&&(Qt=st);break}case"initialPlacement":Qt=n;break}if(r!==Qt)return{reset:{placement:Qt}}}return{}}}};var Ti=new Set(["left","top"]);async function ji(t,e){let{placement:o,platform:s,elements:r}=t,i=await(s.isRTL==null?void 0:s.isRTL(r.floating)),l=Ct(o),n=Yt(o),c=gt(o)==="y",b=Ti.has(l)?-1:1,u=i&&c?-1:1,h=Vt(e,t),{mainAxis:g,crossAxis:p,alignmentAxis:m}=typeof h=="number"?{mainAxis:h,crossAxis:0,alignmentAxis:null}:{mainAxis:h.mainAxis||0,crossAxis:h.crossAxis||0,alignmentAxis:h.alignmentAxis};return n&&typeof m=="number"&&(p=n==="end"?m*-1:m),c?{x:p*u,y:g*b}:{x:g*b,y:p*u}}var dr=function(t){return t===void 0&&(t=0),{name:"offset",options:t,async fn(e){var o,s;let{x:r,y:i,placement:l,middlewareData:n}=e,c=await ji(e,t);return l===((o=n.offset)==null?void 0:o.placement)&&(s=n.arrow)!=null&&s.alignmentOffset?{}:{x:r+c.x,y:i+c.y,data:{...c,placement:l}}}}},br=function(t){return t===void 0&&(t={}),{name:"shift",options:t,async fn(e){let{x:o,y:s,placement:r,platform:i}=e,{mainAxis:l=!0,crossAxis:n=!1,limiter:c={fn:w=>{let{x:L,y:N}=w;return{x:L,y:N}}},...b}=Vt(t,e),u={x:o,y:s},h=await i.detectOverflow(e,b),g=gt(Ct(r)),p=Do(g),m=u[p],C=u[g];if(l){let w=p==="y"?"top":"left",L=p==="y"?"bottom":"right",N=m+h[w],D=m-h[L];m=to(N,m,D)}if(n){let w=g==="y"?"top":"left",L=g==="y"?"bottom":"right",N=C+h[w],D=C-h[L];C=to(N,C,D)}let I=c.fn({...e,[p]:m,[g]:C});return{...I,data:{x:I.x-o,y:I.y-s,enabled:{[p]:l,[g]:n}}}}}};var ur=function(t){return t===void 0&&(t={}),{name:"size",options:t,async fn(e){var o,s;let{placement:r,rects:i,platform:l,elements:n}=e,{apply:c=()=>{},...b}=Vt(t,e),u=await l.detectOverflow(e,b),h=Ct(r),g=Yt(r),p=gt(r)==="y",{width:m,height:C}=i.floating,I,w;h==="top"||h==="bottom"?(I=h,w=g===(await(l.isRTL==null?void 0:l.isRTL(n.floating))?"start":"end")?"left":"right"):(w=h,I=g==="end"?"top":"bottom");let L=C-u.top-u.bottom,N=m-u.left-u.right,D=pt(C-u[I],L),R=pt(m-u[w],N),k=!e.middlewareData.shift,Z=D,mt=R;if((o=e.middlewareData.shift)!=null&&o.enabled.x&&(mt=N),(s=e.middlewareData.shift)!=null&&s.enabled.y&&(Z=L),k&&!g){let $=j(u.left,0),It=j(u.right,0),ht=j(u.top,0),yt=j(u.bottom,0);p?mt=m-2*($!==0||It!==0?$+It:j(u.left,u.right)):Z=C-2*(ht!==0||yt!==0?ht+yt:j(u.top,u.bottom))}await c({...e,availableWidth:mt,availableHeight:Z});let ut=await l.getDimensions(n.floating);return m!==ut.width||C!==ut.height?{reset:{rects:!0}}:{}}}};function so(){return typeof window<"u"}function Ht(t){return pr(t)?(t.nodeName||"").toLowerCase():"#document"}function J(t){var e;return(t==null||(e=t.ownerDocument)==null?void 0:e.defaultView)||window}function dt(t){var e;return(e=(pr(t)?t.ownerDocument:t.document)||window.document)==null?void 0:e.documentElement}function pr(t){return so()?t instanceof Node||t instanceof J(t).Node:!1}function et(t){return so()?t instanceof Element||t instanceof J(t).Element:!1}function bt(t){return so()?t instanceof HTMLElement||t instanceof J(t).HTMLElement:!1}function hr(t){return!so()||typeof ShadowRoot>"u"?!1:t instanceof ShadowRoot||t instanceof J(t).ShadowRoot}var Vi=new Set(["inline","contents"]);function oe(t){let{overflow:e,overflowX:o,overflowY:s,display:r}=ot(t);return/auto|scroll|overlay|hidden|clip/.test(e+s+o)&&!Vi.has(r)}var Yi=new Set(["table","td","th"]);function gr(t){return Yi.has(Ht(t))}var Ji=[":popover-open",":modal"];function Ie(t){return Ji.some(e=>{try{return t.matches(e)}catch{return!1}})}var Hi=["transform","translate","scale","rotate","perspective"],_i=["transform","translate","scale","rotate","perspective","filter"],Ki=["paint","layout","strict","content"];function se(t){let e=ro(),o=et(t)?ot(t):t;return Hi.some(s=>o[s]?o[s]!=="none":!1)||(o.containerType?o.containerType!=="normal":!1)||!e&&(o.backdropFilter?o.backdropFilter!=="none":!1)||!e&&(o.filter?o.filter!=="none":!1)||_i.some(s=>(o.willChange||"").includes(s))||Ki.some(s=>(o.contain||"").includes(s))}function mr(t){let e=wt(t);for(;bt(e)&&!_t(e);){if(se(e))return e;if(Ie(e))return null;e=wt(e)}return null}function ro(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}var $i=new Set(["html","body","#document"]);function _t(t){return $i.has(Ht(t))}function ot(t){return J(t).getComputedStyle(t)}function ye(t){return et(t)?{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}:{scrollLeft:t.scrollX,scrollTop:t.scrollY}}function wt(t){if(Ht(t)==="html")return t;let e=t.assignedSlot||t.parentNode||hr(t)&&t.host||dt(t);return hr(e)?e.host:e}function Qr(t){let e=wt(t);return _t(e)?t.ownerDocument?t.ownerDocument.body:t.body:bt(e)&&oe(e)?e:Qr(e)}function ee(t,e,o){var s;e===void 0&&(e=[]),o===void 0&&(o=!0);let r=Qr(t),i=r===((s=t.ownerDocument)==null?void 0:s.body),l=J(r);if(i){let n=io(l);return e.concat(l,l.visualViewport||[],oe(r)?r:[],n&&o?ee(n):[])}return e.concat(r,ee(r,[],o))}function io(t){return t.parent&&Object.getPrototypeOf(t.parent)?t.frameElement:null}function fr(t){let e=ot(t),o=parseFloat(e.width)||0,s=parseFloat(e.height)||0,r=bt(t),i=r?t.offsetWidth:o,l=r?t.offsetHeight:s,n=Ce(o)!==i||Ce(s)!==l;return n&&(o=i,s=l),{width:o,height:s,$:n}}function ko(t){return et(t)?t:t.contextElement}function re(t){let e=ko(t);if(!bt(e))return ct(1);let o=e.getBoundingClientRect(),{width:s,height:r,$:i}=fr(e),l=(i?Ce(o.width):o.width)/s,n=(i?Ce(o.height):o.height)/r;return(!l||!Number.isFinite(l))&&(l=1),(!n||!Number.isFinite(n))&&(n=1),{x:l,y:n}}var Pi=ct(0);function Cr(t){let e=J(t);return!ro()||!e.visualViewport?Pi:{x:e.visualViewport.offsetLeft,y:e.visualViewport.offsetTop}}function qi(t,e,o){return e===void 0&&(e=!1),!o||e&&o!==J(t)?!1:e}function Kt(t,e,o,s){e===void 0&&(e=!1),o===void 0&&(o=!1);let r=t.getBoundingClientRect(),i=ko(t),l=ct(1);e&&(s?et(s)&&(l=re(s)):l=re(t));let n=qi(i,o,s)?Cr(i):ct(0),c=(r.left+n.x)/l.x,b=(r.top+n.y)/l.y,u=r.width/l.x,h=r.height/l.y;if(i){let g=J(i),p=s&&et(s)?J(s):s,m=g,C=io(m);for(;C&&s&&p!==m;){let I=re(C),w=C.getBoundingClientRect(),L=ot(C),N=w.left+(C.clientLeft+parseFloat(L.paddingLeft))*I.x,D=w.top+(C.clientTop+parseFloat(L.paddingTop))*I.y;c*=I.x,b*=I.y,u*=I.x,h*=I.y,c+=N,b+=D,m=J(C),C=io(m)}}return Jt({width:u,height:h,x:c,y:b})}function lo(t,e){let o=ye(t).scrollLeft;return e?e.left+o:Kt(dt(t)).left+o}function wr(t,e){let o=t.getBoundingClientRect(),s=o.left+e.scrollLeft-lo(t,o),r=o.top+e.scrollTop;return{x:s,y:r}}function tl(t){let{elements:e,rect:o,offsetParent:s,strategy:r}=t,i=r==="fixed",l=dt(s),n=e?Ie(e.floating):!1;if(s===l||n&&i)return o;let c={scrollLeft:0,scrollTop:0},b=ct(1),u=ct(0),h=bt(s);if((h||!h&&!i)&&((Ht(s)!=="body"||oe(l))&&(c=ye(s)),bt(s))){let p=Kt(s);b=re(s),u.x=p.x+s.clientLeft,u.y=p.y+s.clientTop}let g=l&&!h&&!i?wr(l,c):ct(0);return{width:o.width*b.x,height:o.height*b.y,x:o.x*b.x-c.scrollLeft*b.x+u.x+g.x,y:o.y*b.y-c.scrollTop*b.y+u.y+g.y}}function el(t){return Array.from(t.getClientRects())}function ol(t){let e=dt(t),o=ye(t),s=t.ownerDocument.body,r=j(e.scrollWidth,e.clientWidth,s.scrollWidth,s.clientWidth),i=j(e.scrollHeight,e.clientHeight,s.scrollHeight,s.clientHeight),l=-o.scrollLeft+lo(t),n=-o.scrollTop;return ot(s).direction==="rtl"&&(l+=j(e.clientWidth,s.clientWidth)-r),{width:r,height:i,x:l,y:n}}var Br=25;function sl(t,e){let o=J(t),s=dt(t),r=o.visualViewport,i=s.clientWidth,l=s.clientHeight,n=0,c=0;if(r){i=r.width,l=r.height;let u=ro();(!u||u&&e==="fixed")&&(n=r.offsetLeft,c=r.offsetTop)}let b=lo(s);if(b<=0){let u=s.ownerDocument,h=u.body,g=getComputedStyle(h),p=u.compatMode==="CSS1Compat"&&parseFloat(g.marginLeft)+parseFloat(g.marginRight)||0,m=Math.abs(s.clientWidth-h.clientWidth-p);m<=Br&&(i-=m)}else b<=Br&&(i+=b);return{width:i,height:l,x:n,y:c}}var rl=new Set(["absolute","fixed"]);function il(t,e){let o=Kt(t,!0,e==="fixed"),s=o.top+t.clientTop,r=o.left+t.clientLeft,i=bt(t)?re(t):ct(1),l=t.clientWidth*i.x,n=t.clientHeight*i.y,c=r*i.x,b=s*i.y;return{width:l,height:n,x:c,y:b}}function Fr(t,e,o){let s;if(e==="viewport")s=sl(t,o);else if(e==="document")s=ol(dt(t));else if(et(e))s=il(e,o);else{let r=Cr(t);s={x:e.x-r.x,y:e.y-r.y,width:e.width,height:e.height}}return Jt(s)}function Ir(t,e){let o=wt(t);return o===e||!et(o)||_t(o)?!1:ot(o).position==="fixed"||Ir(o,e)}function ll(t,e){let o=e.get(t);if(o)return o;let s=ee(t,[],!1).filter(n=>et(n)&&Ht(n)!=="body"),r=null,i=ot(t).position==="fixed",l=i?wt(t):t;for(;et(l)&&!_t(l);){let n=ot(l),c=se(l);!c&&n.position==="fixed"&&(r=null),(i?!c&&!r:!c&&n.position==="static"&&!!r&&rl.has(r.position)||oe(l)&&!c&&Ir(t,l))?s=s.filter(u=>u!==l):r=n,l=wt(l)}return e.set(t,s),s}function al(t){let{element:e,boundary:o,rootBoundary:s,strategy:r}=t,l=[...o==="clippingAncestors"?Ie(e)?[]:ll(e,this._c):[].concat(o),s],n=l[0],c=l.reduce((b,u)=>{let h=Fr(e,u,r);return b.top=j(h.top,b.top),b.right=pt(h.right,b.right),b.bottom=pt(h.bottom,b.bottom),b.left=j(h.left,b.left),b},Fr(e,n,r));return{width:c.right-c.left,height:c.bottom-c.top,x:c.left,y:c.top}}function nl(t){let{width:e,height:o}=fr(t);return{width:e,height:o}}function cl(t,e,o){let s=bt(e),r=dt(e),i=o==="fixed",l=Kt(t,!0,i,e),n={scrollLeft:0,scrollTop:0},c=ct(0);function b(){c.x=lo(r)}if(s||!s&&!i)if((Ht(e)!=="body"||oe(r))&&(n=ye(e)),s){let p=Kt(e,!0,i,e);c.x=p.x+e.clientLeft,c.y=p.y+e.clientTop}else r&&b();i&&!s&&r&&b();let u=r&&!s&&!i?wr(r,n):ct(0),h=l.left+n.scrollLeft-c.x-u.x,g=l.top+n.scrollTop-c.y-u.y;return{x:h,y:g,width:l.width,height:l.height}}function Go(t){return ot(t).position==="static"}function Ur(t,e){if(!bt(t)||ot(t).position==="fixed")return null;if(e)return e(t);let o=t.offsetParent;return dt(t)===o&&(o=o.ownerDocument.body),o}function yr(t,e){let o=J(t);if(Ie(t))return o;if(!bt(t)){let r=wt(t);for(;r&&!_t(r);){if(et(r)&&!Go(r))return r;r=wt(r)}return o}let s=Ur(t,e);for(;s&&gr(s)&&Go(s);)s=Ur(s,e);return s&&_t(s)&&Go(s)&&!se(s)?o:s||mr(t)||o}var dl=async function(t){let e=this.getOffsetParent||yr,o=this.getDimensions,s=await o(t.floating);return{reference:cl(t.reference,await e(t.floating),t.strategy),floating:{x:0,y:0,width:s.width,height:s.height}}};function bl(t){return ot(t).direction==="rtl"}var ve={convertOffsetParentRelativeRectToViewportRelativeRect:tl,getDocumentElement:dt,getClippingRect:al,getOffsetParent:yr,getElementRects:dl,getClientRects:el,getDimensions:nl,getScale:re,isElement:et,isRTL:bl};function vr(t,e){return t.x===e.x&&t.y===e.y&&t.width===e.width&&t.height===e.height}function ul(t,e){let o=null,s,r=dt(t);function i(){var n;clearTimeout(s),(n=o)==null||n.disconnect(),o=null}function l(n,c){n===void 0&&(n=!1),c===void 0&&(c=1),i();let b=t.getBoundingClientRect(),{left:u,top:h,width:g,height:p}=b;if(n||e(),!g||!p)return;let m=we(h),C=we(r.clientWidth-(u+g)),I=we(r.clientHeight-(h+p)),w=we(u),N={rootMargin:-m+"px "+-C+"px "+-I+"px "+-w+"px",threshold:j(0,pt(1,c))||1},D=!0;function R(k){let Z=k[0].intersectionRatio;if(Z!==c){if(!D)return l();Z?l(!1,Z):s=setTimeout(()=>{l(!1,1e-7)},1e3)}Z===1&&!vr(b,t.getBoundingClientRect())&&l(),D=!1}try{o=new IntersectionObserver(R,{...N,root:r.ownerDocument})}catch{o=new IntersectionObserver(R,N)}o.observe(t)}return l(!0),i}function xr(t,e,o,s){s===void 0&&(s={});let{ancestorScroll:r=!0,ancestorResize:i=!0,elementResize:l=typeof ResizeObserver=="function",layoutShift:n=typeof IntersectionObserver=="function",animationFrame:c=!1}=s,b=ko(t),u=r||i?[...b?ee(b):[],...ee(e)]:[];u.forEach(w=>{r&&w.addEventListener("scroll",o,{passive:!0}),i&&w.addEventListener("resize",o)});let h=b&&n?ul(b,o):null,g=-1,p=null;l&&(p=new ResizeObserver(w=>{let[L]=w;L&&L.target===b&&p&&(p.unobserve(e),cancelAnimationFrame(g),g=requestAnimationFrame(()=>{var N;(N=p)==null||N.observe(e)})),o()}),b&&!c&&p.observe(b),p.observe(e));let m,C=c?Kt(t):null;c&&I();function I(){let w=Kt(t);C&&!vr(C,w)&&o(),C=w,m=requestAnimationFrame(I)}return o(),()=>{var w;u.forEach(L=>{r&&L.removeEventListener("scroll",o),i&&L.removeEventListener("resize",o)}),h?.(),(w=p)==null||w.disconnect(),p=null,c&&cancelAnimationFrame(m)}}var Lr=dr;var Or=br,Nr=cr,Xo=ur;var Ar=nr;var Wr=(t,e,o)=>{let s=new Map,r={platform:ve,...o},i={...r.platform,_c:s};return ar(t,e,{...r,platform:i})};function Mr(t){return hl(t)}function So(t){return t.assignedSlot?t.assignedSlot:t.parentNode instanceof ShadowRoot?t.parentNode.host:t.parentNode}function hl(t){for(let e=t;e;e=So(e))if(e instanceof Element&&getComputedStyle(e).display==="none")return null;for(let e=So(t);e;e=So(e)){if(!(e instanceof Element))continue;let o=getComputedStyle(e);if(o.display!=="contents"&&(o.position!=="static"||se(o)||e.tagName==="BODY"))return e}return null}function pl(t){return t!==null&&typeof t=="object"&&"getBoundingClientRect"in t&&("contextElement"in t?t.contextElement instanceof Element:!0)}var O=class extends f{constructor(){super(...arguments),this.localize=new G(this),this.active=!1,this.placement="top",this.strategy="absolute",this.distance=0,this.skidding=0,this.arrow=!1,this.arrowPlacement="anchor",this.arrowPadding=10,this.flip=!1,this.flipFallbackPlacements="",this.flipFallbackStrategy="best-fit",this.flipPadding=0,this.shift=!1,this.shiftPadding=0,this.autoSizePadding=0,this.hoverBridge=!1,this.updateHoverBridge=()=>{if(this.hoverBridge&&this.anchorEl){let t=this.anchorEl.getBoundingClientRect(),e=this.popup.getBoundingClientRect(),o=this.placement.includes("top")||this.placement.includes("bottom"),s=0,r=0,i=0,l=0,n=0,c=0,b=0,u=0;o?t.top<e.top?(s=t.left,r=t.bottom,i=t.right,l=t.bottom,n=e.left,c=e.top,b=e.right,u=e.top):(s=e.left,r=e.bottom,i=e.right,l=e.bottom,n=t.left,c=t.top,b=t.right,u=t.top):t.left<e.left?(s=t.right,r=t.top,i=e.left,l=e.top,n=t.right,c=t.bottom,b=e.left,u=e.bottom):(s=e.right,r=e.top,i=t.left,l=t.top,n=e.right,c=e.bottom,b=t.left,u=t.bottom),this.style.setProperty("--hover-bridge-top-left-x",`${s}px`),this.style.setProperty("--hover-bridge-top-left-y",`${r}px`),this.style.setProperty("--hover-bridge-top-right-x",`${i}px`),this.style.setProperty("--hover-bridge-top-right-y",`${l}px`),this.style.setProperty("--hover-bridge-bottom-left-x",`${n}px`),this.style.setProperty("--hover-bridge-bottom-left-y",`${c}px`),this.style.setProperty("--hover-bridge-bottom-right-x",`${b}px`),this.style.setProperty("--hover-bridge-bottom-right-y",`${u}px`)}}}async connectedCallback(){super.connectedCallback(),await this.updateComplete,this.start()}disconnectedCallback(){super.disconnectedCallback(),this.stop()}async updated(t){super.updated(t),t.has("active")&&(this.active?this.start():this.stop()),t.has("anchor")&&this.handleAnchorChange(),this.active&&(await this.updateComplete,this.reposition())}async handleAnchorChange(){if(await this.stop(),this.anchor&&typeof this.anchor=="string"){let t=this.getRootNode();this.anchorEl=t.getElementById(this.anchor)}else this.anchor instanceof Element||pl(this.anchor)?this.anchorEl=this.anchor:this.anchorEl=this.querySelector('[slot="anchor"]');this.anchorEl instanceof HTMLSlotElement&&(this.anchorEl=this.anchorEl.assignedElements({flatten:!0})[0]),this.anchorEl&&this.active&&this.start()}start(){!this.anchorEl||!this.active||(this.cleanup=xr(this.anchorEl,this.popup,()=>{this.reposition()}))}async stop(){return new Promise(t=>{this.cleanup?(this.cleanup(),this.cleanup=void 0,this.removeAttribute("data-current-placement"),this.style.removeProperty("--auto-size-available-width"),this.style.removeProperty("--auto-size-available-height"),requestAnimationFrame(()=>t())):t()})}reposition(){if(!this.active||!this.anchorEl)return;let t=[Lr({mainAxis:this.distance,crossAxis:this.skidding})];this.sync?t.push(Xo({apply:({rects:o})=>{let s=this.sync==="width"||this.sync==="both",r=this.sync==="height"||this.sync==="both";this.popup.style.width=s?`${o.reference.width}px`:"",this.popup.style.height=r?`${o.reference.height}px`:""}})):(this.popup.style.width="",this.popup.style.height=""),this.flip&&t.push(Nr({boundary:this.flipBoundary,fallbackPlacements:this.flipFallbackPlacements,fallbackStrategy:this.flipFallbackStrategy==="best-fit"?"bestFit":"initialPlacement",padding:this.flipPadding})),this.shift&&t.push(Or({boundary:this.shiftBoundary,padding:this.shiftPadding})),this.autoSize?t.push(Xo({boundary:this.autoSizeBoundary,padding:this.autoSizePadding,apply:({availableWidth:o,availableHeight:s})=>{this.autoSize==="vertical"||this.autoSize==="both"?this.style.setProperty("--auto-size-available-height",`${s}px`):this.style.removeProperty("--auto-size-available-height"),this.autoSize==="horizontal"||this.autoSize==="both"?this.style.setProperty("--auto-size-available-width",`${o}px`):this.style.removeProperty("--auto-size-available-width")}})):(this.style.removeProperty("--auto-size-available-width"),this.style.removeProperty("--auto-size-available-height")),this.arrow&&t.push(Ar({element:this.arrowEl,padding:this.arrowPadding}));let e=this.strategy==="absolute"?o=>ve.getOffsetParent(o,Mr):ve.getOffsetParent;Wr(this.anchorEl,this.popup,{placement:this.placement,middleware:t,strategy:this.strategy,platform:xt(_({},ve),{getOffsetParent:e})}).then(({x:o,y:s,middlewareData:r,placement:i})=>{let l=this.localize.dir()==="rtl",n={top:"bottom",right:"left",bottom:"top",left:"right"}[i.split("-")[0]];if(this.setAttribute("data-current-placement",i),Object.assign(this.popup.style,{left:`${o}px`,top:`${s}px`}),this.arrow){let c=r.arrow.x,b=r.arrow.y,u="",h="",g="",p="";if(this.arrowPlacement==="start"){let m=typeof c=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"";u=typeof b=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"",h=l?m:"",p=l?"":m}else if(this.arrowPlacement==="end"){let m=typeof c=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"";h=l?"":m,p=l?m:"",g=typeof b=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:""}else this.arrowPlacement==="center"?(p=typeof c=="number"?"calc(50% - var(--arrow-size-diagonal))":"",u=typeof b=="number"?"calc(50% - var(--arrow-size-diagonal))":""):(p=typeof c=="number"?`${c}px`:"",u=typeof b=="number"?`${b}px`:"");Object.assign(this.arrowEl.style,{top:u,right:h,bottom:g,left:p,[n]:"calc(var(--arrow-size-diagonal) * -1)"})}}),requestAnimationFrame(()=>this.updateHoverBridge()),this.emit("sl-reposition")}render(){return Q`
      <slot name="anchor" @slotchange=${this.handleAnchorChange}></slot>

      <span
        part="hover-bridge"
        class=${A({"popup-hover-bridge":!0,"popup-hover-bridge--visible":this.hoverBridge&&this.active})}
      ></span>

      <div
        part="popup"
        class=${A({popup:!0,"popup--active":this.active,"popup--fixed":this.strategy==="fixed","popup--has-arrow":this.arrow})}
      >
        <slot></slot>
        ${this.arrow?Q`<div part="arrow" class="popup__arrow" role="presentation"></div>`:""}
      </div>
    `}};O.styles=[y,qs];a([v(".popup")],O.prototype,"popup",2);a([v(".popup__arrow")],O.prototype,"arrowEl",2);a([d()],O.prototype,"anchor",2);a([d({type:Boolean,reflect:!0})],O.prototype,"active",2);a([d({reflect:!0})],O.prototype,"placement",2);a([d({reflect:!0})],O.prototype,"strategy",2);a([d({type:Number})],O.prototype,"distance",2);a([d({type:Number})],O.prototype,"skidding",2);a([d({type:Boolean})],O.prototype,"arrow",2);a([d({attribute:"arrow-placement"})],O.prototype,"arrowPlacement",2);a([d({attribute:"arrow-padding",type:Number})],O.prototype,"arrowPadding",2);a([d({type:Boolean})],O.prototype,"flip",2);a([d({attribute:"flip-fallback-placements",converter:{fromAttribute:t=>t.split(" ").map(e=>e.trim()).filter(e=>e!==""),toAttribute:t=>t.join(" ")}})],O.prototype,"flipFallbackPlacements",2);a([d({attribute:"flip-fallback-strategy"})],O.prototype,"flipFallbackStrategy",2);a([d({type:Object})],O.prototype,"flipBoundary",2);a([d({attribute:"flip-padding",type:Number})],O.prototype,"flipPadding",2);a([d({type:Boolean})],O.prototype,"shift",2);a([d({type:Object})],O.prototype,"shiftBoundary",2);a([d({attribute:"shift-padding",type:Number})],O.prototype,"shiftPadding",2);a([d({attribute:"auto-size"})],O.prototype,"autoSize",2);a([d()],O.prototype,"sync",2);a([d({type:Object})],O.prototype,"autoSizeBoundary",2);a([d({attribute:"auto-size-padding",type:Number})],O.prototype,"autoSizePadding",2);a([d({attribute:"hover-bridge",type:Boolean})],O.prototype,"hoverBridge",2);var S=class extends f{constructor(){super(...arguments),this.localize=new G(this),this.open=!1,this.placement="bottom-start",this.disabled=!1,this.stayOpenOnSelect=!1,this.distance=0,this.skidding=0,this.hoist=!1,this.sync=void 0,this.handleKeyDown=t=>{this.open&&t.key==="Escape"&&(t.stopPropagation(),this.hide(),this.focusOnTrigger())},this.handleDocumentKeyDown=t=>{var e;if(t.key==="Escape"&&this.open&&!this.closeWatcher){t.stopPropagation(),this.focusOnTrigger(),this.hide();return}if(t.key==="Tab"){if(this.open&&((e=document.activeElement)==null?void 0:e.tagName.toLowerCase())==="sl-menu-item"){t.preventDefault(),this.hide(),this.focusOnTrigger();return}let o=(s,r)=>{if(!s)return null;let i=s.closest(r);if(i)return i;let l=s.getRootNode();return l instanceof ShadowRoot?o(l.host,r):null};setTimeout(()=>{var s;let r=((s=this.containingElement)==null?void 0:s.getRootNode())instanceof ShadowRoot?$e():document.activeElement;(!this.containingElement||o(r,this.containingElement.tagName.toLowerCase())!==this.containingElement)&&this.hide()})}},this.handleDocumentMouseDown=t=>{let e=t.composedPath();this.containingElement&&!e.includes(this.containingElement)&&this.hide()},this.handlePanelSelect=t=>{let e=t.target;!this.stayOpenOnSelect&&e.tagName.toLowerCase()==="sl-menu"&&(this.hide(),this.focusOnTrigger())}}connectedCallback(){super.connectedCallback(),this.containingElement||(this.containingElement=this)}firstUpdated(){this.panel.hidden=!this.open,this.open&&(this.addOpenListeners(),this.popup.active=!0)}disconnectedCallback(){super.disconnectedCallback(),this.removeOpenListeners(),this.hide()}focusOnTrigger(){let t=this.trigger.assignedElements({flatten:!0})[0];typeof t?.focus=="function"&&t.focus()}getMenu(){return this.panel.assignedElements({flatten:!0}).find(t=>t.tagName.toLowerCase()==="sl-menu")}handleTriggerClick(){this.open?this.hide():(this.show(),this.focusOnTrigger())}async handleTriggerKeyDown(t){if([" ","Enter"].includes(t.key)){t.preventDefault(),this.handleTriggerClick();return}let e=this.getMenu();if(e){let o=e.getAllItems(),s=o[0],r=o[o.length-1];["ArrowDown","ArrowUp","Home","End"].includes(t.key)&&(t.preventDefault(),this.open||(this.show(),await this.updateComplete),o.length>0&&this.updateComplete.then(()=>{(t.key==="ArrowDown"||t.key==="Home")&&(e.setCurrentItem(s),s.focus()),(t.key==="ArrowUp"||t.key==="End")&&(e.setCurrentItem(r),r.focus())}))}}handleTriggerKeyUp(t){t.key===" "&&t.preventDefault()}handleTriggerSlotChange(){this.updateAccessibleTrigger()}updateAccessibleTrigger(){let e=this.trigger.assignedElements({flatten:!0}).find(s=>Hs(s).start),o;if(e){switch(e.tagName.toLowerCase()){case"sl-button":case"sl-icon-button":o=e.button;break;default:o=e}o.setAttribute("aria-haspopup","true"),o.setAttribute("aria-expanded",this.open?"true":"false")}}async show(){if(!this.open)return this.open=!0,Ut(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,Ut(this,"sl-after-hide")}reposition(){this.popup.reposition()}addOpenListeners(){var t;this.panel.addEventListener("sl-select",this.handlePanelSelect),"CloseWatcher"in window?((t=this.closeWatcher)==null||t.destroy(),this.closeWatcher=new CloseWatcher,this.closeWatcher.onclose=()=>{this.hide(),this.focusOnTrigger()}):this.panel.addEventListener("keydown",this.handleKeyDown),document.addEventListener("keydown",this.handleDocumentKeyDown),document.addEventListener("mousedown",this.handleDocumentMouseDown)}removeOpenListeners(){var t;this.panel&&(this.panel.removeEventListener("sl-select",this.handlePanelSelect),this.panel.removeEventListener("keydown",this.handleKeyDown)),document.removeEventListener("keydown",this.handleDocumentKeyDown),document.removeEventListener("mousedown",this.handleDocumentMouseDown),(t=this.closeWatcher)==null||t.destroy()}async handleOpenChange(){if(this.disabled){this.open=!1;return}if(this.updateAccessibleTrigger(),this.open){this.emit("sl-show"),this.addOpenListeners(),await lt(this),this.panel.hidden=!1,this.popup.active=!0;let{keyframes:t,options:e}=q(this,"dropdown.show",{dir:this.localize.dir()});await tt(this.popup.popup,t,e),this.emit("sl-after-show")}else{this.emit("sl-hide"),this.removeOpenListeners(),await lt(this);let{keyframes:t,options:e}=q(this,"dropdown.hide",{dir:this.localize.dir()});await tt(this.popup.popup,t,e),this.panel.hidden=!0,this.popup.active=!1,this.emit("sl-after-hide")}}render(){return Q`
      <sl-popup
        part="base"
        exportparts="popup:base__popup"
        id="dropdown"
        placement=${this.placement}
        distance=${this.distance}
        skidding=${this.skidding}
        strategy=${this.hoist?"fixed":"absolute"}
        flip
        shift
        auto-size="vertical"
        auto-size-padding="10"
        sync=${B(this.sync?this.sync:void 0)}
        class=${A({dropdown:!0,"dropdown--open":this.open})}
      >
        <slot
          name="trigger"
          slot="anchor"
          part="trigger"
          class="dropdown__trigger"
          @click=${this.handleTriggerClick}
          @keydown=${this.handleTriggerKeyDown}
          @keyup=${this.handleTriggerKeyUp}
          @slotchange=${this.handleTriggerSlotChange}
        ></slot>

        <div aria-hidden=${this.open?"false":"true"} aria-labelledby="dropdown">
          <slot part="panel" class="dropdown__panel"></slot>
        </div>
      </sl-popup>
    `}};S.styles=[y,Ps];S.dependencies={"sl-popup":O};a([v(".dropdown")],S.prototype,"popup",2);a([v(".dropdown__trigger")],S.prototype,"trigger",2);a([v(".dropdown__panel")],S.prototype,"panel",2);a([d({type:Boolean,reflect:!0})],S.prototype,"open",2);a([d({reflect:!0})],S.prototype,"placement",2);a([d({type:Boolean,reflect:!0})],S.prototype,"disabled",2);a([d({attribute:"stay-open-on-select",type:Boolean,reflect:!0})],S.prototype,"stayOpenOnSelect",2);a([d({attribute:!1})],S.prototype,"containingElement",2);a([d({type:Number})],S.prototype,"distance",2);a([d({type:Number})],S.prototype,"skidding",2);a([d({type:Boolean})],S.prototype,"hoist",2);a([d({reflect:!0})],S.prototype,"sync",2);a([W("open",{waitUntilFirstUpdate:!0})],S.prototype,"handleOpenChange",1);P("dropdown.show",{keyframes:[{opacity:0,scale:.9},{opacity:1,scale:1}],options:{duration:100,easing:"ease"}});P("dropdown.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.9}],options:{duration:100,easing:"ease"}});S.define("sl-dropdown");z.define("sl-icon");var Dr=U`
  :host {
    display: block;
  }

  .input {
    flex: 1 1 auto;
    display: inline-flex;
    align-items: stretch;
    justify-content: start;
    position: relative;
    width: 100%;
    font-family: var(--sl-input-font-family);
    font-weight: var(--sl-input-font-weight);
    letter-spacing: var(--sl-input-letter-spacing);
    vertical-align: middle;
    overflow: hidden;
    cursor: text;
    transition:
      var(--sl-transition-fast) color,
      var(--sl-transition-fast) border,
      var(--sl-transition-fast) box-shadow,
      var(--sl-transition-fast) background-color;
  }

  /* Standard inputs */
  .input--standard {
    background-color: var(--sl-input-background-color);
    border: solid var(--sl-input-border-width) var(--sl-input-border-color);
  }

  .input--standard:hover:not(.input--disabled) {
    background-color: var(--sl-input-background-color-hover);
    border-color: var(--sl-input-border-color-hover);
  }

  .input--standard.input--focused:not(.input--disabled) {
    background-color: var(--sl-input-background-color-focus);
    border-color: var(--sl-input-border-color-focus);
    box-shadow: 0 0 0 var(--sl-focus-ring-width) var(--sl-input-focus-ring-color);
  }

  .input--standard.input--focused:not(.input--disabled) .input__control {
    color: var(--sl-input-color-focus);
  }

  .input--standard.input--disabled {
    background-color: var(--sl-input-background-color-disabled);
    border-color: var(--sl-input-border-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
  }

  .input--standard.input--disabled .input__control {
    color: var(--sl-input-color-disabled);
  }

  .input--standard.input--disabled .input__control::placeholder {
    color: var(--sl-input-placeholder-color-disabled);
  }

  /* Filled inputs */
  .input--filled {
    border: none;
    background-color: var(--sl-input-filled-background-color);
    color: var(--sl-input-color);
  }

  .input--filled:hover:not(.input--disabled) {
    background-color: var(--sl-input-filled-background-color-hover);
  }

  .input--filled.input--focused:not(.input--disabled) {
    background-color: var(--sl-input-filled-background-color-focus);
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .input--filled.input--disabled {
    background-color: var(--sl-input-filled-background-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
  }

  .input__control {
    flex: 1 1 auto;
    font-family: inherit;
    font-size: inherit;
    font-weight: inherit;
    min-width: 0;
    height: 100%;
    color: var(--sl-input-color);
    border: none;
    background: inherit;
    box-shadow: none;
    padding: 0;
    margin: 0;
    cursor: inherit;
    -webkit-appearance: none;
  }

  .input__control::-webkit-search-decoration,
  .input__control::-webkit-search-cancel-button,
  .input__control::-webkit-search-results-button,
  .input__control::-webkit-search-results-decoration {
    -webkit-appearance: none;
  }

  .input__control:-webkit-autofill,
  .input__control:-webkit-autofill:hover,
  .input__control:-webkit-autofill:focus,
  .input__control:-webkit-autofill:active {
    box-shadow: 0 0 0 var(--sl-input-height-large) var(--sl-input-background-color-hover) inset !important;
    -webkit-text-fill-color: var(--sl-color-primary-500);
    caret-color: var(--sl-input-color);
  }

  .input--filled .input__control:-webkit-autofill,
  .input--filled .input__control:-webkit-autofill:hover,
  .input--filled .input__control:-webkit-autofill:focus,
  .input--filled .input__control:-webkit-autofill:active {
    box-shadow: 0 0 0 var(--sl-input-height-large) var(--sl-input-filled-background-color) inset !important;
  }

  .input__control::placeholder {
    color: var(--sl-input-placeholder-color);
    user-select: none;
    -webkit-user-select: none;
  }

  .input:hover:not(.input--disabled) .input__control {
    color: var(--sl-input-color-hover);
  }

  .input__control:focus {
    outline: none;
  }

  .input__prefix,
  .input__suffix {
    display: inline-flex;
    flex: 0 0 auto;
    align-items: center;
    cursor: default;
  }

  .input__prefix ::slotted(sl-icon),
  .input__suffix ::slotted(sl-icon) {
    color: var(--sl-input-icon-color);
  }

  /*
   * Size modifiers
   */

  .input--small {
    border-radius: var(--sl-input-border-radius-small);
    font-size: var(--sl-input-font-size-small);
    height: var(--sl-input-height-small);
  }

  .input--small .input__control {
    height: calc(var(--sl-input-height-small) - var(--sl-input-border-width) * 2);
    padding: 0 var(--sl-input-spacing-small);
  }

  .input--small .input__clear,
  .input--small .input__password-toggle {
    width: calc(1em + var(--sl-input-spacing-small) * 2);
  }

  .input--small .input__prefix ::slotted(*) {
    margin-inline-start: var(--sl-input-spacing-small);
  }

  .input--small .input__suffix ::slotted(*) {
    margin-inline-end: var(--sl-input-spacing-small);
  }

  .input--medium {
    border-radius: var(--sl-input-border-radius-medium);
    font-size: var(--sl-input-font-size-medium);
    height: var(--sl-input-height-medium);
  }

  .input--medium .input__control {
    height: calc(var(--sl-input-height-medium) - var(--sl-input-border-width) * 2);
    padding: 0 var(--sl-input-spacing-medium);
  }

  .input--medium .input__clear,
  .input--medium .input__password-toggle {
    width: calc(1em + var(--sl-input-spacing-medium) * 2);
  }

  .input--medium .input__prefix ::slotted(*) {
    margin-inline-start: var(--sl-input-spacing-medium);
  }

  .input--medium .input__suffix ::slotted(*) {
    margin-inline-end: var(--sl-input-spacing-medium);
  }

  .input--large {
    border-radius: var(--sl-input-border-radius-large);
    font-size: var(--sl-input-font-size-large);
    height: var(--sl-input-height-large);
  }

  .input--large .input__control {
    height: calc(var(--sl-input-height-large) - var(--sl-input-border-width) * 2);
    padding: 0 var(--sl-input-spacing-large);
  }

  .input--large .input__clear,
  .input--large .input__password-toggle {
    width: calc(1em + var(--sl-input-spacing-large) * 2);
  }

  .input--large .input__prefix ::slotted(*) {
    margin-inline-start: var(--sl-input-spacing-large);
  }

  .input--large .input__suffix ::slotted(*) {
    margin-inline-end: var(--sl-input-spacing-large);
  }

  /*
   * Pill modifier
   */

  .input--pill.input--small {
    border-radius: var(--sl-input-height-small);
  }

  .input--pill.input--medium {
    border-radius: var(--sl-input-height-medium);
  }

  .input--pill.input--large {
    border-radius: var(--sl-input-height-large);
  }

  /*
   * Clearable + Password Toggle
   */

  .input__clear,
  .input__password-toggle {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: inherit;
    color: var(--sl-input-icon-color);
    border: none;
    background: none;
    padding: 0;
    transition: var(--sl-transition-fast) color;
    cursor: pointer;
  }

  .input__clear:hover,
  .input__password-toggle:hover {
    color: var(--sl-input-icon-color-hover);
  }

  .input__clear:focus,
  .input__password-toggle:focus {
    outline: none;
  }

  /* Don't show the browser's password toggle in Edge */
  ::-ms-reveal {
    display: none;
  }

  /* Hide the built-in number spinner */
  .input--no-spin-buttons input[type='number']::-webkit-outer-spin-button,
  .input--no-spin-buttons input[type='number']::-webkit-inner-spin-button {
    -webkit-appearance: none;
    display: none;
  }

  .input--no-spin-buttons input[type='number'] {
    -moz-appearance: textfield;
  }
`;var zr=(t="value")=>(e,o)=>{let s=e.constructor,r=s.prototype.attributeChangedCallback;s.prototype.attributeChangedCallback=function(i,l,n){var c;let b=s.getPropertyOptions(t),u=typeof b.attribute=="string"?b.attribute:t;if(i===u){let h=b.converter||Ot,p=(typeof h=="function"?h:(c=h?.fromAttribute)!=null?c:Ot.fromAttribute)(n,b.type);this[t]!==p&&(this[o]=p)}r.call(this,i,l,n)}};var Gr=U`
  .form-control .form-control__label {
    display: none;
  }

  .form-control .form-control__help-text {
    display: none;
  }

  /* Label */
  .form-control--has-label .form-control__label {
    display: inline-block;
    color: var(--sl-input-label-color);
    margin-bottom: var(--sl-spacing-3x-small);
  }

  .form-control--has-label.form-control--small .form-control__label {
    font-size: var(--sl-input-label-font-size-small);
  }

  .form-control--has-label.form-control--medium .form-control__label {
    font-size: var(--sl-input-label-font-size-medium);
  }

  .form-control--has-label.form-control--large .form-control__label {
    font-size: var(--sl-input-label-font-size-large);
  }

  :host([required]) .form-control--has-label .form-control__label::after {
    content: var(--sl-input-required-content);
    margin-inline-start: var(--sl-input-required-content-offset);
    color: var(--sl-input-required-content-color);
  }

  /* Help text */
  .form-control--has-help-text .form-control__help-text {
    display: block;
    color: var(--sl-input-help-text-color);
    margin-top: var(--sl-spacing-3x-small);
  }

  .form-control--has-help-text.form-control--small .form-control__help-text {
    font-size: var(--sl-input-help-text-font-size-small);
  }

  .form-control--has-help-text.form-control--medium .form-control__help-text {
    font-size: var(--sl-input-help-text-font-size-medium);
  }

  .form-control--has-help-text.form-control--large .form-control__help-text {
    font-size: var(--sl-input-help-text-font-size-large);
  }

  .form-control--has-help-text.form-control--radio-group .form-control__help-text {
    margin-top: var(--sl-spacing-2x-small);
  }
`;var kr=Rt(class extends At{constructor(t){if(super(t),t.type!==it.PROPERTY&&t.type!==it.ATTRIBUTE&&t.type!==it.BOOLEAN_ATTRIBUTE)throw Error("The `live` directive is not allowed on child or event bindings");if(!je(t))throw Error("`live` bindings can only contain a single expression")}render(t){return t}update(t,[e]){if(e===V||e===M)return e;let o=t.element,s=t.name;if(t.type===it.PROPERTY){if(e===o[s])return V}else if(t.type===it.BOOLEAN_ATTRIBUTE){if(!!e===o.hasAttribute(s))return V}else if(t.type===it.ATTRIBUTE&&o.getAttribute(s)===e+"")return V;return Ls(t),e}});var F=class extends f{constructor(){super(...arguments),this.formControlController=new He(this,{assumeInteractionOn:["sl-blur","sl-input"]}),this.hasSlotController=new Y(this,"help-text","label"),this.localize=new G(this),this.hasFocus=!1,this.title="",this.__numberInput=Object.assign(document.createElement("input"),{type:"number"}),this.__dateInput=Object.assign(document.createElement("input"),{type:"date"}),this.type="text",this.name="",this.value="",this.defaultValue="",this.size="medium",this.filled=!1,this.pill=!1,this.label="",this.helpText="",this.clearable=!1,this.disabled=!1,this.placeholder="",this.readonly=!1,this.passwordToggle=!1,this.passwordVisible=!1,this.noSpinButtons=!1,this.form="",this.required=!1,this.spellcheck=!0}get valueAsDate(){var t;return this.__dateInput.type=this.type,this.__dateInput.value=this.value,((t=this.input)==null?void 0:t.valueAsDate)||this.__dateInput.valueAsDate}set valueAsDate(t){this.__dateInput.type=this.type,this.__dateInput.valueAsDate=t,this.value=this.__dateInput.value}get valueAsNumber(){var t;return this.__numberInput.value=this.value,((t=this.input)==null?void 0:t.valueAsNumber)||this.__numberInput.valueAsNumber}set valueAsNumber(t){this.__numberInput.valueAsNumber=t,this.value=this.__numberInput.value}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}firstUpdated(){this.formControlController.updateValidity()}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleChange(){this.value=this.input.value,this.emit("sl-change")}handleClearClick(t){t.preventDefault(),this.value!==""&&(this.value="",this.emit("sl-clear"),this.emit("sl-input"),this.emit("sl-change")),this.input.focus()}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleInput(){this.value=this.input.value,this.formControlController.updateValidity(),this.emit("sl-input")}handleInvalid(t){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(t)}handleKeyDown(t){let e=t.metaKey||t.ctrlKey||t.shiftKey||t.altKey;t.key==="Enter"&&!e&&setTimeout(()=>{!t.defaultPrevented&&!t.isComposing&&this.formControlController.submit()})}handlePasswordToggle(){this.passwordVisible=!this.passwordVisible}handleDisabledChange(){this.formControlController.setValidity(this.disabled)}handleStepChange(){this.input.step=String(this.step),this.formControlController.updateValidity()}async handleValueChange(){await this.updateComplete,this.formControlController.updateValidity()}focus(t){this.input.focus(t)}blur(){this.input.blur()}select(){this.input.select()}setSelectionRange(t,e,o="none"){this.input.setSelectionRange(t,e,o)}setRangeText(t,e,o,s="preserve"){let r=e??this.input.selectionStart,i=o??this.input.selectionEnd;this.input.setRangeText(t,r,i,s),this.value!==this.input.value&&(this.value=this.input.value)}showPicker(){"showPicker"in HTMLInputElement.prototype&&this.input.showPicker()}stepUp(){this.input.stepUp(),this.value!==this.input.value&&(this.value=this.input.value)}stepDown(){this.input.stepDown(),this.value!==this.input.value&&(this.value=this.input.value)}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.input.reportValidity()}setCustomValidity(t){this.input.setCustomValidity(t),this.formControlController.updateValidity()}render(){let t=this.hasSlotController.test("label"),e=this.hasSlotController.test("help-text"),o=this.label?!0:!!t,s=this.helpText?!0:!!e,i=this.clearable&&!this.disabled&&!this.readonly&&(typeof this.value=="number"||this.value.length>0);return Q`
      <div
        part="form-control"
        class=${A({"form-control":!0,"form-control--small":this.size==="small","form-control--medium":this.size==="medium","form-control--large":this.size==="large","form-control--has-label":o,"form-control--has-help-text":s})}
      >
        <label
          part="form-control-label"
          class="form-control__label"
          for="input"
          aria-hidden=${o?"false":"true"}
        >
          <slot name="label">${this.label}</slot>
        </label>

        <div part="form-control-input" class="form-control-input">
          <div
            part="base"
            class=${A({input:!0,"input--small":this.size==="small","input--medium":this.size==="medium","input--large":this.size==="large","input--pill":this.pill,"input--standard":!this.filled,"input--filled":this.filled,"input--disabled":this.disabled,"input--focused":this.hasFocus,"input--empty":!this.value,"input--no-spin-buttons":this.noSpinButtons})}
          >
            <span part="prefix" class="input__prefix">
              <slot name="prefix"></slot>
            </span>

            <input
              part="input"
              id="input"
              class="input__control"
              type=${this.type==="password"&&this.passwordVisible?"text":this.type}
              title=${this.title}
              name=${B(this.name)}
              ?disabled=${this.disabled}
              ?readonly=${this.readonly}
              ?required=${this.required}
              placeholder=${B(this.placeholder)}
              minlength=${B(this.minlength)}
              maxlength=${B(this.maxlength)}
              min=${B(this.min)}
              max=${B(this.max)}
              step=${B(this.step)}
              .value=${kr(this.value)}
              autocapitalize=${B(this.autocapitalize)}
              autocomplete=${B(this.autocomplete)}
              autocorrect=${B(this.autocorrect)}
              ?autofocus=${this.autofocus}
              spellcheck=${this.spellcheck}
              pattern=${B(this.pattern)}
              enterkeyhint=${B(this.enterkeyhint)}
              inputmode=${B(this.inputmode)}
              aria-describedby="help-text"
              @change=${this.handleChange}
              @input=${this.handleInput}
              @invalid=${this.handleInvalid}
              @keydown=${this.handleKeyDown}
              @focus=${this.handleFocus}
              @blur=${this.handleBlur}
            />

            ${i?Q`
                  <button
                    part="clear-button"
                    class="input__clear"
                    type="button"
                    aria-label=${this.localize.term("clearEntry")}
                    @click=${this.handleClearClick}
                    tabindex="-1"
                  >
                    <slot name="clear-icon">
                      <sl-icon name="x-circle-fill" library="system"></sl-icon>
                    </slot>
                  </button>
                `:""}
            ${this.passwordToggle&&!this.disabled?Q`
                  <button
                    part="password-toggle-button"
                    class="input__password-toggle"
                    type="button"
                    aria-label=${this.localize.term(this.passwordVisible?"hidePassword":"showPassword")}
                    @click=${this.handlePasswordToggle}
                    tabindex="-1"
                  >
                    ${this.passwordVisible?Q`
                          <slot name="show-password-icon">
                            <sl-icon name="eye-slash" library="system"></sl-icon>
                          </slot>
                        `:Q`
                          <slot name="hide-password-icon">
                            <sl-icon name="eye" library="system"></sl-icon>
                          </slot>
                        `}
                  </button>
                `:""}

            <span part="suffix" class="input__suffix">
              <slot name="suffix"></slot>
            </span>
          </div>
        </div>

        <div
          part="form-control-help-text"
          id="help-text"
          class="form-control__help-text"
          aria-hidden=${s?"false":"true"}
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </div>
    `}};F.styles=[y,Gr,Dr];F.dependencies={"sl-icon":z};a([v(".input__control")],F.prototype,"input",2);a([T()],F.prototype,"hasFocus",2);a([d()],F.prototype,"title",2);a([d({reflect:!0})],F.prototype,"type",2);a([d()],F.prototype,"name",2);a([d()],F.prototype,"value",2);a([zr()],F.prototype,"defaultValue",2);a([d({reflect:!0})],F.prototype,"size",2);a([d({type:Boolean,reflect:!0})],F.prototype,"filled",2);a([d({type:Boolean,reflect:!0})],F.prototype,"pill",2);a([d()],F.prototype,"label",2);a([d({attribute:"help-text"})],F.prototype,"helpText",2);a([d({type:Boolean})],F.prototype,"clearable",2);a([d({type:Boolean,reflect:!0})],F.prototype,"disabled",2);a([d()],F.prototype,"placeholder",2);a([d({type:Boolean,reflect:!0})],F.prototype,"readonly",2);a([d({attribute:"password-toggle",type:Boolean})],F.prototype,"passwordToggle",2);a([d({attribute:"password-visible",type:Boolean})],F.prototype,"passwordVisible",2);a([d({attribute:"no-spin-buttons",type:Boolean})],F.prototype,"noSpinButtons",2);a([d({reflect:!0})],F.prototype,"form",2);a([d({type:Boolean,reflect:!0})],F.prototype,"required",2);a([d()],F.prototype,"pattern",2);a([d({type:Number})],F.prototype,"minlength",2);a([d({type:Number})],F.prototype,"maxlength",2);a([d()],F.prototype,"min",2);a([d()],F.prototype,"max",2);a([d()],F.prototype,"step",2);a([d()],F.prototype,"autocapitalize",2);a([d()],F.prototype,"autocorrect",2);a([d()],F.prototype,"autocomplete",2);a([d({type:Boolean})],F.prototype,"autofocus",2);a([d()],F.prototype,"enterkeyhint",2);a([d({type:Boolean,converter:{fromAttribute:t=>!(!t||t==="false"),toAttribute:t=>t?"true":"false"}})],F.prototype,"spellcheck",2);a([d()],F.prototype,"inputmode",2);a([W("disabled",{waitUntilFirstUpdate:!0})],F.prototype,"handleDisabledChange",1);a([W("step",{waitUntilFirstUpdate:!0})],F.prototype,"handleStepChange",1);a([W("value",{waitUntilFirstUpdate:!0})],F.prototype,"handleValueChange",1);F.define("sl-input");var Xr=U`
  :host {
    display: block;
    position: relative;
    background: var(--sl-panel-background-color);
    border: solid var(--sl-panel-border-width) var(--sl-panel-border-color);
    border-radius: var(--sl-border-radius-medium);
    padding: var(--sl-spacing-x-small) 0;
    overflow: auto;
    overscroll-behavior: none;
  }

  ::slotted(sl-divider) {
    --spacing: var(--sl-spacing-x-small);
  }
`;var ao=class extends f{connectedCallback(){super.connectedCallback(),this.setAttribute("role","menu")}handleClick(t){let e=["menuitem","menuitemcheckbox"],o=t.composedPath(),s=o.find(n=>{var c;return e.includes(((c=n?.getAttribute)==null?void 0:c.call(n,"role"))||"")});if(!s||o.find(n=>{var c;return((c=n?.getAttribute)==null?void 0:c.call(n,"role"))==="menu"})!==this)return;let l=s;l.type==="checkbox"&&(l.checked=!l.checked),this.emit("sl-select",{detail:{item:l}})}handleKeyDown(t){if(t.key==="Enter"||t.key===" "){let e=this.getCurrentItem();t.preventDefault(),t.stopPropagation(),e?.click()}else if(["ArrowDown","ArrowUp","Home","End"].includes(t.key)){let e=this.getAllItems(),o=this.getCurrentItem(),s=o?e.indexOf(o):0;e.length>0&&(t.preventDefault(),t.stopPropagation(),t.key==="ArrowDown"?s++:t.key==="ArrowUp"?s--:t.key==="Home"?s=0:t.key==="End"&&(s=e.length-1),s<0&&(s=e.length-1),s>e.length-1&&(s=0),this.setCurrentItem(e[s]),e[s].focus())}}handleMouseDown(t){let e=t.target;this.isMenuItem(e)&&this.setCurrentItem(e)}handleSlotChange(){let t=this.getAllItems();t.length>0&&this.setCurrentItem(t[0])}isMenuItem(t){var e;return t.tagName.toLowerCase()==="sl-menu-item"||["menuitem","menuitemcheckbox","menuitemradio"].includes((e=t.getAttribute("role"))!=null?e:"")}getAllItems(){return[...this.defaultSlot.assignedElements({flatten:!0})].filter(t=>!(t.inert||!this.isMenuItem(t)))}getCurrentItem(){return this.getAllItems().find(t=>t.getAttribute("tabindex")==="0")}setCurrentItem(t){this.getAllItems().forEach(o=>{o.setAttribute("tabindex",o===t?"0":"-1")})}render(){return Q`
      <slot
        @slotchange=${this.handleSlotChange}
        @click=${this.handleClick}
        @keydown=${this.handleKeyDown}
        @mousedown=${this.handleMouseDown}
      ></slot>
    `}};ao.styles=[y,Xr];a([v("slot")],ao.prototype,"defaultSlot",2);ao.define("sl-menu");var Sr=U`
  :host {
    --submenu-offset: -2px;

    display: block;
  }

  :host([inert]) {
    display: none;
  }

  .menu-item {
    position: relative;
    display: flex;
    align-items: stretch;
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-medium);
    font-weight: var(--sl-font-weight-normal);
    line-height: var(--sl-line-height-normal);
    letter-spacing: var(--sl-letter-spacing-normal);
    color: var(--sl-color-neutral-700);
    padding: var(--sl-spacing-2x-small) var(--sl-spacing-2x-small);
    transition: var(--sl-transition-fast) fill;
    user-select: none;
    -webkit-user-select: none;
    white-space: nowrap;
    cursor: pointer;
  }

  .menu-item.menu-item--disabled {
    outline: none;
    opacity: 0.5;
    cursor: not-allowed;
  }

  .menu-item.menu-item--loading {
    outline: none;
    cursor: wait;
  }

  .menu-item.menu-item--loading *:not(sl-spinner) {
    opacity: 0.5;
  }

  .menu-item--loading sl-spinner {
    --indicator-color: currentColor;
    --track-width: 1px;
    position: absolute;
    font-size: 0.75em;
    top: calc(50% - 0.5em);
    left: 0.65rem;
    opacity: 1;
  }

  .menu-item .menu-item__label {
    flex: 1 1 auto;
    display: inline-block;
    text-overflow: ellipsis;
    overflow: hidden;
  }

  .menu-item .menu-item__prefix {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
  }

  .menu-item .menu-item__prefix::slotted(*) {
    margin-inline-end: var(--sl-spacing-x-small);
  }

  .menu-item .menu-item__suffix {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
  }

  .menu-item .menu-item__suffix::slotted(*) {
    margin-inline-start: var(--sl-spacing-x-small);
  }

  /* Safe triangle */
  .menu-item--submenu-expanded::after {
    content: '';
    position: fixed;
    z-index: calc(var(--sl-z-index-dropdown) - 1);
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    clip-path: polygon(
      var(--safe-triangle-cursor-x, 0) var(--safe-triangle-cursor-y, 0),
      var(--safe-triangle-submenu-start-x, 0) var(--safe-triangle-submenu-start-y, 0),
      var(--safe-triangle-submenu-end-x, 0) var(--safe-triangle-submenu-end-y, 0)
    );
  }

  :host(:focus-visible) {
    outline: none;
  }

  :host(:hover:not([aria-disabled='true'], :focus-visible)) .menu-item,
  .menu-item--submenu-expanded {
    background-color: var(--sl-color-neutral-100);
    color: var(--sl-color-neutral-1000);
  }

  :host(:focus-visible) .menu-item {
    outline: none;
    background-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
    opacity: 1;
  }

  .menu-item .menu-item__check,
  .menu-item .menu-item__chevron {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 1.5em;
    visibility: hidden;
  }

  .menu-item--checked .menu-item__check,
  .menu-item--has-submenu .menu-item__chevron {
    visibility: visible;
  }

  /* Add elevation and z-index to submenus */
  sl-popup::part(popup) {
    box-shadow: var(--sl-shadow-large);
    z-index: var(--sl-z-index-dropdown);
    margin-left: var(--submenu-offset);
  }

  .menu-item--rtl sl-popup::part(popup) {
    margin-left: calc(-1 * var(--submenu-offset));
  }

  @media (forced-colors: active) {
    :host(:hover:not([aria-disabled='true'])) .menu-item,
    :host(:focus-visible) .menu-item {
      outline: dashed 1px SelectedItem;
      outline-offset: -1px;
    }
  }

  ::slotted(sl-menu) {
    max-width: var(--auto-size-available-width) !important;
    max-height: var(--auto-size-available-height) !important;
  }
`;var xe=(t,e)=>{let o=t._$AN;if(o===void 0)return!1;for(let s of o)s._$AO?.(e,!1),xe(s,e);return!0},no=t=>{let e,o;do{if((e=t._$AM)===void 0)break;o=e._$AN,o.delete(t),t=e}while(o?.size===0)},Rr=t=>{for(let e;e=t._$AM;t=e){let o=e._$AN;if(o===void 0)e._$AN=o=new Set;else if(o.has(t))break;o.add(t),Ql(e)}};function gl(t){this._$AN!==void 0?(no(this),this._$AM=t,Rr(this)):this._$AM=t}function ml(t,e=!1,o=0){let s=this._$AH,r=this._$AN;if(r!==void 0&&r.size!==0)if(e)if(Array.isArray(s))for(let i=o;i<s.length;i++)xe(s[i],!1),no(s[i]);else s!=null&&(xe(s,!1),no(s));else xe(this,t)}var Ql=t=>{t.type==it.CHILD&&(t._$AP??(t._$AP=ml),t._$AQ??(t._$AQ=gl))},co=class extends At{constructor(){super(...arguments),this._$AN=void 0}_$AT(e,o,s){super._$AT(e,o,s),Rr(this),this.isConnected=e._$AU}_$AO(e,o=!0){e!==this.isConnected&&(this.isConnected=e,e?this.reconnected?.():this.disconnected?.()),o&&(xe(this,e),no(this))}setValue(e){if(je(this._$Ct))this._$Ct._$AI(e,this);else{let o=[...this._$Ct._$AH];o[this._$Ci]=e,this._$Ct._$AI(o,this,0)}}disconnected(){}reconnected(){}};var Zr=()=>new Zo,Zo=class{},Ro=new WeakMap,Er=Rt(class extends co{render(t){return M}update(t,[e]){let o=e!==this.G;return o&&this.G!==void 0&&this.rt(void 0),(o||this.lt!==this.ct)&&(this.G=e,this.ht=t.options?.host,this.rt(this.ct=t.element)),M}rt(t){if(this.isConnected||(t=void 0),typeof this.G=="function"){let e=this.ht??globalThis,o=Ro.get(e);o===void 0&&(o=new WeakMap,Ro.set(e,o)),o.get(this.G)!==void 0&&this.G.call(this.ht,void 0),o.set(this.G,t),t!==void 0&&this.G.call(this.ht,t)}else this.G.value=t}get lt(){return typeof this.G=="function"?Ro.get(this.ht??globalThis)?.get(this.G):this.G?.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}});var Tr=class{constructor(t,e){this.popupRef=Zr(),this.enableSubmenuTimer=-1,this.isConnected=!1,this.isPopupConnected=!1,this.skidding=0,this.submenuOpenDelay=100,this.handleMouseMove=o=>{this.host.style.setProperty("--safe-triangle-cursor-x",`${o.clientX}px`),this.host.style.setProperty("--safe-triangle-cursor-y",`${o.clientY}px`)},this.handleMouseOver=()=>{this.hasSlotController.test("submenu")&&this.enableSubmenu()},this.handleKeyDown=o=>{switch(o.key){case"Escape":case"Tab":this.disableSubmenu();break;case"ArrowLeft":o.target!==this.host&&(o.preventDefault(),o.stopPropagation(),this.host.focus(),this.disableSubmenu());break;case"ArrowRight":case"Enter":case" ":this.handleSubmenuEntry(o);break;default:break}},this.handleClick=o=>{var s;o.target===this.host?(o.preventDefault(),o.stopPropagation()):o.target instanceof Element&&(o.target.tagName==="sl-menu-item"||(s=o.target.role)!=null&&s.startsWith("menuitem"))&&this.disableSubmenu()},this.handleFocusOut=o=>{o.relatedTarget&&o.relatedTarget instanceof Element&&this.host.contains(o.relatedTarget)||this.disableSubmenu()},this.handlePopupMouseover=o=>{o.stopPropagation()},this.handlePopupReposition=()=>{let o=this.host.renderRoot.querySelector("slot[name='submenu']"),s=o?.assignedElements({flatten:!0}).filter(b=>b.localName==="sl-menu")[0],r=getComputedStyle(this.host).direction==="rtl";if(!s)return;let{left:i,top:l,width:n,height:c}=s.getBoundingClientRect();this.host.style.setProperty("--safe-triangle-submenu-start-x",`${r?i+n:i}px`),this.host.style.setProperty("--safe-triangle-submenu-start-y",`${l}px`),this.host.style.setProperty("--safe-triangle-submenu-end-x",`${r?i+n:i}px`),this.host.style.setProperty("--safe-triangle-submenu-end-y",`${l+c}px`)},(this.host=t).addController(this),this.hasSlotController=e}hostConnected(){this.hasSlotController.test("submenu")&&!this.host.disabled&&this.addListeners()}hostDisconnected(){this.removeListeners()}hostUpdated(){this.hasSlotController.test("submenu")&&!this.host.disabled?(this.addListeners(),this.updateSkidding()):this.removeListeners()}addListeners(){this.isConnected||(this.host.addEventListener("mousemove",this.handleMouseMove),this.host.addEventListener("mouseover",this.handleMouseOver),this.host.addEventListener("keydown",this.handleKeyDown),this.host.addEventListener("click",this.handleClick),this.host.addEventListener("focusout",this.handleFocusOut),this.isConnected=!0),this.isPopupConnected||this.popupRef.value&&(this.popupRef.value.addEventListener("mouseover",this.handlePopupMouseover),this.popupRef.value.addEventListener("sl-reposition",this.handlePopupReposition),this.isPopupConnected=!0)}removeListeners(){this.isConnected&&(this.host.removeEventListener("mousemove",this.handleMouseMove),this.host.removeEventListener("mouseover",this.handleMouseOver),this.host.removeEventListener("keydown",this.handleKeyDown),this.host.removeEventListener("click",this.handleClick),this.host.removeEventListener("focusout",this.handleFocusOut),this.isConnected=!1),this.isPopupConnected&&this.popupRef.value&&(this.popupRef.value.removeEventListener("mouseover",this.handlePopupMouseover),this.popupRef.value.removeEventListener("sl-reposition",this.handlePopupReposition),this.isPopupConnected=!1)}handleSubmenuEntry(t){let e=this.host.renderRoot.querySelector("slot[name='submenu']");if(!e){console.error("Cannot activate a submenu if no corresponding menuitem can be found.",this);return}let o=null;for(let s of e.assignedElements())if(o=s.querySelectorAll("sl-menu-item, [role^='menuitem']"),o.length!==0)break;if(!(!o||o.length===0)){o[0].setAttribute("tabindex","0");for(let s=1;s!==o.length;++s)o[s].setAttribute("tabindex","-1");this.popupRef.value&&(t.preventDefault(),t.stopPropagation(),this.popupRef.value.active?o[0]instanceof HTMLElement&&o[0].focus():(this.enableSubmenu(!1),this.host.updateComplete.then(()=>{o[0]instanceof HTMLElement&&o[0].focus()}),this.host.requestUpdate()))}}setSubmenuState(t){this.popupRef.value&&this.popupRef.value.active!==t&&(this.popupRef.value.active=t,this.host.requestUpdate())}enableSubmenu(t=!0){t?(window.clearTimeout(this.enableSubmenuTimer),this.enableSubmenuTimer=window.setTimeout(()=>{this.setSubmenuState(!0)},this.submenuOpenDelay)):this.setSubmenuState(!0)}disableSubmenu(){window.clearTimeout(this.enableSubmenuTimer),this.setSubmenuState(!1)}updateSkidding(){var t;if(!((t=this.host.parentElement)!=null&&t.computedStyleMap))return;let e=this.host.parentElement.computedStyleMap(),s=["padding-top","border-top-width","margin-top"].reduce((r,i)=>{var l;let n=(l=e.get(i))!=null?l:new CSSUnitValue(0,"px"),b=(n instanceof CSSUnitValue?n:new CSSUnitValue(0,"px")).to("px");return r-b.value},0);this.skidding=s}isExpanded(){return this.popupRef.value?this.popupRef.value.active:!1}renderSubmenu(){let t=getComputedStyle(this.host).direction==="rtl";return this.isConnected?Q`
      <sl-popup
        ${Er(this.popupRef)}
        placement=${t?"left-start":"right-start"}
        anchor="anchor"
        flip
        flip-fallback-strategy="best-fit"
        skidding="${this.skidding}"
        strategy="fixed"
        auto-size="vertical"
        auto-size-padding="10"
      >
        <slot name="submenu"></slot>
      </sl-popup>
    `:Q` <slot name="submenu" hidden></slot> `}};var H=class extends f{constructor(){super(...arguments),this.localize=new G(this),this.type="normal",this.checked=!1,this.value="",this.loading=!1,this.disabled=!1,this.hasSlotController=new Y(this,"submenu"),this.submenuController=new Tr(this,this.hasSlotController),this.handleHostClick=t=>{this.disabled&&(t.preventDefault(),t.stopImmediatePropagation())},this.handleMouseOver=t=>{this.focus(),t.stopPropagation()}}connectedCallback(){super.connectedCallback(),this.addEventListener("click",this.handleHostClick),this.addEventListener("mouseover",this.handleMouseOver)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("click",this.handleHostClick),this.removeEventListener("mouseover",this.handleMouseOver)}handleDefaultSlotChange(){let t=this.getTextLabel();if(typeof this.cachedTextLabel>"u"){this.cachedTextLabel=t;return}t!==this.cachedTextLabel&&(this.cachedTextLabel=t,this.emit("slotchange",{bubbles:!0,composed:!1,cancelable:!1}))}handleCheckedChange(){if(this.checked&&this.type!=="checkbox"){this.checked=!1,console.error('The checked attribute can only be used on menu items with type="checkbox"',this);return}this.type==="checkbox"?this.setAttribute("aria-checked",this.checked?"true":"false"):this.removeAttribute("aria-checked")}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false")}handleTypeChange(){this.type==="checkbox"?(this.setAttribute("role","menuitemcheckbox"),this.setAttribute("aria-checked",this.checked?"true":"false")):(this.setAttribute("role","menuitem"),this.removeAttribute("aria-checked"))}getTextLabel(){return Ms(this.defaultSlot)}isSubmenu(){return this.hasSlotController.test("submenu")}render(){let t=this.localize.dir()==="rtl",e=this.submenuController.isExpanded();return Q`
      <div
        id="anchor"
        part="base"
        class=${A({"menu-item":!0,"menu-item--rtl":t,"menu-item--checked":this.checked,"menu-item--disabled":this.disabled,"menu-item--loading":this.loading,"menu-item--has-submenu":this.isSubmenu(),"menu-item--submenu-expanded":e})}
        ?aria-haspopup="${this.isSubmenu()}"
        ?aria-expanded="${!!e}"
      >
        <span part="checked-icon" class="menu-item__check">
          <sl-icon name="check" library="system" aria-hidden="true"></sl-icon>
        </span>

        <slot name="prefix" part="prefix" class="menu-item__prefix"></slot>

        <slot part="label" class="menu-item__label" @slotchange=${this.handleDefaultSlotChange}></slot>

        <slot name="suffix" part="suffix" class="menu-item__suffix"></slot>

        <span part="submenu-icon" class="menu-item__chevron">
          <sl-icon name=${t?"chevron-left":"chevron-right"} library="system" aria-hidden="true"></sl-icon>
        </span>

        ${this.submenuController.renderSubmenu()}
        ${this.loading?Q` <sl-spinner part="spinner" exportparts="base:spinner__base"></sl-spinner> `:""}
      </div>
    `}};H.styles=[y,Sr];H.dependencies={"sl-icon":z,"sl-popup":O,"sl-spinner":jt};a([v("slot:not([name])")],H.prototype,"defaultSlot",2);a([v(".menu-item")],H.prototype,"menuItem",2);a([d()],H.prototype,"type",2);a([d({type:Boolean,reflect:!0})],H.prototype,"checked",2);a([d()],H.prototype,"value",2);a([d({type:Boolean,reflect:!0})],H.prototype,"loading",2);a([d({type:Boolean,reflect:!0})],H.prototype,"disabled",2);a([W("checked")],H.prototype,"handleCheckedChange",1);a([W("disabled")],H.prototype,"handleDisabledChange",1);a([W("type")],H.prototype,"handleTypeChange",1);H.define("sl-menu-item");var jr=U`
  :host {
    display: inline-block;
  }

  .tag {
    display: flex;
    align-items: center;
    border: solid 1px;
    line-height: 1;
    white-space: nowrap;
    user-select: none;
    -webkit-user-select: none;
  }

  .tag__remove::part(base) {
    color: inherit;
    padding: 0;
  }

  /*
   * Variant modifiers
   */

  .tag--primary {
    background-color: var(--sl-color-primary-50);
    border-color: var(--sl-color-primary-200);
    color: var(--sl-color-primary-800);
  }

  .tag--primary:active > sl-icon-button {
    color: var(--sl-color-primary-600);
  }

  .tag--success {
    background-color: var(--sl-color-success-50);
    border-color: var(--sl-color-success-200);
    color: var(--sl-color-success-800);
  }

  .tag--success:active > sl-icon-button {
    color: var(--sl-color-success-600);
  }

  .tag--neutral {
    background-color: var(--sl-color-neutral-50);
    border-color: var(--sl-color-neutral-200);
    color: var(--sl-color-neutral-800);
  }

  .tag--neutral:active > sl-icon-button {
    color: var(--sl-color-neutral-600);
  }

  .tag--warning {
    background-color: var(--sl-color-warning-50);
    border-color: var(--sl-color-warning-200);
    color: var(--sl-color-warning-800);
  }

  .tag--warning:active > sl-icon-button {
    color: var(--sl-color-warning-600);
  }

  .tag--danger {
    background-color: var(--sl-color-danger-50);
    border-color: var(--sl-color-danger-200);
    color: var(--sl-color-danger-800);
  }

  .tag--danger:active > sl-icon-button {
    color: var(--sl-color-danger-600);
  }

  /*
   * Size modifiers
   */

  .tag--small {
    font-size: var(--sl-button-font-size-small);
    height: calc(var(--sl-input-height-small) * 0.8);
    line-height: calc(var(--sl-input-height-small) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-small);
    padding: 0 var(--sl-spacing-x-small);
  }

  .tag--medium {
    font-size: var(--sl-button-font-size-medium);
    height: calc(var(--sl-input-height-medium) * 0.8);
    line-height: calc(var(--sl-input-height-medium) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-medium);
    padding: 0 var(--sl-spacing-small);
  }

  .tag--large {
    font-size: var(--sl-button-font-size-large);
    height: calc(var(--sl-input-height-large) * 0.8);
    line-height: calc(var(--sl-input-height-large) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-large);
    padding: 0 var(--sl-spacing-medium);
  }

  .tag__remove {
    margin-inline-start: var(--sl-spacing-x-small);
  }

  /*
   * Pill modifier
   */

  .tag--pill {
    border-radius: var(--sl-border-radius-pill);
  }
`;var Wt=class extends f{constructor(){super(...arguments),this.localize=new G(this),this.variant="neutral",this.size="medium",this.pill=!1,this.removable=!1}handleRemoveClick(){this.emit("sl-remove")}render(){return Q`
      <span
        part="base"
        class=${A({tag:!0,"tag--primary":this.variant==="primary","tag--success":this.variant==="success","tag--neutral":this.variant==="neutral","tag--warning":this.variant==="warning","tag--danger":this.variant==="danger","tag--text":this.variant==="text","tag--small":this.size==="small","tag--medium":this.size==="medium","tag--large":this.size==="large","tag--pill":this.pill,"tag--removable":this.removable})}
      >
        <slot part="content" class="tag__content"></slot>

        ${this.removable?Q`
              <sl-icon-button
                part="remove-button"
                exportparts="base:remove-button__base"
                name="x-lg"
                library="system"
                label=${this.localize.term("remove")}
                class="tag__remove"
                @click=${this.handleRemoveClick}
                tabindex="-1"
              ></sl-icon-button>
            `:""}
      </span>
    `}};Wt.styles=[y,jr];Wt.dependencies={"sl-icon-button":X};a([d({reflect:!0})],Wt.prototype,"variant",2);a([d({reflect:!0})],Wt.prototype,"size",2);a([d({type:Boolean,reflect:!0})],Wt.prototype,"pill",2);a([d({type:Boolean})],Wt.prototype,"removable",2);Wt.define("sl-tag");var mB=ei(Yr());Ee("remixicon",{resolver(t){let e=t.match(/^(.*?)\/(.*?)(-(fill)?)?$/m);return e[1]=e[1].charAt(0).toUpperCase()+e[1].slice(1),`https://cdn.jsdelivr.net/npm/remixicon@3.3.0/icons/${e[1]}/${e[2]}${e[3]=="-"?"":e[3]||"-line"}.svg`},mutator(t){return t.setAttribute("fill","currentColor")}});Ee("heroicons",{resolver:t=>`https://cdn.jsdelivr.net/npm/heroicons@2.0.1/24/solid/${t}.svg`});ie("/images");})();
/*! Bundled license information:

@lit/reactive-element/css-tag.js:
  (**
   * @license
   * Copyright 2019 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/reactive-element.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/lit-html.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-element/lit-element.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/is-server.js:
  (**
   * @license
   * Copyright 2022 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/custom-element.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/property.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/state.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/event-options.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/base.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/query.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/query-all.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/query-async.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/query-assigned-elements.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/query-assigned-nodes.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/directive-helpers.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/directive.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/directives/class-map.js:
  (**
   * @license
   * Copyright 2018 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/static.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/directives/if-defined.js:
  (**
   * @license
   * Copyright 2018 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/directives/live.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/async-directive.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/directives/ref.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)
*/
//# sourceMappingURL=/_bridgetown/static/index.GEQBCUT5.js.map
