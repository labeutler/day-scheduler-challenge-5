// Reference of DOM elements


// display day and date
var weekDay = moment().format("dddd, MMMM Do");
$("#current").text(weekDay);

//______________________________________
//add event listener to save buttons
var buttons = document.querySelectorAll(".fa-save")
for(var i=0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", saveNote)
}
function saveNote(event){
    console.log(event)
    var input = event.target.attributes[0].value
    var inputValue = document.querySelector("."+ input).value
    console.log(inputValue)
    localStorage.setItem(input, inputValue)
}
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

