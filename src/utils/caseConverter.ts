import _ from "lodash";

/**
 * Преобразует объект или массив объектов из snake_case в camelCase.
 */
export function convertToCamelCase<T>(data: any): T {
  if (Array.isArray(data)) {
    return data.map((item) => convertToCamelCase(item)) as T;
  } else if (typeof data === "object" && data !== null) {
    return _.mapValues(
      _.mapKeys(data, (value, key) => _.camelCase(key)),
      (value) => (typeof value === "object" ? convertToCamelCase(value) : value)
    ) as T;
  }
  return data as T;
}
