"use strict";

export const body = document.querySelector("body");

export const IMG_NUM = 6;

// Get random number.
export function getRandom() {
  const num = Math.floor(Math.random() * IMG_NUM);
  return num;
}

// Paint background image.
export function paintBg(imgNumber) {
  const image = document.createElement("img");
  image.src = `./images/${imgNumber + 1}.jpg`;
  image.classList.add("background");
  body.appendChild(image);
}

export * from "./bg.js";
