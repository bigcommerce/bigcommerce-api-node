/**
 * This function asserts that an unknown type (typically an error in a
 * catch block) is of type Error, which means for the rest of the scope,
 * the unknown type can safely be treated as a type of Error.
 */
export function assertIsError(error: unknown): asserts error is Error {
  if (!(error instanceof Error)) {
    throw error;
  }
}
