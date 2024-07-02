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

class ChunkManager {
  constructor() {
    this.chunks = {};
  }
  key(x, y) {
    return new Vector(x, y);
  }
  isChunkPresent(chunk) {
    if (chunk in chunks) {
      return true;
    } else {
      return false;
    }
  }
  togglePixel(chunk, vector) {
    chunk[vector.x][vector.y] != chunk[vector.x][vector.y];
  }

  createChunk(x, y) {
    let chunk = this.key(x, y);

    if (chunk in chunks) {
      return null;
    }

    for (i = 0; i <= 32; i++) {
      for (j = 0; j <= 32; i++) {
        chunks[chunk][i][j] = false;
      }
    }

    return chunk;
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
