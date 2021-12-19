import { useEffect, useState } from "react";
import { saveGameHistory } from "../../../utils/gamesStorage/saveScore";
import { getRandomFrom } from "../../../utils/number";
import { getTime } from "../../../utils/timer";
import { Timer } from "../../Timer";
import { GameType } from "../types";
import { colorsLevels, getRandomTwoColors } from "./utils";

let currentStep = 1;
const totalSteps = 10;

let rightAnswers = 0;
let startTime = 0;
let timePlayed = 0;

const ColorsScreen = ({ setOngoing }: { setOngoing: (v: boolean) => void }) => {
  const [currentLevel, setCurrentLevel] = useState(
    getRandomTwoColors(colorsLevels)
  );

  useEffect(() => {
    startTime = Date.now();
  }, []);

  const answerClickHandler = (isRight: boolean): void => {
    if (isRight) {
      rightAnswers = rightAnswers + 1;
    } else {
      const audio = new Audio("audio/wrong.mp3");
      audio.play();
    }

    const audio = new Audio("audio/click.mp3");
    audio.play();

    if (currentStep === totalSteps) {
      timePlayed = Date.now() - startTime;

      const dataToSave = {
        time: timePlayed + (10 - rightAnswers) * 1000,
        rightAnswers,
      };

      const audio = new Audio("audio/success.mp3");
      audio.play();

      saveGameHistory(GameType.colors, dataToSave);

      setOngoing(false);
    }

    currentStep++;
    setCurrentLevel(getRandomTwoColors(colorsLevels));
  };

  const currentLevelCorrect = getRandomFrom(1);

  const correctColorData = colorsLevels[currentLevel[currentLevelCorrect] ?? 0];
  const wrongColorData =
    colorsLevels[currentLevel[currentLevelCorrect === 1 ? 0 : 1] ?? 0];

  return (
    <div className="colors-container">
      <span
        className="colors-title"
        style={{
          color: correctColorData?.color,
          WebkitTextStroke: correctColorData?.id === 8 ? "black 1px" : "",
        }}
      >
        {wrongColorData?.title ?? "-"}
      </span>
      <div className="colors-answers">
        {currentLevel.map((item, index) => {
          return (
            <span
              className="answer"
              key={index}
              onClick={() => answerClickHandler(item === correctColorData?.id)}
            >
              {colorsLevels[item]?.title}
            </span>
          );
        })}
      </div>
    </div>
  );
};

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
        <span>{totalSteps - rightAnswers}</span>
      </div>
    </div>
  );
};

export const Colors = () => {
  const [ongoing, setOngoing] = useState(true);

  useEffect(() => {
    startTime = Date.now();
    currentStep = 1;
    rightAnswers = 0;
  }, []);

  return (
    <div className="gameScreen gameScreen-colors">
      {ongoing ? (
        <>
          <Timer ongoing={ongoing} />
          <ColorsScreen setOngoing={setOngoing} />
        </>
      ) : (
        <FinalMessage />
      )}
    </div>
  );
};
