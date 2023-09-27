//cursor starts here
var body=document.querySelector("body")
var courser=document.querySelector(".cursor")
body.addEventListener("mousemove",function(a){
  courser.style.left=a.x+"px"
  courser.style.top=a.y+"px"


})
//cursor ends here


//card 1 starts here
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
//card 1 ends here


//card 2 starts here
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
//card 2 ends here


//container starts here
var c1=document.querySelector(".container")
var icon=document.querySelector("#heart")
c1.addEventListener("dblclick",function(){
  console.log("hello world")
  icon.style.transform='translate(-50%,-50%) scale(1)';
  icon.style.opacity=0.8
  document.querySelector(".icon").style.color="red";
  setTimeout(function() {
    icon.style.opacity=0;
  }, 1000);
  setTimeout( function() {
    icon.style.transform='translate(-50%,-50%) scale(0)';
  }, 2000);
})
//container ends here


//container like btn starts here 
var l1=document.querySelector(".wrapper")
var i1=document.querySelector(".icon")
var flag2=0
l1.addEventListener("click",function(){
  if(flag2==0){
    i1.style.color= "red";
    flag2=1
  }else{
    i1.style.color= "white";
    flag2=0 
  }
  
})
//container like btn ends here


//card image hover starts here
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
//card image hover ends here


//container 2 starts here
var c2=document.querySelector(".container2")
var icon2=document.querySelector("#heart2")
c2.addEventListener("dblclick",function(){
  console.log("hello world")
  icon2.style.transform='translate(-50%,-50%) scale(1)';
  icon2.style.opacity=0.8
  document.querySelector(".icon2").style.color="red";
  setTimeout(function() {
    icon2.style.opacity=0;
  }, 1000);

  setTimeout( function() {
    icon2.style.transform='translate(-50%,-50%) scale(0)';
  }, 2000);
})
//container 2 ends here


//container2 like btn starts here 
var l2=document.querySelector(".wrapper2")
var i2=document.querySelector(".icon2")
var flag3=0
l2.addEventListener("click",function(){
  if(flag3==0){
    i2.style.color= "red";
    flag3=1
  }else{
    i2.style.color= "white";
    flag3=0 
  }
})
//container2 like btn ends here


//card 2 image hover starts here
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
//card 2 image hover ends here


//container 3 starts here
var c3=document.querySelector(".container3")
var icon3=document.querySelector("#heart3")
c3.addEventListener("dblclick",function(){
  console.log("hello world")
  icon3.style.transform='translate(-50%,-50%) scale(1)';
  icon3.style.opacity=0.8
  document.querySelector(".icon3").style.color="red";

  setTimeout(function() {
    icon3.style.opacity=0;
  }, 1000);

  setTimeout( function() {
    icon3.style.transform='translate(-50%,-50%) scale(0)';
  }, 2000);
})
//container 3 ends here


//container2 like btn starts here 
var l3=document.querySelector(".wrapper3")
var i3=document.querySelector(".icon3")
var flag4=0
l3.addEventListener("click",function(){
  if(flag4==0){
    i3.style.color= "red";
    flag4=1
  }else{
    i3.style.color= "white";
    flag4=0 
  }
})
//container2 like btn ends here


//card1(story) starts here
var arr=[
  {dp: "https://images.unsplash.com/photo-1682687982107-14492010e05e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw0MXx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60"
   ,story: "https://images.unsplash.com/photo-1682687982107-14492010e05e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw0MXx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60"},
  {dp: "https://images.unsplash.com/photo-1695780423226-8d915692f08e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1MHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60" ,
  story: "https://images.unsplash.com/photo-1695780423226-8d915692f08e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1MHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60" },
  {dp: "https://images.unsplash.com/photo-1695747137192-fa5107a579dd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1M3x8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60" ,
  story: "https://images.unsplash.com/photo-1695747137192-fa5107a579dd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1M3x8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60" },
  {dp: "https://images.unsplash.com/photo-1695637453789-428d537b1ff0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5MHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
  story: "https://images.unsplash.com/photo-1695637453789-428d537b1ff0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5MHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60" },
]
var pic=document.querySelector("#storiyan")
var clutter=""
arr.forEach(function(elm,ind){
  clutter+=` <div class="story">
  <img id="${ind}" src=${elm.dp} alt="">
</div>`
})
pic.innerHTML =clutter
pic.addEventListener("click",function(a){
  document.querySelector("#full-screen").style.display="block";
  document.querySelector("#full-screen").style.
  backgroundImage=`url(${arr[a.target.id].story})`
  document.querySelector(".container").style.zIndex=0;
  document.querySelector(".wrapper").style.zIndex=0;
  setTimeout(() => {
    document.querySelector("#full-screen").style.display="none";
    document.querySelector(".container").style.zIndex=0;
    document.querySelector(".wrapper").style.zIndex=0;
  }, 3000);
  setTimeout(() => {
    document.querySelector(".container").style.zIndex=1;
    document.querySelector(".wrapper").style.zIndex=1;
  }, 12000);
 
});
//story ends here

