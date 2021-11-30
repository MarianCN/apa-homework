import { saveGameHistory } from "../../../../utils/gameData/saveScore";

import { MouseEventHandler } from "react";
import { GameType } from "../types";
import { useState } from "react";

let clickCounter = 0;
let startTime: number;

export const Numbers = () => {
  const [_currentNumber, setCurrentNumber] = useState(1);

  const [a, setA] = useState([
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  ]);

  const numbers = a.map((item) => ({
    value: item,
    top: Math.round(Math.random() * 90) + "vh",
    left: Math.round(Math.random() * 90) + "vw",
  }));

  const numberClickHandler: MouseEventHandler<HTMLSpanElement> = (
    event
  ): void => {
    const target = event.target as HTMLElement;

    ++clickCounter;

    if (_currentNumber === 1) {
      startTime = Date.now();
    }
    if (_currentNumber === numbers.length) {
      const diffMinutes = Math.ceil(Date.now() - startTime / (1000 * 60));

      saveGameHistory(GameType.numbers, { diffMinutes, clickCounter });

      // TODO de aratat un mesaj si statistica din jocul curent
    }

    if (_currentNumber === Number(target.getAttribute("data-value"))) {
      setCurrentNumber(_currentNumber + 1);

      setA(a.filter((item) => item !== _currentNumber));
    }
  };

  return (
    <div className="gameScreen">
      <h1>
        {_currentNumber} Numbers game{" "}
        <span title="Informații despre joc">-i-</span>
      </h1>
      {numbers.map((number, i) => {
        return (
          <span
            key={i}
            data-value={number.value}
            className="number"
            onClick={numberClickHandler}
            style={{
              position: "absolute",
              top: number.top,
              left: number.left,
            }}
          >
            {number.value}
          </span>
        );
      })}
    </div>
  );
};
