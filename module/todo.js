import * as Util from "./util.js";

export const todoSection = document.querySelector(".js-toDoSection"),
  toDoForm = todoSection.querySelector(".js-toDoForm"),
  toDoInput = toDoForm.querySelector("input"),
  fullToDo = todoSection.querySelector(".js-toDoComment"),
  todoList = todoSection.querySelector(".js-toDoList");

export const TODOS_LS = "toDos",
  TODOS_NUM = 6;

export let toDos = [];

// Rendering logic.
// load To-Do list on browser.
export function loadToDos() {
  const loadedToDos = localStorage.getItem(TODOS_LS);

  if (loadedToDos !== null) {
    const toDoArr = JSON.parse(loadedToDos);
    toDoArr.forEach((toDo) => paintToDo(toDo.text));
  }

  if (toDos.length === TODOS_NUM) {
    Util.display(fullToDo);
    Util.hide(toDoForm);
  }
}

// Handle to-do submit
export function handleSubmit() {
  event.preventDefault();
  const currentValue = toDoInput.value;
  if (currentValue.length === 0) {
    return;
  }
  if (toDos.length < 5) {
    paintToDo(currentValue);
  } else {
    paintToDo(currentValue);
    Util.display(fullToDo);
    Util.hide(toDoForm);
  }
  toDoInput.value = "";
}

//Paint to-do if value has characters.
export function paintToDo(text) {
  const li = document.createElement("li"),
    delBtn = document.createElement("button"),
    span = document.createElement("span"),
    id = toDos.length + 1;

  const toDoObj = {
    text,
    id,
  };

  toDos.push(toDoObj);

  Util.fadeIn(delBtn, "❌");
  delBtn.addEventListener("click", handleBtn);
  Util.fadeIn(span, text);
  li.classList.add("toDo");
  li.appendChild(delBtn);
  li.appendChild(span);
  li.id = id;
  todoList.appendChild(li);
  saveToDo();
}

// Save to-dos in LS.
export function saveToDo() {
  localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
}

// Handle del Button.
export function handleBtn(event) {
  const target = event.target.parentNode,
    cleanToDos = toDos.filter((toDo) => toDo.id !== parseInt(target.id));

  Util.fadeOut(target);
  toDos = cleanToDos;
  saveToDo();
  Util.display(toDoForm);
  Util.hide(fullToDo);
}

export * from "./todo.js";
