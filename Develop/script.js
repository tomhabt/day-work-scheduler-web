
// Current time 
var currentTime = moment().hour();

// Header section current date and time notification AutoUpdate
$("#currentDay").text(moment().format('dddd, MMMM Do'));

// Button Event Listener for saving tasks or todo
$('.saveBtn').click(function() {
  
    var taskTime = $(this).parent().attr('id');
    var taskText = $(this).siblings('.task').val();
    
    localStorage.setItem(taskTime, taskText)
})

const timeAudit = () => {
    
    $('.time-block').each(function() {
    
        var timeBlock = parseInt($(this).attr('id').split('-')[1]);
        // var timeBlock = $(this).attr('id').split('-');
        console.log(timeBlock);
        // console.log(currentTime);

        if (timeBlock < currentTime) {
            $(this).addClass("past");

            
        } else if (timeBlock === currentTime) {
            $(this).addClass("present");
        } else {
            $(this).addClass("future")
        }
    })     
};
// call the function here
// timeAudit();
setInterval(timeAudit, 9000)
//  Local storage recall
$('#time-9 .task').val(localStorage.getItem('time-9'));
$('#time-10 .task').val(localStorage.getItem('time-10'));
$('#time-11 .task').val(localStorage.getItem('time-11'));
$('#time-12 .task').val(localStorage.getItem('time-12'));
$('#time-13 .task').val(localStorage.getItem('time-13'));
$('#time-14 .task').val(localStorage.getItem('time-14'));
$('#time-15 .task').val(localStorage.getItem('time-15'));
$('#time-16 .task').val(localStorage.getItem('time-16'));
$('#time-17 .task').val(localStorage.getItem('time-17'));

timeAudit();