import GeometryVisitor from "./GeometryVisitor";
import LineString from "./LineString";
import Point from "./Point";

export default class LogGeometryVisitor implements GeometryVisitor{
    
    visitPoint(point: Point) {  
        if(!point.isEmpty()){
            console.log("Je suis un point avec x=" + point.x().toFixed(1) + " et y=" + point.y().toFixed(1) + ".")
        } else {
            console.log("Je suis un point vide.")
        }
    }
    visitLineString(lineString: LineString) {    
        if(!lineString.isEmpty()){
            console.log("Je suis une polyligne définie par " + lineString.getNumPoints() + " points.")
        } else {
            console.log("Je suis une polyligne vide.")
        }
    }
}