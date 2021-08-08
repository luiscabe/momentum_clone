const loginForm = document.getElementById("login-form");
const loginInput = loginForm.querySelector("input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event) {  // event 발생하여 browser 가 handler 함수를 호출할 때, browser 는 발생한 event 관련 정보를 첫 인자로 넘겨줌
    event.preventDefault();  // event 발생 시에 수행하도록 되어있는 기본 동작들을 방지
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;

    localStorage.setItem(USERNAME_KEY, username);  // browser 상에 데이터를 저장

    paintGreetings(username);

    // const username = loginInput.value;
    // if (username === "") {  // 굳이 JS 에서 예외 검사를 하지 않아도, html 자체적으로 required 속성을 통해 해결 가능
    //     alert("Please write your name");
    // } else if (username.length) {  // 굳이 JS 에서 예외 검사를 하지 않아도, html 자체적으로 maxlength="15" 속성을 통해 해결 가능
    //     alert("Your name is too long")
    // }
}

function paintGreetings(username) {
    greeting.textContent = `Hello ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
} else {
    paintGreetings(savedUsername);
}
