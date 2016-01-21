/******************************************************************
| GOAL: Identify when the mouse is being held down. While it is   |
|       being held down, if it's position changes, transform the  |
|       entire .cube element by rotating both axis according to   |
|       the position of the cursor.                               |
******************************************************************/

//Setting up an object to hold methods for the cube
var cube = {}
var curPos = '';
var xDeg = 0;
var yDeg = 0;
var zDeg = 0;
var mouseLocX = 0;
var mouseLocY = 0;
var mouseLocZ = 0;

cube.DnD = function (){
  $('body').mouseup(function(mouse){
    $('body').off('mousemove');
  });
  $('.cube-container').mousedown(function(event){
    mouseLocX=event.pageX;
    mouseLocY=event.pageY;
    curPos = $('.cube').css('transform');
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
  console.log('');
  console.log('xDeg = '+xDeg+', yDeg = '+yDeg+', zDeg = '+zDeg);
  xDeg = (mpx - mouseLocX)/2; //Later, we need to divide by 2 to slow down //The Y axis is inverted; We need to divide by 2.5 to slow down
  console.log(mpy+' = mpy - before if - mouseLocY = '+mouseLocY);
  if (xDeg < -45) {
    zDeg = -1*(mpy - mouseLocZ)/2.5;
    yDeg = yDeg;
    mouseLocZ=event.pageY;
  } else {
    console.log(mpy+' = mpy - if False - mouseLocY = '+mouseLocY);
    yDeg = -1*(mpy - mouseLocY)/2.5;
    console.log(mpy+' = mpy - yDeg set - mouseLocY = '+mouseLocY);
    zDeg = zDeg;
    mouseLocZ=event.pageY;
  }
  console.log(yDeg);
  console.log('mouseLocY = '+mouseLocY);
  var xDegCSS = 'rotateY('+xDeg+'deg)';
  var xyDegCSS = xDegCSS+' rotateX('+yDeg+'deg)';
  var xyzDegCSS = xyDegCSS+' rotateZ('+zDeg+'deg)';
  $('.cube').css('transform', xyzDegCSS);
  // $('.cube').css('transform', xDegCSS);
  // $('.cube').css('transform', yDegCSS);
  // $('.cube').css('trasnform', curPos);
}
