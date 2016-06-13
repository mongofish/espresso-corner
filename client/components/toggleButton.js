import templateUrl from './toggleButton.html';

let toggleButton = {
  restrict: 'E',
  bindings: {
  	values: '=',
  	ngModel: '='
  },
  templateUrl,
  controllerAs: 'vm'
}

export default toggleButton;