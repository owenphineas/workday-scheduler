$(function () {

  let container = $(".container-fluid");

  // Adds an event listener for each save button
  function saveText() {
  for(i = 0; i < 16; i++) {
    let btn = $(container.children().eq(i).children().eq(2));
    btn.on("click", function() {
      console.log(btn.prev().val());
      // Checks the value of the clicked save button's corresponding text field and saves the contents in localStorage
      localStorage.setItem(JSON.stringify(btn.parent().attr("id")), btn.prev().val());
    })
  };
  }
  saveText();


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
