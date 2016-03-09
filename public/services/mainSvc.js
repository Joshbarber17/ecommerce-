angular.module('ecomApp').service('mainSvc', function($http){
    this.getProducts = function() {
      return $http({
        method: 'GET',
        url: '/products'
      })
    }
    this.addProducts = function(product) {
      return $http ({
        method: "POST",
        url: '/products',
        data: product
    })
  }
    this.deleteProduct = function(product) {
      return $http ({
        method: "DELETE",
        url: '/products/' + product._id
      })
    }
    this.updateProduct = function(product, field) {
      return $http ({
        method: "PUT",
        url: '/products/' + product._id,
        data: field
      })
    }
})
