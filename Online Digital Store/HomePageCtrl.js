var myHome = angular.module("myHome", []);

//Service to get JSON Data
myHome.service('getDataService', function ($http) {
    this.getallproducts = function () {
        return $http.get('Products.json');
    }
});

//Directive for Tile View
//myHome.directive("tileView", function (getDataService) {
//    return {
//        restrict: 'C',
//        templateUrl: 'TileView.html',
//        link: function (scope, elem, attr) {
//            scope.products = getDataService.products;
//        }
//    }
//});


myHome.controller('HomePageCtrl', function ($scope, getDataService) {
    getDataService.getallproducts().then(function (resp) {
        $scope.products = resp.data;
        $scope.count = $scope.products.length;
    });


//Search Module
    $scope.search = function (item) {
        if ($scope.searchText == undefined) {
            return true;
        }
        else {
            if (item.name.toLowerCase()
                         .indexOf($scope.searchText.toLowerCase()) != -1 ||
                item.cost.toLowerCase()
                         .indexOf($scope.searchText.toLowerCase()) != -1||
                item.rating.toLowerCase()
                         .indexOf($scope.searchText.toLowerCase()) != -1) {
                return true;
            }
        }

        return false;
    };



//Filter Module

    $scope.priceincludes = [];
    $scope.ranges = [];
    debugger;
    $scope.includeprice = function (pricerange) {
        var i = pricerange.includes($scope.priceincludes);
        
        if (i =="true") {
            $scope.priceincludes.splice(i, 1);
            ranges = pricerange.split(',').splice(i, 1);
        } else {
            $scope.priceincludes.push(pricerange);
        }
        var arraystring = $scope.priceincludes.join();
        var rangearray = arraystring.split(',')
        $scope.maxrange = function (rangearray) {
            return Math.max.apply(math, rangearray);
        };
        $scope.minrange = function (rangearray) {
            return Math.min.apply(math, rangearray);
        };
        $scope.ranges[1] = $scope.maxrange(rangearray);
        $scope.ranges[0] = $scope.minrange(rangearray);
        console.log($scope.ranges);
    }

    $scope.pricefilter = function (item) {
        if ($scope.item.length > 0) {
            if ((parseint(item.cost) >= parseint($scope.ranges[0])) && (parseint(item.cost) <= parseint($scope.ranges[1])))
                return item;
        }
    }

});




