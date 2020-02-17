var MyHomeApp = angular.module('Site', []);

MyHomeApp.config(['$routeProvider',
                function($routeProvider) {
                  $routeProvider.
                    when('/p-inktober', {
                      templateUrl: 'projPages/p-inktober.html'
                      }).
                    when('/p-CSSSA', {
                      templateUrl: 'projPages/p-CSSSA.html'
                    }).
                    when('/p-birdgut', {
                      templateUrl: 'projPages/p-birdgut.html'
                    }).
                    when('/p-evsim', {
                      templateUrl: 'projPages/p-evsim.html'
                    }).
                    when('/p-multiplayer', {
                      templateUrl: 'projPages/p-multiplayer.html'
                    }).
                    when('/p-seat', {
                      templateUrl: 'projPages/p-seat.html'
                    }).
                    when('/contact', {
                      templateUrl: 'contact.html'  
                    }).
                    when('/art', {
                      templateUrl: 'art.html'
                    }).
                    when('/portfolio', {
                      templateUrl: 'portfolio.html'
                    }).
                    when('/resume', {
                      templateUrl: 'resume.html'
                    }).
                    when('/about', {
                      templateUrl: 'about.html'
                    }).
                    when('/404', {
                      templateUrl: '404.html'
                    }).
                    when('/home', {
                        templateUrl: 'home.html',
                        controller: 'WGHomeLanCtrl'
                      }).
                    otherwise({
                      templateUrl: 'home.html',
                      controller: 'WGHomeLanCtrl'
                    });
                }]);   
                
MyHomeApp.controller( 'WGHomeLanCtrl', function ( $scope ) {
});