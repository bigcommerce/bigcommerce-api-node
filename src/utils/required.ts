/**
 * Function that throws an error if a parameter is not provided.
 *
 * @example
 * function foo(bar: string = required('bar')) {
 *  // ...
 * }
 * // throws 'Missing required parameter: bar' if bar is not provided
 *
 * @param parameterName Name of required parameter
 */
export function required(parameterName: string): never {
  throw new Error(`Missing required parameter: ${parameterName}`);
}
