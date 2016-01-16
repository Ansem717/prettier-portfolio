/******************************************************************
| GOAL: Identify when the mouse is being held down. While it is   |
|       being held down, if it's position changes, transform the  |
|       entire .cube element by rotating both axis according to   |
|       the position of the cursor.                               |
******************************************************************/

//Setting up an object to hold variables and methods for the cube
var cube = {}
var mouseLocX = 0;
var mouseLocY = 0;

cube.DnD = function (){
  $('body').mouseup(function(mouse){
    $('body').off('mousemove');
    // console.log('Mouse has been lifted.');
  });
  $('.cube-container').mousedown(function(event){
    mouseLocX=event.pageX;
    mouseLocY=event.pageY;
    // console.log('Mouse Location: ('+mouseLocX+', '+mouseLocY+')');
    // console.log('Mouse is down.');
    $('body').mousemove(function(mouse){
      // console.log('x='+mouse.pageX+', y='+mouse.pageY);
      cube.rotate(mouse.pageX, mouse.pageY);
    });
  });
}

cube.rotate = function(x,y){
  // var vertPosition = y - mouseLocY;
  // var horzPosition = x - mouseLocX;
  // var pieTime = horzPosition + vertPosition / 4;
  // var rotate3d = 'rotate3d('+horzPosition+', '+vertPosition+', 0, '+pieTime+'deg)';
  // console.log(rotate3d);
  // $('.cube').css('transform', rotate3d);
  // console.log($('.cube').css('transform'));
  cube.rotateX(x);
  // cube.rotateY(y);
}

/**********************************************************
|  I have messed around with so many lines of code but I  |
|  just cannot seem to get my cube to rotate on both axis |
|  at the same time. * Note to self: The cube repositions |
|  itself after click and dragging, every time.           |
**********************************************************/

cube.rotateX = function(x){
  var horzPosition = x - mouseLocX;
  var horzTransform = 'rotateY('+horzPosition+'deg)';
  // console.log(horzTransform)
  // console.log($('.cube').css('transform'));
  $('.cube').css('transform', horzTransform);
}


cube.rotateY = function(y){
  var vertPosition = y - mouseLocY;
  var vertTransform = 'rotateX('+vertPosition+'deg)';
  $('.cube').css('transform', vertTransform);
}
