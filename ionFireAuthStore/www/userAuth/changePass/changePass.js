'use strict';

angular.module('ionFireAuthStoreApp')
    .config(function ($stateProvider) {
      $stateProvider
          .state('app.changePass', {
            url: '/changePass',
            views: {
              'menuContent': {
                templateUrl: "userAuth/changePass/changePass.html",
                controller: 'ChangePassCtrl'
              }
            }
          });
    });
