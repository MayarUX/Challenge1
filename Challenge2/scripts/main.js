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

//Animation

var changingThemes = document.getElementById('getTime');


function changeTheme(theme){
//    document.html.style.backgroundImage = "url(" + theme + ")";
//    document.getElementById('clockBackground').style.backgroundImage = theme;
}


document.getElementById('theme1').onclick = function(){
	document.getElementsByTagName('html').style.backgroundImage = url("../images/pexels-miriam-espacio-110854.jpg");
    
};

document.getElementById('clockBackground').onclick = function(){
	document.getElementsByTagName('clockBackground').style.backgroundColor = "red";
    
};



