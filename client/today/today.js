import angular from 'angular';
import uiRouter from 'angular-ui-router';
import template from './today.html';
import controller from './today.controller';

let todayModule = angular.module('app.today', [
  uiRouter
])
.config(($stateProvider, $urlRouterProvider) => {
  "ngInject";

  $stateProvider
    .state('today', {
      url: '/today/:beanId',
      templateUrl: template,
      controller,
      controllerAs: 'vm'
    });
});

export default todayModule;