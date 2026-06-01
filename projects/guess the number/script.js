let x=Math.floor(Math.random()*100)+1;
let count=0;
let y=-1;
while(x!=y){
count++;

 y=prompt("guess the number");

y=Number(y);

if (x==y) {
    alert("correct guess");
    break;
}
else if (x<y) {
    alert("too high");
}
else {
    alert("too low");
}
}
alert("final score is " + (100-count));