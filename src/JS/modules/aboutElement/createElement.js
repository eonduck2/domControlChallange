/**
 * * 엘리먼트 생성해주는 함수, class, id를 통해 식별자를 부여할 수 있다.
 * @param element 요소
 * @param className 요소의 class
 * @param id 요소의 id
 */
export default function (element, className, id) {
  if (typeof element !== `object`) {
    const cElement = document.createElement(element);
    if (className != "") {
      cElement.className = className;
    }
    if (id != "") {
      cElement.id = id;
    }
    return cElement;
  }

  if (typeof element === `object`) {
    const cElement = document.createElement(element.element);
    if (element.className != "") {
      cElement.className = element.className;
    }

    if (element.id != "") {
      cElement.id = element.id;
    }
    return cElement;
  }
}
