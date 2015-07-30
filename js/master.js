var isDone = false;
var t = 1;
var m = 25, s = 0; // minute and second
// status:
var PREPARE_TO_WORK = 0;
var PREPARE_TO_BREAK = 1;
var ON_WORK = 2;
var ON_BREAK = 3;
var status = PREPARE_TO_WORK;
var t; // timer

function toggle() {
    if (status == PREPARE_TO_WORK) {
        document.getElementById("toggle_button").innerHTML = 'STOP';
        m = 0;
        s = 5;
        status = ON_WORK;
        countDown();
    }
    else if (status == PREPARE_TO_BREAK) {
        document.getElementById("toggle_button").innerHTML = 'STOP';
        m = 0;
        s = 2;
        status = ON_BREAK;
        countDown();
    }
    else if (status == ON_WORK) {
        document.getElementById("toggle_button").innerHTML = 'BREAK';
        status = PREPARE_TO_BREAK;
        stopCount();
    }
    else if (status == ON_BREAK) {
        document.getElementById("toggle_button").innerHTML = 'WORK';
        status = PREPARE_TO_WORK;
        stopCount();
    }
}

function countDown() {
    if (s > 0 || m > 0) {
        if (s > 0) {
            s--;
        }
        else {
            s = 59;
            m--;
        }
        document.getElementById("time").innerHTML = m + ":" + s;
        document.title = m + ":" + s + " - PDO";
        t = setTimeout("countDown()", 1000);
    }

    // timeout
    else {
        toggle();
        document.getElementById("alarm").play();
    }
}

function stopCount() {
    m = 0;
    s = 0;
    document.getElementById("time").innerHTML = m + ":" + s;
    document.title = m + ":" + s + " - PDO";

    clearTimeout(t);
}
