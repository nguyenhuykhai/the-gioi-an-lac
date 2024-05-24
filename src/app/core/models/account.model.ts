export interface Account {
    id: string;
    username: string;
    password: string;
    detail: string;
    fullName: string;
    role: string[];
    active: boolean;
}