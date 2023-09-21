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
  setTimeout(function() {
    icon.style.opacity=0;
  }, 1000);
  setTimeout( function() {
    icon.style.transform='translate(-50%,-50%) scale(0)';
  }, 2000);
})
//container ends here


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

  setTimeout(function() {
    icon2.style.opacity=0;
  }, 1000);

  setTimeout( function() {
    icon2.style.transform='translate(-50%,-50%) scale(0)';
  }, 2000);
})
//container 2 ends here


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

  setTimeout(function() {
    icon3.style.opacity=0;
  }, 1000);

  setTimeout( function() {
    icon3.style.transform='translate(-50%,-50%) scale(0)';
  }, 2000);
})
//container 3 ends here


//card1(story) starts here
var arr=[
  {dp: "https://images.unsplash.com/photo-1650389176833-8dbb23d0d8f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
   ,story: "https://images.unsplash.com/photo-1650389176833-8dbb23d0d8f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"},
  {dp: "https://images.unsplash.com/photo-1693336428994-c8bb3bdad0d2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80" ,
  story: "https://images.unsplash.com/photo-1693336428994-c8bb3bdad0d2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80" },
  {dp: "https://images.unsplash.com/photo-1693074445833-0fdce5f1f29f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80" ,
  story: "https://images.unsplash.com/photo-1693074445833-0fdce5f1f29f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80" },
  {dp: "https://images.unsplash.com/photo-1692180024031-4882297c4734?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
  story: "https://images.unsplash.com/photo-1692180024031-4882297c4734?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80" },
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
  setTimeout(() => {
    document.querySelector("#full-screen").style.display="none";
  }, 3000);
});
//story ends here