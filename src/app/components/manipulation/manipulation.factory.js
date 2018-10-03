export class Manipulation {
  constructor (stream,operator,value,action) {
   'ngInject';
    this.stream = stream;
    this.operator=operator;
    this.value=value;
    this.action=action;
  }

  getDescription(){
    return "if "+this.stream+" is "+this.operator+" " + this.value+" then "+ this.action;
  }
}

export class ManipulationFactory {
  constructor () {
   
  }

  new(stream,operator,value,action){
    return new Manipulation(stream,operator,value,action);  
  }

}