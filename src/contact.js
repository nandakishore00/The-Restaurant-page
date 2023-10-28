const contact=()=>{
    var content=document.querySelector("#content")
    const form= document.createElement("form")
    form.setAttribute('id','contact-btn')
    
    const nameInput = document.createElement("input");
    nameInput.type = "text"; // Set the input type to "text"
    nameInput.placeholder = "Enter your name";

    const Number = document.createElement("input");
    Number.type = "number"; // Set the input type to "text"
    Number.placeholder = "Enter your number";

    const Mail = document.createElement("input");
    Mail.type = "email"; // Set the input type to "text"
    nameInput.placeholder = "Enter your mail-id";

    const Submit =document.createElement('input');
    Submit.type='submit';
    Submit.value="Submit";
    form.appendChild(Submit)
    form.appendChild(nameInput)
    form.appendChild(Number)
    form.appendChild(Mail)
    content.appendChild(form)
}
export default contact