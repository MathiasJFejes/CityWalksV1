angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      .state('menu.cityWalks', {
    url: '/page1',
    views: {
      'side-menu21': {
        templateUrl: 'templates/cityWalks.html',
        controller: 'cityWalksCtrl'
      }
    }
  })

  .state('menu', {
    url: '/side-menu21',
    templateUrl: 'templates/menu.html',
    controller: 'menuCtrl'
  })

  .state('menu.login', {
    url: '/page0',
    views: {
      'side-menu21': {
        templateUrl: 'templates/login.html',
        controller: 'loginCtrl'
      }
    }
  })

  .state('menu.nearbyRoutes', {
    url: '/page3',
    views: {
      'side-menu21': {
        templateUrl: 'templates/nearbyRoutes.html',
        controller: 'nearbyRoutesCtrl'
      }
    }
  })

  .state('menu.createRoute', {
    url: '/page2',
    views: {
      'side-menu21': {
        templateUrl: 'templates/createRoute.html',
        controller: 'createRouteCtrl'
      }
    }
  })

  .state('menu.topRoutes', {
    url: '/page4',
    views: {
      'side-menu21': {
        templateUrl: 'templates/topRoutes.html',
        controller: 'topRoutesCtrl'
      }
    }
  })

$urlRouterProvider.otherwise('/side-menu21/page0')

  

});