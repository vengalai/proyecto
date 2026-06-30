import { addMessage } from "./ui.js";

export function sendUserMessage(message) {

    if (!message.trim()) return;

    addMessage(message, "user");

}