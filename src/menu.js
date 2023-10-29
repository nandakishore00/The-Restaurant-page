const menu=()=>{
    var content=document.querySelector("#content")
    
    const d3=document.createElement("div")
    d3.setAttribute('id','menu-btn')
    content.style.backgroundColor="lightblue";
    const h1=document.createElement('h1')
    h1.textContent="Choose your platter"
    var menuList=document.createElement('ul')
    var menuItem1=document.createElement('li')
    var menuItem2=document.createElement('li')
    var menuItem3=document.createElement('li')
    menuItem1.textContent='Barbeque Chicken'
    menuItem2.textContent='Chicken Mjestic'
    menuItem3.textContent='Chicken Biryani'
    menuList.appendChild(h1)
    menuList.appendChild(menuItem1)
    menuList.appendChild(menuItem2)
    menuList.appendChild(menuItem3)
    d3.appendChild(h1)
    d3.appendChild(menuList)
    content.appendChild(d3)
}

export default menu