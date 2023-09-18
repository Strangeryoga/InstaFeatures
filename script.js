var body=document.querySelector("body")

var courser=document.querySelector(".cursor")

body.addEventListener("mousemove",function(a){
  courser.style.left=a.x+"px"
  courser.style.top=a.y+"px"


})



var strange=document.querySelector("#str");
var btn=document.querySelector("#add");

var flag=0
btn.addEventListener("click", function(){
  if(flag==0){
    strange.innerHTML="Friends"
    strange.style.color='green'
    btn.innerHTML="Remove Friend"
    flag=1
  }else{
    strange.innerHTML="Strange"
    strange.style.color='red'
    btn.innerHTML="Add Friend"
    flag=0 
  }
  
})


var strange1=document.querySelector("#str1");
var btn1=document.querySelector("#add1");

var flag1=0
btn1.addEventListener("click", function(){
  if(flag1==0){
    strange1.innerHTML="Friends"
    strange1.style.color='green'
    btn1.innerHTML="Remove Friend"
    flag1=1
  }else{
    strange1.innerHTML="Strange"
    strange1.style.color='red'
    btn1.innerHTML="Add Friend"
    flag1=0 
  }
  
})


var c1=document.querySelector(".container")
var icon=document.querySelector("#heart")

c1.addEventListener("dblclick",function(){
  console.log("hello world")
  icon.style.transform='translate(-50%,-50%) scale(1)';
  icon.style.opacity=0.8

  setTimeout(function() {
    icon.style.opacity=0;
  }, 1000);

  setTimeout( function() {
    icon.style.transform='translate(-50%,-50%) scale(0)';
  }, 2000);
})


var elem1=document.querySelector(".card");
var elemImage=document.querySelector(".card .image2");

elem1.addEventListener("mousemove",function(a){
  elemImage.style.left=a.x+"px"
  elemImage.style.top=a.y-130+"px"
  elemImage.style.bottom=a.z+"px"
})

elem1.addEventListener("mouseenter", function(){
  elemImage.style.opacity=1
})

elem1.addEventListener("mouseleave", function(){
  elemImage.style.opacity=0
})

var c2=document.querySelector(".container2")
var icon2=document.querySelector("#heart2")



c2.addEventListener("dblclick",function(){
  console.log("hello world")
  icon2.style.transform='translate(-50%,-50%) scale(1)';
  icon2.style.opacity=0.8

  setTimeout(function() {
    icon2.style.opacity=0;
  }, 1000);

  setTimeout( function() {
    icon2.style.transform='translate(-50%,-50%) scale(0)';
  }, 2000);
})

var elem2 =document.querySelector(".card2");
var elemImage2=document.querySelector(".card2 .image4");

elem2.addEventListener("mousemove", function(a){
 
  elemImage2.style.right=a.x-1200+"px"
  elemImage2.style.top=a.y+"px"
  elemImage2.style.bottom=a.z-90+"px"

})

elem2.addEventListener("mouseenter", function(){
  elemImage2.style.opacity=1
})

elem2.addEventListener("mouseleave", function(){
  elemImage2.style.opacity=0
})

var c3=document.querySelector(".container3")
var icon3=document.querySelector("#heart3")

c3.addEventListener("dblclick",function(){
  console.log("hello world")
  icon3.style.transform='translate(-50%,-50%) scale(1)';
  icon3.style.opacity=0.8

  setTimeout(function() {
    icon3.style.opacity=0;
  }, 1000);

  setTimeout( function() {
    icon3.style.transform='translate(-50%,-50%) scale(0)';
  }, 2000);
})
