angular.module('app.controllers', [])
  
.controller('cityWalksCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('menuCtrl', ['$scope', '$stateParams', '$ionicUser', '$ionicAuth', '$state', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, $ionicUser, $ionicAuth, $state) {
    
    $scope.userData = $ionicUser.details;

    $scope.logout = function(){
        $ionicAuth.logout();
        $state.go('login');
    }

}])
   
.controller('loginCtrl', ['$scope', '$stateParams', '$ionicUser', '$ionicAuth', '$state', 
// The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, $ionicUser, $ionicAuth, $state) {

    $scope.data = {
        'email': '',
        'password': ''
    }
    
    $scope.error = '';
    
    if ($ionicAuth.isAuthenticated()) {
        // Make sure the user data is going to be loaded
        $ionicUser.load().then(function() {});
        $state.go('menu.createRoute'); 
    }
    
    $scope.login = function(){
        $scope.error = '';
        $ionicAuth.login('basic', $scope.data).then(function(){
            $state.go('menu.createRoute');
        }, function(){
            $scope.error = 'Error logging in.';
        })
    }

}])
   
.controller('signupCtrl', ['$scope', '$stateParams', '$ionicAuth', '$ionicUser', '$state', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, $ionicAuth, $ionicUser, $state) {
    
    $scope.data = {
        'name': '',
        'email': '',
        'password': ''
    }
    
    $scope.error='';

    $scope.signup = function(){
        
        $scope.error = '';

        $ionicAuth.signup($scope.data).then(function() {
            // `$ionicUser` is now registered
            $ionicAuth.login('basic', $scope.data).then(function(){
              $state.go('login');
            });
        }, function(err) {
            
            var error_lookup = {
                'required_email': 'Missing email field',
                'required_password': 'Missing password field',
                'conflict_email': 'A user has already signed up with that email',
                'conflict_username': 'A user has already signed up with that username',
                'invalid_email': 'The email did not pass validation'
            }    
        
            $scope.error = error_lookup[err.details[0]];
        });
    }

}])
   
.controller('requestResetPasswordCtrl', ['$scope', '$stateParams', '$ionicAuth', '$ionicUser', '$state', '$ionicPopup',
function ($scope, $stateParams, $ionicAuth, $ionicUser, $state, $ionicPopup) {
    
    $scope.userData = $ionicUser.details;

    $scope.data = {
        email: ''
    };
    $scope.request = function() {
        console.log($scope.data.email);
        if($scope.data.email.length < 1) {
          $ionicPopup.alert({
           title: 'Error',
           template: 'Please input email address.'
          });
          return ;
        }
    
        $ionicAuth.requestPasswordReset($scope.data.email);
        var alertPopup = $ionicPopup.alert({
         title: 'Alert!',
         template: 'Email sent! Please check your email.'
        });
    
        alertPopup.then(function(res) {
         $state.go("confirmResetPassword");
        });
    };
}])
   
.controller('confirmResetPasswordCtrl', ['$scope', '$stateParams', '$ionicAuth', '$ionicUser', '$state', '$ionicPopup', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, $ionicAuth, $ionicUser, $state, $ionicPopup) {

    $scope.data = {
        code: '',
        newpassword: ''
    };

    $scope.error = '';
    
    $scope.reset = function() {
      if($scope.data.code.length < 1 || $scope.data.newpassword.length < 1) {
         $ionicPopup.alert({
             title: 'Alert!',
             template: 'Please fill out information.'
         });
         return ;
      }
      
      $ionicAuth.confirmPasswordReset($scope.data.code, $scope.data.newpassword)
      var alertPopup = $ionicPopup.alert({
         title: 'Alert!',
         template: 'Password has been changed.'
     });
    
    alertPopup.then(function(res) {
        $state.go("login");
    });
    }
}])
   
.controller('nearbyRoutesCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('createRouteCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('topRoutesCtrl', ['$scope', '$stateParams', '$http', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, $http) {

    $scope.getRouteData = function () {

        $http({
            method: 'GET',
            url: 'http://46.101.219.139:5000/api/cities'
        }).then(function (response) {
            $scope.myData = response.data;

        })
    }


}])
   
.controller('myRoutesCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('settingsCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('recordRouteCtrl', ['$scope', '$stateParams', '$ionicPopup', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, $ionicPopup) {
    
    $scope.stopRecordingRoute = function() {
       var alertPopup = $ionicPopup.show({
         template: '<ion-list>  <ion-toggle>Wheelchair frendly</ion-toggle> <ion-toggle>Green areas</ion-toggle> <ion-toggle>Water areas</ion-toggle> <ion-toggle>Historical buildings</ion-toggle> <ion-toggle>Museums</ion-toggle> <ion-toggle>Boutiques</ion-toggle> </ion-list> ',
         title: 'Please add informarion about your route',
         scope: $scope,
         buttons: [
           { text: 'Cancel' },
           {
             text: '<b>Save</b>',
             type: 'button-positive',
           }]
       });
    };
 
    

}])
   
.controller('createdRouteCtrl', ['$scope', '$stateParams', '$ionicPopup', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, $ionicPopup) {
    
    $scope.rateRoute = function() {
       var alertPopup = $ionicPopup.show({
         template: '<ion-list>  <ion-toggle>Like route</ion-toggle> <ion-toggle>Dangerous route</ion-toggle>  </ion-list> ',
         title: 'Please add informarion about your route',
         scope: $scope,
         buttons: [
           { text: 'Cancel'},
           { text: 'Save' },
          ]
       });
    };
 
    

}])
   
.controller('nearbyRoutesCtrl', ['$scope', '$stateParams', '$state', '$http', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, $state, $http) {
   
   
   $scope.data = {
       'city': '',
       'distance': ''
   }


   $scope.findNearbyRoutes = function () {

       var req = {
           crossDomain: true,
           method: 'POST',
           url: 'http://46.101.219.139:5000/api/cities',
           headers: {
               'Content-Type': 'application/json'
           },
           data: { 'name': $scope.data.city, 'distance': $scope.data.distance}
       }

       $http(req).then(function () { $state.go('menu.topRoutes'), $scope.error = 'Error logging in.' });


       };

}])
 
.controller('friendesRoutesCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])