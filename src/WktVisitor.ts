import GeometryVisitor from "./GeometryVisitor";
import Point from "./Point";
import LineString from "./LineString";

export default class WktVisitor implements GeometryVisitor {
    private buffer: string = ""

    getResult(): string {
        return this.buffer;
    }

    visitPoint(point: Point) {
        if (!point.isEmpty()) {
            this.buffer = "POINT(" + point.x().toFixed(1) + " " + point.y().toFixed(1) + ")"
        } else {
            this.buffer = "POINT EMPTY"
        }
    }

    visitLineString(lineString: LineString) {
        if (!lineString.isEmpty()) {
            let coords = ""
            for (let i = 0; i < lineString.getNumPoints(); i++) {
                const ls = lineString.getPointN(i)
                if (i > 0) {
                    coords += ","
                }
                coords += ls.x().toFixed(1) + " " + ls.y().toFixed(1)
            }
            this.buffer = "LINESTRING(" + coords + ")"
        } else {
            this.buffer = "LINESTRING EMPTY"
        }
    }
}
