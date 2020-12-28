



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

