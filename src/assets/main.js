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
class Chunk extends Vector {
  constructor(x, y) {
    super(x, y);
    this.binInt = 0;
    this.magnitude = Math.sqrt(x * x + y * y);
  }
}

class ChunkManager {
  constructor() {
    this.size = 0;
    this.chunks = [];
  }
  insertChunk(chunk) {
    if (size == 0) {
      chunks += chunk;
      return true;
    }

    let found = 0;
    let searchSize = size;
    let searchArray = chunks;
    while (found == 0) {
      let i;
      if (searchSize % 2 != 0) {
        i = (searchSize - 1) / 2;
      } else {
        i = searchSize / 2;
      }

      if (chunks[i].magnitude == chunk.magnitude) {
      } else if (chunks[i].magnitude < chunk.magnitude) {
      } else {
      }
    }
  }
  addChunk(x, y, value) {
    let chunk = new Chunk(x, y, value);
    this.insertChunk(chunk);
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
