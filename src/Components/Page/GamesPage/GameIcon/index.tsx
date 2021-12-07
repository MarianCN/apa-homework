import { GameType } from "../../../Games/types";
import { PageType } from "../../../Main";
import { GameIconData } from "../types";

type Props = {
  type: GameType;
  setGame: (game: GameType) => void;
  setPage: (page: PageType) => void;
};

export const GameIcon = ({ type, setGame, setPage }: Props) => {
  const getGameData = (): GameIconData => {
    switch (type) {
      case GameType.squares:
        return {
          title: "Squares",
          icon: "images/square.png",
        };

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

  const gameData = getGameData();

  const handleClick = () => {
    setPage(PageType.game);
    setGame(type);
  };

  return (
    <div className="game-wrapper">
      <img className="game-icon" src={gameData.icon} alt="" />
      <span className="game-title">{gameData.title}</span>

      <div className="game-button" onClick={handleClick}>
        Play
      </div>
    </div>
  );
};
