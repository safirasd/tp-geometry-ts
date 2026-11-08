import { describe, it, expect } from "vitest";
import Point from "../src/Point";
import WktWriter from "../src/WktWriter"
import LineString from "../src/LineString";

describe("test WktWriter", () => {
    it("should return empty Point", () => {
        const writer = new WktWriter()
        const g = new Point()
        expect(writer.write(g)).to.equal("POINT EMPTY") 
    });

    it("test write() on non-empty Point", () => {
    const writer = new WktWriter()
    const g = new Point([2.0,-3.0])
    expect(writer.write(g)).to.equal("POINT(2.0 -3.0)") 
    });

    it("should return empty LineString", () => {
    const writer = new WktWriter()
    const g = new LineString()
    expect(writer.write(g)).to.equal("LINESTRING EMPTY") 
    })

    it("test write() on non-empty LineString", () => {
    const writer = new WktWriter()
    const p1 = new Point([-6.0,1.0])
    const p2 = new Point([4.0,5.0])
    const p3 = new Point([0.0,8.0])
    const g = new LineString([p1,p2,p3])

    expect(writer.write(g)).to.equal("LINESTRING(-6.0 1.0,4.0 5.0,0.0 8.0)") 
    });

});