const messageInput = document.getElementById('messageInput');
const filterInput = document.getElementById('filterInput');
const addButton = document.getElementById('addButton');
const updateButton = document.getElementById('updateButton');
const deleteButton = document.getElementById('deleteButton');
const list = document.getElementById('list');

let messageListStorage = JSON.parse(localStorage.getItem("items")) || [];
let messages = [];

//FUNCTIONS
const createMessage = () => {
    const element = document.createElement('li');
    const elementText = document.createTextNode(messageInput.value);
    element.appendChild(elementText);
    document.getElementById('list').appendChild(element);
    messages.push(messageInput.value);
    localStorage.setItem('items', JSON.stringify(messages));
    messageInput.value = ""
    filterMessage()
};

function filterMessage() {
    const allMesages = document.getElementsByTagName("li")
    messages.map((items, i) => {
        if (items.toLowerCase().includes(filterInput.value.toLowerCase())) {
            allMesages[i].style.display = "block"
        } else {
            allMesages[i].style.display = "none"
        }
    })
};

const deleteMessage = () => {
    let newArray = [];
    for (let a = 0; a < messages.length; a++) {
        if (!messages[a].toLowerCase().includes(`${filterInput.value.toLowerCase()}`)) {
            newArray.push(messages[a]);
        }
    }
    localStorage.setItem('items', JSON.stringify(newArray));
    messages = newArray;
    resetArray();
    filterMessage();
};

const addMessage = () => {
    messages.map((a) => {
        var li = document.createElement("li");
        li.appendChild(document.createTextNode(a));
        list.appendChild(li);
    })
};

const updateMessage = () => {
    const allMesages = document.getElementsByTagName("li")
    messages = [];
    for (let i = 0; i < allMesages.length; i++) {
        if (allMesages[i].style.display == "block") {
            allMesages[i].innerText = allMesages[i].innerText.replaceAll(filterInput.value, messageInput.value);
        }
        messages.push(allMesages[i].innerText);
    }
    localStorage.setItem('items', JSON.stringify(messages));
};

const resetArray = () => {
    list.innerHTML = "";
    addMessage()
};

if (messageListStorage !== null) {
    messages = [...messageListStorage];
    addMessage()
};

filterInput.addEventListener('input', filterMessage);
deleteButton.addEventListener("click", deleteMessage);
addButton.addEventListener('click', createMessage);
updateButton.addEventListener("click", updateMessage);
messageInput.addEventListener("keypress", (event) => { if (event.keyCode === 13 || event.which === 13) { addButton.click() } });
