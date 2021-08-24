"use strict";

const btnNew = document.querySelector(".image");

btnNew.addEventListener("click", function () {
  const otterLove = prompt(
    "Now you are an otter lover. Please rate from 1 to 10 how much you love them"
  );

  if (otterLove === 1) {
    alert("HOW YOU DARE🤬");
  } else if (otterLove === 10) {
    alert("WHO CAN SAY NO😍");
  } else if (otterLove > 1 && otterLove < 10) {
    alert(`That's a good one but is better a 10🤪🦦`);
  } else if (otterLove < 1 || otterLove > 10 || typeof otterLove !== "number") {
    alert("I said 1 to 10 you dumbass 😒");
  }
});
