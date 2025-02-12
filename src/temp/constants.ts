import { Product } from "./types.js";

const threePlungerPumpPositioningTop = -1;
const threePlungerPumpPositioningRight = 82;
const threePlungerPumpPositioningBottom = 93;
const threePlungerPumpPositioningLeft = 16;

export const threePlungerPumpLinks: Product = {
  id: 1,
  src: "/png/threePlungerPump.png",
  path: "/three-plunger-pump",
  width: 70,
  name: "Насос трехплунжерный СИН32.02.100.000",
  drawing: 1,
  parts: [
    {
      id: 1,
      position: 1,
      name: "Шатун",
      designation: "СИН32.02.102.000",
      quantity: 3,
      drawing: 2,
      positioning: {
        top: threePlungerPumpPositioningTop,
        left: 33,
      },
    },
    {
      id: 2,
      position: 2,
      name: "Вал коленчатый",
      designation: "СИН32.02.103.000",
      quantity: 1,
      positioning: {
        top: threePlungerPumpPositioningTop,
        left: 30,
      },
    },
    {
      id: 3,
      position: 3,
      name: "Шпилька",
      designation: "СИН32.01.100.007",
      quantity: 4,
      positioning: {
        top: 28,
        left: threePlungerPumpPositioningRight,
      },
    },
    {
      id: 4,
      position: 5,
      name: "Уплотнение корпуса",
      description: "(до №3694)",
      quantity: 1,
      positioning: {
        top: threePlungerPumpPositioningBottom,
        left: 77,
      },
    },
    {
      id: 5,
      position: 7,
      name: "Крышка",
      quantity: 1,
      positioning: {
        top: threePlungerPumpPositioningBottom,
        left: 24,
      },
    },
    {
      id: 6,
      position: 8,
      name: "Шпилька",
      designation: "СИН32.02.100.005",
      quantity: 12,
      positioning: {
        top: 22,
        left: threePlungerPumpPositioningRight,
      },
    },
    {
      id: 7,
      position: 9,
      name: "Крейцкопф",
      designation: "СИН32.02.100.007",
      quantity: 3,
      positioning: {
        top: threePlungerPumpPositioningTop,
        left: 46,
      },
    },
    {
      id: 8,
      position: 10,
      name: "Палец крейцкопфа",
      designation: "СИН32.02.100.008",
      quantity: 3,
      positioning: {
        top: threePlungerPumpPositioningTop,
        left: 50,
      },
    },
    {
      id: 9,
      position: 11,
      name: "Планка",
      designation: "СИН32.02.100.009",
      quantity: 3,
      positioning: {
        top: threePlungerPumpPositioningTop,
        left: 55,
      },
    },
    {
      id: 10,
      position: 12,
      name: "Пластина",
      designation: "СИН32.02.100.011",
      quantity: 6,
      positioning: {
        top: threePlungerPumpPositioningTop,
        left: 59,
      },
    },
    {
      id: 11,
      position: 13,
      name: "Шпилька",
      designation: "СИН32.02.100.012",
      quantity: 4,
      positioning: {
        top: 41,
        left: threePlungerPumpPositioningRight,
      },
    },
    {
      id: 12,
      position: 14,
      name: "Крышка",
      designation: "СИН32.02.100.014",
      quantity: 1,
      positioning: {
        top: threePlungerPumpPositioningBottom,
        left: 53,
      },
    },
    {
      id: 13,
      position: 15,
      name: "Гайка",
      designation: "СИН32.02.100.015",
      quantity: 12,
      positioning: {
        top: 13,
        left: threePlungerPumpPositioningRight,
      },
    },
    {
      id: 14,
      position: 16,
      name: "Кольцо опорное",
      designation: "СИН32.02.100.016",
      quantity: 1,
      positioning: {
        top: 30,
        left: threePlungerPumpPositioningLeft,
      },
    },
    {
      id: 15,
      position: 18,
      name: "Пружина",
      designation: "СИН32.02.103.002",
      quantity: 2,
      positioning: {
        top: threePlungerPumpPositioningBottom,
        left: 67,
      },
    },
    {
      id: 16,
      position: 19, //нет описания
      name: "Нет описания",
      designation: "Нет описания",
      // quantity: 24,
      positioning: {
        top: 12,
        left: threePlungerPumpPositioningLeft,
      },
    },
    {
      id: 17,
      position: 20,
      name: "Втулка",
      designation: "СИН38.01.008",
      quantity: 24,
      positioning: {
        top: threePlungerPumpPositioningBottom,
        left: 28,
      },
    },
    {
      id: 18,
      position: 22,
      name: "Втулка",
      designation: "СИН51.00.100.016-02",
      quantity: 2,
      positioning: {
        top: threePlungerPumpPositioningBottom,
        left: 62,
      },
    },
    {
      id: 19,
      position: 23,
      name: "Коллектор",
      designation: "СИН63.01.100.034",
      quantity: 1,
      positioning: {
        top: 64,
        left: threePlungerPumpPositioningRight,
      },
    },
    {
      id: 20,
      position: 24,
      name: "Болт",
      designation: "СИН32.02.108.100",
      description: "М12-8gx20.58.019 ГОСТ 7798-70",
      quantity: 12,
      positioning: {
        top: threePlungerPumpPositioningTop,
        left: 63,
      },
    },
    {
      id: 21,
      position: 26,
      name: "Винт",
      description: "А М8-6gx25.45Н.40Х.05 ГОСТ 11075-93",
      quantity: 3,
      positioning: {
        top: threePlungerPumpPositioningTop,
        left: 37,
      },
    },
    {
      id: 22,
      position: 27,
      name: "Винт",
      description: "М8-8gx20.58.019 ГОСТ 11738-84",
      quantity: 24,
      positioning: {
        top: 83,
        left: threePlungerPumpPositioningLeft,
      },
    },
    {
      id: 23,
      position: 28,
      name: "Гайка",
      description: "М8-6Н.5NF ГОСТ Р 50273-92",
      quantity: 3,
      positioning: {
        top: threePlungerPumpPositioningTop,
        left: 42,
      },
    },
    {
      id: 24,
      position: 29,
      name: "Кольцо",
      description: "В40 ГОСТ 13943-86",
      quantity: 1,
      positioning: {
        top: threePlungerPumpPositioningTop,
        left: threePlungerPumpPositioningLeft,
      },
    },
    {
      id: 25,
      position: 30,
      name: "Манжета",
      description: "1.1-20х40-3 ГОСТ 8752-79",
      quantity: 1,
      positioning: {
        top: threePlungerPumpPositioningTop,
        left: 19,
      },
    },
    {
      id: 26,
      position: 31,
      name: "Подшипник",
      description: "3530 ГОСТ 5721-75 (применяется с насоса зав. №3271)",
      quantity: 2,
      positioning: {
        top: threePlungerPumpPositioningTop,
        left: 25,
        top2: threePlungerPumpPositioningBottom,
        left2: 46,
      },
    },
    {
      id: 27,
      position: 32,
      name: "Шайба",
      description: "8.65Г.019 ГОСТ 6402-70",
      quantity: 24,
      positioning: {
        top: 88,
        left: threePlungerPumpPositioningLeft,
      },
    },
    {
      id: 28,
      position: 33,
      name: "Установка индуктивного датчика",
      description: "(до №3651)",
      quantity: 1,
      positioning: {
        top: 66,
        left: threePlungerPumpPositioningLeft,
      },
    },
    {
      id: 29,
      position: 34,
      name: "Установка индуктивного датчика",
      description: "(с №3651)",
      quantity: 1,
      positioning: {
        top: 71,
        left: threePlungerPumpPositioningLeft,
      },
    },
    {
      id: 30,
      position: 36,
      name: "Кран шаровой с метр. патр.",
      description: 'G 3/4"',
      quantity: 1,
      positioning: {
        top: threePlungerPumpPositioningBottom,
        left: 32,
      },
    },
    {
      id: 31,
      position: 37,
      name: "Кран шаровой",
      description: 'G 3/4"',
      quantity: 1,
      positioning: {
        top: 36,
        left: threePlungerPumpPositioningLeft,
      },
    },
    {
      id: 32,
      position: 38,
      name: "Крышка расширительного бочка",
      description: "Газель СБ 3302-1311065",
      quantity: 1,
      positioning: {
        top: threePlungerPumpPositioningBottom,
        left: 42,
      },
    },
    {
      id: 33,
      position: 39,
      name: "Ниппель нар.",
      description: '-нар. 20 (3/4")',
      quantity: 1,
      positioning: {
        top: 41,
        left: threePlungerPumpPositioningLeft,
      },
    },
    {
      id: 34,
      position: 40,
      name: "Пробка нар.",
      description: 'G 3/4"',
      quantity: 1,
      positioning: {
        top: threePlungerPumpPositioningBottom,
        left: 57,
      },
    },
    {
      id: 35,
      position: 41,
      name: "Резьбовая заглушка",
      description: "М22х1,5 DIN 906",
      quantity: 1,
      positioning: {
        top: threePlungerPumpPositioningBottom,
        left: 49,
      },
    },
    {
      id: 36,
      position: 42,
      name: "Штуцер нар.",
      description: 'G 3/4"х20 мм',
      quantity: 1,
      positioning: {
        top: 46,
        left: threePlungerPumpPositioningLeft,
      },
    },
    {
      id: 37,
      position: 44,
      name: "Шнур",
      description: "1-4 Md4 ГОСТ 6467-79, L=860 мм",
      quantity: 1,
      positioning: {
        top: threePlungerPumpPositioningBottom,
        left: 71,
      },
    },
    {
      id: 38,
      position: 45,
      name: "Шнур",
      description: "1-4 Md4 ГОСТ 6467-79, L=1700 мм",
      quantity: 3,
      positioning: {
        top: threePlungerPumpPositioningBottom,
        left: 37,
      },
    },
    {
      id: 39,
      position: 48,
      name: "Узел тяги",
      designation: "Переменные данные",
      description: "Переменные данные",
      quantity: 3,
      drawing: 3,
      positioning: {
        top: 73,
        left: threePlungerPumpPositioningRight,
      },
    },
    {
      id: 40,
      position: 49,
      name: "Гидроузел",
      designation: "Переменные данные",
      description: "Переменные данные",
      quantity: 3,
      drawing: 4,
      positioning: {
        top: 49,
        left: threePlungerPumpPositioningRight,
      },
    },
    {
      id: 41,
      position: 50,
      name: "Корпус",
      designation: "Переменные данные",
      description: "Переменные данные",
      quantity: 1,
      positioning: {
        top: 77,
        left: threePlungerPumpPositioningLeft,
      },
    },
    {
      id: 42,
      position: 51,
      name: "Плунжер",
      designation: "Переменные данные",
      description: "Переменные данные",
      quantity: 3,
      positioning: {
        top: 56,
        left: threePlungerPumpPositioningRight,
      },
    },
  ],
};

const connectingRodPositioningTop = -2;
const connectingRodPositioningRight = 95;
const connectingRodPositioningBottom = 89;
const connectingRodPositioningLeft = 1;

export const connectingRodLinks: Product = {
  id: 2,
  src: "/png/connectingRod.png",
  path: "/connecting-rod",
  width: 100,
  name: "Шатун СИН32.02.102.000",
  drawing: 2,
  parts: [
    {
      id: 1,
      position: 1,
      name: "Шатун",
      designation: "СИН32.02.102.001",
      quantity: 1,
      positioning: {
        top: 41,
        left: connectingRodPositioningRight,
      },
    },
    {
      id: 2,
      position: 2,
      name: "Крышка шатуна",
      designation: "СИН32.02.102.002",
      quantity: 1,
      positioning: {
        top: connectingRodPositioningTop,
        left: 50,
      },
    },
    {
      id: 3,
      position: 3,
      name: "Втулка",
      designation: "СИН32.02.102.003",
      quantity: 4,
      positioning: {
        top: connectingRodPositioningTop,
        left: 60,
      },
    },
    {
      id: 4,
      position: 4,
      name: "Втулка",
      designation: "СИН32.02.102.004",
      quantity: 1,
      positioning: {
        top: connectingRodPositioningBottom,
        left: 46,
      },
    },
    {
      id: 5,
      position: 5,
      name: "Штифт",
      designation: "СИН61.00.102.007",
      quantity: 1,
      positioning: {
        top: 18,
        left: connectingRodPositioningLeft,
      },
    },
    {
      id: 6,
      position: 6,
      name: "Доработка вкладыша",
      designation: "СИН32.02.102.005",
      quantity: 1,
      positioning: {
        top: 49,
        left: connectingRodPositioningLeft,
      },
    },
    {
      id: 7,
      position: 7,
      name: "Доработка вкладыша",
      designation: "СИН32.02.102.006",
      quantity: 1,
      positioning: {
        top: connectingRodPositioningBottom,
        left: 38,
      },
    },
    {
      id: 8,
      position: 8,
      name: "Жиклер",
      designation: "СИН32.02.102.007",
      quantity: 1,
      positioning: {
        top: connectingRodPositioningTop,
        left: 69,
      },
    },
    {
      id: 9,
      position: 9, //нет описания
      name: "Нет описания",
      designation: "Нет описания",
      description: "Нет описания",
      // quantity: 1,
      positioning: {
        top: 61,
        left: connectingRodPositioningRight,
      },
    },
    {
      id: 10,
      position: 10,
      name: "Винт",
      description: "М10-6gx16.45Н.40Х.05 ГОСТ 11075-93",
      quantity: 1,
      positioning: {
        top: connectingRodPositioningBottom,
        left: 80,
      },
    },
    {
      id: 11,
      position: 11,
      name: "Винт",
      description: "М16х1,5-6gx90.12.9 DIN 912",
      quantity: 4,
      positioning: {
        top: connectingRodPositioningTop,
        left: 33,
      },
    },
  ],
};

const tractionUnitPositioningTop = 3;

export const tractionUnitLinks: Product = {
  id: 3,
  src: "/png/tractionUnit.png",
  path: "/traction-unit",
  width: 100,
  name: "Узел тяги",
  drawing: 3,
  parts: [
    {
      id: 1,
      position: 1,
      name: "Тяга",
      designation: "Переменные данные",
      description: "Переменные данные",
      quantity: 1,
      positioning: {
        top: tractionUnitPositioningTop,
        left: 15,
      },
    },
    {
      id: 2,
      position: 2,
      name: "Штифт",
      designation: "Переменные данные",
      description: "Переменные данные",
      quantity: 1,
      positioning: {
        top: tractionUnitPositioningTop,
        left: 63,
      },
    },
    {
      id: 3,
      position: 3,
      name: "Упор",
      designation: "Переменные данные",
      description: "Переменные данные",
      quantity: 4,
      positioning: {
        top: tractionUnitPositioningTop,
        left: 82,
      },
    },
    {
      id: 4,
      position: 4,
      name: "Футорка",
      designation: "Переменные данные",
      description: "Переменные данные",
      quantity: 1,
      positioning: {
        top: tractionUnitPositioningTop,
        left: 95,
      },
    },
  ],
};

const waterworksPositioningRight = 89;
const waterworksPositioningLeft = 2;

export const waterworksLinks: Product = {
  id: 4,
  src: "/png/waterworks.png",
  path: "/waterworks",
  width: 100,
  name: "Гидроузел СИН32.02.109.000 с насоса №3454",
  drawing: 4,
  parts: [
    {
      id: 1,
      position: 1,
      name: "Крышка",
      designation: "СИН63.00.108.100",
      quantity: 3,
      positioning: {
        top: 0,
        left: waterworksPositioningLeft,
      },
    },
    {
      id: 2,
      position: 2,
      name: "Опора",
      designation: "СИН32.02.108.300",
      quantity: 3,
      positioning: {
        top: 76,
        left: waterworksPositioningRight,
      },
    },
    {
      id: 3,
      position: 3, // две 3 позиции
      name: "Коробка клапанная",
      designation: "СИН32.02.109.001",
      quantity: 3,
      positioning: {
        top: 53,
        left: waterworksPositioningLeft,
        top2: 4,
        left2: waterworksPositioningRight,
      },
    },
    {
      id: 4,
      position: 4,
      name: "Втулка",
      designation: "СИН32.02.109.003",
      quantity: 2,
      positioning: {
        top: 39,
        left: waterworksPositioningLeft,
        top2: 28,
        left2: waterworksPositioningRight,
      },
    },
    {
      id: 5,
      position: 5,
      name: "Кольцо",
      designation: "СИН63.00.108.004",
      quantity: 6,
      positioning: {
        top: 10,
        left: waterworksPositioningLeft,
        top2: 56,
        left2: waterworksPositioningRight,
      },
    },
    {
      id: 6,
      position: 6,
      name: "Крышка",
      designation: "СИН63.00.108.005",
      quantity: 3,
      positioning: {
        top: 36,
        left: waterworksPositioningRight,
      },
    },
    {
      id: 7,
      position: 7,
      name: "Манжета",
      designation: "СИН63.00.108.006",
      quantity: 6,
      positioning: {
        top: 61,
        left: waterworksPositioningRight,
        top2: 16,
        left2: waterworksPositioningLeft,
      },
    },
    {
      id: 8,
      position: 8,
      name: "Пружина",
      designation: "СИН63.00.110.004",
      quantity: 6,
      positioning: {
        top: 83,
        left: waterworksPositioningRight,
        top2: 22,
        left2: waterworksPositioningLeft,
      },
    },
    {
      id: 9,
      position: 9,
      name: "Кольцо",
      designation: "СИН32.02.109.004",
      quantity: 6,
      positioning: {
        top: 46,
        left: waterworksPositioningLeft,
        top2: 2,
        left2: 65,
      },
    },
    {
      id: 10,
      position: 10,
      name: "Кольцо",
      description: "135-145-46-2-3 ГОСТ 18829-73/ГОСТ 9833-73",
      quantity: 3,
      positioning: {
        top: 71,
        left: waterworksPositioningRight,
      },
    },
    {
      id: 11,
      position: 11,
      name: "Манжета",
      designation: "СИН32.02.108.002",
      quantity: 6,
      positioning: {
        top: 50,
        left: waterworksPositioningLeft,
        top2: 6,
        left2: 55,
      },
    },
    {
      id: 12,
      position: 12,
      name: "Кольцо",
      description: "100-108-46-2-4 ГОСТ 18829-73/ГОСТ 9833-73",
      quantity: 6,
      positioning: {
        top: 33,
        left: waterworksPositioningLeft,
        top2: 97,
        left2: waterworksPositioningRight,
      },
    },
    {
      id: 13,
      position: 13,
      name: "Уплотнение плунжера",
      designation: "Переменные данные",
      description: "Переменные данные",
      quantity: 3,
      positioning: {
        top: 59,
        left: waterworksPositioningLeft,
      },
    },
    {
      id: 14,
      position: 14,
      name: "Клапан",
      designation: "СИН32.00.108.600",
      quantity: 6,
      positioning: {
        top: 88,
        left: waterworksPositioningRight,
        top2: 26,
        left2: waterworksPositioningLeft,
      },
    },
    {
      id: 15,
      position: 15,
      name: "Седло",
      designation: "СИН63.01.108.800",
      quantity: 6,
      positioning: {
        top: 93,
        left: waterworksPositioningRight,
        top2: 29,
        left2: waterworksPositioningLeft,
      },
    },
  ],
};

const collectorPositioningBottom = 90;

export const collectorLinks: Product = {
  id: 5,
  src: "/png/collector.png",
  path: "/collector",
  width: 100,
  name: "Коллектор СИН32.02.108.100",
  drawing: 5,
  parts: [
    {
      id: 1,
      position: 1,
      name: "Корпус коллектора",
      designation: "СИН32.02.108.110",
      quantity: 1,
      positioning: {
        top: collectorPositioningBottom,
        left: 38,
      },
    },
    {
      id: 2,
      position: 2,
      name: "Заглушка",
      designation: "СИН32.02.108.101",
      quantity: 1,
      positioning: {
        top: collectorPositioningBottom,
        left: 81,
      },
    },
    {
      id: 3,
      position: 3,
      name: "Прокладка",
      designation: "СИН32.02.108.102",
      description: "пластина 2-МБС-М1-3 ГОСТ 7338-77 ø65",
      quantity: 3,
      positioning: {
        top: collectorPositioningBottom,
        left: 53,
      },
    },
    {
      id: 4,
      position: 4,
      name: "Заглушка",
      designation: "СИН31.00.01.150.002",
      quantity: 3,
      positioning: {
        top: collectorPositioningBottom,
        left: 45,
      },
    },
    {
      id: 5,
      position: 5,
      name: "Болт",
      description: "М12-8gx40.58.019 ГОСТ 7798-70",
      quantity: 4,
      positioning: {
        top: collectorPositioningBottom,
        left: 62,
      },
    },
    {
      id: 6,
      position: 6,
      name: "Гайка",
      description: "М12-7Н.8.019 ГОСТ 5915-70",
      quantity: 4,
      positioning: {
        top: collectorPositioningBottom,
        left: 89,
      },
    },
    {
      id: 7,
      position: 7,
      name: "Кольцо",
      description: "145-155-46-2-4 ГОСТ 9833-73 / ГОСТ 18829-73",
      quantity: 1,
      positioning: {
        top: collectorPositioningBottom,
        left: 78,
      },
    },
    {
      id: 8,
      position: 8,
      name: "Шайба",
      description: "12.03.019 ГОСТ11371-78",
      quantity: 8,
      positioning: {
        top: collectorPositioningBottom,
        left: 66,
      },
    },
    {
      id: 9,
      position: 9,
      name: "Шайба",
      description: "12.65Г.019 ГОСТ 6402-70",
      quantity: 4,
      positioning: {
        top: collectorPositioningBottom,
        left: 86,
      },
    },
  ],
};

export const valveLinks: Product = {
  id: 6,
  src: "/png/valve.png",
  path: "/valve",
  width: 100,
  name: "Клапан СИН32.00.108.600",
  drawing: 6,
  parts: [
    {
      id: 1,
      position: 1,
      name: "Клапан",
      designation: "СИН32.00.108.600",
      // quantity: 1,
      positioning: {
        top: 0,
        left: 30,
      },
    },
  ],
};

export const valveTwoLinks: Product = {
  id: 7,
  src: "/png/valve-02.png",
  path: "/valveTwo",
  width: 100,
  name: "Клапан СИН63.00.108.600",
  drawing: 7,
  parts: [
    {
      id: 1,
      position: 1,
      name: "Корпус клапана",
      designation: "СИН63.00.108.601",
      quantity: 1,
      positioning: {
        top: 6,
        left: 90,
      },
    },
    {
      id: 2,
      position: 2,
      name: "Прокладка",
      designation: "СИН63.00.108.603",
      quantity: 1,
      positioning: {
        top: 70,
        left: 90,
      },
    },
  ],
};

const plungerSealPositioningTop = 2;

export const plungerSealLinks: Product = {
  id: 8,
  src: "/png/plungerSeal.png",
  path: "/plungerSeal",
  width: 100,
  name: "Уплотнение плунжера СИН32.02.108.500",
  drawing: 8,
  parts: [
    {
      id: 1,
      position: 1,
      name: "Гайка",
      designation: "Переменные данные",
      quantity: 1,
      positioning: {
        top: plungerSealPositioningTop,
        left: 17,
      },
    },
    {
      id: 2,
      position: 2,
      name: "Втулка",
      designation: "Переменные данные",
      quantity: 1,
      positioning: {
        top: plungerSealPositioningTop,
        left: 33,
      },
    },
    {
      id: 3,
      position: 3,
      name: "Пакет уплотнений",
      designation: "Переменные данные",
      quantity: 1,
      positioning: {
        top: plungerSealPositioningTop,
        left: 49,
      },
    },
    {
      id: 4,
      position: 4,
      name: "Стакан",
      designation: "Переменные данные",
      quantity: 1,
      positioning: {
        top: plungerSealPositioningTop,
        left: 71,
      },
    },
    {
      id: 5,
      position: 5,
      name: "Манжета",
      designation: "Переменные данные",
      quantity: 1,
      positioning: {
        top: plungerSealPositioningTop,
        left: 85,
      },
    },
    {
      id: 6,
      position: 6,
      name: "Кольцо",
      description: "175-185-46-2-4 ГОСТ 9833-73/ГОСТ 18829-73",
      quantity: 1,
      positioning: {
        top: plungerSealPositioningTop,
        left: 94,
      },
    },
  ],
};

const sealPackagePositioningTop = 2;

export const sealPackageLinks: Product = {
  id: 9,
  src: "/png/sealPackage.png",
  path: "/sealPackage",
  width: 100,
  name: "Пакет уплотнений СИН32.00.108.510",
  drawing: 9,
  parts: [
    {
      id: 1,
      position: 1,
      name: "Манжета",
      designation: "Переменные данные",
      quantity: 1,
      positioning: {
        top: sealPackagePositioningTop,
        left: 24,
      },
    },
    {
      id: 2,
      position: 2,
      name: "Кольцо",
      description: "120-125-30-2-4 ГОСТ 9833-73/ГОСТ 18829-73",
      quantity: 1,
      positioning: {
        top: sealPackagePositioningTop,
        left: 42,
      },
    },
    {
      id: 3,
      position: 3,
      name: "Кольцо",
      designation: "Переменные данные",
      quantity: 1,
      positioning: {
        top: sealPackagePositioningTop,
        left: 59,
      },
    },
    {
      id: 4,
      position: 4,
      name: "Манжета",
      designation: "Переменные данные",
      quantity: 1,
      positioning: {
        top: sealPackagePositioningTop,
        left: 77,
      },
    },
    {
      id: 5,
      position: 5,
      name: "Кольцо",
      designation: "Переменные данные",
      quantity: 1,
      positioning: {
        top: sealPackagePositioningTop,
        left: 94,
      },
    },
  ],
};

const housingSealPositioningTop = -1;
const housingSealPositioningBottom = 94;

export const housingSealLinks: Product = {
  id: 10,
  src: "/png/housingSeal.png",
  path: "/housingSeal",
  width: 80,
  name: "Уплотнение корпуса",
  drawing: 10,
  parts: [
    {
      id: 1,
      position: 1,
      name: "Шнур",
      description: "1-4 с Ø4 ГОСТ 6467-79 (L=860мм)",
      // quantity: 3,
      positioning: {
        top: housingSealPositioningTop,
        left: 24,
      },
    },
    {
      id: 2,
      position: 2,
      name: "Фланец",
      designation: "СИН32.02.100.003",
      quantity: 3,
      positioning: {
        top: housingSealPositioningTop,
        left: 39,
      },
    },
    {
      id: 3,
      position: 3,
      name: "Кольцо",
      designation: "СИН63.00.104.001",
      quantity: 3,
      positioning: {
        top: housingSealPositioningTop,
        left: 50,
      },
    },
    {
      id: 4,
      position: 4,
      name: "Шайба",
      description: "8.65Г.019 ГОСТ6402-70",
      quantity: 12,
      positioning: {
        top: housingSealPositioningBottom,
        left: 43,
      },
    },
    {
      id: 5,
      position: 5,
      name: "Шайба",
      description: "8.03.019 ГОСТ 11371-78",
      quantity: 12,
      positioning: {
        top: housingSealPositioningBottom,
        left: 48,
      },
    },
    {
      id: 6,
      position: 6,
      name: "Болт",
      description: "М8-8gx25.58.019 ГОСТ 7798-70",
      quantity: 12,
      positioning: {
        top: housingSealPositioningBottom,
        left: 55,
      },
    },
    {
      id: 7,
      position: 7,
      name: "Чехол",
      designation: "СИН32.02.100.004",
      quantity: 3,
      positioning: {
        top: housingSealPositioningBottom,
        left: 79,
      },
    },
  ],
};

const installingTheSensorIndicatorPositioningTop = 86;
const installingTheSensorIndicatorPositioningBottom = 94;
const installingTheSensorIndicatorPositioningRight = 77;

export const installingTheSensorIndicatorLinks: Product = {
  id: 11,
  src: "/png/installingTheSensorIndicator.png",
  path: "/installingTheSensorIndicator",
  width: 90,
  name: "Установка индикатора датчика (до №3651)",
  drawing: 11,
  parts: [
    {
      id: 1,
      position: 1,
      name: "Крышка",
      designation: "СИН32.02.106.001",
      quantity: 3,
      positioning: {
        top: installingTheSensorIndicatorPositioningTop,
        left: 19,
      },
    },
    {
      id: 2,
      position: 2,
      name: "Шнур",
      description: "1-4 Md4 ГОСТ 6467-79, L=800 мм",
      quantity: 3,
      positioning: {
        top: installingTheSensorIndicatorPositioningTop,
        left: 11,
      },
    },
    {
      id: 3,
      position: 3,
      name: "Шайба",
      description: "16.03.019 ГОСТ 11371-78",
      quantity: 12,
      positioning: {
        top: installingTheSensorIndicatorPositioningBottom,
        left: 44,
      },
    },
    {
      id: 4,
      position: 4,
      name: "Шайба",
      description: "16.65Г.019 ГОСТ 6402-70",
      quantity: 12,
      positioning: {
        top: installingTheSensorIndicatorPositioningBottom,
        left: 49,
      },
    },
    {
      id: 5,
      position: 5,
      name: "Болт",
      description: "М16-8gх50.58.019 ГОСТ 7798-70",
      quantity: 12,
      positioning: {
        top: installingTheSensorIndicatorPositioningBottom,
        left: 54,
      },
    },
    {
      id: 6,
      position: 6,
      name: "Индуктивный выключатель",
      description: "ISNFC2A-32 P-4LS4 + гайка",
      quantity: 12,
      positioning: {
        top: 73,
        left: installingTheSensorIndicatorPositioningRight,
      },
    },
    {
      id: 7,
      position: 7,
      name: "Штуцер",
      designation: "СИН46.02.200.003",
      quantity: 3,
      positioning: {
        top: 61,
        left: installingTheSensorIndicatorPositioningRight,
      },
    },
    {
      id: 8,
      position: 8,
      name: "Заглушка",
      description: "S2610 1/2",
      quantity: 3,
      positioning: {
        top: 53,
        left: installingTheSensorIndicatorPositioningRight,
      },
    },
  ],
};

const installingTheSensorIndicatorTwoPositioningLeft = 10;
const installingTheSensorIndicatorTwoPositioningRight = 88;

export const installingTheSensorIndicatorTwoLinks: Product = {
  id: 12,
  src: "/png/installingTheSensorIndicatorTwo.png",
  path: "/installingTheSensorIndicatorTwo",
  width: 80,
  name: "Установка индикатора датчика (с №3651)",
  drawing: 12,
  parts: [
    {
      id: 1,
      position: 1,
      name: "Крышка",
      designation: "СИН32.02.106.101",
      quantity: 1,
      positioning: {
        top: 65,
        left: installingTheSensorIndicatorTwoPositioningLeft,
      },
    },
    {
      id: 2,
      position: 2,
      name: "Шнур",
      description: "1-4 Md4 ГОСТ 6467-79, L=800 мм",
      quantity: 1,
      positioning: {
        top: 56,
        left: installingTheSensorIndicatorTwoPositioningLeft,
      },
    },
    {
      id: 3,
      position: 3,
      name: "Кольцо",
      description: "А20 ГОСТ 13942-86",
      quantity: 1,
      positioning: {
        top: 48,
        left: installingTheSensorIndicatorTwoPositioningLeft,
      },
    },
    {
      id: 4,
      position: 4,
      name: "Кольцо",
      description: "016-020-25-2-3",
      quantity: 1,
      positioning: {
        top: 36,
        left: installingTheSensorIndicatorTwoPositioningRight,
      },
    },
    {
      id: 5,
      position: 5,
      name: "Штуцер",
      designation: "СИН32.02.106.102",
      quantity: 1,
      positioning: {
        top: 58,
        left: installingTheSensorIndicatorTwoPositioningRight,
      },
    },
    {
      id: 6,
      position: 6,
      name: "Индуктивный выключатель",
      description: "ISNFC2A-32 P-4LS4 + гайка",
      quantity: 1,
      positioning: {
        top: 67,
        left: installingTheSensorIndicatorTwoPositioningRight,
      },
    },
    {
      id: 7,
      position: 7,
      name: "Винт",
      description: "М8-8gх20.58.019 ГОСТ 11738-84",
      quantity: 8,
      positioning: {
        top: 82,
        left: installingTheSensorIndicatorTwoPositioningRight,
      },
    },
    {
      id: 8,
      position: 8,
      name: "Шайба",
      description: "8.65Г.019 ГОСТ 6402-70",
      quantity: 8,
      positioning: {
        top: 88,
        left: installingTheSensorIndicatorTwoPositioningRight,
      },
    },
    {
      id: 9,
      position: 9,
      name: "Втулка",
      designation: "СИН51.00.100.016-02",
      quantity: 8,
      positioning: {
        top: 93,
        left: installingTheSensorIndicatorTwoPositioningRight,
      },
    },
    {
      id: 10,
      position: 10,
      name: "Заглушка",
      description: "S2610 1/2",
      quantity: 1,
      positioning: {
        top: 27,
        left: installingTheSensorIndicatorTwoPositioningRight,
      },
    },
  ],
};

const plungerLubricationSystemPositioningTop = -1;
const plungerLubricationSystemPositioningRight = 71;
const plungerLubricationSystemPositioningBottom = 90;
const plungerLubricationSystemPositioningLeft = 3;

export const plungerLubricationSystemLinks: Product = {
  id: 13,
  src: "/png/plungerLubricationSystem.png",
  path: "/plungerLubricationSystem",
  width: 120,
  name: "Система смазки плунжеров СИН32.02.104.000",
  drawing: 13,
  parts: [
    {
      id: 1,
      position: 1,
      name: "Кронштейн",
      designation: "СИН32.02.104.001",
      quantity: 1,
      positioning: {
        top: 24,
        left: 81,
      },
    },
    {
      id: 2,
      position: 2,
      name: "Переходник",
      designation: "СИН32.04.100.05.10.002",
      quantity: 1,
      positioning: {
        top: 41,
        left: 108,
      },
    },
    {
      id: 3,
      position: 3,
      name: "Доработка бака",
      designation: "СИН32.04.100.05.10.007",
      quantity: 1,
      positioning: {
        top: 17,
        left: 81,
      },
    },
    {
      id: 4,
      position: 4,
      name: "Дроссель",
      designation: "СИН32.04.100.05.10.009",
      quantity: 1,
      positioning: {
        top: plungerLubricationSystemPositioningBottom,
        left: 102,
      },
    },
    {
      id: 5,
      position: 5,
      name: "Болт",
      description: "М8-8gx35.58.019 ГОСТ 7798-70",
      quantity: 2,
      positioning: {
        top: 34,
        left: 81,
      },
    },
    {
      id: 6,
      position: 6,
      name: "Гайка",
      description: "М8-7Н.8.019 ГОСТ 5915-70",
      quantity: 3,
      positioning: {
        top: plungerLubricationSystemPositioningTop,
        left: 26,
        top2: 39,
        left2: 81,
      },
    },
    {
      id: 7,
      position: 7,
      name: "Гайка",
      description: "М16-7Н.8.019 ГОСТ 5915-70",
      quantity: 1,
      positioning: {
        top: 41,
        left: 102,
      },
    },
    {
      id: 8,
      position: 8,
      name: "Шайба",
      description: "8.03.019 ГОСТ 11371-78",
      quantity: 2,
      positioning: {
        top: 44,
        left: 81,
      },
    },
    {
      id: 9,
      position: 9,
      name: "Шайба",
      description: "16.65Г.019 ГОСТ 6402-70",
      quantity: 1,
      positioning: {
        top: 47,
        left: 102,
      },
    },
    {
      id: 10,
      position: 10,
      name: "Шайба",
      description: "8.65Г.019 ГОСТ 6402-70",
      quantity: 2,
      positioning: {
        top: 49,
        left: 81,
      },
    },
    {
      id: 11,
      position: 11,
      name: "Шпилька",
      description: "М8-8gx25.58.019 ГОСТ 22036-76",
      quantity: 1,
      positioning: {
        top: plungerLubricationSystemPositioningTop,
        left: 31,
      },
    },
    {
      id: 12,
      position: 12,
      name: "Колпачок",
      description: "6708 8",
      quantity: 9,
      positioning: {
        top: 25,
        left: plungerLubricationSystemPositioningRight,
        top2: 68,
        left2: 85,
        top3: 68,
        left3: 109,
        top4: 25,
        left4: plungerLubricationSystemPositioningLeft,
        top5: 70,
        left5: plungerLubricationSystemPositioningRight,
      },
    },
    {
      id: 13,
      position: 13,
      name: "Кран шаровой муфтовый",
      description: "Dу15",
      quantity: 2,
      positioning: {
        top: 41,
        left: 115,
        top2: 68,
        left2: 102,
      },
    },
    {
      id: 14,
      position: 14,
      name: "Крышка расширительного бочка",
      description: "Газель СБ 3302-1311065",
      quantity: 1,
      positioning: {
        top: 8,
        left: 81,
      },
    },
    {
      id: 15,
      position: 15,
      name: "Фитинг",
      description: "2033 1/4",
      quantity: 1,
      positioning: {
        top: 45,
        left: plungerLubricationSystemPositioningLeft,
      },
    },
    {
      id: 16,
      position: 16,
      name: "Фитинг",
      description: "2511 1/4",
      quantity: 1,
      positioning: {
        top: 53,
        left: plungerLubricationSystemPositioningLeft,
      },
    },
    {
      id: 17,
      position: 17,
      name: "Фитинг",
      description: "2531 1/2-1/4",
      quantity: 2,
      positioning: {
        top: plungerLubricationSystemPositioningBottom,
        left: 91,
        top2: plungerLubricationSystemPositioningBottom,
        left2: 107,
      },
    },
    {
      id: 18,
      position: 18,
      name: "Фитинг",
      description: "S6520 8-1/4",
      quantity: 6,
      positioning: {
        top: 30,
        left: plungerLubricationSystemPositioningRight,
        top2: 74,
        left2: 85,
        top3: 74,
        left3: 109,
        top4: 30,
        left4: plungerLubricationSystemPositioningLeft,
        top5: 75,
        left5: plungerLubricationSystemPositioningRight,
      },
    },
    {
      id: 19,
      position: 19,
      name: 'Хомут сантехнический с гайкой М8, 3/4"',
      description: "(d25-28 мм)",
      quantity: 1,
      positioning: {
        top: plungerLubricationSystemPositioningTop,
        left: 36,
      },
    },
    {
      id: 20,
      position: 20,
      name: "Трубка",
      description: "Мод. TRN 8/6, L=370 мм",
      quantity: 1,
      positioning: {
        top: 59,
        left: plungerLubricationSystemPositioningRight,
      },
    },
    {
      id: 21,
      position: 21,
      name: "Трубка",
      description: "Мод. TRN 8/6, L=400 мм",
      quantity: 1,
      positioning: {
        top: 82,
        left: plungerLubricationSystemPositioningRight,
      },
    },
    {
      id: 22,
      position: 22,
      name: "Трубка",
      description: "Мод. TRN 8/6, L=600 мм",
      quantity: 1,
      positioning: {
        top: plungerLubricationSystemPositioningTop,
        left: 61,
      },
    },
    {
      id: 23,
      position: 23,
      name: "Трубка",
      description: "Мод. TRN 8/6, L=770 мм",
      quantity: 1,
      positioning: {
        top: 5,
        left: plungerLubricationSystemPositioningLeft,
      },
    },
    {
      id: 24,
      position: 24,
      name: "Спираль защитная",
      description: "Dнар.=12 мм, L=470 мм",
      quantity: 1,
      positioning: {
        top: 64,
        left: plungerLubricationSystemPositioningRight,
      },
    },
    {
      id: 25,
      position: 25,
      name: "Спираль защитная",
      description: "Dнар.=12 мм, L=500 мм",
      quantity: 1,
      positioning: {
        top: 87,
        left: plungerLubricationSystemPositioningRight,
      },
    },
    {
      id: 26,
      position: 26,
      name: "Спираль защитная",
      description: "Dнар.=12 мм, L=700 мм",
      quantity: 1,
      positioning: {
        top: 5,
        left: 61,
      },
    },
    {
      id: 27,
      position: 27,
      name: "Спираль защитная",
      description: "Dнар.=12 мм, L=870 мм",
      quantity: 1,
      positioning: {
        top: 10,
        left: plungerLubricationSystemPositioningLeft,
      },
    },
  ],
};

const pumpLubricationSystemPositioningTop = -1;
const pumpLubricationSystemPositioningBottom = 92;
const pumpLubricationSystemPositioningLeft = 0;

export const pumpLubricationSystemLinks: Product = {
  id: 14,
  src: "/png/pumpLubricationSystem.png",
  path: "/pumpLubricationSystem",
  width: 110,
  name: "Система смазки насоса СИН32.02.107.000",
  drawing: 14,
  parts: [
    {
      id: 1,
      position: 1,
      name: "Кронштейн фильтра",
      designation: "СИН32.02.107.100",
      quantity: 1,
      positioning: {
        top: pumpLubricationSystemPositioningBottom,
        left: 42,
      },
    },
    {
      id: 2,
      position: 2,
      name: "Переходник",
      designation: "СИН32.02.107.001",
      quantity: 1,
      positioning: {
        top: pumpLubricationSystemPositioningBottom,
        left: 37,
      },
    },
    {
      id: 3,
      position: 3,
      name: "Болт",
      description: "М10-8gx20.58.019 ГОСТ 7798-70",
      quantity: 2,
      positioning: {
        top: 91,
        left: 52,
      },
    },
    {
      id: 4,
      position: 4,
      name: "Винт",
      description: "М8-8gx20.58.019 ГОСТ 11738-84",
      quantity: 4,
      positioning: {
        top: pumpLubricationSystemPositioningTop,
        left: 48,
      },
    },
    {
      id: 5,
      position: 5,
      name: "Шайба",
      description: "8.65Г.019 ГОСТ 6402-70",
      quantity: 4,
      positioning: {
        top: pumpLubricationSystemPositioningTop,
        left: 52,
      },
    },
    {
      id: 6,
      position: 6,
      name: "Шайба",
      description: "10.65Г.019 ГОСТ 6402-70",
      quantity: 2,
      positioning: {
        top: 96,
        left: 52,
      },
    },
    {
      id: 7,
      position: 7,
      name: "Датчик аварийного давления масла",
      description: "ММ111В",
      quantity: 1,
      positioning: {
        top: pumpLubricationSystemPositioningTop,
        left: 31,
      },
    },
    {
      id: 8,
      position: 8,
      name: "Заглушка",
      description: 'S2610 1/4"',
      quantity: 1,
      positioning: {
        top: pumpLubricationSystemPositioningTop,
        left: 38,
      },
    },
    {
      id: 9,
      position: 9,
      name: "Пробка",
      description: 'G1/2"_ПБ 2100',
      quantity: 1,
      positioning: {
        top: 23,
        left: pumpLubricationSystemPositioningLeft,
      },
    },
    {
      id: 10,
      position: 10,
      name: "Проходник",
      description: 'М27х1,5 х К 3/4" СН 2737-2600',
      quantity: 1,
      positioning: {
        top: pumpLubricationSystemPositioningTop,
        left: 57,
      },
    },
    {
      id: 11,
      position: 11,
      name: "Резинометаллическое кольцо",
      description: '(USIT) под G1/2"',
      quantity: 1,
      positioning: {
        top: 29,
        left: pumpLubricationSystemPositioningLeft,
      },
    },
    {
      id: 12,
      position: 12,
      name: "Рукав РВД",
      description: "16х13х900-11.90/11-М27х1,5/М27х1,5-УХЛ",
      quantity: 1,
      positioning: {
        top: 8,
        left: pumpLubricationSystemPositioningLeft,
      },
    },
    {
      id: 13,
      position: 13,
      name: "Рукав РВД",
      description: "16х13х1200-11.90/11.90-180-М27х1,5/М27х1,5-УХЛ",
      quantity: 1,
      positioning: {
        top: pumpLubricationSystemPositioningBottom,
        left: 59,
      },
    },
    {
      id: 14,
      position: 14,
      name: "Рукав РВД",
      description: "25х8,8х1200-11.90/11.90-М42х2/М42х2-УХЛ",
      quantity: 1,
      positioning: {
        top: pumpLubricationSystemPositioningTop,
        left: 82,
      },
    },
    {
      id: 15,
      position: 15,
      name: "Фильтр",
      description: "2ФГМ32-40К",
      quantity: 1,
      positioning: {
        top: pumpLubricationSystemPositioningTop,
        left: 43,
      },
    },
    {
      id: 16,
      position: 16,
      name: "Фильтрующий элемент",
      description: "STR0704SG1 M90 P01",
      quantity: 1,
      positioning: {
        top: 24,
        left: 98,
      },
    },
  ],
};

export const schemes = [
  { path: "three-plunger-pump", data: threePlungerPumpLinks },
  { path: "connecting-rod", data: connectingRodLinks },
  { path: "traction-unit", data: tractionUnitLinks },
  { path: "waterworks", data: waterworksLinks },
  { path: "collector", data: collectorLinks },
  { path: "valve", data: valveLinks },
  { path: "valveTwo", data: valveTwoLinks },
  { path: "plungerSeal", data: plungerSealLinks },
  { path: "sealPackage", data: sealPackageLinks },
  { path: "housingSeal", data: housingSealLinks },
  {
    path: "installingTheSensorIndicator",
    data: installingTheSensorIndicatorLinks,
  },
  {
    path: "installingTheSensorIndicatorTwo",
    data: installingTheSensorIndicatorTwoLinks,
  },
  { path: "plungerLubricationSystem", data: plungerLubricationSystemLinks },
  { path: "pumpLubricationSystem", data: pumpLubricationSystemLinks },
];
