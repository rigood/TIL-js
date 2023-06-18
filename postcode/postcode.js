const searchBtn = document.getElementById("search-btn");
const postcode = document.getElementById("postcode");
const roadAddress = document.getElementById("road-address");
const jibunAddress = document.getElementById("jibun-address");

const width = 500;
const height = 500;

function openPostcodeSearch() {
  new daum.Postcode({
    oncomplete: function (data) {
      const roadAddr = data.roadAddress;
      let extraRoadAddr = "";

      // 법정동명이 있을 경우 추가한다. (법정리는 제외)
      // 법정동의 경우 마지막 문자가 "동/로/가"로 끝난다.
      if (data.bname !== "" && /[동|로|가]$/g.test(data.bname)) {
        extraRoadAddr += data.bname;
      }
      // 건물명이 있고, 공동주택일 경우 추가한다.
      if (data.buildingName !== "" && data.apartment === "Y") {
        extraRoadAddr +=
          extraRoadAddr !== "" ? ", " + data.buildingName : data.buildingName;
      }
      // 표시할 참고항목이 있을 경우, 괄호까지 추가한 최종 문자열을 만든다.
      if (extraRoadAddr !== "") {
        extraRoadAddr = " (" + extraRoadAddr + ")";
      }

      postcode.value = data.zonecode;
      roadAddress.value = roadAddr;
      jibunAddress.value = data.jibunAddress;
    },
    onresize: function (size) {},
    onclose: function (state) {},
    onsearch: function () {},
    width,
    height,
    animation: false,
    focusInput: true,
  }).open({
    popupTitle: "우편번호 찾기",
    popupKey: "popup1",
    left: window.screen.width / 2 - width / 2,
    top: window.screen.height / 2 - height / 2,
  });
}

searchBtn.addEventListener("click", openPostcodeSearch);
