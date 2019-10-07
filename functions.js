function sayHelloWorld(){
    console.log("Hello, world!");
  }
  sayHelloWorld(); 
sayHelloWorld();

function sayJavaScript(){
    console.log("I Love Java Script!")
}
sayJavaScript();


function greetAFriend(friendName){
    console.log(`Hello, ${friendName}!`)
  }
greetAFriend("Drew");
greetAFriend("Isaiah");


function greetAFriend2(friendName, timeOfDay){
    var greeting;
    if(timeOfDay === "morning"){
      greeting = "Good morning";
    } else if (timeOfDay === "afternoon"){
      greeting = "Good afternoon";
    } else if (timeOfDay === "evening"){
      greeting = "Good evening";
    } else {
      greeting = "Hello";
    }
    var personalGreeting = `${greeting}, ${friendName}!`;
    console.log(personalGreeting);
  }
  
  greetAFriend2("Todd", "evening"); // Good evening, Todd!
  greetAFriend2("Jamie", "morning"); // Good morning, Jamie!
  greetAFriend2("Hannah", "afternoon"); // Good afternoon, Hannah!
  greetAFriend2("Norman", "midnight"); // Hello, Norman!

  function dreamVacation(name, destination){
    console.log("David would love to visit Cumberland Maryland.")
}
dreamVacation();


function makeAPizza(crustType, size, toppingsArray){
    var finishedPizza = `A ${size} pizza with ${crustType} crust and ${toppingsArray.join(", ")} on top.`
    return finishedPizza;
  }
  
  var myPizza = makeAPizza("wheat", "large", ["green peppers", "onions", "pepperoni"]);
  
  var yourPizza = makeAPizza("white", "medium", ["anchovies", "feta", "pineapple"]);
  
console.log(myPizza);
console.log(yourPizza);


function makeATaco(typeOfshell, topping){
    var finishedTaco = `Your ${typeOfshell} taco with ${topping} is ready.`
    return finishedTaco;
  }
  
  var myTaco = makeATaco("soft shell", "chicken"); 
  
  var yourTaco = makeATaco("Hard", "Beef"); 
  
console.log(myTaco);
console.log(yourTaco);


function add(num1,num2){
    var sumOfnumbers =num1+num2;
    console.log(sumOfnumbers)
}
function subract(num1,num2){
    var diffrenceOfnumbers =num1-num2;
    console.log(diffrenceOfnumbers)
}
function multiply(num1,num2){
    var productOfnumbers =num1*num2
    console.log(productOfnumbers)
}
function divide(num1,num2){
    var quotientOfnumbers =num1/num2
    console.log(quotientOfnumbers)
}
add(1,1);
subract(2,2);
multiply(3,3);
divide(4,4);








