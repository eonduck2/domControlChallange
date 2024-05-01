import * as createdElement from "./modules/createElement.js";
import * as appendElement from "./modules/appendElement.js";
import * as elementObject from "./modules/elementObject.js";
import * as events from "./modules/events.js";
import * as elemetntStyling from "./modules/elemetntStyling.js";

// createdElement.default;

// *
const test = () => {
  document.querySelector(
    "#root"
  ).innerHTML = `<h1 class="font-bold underline">asd</h1>`;
};

test();
