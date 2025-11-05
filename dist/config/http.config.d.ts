export interface CookieConfig {
    httpOnly: boolean;
    path: string;
    domain: string;
    sameSite: boolean | 'lax' | 'strict' | 'none';
    secure: boolean;
}
export declare const cookie: CookieConfig;
export interface SessionConfig {
    key: string;
    secret: string;
    ttl: number;
}
export declare const session: SessionConfig;
