import camelCase from "lodash/camelCase.js";
import mapKeys from "lodash/mapKeys.js";
import mapValues from "lodash/mapValues.js";

/**
 * Преобразует объект или массив объектов из snake_case в camelCase.
 */
export const convertToCamelCase = <T>(data: any): T =>
  Array.isArray(data)
    ? (data.map(convertToCamelCase) as T)
    : data instanceof Date
    ? (data.toISOString() as T)
    : typeof data === "object" && data !== null
    ? (mapValues(
        mapKeys(data, (_, key) => camelCase(key)),
        (value) =>
          value instanceof Date
            ? value.toISOString()
            : typeof value === "object"
            ? convertToCamelCase(value)
            : value
      ) as T)
    : (data as T);
