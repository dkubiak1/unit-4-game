

$(document).ready(function(){

var numberComp = 0;

var myNumber = null;
   
var crystal1 = 0;
   
var crystal2 = 0;

var crystal3 = 0;

var crystal4 = 0;

var wins = 0;

var losses =  0;
   
var gamestate = false;

var numbers = ["0"];
  
function getNumberComp() {

    
    rand0 = getRndInteger(14,39)
    numberComp = rand0;
    myNumber = 0;
    numbers = ["0"];
    return gamestate = true;
    

}

function getCrystal1() {
    
       
       rand1 = getRndInteger(1,12)
       crystal1 = rand1;   
       
       if (numbers.indexOf(crystal1) > -1) { //keeps from repeating numbers
           getCrystal1();
           
       }    
       numbers.push(crystal1);  //adds to repeat index
}

function getCrystal2() {
      
       rand2 = getRndInteger(1,12)
      
       
       crystal2 = rand2; 
       
       if (numbers.indexOf(crystal2) > -1) {
           getCrystal2();
           
       }    
       numbers.push(crystal2);      
}

function getCrystal3() {
       
       rand3 = getRndInteger(1,12)
       crystal3 = rand3; 
       
       
        if (numbers.indexOf(crystal3) > -1) {
            getCrystal3();
       }            
       numbers.push(crystal3);
        
        
            
}
function getCrystal4() {
     
       rand4 = getRndInteger(1,12)
       
       
       crystal4 = rand4;
       
       
       if (numbers.indexOf(crystal4) > -1) { 
           getCrystal4();
       }    
       numbers.push(crystal4);  
}

function addCrystal1() {
    if (gamestate){
        myNumber = myNumber + crystal1;
    }

}   
function addCrystal2() {
    if (gamestate){
        myNumber = myNumber + crystal2;
    }
}   
function addCrystal3() {
    if (gamestate){
        myNumber = myNumber + crystal3;
    }
}   
function addCrystal4() {
    if (gamestate){
        myNumber = myNumber + crystal4;
    }
}   

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function winner() {
    if (myNumber == numberComp && gamestate == true) {

    setTimeout(function(){alert ("YOU WIN!!");}, 300);
    
    
    wins++;
  
        $("#wins").html("wins <br>" + wins);
   

   
     reset();
     return gamestate = false;
    }
}

function lose() {
    if (myNumber > numberComp && gamestate == true) {
    
    setTimeout(function(){alert ("YOU LOSE!!!");}, 300);
    
    

    losses++;
    
  
    
    $("#losses").html("losses <br>" + losses);

    reset();
    
    return gamestate = false;
    }
}

function isGamestate() {    
    if (gamestate == true) {

    $("#gamestate").css("background", "green");
    
   
    }
    if (gamestate == false) {

    $("#gamestate").css("background", "red");
    
    
    }
}


function reset() {
    getNumberComp();

    getCrystal1();

    getCrystal2();

    getCrystal3();

    getCrystal4();

    isGamestate();
}


    
    $("#button").on("click", function(){

        reset();
        

        $("#numberComp").html("Target Number <br>" + numberComp);
       
        $("#myNumber").html("My Number <br>" + myNumber);
    });
    
 
    $("#crystal1").on("click", function(){

        addCrystal1();
       
    });

    $("#crystal2").on("click", function(){

        addCrystal2();
       
        
        });

    $("#crystal3").on("click", function(){

        addCrystal3();
      
    });

    $("#crystal4").on("click", function(){

        addCrystal4();
       
    });

      
    $(".crystal").on("click", function(){

        
        $("#myNumber").html("My Number <br>" + myNumber);
           
        lose();
             
        winner();    

        isGamestate();
         
        });
    



    

    



});



