import { ResponseBuilder } from './ResponseBuilder';

const data: ResponseBuilder<string> = ResponseBuilder.buildResponse('dataaa');

console.log(data);
console.log('abc', data);
console.log(data);