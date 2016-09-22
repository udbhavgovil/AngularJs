(function () {
	'use strict';

angular.module('LunchCheck',[])
	.controller('LunchCheckController',LunchCheckController);

	LunchCheckController.$inject = ['$scope'] ;

	function LunchCheckController($scope) {

		$scope.Items = "" ;
		$scope.message = "" ;
		$scope.CountItem = function (){
			var separtor = ','
			if ($scope.Items.length==0)
				$scope.message = "Enter lucnh items first!";
			else {
			var items = $scope.Items.split(separtor);
			//console.log(items.length);
			//console.log('okay')
<<<<<<< HEAD
			if ($scope.Items.length==0)
				$scope.message = "Enter lunch items first!";
			else if (items.length<=3)
=======
			
			if (items.length<=3)
>>>>>>> cee3f9c53d9d02a0a73e3a5f5bfefa2e833db209
				$scope.message = "Enjoy!";
			else
				$scope.message = "Too Much!";
			}
		};
	}
	//console.log("ok");
})();



	function LunchCheckController($scope) {

		$scope.Items = "" ;
		$scope.message = "" ;
		$scope.CountItem = function (){
			var separtor = ','
			if ($scope.Items.length==0)
				$scope.message = "Enter lucnh items first!";
			else {
			var items = $scope.Items.split(separtor);
			//console.log(items.length);
			//console.log('okay')
			
			if (items.length<=3)
				$scope.message = "Enjoy!";
			else
				$scope.message = "Too Much!";
			}
		};
	}
	//console.log("ok");
})();

