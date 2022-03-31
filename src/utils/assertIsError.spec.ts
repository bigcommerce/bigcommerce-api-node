import { assertIsError } from './assertIsError';

describe('asssertIsError', () => {
  it('should be a function', () => {
    expect(assertIsError).toBeInstanceOf(Function);
  });

  it('should throw an error if the unknown type is not an error', () => {
    expect(() => assertIsError(undefined)).toThrow();
  });

  it('should not throw an error if the unknown type is an error', () => {
    expect(() => assertIsError(new Error())).not.toThrow();
  });
});
