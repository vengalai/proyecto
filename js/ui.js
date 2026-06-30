import { getCurrentTime, scrollToBottom } from "./utils.js";

const chatContainer = document.getElementById("chatMessages");

export function addMessage(text, sender) {

    const message = document.createElement("div");

    message.classList.add("message", sender);

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

}