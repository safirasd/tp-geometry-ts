import { describe, it, expect } from "vitest";
import EnvelopeBuilder from "../src/EnvelopeBuilder";

describe("test EnvelopeBuilder", () => { 
    it("test insert()", () => {
       const b = new EnvelopeBuilder()
       b.insert([2.0,9.0])
       b.insert([6.0,1.0])
       b.insert([5.0,3.0])

       const e = b.build()
       
       expect(e.getXmin()).to.equal(2.0)
       expect(e.getYmin()).to.equal(1.0)
       expect(e.getXmax()).to.equal(6.0)
       expect(e.getYmax()).to.equal(9.0)
    });
  
    
    it("test build() with empty Envelope", () => {
        const b = new EnvelopeBuilder();
        const e = b.build()
        
        expect(e.isEmpty()).to.be.true
        expect(b.build().toString()).to.deep.equal("[]")
    });
    

    it("test build() after inserting many coordinates", () => {
        const b = new EnvelopeBuilder();
        b.insert([1.0,4.0])
        b.insert([6.0,0.0])
        b.insert([2.0,3.0])
        expect(b.build().toString()).to.deep.equal("[1,0,6,4]");
    });

});