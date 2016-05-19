function convertTimesToSeminole(event) {
    var units = $("#units").get(0).value;
    var distance = parseInt($("#distance").get(0).value);
    var minutes = parseInt($("#minutes").get(0).value);
    var seconds = parseInt($("#seconds").get(0).value);
    var centi = parseInt($("#milliseconds").get(0).value);
    var multiplier;
    if (units === "Yards") {
        multiplier = 1.165;
    } else {
        multiplier = 1.065;
    }
    seconds = minutes * 60 + seconds + centi * .01;
    seconds *= multiplier;
    minutes = Math.trunc(seconds / 60);
    seconds -= minutes * 60;
    if (parseInt(distance) == 1) {
        units = units.slice(0, -1);
    }
    $("#resultCardTo .repeatDistance").html(distance.toString() + " " + units);
    if (minutes == 0) {
        $("#resultCardTo .result").html(seconds.toFixed(2) + " seconds");
    } else {
        $("#resultCardTo .result").html(minutes + " minutes and " + seconds.toFixed(2) + " seconds");
    }
    $("#resultCardTo").openModal();
    return false;
}

function convertTimesFromSeminole(event) {
    var units = $("#units").get(0).value;
    var distance = parseInt($("#distance").get(0).value);
    var minutes = parseInt($("#minutes").get(0).value);
    var seconds = parseInt($("#seconds").get(0).value);
    var centi = parseInt($("#milliseconds").get(0).value);
    var multiplier;
    if (units === "Yards") {
        multiplier = 1.165;
    } else {
        multiplier = 1.065;
    }
    seconds = minutes * 60 + seconds + centi * .01;
    seconds /= multiplier;
    minutes = Math.trunc(seconds / 60);
    seconds -= minutes * 60;
    if (parseInt(distance) == 1) {
        units = units.slice(0, -1);
    }
    $("#resultCardFrom .repeatDistance").html(distance.toString() + " " + units);
    if (minutes == 0) {
        $("#resultCardFrom .result").html(seconds.toFixed(2) + " seconds");
    } else {
        $("#resultCardFrom .result").html(minutes + " minutes and " + seconds.toFixed(2) + " seconds");
    }
    $("#resultCardFrom").openModal();
    return false;
}