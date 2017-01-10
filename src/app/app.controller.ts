
class AppController {
  static $inject = ['$rootScope', '$location'];
  constructor($rootScope, $location) {
    $rootScope.$on('$routeChangeSuccess', function () {
      switch ($location.path()) {
        case '/patients':
        case '/login':
          break;
        default:
          break;
      }
    });
  }
}

export default AppController;
