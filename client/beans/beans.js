import angular from 'angular';
import uiRouter from 'angular-ui-router';
import template from './beans.html';
import controller from './beans.controller';

let beansModule = angular.module('app.beans', [
  uiRouter
])
.config(($stateProvider, $urlRouterProvider) => {
  "ngInject";

  $stateProvider
    .state('beans', {
      url: '/beans',
      templateUrl: template,
      controller,
      controllerAs: 'vm'
    });
});

export default beansModule;