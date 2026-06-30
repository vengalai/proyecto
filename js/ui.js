let typingMessage = null;

export function showTyping() {

    typingMessage = document.createElement("div");

    typingMessage.className = "message bot";

    typingMessage.innerHTML = `

        <div class="avatar">🤖</div>

        <div class="message-content">

            <p>Typing...</p>

        </div>

    `;

    chatContainer.appendChild(typingMessage);

    scrollToBottom(chatContainer);

}

export function removeTyping() {

    if(typingMessage){

        typingMessage.remove();

        typingMessage = null;

    }

}