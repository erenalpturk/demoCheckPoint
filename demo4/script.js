const fullname = document.getElementById("fullname")
const age = document.getElementById("age")
const addButton = document.getElementById("addButton")
const football = document.getElementById("football")
const basketball = document.getElementById("basketball")
const formula1 = document.getElementById("formula1")
const allButton = document.getElementById("allButton")
const filterButton = document.getElementById("filterButton")
const list = document.getElementById("list")
const checkbox = document.getElementsByClassName("checkbox")

let liArrLocal = JSON.parse(localStorage.getItem("items")) || []
let liArr = []
let hobbies = []




const addFunc = () => {
    for (let i = 0; i < checkbox.length; i++) {
        if (checkbox[i].checked == 1) {
            hobbies.push(checkbox[i].id)
        }
    }

    let newLi = document.createElement("li")
    let liText = document.createTextNode(fullname.value + " " + age.value + " // " + hobbies)
    newLi.appendChild(liText)
    list.appendChild(newLi)
    liArr.push({
        name: fullname.value,
        age: age.value,
        hobbies: hobbies
    })
    hobbies = []
    localStorage.setItem("items", JSON.stringify(liArr))
    fullname.value = ""
    age.value = ""
}

const listing = () => {
    for (let i = 0; i < liArr.length; i++) {
        let newLi = document.createElement("li")
        let liText = document.createTextNode(liArr[i].name + " " + liArr[i].age + " // " + liArr[i].hobbies)
        newLi.appendChild(liText)
        list.appendChild(newLi)
    }
}
listing()

const filterFunc = () => {
    const nameFilter = fullname.value.trim();
    const ageFilter = age.value.trim();
    const selectedHobbies = [];

    for (let i = 0; i < checkbox.length; i++) {
        if (checkbox[i].checked) {
            selectedHobbies.push(checkbox[i].id);
        }
    }

    list.innerHTML = '';

    for (let i = 0; i < liArr.length; i++) {
        const user = liArr[i];

        //BOS OLAN INPUTLARI DOGRU KABUL ETTIGIMIZ YER 
        const nameMatches = !nameFilter || user.name.toLowerCase().includes(nameFilter.toLowerCase());
        const ageMatches = !ageFilter || user.age === ageFilter;
        let hobbiesMatch = (selectedHobbies.length === 0)

        
        if (selectedHobbies.length > 0) {
            hobbiesMatch = true;
            for (let j = 0; j < selectedHobbies.length; j++) {
                if (!user.hobbies.includes(selectedHobbies[j])) {
                    hobbiesMatch = false;
                    break;
                }
            }
        }

        if (nameMatches && ageMatches && hobbiesMatch) {
            let newLi = document.createElement('li');
            newLi.textContent = user.name + ' ' + user.age + ' // ' + user.hobbies;
            list.appendChild(newLi);
        }
    }
};

const allFunc = () => {
    list.innerHTML = '';
        for (let i = 0; i < liArr.length; i++) {
        let newLi = document.createElement("li")
        let liText = document.createTextNode(liArr[i].name + " " + liArr[i].age + " // " + liArr[i].hobbies)
        newLi.appendChild(liText)
        list.appendChild(newLi)
    }
}


if (liArrLocal != null) {
    liArr = [...liArrLocal]
    listing()
}


addButton.addEventListener("click", addFunc)
filterButton.addEventListener("click", filterFunc)
allButton.addEventListener("click", allFunc)