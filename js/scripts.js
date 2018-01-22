//back-end logic

function task(task, description, startDate, endDate) {
  this.task = task;
  this.description = description;
  this.startDate = startDate;
  this.endDate = endDate;
}

//front-end logic

$(document).ready(function() {
$("form#new-task").submit(function(event) {
  event.preventDefault();

  var inputtedTask = $("input#task").val();
  var inputtedDescription = $("input#description").val();
  var inputtedStartDate = $("input#startDate").val();
  var inputtedEndDate = $("input#endDate").val();

  var newTask = new task(inputtedTask, inputtedDescription, inputtedStartDate, inputtedEndDate);

  $("ul#tasks").append("<li><span class = 'display'>" + newTask.task + "</span></li>");

  $(".display").last().click(function() {
    $("#show-task").show();
    $("#show-task h2").text(newTask.task);
    $(".task").text(newTask.task);
    $(".description").text(newTask.description);
    $(".startDate").text(newTask.startDate);
    $(".endDate").text(newTask.endDate);
  });

  $("input#task").val("");
  $("input#description").val("");
  $("input#startDate").val("");
  $("input#endDate").val("");

  });
});
