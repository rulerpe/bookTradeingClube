'use strict';

angular.module('bookTradeApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('mybooks', {
        url: '/mybooks',
        templateUrl: 'app/mybooks/mybooks.html',
        controller: 'MybooksCtrl'
      });
  });