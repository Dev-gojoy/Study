function getTime() {
  //왜 function getTime을 묶어줬는지 궁금함

  const time = document.querySelector(".time");
  //div class = time을 가져오는 방법
  // document.querySelector -> 이 방식은 요소(element)를 CSS방식으로 검색할 수 있는 방식이다.
  // document.getElementById("id값"); / html에서 div id로 설정하였을 때 불러올 수도 있다.

  const newDate = new Date();
  // let newDate, var newDate는 왜 안 쓴거지 확인 필요

  const hours = String(newDate.getHours()).padStart(2, "0");
  const minutes = String(newDate.getMinutes()).padStart(2, "0");
  const seconds = String(newDate.getSeconds()).padStart(2, "0");

  // padstart란 길이가 '1'인 문자가 있다고 가정하에 padstart()를 써서 string 앞 쪽 시작 부분에 padding을 추가해 요청하는 것
  // ex) 16:50:02 처럼 되게끔
  // 그럼 9~11번까지는 시,분,초가 한 자릿 수여도 두 자리 표기를 희망하니 padstart()에 [2]자리,["0"] 앞 자리 0일 때

  time.innerText = `${hours}:${minutes}:${seconds}`;
}

getTime();
setInterval(getTime, 1000);
// intervals은 '매번' 일어나야 하는 무언가
//ex) 매 2초마다 무슨 일이 일어나게 하고 싶을 때와 같은 경우에 쓰는 게 interval
