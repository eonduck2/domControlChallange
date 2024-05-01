export default function (elementForEvent) {
  elementForEvent.onclick = (e) => {
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
}
