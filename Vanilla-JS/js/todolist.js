const toDoFrom = document.querySelector(".js-toDoForm"),
  toDoInput = toDoFrom.querySelector("input"),
  toDoLIst = document.querySelector(".js-toDoList")

const TODOS_LS = "toDos"
let toDos = [];

// 리스트를 삭제하는 함수
 function deleteTodo(e){
   e.preventDefault();
   const btn = e.target.parentNode

   toDoLIst.removeChild(btn)

   const cleanToDos = toDos.filter((toDo) =>{
      return toDo.id !== parseInt(btn.id)
   })
   toDos = cleanToDos 

   saveToDos()
}

// localStorage에 todo내용을 저장해 준다.
function saveToDos(){
  localStorage.setItem(TODOS_LS, JSON.stringify(toDos))
  // JSON.stringify(toDos) -> 자바스크립트 object를 string으로 바꿔준다.
}

// todolist ul태그를 보여주는 함수
function paintToDo(text){
  const li = document.createElement("li");
  const span = document.createElement("span");
  const delBtn = document.createElement("button");

  
  const newId = toDos.length + 1

  delBtn.innerText = "×"
  span.innerText = text

  li.appendChild(span);
  li.appendChild(delBtn);
  toDoLIst.appendChild(li)

  // li 에 id를 줘서 해당 id만 삭제 할수있게
  li.id = newId;

  delBtn.addEventListener("click", deleteTodo)

  const toDoObj = {
    text : text,
    id: newId
  }
  toDos.push(toDoObj)
  // 모든 일을 다 끝낸후 localStorage에 저장.
  saveToDos()
}

function handleSubmit(e){
  e.preventDefault();
  // input에 들어오는 값
  const currentValue = toDoInput.value;
  paintToDo(currentValue);
  // 내용을 입력한후 입력한 글자들을 초기화 시켜준다.
  toDoInput.value = ""
}

function loadToDos(){
  const loadedToDos = localStorage.getItem(TODOS_LS);
  // 항상 존재해 있다.
  if (loadedToDos !== null){
    // string을 object로 바꿔준다.
    const parsedToDos = JSON.parse(loadedToDos)
    console.log(parsedToDos);
    parsedToDos.forEach((toDo)=>{
      paintToDo(toDo.text)
      
    })
  } 
}

function init(){
  loadToDos();
  toDoFrom.addEventListener("submit", handleSubmit)
}
init()