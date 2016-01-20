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
var curPos = '';

cube.DnD = function (){
  $('body').mouseup(function(mouse){
    $('body').off('mousemove');
  });
  $('.cube-container').mousedown(function(event){
    mouseLocX=event.pageX;
    mouseLocY=event.pageY;
    curPos = $('.cube').css('transform');
    console.log(curPos)
    $('body').mousemove(function(mouse){
      cube.rotate(mouse.pageX, mouse.pageY);
    });
  });
}

/**********************************************************
|  I need to set up a code to always check which side of  |
|  the cube is being shown. If the bottom is being shown, |
|  then when the user starts a new rotation, rotating     |
|  horizontally will rotate on the Z axis. Same with the  |
|  right face rotating vertically. So far, the code works |
|  if the front face is viewed.                           |
**********************************************************/

cube.rotate = function(mpx, mpy) {
  // with Trial and Error, this is the brute force way of checking which face has the most screen time.
  // Extract numbers from the matrix3d that is returned from the 'translate' css property when checked:
  console.log(curPos)

  var xDeg = (mpx - mouseLocX)/2;
  var yDeg = -1*(mpy - mouseLocY)/2.5; //The Y axis is inverted
  var xDegCSS = 'rotateY('+xDeg+'deg)';
  var bothCSS = xDegCSS+' rotateX('+yDeg+'deg)';
  $('.cube').css('transform', bothCSS);
  // $('.cube').css('transform', xDegCSS);
  // $('.cube').css('transform', yDegCSS);
  // $('.cube').css('trasnform', curPos);
}
