const menu=()=>{
    var content=document.querySelector("#content")
    var menu=document.createElement('div')
    const h1=document.createElement('h1')
    h1.innerContent="Choose your platter"
    var menuList=document.createElement('ul')
    var menuItem1=document.createElement('li')
    var menuItem2=document.createElement('li')
    var menuItem3=document.createElement('li')
    menuItem1.innerContent='Barbeque Chicken'
    menuItem2.innerContent='Chicken Mjestic'
    menuItem3.innerContent='Chicken Biryani'
    menuList.appendChild(menuItem1)
    menuList.appendChild(menuItem2)
    menuList.appendChild(menuItem3)
    content.appendChild(menuList)
}

export default menu