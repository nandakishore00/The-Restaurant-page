(()=>{"use strict";const e=()=>{const e=document.querySelector("#content"),t=document.createElement("div");t.setAttribute("id","home-btn"),t.classList.add("page-content"),document.createElement("h1").innerHTML="Indian Aesthetics";const n=document.createElement("img");n.src="https://i.pinimg.com/736x/56/25/18/562518009aa9a63d6c490a254ee53796.jpg",n.alt="Chicken biryani",t.appendChild(n);const c=document.createElement("p");c.innerHTML="World's famous Hyderbadi biryani",t.appendChild(c),e.appendChild(t)};function t(){document.querySelector("#content").innerHTML=""}e(),document.querySelector("#content");const n=document.querySelector("#home-btn"),c=document.querySelector("#menu-btn"),d=document.querySelector("#contact-btn");n.addEventListener("click",(()=>{t(),e()})),c.addEventListener("click",(()=>{t(),(()=>{var e=document.querySelector("#content");const t=document.createElement("div");t.setAttribute("id","menu-btn"),e.style.backgroundColor="lightblue";const n=document.createElement("h1");n.textContent="Choose your platter";var c=document.createElement("ul"),d=document.createElement("li"),o=document.createElement("li"),r=document.createElement("li");d.textContent="Barbeque Chicken",o.textContent="Chicken Mjestic",r.textContent="Chicken Biryani",c.appendChild(n),c.appendChild(d),c.appendChild(o),c.appendChild(r),t.appendChild(n),t.appendChild(c),e.appendChild(t)})()})),d.addEventListener("click",(()=>{t(),(()=>{var e=document.querySelector("#content");const t=document.createElement("form");t.setAttribute("id","contact-btn");const n=document.createElement("input");n.type="text",n.placeholder="Enter your name";const c=document.createElement("input");c.type="number",c.placeholder="Enter your number";const d=document.createElement("input");d.type="email",d.placeholder="Enter your mail-id";const o=document.createElement("input");o.type="submit",o.value="Submit",t.appendChild(n),t.appendChild(c),t.appendChild(d),t.appendChild(o),e.appendChild(t)})()}))})();