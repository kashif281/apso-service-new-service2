import { ArgumentsHost, ExceptionFilter } from '@nestjs/common';
import { TypeORMError } from 'typeorm';
export declare class TypeORMErrorFilter implements ExceptionFilter {
    catch(exception: TypeORMError, host: ArgumentsHost): void;
}
