export class StatusCode {
  readonly EVERYTHING_OK: number;
  readonly CREATED: number;
  readonly NO_CONTENT: number;
  readonly BAD_REQUEST: number;
  readonly UNAUTHORIZED: number;
  readonly NOT_FOUND: number;
  readonly CONFLICT: number;
  readonly TOO_MANY_REQUEST: number;
  readonly INTERNAL_SERVER_ERROR: number;

  constructor() {
    this.EVERYTHING_OK = 200;
    this.CREATED = 201;
    this.NO_CONTENT = 204;
    this.BAD_REQUEST = 400;
    this.UNAUTHORIZED = 401;
    this.NOT_FOUND = 404;
    this.CONFLICT = 409;
    this.TOO_MANY_REQUEST = 429;
    this.INTERNAL_SERVER_ERROR = 500;
    Object.freeze(this);
  }
}