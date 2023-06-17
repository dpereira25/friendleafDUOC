function startTime() {
    var hoy = new Date();
    var hr = hoy.getHours();
    var min = hoy.getMinutes();
    var seg = hoy.getSeconds();
    min = checkTime(min);
    sec = checkTime(seg);
    document.getElementById("clock").innerHTML = hr + " : " + min + " : " + seg;
    var time = setTimeout(function(){ startTime() }, 500);
}
function checkTime(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}