var r1=Math.ceil((Math.random())*6);
var r2=Math.ceil((Math.random())*6);

if(r1>r2){
    document.getElementById('result').innerHTML = 'Player 1 Wins!';
}
else if(r2>r1){
    document.getElementById('result').innerHTML = 'Player 2 Wins!';
}
else{
    document.getElementById('result').innerHTML = 'Draw!';
}

var i1=document.getElementById('d1');
s="Images/Dice"+r1+".png";
i1.src= s;

var i2=document.getElementById('d2');
s="Images/Dice"+r2+".png";
i2.src= s;