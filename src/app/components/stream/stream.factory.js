//class for Stream Object
export class Stream {
  constructor (name,unit) {
   'ngInject';
    this.name = name;
    this.unit=unit;
  }

  getDescription(){
    return this.name + " (" + this.unit + ")";
  }
}

//Factory to intantiate Stream object
export class StreamFactory {
  constructor () {
   
  }

  new(name,unit){
    return new Stream(name,unit);  
  }

}