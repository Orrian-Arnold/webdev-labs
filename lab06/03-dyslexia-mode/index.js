/* 
  See Smashing Magazine Tutorial:
  https://www.smashingmagazine.com/2021/11/dyslexia-friendly-mode-website/
*/
const changeMode = (ev) => {
  const elementClicked = ev.currentTarget;
  document.querySelector('body').style.fontSize = 20 + 'px'
  document.querySelector('body').style.lineHeight = 65 + 'px'
  document.querySelector('body').style.ligatures = 'no-common-ligatures'
  document.querySelector('body').style.letterSpacing = 0.35 + 'ch'
  document.querySelector('body').style.fontWeight = 'bold'
  document.querySelector('body').style.lineWidth = 20 + 'px'
  document.querySelector('.content').style.paddingRight = 300 + 'px'
  document.querySelector('.content').style.paddingLeft = 200 + 'px'
  document.querySelector('.content').style.justifyContent = "center"

};



document.querySelector('#dyslexia-toggle').addEventListener('click', changeMode);