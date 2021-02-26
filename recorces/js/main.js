$(document).ready(function(){
   $(".slider").mouseover(function(){
       $(".slide-btn").show();
   });
    $(".bg-img").mouseout(function(){
       $(".slide-btn").hide(); 
    });
    $(".slide-btn").mouseover(function(){
        $(this).show();
    })
    $(".slide-btn").mouseout(function(){
       $(".slide-btn").show(); 
    });
});

var photos = ["images/person-1.jpg","images/person-2.png","images/person-3.png"];
var picture = document.querySelector(".slider");
var count = 0;
function next(){
    count++;
    if(count>photos.length-1){
        count = 0;
        picture.src=photos[count];
    }
    else
        picture.src=photos[count];
}
var count2=photos.length-1;
function prev(){
    count2--;
    if(count2<=0){
        count2=photos.length-1;
        picture.src=photos[count2];
    }
    else
        picture.src=photos[count2];
}