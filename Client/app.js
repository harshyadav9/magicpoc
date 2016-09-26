// (function(){

  var app = angular.module('app', ['ui.router'])
  app.config([
    '$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');
    $stateProvider
    .state('home', {
      url: '/',
       templateUrl: './templates/contentPanel.html',
       controller:'ContentPanelController'   
      // views: {
      //   '': {
      //     templateUrl: './templates/main.html'
      //   },
      //   'nav@home': {
      //     templateUrl: './templates/assets/nav.html'
      //   },
      //   'body@home': {
      //     templateUrl: './templates/body.html'
      //   },
      //   'footer@home': {
      //     templateUrl: './templates/assets/footer.html'
      //   }
      // }
    });
    // .state('main', {
    //   url: '/main',        
     
        
    // });
  }]);

  app.controller('SidebarController', function($scope,$rootScope) {
    
    $rootScope.isShown = true;
    
    $scope.toggleState = function() {
        $scope.state = !$scope.state;
    };
    
});

   app.controller('ContentPanelController', function($scope,$rootScope) {
    
    // $rootScope.isShown = false;
    
  
});
// });
