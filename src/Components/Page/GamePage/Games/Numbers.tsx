import { saveGameHistory } from "../../../../utils/gameData/saveScore";

import { MouseEventHandler } from "react";
import { GameType } from "../types";

export const Numbers = () => {
  const numbers = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  ];

  let currentNumber = 1,
    clickCounter = 0,
    startTime: number;

  const numberClickHandler: MouseEventHandler<HTMLSpanElement> = (
    event
  ): void => {
    const target = event.target as HTMLElement;

    ++clickCounter;

    if (currentNumber === 1) {
      startTime = Date.now();
    }
    if (currentNumber === 20) {
      const diffMinutes = Math.ceil(Date.now() - startTime / (1000 * 60));

      saveGameHistory(GameType.numbers, { diffMinutes, clickCounter });
    }

    if (currentNumber === Number(target.getAttribute("data-value"))) {
      target.classList.add("clicked");
      ++currentNumber;
    }
  };

  return (
    <div className="gameScreen">
      <h1>
        Numbers game <span title="Informații despre joc">-i-</span>
      </h1>
      {numbers.map((number, i) => {
        return (
          <span
            key={i}
            data-value={number}
            className="number"
            onClick={numberClickHandler}
            style={{
              position: "absolute",
              top: Math.round(Math.random() * 90) + "vh",
              left: Math.round(Math.random() * 90) + "vw",
            }}
          >
            {number}
          </span>
        );
      })}
    </div>
  );
};
