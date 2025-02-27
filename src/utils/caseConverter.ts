import camelCase from "lodash/camelCase.js";
import mapKeys from "lodash/mapKeys.js";

/**
 * Преобразует ключи объекта из snake_case в camelCase, не изменяя значения.
 */
export const convertToCamelCase = <T>(data: any): T => {
  if (Array.isArray(data)) {
    return data.map(convertToCamelCase) as T;
  }

  if (data instanceof Date) {
    return data.toISOString() as T;
  }

  if (typeof data === "object" && data !== null) {
    return mapKeys(data, (_, key) => camelCase(key)) as T;
  }

  return data as T;
};
