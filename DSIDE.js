class Dside{

    constructor(x,y,height,width){
    
    var options = {
    
    isStatic:true,
    density:1.3
    
    }
    this.body = Bodies.rect(x,y,height,width,options)
    this.height = height;
    this.width = width;
    
    World.add(world,this.body);
    }
    display(){
    
    var pos = this.body.position;
    push()
    translate(pos.x,pos.y);
    rectMode(CENTER);
    strokeWeight(3);
    fill("red"); 
    rect(0,0,this.height,this.width); 
    pop()
    
    
    }
    
    }