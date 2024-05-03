import * as createdElement from "./modules/aboutElement/createElement.js";
import * as appendElement from "./modules/aboutElement/appendElement.js";
import * as elementObject from "./modules/aboutElement/elementObject.js";
import * as events from "./modules/events.js";
import * as elemetntDynamicContorl from "./modules/aboutElement/elemetntDynamicContorl.js";

const createHTML = () => {
  // * Parent Elments
  const root = elementObject.default.parentElements.root;
  const main = elementObject.default.parentElements.main;
  // * <div id="root"></div> 자식들 담아두는 array

  const parentElementArrayObject = {
    rootChildren: [
      createdElement.default(elementObject.default.semantics.header),
      createdElement.default(elementObject.default.semantics.main),
    ],

    mainChildren: [
      createdElement.default(elementObject.default.semantics.firstSection),
    ],
  };
  /**
   * * root의 자식을 추가시켜주는 내부 함수
   * @param root <div id="root"></div>
   * @param element <div id="root">자식으로 추가될 element</div>
   */
  const appendRootChildren = () => {
    // * for문으로 append 처리하는 방식
    // for (let i = 0; i < parentElementArrayObject.rootChildren.length; i++) {
    //   appendElement.default(root, parentElementArrayObject.rootChildren[i]);
    //   elementObject.default.parentElements.rootFirstHeader = element[0];
    // }
    // return;
    // * forEach로 변환
    parentElementArrayObject.rootChildren.forEach((element) => {
      appendElement.default(root, element);
      //   ! 위에서 append된 element들이 아래에서 elementObject에 parentElement로서 추가됨 -> 원본 모듈에서는 확인할 수 없으니 반드시 주의할 것
      //   ? -> 하나 하나 생성하는 절차를 거치기 때문에, 미리 HTML에서 만들어 둔 <div id="root"></div>처럼 document에 접근해서 잡아낼 수가 없기 때문
      //   * -> document에 잡아내서 접근한다고 한들, null값으로 반환됨
      //   * rootChildren에 자식 element 추가 시, 아래 조건문과 같이 tagName으로 제어하는 조건문 추가되어야 함
      if (element.tagName.toLowerCase() == `header`) {
        elementObject.default.parentElements.rootFirstHeader = element;
      } else if (element.tagName.toLowerCase() == `main`) {
        elementObject.default.parentElements.rootFirstMain = element;
      }
    });
    /*
     * console.log(elementObject.default.parentElements);
     * 위 콘솔 로그 결과 === 아래
     * <header class="semantic-header"></header>
     * <main class="semantic-main"></main>
     */
  };

  // * 모든 append 함수는 appendRootChildren이 최초 모델입니다. 즉, appendRootChildren 함수 내 주석으로 append 함수들의 논리를 이해할 수도 있습니다.
  const appendMainChildren = () => {
    parentElementArrayObject.mainChildren.forEach((element) => {
      appendElement.default(main, element);
    });
  };
  /** ㅁㄴ */

  appendRootChildren();
  appendMainChildren();
};

window.onload = () => {
  createHTML();
};
