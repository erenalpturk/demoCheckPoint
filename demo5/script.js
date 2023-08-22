let name = document.getElementById("name")
let count = document.getElementById("count")
let add = document.getElementById("add")
let list = document.getElementById("list")
let rent = document.getElementById("rent")

let LStorage = JSON.parse(localStorage.getItem("cars"))
let liArr = []

const listing = () => {
    liArr.map((a) => {
        const newLi = document.createElement("li");
        const textLi = document.createTextNode(`Name:${a.name} Count:${a.count}`);
        newLi.appendChild(textLi);
        list.appendChild(newLi);
        let newButton = document.createElement("button")
        newButton.innerHTML = "rent"
        newButton.id = a.name
        list.appendChild(newButton)
        let rent = document.getElementById(a.name);
        rent.addEventListener("click", () => {
            a.count -= 1
            newLi.innerHTML = `Name:${a.name} Count:${a.count}`
        })
    })
}


let names=[]
for (let i = 0; i < LStorage.length; i++) {
    names.push(LStorage[i].name);
}

let addFunc = () => {
    if (names.includes(name.value)) {
        for (let i = 0; i < names.length; i++) {

            
        }
    }else{
    let newLi = document.createElement("li")
    let newButton = document.createElement("button")
    newButton.innerHTML = "rent"
    newButton.id = "rent"
    let textLi = document.createTextNode(`Name:${name.value} Count:${count.value}`)
    newLi.appendChild(textLi)
    list.appendChild(newLi)
    list.appendChild(newButton)
    liArr.push({
        name: name.value,
        count: count.value,
    })
    localStorage.setItem("cars", JSON.stringify(liArr))
}
}

if (LStorage !== null) {
    liArr = [...LStorage]
    listing()
}

add.addEventListener("click", addFunc)