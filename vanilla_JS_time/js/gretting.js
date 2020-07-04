// 사용자 이름저장
const form = document.querySelector(".js-form"),
  input = form.querySelector("input"),
  greeting = document.querySelector(".js-greetings");

const USER_LS = "currentUser",
  SHOWING_CN = "showing";

// 로컬에 유저네임 저장
function saveName(text) {
  localStorage.setItem(USER_LS, text);
}

// 새로고침 되는 이벤트 수정.
function handleSubmit(e) {
  e.preventDefault();

  const currentValue = input.value;

  paintGreeting(currentValue);
  saveName(currentValue);
}

// 이름 요청
function askForName() {
  form.classList.add(SHOWING_CN);
  form.addEventListener("submit", handleSubmit);
}

function paintGreeting(text) {
  form.classList.remove(SHOWING_CN);
  greeting.classList.add(SHOWING_CN);
  greeting.innerText = `Hello ${text}`;
}

function loadName() {
  const currentUser = localStorage.getItem(USER_LS);
  if (currentUser === null) {
    //she is not
    askForName();
  } else {
    //she is
    paintGreeting(currentUser);
  }
}
function init() {
  loadName();
}

init();
