const bgForm = document.querySelector(".background-img")

const IMG_NUMBER = 5;

function handleImgLoad(){

}

function paintImage(imgNum){
  const image = new Image();
  image.src = `images/${imgNum + 1 }.jpg`
  bgForm.appendChild(image)
  image.classList.add('bgImage')
}

function genRandom(){
  const number = Math.floor(Math.random() * IMG_NUMBER )
  return number
}

function init(){
  const randomNumber = genRandom()
  paintImage(randomNumber)
}
init()