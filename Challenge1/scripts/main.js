//Selecting an item from the food or water inventory
var item;
var food = 25;
var water = 50;
function itemSelection (item){
    var inventoryElements = document.getElementById('foodInventory').children;
    for(var i = 0; i < inventoryElements.length; i++){
        inventoryElements[i].className = 'fullOpacity';
    }
    item.className = 'changeOpacity';
    
    food = food-1;
    document.getElementById('foodIndicator').innerHTML = '<p>' + 'Food: ' + food + '</p>';
}

//function itemSelection (item){
//    var inventoryElements = document.getElementById('waterInventory').children;
//    for(var i = 0; i < inventoryElements.length; i++){
//        inventoryElements[i].className = 'fullOpacity';
//    }
//    item.className = 'changeOpacity';
//    
//    food = food-1;
//    document.getElementById('waterIndicator').innerHTML = '<p>' + 'Water: ' + water + '</p>';
//}


//Converting Miles
function marsMilesConverter (miles) {
     document.getElementById('marsMiles').value = miles*14000000;

}
function earthMilesConverter (miles) {
     document.getElementById('earthMiles').value = miles/14000000;

}



