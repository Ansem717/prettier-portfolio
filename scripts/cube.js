/******************************************************************
| GOAL: Identify when the mouse is being held down. While it is   |
|       being held down, if it's position changes, transform the  |
|       entire .cube element by rotating both axis according to   |
|       the position of the cursor.                               |
******************************************************************/

//Setting up an object to hold methods for the cube
var cube = {}
var deg = {
  x: -20,
  y: 0,
  z: 0,
  curX: 0,
  curY: 0,
  curZ: 0
}
var mouseLoc = {
  x = 0,
  y = 0,
  z = 0
}

cube.DnD = function (){
  $('body').mouseup(function(mouse){
    $('body').off('mousemove');
  });
  $('.cube-container').mousedown(function(event){
    mouseLoc.x=event.pageX;
    mouseLoc.y=event.pageY;
    deg.curX=deg.x;
    deg.curY=deg.y;
    deg.curZ=deg.z;
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
  console.log('deg.x = '+deg.x+', deg.y = '+deg.y+', deg.z = '+deg.z);
  deg.x = deg.curX-(-1*(mpx - mouseLoc.x)/2);
  console.log(mpy+' = mpy - before if - mouseLoc.y = '+mouseLoc.y);
  if (deg.x < -45) {
    deg.z = deg.curZ-(-1*(mpy - mouseLoc.z)/2.5);
    mouseLoc.y=event.pageY;
  } else {
    console.log(mpy+' = mpy - if False - mouseLoc.y = '+mouseLoc.y);
    deg.y = deg.curY-((mpy - mouseLoc.y)/2.5);
    console.log(mpy+' = mpy - deg.y set - mouseLoc.y = '+mouseLoc.y);
    mouseLoc.z=event.pageY;
  }
  console.log('deg.y = '+deg.y);
  console.log('mouseLoc.y = '+mouseLoc.y);
  console.log('event.pageY = '+event.pageY);
  var xDegCSS = 'rotateY('+deg.x+'deg)';
  var xyDegCSS = xDegCSS+' rotateX('+deg.y+'deg)';
  var xyzDegCSS = xyDegCSS+' rotateZ('+deg.z+'deg)';
  $('.cube').css('transform', xyzDegCSS);
  // $('.cube').css('transform', xDegCSS);
  // $('.cube').css('transform', yDegCSS);
  // $('.cube').css('trasnform', curPos);
}
