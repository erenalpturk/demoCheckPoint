const nameInput1 = document.getElementById("nameInput1");
const ageInput1 = document.getElementById("ageInput1");
const filterInput1 = document.getElementById("filterInput1");
const addButton1 = document.getElementById("addButton1");
const deleteButton1 = document.getElementById("deleteButton1");
const updateButton1 = document.getElementById("updateButton1");
const list1 = document.getElementById("list1");
const sameList = document.getElementById("sameList");
const nameInput2 = document.getElementById("nameInput2");
const filterInput2 = document.getElementById("filterInput2");
const ageInput2 = document.getElementById("ageInput2");
const addButton2 = document.getElementById("addButton2");
const deleteButton2 = document.getElementById("deleteButton2");
const updateButton2 = document.getElementById("updateButton2");
const list2 = document.getElementById("list2");



let contacts1LS = JSON.parse(localStorage.getItem("list1"))
let contacts1 = []

const addFunction1 = () => {
    const newLi = document.createElement("li");
    const newLiText = document.createTextNode(nameInput1.value + " " + ageInput1.value);
    newLi.appendChild(newLiText);
    newLi.className = "list1Li"
    contacts1.push({
        name: nameInput1.value,
        age: ageInput1.value
    }
    );
    localStorage.setItem("list1", JSON.stringify(contacts1));
    list1.appendChild(newLi);
    nameInput1.value = "";
    ageInput1.value = "";
    sameMembers()
}

const listing1 = () => {
    let liTags = document.getElementsByClassName("list1Li")
    for (let i = 0; i < liTags.length; i++) {
        liTags[i].style.display = "none"
    }

    contacts1.map((a) => {
        const newLi = document.createElement("li");
        const newLiText = document.createTextNode(a.name + " " + a.age);
        newLi.className = "list1Li"
        newLi.appendChild(newLiText);
        list1.appendChild(newLi);
    })
}

const filterFunction1 = () => {
    let liTags = document.getElementsByClassName("list1Li")
    for (let i = 0; i < contacts1.length; i++) {
        if (!liTags[i].innerHTML.toLowerCase().includes(filterInput1.value)) {
            liTags[i].style.display = "none"
        } else {
            liTags[i].style.display = "block"
        }
    }
}

const deleteFunction1 = () => {
    let newArr = []
    for (let i = 0; i < contacts1.length; i++) {
        if (!contacts1[i].name.toLowerCase().includes(filterInput1.value)) {
            newArr.push(contacts1[i])
        }
    }
    localStorage.setItem('list1', JSON.stringify(newArr))
    contacts1 = newArr;
    filterInput2.value = ""
    list1.innerHTML = ""
    listing1()
    filterFunction1()
}
const updateFunction1 = () => {
    let newArr = [];
    let liTags = document.getElementsByClassName("list1Li")
    for (let i = 0; i < liTags.length; i++) {
        liTags[i].display = "none";
    }
    for (let i = 0; i < contacts1.length; i++) {
        if (contacts1[i].name.toLowerCase().includes(filterInput1.value)) {
            contacts1[i].name = contacts1[i].name.replaceAll(filterInput1.value, nameInput1.value)
        }
        newArr.push(
            {
                name: contacts1[i].name,
                age: contacts1[i].age
            });
    }
    localStorage.setItem("list1", JSON.stringify(newArr));
    contacts1 = newArr
    listing1()
    filterInput1.value = ""
}

if (contacts1LS !== null) {
    contacts1 = [...contacts1LS]
    listing1()
}






//RİGHTSİDE
let contacts2LS = JSON.parse(localStorage.getItem("list2"))
let contacts2 = []

const listing2 = () => {
    contacts2.map((a) => {
        const newLi = document.createElement("li");
        const newLiText = document.createTextNode(a.name + " " + a.age);
        newLi.className = "list2Li"
        newLi.appendChild(newLiText);
        list2.appendChild(newLi);
    })
}
listing2()
const addFunction2 = () => {
    const newLi = document.createElement("li");
    const newLiText = document.createTextNode(nameInput2.value + " " + ageInput2.value);
    newLi.appendChild(newLiText);
    newLi.className = "list2Li"
    contacts2.push({
        name: nameInput2.value,
        age: ageInput2.value
    }
    );
    localStorage.setItem("list2", JSON.stringify(contacts2));
    list2.appendChild(newLi);
    nameInput2.value = "";
    ageInput2.value = "";
}

const filterFunction2 = () => {
    let liTags = document.getElementsByClassName("list2Li")
    for (let i = 0; i < contacts2.length; i++) {
        if (!liTags[i].innerHTML.toLowerCase().includes(filterInput2.value)) {
            liTags[i].style.display = "none"
        } else {
            liTags[i].style.display = "block"
        }
    }
}

const deleteFunction2 = () => {
    let newArr = []
    for (let i = 0; i < contacts2.length; i++) {
        if (!contacts2[i].name.toLowerCase().includes(filterInput2.value)) {
            newArr.push(contacts2[i])
        }
    }
    localStorage.setItem('list2', JSON.stringify(newArr))
    contacts2 = newArr;
    list2.innerHTML = ""
    listing2()
    filterFunction2()

}
const updateFunction2 = () => {
    let newArr = [];
    let liTags = document.getElementsByClassName("list2Li")
    for (let i = 0; i < liTags.length; i++) {
        liTags[i].display = "none";

    }
    for (let i = 0; i < contacts2.length; i++) {
        if (contacts2[i].name.toLowerCase().includes(filterInput2.value)) {
            contacts2[i].name = contacts2[i].name.replaceAll(filterInput2.value, nameInput2.value)
        }
        newArr.push(
            {
                name: contacts2[i].name,
                age: contacts2[i].age
            });
    }
    localStorage.setItem("list2", JSON.stringify(newArr));
    contacts2 = newArr
    listing2()
    filterInput2.value = ""
}

if (contacts2LS !== null) {
    contacts2 = [...contacts2LS]
    listing2()
}


//SAME MEMBERS
const sameMembers = () => {
    sameList.innerHTML = ""
    let sameArr = [];
    for (let i = 0; i < contacts1.length; i++) {
        for (let a = 0; a < contacts2.length; a++) {
            if (contacts1[i].name.toLowerCase() == contacts2[a].name.toLowerCase()) {
                sameArr.push(
                    {
                        name: contacts1[i].name,
                        ages: contacts1[i].age + "/" + contacts2[a].age
                    }
                )
            }
        }
    }
    for (let i = 0; i < sameArr.length; i++) {
        const newLi = document.createElement("li")
        const newLiText = document.createTextNode(sameArr[i].name + " " + sameArr[i].ages)
        newLi.appendChild(newLiText)
        sameList.appendChild(newLi)
    }

    console.log(sameArr)
}
sameMembers()

addButton1.addEventListener('click', () => { addFunction1(); sameMembers(); });
deleteButton1.addEventListener("click", () => { deleteFunction1(); sameMembers(); });
updateButton1.addEventListener('click', () => { updateFunction1(); sameMembers(); });
filterInput1.addEventListener('input', filterFunction1);

addButton2.addEventListener("click", () => { addFunction2(); sameMembers(); });
deleteButton2.addEventListener("click", () => { deleteFunction2(); sameMembers(); });
updateButton2.addEventListener("click", () => { updateFunction2(); sameMembers(); });
filterInput2.addEventListener("input", filterFunction2);

ageInput1.addEventListener("keypress", (event) => { if (event.keyCode === 13 || event.which === 13) { addButton1.click(); nameInput1.focus() } });
ageInput2.addEventListener("keypress", (event) => { if (event.keyCode === 13 || event.which === 13) { addButton2.click(); nameInput2.focus() } });
filterInput2.addEventListener("keypress", (event) => { if (event.keyCode === 13 || event.which === 13) { updateButton1.click() } });
ageInput1.addEventListener("keypress", (event) => { if (event.keyCode === 13 || event.which === 13) { } });
