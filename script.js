var array = ["", "", "", "", "", "", "", "", ""];

$(document).ready(function () {

  loadEvents();

  //DEBUG
  var now = moment();
  // console.log(now);
  // console.log($("#currentDay"));
  
  var date = moment().format("dddd, MMMM Do");
  var time = moment().format("LT");
  console.log("Date: " + date);

  $("#currentDay").text(date + " " + time);

  function saveEvent() {
    localStorage.setItem("events", JSON.stringify(array));

    //DEBUG
    console.log("Events to save: " + array)
  }

  function loadEvents() {

    if (localStorage.length === 0) {
      //DEBUG
      console.log("events = null")
    } else {
      var storedEvents = JSON.parse(localStorage.getItem("events"));
      
      // DEBUG
      console.log("Events to load: " + storedEvents);

      //loop through all rows withing main container div
      $(".container .row").each(function () {
        $(this).find(".description").text(storedEvents[$(this).attr("data-index")]);
      });

      //returns storedEvents to array to be used outside of function
      array = storedEvents;
    }

  }

  $(".container .row").on("click", function (event) {
    event.preventDefault();
    var element = event.target;

    //only take action if a button is pressed
    if (element.matches("button") === true) {
      array[element.parentElement.getAttribute("data-index")] = $(element).siblings(".description").val();
      saveEvent();
    }
  });
});

// console.log("Element: " + element);
// console.log("Data-Index: " + element.parentElement.getAttribute("data-index"));


//Functions needed
//getTime() : gets current time
//compareTime(time slot) : compares time with time slot
//cellHighlighter() : highlight cells based on time
//saveToLocal() : on save button click save associated entry to local storage
//getFromLocal() : on load grab data from local storage


// User Story
// AS AN employee with a busy schedule
// I WANT to add important events to a daily planner
// SO THAT I can manage my time effectively

// Acceptance Criteria
// GIVEN I am using a daily planner to create a schedule
// WHEN I open the planner
// THEN the current day is displayed at the top of the calendar
//  Requires use of date/time api; research usage


// WHEN I scroll down
// THEN I am presented with time blocks for standard business hours
//  break each time slot into (time header, input field, and save button) nested within calendar
//  option A: each time slot has its own listener
//  option B: single listener for entire calendar and use ids to update data and ui


// WHEN I view the time blocks for that day
// THEN each time block is color-coded to indicate whether it is in the past, present, or future
//  cellHighlighter() function
//  compares each time slot with current time and provides the appropriate highlighting
//  relies heavily on how the date/time api works


// WHEN I click into a time block
// THEN I can enter an event
//  standard input field


// WHEN I click the save button for that time block
// THEN the text for that event is saved in local storage
//  standard button with additional save icon. 


// WHEN I refresh the page
// THEN the saved events persist
// save to localStorage
// JSON.stringify
// JSON.parse


//Unix timestamps for comparison
// 09:00 = 1609261200
// 10:00 = 1609264800
// 11:00 = 1609268400
// 12:00 = 1609272000
// 01:00 = 1609275600
// 02:00 = 1609279200
// 03:00 = 1609282800
// 04:00 = 1609286400
// 05:00 = 1609290000









