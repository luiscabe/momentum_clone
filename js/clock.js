const clock = document.querySelector("span#clock");

function getClock() {
    const date = new Date();
    clock.textContent = `${String(date.getHours()).padStart(2, "0")}:${String(date.getMinutes()).padStart(2, "0")}:${String(date.getSeconds()).padStart(2, "0")}`;
    // "string".padStart(자릿수, 기본값) : string 이 차지할 자릿수와 앞자리부터 빈 자리를 채울 값을 지정
    // "string".padEnd(자릿수, 기본값) : string 이 차지할 자릿수와 끝자리부터 빈 자리를 채울 값을 지정
}

getClock();
setInterval(getClock, 1000);  // setInterval() : 특정 시간 주기로 일어나야 하는 동작 설정  <-> clearInterval()
// setTimeout(getClock, 5000);  // setTimeout() : 특정 시간 지난 후 일어나야 하는 동작 설정  <-> clearTimeout()
