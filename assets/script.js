var options = {
    startHour: 9,
    endHour: 17,
}

function updateSchedule() {
    var currentHour = moment().hour();
    
    $('.time-block').each(function (index, element) {

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

}