import { DataSourceOptions } from 'typeorm';
import { TokenConfig } from './api.config';
import { AppConfig, LogConfig } from './app.config';
import { CookieConfig, SessionConfig } from './http.config';
export interface Config {
    cookie: CookieConfig;
    database: DataSourceOptions;
    session: SessionConfig;
    app: AppConfig;
    log: LogConfig;
    token: TokenConfig;
}
declare const _default: any;
export default _default;
