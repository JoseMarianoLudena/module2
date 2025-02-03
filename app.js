(function () {
    'use strict';

    angular.module('ShoppingListCheckOff', [])
        .controller('ToBuyController', ToBuyController)
        .controller('AlreadyBoughtController', AlreadyBoughtController)
        .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

    ToBuyController.$inject = ['ShoppingListCheckOffService'];
    function ToBuyController(ShoppingListCheckOffService) {
        var toBuy = this;
        toBuy.items = ShoppingListCheckOffService.getToBuyItems();

        toBuy.buyItem = function (index) {
            ShoppingListCheckOffService.buyItem(index);
        };
    }

    AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
    function AlreadyBoughtController(ShoppingListCheckOffService) {
        var bought = this;
        bought.items = ShoppingListCheckOffService.getBoughtItems();

        bought.unbuyItem = function (index) {
           ShoppingListCheckOffService.unbuyItem(index);
       };
    }

    function ShoppingListCheckOffService() {
        var service = this;

        var toBuyItems = [
            { name: "Apples", quantity: 5 },
            { name: "Bananas", quantity: 3 },
            { name: "Carrots", quantity: 4 },
            { name: "Detergent", quantity: 1 },
            { name: "Eggs", quantity: 12 }
        ];

        var boughtItems = [];

        service.getToBuyItems = function () {
            return toBuyItems;
        };

        service.getBoughtItems = function () {
            return boughtItems;
        };

        service.buyItem = function (index) {
            var item = toBuyItems.splice(index, 1)[0];
            boughtItems.push(item);
        };
        service.unbuyItem = function (index) {
          var item = boughtItems.splice(index, 1)[0];
          toBuyItems.push(item);
        };
    }

})();
