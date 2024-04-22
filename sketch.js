var box;

function setup() {
  createCanvas(400,400)
  box = createSprite (200,200,30,30)
}

function draw() 
{
   background(30);
   if (keyIsDown (RIGHT_ARROM))
   {
    box.position.x += 5;
    background("red");
   }
   background(30);
    if (keyIsDown (LEFT_ARROM))
    {
      box.position.x += 5;
      background ("pink")
    }
   background (30);
   if (keyIsDown (DOWN_ARROM))
   {
    box.position.y += 5;
    background ("blue")
   }
   background (30);
   if (keyIsDown (UP_ARROM))
   {
    box.position.y += 5;
    background ("yellow")
   }

  

  drawSprites();
  }




