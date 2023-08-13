import Complex from "./Complex";

export default class Julia {
  width: number;
  height: number;
  constructor(width: number, height: number) {
    this.width = width;
    this.height = height;
  }
  getPixel(px: number, py: number) {
    let iters = 0;
    const zoom = 1;
    const C = new Complex(0.285, 0.01);
    const Z = new Complex(
      (1.5 * (px - this.width / 2)) / (0.5 * zoom * this.width),
      (py - this.height / 2) / (0.5 * zoom * this.height)
    );
    const maxIterations = 300;

    while (Z.distanse2() < 4 && iters < maxIterations) {
      Z.square().add(C);
      ++iters;
    }

    if (iters === maxIterations) return "#000000";
    return `hsl(${(iters / maxIterations) * 360 + 160}, 90%, 60%)`;
  }
}
