/*
    Hints: 
    1. Attach click event handlers to all four of the 
       buttons (#default, #ocean, #desert, and #high-contrast).
    2. Modify the className property of the body tag 
       based on the button that was clicked.
*/

const changeTheme = (ev) => {
   const elementClicked = ev.currentTarget;
   if (elementClicked.id == 'ocean'){
      document.querySelector('body').className = 'ocean'
   }
   if (elementClicked.id == 'high-contrast'){
      document.querySelector('body').className = 'high-contrast'
   }
   if (elementClicked.id == 'desert'){
      document.querySelector('body').className = 'desert'
   }
   if (elementClicked.id == 'default'){
      document.querySelector('body').className = ''
   }
};



document.querySelector('#default').addEventListener('click', changeTheme);
document.querySelector('#desert').addEventListener('click', changeTheme);
document.querySelector('#ocean').addEventListener('click', changeTheme);
document.querySelector('#high-contrast').addEventListener('click', changeTheme);