"use strict";

export const clockContainer = document.querySelector(".js-clock"),
  clockTitle = clockContainer.querySelector(".js-title");

// Real time clock.
export function getTime() {
  const date = new Date(),
    hours = date.getHours(),
    minutes = date.getMinutes();

  clockTitle.innerText = `${hours < 10 ? "0" + hours : hours}:${
    minutes < 10 ? "0" + minutes : minutes
  }`;
}

export * from "./clock.js";
