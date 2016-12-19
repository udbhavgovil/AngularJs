(function () {
	'use strict';
angular.module('ToBuyList',[])
	.controller('ToBuyController',ToBuyController)
	.controller('AlreadyBoughtController',AlreadyBoughtController)
	.service('ShoppingListCheckOffService',ShoppingListCheckOffService);
	ToBuyController.$inject = ['ShoppingListCheckOffService'] ;
	AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];

	function AlreadyBoughtController(ShoppingListCheckOffService) {
		var crt2 = this;
		console.log('bought',ShoppingListCheckOffService.getBoughtList());
		crt2.BoughtList = ShoppingListCheckOffService.getBoughtList();

	}
	function ToBuyController(ShoppingListCheckOffService) {
		var crt1 = this;
		
		crt1.List = ShoppingListCheckOffService.getList();
		crt1.remove = function (value) {
			ShoppingListCheckOffService.remove(value);
			crt1.List = ShoppingListCheckOffService.getList();
			console.log('list',ShoppingListCheckOffService.getList());
			console.log('bought',ShoppingListCheckOffService.getBoughtList());
		}
		

	}
	function ShoppingListCheckOffService() {
	var service = this;
	var List = [{name:'Milk1', quantity:4},{name:'Bread', quantity:1},{name:'Eggs', quantity:6},{name:'Chocos', quantity:2},{name:'Pie', quantity:2},{name:'Cookies', quantity:10}]
	var BoughtList = [];
	var message1 = 	"";
	var message2 =  "Nothing bought yet";
	service.getList = function () {
		return List;
	};
	//console.log(service.getList);
	service.getBoughtList = function (){
		return BoughtList;
	};
	
	service.remove = function (value){
			BoughtList.push(value) ;
			List = List.filter(function (value1){ return value1.name !== value.name  });
		};	
	}
	
	

	

})();

