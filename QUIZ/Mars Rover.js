var Rover = {
 var rover = {
 position: [0,0],
 direction: 'N'
}function goForward(rover) {
 switch(rover.direction) {
   case 'N':
     rover.position[0]++
     break;
   case 'E':
     rover.position[1]++
     break;
   case 'S':
     rover.position[0]--
     break;
   case 'W':
     rover.position[1]--
     break;
 }
}
goForward(myRover);function goBack(rover){
 switch(rover.direction) {
   case 'N':
     rover.position[0]--
     break;
   case 'E':
     rover.position[1]--
     break;
   case 'S':
     rover.position[0]++
     break;
   case 'W':
     rover.position[1]++
     break;
 }
}
goBack(myRover);function turnLeft(rover){
 rover.direction: 'N' = 'W';
 rover.direction: 'E' = 'N';
 rover.direction: 'S' = 'E';
 rover.direction: 'W' = 'S';
}
turnLeft(myRover);
function turnRight(rover){
 rover.direction: 'N' = 'E';
 rover.direction: 'E' = 'S';
 rover.direction: 'S' = 'W';
 rover.direction: 'W' = 'N';
}
turnRight(myRover); 



var matriz=new Array(10);
for (i = 0; i < 10; i++);
matriz[i]=new Array(10); 
matriz[0][0]="contenido 1";
matriz[0][1]="contenido 2"; 