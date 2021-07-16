var j = 0;  // animation control iterator

var charsToAnimate = document.getElementById("toAnimate").innerHTML;
var numOfCharacters = charsToAnimate.length;
var animationWrapper = document.getElementById("animationWrapper");
var characters = new Array();

addSpansToNode();

/*
 *  make span's out of the text node and add it to the DOM
 *  fill the characters array with the span's for later  
 * 
 */
function addSpansToNode() {
  for (i = 0; i < numOfCharacters; i++) {
    var white = new RegExp(/^\s$/);  // catch the whitespace
    var span = document.createElement('span');
    span.className = ('position-me');
    
    /*
     *  turn white spaces into &nbsp; because of
     *  display:inline-block
     */
    if (white.test(charsToAnimate.charAt(i))) {
      span.innerHTML = "&nbsp;";
    }
    else {
      span.innerHTML = charsToAnimate.charAt(i);
    }
    
    if (charsToAnimate.charAt(i) == "❤") {
      span.className = "position-me s-lovely";
    }
    
    animationWrapper.appendChild(span);
    
    // white space animation -> nope!!!
    if (!white.test(charsToAnimate.charAt(i))) {
      span.innerHTML = charsToAnimate.charAt(i) + '<span class="animate-me"><a href="https://twitter.com/CheQuery" target="_blank">' + charsToAnimate.charAt(i); + '</a></span>';
    }
    
    
  }
  
  characters = document.getElementsByClassName('animate-me');
  
  // hide the reference span
  document.getElementById("toAnimate").className = 's-hidden';
}

/*
 *  add an event listener to our character
 *  start the animation by adding the animate class
 */
function animate() {
  characters[j].addEventListener("webkitAnimationStart", listener, false);
  characters[j].addEventListener("MSAnimationStart", listener, false);
  characters[j].addEventListener("animationstart", listener, false);
  characters[j].addEventListener("oanimationstart", listener, false);
  
  characters[j].addEventListener("webkitAnimationEnd", listener, false);
  characters[j].addEventListener("MSAnimationEnd", listener, false);
  characters[j].addEventListener("animationend", listener, false);
  characters[j].addEventListener("oanimationend", listener, false);
  
  characters[j].className = "animate-me s-animating" ;
}

/*
 *  when the animation is finished get rid of the animate class
 *  increase the iterator so the animation is ready for the next
 *  character
 */
function listener(e) {
  switch(e.type) {
    case "webkitAnimationEnd":
    case "MSAnimationEnd":
    case "animationend":
    case "oanimationend":
      characters[j].className = "animate-me";
      
      j++;
      
      if (j >= characters.length) {
        j = 0;
        // break;  // uncomment if you want to animate only once
      }  
      
      animate();
  }
}
