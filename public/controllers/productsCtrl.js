angular.module('ecomApp').controller('productsCtrl', function($scope, mainSvc){
  mainSvc.getProducts().then(function(response){
    $scope.products = response.data
  })
})
