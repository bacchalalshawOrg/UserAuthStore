'use strict';

angular.module('ionFireAuthStoreApp')
    /* Configure a route for this function */
    .config(function ($stateProvider) {
        $stateProvider
            .state('app.editProduct', {
                url: '/editProduct',
                views: {
                    'menuContent': {
                        templateUrl: "shoppingCart/editProduct/editProduct.html",
                        controller: 'EditProductCtrl'
                    }
                }
            }
        );
    }
);
