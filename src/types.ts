export interface EventLookup {
    text?: string;
    location?: string;
    language?: string;
    keyword?: string;
    event?: string;
}

export interface EventData {
    name: {
        fi: string;
        en: string;
    }
    description: {
        fi: string;
        en: string;
    }
}

export interface ApiResponse {
    data: EventData[];
}
