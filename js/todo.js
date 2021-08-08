const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");
let toDos = [];
const TODOS_KEY = "todos";

function saveToDos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));  // JS object 를 string 형식으로 변환
}

function deleteToDo(event) {
    const li = event.target.parentElement;  // target : event 가 일어난 HTML element
    li.remove();  // remove item in To Do list

    toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));  // 배열 요소 중 filter 조건에 true 인 요소들만으로 배열 재생성
    saveToDos();
}

function paintToDo(newToDo) {
    const span = document.createElement("span");
    span.textContent = newToDo.text;

    const button = document.createElement("button");
    button.textContent = "X";
    button.addEventListener("click", deleteToDo);

    const li = document.createElement("li");
    li.id = newToDo.id;
    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
    event.preventDefault();
    const newToDo = toDoInput.value;
    toDoInput.value = "";

    const newToDoObj = {
        text: newToDo,
        id: Date.now(),
    }
    toDos.push(newToDoObj);
    paintToDo(newToDoObj);
    saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);
if (savedToDos) {
    const parsedToDos = JSON.parse(savedToDos);  // string 으로 변환되었던 값을 JS object 로 복구
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDo);  // 배열 각 요소에 대해 callback 함수 수행
}