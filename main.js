var canvas = new fabric.Canvas('myCanvas');
 block_y=1;
 block_x=1;

block_image_width = 300;
block_image_height = 200;

var block_image_object= "";

function new_image(get_image)
{
	fabric.Image.fromURL(get_image, function(Img){
     block_image_object = Img;

	 block_image_object.scaleToWidth(block_image_width);
	 block_image_object.scaleToHeight(block_image_height);
     block_image_object.set({
     top:block_y,
     left:block_x
	 });
   canvas.add(block_image_object);
});
}
window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
keyPressed = e.keyCode;
console.log(keyPressed);

	if(keyPressed == '82') 
	{ new_image('red.jpeg');
         	console.log("Red");
	}
	if(keyPressed == '71')
	{
		block_x = 200;
		new_image('hal.jpeg');
		console.log('Hal');
	}
	
	if(keyPressed == '89')
	{
		block_x =350;
		new_image('chuck.jpeg');
		console.log('Chuck');
	}
	if(keyPressed == '76')
	{
		block_x = 600;
		new_image('boom.jpeg');
		console.log('Boom');
	}
	if(keyPressed == '66')
	{
		block_x = 700;
	new_image('blues.jpeg');
	console.log('Blues');
	}

	if(keyPressed == '73')
	{
		block_x = 700;
	new_image('silver.jpeg');
	console.log('Sliver');
	}

	if(keyPressed == '83')
	{
		block_x = 700;
	new_image('stella.jpeg');
	console.log('Stella');
	}

	if(keyPressed == '68')
	{
		block_x = 700;
	new_image('dhalia.jpeg');
	console.log('Dhalia');
	}

	if(keyPressed == '67')
	{
		block_x = 700;
	new_image('BigR.jpeg');
	console.log('Big Red');
	}
	
}

