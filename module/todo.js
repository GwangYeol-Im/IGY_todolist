import * as Util from "./util.js";

export const todoSection = document.querySelector(".js-toDoSection"),
  toDoForm = todoSection.querySelector(".js-toDoForm"),
  toDoInput = toDoForm.querySelector("input"),
  fullToDo = todoSection.querySelector(".js-toDoComment"),
  toDoList = todoSection.querySelector(".js-toDoList");

export const TODOS_LS = "toDos",
  TODOS_NUM = 6;

export let toDos = [];

//Clear toDos.
export function clearToDos() {
  toDos.splice(0);
}

//Clear toDoList.
export function clearToDoList() {
  const toDo = toDoList.querySelectorAll("li");
  toDo.forEach((element) => toDoList.removeChild(element));
}

// Rendering logic.
// load To-Do form on browser.
export function paintToDoForm() {
  if (toDoForm.querySelector("p") !== null) {
    return;
  }
  const p = document.createElement("p");
  p.innerText = "Note your plan.";
  toDoForm.appendChild(p);
}

// load To-Do list on browser.
export function loadToDos() {
  const loadedToDos = localStorage.getItem(TODOS_LS);

  if (loadedToDos !== null) {
    const toDoArr = JSON.parse(loadedToDos);
    toDoArr.forEach((toDo) => paintToDo(toDo.text));
  }

  if (toDos.length === TODOS_NUM) {
    Util.change(toDoForm, fullToDo);
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
    Util.change(toDoForm, fullToDo);
  }
  toDoInput.value = "";
}

//Paint to-do if value has characters.
export function paintToDo(text) {
  console.log("a");
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
  toDoList.appendChild(li);
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
  Util.change(fullToDo, toDoForm);
}

export * from "./todo.js";
