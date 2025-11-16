export interface EventLookup {
    text?: string;
    location?: string;
    language?: string;
    keyword?: string;
    event?: string;
}

export interface EventData {
    name: string;
    description: string;
}

export interface ApiResponse {
    data: EventData[];
}
