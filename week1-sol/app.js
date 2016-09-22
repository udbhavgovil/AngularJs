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
			var items = $scope.Items.split(separtor);
			//console.log(items.length);
			//console.log('okay')
			if ($scope.Items.length==0)
				$scope.message = "Enter lunch items first!";
			else if (items.length<=3)
				$scope.message = "Enjoy!";
			else
				$scope.message = "Too Much!";
		};
	}
	//console.log("ok");
})();

