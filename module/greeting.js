import * as Util from "./util.js";
import * as Todo from "./todo.js";
import * as Weather from "./weather.js";
import * as Reset from "./reset.js";

export const greetContainer = document.querySelector(".js-greetSection"),
  nameForm = greetContainer.querySelector(".js-nameForm"),
  question = greetContainer.querySelector(".js-question"),
  input = greetContainer.querySelector("input"),
  greetAlert = greetContainer.querySelector(".js-greetAlert"),
  greeting = greetContainer.querySelector(".js-greetings");

export const USER_LS = "currentUser";

// Rendering logic
// Load user name when rendered.
export function loadName() {
  const currentUser = localStorage.getItem(USER_LS);
  if (currentUser === null) {
    askForName();
  } else {
    paintGreeting(currentUser);
    Todo.paintToDoForm();
    Util.display(Todo.toDoForm, Weather.weather);
    Util.hide(greetAlert);
    Reset.paintReset();
  }
}

// Ask for name if there aren't user name in LS.
export function askForName() {
  Util.display(nameForm);
  question.innerText = "What is your name?";
  nameForm.addEventListener("submit", handleSubmit);
}

// Name form submit event listener.
export function handleSubmit(event) {
  event.preventDefault();
  const currentValue = input.value;
  if (currentValue.length === 0) {
    paintAlert();
  } else {
    Util.hide(nameForm, greetAlert);
    Util.clearText(greetAlert);
    saveName(currentValue);
    paintGreeting(currentValue);
    Todo.paintToDoForm();
    Util.display(Todo.toDoForm, Weather.weather);
    Reset.paintReset();
    input.value = "";
  }
}

// Paint alert if value has no character.
export function paintAlert() {
  Util.display(greetAlert);
  const text = "Name need to be at least 1 characters long.";
  Util.fadeIn(greetAlert, text);
}

// Save user name in LS.
export function saveName(text) {
  localStorage.setItem(USER_LS, text);
}

// Paint greeting.
export function paintGreeting(text) {
  const date = new Date(),
    hour = date.getHours();

  let welcome = "";

  if (hour < 6) {
    welcome = `Good night, ${text}.`;
  } else if (hour < 12) {
    welcome = `Good morning, ${text}.`;
  } else if (hour < 18) {
    welcome = `Good afternoon, ${text}.`;
  } else {
    welcome = `Good evening, ${text}.`;
  }

  Util.fadeIn(greeting, welcome);
}

export * from "./greeting.js";
