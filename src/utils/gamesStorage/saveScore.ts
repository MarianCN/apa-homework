import { GameType } from "../../Components/Games/types";
import { getFromLocalStorage, saveToLocalStorage } from "./localStorage";
import { GamesData } from "./types";

export const saveGameHistory = (
  game: GameType,
  dataToSave: Record<string, unknown>
) => {
  const data = getFromLocalStorage("g-data") as GamesData;

  if (!Object.keys(data).length) {
    const newData = {
      games: {
        [game]: {
          history: [dataToSave],
        },
      },
    };

    saveToLocalStorage("g-data", newData);
  } else {
    const data = getFromLocalStorage("g-data") as GamesData;

    if (data.games) {
      const newData = {
        ...data,
        games: {
          ...data.games,
          [game]: {
            history: [...(data.games[game]?.history ?? []), dataToSave],
          },
        },
      };

      saveToLocalStorage("g-data", newData);
    }
  }
};
