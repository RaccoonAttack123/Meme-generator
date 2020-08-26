//variables
let image = document.getElementById('image');
let topText = document.getElementById('top-text');
let bottomText = document.getElementById('bottom-text');
let button = document.getElementById('generate-btn');
let image1 = document.getElementById("img1");
let t1 = document.getElementById("t1");
let t2 = document.getElementById("t2");

//click generate your meme button
button.addEventListener("click", function(){
  if(topText.value.length < 35 && bottomText.value.length < 35){
      document.getElementById("img1").src = image.value;
      t1.innerHTML = topText.value;
      t2.innerHTML = bottomText.value;
      t1.style.color = "white";
      t2.style.color = "white";
    if(topText.value.length < 20 && bottomText.value.length < 20){
      t1.style.fontWeight = "bold";
      t2.style.fontWeight = "bold";
      t1.style.fontSize = "xx-large";
      t2.style.fontSize = "xx-large";
      t1.style.letterSpacing = "8px";
      t2.style.letterSpacing = "8px";
      t1.style.textShadow = "0 0 5px #000000, 0 0 5px #000000;";
      t2.style.textShadow = "0 0 5px #000000, 0 0 5px #000000;";
    }else if (topText.value.length >= 20 || bottomText.value.length >= 20){
      t1.style.fontWeight = "bold";
      t2.style.fontWeight = "bold";
      t1.style.fontSize = "medium";
      t2.style.fontSize = "medium";
      t1.style.letterSpacing = "2px";
      t2.style.letterSpacing = "2px";
      t1.style.textShadow = "0 0 5px #000000, 0 0 3px #000000;";
      t2.style.textShadow = "0 0 5px #000000, 0 0 3px #000000;";  
    }
    alert('Remove the image by clicking it');
  }
  if(topText.value.length >= 35 || bottomText.value.length >= 35){
    alert('Text is too long');
    alert('Remove the image by clicking it');
  }
  if(image.value.length === 0){
    document.getElementById("img1").src = "static/add_img.png";
  }
    topText.value = '';
    bottomText.value = '';
    image.value = '';
})

//clear picture
image1.addEventListener("click", function(){
  image1.src = "static/add_img.png";
  document.getElementById("t1").innerHTML = "";
  document.getElementById("t2").innerHTML = "";
  alert('Image has been removed');
})

