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