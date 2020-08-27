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

  const newMeme = document.createElement('div');
  newMeme.className = 'container';
  newMeme.id = 'base-image';
  const imageElem = document.createElement('img'); 
  imageElem.className = 'image';
  imageElem.id = 'img1';
  imageElem.src = image.value;

  
  const newTextImageContainer = document.createElement('div');
  newTextImageContainer.className = 'text_image';
  
  const firstText = document.createElement('p');
  firstText.id ='t1';
  firstText.innerHTML = topText.value;
  
  const secondText = document.createElement('p');
  secondText.id ='t1';
  secondText.innerHTML = bottomText.value;
  
  const break1 = document.createElement('br');
  const break2 = document.createElement('br');
  const break3 = document.createElement('br');
  const break4 = document.createElement('br');
   
  const xButton = document.createElement('button')
  xButton.innerHTML = 'X'
  xButton.id= 'x-button';
  xButton.addEventListener('click', () => document.body.removeChild(newMeme));

  document.body.appendChild(newMeme);
  newMeme.appendChild(imageElem);
  newMeme.appendChild(newTextImageContainer);
  newTextImageContainer.appendChild(firstText);
  newTextImageContainer.appendChild(break1);
  newTextImageContainer.appendChild(break2);
  newTextImageContainer.appendChild(break3);
  newTextImageContainer.appendChild(break4);
  newTextImageContainer.appendChild(secondText);
  newMeme.appendChild(xButton);

    topText.value = '';
    bottomText.value = '';
    image.value = '';

    alert("Scroll down to see added images; click 'X' to delete image");
})



//clear picture
// image1.addEventListener("click", function(){
//   image1.src = "static/add_img.png";
//   document.getElementById("t1").innerHTML = "";
//   document.getElementById("t2").innerHTML = "";
//   alert('Image has been removed');
// })

