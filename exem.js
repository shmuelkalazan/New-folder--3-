let allPesrons = []
const table = document.querySelector("table")
const full_name = document.querySelector(".full_name")
const renk = document.querySelector(".renk")
const position = document.querySelector(".position")
const platoon = document.querySelector(".platoon")
const mission_time = document.querySelector(".mission_time")
const select = document.querySelector(".select_top_main")
const list_persons = document.querySelector("list_persons")

const add_person_button = document.querySelector(".add_person_button")
add_person_button.addEventListener("click",ToAddPerson)



let isSort = true
function DisplayAllPersons(){
    const allSoldiers =  loadPersons()
    // allSoldiers.sort((a, b) => a.full_name.localeCompare(b.full_name));
    // console.log(allSoldiers);  
    // alert(allSoldiers)  
    // if (isSort == true)
    // {
    //     allSoldiers.reverse()
    //     isSort = false
    // }
    // else{ isSort = true }   
    // persons.sort( compare );
    // savePerson(allSoldiers)
    // alert(allSoldiers)
    for(let soldier of allSoldiers) {   
        DisplayOnePerson(soldier)    
    } 
}

DisplayAllPersons()
function DisplayOnePerson(person){
    const tr = document.createElement("tr")
    const td_full_name = document.createElement("td")
    td_full_name.textContent = person.full_name
    const td_renk = document.createElement("td")
    td_renk.textContent = person.renk
    const td_position = document.createElement("td")
    td_position.textContent = person.position
    const td_platoon = document.createElement("td")
    td_platoon.textContent = person.platoon
    const td_select = document.createElement("td")
    td_select.textContent = person.select

    const action = document.createElement("td")

    const removeBut = document.createElement("button")
    removeBut.textContent = "remove"
    removeBut.setAttribute("class" ,"in_action_button")
    removeBut.addEventListener("click" ,()=>removePerson(person.id))

    const missionBut = document.createElement("button")
    missionBut.textContent = `${person.select} ,${person.id}`
    missionBut.setAttribute("class" ,"in_action_button")
    const editBut = document.createElement("button")
    editBut.textContent = "edit"
    editBut.setAttribute("class" ,"in_action_button")

    action.appendChild(removeBut)
    action.appendChild(missionBut)
    action.appendChild(editBut)
    action.setAttribute("class" ,"action_button")

    tr.appendChild(td_full_name)  
    tr.appendChild(td_renk)   
    tr.appendChild(td_position)   
    tr.appendChild(td_platoon)   
    tr.appendChild(td_select) 
    tr.appendChild(action)   
    table.append(tr)  
    tr.setAttribute("class" ,"one_person")
}

let ides = 1
function ToAddPerson()
{
    const obj = {
        id : ides ++ ,
        full_name : full_name.value || "null",
        renk : renk.value || "null",
        position : position.value || "null",
        platoon : platoon.value || "null",
        mission_time : mission_time.value || "null",
        select : select.value || "null"
    }
    addPerson(obj)
}


function loadPersons()
{
    const data = localStorage.getItem("allPesrons") || "[]"
    return JSON.parse(data)
}

function addPerson(person)
{
    let dataArr = loadPersons()
    dataArr.push(person)
    savePerson(dataArr)
    DisplayAllPersons()
    //location.reload();

}


function savePerson(arr)
{
    localStorage.setItem("allPesrons", JSON.stringify(arr))
}

function removePerson(id)
{
    let dataArr = loadPersons();
    dataArr = dataArr.filter(p => p.id != id)
    savePerson(dataArr)
    DisplayAllPersons()
    //location.reload();

}
// function refresh1(){
//     const refresh = document.querySelectorAll("td")
//     refresh.innerHTML =""
// }
// document.onload(refresh1)
