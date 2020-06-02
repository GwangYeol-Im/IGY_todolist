import * as Util from "./util.js";
import * as Todo from "./todo.js";
import * as Greeting from "./greeting.js";
import * as Weather from "./weather.js";

export const reset = document.querySelector(".js-reset");

//rendering logic.
//Paint reset button.
export function paintReset() {
  const text = "Reset";
  Util.fadeIn(reset, text);
}

reset.addEventListener("click", entireReset);

export function entireReset() {
  localStorage.removeItem("currentUser");
  localStorage.removeItem("toDos");
  Util.hide(Greeting.greeting, Todo.toDoForm, Todo.fullToDo, Weather.weather);
  Todo.clearToDos();
  Todo.clearToDoList();
  reset.innerText = "";

  Greeting.loadName();
  Todo.loadToDos();
  Todo.toDoForm.addEventListener("submit", Todo.handleSubmit);
  Weather.loadCoords();
}

export * from "./reset.js";
