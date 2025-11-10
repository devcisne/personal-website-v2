// HTTP status codes
export enum HttpStatus {
    OK = 200,
    CREATED = 201,
    BAD_REQUEST = 400,
    UNAUTHORIZED = 401,
    FORBIDDEN = 403,
    NOT_FOUND = 404,
    INTERNAL_SERVER_ERROR = 500,
}

// DTOs
export * from './dtos/instructor.dto';
export * from './dtos/item.dto';

// Export everything (add more exports as you develop)
export { };
