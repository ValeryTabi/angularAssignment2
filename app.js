(function() {
  'use strict';

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController( ShoppingListCheckOffService) {

  var list1 = this;


   list1.items = ShoppingListCheckOffService.getItems();

   list1.removeItem = function (itemIndex) {
     ShoppingListCheckOffService.removeItem(itemIndex);
   };

}

AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService) {
    var list2 = this;

    list2.items = ShoppingListCheckOffService.getboughtItems();


}




//
function ShoppingListCheckOffService() {
  var service = this;

  // List of shopping items
  var items = [{ name: "tins of chocolate", quantity: 12 }, { name: "bottles of cokacola", quantity: 10 }, { name: "packets of pizza", quantity: 5 }, { name: "cartons of cookies", quantity: 1 }, { name: "Holy Bible", quantity: 2 }];

  var boughtItems = [];

  service.addItem = function (itemName, quantity) {
    var item = {
      name: itemName,
      quantity: quantity
    };
    items.push(item);
  };

  service.removeItem = function (itemIdex) {

    //var itm = items.slice(itemIdex, 1);  // what is returned by splice?
      var itm = items[itemIdex];
     console.log(itm);
  //  var m = itm.pop();
    var prd = {
      name:itm.name, quantity:itm.quantity
    };
  //  console.log(m);

     console.log(prd);

      boughtItems.push(prd);
      items.splice(itemIdex, 1);
  };

  service.getItems = function () {
    return items;
  };
  service.getboughtItems = function () {
    return boughtItems;
  };

}



}());
