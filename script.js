var array = ["", "", "", "", "", "", "", "", ""];

$(document).ready(function () {

  //for header tag
	var date = moment().format("dddd, MMMM Do");
	//for highlighting functionality
	var time = moment().format("HH");
	
	//inits planner
  loadEvents();
  highlighter();

  $("#currentDay").text(date);

  function highlighter() {

    $(".container .row").each(function () {
			var hour = $(this).children().first().attr("data-time");
			var block = $(this).children().next(".description");
			
      if (time == hour) {
				block.addClass("present");
			} else if (time < hour) {
				block.addClass("future");
			} else {
				block.addClass("past");
			}
    })
  }

  function saveEvent() {
    localStorage.setItem("events", JSON.stringify(array));
	}

  function loadEvents() {
		if (localStorage.length === 0) {
			//Error handling; don't attempt JSON parsing if localStorage is empty
			console.log("events = null")
    } else {
			//Proceed with parsing and loading events
      var storedEvents = JSON.parse(localStorage.getItem("events"));
     
      //Loop through all rows within main container div
      $(".container .row").each(function () {
        $(this).find(".description").text(storedEvents[$(this).attr("data-index")]);
      });

      //returns storedEvents to array to be used outside of function
      array = storedEvents;
    }
  }

  $(".container .row").on("click", function (event) {
		event.preventDefault();
		highlighter();
    var element = event.target;

    //only take action if a button is pressed
    if (element.matches("button") === true) {
      array[element.parentElement.getAttribute("data-index")] = $(element).siblings(".description").val();
      saveEvent();
    }
  });
});