function tellFortunes(){
    'use strict';
    
    var fortunes =
        ["大吉", "中吉", "小吉", "吉", "半吉", "末吉", "末小吉", "凶", "小凶", "半凶", "末凶", "大凶"]
    
    var rand_index = Math.floor( Math.random() * fortunes.length ) ;
    
    var span = document.getElementById("fortune");
    span.innerHTML = fortunes[rand_index];
}