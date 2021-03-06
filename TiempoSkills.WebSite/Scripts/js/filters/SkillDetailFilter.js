TiempoSkills.filter('SkillDetailFilter',['$sce', function($sce){

    var result = function(person){
        var output = '';
        angular.forEach(person.personSkills, function(personSkill) {
            var html;
            // LOW
            if(personSkill.level === 1){
                html = '<span class="label label-default">'+personSkill.name+'</span> ';
            }
            // MEDIUM
            if(personSkill.level === 2){
                html = '<span class="label label-primary">'+personSkill.name+'</span> ';
            }
            // HIGH
            if(personSkill.level === 3){
                html = '<span class="label label-success">'+personSkill.name+'</span> ';
            }
            output += html;
        });
        return $sce.trustAsHtml(output);
    };
    
    return result;
}]);