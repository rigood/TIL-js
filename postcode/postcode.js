const searchBtn = document.getElementById("search-btn");
const postcode = document.getElementById("postcode");
const roadAddress = document.getElementById("road-address");
const jibunAddress = document.getElementById("jibun-address");
const detailAddress = document.getElementById("detail-address");
const extraAddress = document.getElementById("extra-address");

function focusDetailAddressInput(state) {
  // 사용자가 검색 결과를 선택하여 팝업창을 닫은 경우
  if (state === "COMPLETE_CLOSE") {
    detailAddress.focus();
  }
}

function openPostcodeSearch(data) {
  // 우편번호와 도로명주소, 지번주소를 해당 필드에 넣는다.
  postcode.value = data.zonecode;
  roadAddress.value = data.roadAddress;
  jibunAddress.value = data.jibunAddress;

  // 참고항목 설정하기
  let extraRoadAddr = "";

  // 법정동명이 있을 경우 참고항목에 추가한다. (법정리는 제외)
  // 법정동의 경우 마지막 문자가 "동/로/가"로 끝난다.
  if (data.bname !== "" && /[동|로|가]$/g.test(data.bname)) {
    extraRoadAddr += data.bname;
  }

  // 건물명이 있고, 공동주택일 경우 참고항목에 추가한다.
  if (data.buildingName !== "" && data.apartment === "Y") {
    extraRoadAddr +=
      extraRoadAddr !== "" ? ", " + data.buildingName : data.buildingName;
  }

  // 표시할 참고항목이 있을 경우, 괄호까지 추가한 최종 문자열을 만든다.
  if (extraRoadAddr !== "") {
    extraRoadAddr = " (" + extraRoadAddr + ")";
  }

  // 참고항목이 있는 경우 해당 필드에 넣는다.
  if (data.roadAddress !== "") {
    extraAddress.value = extraRoadAddr;
  } else {
    extraAddress.value = "";
  }
}

function handlePostcodSearch() {
  const width = 500;
  const height = 500;

  new daum.Postcode({
    oncomplete: openPostcodeSearch,
    onclose: focusDetailAddressInput,
    width,
    height,
  }).open({
    popupTitle: "우편번호 찾기",
    left: window.screen.width / 2 - width / 2,
    top: window.screen.height / 2 - height / 2,
  });
}

searchBtn.addEventListener("click", handlePostcodSearch);
