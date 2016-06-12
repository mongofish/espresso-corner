import angular from 'angular';
import uiRouter from 'angular-ui-router';
import template from './stats.html';
import controller from './stats.controller';

let statsModule = angular.module('app.stats', [
  uiRouter
])
.config(($stateProvider, $urlRouterProvider) => {
  "ngInject";

  $stateProvider
    .state('stats', {
      url: '/stats',
      templateUrl: template,
      controller,
      controllerAs: 'vm'
    });
});

export default statsModule;