import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface ContactFormSubmission {
    subject: string;
    name: string;
    email: string;
    message: string;
    phone: string;
}
export interface BlogPost {
    title: string;
    date: Time;
    imageUrl: string;
    excerpt: string;
    category: string;
}
export type Time = bigint;
export interface backendInterface {
    addBlogPost(title: string, category: string, excerpt: string, imageUrl: string): Promise<void>;
    getAllBlogPosts(): Promise<Array<BlogPost>>;
    getAllContactSubmissions(): Promise<Array<ContactFormSubmission>>;
    getBlogPostsByCategory(category: string): Promise<Array<BlogPost>>;
    getSortedBlogPostsByDate(): Promise<Array<BlogPost>>;
    submitContactForm(name: string, email: string, phone: string, subject: string, message: string): Promise<void>;
}
