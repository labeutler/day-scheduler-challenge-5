// Reference of DOM elements


// DISPLAY DAY AND DATE
var weekDay = moment().format("dddd, MMMM Do");
$("#current").text(weekDay);

//ADD EVENT LISTENER TO SAVE BUTTONS
var buttons = document.querySelectorAll(".fa-save")
for(var i=0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", saveNote)
}
// ALLOW FOR TEXT TO BE SAVED TO LOCAL STORAGE FROM DAILY CALENDAR WITH SETITEM
function saveNote(event){
    console.log(event)
    var input = event.target.attributes[0].value
    var inputValue = document.querySelector("."+ input).value
    console.log(inputValue)
    localStorage.setItem(input, inputValue)
}
//RETRIEVING INFORMATION FROM LOCAL STORAGE WITH GETITEM, CONNECTING HOURS WITH CURRENT TIME FOR PAST, PRESENT AND FUTURE.
for(var i=9; i < 18; i++){
    document.querySelector(".text"+ i).value = localStorage.getItem("text"+ i)
    var timeBlock=document.querySelector(".text"+ i)
    var currentHour=moment().format("HH")
    console.log(timeBlock)
    console.log(currentHour)
    if(i < currentHour) {
        timeBlock.classList.add("past")
    } else if (i== currentHour) {
        timeBlock.classList.add("present")
    } else {
        timeBlock.classList.add("future")
    }
}

