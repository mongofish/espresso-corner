import Beans from '../../imports/api/beans';

class BeansController {
  constructor($scope, $reactive) {
    'ngInject';
 	
 	this.showAdd = false;
	this.newBean = {};
	
	$reactive(this).attach($scope);
    this.helpers({
      beans() {
        return Beans.find({});
      }
    });

    this.roasts = ['Light', 'Medium', 'Dark'];
  }

  add() {
  	Beans.insert(this.newBean);
 	  this.showAdd = false;
	  this.newBean = {};  
  }
}

export default BeansController;