export function ExpressionDirective() {
  'ngInject';

  let directive = {
    restrict: 'E',
    templateUrl: 'app/components/expWidget/expression.html',
    scope: {
        expression: '=',
        idx: "@",
        onDelete: '&',
        onStrDelete: '&',
        onManDelete: '&',
        onKeyPress: '&'
    },
    link:link,
    controller: ExpressionController,
    controllerAs: 'vm',
    bindToController: true
  };

  return directive;
}

function link(scope, element, attrs, vm) {
  var inputFld = element.find('input'); 
  inputFld.on('click',function(e){
      if(e.which===13){
        vm.onKeyPress({val:e.val()});
      }
  });       
}

class ExpressionController {
  constructor ($scope) {
    'ngInject';

    // "this.creation" is available by directive option "bindToController: true"
    
  }

  delete(){
    
  }
}
