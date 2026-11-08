import Envelope from "./Envelope";
import EnvelopeBuilder from "./EnvelopeBuilder";
import Geometry from "./Geometry";
import GeometryVisitor from "./GeometryVisitor";
import Point from "./Point";
import AbstractGeometry from "./AbstractGeometry";

export default class LineString extends AbstractGeometry{

    private points: Point[];

    constructor(points?:Point[]){
        super()
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
    
    getEnvelope(): Envelope {
        const builder = new EnvelopeBuilder()
        for (const point of this.points)
            if(!point.isEmpty()){
            builder.insert(point.getCoordinate()) 
            }
        return builder.build()
    }

    accept(visitor: GeometryVisitor) {
        visitor.visitLineString(this)
    }
}