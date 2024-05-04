import * as createdElement from "./modules/aboutElement/createElement.js";
import * as appendElement from "./modules/aboutElement/appendElement.js";
import * as elementObject from "./modules/aboutElement/elementObject.js";
import * as events from "./modules/events.js";
import * as elemetntDynamicContorl from "./modules/aboutElement/elementDynamicContorl.js";

const createHTML = () => {
  // * Parent Elments
  const root = elementObject.default.parentElements.root;

  // * <div id="root"></div> 자식들 담아두는 array
  const parentElementArrayObject = {
    // * 여기서 요소 create 하는게 항상 첫 번째
    rootChildren: [
      createdElement.default(elementObject.default.semantics.header),
      createdElement.default(elementObject.default.semantics.main),
    ],

    header: {
      headerChildren: [
        createdElement.default(elementObject.default.semantics.nav),
      ],

      navChildren: [createdElement.default(elementObject.default.ul)],

      ulChildren: [],

      liMenus: [`TEST1`, `TEST2`, `TEST3`, `TEST4`],
    },

    main: {
      mainChildren: [
        createdElement.default(elementObject.default.semantics.firstSection),
      ],

      firstSectionChildren: [
        createdElement.default(
          elementObject.default.divs.firstSectionFirstChildDiv
        ),
        createdElement.default(
          elementObject.default.divs.firstSectionSecondChildDiv
        ),
      ],

      firstSectionFirstChildDiv: [
        createdElement.default(
          elementObject.default.firstSectionFirstChildDivImg
        ),
      ],

      firstSectionSecondChildDiv: [
        createdElement.default(
          elementObject.default.firstSectionSecondChildDivImg
        ),
      ],
    },
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
    // todo, 구조 변경 시 추가 작업 순서 "1"(특정 배열 forEach 추가)
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
      } // * 객체에 할당하는 로직으로, rootFirstHeader와 같은 property는 위 조건문에서 "generate"된 것임
    });

    // * header 자식 추가, 자식 element 추가 시도할 시 조건 늘려야됨
    parentElementArrayObject.header.headerChildren.forEach((element) => {
      if (element.tagName.toLowerCase() == `nav`) {
        elementObject.default.parentElements.rootFirstHeaderNav = element;
      } else {
      }
    });

    parentElementArrayObject.header.navChildren.forEach((element) => {
      if (element.tagName.toLowerCase() == `ul`) {
        elementObject.default.parentElements.rootFirstHeaderUl = element;
      } else {
      }
      // *UL 자식인 Li들을 생성키 위해, 배열에 푸쉬해주는 반복문
      for (let i = 0; i < 4; i++) {
        const li = createdElement.default(elementObject.default.headerLi);
        // ! elementDynamicControl에서 스타일 값 조정
        li.textContent = parentElementArrayObject.header.liMenus[i];
        parentElementArrayObject.header.ulChildren.push(li);
      }
    });

    parentElementArrayObject.header.ulChildren.forEach((element) => {
      if (element.tagName.toLowerCase() == `li`) {
        // elementObject.default.parentElements.rootFirstHeaderLi = element;
      } else {
      }
    });

    parentElementArrayObject.main.mainChildren.forEach((element) => {
      if (element.tagName.toLowerCase() == `section`) {
        elementObject.default.parentElements.mainFirstSection = element;
      } else {
      }
    });

    // ! first_img
    parentElementArrayObject.main.firstSectionChildren.forEach((element) => {
      if (element.className == `first-section-first-child-div`) {
        elementObject.default.parentElements.firstSectionFirstChildDiv =
          element;
      } else {
      }
    });

    // ! second_img
    parentElementArrayObject.main.firstSectionChildren.forEach((element) => {
      if (element.className == `first-section-second-child-div`) {
        elementObject.default.parentElements.firstSectionSecondChildDiv =
          element;
      } else {
      }
    });

    // todo, 구조 변경 시 추가 작업 순서 "2" (함수 추가)
    // * 모든 append 함수는 appendRootChildren이 최초 모델입니다. 즉, appendRootChildren 함수 내 주석으로 append 함수들의 논리를 이해할 수도 있습니다.

    const appendHeaderChildren = (newAssignedElementParent) => {
      parentElementArrayObject.header.headerChildren.forEach((element) => {
        appendElement.default(newAssignedElementParent, element);
      });
    };

    // * 모든 append 함수는 appendRootChildren이 최초 모델입니다. 즉, appendRootChildren 함수 내 주석으로 append 함수들의 논리를 이해할 수도 있습니다.
    const appendNavChildren = (newAssignedElementParent) => {
      parentElementArrayObject.header.navChildren.forEach((element) => {
        appendElement.default(newAssignedElementParent, element);
      });
    };

    // * 모든 append 함수는 appendRootChildren이 최초 모델입니다. 즉, appendRootChildren 함수 내 주석으로 append 함수들의 논리를 이해할 수도 있습니다.
    const appendUlChildren = (newAssignedElementParent) => {
      parentElementArrayObject.header.ulChildren.forEach((element) => {
        appendElement.default(newAssignedElementParent, element);
      });
    };

    // * 모든 append 함수는 appendRootChildren이 최초 모델입니다. 즉, appendRootChildren 함수 내 주석으로 append 함수들의 논리를 이해할 수도 있습니다.
    const appendMainChildren = (newAssignedElementParent) => {
      parentElementArrayObject.main.mainChildren.forEach((element) => {
        appendElement.default(newAssignedElementParent, element);
      });
    };

    // * 모든 append 함수는 appendRootChildren이 최초 모델입니다. 즉, appendRootChildren 함수 내 주석으로 append 함수들의 논리를 이해할 수도 있습니다.
    const appendFirstSectionChildren = (newAssignedElementParent) => {
      parentElementArrayObject.main.firstSectionChildren.forEach((element) => {
        appendElement.default(newAssignedElementParent, element);
      });
    };

    const appendFirstSectionFirstChildDiv = (newAssignedElementParent) => {
      parentElementArrayObject.main.firstSectionFirstChildDiv.forEach(
        (element) => {
          element.src = `../../public/Images/test.jpg`;
          appendElement.default(newAssignedElementParent, element);
        }
      );
    };

    const appendFirstSectionSecondChildDiv = (newAssignedElementParent) => {
      parentElementArrayObject.main.firstSectionSecondChildDiv.forEach(
        (element) => {
          element.src = `./public/Images/frozen_cat.png`;
          appendElement.default(newAssignedElementParent, element);
        }
      );
    };

    // todo, 구조 변경 시 추가 작업 순서 "3" (함수 호출)

    // ! header
    appendHeaderChildren(elementObject.default.parentElements.rootFirstHeader);
    appendNavChildren(elementObject.default.parentElements.rootFirstHeaderNav);
    appendUlChildren(elementObject.default.parentElements.rootFirstHeaderUl);
    // ! header

    // ! main
    appendMainChildren(elementObject.default.parentElements.rootFirstMain);
    appendFirstSectionChildren(
      elementObject.default.parentElements.mainFirstSection
    );
    appendFirstSectionFirstChildDiv(
      elementObject.default.parentElements.firstSectionFirstChildDiv
    );
    appendFirstSectionSecondChildDiv(
      elementObject.default.parentElements.firstSectionSecondChildDiv
    );

    // ! main
  };

  appendRootChildren();
};

window.onload = () => {
  createHTML();
};
