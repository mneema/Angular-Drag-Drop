export class StreamDlgController {
  constructor ($scope,$mdDialog) {
    'ngInject';
    this.$mdDialog = $mdDialog;
    this.$scope = $scope;
    this.dataModel = {name:'',unit:''};
    this.showErr = false;
  }

  cancel(ev) {
    this.$mdDialog.cancel();

  }

  save(data){
    if(this.streamForm.$invalid){
      this.showErr = true;
    }
    else{
      this.$mdDialog.hide(data);  
    }
        
  }

  activate() {
    
  }

  
}
