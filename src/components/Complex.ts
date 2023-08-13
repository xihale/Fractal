export default class Complex {
  re: number;
  im: number;
  x2: number;
  y2: number;
  constructor(re: number, im: number) {
    this.re = re;
    this.im = im;
    this.x2 = 0;
    this.y2 = 0;
  }
  add(c: Complex) {
    this.re += c.re;
    this.im += c.im;
  }
  square() {
    this.im = 2 * this.re * this.im;
    this.re = this.x2 - this.y2;
    return this;
  }
  distanse2() {
    this.x2 = this.re * this.re;
    this.y2 = this.im * this.im;
    return this.x2 + this.y2;
  }
}
