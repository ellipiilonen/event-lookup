import type { Event, EventLookup } from './types.js';
import fetch from 'node-fetch';

export async function lookupEvents(lookup: EventLookup): Promise<Event[]> {
    const params = new URLSearchParams();
    if (lookup.text) params.append('text', lookup.text);
    if (lookup.location) params.append('location', lookup.location);
    if (lookup.keyword) params.append('keyword', lookup.keyword);
    if (lookup.event) params.append('event', lookup.event);

    const url = "https://api.hel.fi/linkedevents/v1/event/?" + params.toString();
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error(`Error fetching events: ${response.statusText}`);
    }
    const json = (await response.json()) as { data: Event[] };
    return json.data;
}
