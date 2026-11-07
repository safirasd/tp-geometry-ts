import { describe, it, expect } from "vitest";
import Envelope from "../src/Envelope";

describe("test Envelope", () => {
    it("test default constructor", () => {
        const e = new Envelope();
        expect(e.isEmpty()).to.equal(true);

    });

});