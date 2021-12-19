import { getFromLocalStorage } from "../../../utils/gamesStorage/localStorage";
import { GamesData } from "../../../utils/gamesStorage/types";
import { GameImage } from "../../GameImage";
import { GameType } from "../../Games/types";

export const StatsPage = () => {
  const data = getFromLocalStorage("g-data") as GamesData;

  const numbersHistory = data?.games?.numbers?.history ?? [];
  const colorsHistory = data?.games?.colors?.history ?? [];

  const numbersBestTime = numbersHistory.length
    ? Math.min(
        ...numbersHistory
          .filter((item) => !isNaN(item?.time))
          .map((item) => item.time)
      ) / 1000
    : 0;

  const numbersAverageTime =
    numbersHistory.reduce((acc, a) => acc + a.time, 0) /
      1000 /
      numbersHistory.length || 0;

  const numbersAverageWA =
    numbersHistory.reduce((acc, a) => acc + a.clicks, 0) /
      numbersHistory.length || 0;

  const colorsBestTime = colorsHistory.length
    ? Math.min(
        ...colorsHistory
          .filter((item) => !isNaN(item?.time))
          .map((item) => item.time)
      ) / 1000
    : 0;

  const colorsAverageTime =
    colorsHistory.reduce((acc, a) => acc + a.time, 0) /
      1000 /
      colorsHistory.length || 0;

  const colorAverageWA =
    colorsHistory.reduce((acc, a) => acc + (10 - a.rightAnswers), 0) /
      colorsHistory.length || 0;

  return (
    <div className="page page-stats">
      <span className="page-title">STATISTICI</span>
      <div className="statistics">
        <div className="statistics-block">
          <GameImage type={GameType.numbers} />
          <div className="game-title">Numbers</div>

          <div className="history-blocks">
            <div className="history-block">
              <div>Cel mai bun timp:</div>
              <div>
                <b>{Math.round(numbersBestTime * 100) / 100} s</b>
              </div>
            </div>

            <div className="history-block">
              <div>Timpul mediu:</div>
              <div>
                <b>{Math.round(numbersAverageTime * 100) / 100} s</b>
              </div>
            </div>
            <div className="history-block">
              <div>Numărul mediu de greșeli: </div>
              <div>
                <b>{Math.round(numbersAverageWA * 100) / 100}</b>
              </div>
            </div>
          </div>
        </div>

        <div className="statistics-block">
          <GameImage type={GameType.colors} />
          <div className="game-title">Colors</div>
          <div className="history-blocks">
            <div className="history-block">
              <div>Cel mai bun timp:</div>
              <div>
                <b>{Math.round(colorsBestTime * 100) / 100} s</b>
              </div>
            </div>

            <div className="history-block">
              <div>Timpul mediu:</div>
              <div>
                <b>{Math.round(colorsAverageTime * 100) / 100} s</b>
              </div>
            </div>
            <div className="history-block">
              <div>Numărul mediu de greșeli: </div>
              <div>
                <b>{Math.round(colorAverageWA * 100) / 100}</b>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
