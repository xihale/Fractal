import { useEffect, useRef } from "react";

import Mandelbrot from "./components/Mandelbrot";
import Julia from "./components/Julia";

function App() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (canvas == null || ctx == null) throw "canvas or ctx is null";

    const width = canvas.width;
    const height = canvas.height;

    const mandelbrot = new Mandelbrot(width, height);
    const julia=new Julia(width, height);

    const useMandelbrot = false;
    const pix = useMandelbrot ? mandelbrot : julia;

    for (let i = 0; i < width; i++) {
      for (let j = 0; j < height; j++) {
        ctx.fillStyle = pix.getPixel(i, j);
        ctx.fillRect(i, j, 1, 1);
      }
    }
  }, []);

  return (
    <canvas ref={canvasRef} id="canvas" width={1350} height={900}>
      Your browser does not support the HTML5 canvas element
    </canvas>
  );
}

export default App;
