(function(){
	var PersonListController = function($scope, $location, personService) {

	    $scope.persons = [];

	    
	    $scope.viewProfile = function (id) {
	        $location.path("/profile/" + id);
	    }

	    personService.getPersons(function(data) {
	        $scope.persons = data || [];
	    });
	}

	TiempoSkills.controller('PersonListController', ['$scope', '$location', 'personService', PersonListController]);
}());