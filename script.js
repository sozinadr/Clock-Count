function displayTime() {
    var date = new Date();
    var hour = date.getHours(); // 0-23
    var min = date.getMinutes(); // 0-59
    var sec = date.getSeconds(); // 0-59
    var amOrPm = "AM";
    if (hour >= 12) {
        amOrPm = "PM";
    }
    if (hour > 12) {
        hour = hour - 12;
    }
    if (hour < 10) hour = "0" + hour;
    if (min < 10) min = "0" + min;
    if (sec < 10) sec = "0" + sec;
    document.getElementById("time").innerHTML =
        hour + ":" + min + ":" + sec + " " + amOrPm;
}
setInterval(displayTime, 1000);