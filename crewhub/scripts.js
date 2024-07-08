document.addEventListener('DOMContentLoaded', () => {
    const chatForm = document.getElementById('chatForm');
    const chatBox = document.getElementById('chatBox');
    const chatInput = document.getElementById('chatInput');

    chatForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const message = chatInput.value.trim();
        if (message) {
            addMessage('You', message);
            chatInput.value = '';
            // Simulate a response from a laborer
            setTimeout(() => addMessage('Laborer', 'Thank you for your message!'), 1000);
        }
    });

    function addMessage(user, message) {
        const messageElement = document.createElement('div');
        messageElement.classList.add('chat-message');
        messageElement.innerHTML = `<span class="user">${user}:</span><span class="message">${message}</span>`;
        chatBox.appendChild(messageElement);
        chatBox.scrollTop = chatBox.scrollHeight;
    }
});
