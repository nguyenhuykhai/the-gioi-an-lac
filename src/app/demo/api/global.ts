// Define interface for global state

// BLOG ZONE
export interface Blog {
    id?: string;
    itemImageSrc?:any;
    thumbnailImageSrc?:any;
    alt?:any;
    title?:any;
    description?:any;
}

// DEALER ZONE
export interface Dealer {
    id?: string;
    fragment?: string;
    name?: string;
    description?: string;
    level?: string;
    image?: string;
    quantity?: number;
    dealers?: Dealer[];
}

export interface DealerItem {
    id?: string;
    level?: string;
    name?: string;
    address?: string;
    fragment?: string;
}

