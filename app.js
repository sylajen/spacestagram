'use strict'

const switcher = document.querySelector('.btn');

switcher.addEventListener('click', function() {
    document.body.classList.toggle('dark-theme')
    var className = document.body.className;
    if(className == "light-theme") {
        this.textContent = "Dark";
    }
    else {
        this.textContent = "Light";
    }

    console.log('current class name: ' + className);
});

/* Set the width of the side navigation to 250px */
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
  }
  
  /* Set the width of the side navigation to 0 */
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }

function hscrollbar() {
    /* First, we need the horizontal scroll position of the viewer's display,
       but there are different ways to call it in JS depending on browser.
       I'm using the if/else shorthand notation to detect if a call is legit: 
       somevar = (statement) ? statement_true_value : statement_false_value */
    var left = 
        /* window.pageXOffset should work for most recent browsers: */
        window.pageXOffset ? window.pageXOffset : 
        /* If it DOESN'T, let's try this: */
        document.documentElement.scrollLeft ? document.documentElement.scrollLeft : 
        /* And if THAT didn't work: */
        document.body.scrollLeft;

    /* Now that we have the horizontal scroll position, set #footpanel's left 
       position to NEGATIVE the value, so it APPEARS to follow the scroll: */
    document.getElementById('footpanel').style.left = -left;
}
window.onscroll = hscrollbar; /* Call the function when the user scrolls */
window.onresize = hscrollbar; /* Call the function when the window resizes */