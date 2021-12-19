import { GameType } from "../../Components/Games/types";
import { GameInfo } from "./types";

export const getGameInfo = (type: GameType): GameInfo => {
  switch (type) {
    case GameType.colors:
      return {
        title: "Colors",
        icon: "images/colour.png",
      };

    case GameType.numbers:
      return {
        title: "Numbers",
        icon: "images/numbers.png",
      };
  }
};
