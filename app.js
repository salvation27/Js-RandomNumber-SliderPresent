function sliderFunc(){



const data = [
  'Цитата1',
  'Цитата2',
  'Цитата3',
  'Цитата4',
  'Цитата5',
  'Цитата6',
];


const bgColor = ['#FFA07A','#DA70D6','#00BFFF','#228B22','#FFDEAD','#808000']

const outBlock = document.querySelector('.app')
outBlock.addEventListener('click',nextSlide)

let count = 0
let slideCollection


function createSlide (){
  for(let i = 0;i<data.length;i++ ) {
    let div = document.createElement('div')
    div.classList.add('slide')
    div.style.background = bgColor[3]
    if(i!==0) div.classList.add('hide')
    let text =  document.createElement('div')
    text.textContent = data[i]
    div.append(text)
    outBlock.append(div)
  }
  slideCollection = document.querySelectorAll('.slide')
  // console.log(slideCollection);
}

createSlide()
// console.log(slideCollection);
function nextSlide () {
  // элементу из коллекции добавляем клас хайд
  slideCollection[count].classList.add('hide')
  // делаем условие
  if(count + 1 <  data.length){
    count++
  }
  else {
    count = 0
  }
  slideCollection[count].classList.remove('hide')
  let bg = bgColor[randomInteger(0,bgColor.length-1)]
  slideCollection[count].style.background=bg
}

function randomInteger(min,max){
  let rand = min + Math.random()*( max + 1 -min)
  return Math.floor(rand)
}

}

document.addEventListener('DOMContentLoaded',sliderFunc)