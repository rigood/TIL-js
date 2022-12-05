# Slider

📆 2022. 12. 5. 월요일

[📙 Tutorial : 바닐라 자바스크립트로 "캐러셀 슬라이더" 만들기](https://youtu.be/l18HCZqBs6I)

- 각 슬라이드를 `position: absolute`로 지정하여 한 줄에 겹치도록 함

  - 슬라이드를 감싸는 부모 요소는 position: relative

<br>

- 슬라이드의 z-index를 0으로 하고, `showing` 이라는 클래스를 붙였을 때 `z-index를 1로 바꿔줌`

<br>

- 자바스크립트를 통해 showing 클래스가 붙어있는 슬라이드를 찾아내고(없으면 첫번째 슬라이드에 showing 클래스 추가하고 종료)

<br>

- 다음 슬라이드로 전환하기 위해, 현재 showing 클래스가 붙어있는 슬라이드에서 showing 클래스를 제거하고, 그 다음 슬라이드(`nextElementSibling`)에 showing 클래스를 붙여줌

  - nextSibling과 nextElementSibling의 공통점: 둘다 같은 노드 레벨의 다음 값을 가져옴
  - nextSibling은 다음 값이 공백이든 텍스트이든 상관없이 가져옴
  - nextElementSibling은 다음 값이 Element(요소)인 경우만 가져옴
