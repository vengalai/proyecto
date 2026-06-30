export function showTyping(){

    typingMessage = document.createElement("div");

    typingMessage.className = "message bot";

    typingMessage.innerHTML = `

        <div class="avatar">🤖</div>

        <div class="message-content">

            <p>Thinking...</p>

        </div>

    `;

    chatContainer.appendChild(typingMessage);

    scrollToBottom(chatContainer);

}

export function hideTyping(){

    if(typingMessage){

        typingMessage.remove();

        typingMessage = null;

    }

}

import { getCurrentTime, scrollToBottom } from "./utils.js";

const chatContainer = document.getElementById("chatMessages");

let typingMessage = null;

export function addMessage(text, sender) {

    const message = document.createElement("div");

    message.className = `message ${sender}`;

    message.innerHTML = `
        <div class="avatar">
            ${sender === "user" ? "👤" : "🤖"}
        </div>

        <div class="message-content">
            <p>${text}</p>
            <span class="time">${getCurrentTime()}</span>
        </div>
    `;

    chatContainer.appendChild(message);

    scrollToBottom(chatContainer);

    return message;

}