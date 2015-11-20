(function(){

    var PersonDetailController = function($scope, $http, $routeParams, $location, $modal, personService, skillService){

        $scope.isCollapsed = true;

        $scope.person = {};
        $scope.personChanges = {
            personSkills : []
        };
        var isNew = true;

        $scope.availableSkills = [];

        function onSkillsLoaded(data){
            $scope.availableSkills = data;
        }

        function onPersonLoaded(data, status, headers, config){
            angular.extend($scope.personChanges, data);
        }

        $scope.onSkillSelected = function (model){
            model.level = 1;
            $scope.skillSelector = '';
            $scope.personChanges.personSkills.push(model);
        };

        function redirectToList(){
            $location.path("/list")
        }

        $scope.editSkill = function(personSkill){

            var modalInstance = $modal.open({
                templateUrl: 'editSkillModal.html',
                controller: 'SkillEditModalController',
                resolve: {
                    personSkill: function(){
                        return personSkill;
                    },
                    modalInstance: function(){
                        return modalInstance;
                    }
                }
            });
            // on close do something?
            modalInstance.result.then(function (personSkill) {
            });
        };

        $scope.save = function(){
            angular.extend($scope.person, $scope.personChanges);
            personService.savePerson($scope.person, redirectToList);
        }

        if($routeParams.id){
            isNew = false;
            personService.getPerson($routeParams.id, onPersonLoaded);
        }

        skillService.getSkills(onSkillsLoaded);
    }

    TiempoSkills.controller('PersonDetailController',
        ['$scope', '$http', '$routeParams', '$location', '$modal', 'personService', 'skillService', PersonDetailController]);


}());