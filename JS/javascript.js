///////////////////////
// Owner: Aida Tuhcic
// Original Date: December 8th
// Date Changed: December 9th 
// Changes done on December 9th: Added detailed comments on what the JavaScript code does. 
// Purpose: The purpose of this JavaScript function is to call on the navigation bar from the html and makes sure it resizes. 
// Source: https://www.w3schools.com/howto/howto_js_responsive_navbar_dropdown.asp
//////////////////////
// function is used to described how this particular block of code will run. 
// function myFunction is an expression. 
function myFunction() {
    // var is the variable storing the data.
    // = (equals too). 
    // getElementById is returning the element in the id property to match the specific string (myTopnav). 
    var x = document.getElementById("myTopnav");
    // classList = return the class name to the relative element. 
    // classList(contains) will return if that parameter/token is true. 
    if (!x.classList.contains("responsive")) {
        // classList(add) will add the specific parameter/token. 
        x.classList.add("responsive");
    } else {
        // classList(remove) will remove the specific parameter/token if false.
        x.classList.remove("responsive");
    }
  }
// End Owner: Aida Tuhcic. 

///////////////////////
// Owner: Sunayana Sashikumar
// Date: December 9th
// Date Changed: December 9th 
//From: https://www.w3schools.com/howto/howto_js_scroll_to_top.asp
//////////////////////
//to get the button
mybutton = document.getElementById("back");
// code to ensure that when button is clicked on, user is taken back to the top of the page
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
} 
// End Owner: Sunayana Sashikumar
