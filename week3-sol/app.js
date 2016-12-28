(function(){
	'use-strict';
	angular.module('NarrowItDownApp',[])
	.controller('NarrowItDownController',NarrowItDownController)
	.service('MenuSearchService',MenuSearchService)
	.directive('foundItems',FoundItems)
	;
	function FoundItems(){
		var ddo = {
			templateUrl : 'found.html',
			scope: {
		        found: '<',
		        onRemove: '&',
		        msg: '@error'
		     },
			controller : FoundItemsDirective,
			controllerAs : 'fid',
			bindToController :  true
		};
		
		return ddo;
	}
	FoundItemsDirective.$inject = ['MenuSearchService'];
	function FoundItemsDirective (MenuSearchService)
	{
		var fid = this;
		fid.isEmpty = function() {
      return fid.found != undefined && fid.found.length === 0;
    }

	}
	function NarrowItDownController(MenuSearchService)
	{
		var crt = this;
		crt.foundItems = [];
		crt.value = "";
		crt.error = "";
		crt.narrowit = function (value) {
	
			var found = MenuSearchService.getMatchedMenusItems(value);
				found.then(function (response)
				{
					crt.foundItems = response;
					if (crt.foundItems.length > 0)
					crt.error = "";			
					if (crt.foundItems.length === 0 || crt.foundItems === undefined || value === "")
					{
						crt.error = "Nothing Found!";
						crt.foundItems = [];
					}

				})};
		crt.remove = function (value)
		{
			console.log(value);
			crt.foundItems.splice(value,1);
		}
		
	}
	console.log("ok");
	MenuSearchService.$inject = ['$http']
	function MenuSearchService ($http)
	{
		var service = this;

		service.getMatchedMenusItems = function (value) {
			return $http({
				url: ' https://davids-restaurant.herokuapp.com/menu_items.json'
				}
			).then(function(response){

					
				
				var foundItems = [];
				//console.log(response.data.menu_items);
				var obj = response.data.menu_items;
				 angular.forEach(obj,
				 	function(obj){
				 		//console.log(value);
					if (obj.description.search(value) > -1)
					{
						//console.log(obj.description);
						this.push(obj);
							
					}

										 	
				 },foundItems);
				/*if (foundItems.length === 0)
					return undefined;*/
			return foundItems;
			});
			
		};
	}
 



}());

