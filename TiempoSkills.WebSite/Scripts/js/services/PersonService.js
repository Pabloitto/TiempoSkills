(function(){
    var PersonService = function ($http){
            var service = {};

            service.getPersons = function (callback) {
                $http.get('Persons/GetPersons/').success(function (responseData) {
                    callback(responseData.map(function (item) {
                        return {
                            id: item.Id,
                            name: item.Name,
                            lastname: item.LastName,
                            email: item.Email,
                            personSkills: item.PersonSkills.map(function (skill) {
                                return {
                                    name: skill.Name,
                                    level: skill.Level
                                };
                            })
                        };
                    }));
                });
                
            }

            service.getPerson = function (id, callback) {
                $http.get('Persons/GetPerson?id=' + id).success(function (responseData) {
                    callback({
                        id: responseData.Id,
                        name: responseData.Name,
                        lastname: responseData.LastName,
                        email: responseData.Email,
                        personSkills: responseData.PersonSkills.map(function (skill) {
                            return {
                                name: skill.Name,
                                level: skill.Level
                            };
                        })
                    });
                });
            }

            service.savePerson = function (person, callback){
                $http.post('Persons/SavePerson/', person).success(function (responseData) {
                    callback(responseData);
                });
                
            }

            return service;
    }

    TiempoSkills.factory('personService',['$http', PersonService ]);
}());