function send(){

    const text = input.value.trim();

    if(text==="") return;

    sendUserMessage(text);

    input.value="";

    input.style.height="auto";

}

input.addEventListener("input",()=>{

    input.style.height="auto";

    input.style.height=input.scrollHeight+"px";

});