import { GameType } from "../../Components/Games/types";

type GameNumbersData = {
  history: {
    time: number;
    clicks: number;
  }[];
};

type GameColorsData = {
  history: {
    time: number;
    rightAnswers: number;
  }[];
};

export type GamesData = {
  games?: {
    [GameType.colors]?: GameColorsData;
    [GameType.numbers]?: GameNumbersData;
  };
};
