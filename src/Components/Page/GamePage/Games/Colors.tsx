import { MouseEventHandler, useEffect, useState } from "react";
import { saveGameHistory } from "../../../../utils/gameData/saveScore";
import { GameType } from "../types";

export const Colors = () => {
  // TODO de facut random
  const [colorsGameState, setColorsGameState] = useState({
    step: 0,
    rightAnswers: 0,
    wrongAnswers: 0,
    time: null,
    questions: [
      {
        question: "Roșu",
        answers: [
          {
            answer: "Verde",
            color: "red",
            isRight: 0,
          },
          {
            answer: "Roșu",
            color: "green",
            isRight: 1,
          },
        ],
      },
      {
        question: "Gablen",
        answers: [
          {
            answer: "Galben",
            color: "red",
            isRight: 1,
          },
          {
            answer: "Verde",
            color: "yellow",
            isRight: 0,
          },
        ],
      },
    ],
  });

  useEffect(() => {
    if (colorsGameState.step == colorsGameState.questions.length) {
      saveGameHistory(GameType.numbers, {
        rightAnswers: colorsGameState.rightAnswers,
        wrongAnswers: colorsGameState.wrongAnswers,
      });
    }
  });

  const answerClickHandler: MouseEventHandler<HTMLSpanElement> = (event) => {
    let { rightAnswers, wrongAnswers } = colorsGameState;

    const target = event.target as HTMLElement;

    if (Number(target.getAttribute("data-is-right"))) {
      ++rightAnswers;
    } else {
      ++wrongAnswers;
    }

    if (colorsGameState.step !== colorsGameState.questions.length) {
      setColorsGameState({
        ...colorsGameState,
        step: colorsGameState.step + 1,
        rightAnswers,
        wrongAnswers,
      });
    }
  };

  return (
    <div className="gameScreen">
      <h1>
        Colors game <span title="Informații despre joc">-i-</span>
      </h1>
      <div className="mainBlock">
        {colorsGameState.step !== colorsGameState.questions.length ? (
          <div>
            <h1>
              {
                // @ts-expect-error need to fix this
                colorsGameState.questions[colorsGameState.step].question
              }
            </h1>
            <div>
              {
                // @ts-expect-error need to fix this
                colorsGameState.questions[colorsGameState.step].answers.map(
                  (answer, index) => {
                    return (
                      <span
                        className="answer"
                        key={index}
                        style={{ color: answer.color }}
                        data-is-right={answer.isRight}
                        onClick={answerClickHandler}
                      >
                        {answer.answer}
                      </span>
                    );
                  }
                )
              }
            </div>
          </div>
        ) : (
          <div>Thank you</div>
        )}
      </div>
    </div>
  );
};
