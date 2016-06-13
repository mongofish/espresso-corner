import Beans from '../../imports/api/beans';
import Ratings from '../../imports/api/ratings';
import moment from 'moment';

class TodayController {
  constructor($state, $stateParams, $scope, $reactive) {
    'ngInject';
  
    const today = moment().startOf('day')
    const tomorrow = moment(today).add(1, 'days')
    this.$state = $state;
    this.$stateParams = $stateParams;
    $reactive(this).attach($scope);
    this.helpers({
      todaysBean() {
        return Beans.findOne($stateParams.beanId ? {_id: $stateParams.beanId}: {}, {sort: {lastMod: -1}});
      },
      ratings() {
        return Ratings.find({lastMod: {$gte: today.toDate(), $lt: tomorrow.toDate()}});
      }
    });

    this.beverageTypes = ['Espresso', 'Latte', 'Cappuccino'];
    this.rating = {score: 3};
  }

  rate() {
    this.rating.bean = this.todaysBean;
    Ratings.insert(this.rating);
    this.$state.reload(this.$state.current.name, this.$stateParams);
  }
}

export default TodayController;