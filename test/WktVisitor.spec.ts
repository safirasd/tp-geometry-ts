import { describe, it, expect } from "vitest";
import WktVisitor from "../src/WktVisitor";
import Point from "../src/Point";
import LineString from "../src/LineString";

describe("test WktVisitor", () => {
    it("test WktVisitor on non-empty Point", () => {
        const visitor = new WktVisitor()
        const g = new Point([5.0,-5.0])
        g.accept(visitor)
        expect(visitor.getResult()).to.equal("POINT(5.0 -5.0)") 
    });

    it("test WktVisitor on empty Point", () => {
        const visitor = new WktVisitor()
        const g = new Point()
        g.accept(visitor)
        expect(visitor.getResult()).to.equal("POINT EMPTY") 
    });

    it("test WktVisitor on non-empty LineString", () => {
        const visitor = new WktVisitor()
        const p1 = new Point([6.0,-2.0])
        const p2 = new Point([1.0,9.0])
        const p3 = new Point([-7.0,3.0])
        const g = new LineString([p1, p2, p3])

        g.accept(visitor)
        expect(visitor.getResult()).to.equal("LINESTRING(6.0 -2.0,1.0 9.0,-7.0 3.0)") 
    });

    it("test WktVisitor on empty LineString", () => {
        const visitor = new WktVisitor()
        const g = new LineString()
        g.accept(visitor)
        expect(visitor.getResult()).to.equal("LINESTRING EMPTY") 
    });
})