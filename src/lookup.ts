import type { EventLookup, ApiResponse, EventData } from './types.js';
import fetch from 'node-fetch';

/**
 * Fetches events from Helsinki Linked Events API based on lookup criteria.
 * It returns a list of events that match the lookup criteria.
 * 
 * @param lookup The lookup criteria for events. 
 * @returns An array of event objects based on the criteria.
 */

export async function lookupEvents(lookup: EventLookup): Promise<EventData[]> {

    //Lookup parameters 
    const params = new URLSearchParams();
    if (lookup.text) {
        params.append('text', lookup.text);
    }
    if (lookup.location) params.append('location', lookup.location);
    if (lookup.keyword) params.append('keyword', lookup.keyword);
    if (lookup.event) params.append('event', lookup.event);

    //Construct the URL
    const url = "https://api.hel.fi/linkedevents/v1/event/?" + params.toString();

    //Fetch the data from the API
    const response = await fetch(url);

    //Throw an error if unsuccessful
    if (!response.ok) {
        throw new Error(`Error fetching events: ${response.statusText}`);
    }

    const data = await response.json() as ApiResponse;

    const events: EventData[] = data.data.map((event) => ({
        name: event.name || "No name",
        description: event.description || "No description"
    }));

    return events;
}
