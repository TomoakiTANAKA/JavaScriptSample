"use strict"

var timerId = NaN;
var count = 0;

function startTimer() {
    // ID指定されている要素を取り出す場合
    // count = document.getElementById("text_id").value;
    // （参考）名前を指定して取り出す場合
    count = document.forms["form_name"].elements["text_name"].value;
    clearInterval(timerId);
    timerId = setInterval(tick, 1000);
}

function stopTimer() {
    clearInterval(timerId);
}

function tick() {
    count--;
    document.getElementById("counter").textContent = count;
}
