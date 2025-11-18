import { lookupEvents } from "../src/lookup";
import { describe, it, expect } from "vitest";

describe("returnEventsBasedOnText", () => {
    it("Returns events based on the lookup text", async () => {

        const searchedText = "moulin";

        const events = await lookupEvents({ text: searchedText });

        console.log(JSON.stringify(events));

        events.forEach(event => {
            const name = event.name.fi.toLowerCase();
            const description = event.description.fi.toLowerCase();
            expect(name.includes(searchedText) || description.includes(searchedText)).toBe(true);
        });
    }, 10000);
});

