import { getRandomFrom } from "../../../utils/number";

export type ColorsLevels = { id: number; title: string; color: string }[];

export const colorsLevels: ColorsLevels = [
  { id: 0, title: "Negru", color: "black" },
  { id: 1, title: "Rosu", color: "#ff4545" },
  { id: 2, title: "Violet", color: "#de5dff" },
  { id: 3, title: "Albastru", color: "#699fff" },
  { id: 4, title: "Galben", color: "#fff600" },
  { id: 5, title: "Portocaliu", color: "#ffa300" },
  { id: 6, title: "Roz", color: "#ffa5b5" },
  { id: 7, title: "Verde", color: "#17e417" },
  { id: 8, title: "Alb", color: "white" },
];

export const getRandomTwoColors = (colorsLevels: ColorsLevels) => {
  const firstIndex = getRandomFrom(colorsLevels.length - 1);

  const filteredLevels = colorsLevels.filter(
    (_, index) => index !== firstIndex
  );

  const secondIndex = getRandomFrom(colorsLevels.length - 2);

  return [
    colorsLevels[firstIndex]?.id ?? 0,
    filteredLevels[secondIndex]?.id ?? 1,
  ];
};
