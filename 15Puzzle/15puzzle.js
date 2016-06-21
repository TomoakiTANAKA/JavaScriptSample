
"use strict"

var tiles = [];
var row = 5;
var column = 5;
var data = row * column;

function init(){
    var table = document.getElementById("table")
    
    for( var i = 0; i < row ; i++)
    {
        // tr = table row を4つ作成する
        var tr = document.createElement("tr");
        
        // table data を 4つ作成する
        for(var j = 0; j < column ; j++){
            // td = table data
            // table data要素にデータを込めていく
            var td = document.createElement("td");
            var index = i * row + j;
            td.className = "tile"
            td.index = index;
            td.value = index;
            td.textContent = index == 0 ? "" : index;
            td.onclick = click;
            tr.appendChild(td);
            tiles.push(td);
        }
        table.appendChild(tr);
    }
    
    for (var i = 0; i < 1000; i++) {
        //click({ srcElement: {index: Math.floor(Math.random() * data )}})
    }
}

/*
クリックした時の挙動を規定する
 */
function click(e){
    // クリックしたボタンの位置
    var i = e.srcElement.index;
    
    // 入力したところを起点として，上下左右にからのますがあるかどうかを調査する
    
    // value == 0 っていうのが，空の四角か
    if (i - column >= 0 && tiles[i-column].value == 0) {
        // 上
        swap(i, i - column);
    } else if(i + column < data && tiles[i + column].value == 0) {
        // 下
        swap(i, i + 5);
    } else if ( i % 5 != 0 && tiles[i -1].value == 0) {
        // 左 = (0, 4, 8, 12)　なので，割り切れないというのは右にデータがあるってこと
        swap(i, i - 1);
    } else if ( i % 5 != 3 && tiles[i + 1].value == 0) {
        // 右 = 左の考えか後同じ
        swap(i, i + 1);
    }
    
    // 完了したかどうかを判定して画面にだす
    if(is_complete()){
        alert("クリア");
    }
}

function swap(i, j)
{
    var tmp = tiles[i].value;
    
    tiles[i].textContent = tiles[j].textContent;
    tiles[i].value = tiles[j].value;
    
    tiles[j].textContent = tmp;
    tiles[j].value = tmp;
}

function is_complete(){
    for (var i = 0; i < 25; i++) {
        if( tiles[i].textContent != i )
        {
            return false;
        }
    }
    
    return true;
}