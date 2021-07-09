//Digital Clock
function earthTime(){
    var today = new Date();
    var sec = today.getSeconds();
    var min = today.getMinutes();
    var hour = today.getHours();
    hour = updateTime(hour);
    min = updateTime(min);
    sec = updateTime(sec);

    document.getElementById('getTime').innerHTML = hour + " : " + min + " : " + sec;
    var increaseTime = setTimeout(function(){earthTime()}, 1000);
}

function updateTime(i) {
    if (i < 10) {
        return "0" + i;
    }
    else {
        return i;
    }
}
earthTime();




