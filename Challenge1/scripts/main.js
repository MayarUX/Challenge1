//Selecting an item from the food or water inventory
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
}

//Converting Miles
function marsMilesConverter (miles) {
     document.getElementById('marsMiles').value = miles*14000000;

}
function earthMilesConverter (miles) {
     document.getElementById('earthMiles').value = miles/14000000;

}



