import { describe, it, expect, vi , afterEach} from "vitest";
import LogGeometryVisitor from "../src/LogGeometryVisitor"
import Point from "../src/Point";
import LineString from "../src/LineString";

describe("test LogGeometryVisitor", () => {
    afterEach(() => {
        vi.restoreAllMocks();
    })

    it("test visitor for non-empty Point", () => {
        const p = new Point([2.0,-4.0])
        const visitp = new LogGeometryVisitor()
        const viSpy = vi.spyOn(console, "log")
        
        p.accept(visitp)
        expect(viSpy).toHaveBeenCalledWith("Je suis un point avec x=2.0 et y=-4.0.")
    });

    it("test visitor for empty Point", () => {
    const p = new Point()
    const visitp = new LogGeometryVisitor()
    const viSpy = vi.spyOn(console, "log")
    
    p.accept(visitp)
    expect(viSpy).toHaveBeenCalledWith("Je suis un point vide.")
    });

    it("test visitor for non-empty LineString", () => {
    const p1 = new Point([3.0,-4.0])
    const p2 = new Point([-2.0, 4.0])
    const p3 = new Point([1.0, 8.0])
    const g = new LineString([p1, p2, p3])

    const visitls = new LogGeometryVisitor()
    const viSpy = vi.spyOn(console, "log")
    
    g.accept(visitls)
    expect(viSpy).toHaveBeenCalledWith("Je suis une polyligne définie par 3 points.");
    });

    it("test visitor for empty LineString", () => {
    const g = new LineString()

    const visitls = new LogGeometryVisitor()
    const viSpy = vi.spyOn(console, "log")
    
    g.accept(visitls)
    expect(viSpy).toHaveBeenCalledWith("Je suis une polyligne vide.")
    });

});
