const menu=()=>{
    content=document.querySelector("#content")
    menu=document.createElement('div')
    h1=menu.createElement('h1')
    h1.innerContent="Choose your platter"
    menuList=document.createElement('ul')
    menuItem1=document.createElement('li')
    nemuItem2=document.createElement('li')
    menuItem3=document.createElement('li')
    menuItem1.innerContent='Barbeque Chicken'
    menuItem2.innerContent='Chicken Mjestic'
    menuItem3.innerContent='Chicken Biryani'
    menuList.appendChild(menuItem1)
    menuList.appendChild(menuItem2)
    menuList.appendChild(menuItem3)
    content.appendChild(menuList)
}

export default menu