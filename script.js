const messageInput = document.getElementById('messageInput');
const filterInput = document.getElementById('filterInput');
const addButton = document.getElementById('addButton');
const updateButton = document.getElementById('updateButton');
const deleteButton = document.getElementById('deleteButton');
const list = document.getElementById('list');

let messageListStorage = JSON.parse(localStorage.getItem("items")) || [];
let messages = [];

if (messageListStorage !== null) {
    messages = [...messageListStorage];
    for (let i = 0; i < messageListStorage.length; i++) {
        var li = document.createElement("li");
        var message = messageListStorage[i];
        li.style.display = "block"
        li.appendChild(document.createTextNode(message));
        list.appendChild(li);
    }
}

function resetArray() {
    list.innerHTML = "";
    for (let i = 0; i < messages.length; i++) {
        var li = document.createElement("li");
        let message = messages[i];
        li.style.display = "block"
        li.appendChild(document.createTextNode(message));
        list.appendChild(li);
    }
}

//FUNCTIONS
const CreateMessage = () => {
    const element = document.createElement('li');
    const elementText = document.createTextNode(messageInput.value);
    element.appendChild(elementText);
    document.getElementById('list').appendChild(element);
    messages.push(messageInput.value);
    localStorage.setItem('items', JSON.stringify(messages));
    messageInput.value = ""
};

function filterMessage(){
    const allMesages = document.getElementsByTagName("li")
    for (let a = 0; a < messages.length; a++) {
        if (messages[a].toLowerCase().includes(`${filterInput.value.toLowerCase()}`)) {
            allMesages[a].style.display = "block"
        } else {
            allMesages[a].style.display = "none"
        }
    }
}

const DeleteMessage = () => {
    let newArray = [];
    for (let a = 0; a < messages.length; a++) {
        if (messages[a].toLowerCase().includes(`${filterInput.value.toLowerCase()}`)) {
        } else {
            newArray.push(messages[a]);
        }
    }
    console.log(newArray);
    localStorage.setItem('items', JSON.stringify(newArray));
    messages = newArray;
    resetArray();
    filterMessage();
}

filterInput.addEventListener('input', () => {
    filterMessage();
});

deleteButton.addEventListener("click", DeleteMessage);
addButton.addEventListener('click', CreateMessage);

