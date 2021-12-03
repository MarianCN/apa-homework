import { GameType } from "../../Components/Page/GamePage/types";

type GameNumbersData = {
  history: {
    diffMinutes: number;
    clickCounter: number;
  }[];
};
type GameColorsData = {
  history: {}[];
};
type GameSquaresData = {
  history: {}[];
};

export type GamesData = {
  games: {
    [GameType.colors]?: GameColorsData;
    [GameType.numbers]?: GameNumbersData;
    [GameType.squares]?: GameSquaresData;
  };
};
