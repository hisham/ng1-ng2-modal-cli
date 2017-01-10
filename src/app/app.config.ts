let AppConfig = function ($routeProvider) {
  $routeProvider
      .when('/patients', {
        template: '<cora-favorite></cora-favorite>'
      })
      .when('/login', {
        template: '<cora-login></cora-login>'
      })
      .otherwise({
        redirectTo: '/login'
      });
  };

AppConfig.$inject = ['$routeProvider'];

export default AppConfig;
