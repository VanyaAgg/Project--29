  
class Box  {
    constructor(x, y, width, height){
      super(x,y,width,height);
    
    }
    display(){
    var pos =this.body.position;
    rectMode(CENTER);
    rect(pos.x, pos.y, this.width, this.height);
  }
}