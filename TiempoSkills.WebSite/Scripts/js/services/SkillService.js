(function(){
	var SkillService = function ($http){
	    var service = {};

	    service.getSkills = function (callback) {
	        $http.get('Skills/GetSkills/').success(function (responseData) {
	            callback(responseData.map(function (item) {
	                return {
	                    name: item.Name,
	                    level: item.Level
	                };
	            }));
	        });
	    }

	    return service;
	}

	TiempoSkills.factory('skillService',['$http', SkillService ]);
}());