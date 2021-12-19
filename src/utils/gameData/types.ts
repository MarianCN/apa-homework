import { GameType } from "../../Components/Games/types";

type GameNumbersData = {
  history: {
    time: number;
    clicks: number;
  }[];
};

type GameColorsData = {
  history: {
    rightAnswers: number;
    wrongAnswers: number;
  }[];
};

type GameSquaresData = {
  history: {}[];
};

export type GamesData = {
  games: {
    [GameType.colors]?: GameColorsData;
    [GameType.numbers]?: GameNumbersData;
  };
};
