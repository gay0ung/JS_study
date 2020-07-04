// 투두리스트

// 1. 완료 버튼- 환료되면 선 긋고 블러처리
// 2. 수정버튼
// 3. 사용자 수정

const toDoForm = document.querySelector(".js-toDoForm"),
  toDoInput = toDoForm.querySelector("input"),
  toDoList = document.querySelector(".js-toDoList"),
  editBtn = document.querySelector(".edit_btn");
const TODO_LS = "todo";

// 저장해놓는 공간
let toDo = [],
  editValue = "";

// todo를 지우는 함수
function deleteToDo(e) {
  const btn = e.target;
  const li = btn.parentNode;
  //삭제 하는 함수 removeChild()
  toDoList.removeChild(li);

  //filter조건에 일치 하는 항목만 출력
  const cleanToDo = toDo.filter(function (toDo) {
    return toDo.id !== parseInt(li.id);
    // 모든 toDd.id가 li.id와 같지 않을때
  });
  toDo = cleanToDo;
  saveToDo();
}

// 로컬에 저장하는 함수
function saveToDo() {
  // JSON --> JavaScript Object Notation 의 준말/ 데이터를 전달할 때, 자바스크립트가 그걸 다룰 수 있도록 object를 바꿔주는 기능
  localStorage.setItem(TODO_LS, JSON.stringify(toDo));
}

// checkbox 함수
function checkToDo(e) {
  if (e.target.checked === true) {
    e.target.parentNode.classList.add("checked");
    let parentId = e.target.parentNode.id;
    toDo[parentId - 1].status = "done";
    saveToDos();
  } else {
    e.target.parentNode.classList.remove("checked");
  }
}

function paintToDo(text) {
  // console.log(text);
  const lis = document.createElement("li");
  const delBtn = document.createElement("button");
  const span = document.createElement("span");
  const checkBox = document.createElement("input");
  const edit = document.createElement("button");
  const newId = toDo.length + 1;

  delBtn.innerText = "❌";
  checkBox.type = "checkbox";
  span.innerText = text;
  edit.innerText = "edit";

  lis.appendChild(span);
  lis.appendChild(delBtn);
  lis.appendChild(edit);
  lis.id = newId;
  lis.insertBefore(checkBox, lis.firstElementChild);

  toDoList.appendChild(lis);

  delBtn.addEventListener("click", deleteToDo);
  checkBox.addEventListener("click", checkToDo);

  // 수정버튼 클릭 이벤트
  edit.addEventListener("click", function (e) {
    const toDoId = ev.target.parentNode.id;
    const txt = ev.target.parentNode.querySelector("span").innerText;
    toDoInput.value = txt;

    editBtn.addEventListener("click", function (e) {
      e.preventDefault();

      btnEvent(toDoId, txt, span);

      toDoInput.value = "";
    });
  });

  const toDoObj = {
    text: text,
    id: newId,
  };

  toDo.push(toDoObj);
  saveToDo();
}

function btnEvent(id, txt, span) {
  id = id * 1;
  span.innerTex = toDoInput.value;

  toDo[id - 1].text = span.innerText;
  saveToDo();
}

// 입력값 전달 함수
function handleSubmit(e) {
  e.preventDefault();
  const currentValue = toDoInput.value;
  paintToDo(currentValue);
  //글자를 입력하면 다시 초기화
  toDoInput.value = "";
}

function loadedToDo() {
  const loadedToDo = localStorage.getItem(TODO_LS);

  if (loadedToDo !== null) {
    const parsedToDo = JSON.parse(loadedToDo);
    // forEach() --> array에 담겨 있는 것들 각각에 한번씩 함수를 실행시켜주는 기능.
    parsedToDo.forEach(function something(toDo) {
      paintToDo(toDo.text);
    });
  }
}

// 상위 함수
function init() {
  loadedToDo();
  toDoForm.addEventListener("submit", handleSubmit);
}

init();
