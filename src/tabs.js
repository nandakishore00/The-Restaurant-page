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
d3.setAttribute('id','menu-btn')
d1.classList.add('tab')
d2.classList.add('tab')
d3.cla/sList.add('tab')
d1.innerContent='Home'
d2.innerContent='Contact'
d3.innerContent='Menu'
d1.addEventListener('click',()=>{
    clear()
    home()
})
d2.addEventListener('click',()=>{
    clear()
    contact()
})                                                                                                                                                                                                                                                     xListener('click',()=>{contact()})
d3.addEventListener('click',()=>{
    clear()
    menu()})
}
function clear(){
    const Content=document.querySelector('#content')
    const pageContent=document.querySelector("#pageContent")
    Content.remove(pageContent)
}
Content.appendChild(d1)
Content.appendChild(d2)
Content.appendChild(d3)
export default tabs