function iLove(panda, tendance) {
	if(tendance === "amour") {
		alert("J'aime les pandas" + " " + panda);
	} else if (tendance === "haine") {
		alert("Je n'aime pas les" + " " + panda + " "+ "c\'est pour ça que je n\'ouvre jamais la console");
	} else {
		alert ("what ?!?");
	}
}

$(".panda").click(function() {
	var pandaType = $(this).data('type');
	var tendance = $(this).data('tendance');
	console.log(pandaType);
	iLove(pandaType, tendance);
});
