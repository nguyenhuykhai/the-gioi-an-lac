export interface News {
    id: string;
    category: string;
    title: string;
    subTitle: string;
    detail: string;
    image: string[];
    display: boolean;
    highlight: boolean;
    createDate: Date;
    tags: string[];
}

export interface NewsCreate {
    category: string;
    title: string;
    subTitle: string;
    detail: string;
    image: string[];
    display: boolean;
    highlight: boolean;
    tags: string[];
}