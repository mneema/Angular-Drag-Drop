//Main controller for initial page in the app
export class MainController {
  
  constructor ($scope,$mdDialog,expressionMgrSvc) {
    'ngInject';
    
    this.expressions = [];  //To keep expressions
    this.droppable=[];
    this.classAnimation = '';
    this.expressionMgrSvc = expressionMgrSvc;
    this.activate();
    this.$mdDialog = $mdDialog;
    $scope.$on('dropped',this.dropHandler.bind(this));
  }

  keyPress(event,index){
    
  }

  dropHandler(event,data){

    if(data.source==="stream"){
       this.openStreamDialog(data.target); 
    }
    else if(data.source==="manipulation"){
        if(this.expressions[data.target].streams.length==0){
          this.openAlert();
        }
        else{
          this.openManipulationDialog(data.target); 
        } 
          
      
    }

  }

  openAlert(){
    this.$mdDialog.show(
      this.$mdDialog.alert()
        .parent(angular.element(document.body))
        .clickOutsideToClose(true)
        .title('Alert')
        .content('There are no streams added to expression.')
        .ariaLabel('Alert Dialog Demo')
        .ok('Got it!')
    );
  }

  openStreamDialog(index){
    var that = this;
    this.$mdDialog.show({
      
      templateUrl: 'app/dialogs/StreamDlg/streamDialog.tmpl.html',
      parent: angular.element(document.body),
      
      clickOutsideToClose:true,
      fullscreen: true
    })
    .then(function(data) {
      that.addStreamToExpression(index,data.name,data.unit);
       
    }, function() {
      
    });
  }

  addStreamToExpression(exprIndex,name,unit) {
     this.expressionMgrSvc.addStreamToExpression(exprIndex,name,unit); 
  }

  openManipulationDialog(index){
    var that = this;
    this.$mdDialog.show({
      
      templateUrl: 'app/dialogs/ManipulationDlg/ManipulationDlg.tmpl.html',
      parent: angular.element(document.body),
      locals:{availableStreams: this.expressions[index].streams},
      controller:'ManipulationDlgController',
      controllerAs:'vm',
      clickOutsideToClose:true,
      fullscreen: true
    })
    .then(function(data) {
      that.addManipulationToExpression(index,data.stream,data.operator,data.value,data.action);
       
    }, function() {
      
    });
  }

  addManipulationToExpression(exprIndex,stream,operator,value,action) {
     this.expressionMgrSvc.addManipulationToExpression(exprIndex,stream,operator,value,action); 
  }

  activate() {
    
  }

  deleteExp(index){
      this.expressionMgrSvc.deleteExp(index);
  }

  deleteStream(strIndex, expIndex){
    
    if(this.expressionMgrSvc.isStreamUsedInExp(strIndex, expIndex)===true){
      this.openStreamAlert(strIndex, expIndex);
    }
    else{
      this.expressionMgrSvc.deleteStreamInExp(strIndex, expIndex);    
    }
  }

  openStreamAlert(strIndex, expIndex){
    var that = this;
    var confirm = this.$mdDialog
          .confirm()
          .title('Are you sure to delete this stream?')
          .content('the stream is being used in one or more manipulations. If you delete the stream, all manipulations using that stream will also be deleted.')
          .ariaLabel('Lucky day')
          .ok('Delete')
          .cancel('Cancel');
    this.$mdDialog.show(confirm).then(function() {
      that.expressionMgrSvc.deleteAssociatedManipulationsInExp(strIndex, expIndex);
      that.expressionMgrSvc.deleteStreamInExp(strIndex, expIndex); 
    }, function() {
      
    });
  }

  deleteManipulation(manIndex, expIndex){
    this.expressionMgrSvc.deleteManInExp(manIndex, expIndex);
  }

  addExpression(){
    
    this.expressionMgrSvc.add();
    this.expressions = this.expressionMgrSvc.getExpressions();
    
  }


  
}
