//Select Items from DOM (html, menu button, overlay, nav list, branding ect)
// all the parts of the menu
const menuBtn = document.querySelector(".menu-btn");
const menu = document.querySelector(".menu"); // created a variable w/ menu and grab 'menu' class
const menuNav = document.querySelector(".menu-nav");
const menuBranding = document.querySelector(".menu-branding");
const navItems = document.querySelectorAll(".nav-item"); // querySelectorall will take all of the elements and put it into the node list. the nodes list is similar to an array

//set the menu's initial state

//use let instead of const  so I can reassign it anytime. const is constant.
let showMenu = false; // variable represnting if menu is open or close. open=true closed = false

menuBtn.addEventListener("click", toggleMenu); /// once it hears a click it willl toggle the menu

function toggleMenu() {
  if (!showMenu) {
    //if not; show menu
    menuBtn.classList.add("close");
    menu.classList.add("show");
    menuNav.classList.add("show");
    menuBranding.classList.add("show");
    //we need to loop through all of the items and then add the show class to each one. bc there are more than one nav link and querySelectAll was used
    navItems.forEach((item) => item.classList.add("show"));

    // set menu state
    showMenu = true;

    // do the opposite for else
  } else {
    /// if menu is shown and we click it then we want to remove all of these classes
    menuBtn.classList.remove("close");
    menu.classList.remove("show");
    menuNav.classList.remove("show");
    menuBranding.classList.remove("show");
    //we need to loop through all of the items and then add the show class to each one. bc there are more than one nav link and querySelectAll was used
    navItems.forEach((item) => item.classList.remove("show"));

    //set menu state
    showMenu = false;
  }
}
// this file just handles the DOM manipulation. for the UI employ sass or css
