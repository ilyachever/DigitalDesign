(()=>{"use strict";const e=document.querySelector(".header__navigation"),t=document.querySelector(".header__menu");function i(){e.classList.toggle("header__navigation--opened"),e.classList.contains("header__navigation--opened")?(s(t,"./images/sprite/sprite.svg#close"),t.setAttribute("aria-label","Закрыть навигацию сайта.")):(s(t,"./images/sprite/sprite.svg#menu"),t.setAttribute("aria-label","Открыть навигацию сайта."))}function s(e,t){e.querySelector("use").setAttribute("href",t)}const r={base:{"--base-theme-background":"#e7e0e7","--base-theme-text":"#393646","--base-theme-ui":"#c2cad7"},dark:{"--base-theme-background":"#2b2931","--base-theme-text":"#a9a5b6","--base-theme-ui":"#39383f"}};function a(e){const t=r[e];for(const e in t)document.documentElement.style.setProperty(e,t[e])}function n(e){localStorage.setItem("theme",JSON.stringify(r[e])),localStorage.setItem("themeTitle",e)}function c(){window.scrollTo(0,0)}const o=document.querySelector(".content__list"),l=document.querySelector(".modal"),d=document.querySelector(".form"),m=d.querySelector(".amount-control__more"),u=d.querySelector(".amount-control__less"),b=d.querySelector(".amount-control__input"),g=d.querySelector(".form__comment"),p=d.querySelector(".form__counter"),h=p.querySelector(".form__counter-current"),w=d.querySelector(".button--close");function v(){b.value>=b.getAttribute("min")&&(u.disabled=!1,u.classList.remove("ui-button--disabled")),b.value++}function f(){let e=b.value;const t=b.getAttribute("min");e<=Number(t)+1&&(u.disabled=!0,u.classList.add("ui-button--disabled")),b.value--}function y(){let e=b.value;const t=b.getAttribute("min");e>=t?(u.disabled=!1,u.classList.remove("ui-button--disabled")):(u.disabled=!0,u.classList.add("ui-button--disabled"),b.value=t)}function _(){b.value=b.getAttribute("min"),document.querySelector('.color-control__input[value="black"]').checked=!0,g.value="",h.textContent="0"}function L(){let e=g.value.length;e>=g.getAttribute("maxLength")?p.classList.add("form__counter--invalid"):p.classList.remove("form__counter--invalid"),h.textContent=e}function S(){l.classList.add("modal--hidden")}function k(e){"Escape"===e.key&&(l.classList.add("modal--hidden"),_(),document.removeEventListener("keydown",k))}function E(){m.removeEventListener("click",v),u.removeEventListener("click",f),b.removeEventListener("input",y),g.removeEventListener("keyup",L),document.removeEventListener("keydown",k)}o.addEventListener("click",(e=>{if(e.target.classList.contains("button--buy")){const t=e.target.closest(".product").firstElementChild.lastElementChild.firstElementChild.textContent;l.classList.remove("modal--hidden"),m.addEventListener("click",v),u.addEventListener("click",f),b.addEventListener("input",y),g.addEventListener("keyup",L),d.addEventListener("submit",(e=>{e.preventDefault(),function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"Птичка";1==b.value?alert(`Ваш новый друг ${e} уже летит к Вам!`):alert("Ваш новыe друзья уже летят к Вам!")}(t),S(),_(),E()}),{once:!0}),w.addEventListener("click",(()=>{S(),_(),E()}),{once:!0}),document.addEventListener("keydown",k)}}));const q={exotic:[{src:"./images/birds/hoopoe.webp",title:"Удод",time:"01.01.2023"},{src:"./images/birds/hornbill.webp",title:"Носорог",time:"08.02.2023"},{src:"./images/birds/ibis.webp",title:"Ибис",time:"15.03.2023"},{src:"./images/birds/kiwi.webp",title:"Киви",time:"22.03.2023"},{src:"./images/birds/flamingo.webp",title:"Фламинго",time:"30.03.2023"},{src:"./images/birds/peacock.webp",title:"Павлин",time:"14.04.2023"},{src:"./images/birds/parrot.webp",title:"Попугай малазийский",time:"15.04.2023"},{src:"./images/birds/mandarin.webp",title:"Мандаринка",time:"17.04.2023"},{src:"./images/birds/parrotRed.webp",title:"Попугай бразильский",time:"18.04.2023"},{src:"./images/birds/bunting.webp",title:"Горная овсянка",time:"19.04.2023"}],wild:[{src:"./images/birds/eagle.webp",title:"Орёл",time:"20.04.2023"},{src:"./images/birds/falcon.webp",title:"Сапсан",time:"21.04.2023"},{src:"./images/birds/osprey.webp",title:"Скопа",time:"28.04.2023"},{src:"./images/birds/owl.webp",title:"Сова",time:"30.04.2023"},{src:"./images/birds/seagull.webp",title:"Чайка",time:"01.05.2023"},{src:"./images/birds/swift.webp",title:"Стриж",time:"10.05.2023"},{src:"./images/birds/eagle.webp",title:"Орёл",time:"02.06.2023"},{src:"./images/birds/falcon.webp",title:"Сапсан",time:"05.06.2023"},{src:"./images/birds/osprey.webp",title:"Скопа",time:"07.06.2023"},{src:"./images/birds/owl.webp",title:"Сова",time:"10.06.2023"},{src:"./images/birds/seagull.webp",title:"Чайка",time:"12.06.2023"},{src:"./images/birds/swift.webp",title:"Стриж",time:"15.06.2023"}],pet:[{src:"./images/birds/duck.webp",title:"Утка",time:"11.05.2023"},{src:"./images/birds/goose.webp",title:"Гусь",time:"15.05.2023"},{src:"./images/birds/hen.webp",title:"Петух",time:"20.05.2023"},{src:"./images/birds/turkey.webp",title:"Индюшка",time:"25.05.2023"},{src:"./images/birds/swan.webp",title:"Лебедь",time:"29.05.2023"},{src:"./images/birds/pheasant.webp",title:"Фазан",time:"31.05.2023"},{src:"./images/birds/duck.webp",title:"Утка",time:"01.07.2023"},{src:"./images/birds/goose.webp",title:"Гусь",time:"03.07.2023"},{src:"./images/birds/hen.webp",title:"Петух",time:"05.07.2023"},{src:"./images/birds/turkey.webp",title:"Индюшка",time:"06.07.2023"},{src:"./images/birds/swan.webp",title:"Лебедь",time:"12.07.2023"},{src:"./images/birds/pheasant.webp",title:"Фазан",time:"14.07.2023"},{src:"./images/birds/duck.webp",title:"Утка",time:"16.07.2023"},{src:"./images/birds/goose.webp",title:"Гусь",time:"02.08.2023"},{src:"./images/birds/hen.webp",title:"Петух",time:"08.08.2023"},{src:"./images/birds/turkey.webp",title:"Индюшка",time:"16.08.2023"},{src:"./images/birds/swan.webp",title:"Лебедь",time:"24.08.2023"},{src:"./images/birds/pheasant.webp",title:"Фазан",time:"30.09.2023"}]},D={clearData(e){e.innerHTML=""},getDate(e){const t=e.split("."),[i,s,r]=t,a=new Date(`${r}.${s}.${i}`),n=a.getDay(),c=a.getDate(),o=a.getMonth(),l=a.getFullYear();return`${function(){switch(arguments.length>0&&void 0!==arguments[0]?arguments[0]:n){case 0:return"Воскресенье";case 1:return"Понедельник";case 2:return"Вторник";case 3:return"Среда";case 4:return"Четверг";case 5:return"Пятница";case 6:return"Суббота";default:return"Неизвестный день недели"}}()}, ${function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:c;return e>=1&&e<=7?"1 неделя":e>=8&&e<=14?"2 неделя":e>=15&&e<=21?"3 неделя":e>=22&&e<=28?"4 неделя":"5 неделя"}()} ${function(){switch(arguments.length>0&&void 0!==arguments[0]?arguments[0]:o){case 0:return"Января";case 1:return"Февраля";case 2:return"Марта";case 3:return"Апреля";case 4:return"Мая";case 5:return"Июня";case 6:return"Июля";case 7:return"Августа";case 8:return"Сентября";case 9:return"Октября";case 10:return"Ноября";case 11:return"Декабря";default:return"Неизвестный месяц"}}()} ${function(){return`${arguments.length>0&&void 0!==arguments[0]?arguments[0]:l} года`}()}`},renderTemplate(e,t,i){return`\n            <li class="content__item">\n                <article class="product">\n                <figure class="product__figure">\n                    <img src=${e} width="128" height="128" alt=${t}>\n                    <figcaption>\n                    <h2 class="product__title">${t}</h2>\n                    </figcaption>\n                </figure>\n                <small class="product__date">${this.getDate(i)}</small>\n                <button class="button button--buy">Купить</button>\n                </article>\n            </li>\n        `},addProduct(e,t){for(let i=0;i<t.length;i++){const{src:s,title:r,time:a}=t[i];e.innerHTML+=this.renderTemplate(s,r,a)}},setCategoryTitle(e,t){e.textContent=`${t} птицы`}},C={renderData(e,t,i){D.clearData(e);try{const s=t[i];D.addProduct(e,s)}catch(e){console.log(e)}},renderDefaultData(e,t){let i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"exotic";try{const s=t[i];D.addProduct(e,s)}catch(e){console.log(e)}},setLocalStorage(e,t){localStorage.setItem("title",e),localStorage.setItem("data",JSON.stringify(t))},getLocalStorage(e,t){const i=JSON.parse(localStorage.getItem("data")),s=localStorage.getItem("title");D.addProduct(t,i),D.setCategoryTitle(e,s)}},$=(document.querySelector(".header__navigation"),document.querySelector(".header__menu")),x=document.querySelector(".ui-button[data-theme]"),T=document.querySelector(".content__button"),A=document.querySelector(".content__list"),I=document.querySelector(".content__title"),P=Array.from(document.querySelectorAll(".ui-link[data-category]"));e.classList.remove("header__navigation--nojs"),function(e){const t=JSON.parse(localStorage.getItem("theme"));e.dataset.theme=localStorage.getItem("themeTitle");for(const e in t)document.documentElement.style.setProperty(e,t[e])}(x),null!==localStorage.getItem("data")?C.getLocalStorage(I,A):(C.renderDefaultData(A,q),D.setCategoryTitle(I,"Экзотические")),$.addEventListener("click",i),x.addEventListener("click",(function(){"base"===this.dataset.theme?(this.dataset.theme="dark",a(this.dataset.theme),n(this.dataset.theme)):(this.dataset.theme="base",a(this.dataset.theme),n(this.dataset.theme))})),window.addEventListener("scroll",(()=>function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:200;window.pageYOffset>t?(e.classList.remove("content__button--hidden"),e.addEventListener("click",c)):(e.classList.add("content__button--hidden"),e.removeEventListener("click",c))}(T)));for(let e=0;e<P.length;e++){const t=P[e];t.addEventListener("click",(e=>{e.preventDefault(),i(),c();const s=e.target.textContent;switch(t.dataset.category){case"exotic":C.setLocalStorage("Экзотические",q.exotic),C.renderData(A,q,"exotic"),D.setCategoryTitle(I,s);break;case"wild":C.setLocalStorage("Дикие",q.wild),C.renderData(A,q,"wild"),D.setCategoryTitle(I,s);break;case"pet":C.setLocalStorage("Домашние",q.pet),C.renderData(A,q,"pet"),D.setCategoryTitle(I,s)}}))}})();