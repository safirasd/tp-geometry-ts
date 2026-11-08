import Geometry from "./Geometry";
import Point from "./Point";
import LineString from "./LineString";

export default class WktWriter{
    
    write(geometry:Geometry) : string{
        if ( geometry instanceof Point ){
            if (geometry.isEmpty()){
                return "POINT EMPTY"
            }
            return "POINT(" + geometry.x().toFixed(1) + " " + geometry.y().toFixed(1) + ")";
        } else if ( geometry instanceof LineString ){
            if (geometry.isEmpty()){
                return "LINESTRING EMPTY"
            }
            let coords = "";
            for (let i = 0; i < geometry.getNumPoints(); i++){
                const p = geometry.getPointN(i)
                if (i > 0){
                     coords += ","
                }
                coords += p.x().toFixed(1) + " " + p.y().toFixed(1)
            }
            return "LINESTRING(" + coords + ")";
        }else{
        throw new TypeError("geometry type not supported");
    }
    }
}