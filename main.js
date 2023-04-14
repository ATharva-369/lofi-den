const jazz = document.getElementById("jazz");
const shiloh = document.getElementById("shiloh");
const slow = document.getElementById("slow");
const chill = document.getElementById("chill");

jazz.addEventListener('click',function(){
  const iframe = document.getElementById("livestream");
  iframe.setAttribute("src","https://www.youtube.com/embed/kgx4WGK0oNU?autoplay=1");

})
chill.addEventListener('click',function(){
  const iframe = document.getElementById("livestream");
  iframe.setAttribute("src","https://www.youtube.com/embed/jfKfPfyJRdk?autoplay=1");

})
shiloh.addEventListener('click',function(){
  const iframe = document.getElementById("livestream");
  iframe.setAttribute("src","https://www.youtube.com/embed/epaP2LCCuVE?autoplay=1");

})
slow.addEventListener('click',function(){
  const iframe = document.getElementById("livestream");
  iframe.setAttribute("src","https://www.youtube.com/embed/rUxyKA_-grg?autoplay=1");

})