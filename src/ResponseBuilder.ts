export class ResponseBuilder<T> {
  code: number;
  message: string;
  data: T;

  constructor(code: number, message: string, data: T) {
    this.code = code;
    this.message = message;
    this.data = data;
  }

  static buildResponse<T>(data: T): ResponseBuilder<T> {
    return new ResponseBuilder(200, 'ok', data);
  }
}
