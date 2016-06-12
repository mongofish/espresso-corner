import templateUrl from './beanCardContent.html';

let beanCardContent = {
  restrict: 'E',
  bindings: {
  	bean: '='
  },
  templateUrl,
  controllerAs: 'vm'
}

export default beanCardContent