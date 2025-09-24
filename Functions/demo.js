var a=10;
var b=20;
console.log(a+b);

// Function to add two numbers

function add(){
    console.log(a+b);
}

// Function to print phone names

function samsung(){
    console.log("This is samsung phone ");
}

function apple(){
    console.log("This is apple phone");
}

function oppo(){
    console.log("This is oppo");
}

function redmi(){
    console.log("This is redmi phone");
}

samsung();
add();

var factor="Kamal";
var fplayer="Dhoni";
var fmovie="Anbe sivam";

function Favorite(){
    console.log("Favorite Actor:"+factor);
    console.log("Favorite Player:"+fplayer);
    console.log("Favorite Movie:"+fmovie);
}

Favorite();

// Area of rectangle

function area(l,b){
    console.log("Area of rectangle:"+(l*b));
    return (l*b);
}

c=area(10,20);
console.log(c);

// Reverse the numbers from 10 to 1

for(i=10;i>=1;i--){
    console.log(i);
}

// Print even numbers between 1 to 10

for(i=1;i<=10;i++){
    if(i%2==0){
        console.log(i);
    }
}