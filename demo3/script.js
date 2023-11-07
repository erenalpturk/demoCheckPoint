let input = document.getElementById("input")
let button = document.getElementById("button")
let list = document.getElementById("list")
let alert = document.getElementById("alert")


let addFunc = () => {
    const newLi = document.createElement("li")
    const newLiText = document.createTextNode(input.value)
    if (input.value == "") {
        alert.style.display = "block"
    } else {
        newLi.appendChild(newLiText);
        list.appendChild(newLi)
        input.value = ""
        console.log(alert.style.display="none")
    }

}


button.addEventListener("click", addFunc)