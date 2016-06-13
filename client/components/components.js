import angular from 'angular';
import beanCardContent from './beanCardContent';
import toggleButton from './toggleButton';

let componentsModule = angular.module('app.components', [])
.component('beanCardContent', beanCardContent)
.component('toggleButton', toggleButton);

export default componentsModule;