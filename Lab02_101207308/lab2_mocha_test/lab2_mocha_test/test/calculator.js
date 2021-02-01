var calc = require("../app/calculator");
var expect    = require("chai").expect;

describe("Calculator", () => {
    before(() => console.log("Testing started"));
    after(() => console.log("Testing finished"));
    it("Add", () => {
        var num1   = calc.add(5,2);
        var num2 = calc.add(5,2);
  
        expect(num1).to.equal(7);
        expect(num2).to.equal(8);
    });
    it("Subtract", () => {
        var num1   = calc.sub(5,2);
        var num2 = calc.sub(5,2);
  
        expect(num1).to.equal(3);
        expect(num2).to.equal(5);
    });
    it("Multiply", () => {
        var num1   = calc.mul(5,2);
        var num2 = calc.mul(5,2);
  
        expect(num1).to.equal(10);
        expect(num2).to.equal(12);
    });
    it("Divide", () => {
        var num1   = calc.div(10,2);
        var num2 = calc.div(10,2);
  
        expect(num1).to.equal(5);
        expect(num2).to.equal(2);
    });

});