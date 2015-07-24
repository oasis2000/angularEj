/**
 * Created by alumno on 10/07/2015.
 */
var app = angular.module('miApp',['ngRoute']);

app.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.
            when('/', {
                templateUrl: 'pagina.html',
                controller: 'miCtrl'
            }).
            when('/pagina2', {
                templateUrl: 'pagina2.html'
            }).
            otherwise({
                redirectTo: '/'
            });
    }]);
app.controller('miCtrl',function($scope){
    $scope.miNombre="Bea";
})