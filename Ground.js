class ground{

constructor(x,y,height){

var options = {

isStatic:true,
density:1.3

}
this.body = Bodies.rect(x,y,height,1000,options)
this.height = height;


World.add(world,this.body);
}
display(){

var pos = this.body.position;
push()
translate(pos.x,pos.y);
rectMode(CENTER);
strokeWeight(3);
fill("yellow"); 
rect(0,0,this.height,this.width); 
pop()


}

}