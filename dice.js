var randomNumber1=Math.floor(Math.random() *6)+1;
var randomgImg1="./dice"+randomNumber1+".png";
var image1=document.querySelectorAll("img")[0];
image1.setAttribute("src",randomgImg1);

var randomNumber2=Math.floor(Math.random() *6)+1;
var randomgImg2="./dice"+randomNumber2+".png";
var image2=document.querySelectorAll("img")[1];
image2.setAttribute("src",randomgImg2);

var heading=document.querySelector("h1");
if (randomNumber1>randomNumber2) {
   
    heading.innerHTML=("Player 1 wins!");
}
else if(randomNumber2>randomNumber1){
  
    heading.innerHTML=("Player 2 wins!");
}
else{
  
    heading.innerHTML=("It,s a Draw!"); 
}

 

 

