import angular from 'angular';
import beanCardContent from './beanCardContent';

let componentsModule = angular.module('app.components', [])
.component('beanCardContent', beanCardContent);

export default componentsModule;