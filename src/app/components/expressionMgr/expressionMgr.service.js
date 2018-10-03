export class ExpressionMgrService {
  constructor (expressionFactory) {
    'ngInject';
    this.exprFactory = expressionFactory;
    this.expressions = [];
  }

  getExpressions() {
    return this.expressions;
  }

  add(){
    let newExpr = this.exprFactory.newExpression(this.expressions.length+1,'',[],[]);//{id: this.expressions.length+1,text:'',streams:[],manipulations:[]};
    this.expressions.push(newExpr);
  }

  addStreamToExpression(exprIndex,name,unit) {
     this.expressions[exprIndex].addStream(name,unit); 
  }

  addManipulationToExpression(exprIndex,stream,operator,value,action){
     this.expressions[exprIndex].addManipulation(stream,operator,value,action); 
  }

  deleteExp(index){
     this.expressions.splice(index,1);
  }

  isStreamUsedInExp(strIndex, expIndex){
    return this.expressions[expIndex].isStreamUsed(strIndex);    
  }

  deleteStreamInExp(strIndex, expIndex){
     this.expressions[expIndex].removeStream(strIndex); 
  }

  deleteManInExp(manIndex, expIndex){
     this.expressions[expIndex].removeManipulation(manIndex); 
  }

  deleteAssociatedManipulationsInExp(strIndex, expIndex){
    this.expressions[expIndex].removeAssociatedManipulation(strIndex); 
  }

  setExpression(exp) {
    if(exp){
      this.expressions.push(exp);
    }
  }
}
