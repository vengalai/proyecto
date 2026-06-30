import { addMessage, showTyping, removeTyping } from "./ui.js";

import { askGemini } from "./api.js";

export async function sendUserMessage(message){

    if(!message.trim()) return;

    addMessage(message,"user");

    showTyping();

    const response = await askGemini(message);

    removeTyping();

    addMessage(response,"bot");

}

import { addMessage } from "./ui.js";

export function sendUserMessage(message) {

    if (!message.trim()) return;

    addMessage(message, "user");

}

import { saveMessages, loadMessages } from "./storage.js";

let messages = loadMessages();

messages.push({
    sender: "user",
    text: message
});

saveMessages(messages);

messages.push({
    sender: "bot",
    text: response
});

saveMessages(messages);

import { addMessage } from "./ui.js";

export function loadChatHistory() {

    messages.forEach(message => {

        addMessage(message.text, message.sender);

    });

}