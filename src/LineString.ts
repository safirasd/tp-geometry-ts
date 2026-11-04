import Geometry from "./Geometry";
import Point from "./Point";

export default class LineString implements Geometry{

    private points: Point[];

    constructor(points?:Point[]){
        this.points = points ? points : [];
    }
    getType(): string {
        return "LineString";
    }

    isEmpty(): boolean{
        return this.points.length === 0 ;
    } 

    getNumPoints(): number {
        return this.points.length;
    }

    getPointN(n: number) {
        return this.points[n]; 
    }

    translate(dx:number, dy:number){
        for (const point of this.points)
            point.translate(dx, dy);
    }

    clone(): LineString{
        const p = this.points
        const copy = p.map(points => points.clone())
        return new LineString(copy);
    }

}