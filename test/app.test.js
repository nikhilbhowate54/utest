const { describe, it } = require("mocha");

const Cube = require("../app").Cube;
const expect = require("chai").expect;

describe("testing the cube function", () => {
  it("side length of cube", (done) => {
    let cube1 = new Cube(2);
    expect(cube1.getSideLength()).to.equal(2);
    done();
  });
  it("surface area of cube", (done) => {
    let cube2 = new Cube(5);
    expect(cube2.getSurfaceArea()).to.equal(150);
    done();
  });
  it("volume of cube", (done) => {
    let cube3 = new Cube(7);
    expect(cube3.getVolume()).to.equal(343);
    done()
  });
});
