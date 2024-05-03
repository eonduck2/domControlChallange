/**
 * * 엘리먼트 append 해주는 함수
 * @param parentEle append 자리를 내어주는 부모 요소
 * @param childEle parentEle에 appending될 자식 요소
 * @param thirdEle 제 3 요소
 */

export default function (parentEle, childEle, thirdEle) {
  if (parentEle == undefined || childEle == undefined) {
    return;
  } else if (parentEle != undefined && childEle != undefined) {
    parentEle.appendChild(childEle);
    return;
  } else {
    if (
      parentEle != undefined &&
      childEle != undefined &&
      thirdEle != undefined
    ) {
      childEle.appendChild(thirdEle);
      return;
    }
  }
}
