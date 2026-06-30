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

import { sendUserMessage } from "./chat.js";

const input = document.getElementById("messageInput");

const sendButton = document.getElementById("sendBtn");

function send() {

    const message = input.value;

    sendUserMessage(message);

    input.value = "";

}

sendButton.addEventListener("click", send);

input.addEventListener("keydown", (event) => {

    if (event.key === "Enter" && !event.shiftKey) {

        event.preventDefault();

        send();

    }

});
