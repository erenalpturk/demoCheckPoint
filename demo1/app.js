const nameInput = document.getElementById("fullname");
const ageInput = document.getElementById("age");
const addButton = document.getElementById("add");
const deleteButton = document.getElementById("delete");
const updateButton = document.getElementById("update");
const container = document.getElementById("container");

let contactLS = JSON.parse(localStorage.getItem("items")) || [];
let contact = [];

const addFunction = () => {
    if (nameInput.value != "") {
        const newLi = document.createElement("li");
        const newLiContent = document.createTextNode(nameInput.value + " " + ageInput.value);
        newLi.appendChild(newLiContent);
        container.appendChild(newLi);
        contact.push({ name: nameInput.value, age: ageInput.value });
        localStorage.setItem("items", JSON.stringify(contact));
        nameInput.value = ""
        ageInput.value = ""
    } else { alert("Please fill the name and age") }
}

const deleteFunction = () => {
    let newArr = [];
    for (let i = 0; i < contact.length; i++) {
        if (!contact[i].name.toLowerCase().includes(nameInput.value.toLowerCase())) {
            newArr.push(contact[i]);
        }
    }
    localStorage.setItem("items", JSON.stringify(newArr))
    console.log(newArr)
    contact = newArr
    console.log(contact)
    listing()

}

const listing = () => {
    let tag = document.getElementsByTagName("li")
    for (let i = 0; i < tag.length; i++) {
        tag[i].style.display = "none"
    }
    contact.map((a) => {
        const newLi = document.createElement("li");
        const newLiContent = document.createTextNode(a.name + " " + a.age);
        newLi.appendChild(newLiContent);
        container.appendChild(newLi);
    })
}

const updateFunction = () => {
    let ahmet=[]
    for (let i = 0; i < contact.length; i++) {
        if (contact[i].name.toLowerCase().includes(nameInput.value)) {
            contact[i].name = contact[i].name.replaceAll(nameInput.value, ageInput.value);
        }
        ahmet.push(contact[i]);
    }
    contact = ahmet
    listing()
}

if (contactLS !== null) {
    contact = [...contactLS];
    listing()
};


addButton.addEventListener("click", addFunction)
deleteButton.addEventListener("click", deleteFunction)
updateButton.addEventListener("click", updateFunction)
nameInput.addEventListener("keypress", (event) => { if (event.keyCode === 13 || event.which === 13) { addButton.click() } });
ageInput.addEventListener("keypress", (event) => {
    if (event.keyCode === 13 || event.which === 13) {
        addButton.click();
        nameInput.focus()
    }
});

