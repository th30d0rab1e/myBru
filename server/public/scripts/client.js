var myApp = angular.module('myApp', ['ngMaterial', 'ngMessages', 'ngRoute', 'xeditable']);

/// Routes ///
myApp.config(function($routeProvider, $locationProvider) {
  $locationProvider.hashPrefix('');
  console.log('myApp -- config');
  $routeProvider
    .when('/home', {
      templateUrl: '/views/templates/home.html',
      controller: 'LoginController as lc',
    })
    .when('/register', {
      templateUrl: '/views/templates/register.html',
      controller: 'LoginController as lc'
    })
    .when('/user', {
      templateUrl: '/views/templates/user.html',
      controller: 'UserController as uc',
      resolve: {
        getuser : function(UserService){
          return UserService.getuser();
        }
      }
    })
    .when('/info', {
      templateUrl: '/views/templates/info.html',
      controller: 'InfoController',
      resolve: {
        getuser : function(UserService){
          return UserService.getuser();
        }
      }
    })
    .when('/recipe', {
      templateUrl: '/views/templates/recipe.html',
      controller: 'RecipeController as rc',
      resolve: {
        getuser : function(UserService){
          return UserService.getuser();
        }
      }
    })
    .when('/brew', {
      templateUrl: '/views/templates/brew.html',
      controller: 'BrewController as bc',
      resolve: {
        getuser : function(UserService){
          return UserService.getuser();
        }
      }
    })
    .when('/bottle', {
      templateUrl: '/views/templates/bottle.html',
    })
    .when('/drink', {
      templateUrl: '/views/templates/drink.html',
      controller: 'DrinkController as dc',
      resolve: {
        getuser : function(UserService){
          return UserService.getuser();
        }
      }
    })
    .when('/summary', {
      templateUrl: '/views/templates/summary.html',
    })
    .otherwise({
      redirectTo: 'home'
    });

}); // END OF Routes config
