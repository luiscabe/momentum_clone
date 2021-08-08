const API_KEY = "241051bf13976dd3ddf8b8d9f247255e";

function onGeoOk(position) {  // getCurrentPosition() 성공 시 JS는 위치 정보가 담긴 GeolocationPosition object 를 인자로 전달함
    const latitude = position.coords.latitude;  // 위도
    const longitude = position.coords.longitude;  // 경도

    // 위도, 경도 정보를 기반으로 해당 지역의 날씨를 알려주는 URL api
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`;
    // JS 로 서버에 request 를 새로고침 없이 HTTP 형식으로 보내고(default : GET), 응답을 promise 형태로 반환받음.
    // promise 가 Response 인스턴스와 함께 이행 상태가 되면, then 내부 코드가 호출되어 response 내용을 json 으로 parsing 함.
    // parsing 이 완료되면, then 내부 코드가 수행되어 weather 및 city 정보를 세팅
    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            const weather = document.querySelector("#weather span:first-child");
            const city = document.querySelector("#weather span:last-child");
            city.innerText = data.name;
            weather.innerText = `${data.weather[0].main} / ${data.main.temp}C`;
        });
}

function onGeoError() {
    alert("Can't find you. No weather for you.");
}

// openweathermap.org/api
navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);  // browser 가 사용자의 현재 위치를 리턴