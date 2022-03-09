import { snakeCase } from 'snake-case';

/**
 * Transforms an object's keys to snake_case
 *
 * @param {Object} object An object whose keys you want to transform to snake_case
 * @returns {Object} An object with keys transformed to snake_case
 */
export function keysToSnakeCase(object: { [k: string]: string }) {
  return Object.fromEntries(Object.entries(object).map(([k, v]) => [snakeCase(k), v]));
}
