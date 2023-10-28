import home from './home'
import contact from './contact'
import menu from './menu'
const tabs=()=>{
const Content=document.querySelector('#content')
const d1=document.createElement('div')
const d2=document.createElement('div')
const d3=document.createElement('div')
d1.setAttribute('id','home-btn')
d2.setAttribute('id','contact-btn')

d1.classList.add('tab')
d2.classList.add('tab')

d1.textContent='Home'
d2.textContent='Contact'

Content.appendChild(d1)
Content.appendChild(d2)
Content.appendChild(d3)
d2.addEventListener('click',()=>{
    clearContent();
    contact();
})
d1.addEventListener('click',()=>{
    clearContent();
    home();
})



}
function clearContent(){
    console.log('joel')
    var pageContent = document.querySelector('.page-content'); // Correct class selector
    if (pageContent)
    {
        Content.removeChild(pageContent)
    }
}


export default tabs