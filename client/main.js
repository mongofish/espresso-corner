import angular from 'angular';
import angularAnimate from 'angular-animate';
import angularMaterial from 'angular-material';
import angularMeteor from 'angular-meteor';
import uiRouter from 'angular-ui-router';
import angularMoment from 'angular-moment';
import beansModule from './beans/beans';
import todayModule from './today/today';
import statsModule from './stats/stats';
import componentModule from './components/components';
import 'angular-material/angular-material.css';
import './main.css';

angular.module('app', [
  angularAnimate,
  angularMaterial,
  angularMeteor,
  angularMoment,
  uiRouter,
  beansModule.name,
  todayModule.name,
  statsModule.name,
  componentModule.name
])
.config(($stateProvider, $urlRouterProvider) => {
  "ngInject";

  $urlRouterProvider.otherwise('/beans');
}).controller('navController', function($state, $rootScope) {
  "ngInject";
	this.date = new Date();

	this.goto = function(route) {
		$state.go(route);
	}
});
