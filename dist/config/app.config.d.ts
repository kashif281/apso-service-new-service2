export interface AppConfig {
    defaultAction: string;
    name: string;
    port: number;
    site: string;
    allowedOrigins: string;
    env: 'local' | 'dev' | 'staging' | 'production';
}
export declare const app: AppConfig;
export interface LogConfig {
    colorize: boolean;
    level: string;
    timestamps: string;
}
export declare const log: LogConfig;
