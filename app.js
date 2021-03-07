(function(){
'use strict';
    /*angular.module('myFirstApp',[])
    .controller('MyFirstController',function($scope){
        $scope.name="Nam";
        $scope.sayHello=function(){
            return "Hello Coursera";
        };
    });*/
    angular.module('NameCalculator',[])
    .controller('NameCalculatorController',function($scope){

    $scope.displayNumeric=function(){
        var totalNameValue=0; //get the total value
        $scope.totalValue=totalNameValue;
    }

    function calculateNumericForString (string){
        
    }

    });
    

})();