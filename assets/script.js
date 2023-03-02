var options = {
    startHour: 9,
    endHour: 17,
}

generateSchedule();

function updateSchedule() {
    var currentHour = moment().hour();

    $('.time-slot').each(
        function (index, element) {
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
    console.log(hour + " : " + task)

    console.log("saved")
}

function generateSchedule() {
    var container = document.getElementById("container");
	var day = document.getElementById("currentDay");
	day.innerText = new Date().toDateString();
}

function time_convert(time){
	if (time<12){
		return time+" AM"
	}
	else if (time==12){
		return time +" PM"
	}
	else {
		time-=12;
		return time+" PM"
	}
}