var options = {
	startHour: 9,
	endHour: 17,
}

generateSchedule();

function updateSchedule() {
	var currentHour = moment().hour();
	//var currentHour = new Date().getHours();

	$('.time-slot').each(
		function (index, element) {
			var hour = $(element).attr('data-hour');

			if (hour < currentHour) {
				$(element).find('.description').addClass('past');
			} else if (hour == currentHour) {
				$(element).find('.description').addClass('present');
			} else {
				$(element).find('.description').addClass('future');
			}
		});

}

function saveTask(e) {
	var hour = $(e.target).parent().parent().attr("data-hour");
	var task = $(e.target).parent().prev().val();

	localStorage.setItem(hour, task);
	console.log(hour + " : " + task)

	console.log("saved")
}

function generateSchedule() {
	var container = document.getElementById("container");
	var day = document.getElementById("currentDay");
	day.innerText = new Date().toDateString();

	for (let i = options.startHour; i <= options.endHour; i++) {

		var block = document.createElement("DIV");
		block.classList.add("time-slot");
		block.setAttribute('data-hour',i);

		var row = document.createElement("DIV");
		row.innerText=time_convert(i);
		row.classList.add('hour');

		var text = document.createElement("TEXTAREA");
		var data = localStorage.getItem(i);
		if (data) {
			console.log(data)
			text.innerText=data;
		}

		text.classList.add('description');

		var btn = document.createElement("BUTTON");
		btn.innerHTML='<i class="fa fa-save"></i>';
		btn.classList.add('saveBtn');

		block.appendChild(row);
		block.appendChild(text);
		block.appendChild(btn);

		btn.addEventListener('click',saveTask);

		container.append(block);
	}


	updateSchedule();
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