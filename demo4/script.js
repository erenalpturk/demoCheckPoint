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
            hobbies.push((document.getElementById(`checkbox${i}`)).innerHTML)
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
    selectedHobbies = [];
    for (let i = 0; i < checkbox.length; i++) {
        if (checkbox[i].checked == 1) {
            selectedHobbies.push(checkbox[i].id)
        }
    }


    // console.log(liArr[1].hobbies.includes(hobbies[0]))


    // console.log(liArr[2].hobbies.includes(selectedHobbies[0]))

    for (let i = 0; i < liArr.length; i++) {
        var inHobbies = false
        for (let a = 0; a < selectedHobbies.length; a++) {
            if (liArr[i].hobbies.includes(selectedHobbies[a]) != 1) {
                inHobbies = false;
                break;
            } else {
                inHobbies = true;
            }
        }
    }

    if (fullname.value != "") {
        for (let i = 0; i < liArr.length; i++) {
            var matchName = false;
            if (liArr[i].name.includes(fullname.value) && liArr[i].age == age.value) {
                matchName = true;
            }
        }
    }

    if (age.value != "") {
        var matchAge = false;
        for (let i = 0; i < liArr.length; i++) {
            if (liArr[i].age == age.value) {
                matchAge = true;
            }
        }
    }

    if (inHobbies && matchName && matchAge) {
        console.log("here")
    }
}






const allFunc = () => {
    console.log("allFunc")
}


if (liArrLocal != null) {
    liArr = [...liArrLocal]
    listing()
}


addButton.addEventListener("click", addFunc)
filterButton.addEventListener("click", filterFunc)
allButton.addEventListener("click", allFunc)