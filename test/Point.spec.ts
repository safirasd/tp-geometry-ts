import { describe, it, expect } from "vitest";
import Point from "../src/Point";

describe("test Point", () => {
    it("test default constructor", () => {
        const p = new Point();
        expect(p.isEmpty()).to.equal(true);
        expect(Number.isNaN(p.x())).to.be.true;
        expect(Number.isNaN(p.y())).to.be.true;
    });

    it("test isEmpty()", () => {
        expect (new Point().isEmpty()).to.be.true;
        expect (new Point([3.0,4.0]).isEmpty()).to.be.false;

    });

    it("test constructor with coordinates", () => {
        const p = new Point([3.0,4.0]);
        expect(p.getCoordinate()).to.deep.equal([3.0,4.0]);
        expect(p.x()).to.equal(3.0);
        expect(p.y()).to.equal(4.0);
    });

    it("should return 'Point' for getType()", () => {
        const p = new Point();
        expect(p.getType()).to.equal("Point");

    });

    it("test translate(dx, dy)", () => {
        const p = new Point([1.0,2.0]);
        p.translate(2.0,6.0);
        expect(p.getCoordinate()).to.deep.equal([3.0,8.0])

    });

    it("test clone()", () => {
        const p = new Point([4.0,7.0]);
        const copy = p.clone();

        expect(copy.getCoordinate()).to.deep.equal([4.0,7.0]);
        expect(copy.clone()).to.deep.equal(p)

    });

    it("test translation of the geometry copy", () => {
        const p = new Point([3.0,4.0])
    
        p.translate(-2.0,1.0);
    
        const copy = p.clone();
    
        expect (copy.getCoordinate()).to.deep.equal([1.0,5.0]);
    
    });


});
