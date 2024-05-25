
/*------------------------------------------- SCRIPT FOR PURCHASE-NOTIFICATION START ------------------------------------------*/

let cursors = document.querySelectorAll(".cursor");

function mouseCursor(e) {
  cursors.forEach((el) => {
    el.style.top = e.clientY + "px";
    el.style.left = e.clientX + "px";
  });
}

window.addEventListener("mousemove", mouseCursor);

/*------------------------------------------- SCRIPT FOR PURCHASE-NOTIFICATION COMPLETE ------------------------------------------*/