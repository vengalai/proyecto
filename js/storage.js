const STORAGE_KEY = "chat-history";

export function saveMessages(messages) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(messages));
}

export function loadMessages() {
    return JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
}

export function clearMessages() {
    localStorage.removeItem(STORAGE_KEY);
}