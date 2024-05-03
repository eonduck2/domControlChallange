// ! 특정 조건에 따른 이벤트 처리 필수임
// ? -> 조건 처리가 없다면 elementForEvent가 모든 이벤트 속성을 받아내기 때문

/**
 * @param elementForEvent 이벤트 처리가 된 후 return되는 element
 */
export default function (elementForEvent) {
  // if(elementForEvent.window)
  elementForEvent.onclick = (e) => {
    if (elementForEvent == `Window`) {
    }
    console.log(`click`);
  };

  elementForEvent.onsubmit = (e) => {
    console.log(`submit`);
  };

  elementForEvent.onmouseenter = (e) => {
    console.log(`mouseEnter`);
  };

  elementForEvent.onmouseleave = (e) => {
    console.log(`mouseLeave`);
  };

  elementForEvent.onload = (e) => {
    console.log(`onload`);
    return;
  };
}
