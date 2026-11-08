import { describe, it, expect } from "vitest";
import Point from "../src/Point";
import LineString from "../src/LineString";

describe("test AbstractGeometry", () => {
    it("test asText() for Point", () => {
        const p = new Point([6.0,-2.0])
        
        expect(p.asText()).to.equal("POINT(6.0 -2.0)")
    })

    it("test asText() for LineString", () => {
        const p1 = new Point([9.0,-5.0])
        const p2 = new Point([0.0,-2.0])
        const p3 = new Point([-3.0,-8.0])
        const ls = new LineString([p1, p2, p3])

        expect(ls.asText()).to.equal("LINESTRING(9.0 -5.0,0.0 -2.0,-3.0 -8.0)")
    })

});
