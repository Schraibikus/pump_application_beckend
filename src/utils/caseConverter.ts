import camelCase from "lodash/camelCase.js";
import mapKeys from "lodash/mapKeys.js";

/**
 * Преобразует ключи объекта из snake_case в camelCase, рекурсивно обрабатывая вложенные объекты и массивы.
 * Ключи внутри объекта `alternativeSets` остаются без изменений.
 */
export const convertToCamelCase = <T>(data: any): T => {
  // Если данные — массив, обрабатываем каждый элемент рекурсивно
  if (Array.isArray(data)) {
    return data.map((item) => convertToCamelCase(item)) as T;
  }

  // Если данные — дата, возвращаем их как есть
  if (data instanceof Date) {
    return data.toISOString() as T;
  }

  // Если данные — объект, рекурсивно преобразуем все ключи и вложенные объекты
  if (typeof data === "object" && data !== null) {
    return Object.fromEntries(
      Object.entries(data).map(([key, value]) => {
        // Если ключ — "alternativeSets", не преобразуем его внутренние ключи
        if (
          key === "alternativeSets" &&
          typeof value === "object" &&
          value !== null
        ) {
          return [
            camelCase(key), // Преобразуем только сам ключ "alternativeSets"
            Object.fromEntries(
              Object.entries(value).map(([setName, setData]) => [
                setName, // Оставляем setName без изменений
                convertToCamelCase(setData), // Рекурсивно обрабатываем данные набора
              ])
            ),
          ];
        }

        // Для всех остальных ключей преобразуем ключи и рекурсивно обрабатываем значения
        return [
          camelCase(key), // Преобразуем ключ в camelCase
          convertToCamelCase(value), // Рекурсивно обрабатываем значение
        ];
      })
    ) as T;
  }

  // Если данные — примитив, возвращаем их как есть
  return data as T;
};

// import camelCase from "lodash/camelCase.js";
// import mapKeys from "lodash/mapKeys.js";

// /**
//  * Преобразует ключи объекта из snake_case в camelCase, не изменяя значения.
//  */
// export const convertToCamelCase = <T>(data: any): T => {
//   if (Array.isArray(data)) {
//     return data.map(convertToCamelCase) as T;
//   }

//   if (data instanceof Date) {
//     return data.toISOString() as T;
//   }

//   if (typeof data === "object" && data !== null) {
//     return mapKeys(data, (_, key) => camelCase(key)) as T;
//   }

//   return data as T;
// };
