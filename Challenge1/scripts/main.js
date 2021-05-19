//Slecting an item from the food or water inventory
var item;
function itemSelection (item){
    var inventoryElements = document.getElementById('foodInventory').children;
    for(var i = 0; i < inventoryElements.length; i++){
        inventoryElements[i].className = 'fullOpacity';
    }
    item.className = 'changeOpacity';
    var food = 25;
    food = food-1;
    document.getElementById('foodIndicator').innerHTML = '<p>' + 'Food: ' + food + '</p>';

    //    for (var food = 25; food >= 0; food--){
    //        var changeFoodIndicator = document.getElementById('foodIndicator').innerHTML = '<p>' + 'Food: ' + food + '</p>';
    //    } //make it decrease step by step

    //var changeFoodIndicator = document.getElementById('foodIndicator').innerHTML('Food:'+)
}


function marsMilesConverter (miles) {
     document.getElementById('marsMiles').value = miles*14000000;

}
function earthMilesConverter (miles) {
     document.getElementById('earthMiles').value = miles/14000000;

}



//        var changeFoodIndicator = document.getElementById('foodIndicator').innerHTML = '<p>' + 'Food: ' + food + '</p>';

//////
//var itemSelection = function(){
//   var item = document.getElementsByClassName('inventoryItem');
//    item.onclick = function(){alert('Hello');};
////    item.onclick
//};
//var i = 0;
//var item = document.getElementsByClassName('inventoryItem');
//    item.onclick = function(this){
//        item.style.opacity = '50%';
//};

//////

//var i = 0;
//var item = document.getElementsByClassName("inventoryItem");
//
//for(i = 0; i < item.length; i++){
//    item.onclick = function(){
//        item[i].style.opacity = '50%';
//    };
//}
//var i = 0;
//
//
//for(i = 0; i < item.length; i++){
//var item = document.getElementsByClassName("inventoryItem")[i];
//}
//    item.onclick = function(){
//        item[i].style.opacity = '50%';
//    };