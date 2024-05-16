const canvas = document.getElementById("game-window");
let ctx = canvas.getContext("2d");
let scale = 1;
var originRect;
var timerId;

class Vector {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
}

window.visualViewport.addEventListener("resize", () => {
  clearTimeout(timerId); // clear the last started timer to prevent multiple function calls.
  timerId = setTimeout(function () {
    // start a new timer to run fn on final resize.
    var newRect = canvas.getBoundingClientRect();
    canvas.width = newRect.width;
    canvas.height = newRect.height;

    ctx.fillStyle = "green";
    ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    console.log(`resized to ${ctx.canvas.width} x ${ctx.canvas.height}!`);
  }, 35 /*ms*/);
});
