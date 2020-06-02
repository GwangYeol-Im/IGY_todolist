import * as Bg from "./module/bg.js";
import * as Clock from "./module/clock.js";
import * as Greeting from "./module/greeting.js";
import * as Todo from "./module/todo.js";
import * as Weather from "./module/weather.js";

export function init() {
  //Background image.
  const randomNum = Bg.getRandom();
  Bg.paintBg(randomNum);

  //Real time clock.
  setInterval(Clock.getTime, 1000);

  //Greetings.
  Greeting.loadName();

  //To-do form.
  Todo.loadToDos();
  Todo.toDoForm.addEventListener("submit", Todo.handleSubmit);

  //Weather.
  Weather.loadCoords();
}

init();
