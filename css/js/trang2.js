const click = document.getElementById('three')
const container = document.querySelector('#container')
const interval =3000;
let one =document.querySelector('#two')
let index=1;

const firstClone = one[0].cloneNode(true);
const lastClone = one[slides.length -1].cloneNode(true);

firstClone.id = 'first-Clone'
lastClone.id ='last-Clone'

click .append(firstClone);
click .prepend(lastClone);

const slideWidth = one[index].clienWidth;

click.style.transform=`tranlateX(${-slideWidth*index}px)`;
const startSlide = ()=>{
  setInterval(()=>{
       index++;
       click.style.transform=`tranlateX(${-slideWidth*index}px)`;
  },interval);
};
startSlide();
