export class ManipulationDlgController {
  constructor ($scope,$mdDialog,availableStreams) {
    'ngInject';
    this.$mdDialog = $mdDialog;
    this.$scope = $scope;
    this.activate(availableStreams);
    this.showErr = false;
  }

  cancel(ev) {
    this.$mdDialog.cancel();
  }

  save(data){
    if(this.manForm.$invalid){
      this.showErr = true;
    }
    else{
      this.$mdDialog.hide(data);   
    }
       
  }

  activate(availableStreams) {
    this.streams = availableStreams;
    this.operators = [{name:">"},{name:"<"},{name:"="},{name:">="},{name:"<="}];
    this.actions = [{name:"trigger"},{name:"reset"},{name:"stop"}];
  }

  
}
