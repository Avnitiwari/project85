var canvas = new fabric.Canvas('myCanvas');
 var x= document.getElementById("myAudio");

 function new_image(get_image)
{
    fabric.Image.fromURL("https://i.pinimg.com/originals/15/29/84/152984a58737f795074b59e10d1d9ca4.jpg",function(Img) {
        block_image_object=Img;
        block_image_object.scaleToWidth(700);
        block_image_object.scaleToHeight(510);
        block_image_object.set({
            top:player_y,
            left:player_x

        });
        canvas.add(block_image_object);

    });
}


	
	


function playSound(){
x.play();	
}
