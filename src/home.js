const home=()=>{
    const content =document.querySelector("#content")
    const pageContent=document.createElement('div')
    pageContent.classList.add('page-content')

    const image=document.createElement('img')
    image.src="https://i.pinimg.com/736x/56/25/18/562518009aa9a63d6c490a254ee53796.jpg"
    pageContent.addChild(image)


    const headline=document.createElement('h1')
    headline.innerHTML="Indian Aesthetics"
    pageContent.addChild('headline')

    const text=document.createElement('p')
    text.innerHTML="World's famous Hyderbadi biryani"
    pageContent.addChild('text')
    content.appendChild('pageContent')
}
export default home