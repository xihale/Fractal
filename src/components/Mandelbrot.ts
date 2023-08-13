import Complex from "./Complex";

export default class Mandelbrot {
  width: number;
  height: number;
  constructor(width: number, height: number) {
    this.width = width;
    this.height = height;
  }
  getPixel(px: number, py: number) {
    let iterations = 0;
    const zoom = 1;
    const C = new Complex(
      px / (0.4 * zoom * this.width) - 2,
      py / (0.4 * zoom * this.width) - 0.8
    );
    const Z = new Complex(0, 0);

    while (Z.distanse2() < 4 && iterations < 300) {
      Z.square().add(C);
      ++iterations;
    }
    return `rgb(${iterations},${iterations},${iterations})`;
  }
}