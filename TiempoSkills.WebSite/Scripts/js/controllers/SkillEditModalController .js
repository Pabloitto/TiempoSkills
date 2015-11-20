(function(){

	var SkillEditModalController = function($scope, personSkill, $modalInstance){

	    $scope.personSkill = personSkill;

	    $scope.setLevel = function(level){
	        $scope.personSkill.level = level;
	        $modalInstance.close();
	    };

	}

	TiempoSkills.controller('SkillEditModalController', ['$scope','personSkill', '$modalInstance', SkillEditModalController]);
}());