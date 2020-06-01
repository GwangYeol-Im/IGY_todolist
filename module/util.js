"use strict";

// Display element on browser.
export function display(element) {
  element.classList.remove("none");
  element.classList.add("active");
}

export function hide(element) {
  element.classList.remove("active");
  element.classList.add("none");
}

//Fade-in motion function
export function fadeIn(element, text = "") {
  let op = 0;
  element.style.opacity = op;
  element.innerText = text;
  const timer = setInterval(incOpacity, 50);
  function incOpacity() {
    op += 0.1;
    element.style.opacity = op;
    op > 0.9 ? clearInterval(timer) : null;
  }
}

//Fade-out motion function
export function fadeOut(element) {
  let op = 1;
  element.style.opacity = op;
  const timer = setInterval(decOpacity, 50),
    parent = element.parentNode;
  function decOpacity() {
    op -= 0.1;
    element.style.opacity = op;
    if (op < 0.1) {
      clearInterval(timer);
      parent.removeChild(element);
    }
  }
}

export * from "./util.js";
