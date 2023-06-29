
var numberOfDrums = document.querySelectorAll(".drum").length;

for(var i=0; i<numberOfDrums; i++){
    
    //if the button is clicked then this addeventlistener will be called
    document.querySelectorAll(".drum")[i].addEventListener("click",function(){
        
       var buttonElement = this.innerHTML;

       makeSound(buttonElement);
       buttonAnimation(buttonElement);

      
       
    
});

}


//if the key board key is pressed then this addeventlistener will be called
document.addEventListener("keydown",function(event){

   makeSound(event.key);
   buttonAnimation(event.key);
});

function makeSound(key){
   switch(key){
      case 'w':
         var tom1 = new Audio("sounds/tom-1.mp3");
         tom1.play();
      break;

      case 'a':
         var tom2 = new Audio("sounds/tom-2.mp3");
         tom2.play();
      break;

      case 's':
         var tom3 = new Audio("sounds/tom-3.mp3");
         tom3.play();
      break;

      case 'd':
         var tom4 = new Audio("sounds/tom-4.mp3");
         tom4.play();
      break;

      case 'j':
         var snare =  new Audio("sounds/snare.mp3");
         snare.play();
      break;

      case 'k':
         var crash =  new Audio("sounds/crash.mp3");
         crash.play();
      break;

      case 'l':
         var kick =  new Audio("sounds/kick-bass.mp3");
         kick.play();
      break;

      default:
         console.log(buttonElement);
         
      

    }


}


//Button Animation
function buttonAnimation(buttonKey){

   var currkey = document.querySelector("." + buttonKey);

   currkey.classList.add("pressed");

   //setting timeout function to remove the pressed class after 0.1ms

   setTimeout(function(){
      currkey.classList.remove("pressed");
   },100);


}
