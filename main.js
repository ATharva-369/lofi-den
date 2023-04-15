const jazz = document.getElementById("jazz");
const shiloh = document.getElementById("shiloh");
const slow = document.getElementById("slow");
const chill = document.getElementById("chill");
const change = document.getElementById("change");
const livestream = document.getElementById("livestream");
var currentImg = 0;
const buttonSound1 = new Audio("audio/button1.mp3");
const buttonSound2 = new Audio("audio/button2.mp3");

  document.body.style.backgroundImage = `url(images/background0.jpg)`;

jazz.addEventListener('click',function(){
  const iframe = document.getElementById("livestream");
  iframe.setAttribute("src","https://www.youtube.com/embed/kgx4WGK0oNU?autoplay=1");
  buttonSound1.play();

})
chill.addEventListener('click',function(){
  const iframe = document.getElementById("livestream");
  iframe.setAttribute("src","https://www.youtube.com/embed/jfKfPfyJRdk?autoplay=1");
  buttonSound1.play();

})
shiloh.addEventListener('click',function(){
  const iframe = document.getElementById("livestream");
  iframe.setAttribute("src","https://www.youtube.com/embed/epaP2LCCuVE?autoplay=1");
  buttonSound1.play();

})
slow.addEventListener('click',function(){
  const iframe = document.getElementById("livestream");
  iframe.setAttribute("src","https://www.youtube.com/embed/rUxyKA_-grg?autoplay=1");
  buttonSound1.play();

})
change.addEventListener('click',function(){
  if(currentImg!=4){
  currentImg++;
  document.body.style.backgroundImage = `url(images/background${currentImg}.jpg)`
  console.log("hello")
  }
  else{
    currentImg = 0;
    document.body.style.backgroundImage = `url(images/background${currentImg}.jpg)`
  }
  buttonSound2.play()
})