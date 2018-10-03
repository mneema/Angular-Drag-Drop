//The class to deal with expression related functions
export class Expression {
  constructor (id,text,streams,manipulations) {
   'ngInject';
    this.id = id;
    this.text=text;
    this.streams=streams;
    this.manipulations=manipulations;
    this.streamFactory = null;
    this.manipulationFactory = null;
  }

  getDescription(){
    return this.text;
  }

  addFactory(streamFactory,manipulationFactory){
    this.streamFactory = streamFactory;
    this.manipulationFactory = manipulationFactory;
  }

  addStream(unit,name){
    var newStream = this.streamFactory.new(unit,name);
    this.streams.push(newStream);
  }

  addManipulation(stream,operator,value,action){
    var newMan = this.manipulationFactory.new(stream,operator,value,action);
    this.manipulations.push(newMan);  
  }

  isStreamUsed(index){
    //check if this stream is used in any manipulations
    let isUsed = false;
    for(let i=0;i<this.manipulations.length;i++){
       if(this.streams[index].name===this.manipulations[i].stream){
        isUsed=true; 
        break;  
       } 
    }
    return isUsed;
  }

  removeStream(index){
    this.streams.splice(index,1);
       
  }


  removeManipulation(index){
    this.manipulations.splice(index,1);
  }

  removeAssociatedManipulation(strIndex){
    for(let i=0;i<this.manipulations.length;){
       if(this.streams[strIndex].name===this.manipulations[i].stream){
        this.removeManipulation(i);
        
       }
       else{
        i++;
       } 
    }
  }
}

//defined factory to instantiate new Expression objects
export class ExpressionFactory {

  constructor (streamFactory, manipulationFactory) {
    'ngInject';
    this.activate(streamFactory, manipulationFactory);
    
  }

  activate(streamFactory, manipulationFactory){
    this.streamFactory = streamFactory;
    this.manipulationFactory = manipulationFactory;
  }

  newExpression(id,text,streams,manipulations){
    var expr = new Expression(id,text,streams,manipulations);
    expr.addFactory(this.streamFactory, this.manipulationFactory);
    return expr;

  }

}
