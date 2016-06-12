import Beans from '../../imports/api/beans';

class TodayController {
  constructor($stateParams, $scope, $reactive) {
    'ngInject';
  
    $reactive(this).attach($scope);
    this.helpers({
      todaysBean() {
        return Beans.findOne($stateParams.beanId ? {_id: $stateParams.beanId}: {}, {sort: {lastMod: -1}});
      }
    });

    this.beverageType = ['Espresso', 'Latte', 'Cappuccino'];
    this.rating = 3;
  }
}

export default TodayController;