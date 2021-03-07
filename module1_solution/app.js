(function () {
    'use strict';
    
    angular.module('LunchCheck', [])
    .controller('LunchCheckController', LunchCheckController );

    LunchCheckController.$inject=['$scope'];
    function LunchCheckController($scope){
        $scope.status="";
        $scope.dishesList="";
        $scope.numberDish=-1;
        $scope.findStatus = function () {
            var numDishes= findNoDishes($scope.dishesList);
            $scope.numberDish=numDishes;
            var temp="";
            if(numDishes==0){
                temp="Please enter data first";
            }else if (numDishes<4){
                temp="Enjoy!";
            }else if(numDishes>3){
                temp="Too Much!";
            }
            $scope.status=temp;
        };
        function findNoDishes(string){
            var numDishes =string.split(',');
            var temp=numDishes.length;
            if(string.length==0){
                temp=0;
            }
            return temp;
        }
    }
    

    
    })();