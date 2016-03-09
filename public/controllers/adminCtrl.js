angular.module('ecomApp').controller('adminCtrl', function($scope, mainSvc) {
  mainSvc.getProducts().then(function(response){
    $scope.products = response.data
  })
  $scope.addProduct = function(productName, productSize) {
      var product = {
        name: productName,
        size: productSize
      }
      mainSvc.addProducts(product).then(function(response){
        mainSvc.getProducts().then(function(response){
          $scope.products = response.data
          $scope.productName = '';
          $scope.productSize = '';
      })
    })
  }
  $scope.delete = function(product) {
    mainSvc.deleteProduct(product).then(function(response){
      mainSvc.getProducts().then(function(response){
        $scope.products = response.data
      })
    })
  }
  $scope.submitNew = function(product, newField, newStuff) {
    var field = {}
    field[newField] = newStuff
    mainSvc.updateProduct(product, field).then(function(response){
      mainSvc.getProducts().then(function(response){
        $scope.products = response.data
        $scope.newField = '';
        $scope.newStuff = '';
      })
    })
  }
})
