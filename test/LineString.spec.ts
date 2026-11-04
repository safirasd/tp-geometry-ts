import { describe, it, expect } from "vitest";
import Point from "../src/Point";
import LineString from "../src/LineString";

describe("test LineString", () => {
    it("test default constructor", () => {
        const g = new LineString();
        expect(g.isEmpty()).to.equal(true);
    });

    it("test constructor with points", () => {
        const g = new LineString([
            new Point([0.0,0.0]),
            new Point([3.0,4.0])
        ]);
        expect(g.getNumPoints()).to.equal(2);
    });

   it("should return 'LineString' for getType()", () => {
           const g = new LineString();
           expect(g.getType()).to.equal("LineString");
    });

    
   it("should return 'LineString' for getPointN()", () => {
        const g = new LineString([
            new Point([0.0,0.0]),
            new Point([3.0,4.0])
        ]);
        expect(g.getPointN(0).x()).to.equal(0.0);
        expect(g.getPointN(0).y()).to.equal(0.0);

        expect(g.getPointN(1).x()).to.equal(3.0);
        expect(g.getPointN(1).y()).to.equal(4.0);

        expect(g.getPointN(2)).to.equal(undefined);
    });

    it("test translate(dx, dy)", () => {
        const p1 = new Point([2.0,5.0]);
        const p2 = new Point([-5.0,1.0]);
        const g = new LineString([p1, p2]);

        g.translate(-2.0, 5.0);

        expect(g.getPointN(0).getCoordinate()).to.deep.equal([0.0,10.0]);
        expect(g.getPointN(1).getCoordinate()).to.deep.equal([-7.0,6.0]);
    });

    it("test clone()", () => {
        const p1 = new Point([2.0,5.0]);
        const p2 = new Point([-5.0,1.0]);
        const g = new LineString([p1, p2]);
        g.clone();

        expect (g.getPointN(0).getCoordinate()).to.deep.equal([2.0,5.0]);
        expect (g.getPointN(1).getCoordinate()).to.deep.equal([-5.0,1.0]);
        expect (g.clone()).to.deep.equal(g);

    });

      it("test translation of the geometry copy", () => {
        const p3 = new Point([6.0,-3.0]);
        const p4 = new Point([-5.0,9.0]);
        const g = new LineString([p3, p4]);

        g.translate(-1.0,1.0);

        const copy = g.clone();

        expect (copy.getPointN(0).getCoordinate()).to.deep.equal([5.0,-2.0]);
        expect (copy.getPointN(1).getCoordinate()).to.deep.equal([-6.0,10.0]);

    });


});
