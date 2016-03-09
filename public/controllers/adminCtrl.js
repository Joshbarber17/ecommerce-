angular.module('ecomApp').controller('adminCtrl', function($scope, mainSvc) {
  mainSvc.getProducts().then(function(response){
    $scope.products = response.data
  })
  $scope.addProduct = function(productTitle, productDesc, productPrice) {
      var product = {
        title: productTitle,
        description: productDesc,
        price: productPrice
      }
      mainSvc.addProducts(product).then(function(response){
        mainSvc.getProducts().then(function(response){
          $scope.products = response.data
          $scope.productTitle = '';
          $scope.productDesc = '';
          $scope.productPrice = '';
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
