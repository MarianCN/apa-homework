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
    numbers?: GameNumbersData;
    colors?: GameColorsData;
    squares?: GameSquaresData;
  };
};
