import * as Bg from "./bg.js";
import * as Clock from "./clock.js";
import * as Greeting from "./greeting.js";
import * as Todo from "./todo.js";

function init() {
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
}

init();
