import { Request } from 'express';
import { IResponseError } from './response.error.interface';
export declare const GlobalResponseError: (statusCode: number, message: string, code: string, request: Request) => IResponseError;
