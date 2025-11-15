export interface Event {
    text: string;
    keyword: string;
    event: string;
    location: string;
    language: string;
}

export interface EventLookup {
    text?: string;
    location?: string;
    language?: string;
    keyword?: string;
    event?: string;
}

export interface PlaceLookup {
    division?: string;
    text?: string;
}
