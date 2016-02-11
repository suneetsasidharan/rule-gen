angular.module('app', ['ngResource', 'ngRoute']);

angular.module('app').config(function($routeProvider, $locationProvider){
    $locationProvider.html5Mode({enabled: true, requireBase: false});
    $routeProvider
        .when('/', {templateUrl: '/partials/main', controller: 'mainCtrl'})
});

var x2js = new X2JS();
var jsonObj = {
    MyRoot : {
        test: 'Success',
        test2: {
            item: ['v1', 'v2']
        }
    }
};

var xmlConv = x2js.json2xml(jsonObj);
console.log(xmlConv);

angular.module('app').controller('mainCtrl', function($scope){
    $scope.myVar = "Hello Angular";
});