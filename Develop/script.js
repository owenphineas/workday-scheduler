// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //

  let container = $(".container-fluid");

  let currentHour = dayjs().hour();
  console.log(currentHour);

  // Changes each hour's class to reflect its relation to the current time
  function highlightHour() {
    for(i = 0; i < 23; i++) {
      container.children().eq(currentHour - 6).addClass("present");
      if(i < currentHour - 6) {
        container.children().eq(i).addClass("past");
      } else if(i > currentHour - 6) {
        container.children().eq(i).addClass("future");
      }
    }
  }
  highlightHour();

  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?

  // Displays the current date in the header of the page.
  let today = dayjs();
  $("#currentDay").text(today.format("dddd, MMMM D, YYYY"));
});
