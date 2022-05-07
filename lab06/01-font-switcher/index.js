let currentFontsize = 1;

const makeBigger = (ev) => {
   currentFontsize += 0.2
   setFont()
   /*
   const domElement = ev.currentTarget;
   let myHeader = document.getElementByTagName('h1')[0]
   let content = document.getElementByClassName
   console.log(ev);
   currentSize = domElement.style.fontSize
   document.querySelector('h1, .content').style.fontSize = ++currentSize
   alert('make bigger!');*/
};

const makeSmaller = (ev) => {
   currentFontsize -= 0.2
   setFont()
};

const setFont = () =>{
   document.querySelector('.content').style.fontSize = `${currentFontsize}em`;
   document.querySelector('h1').style.fontSize = `${currentFontsize + 0.5}em`;
}

document.querySelector('#a1').addEventListener('click', makeBigger);
document.querySelector('#a2').addEventListener('click', makeSmaller);

