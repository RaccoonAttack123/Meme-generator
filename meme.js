let image = document.getElementById('image');
let topText = document.getElementById('top-text');
let bottomText = document.getElementById('bottom-text');
let button = document.getElementById('generate-btn');
let t1 = document.getElementById("t1");

button.addEventListener("click", function(){
  document.getElementById("img1").src = image.value;
  document.getElementById("t1").innerHTML = topText.value;
  document.getElementById("t2").innerHTML = bottomText.value;
  document.getElementById("t1").style.color = "black";
  document.getElementById("t2").style.color = "black";
  document.getElementById("t1").style.fontWeight = "bold";
  document.getElementById("t2").style.fontWeight = "bold";
  document.getElementById("t1").style.fontSize = "xx-large";
  document.getElementById("t2").style.fontSize = "xx-large";
  if(image.value.length === 0){
    document.getElementById("img1").src = "static/add_img.png";
  }
  topText.value = '';
  bottomText.value = '';
  image.value = '';
})

