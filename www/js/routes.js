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

  .state('login', {
    url: '/page0',
    templateUrl: 'templates/login.html',
    controller: 'loginCtrl'
  })

  .state('signup', {
    url: '/page9',
    templateUrl: 'templates/signup.html',
    controller: 'signupCtrl'
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

  .state('createRoute', {
    url: '/page2',
    templateUrl: 'templates/createRoute.html',
    controller: 'createRouteCtrl'
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

  .state('menu.myRouts', {
    url: '/page10',
    views: {
      'side-menu21': {
        templateUrl: 'templates/myRouts.html',
        controller: 'myRoutsCtrl'
      }
    }
  })

$urlRouterProvider.otherwise('/page0')

  

});