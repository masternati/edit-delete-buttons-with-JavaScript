const maindiv = document.querySelector("#demo")

// div1 start
let main_input = document.createElement("div")
main_input.classList.add("inputtext")
maindiv.appendChild(main_input)

let input = document.createElement("input")
main_input.appendChild(input)

let add = document.createElement("button")
add.innerText = "add"
main_input.appendChild(add) //div1 close

//div2 start

const storeData = document.createElement("div")
storeData.classList.add("storedata")
maindiv.appendChild(storeData)
storeData.style.visibility = "hidden"

let inputdata = document.createElement("input")
inputdata.classList.add("inputdata")
inputdata.readOnly = true
storeData.appendChild(inputdata)

let edit = document.createElement("button")
storeData.appendChild(edit)
edit.innerText = "edit"
let Delete = document.createElement("button")
Delete.innerText = "delete"
storeData.appendChild(Delete)

add.addEventListener("click", () =>{
    if (input.value != "") {
        inputdata.value = input.value
        storeData.style.visibility = "visible"
        input.value = ""
    } else {
        alert("insert text first")
    }
})
edit.addEventListener("click", () =>{
    edit.innerText = "save"
    inputdata.readOnly = false
    // if (condition) {
        
    // } else {
        
    // }
})
Delete.addEventListener("click", () =>{
    maindiv.removeChild(storeData)
})