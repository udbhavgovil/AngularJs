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
			if (items.length<=3)
				$scope.message = "Enjoy!";
			else
				$scope.message = "Too Much!";
		};
	}
	//console.log("ok");
})();

