import type { EventLookup } from "../src/types";
import { lookupEvents } from "../src/lookup";
import { describe, it, expect } from "vitest";

describe("test API", () => {
    it("Test the API response and check data", async () => {
        const url = "https://api.hel.fi/linkedevents/v1/event/?text=music";

        const response = await fetch(url);

        expect(response.status).toBe(200);

        const data = await response.json();

        expect(data).toHaveProperty("data");

        expect(data.data[0]).toHaveProperty("name");
        expect(data.data[0]).toHaveProperty("description");
    })
});