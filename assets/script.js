var options = {
    startHour: 9,
    endHour: 17,
}

function updateSchedule() {
    var currentHour = moment().hour();

    $('.time-slot').each(function (index, element) {

        var hour = $(element).attr('data-hour');

        if (hour< currentHour) {
            $(element).find('.description').addClass('past');
        }
        else if (hour == currentHour) {
            $(element).find('.description').addClass('present');
        }
        else {
            $(element).find('.description').addClass('future');
        }
    });

};

function saveTask(e) {

    var hour = $(e.target).parent().parent().attr("data-hour");
    var task = $(e.target).parent().prev().children().val();

    localStorage.setItem(hour,task);

    console.log("saved")
}

function generateSchedule() {
    
}