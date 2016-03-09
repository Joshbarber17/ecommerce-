angular.module('ecomApp', ['ui.router'])
.config(function($stateProvider, $urlRouterProvider){
  $stateProvider
  .state('products', {
    url: '/products',
    templateUrl: './views/products.html',
    controller: 'productsCtrl'
  })
  .state('admin', {
    url: '/admin',
    templateUrl: './views/admin.html',
    controller: 'adminCtrl'
  })
  $urlRouterProvider.otherwise('/');
})
