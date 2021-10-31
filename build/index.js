(()=>{"use strict";var e=document.querySelector(".nav-mobile"),t=document.querySelector(".modal-pledge"),o=document.querySelector(".modal-confirmation"),l=document.querySelector(".container"),c=document.querySelector(".nav"),n=document.querySelectorAll("[data-form]"),a=(document.getElementById("pledgeSelector25"),document.getElementById("pledgeSelector75"),document.getElementById("pledgeSelector200"),document.getElementById("pledgeInput25"),document.getElementById("pledgeInput75"),document.getElementById("pledgeInput200"),document.getElementById("btnBookmark")),r=document.querySelectorAll('[type="radio"]'),s=document.querySelectorAll(".pledge-option"),i=document.getElementById("progressBar"),u=document.getElementById("currentAmount"),d=document.getElementById("totalAmount"),g=document.getElementById("totalBackers"),m=document.querySelectorAll("[data-field25]"),p=document.querySelectorAll("[data-field75]"),f=document.querySelectorAll("[data-field200]");function k(e,t){for(var o=0;o<t.length;o++){var l=t[o];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(e,l.key,l)}}var h=function(){s.forEach((function(e){e.querySelector('[type="radio"]').checked=!1,e.classList.toggle("active",!1)})),pledgeInput25.value=25,pledgeInput75.value=75,pledgeInput200.value=200},y=function(e,t){if(t){var o=e.offsetHeight;l.style.height="".concat(o,"px")}else l.style.height="auto"},v=new(function(){function e(t,o,l,c,n,a){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.currentAmount=t,this.totalAmount=o,this.totalBackers=l,this.leftNoBackers25=c,this.leftNoBackers75=n,this.leftNoBackers200=a}var t,o;return t=e,o=[{key:"calcAmount",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;this.currentAmount=this.currentAmount+parseInt(e)}},{key:"calcTotalBackers",value:function(){this.totalBackers+=1}},{key:"calcLeftNoBackers25",value:function(){0!==this.leftNoBackers25&&(this.leftNoBackers25=this.leftNoBackers25-1)}},{key:"calcLeftNoBackers75",value:function(){0!==this.leftNoBackers75&&(this.leftNoBackers75-=1)}},{key:"calcLeftNoBackers200",value:function(){0!==this.leftNoBackers200&&(this.leftNoBackers200-=1)}},{key:"updateUI",value:function(){var e=this,t=this.totalAmount.toLocaleString("en",{style:"currency",currency:"USD",maximumFractionDigits:0}),o=this.currentAmount.toLocaleString("en",{style:"currency",currency:"USD",maximumFractionDigits:0}),l=this.totalBackers.toLocaleString("en",{maximumFractionDigits:0});i.style.width="".concat(this.currentAmount/this.totalAmount*100,"%"),d.innerText="of ".concat(t," backed"),u.innerText="".concat(o),g.innerText=l,m.forEach((function(t){t.innerText=e.leftNoBackers25})),p.forEach((function(t){t.innerText=e.leftNoBackers75})),f.forEach((function(t){t.innerText=e.leftNoBackers200}))}}],o&&k(t.prototype,o),e}())(5e4,1e5,5e3,101,64,0);v.calcAmount(),v.updateUI(),window.addEventListener("click",(function(l){(l.target.closest("#openMobileMenu")||l.target.closest("#closeMobileMenu"))&&(c.classList.toggle("disabled-fade"),e.classList.toggle("open-modal")),l.target.closest("#btnBookmark")&&(a.classList.contains("active")?(a.classList.toggle("active",!1),a.querySelector("span").innerText="Bookmark"):(a.classList.toggle("active",!0),a.querySelector("span").innerText="Bookmarked")),"openPledgeModal"===l.target.id&&(h(),t.classList.toggle("open-modal"),y(t,!0)),l.target.closest("#closePledgeModal")&&(t.classList.toggle("open-modal"),y(t,!1)),"openModalPledge-25"!==l.target.id&&"openModalPledge-75"!==l.target.id&&"openModalPledge-200"!==l.target.id||(t.classList.toggle("open-modal"),function(e){var t,o=e.id.split("-")[1];switch(h(),o){case"25":pledgeInput25.value=o,pledgeSelector25.checked=!0,t=pledgeInput25.closest(".pledge-option");break;case"75":pledgeInput75.value=o,pledgeSelector75.checked=!0,t=pledgeInput75.closest(".pledge-option");break;case"200":pledgeInput200.value=o,pledgeSelector200.checked=!0,t=pledgeInput200.closest(".pledge-option");break;default:return}t.classList.toggle("active",!0)}(l.target),y(t,!0),window.scrollTo({top:0,behavior:"smooth"})),l.target.closest("#closeConfirmedModal")&&(o.classList.toggle("open-modal",!1),y(o,!1),window.scrollTo({top:0,behavior:"smooth"}))})),n.forEach((function(e){e.addEventListener("submit",(function(l){l.preventDefault();var c=e.querySelector('input[type="number"]'),n=c.value,a=c.placeholder;switch(v.calcAmount(n),v.calcTotalBackers(),a){case"0":break;case"25":v.calcLeftNoBackers25();break;case"75":v.calcLeftNoBackers75();break;case"200":v.calcLeftNoBackers200();break;default:return}v.updateUI(),t.classList.toggle("open-modal",!1),o.classList.toggle("open-modal",!0),y(o,!0)}))})),r.forEach((function(e){e.addEventListener("click",(function(){s.forEach((function(e){e.classList.toggle("active",!1)})),e.closest(".pledge-option").classList.toggle("active",!0),y(t,!0)}))})),window.addEventListener("keydown",(function(o){"Escape"===o.key&&(t.classList.toggle("open-modal",!1),e.classList.toggle("open-modal",!1),c.classList.toggle("disabled-fade",!1),y("default",!1))}))})();