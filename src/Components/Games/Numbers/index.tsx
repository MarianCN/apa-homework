import { saveGameHistory } from "../../../utils/gameData/saveScore";

import { MouseEventHandler } from "react";
import { useState } from "react";
import { GameType } from "../types";
import { Timer } from "../../Timer";
import { useEffect } from "react";
import { getTime } from "../../../utils/timer";

const totalNumbers = 5;

let clickCounter = 0;
let startTime = 0;
let timePlayed = 0;

const FinalMessage = () => {
  const { mins, secs } = getTime(timePlayed / 1000);

  return (
    <div className="game-stats">
      <div className="game-stats-title">Felicitari!</div>

      <div className="game-stats-row">
        <span>Timp</span>
        <span>
          <span>{`${mins < 10 ? "0" : ""}${mins}`}</span>
          <span>:</span>
          <span>{`${secs < 10 ? "0" : ""}${secs}`}</span>
        </span>
      </div>
      <div className="game-stats-row">
        <span>Greseli</span>
        <span>{clickCounter - totalNumbers}</span>
      </div>
    </div>
  );
};

const colors = [
  "#ffdaff",
  "#b1ffb3",
  "#cbd4ff",
  "#b5ffff",
  "#fcffa6",
  "#ffbe76",
  "#ffcaca",
];

const NumbersScreen = ({
  setOngoing,
}: {
  setOngoing: (v: boolean) => void;
}) => {
  const [currentNumber, setCurrentNumber] = useState(1);

  const [numbers, setNumbers] = useState(
    Array.from({ length: totalNumbers }, (_, i) => i + 1)
  );

  const numbersData = numbers.map((item) => ({
    value: item,
    top: Math.round(Math.random() * 90) + "%",
    left: Math.round(Math.random() * 90) + "%",
    color: colors[Math.floor(Math.random() * colors.length)],
  }));

  const handleNumberClick: MouseEventHandler<HTMLSpanElement> = (
    event
  ): void => {
    const target = event.target as HTMLElement;
    const clickedValue = Number(target.getAttribute("data-value"));

    ++clickCounter;

    if (clickedValue === numbers[0] && numbers.length === 1) {
      timePlayed = Date.now() - startTime;

      const dataToSave = {
        time: timePlayed,
        clicks: clickCounter - totalNumbers,
      };

      console.log(dataToSave);

      saveGameHistory(GameType.numbers, dataToSave);

      setOngoing(false);
    }

    if (currentNumber === clickedValue) {
      setCurrentNumber(currentNumber + 1);

      setNumbers(numbers.filter((item) => item !== currentNumber));
    }
  };

  return (
    <div className="numbers-container">
      {numbersData.map((number, i) => {
        return (
          <span
            key={i}
            data-value={number.value}
            className="number"
            onClick={handleNumberClick}
            style={{
              top: number.top,
              left: number.left,
              backgroundColor: number.color,
            }}
          >
            {number.value}
          </span>
        );
      })}
    </div>
  );
};

export const Numbers = () => {
  const [ongoing, setOngoing] = useState(true);

  useEffect(() => {
    startTime = Date.now();
    clickCounter = 0;
  }, []);

  return (
    <div className="gameScreen gameScreen-numbers">
      {ongoing ? (
        <>
          <Timer ongoing={ongoing} />
          <NumbersScreen setOngoing={setOngoing} />
        </>
      ) : (
        <FinalMessage />
      )}
    </div>
  );
};
