const home=()=>{
    const content =document.querySelector("#content")
    const pageContent=document.createElement('div')
    pageContent.setAttribute('id','home-btn')
    pageContent.classList.add('page-content')

    const headline=document.createElement('h1')
    headline.innerHTML="Indian Aesthetics"
    const image=document.createElement('img')
    image.src="https://i.pinimg.com/736x/56/25/18/562518009aa9a63d6c490a254ee53796.jpg"
    image.alt="Chicken biryani"
    pageContent.appendChild(image)



    const text=document.createElement('p')
    text.innerHTML="World's famous Hyderbadi biryani"
    pageContent.appendChild(text)
    content.appendChild(pageContent)
}
export default home