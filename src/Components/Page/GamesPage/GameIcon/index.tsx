import { getGameInfo } from "../../../../utils/gameData";
import { GameImage } from "../../../GameImage";
import { GameType } from "../../../Games/types";
import { PageType } from "../../../Main";

type Props = {
  type: GameType;
  setGame: (game: GameType) => void;
  setPage: (page: PageType) => void;
};

export const GameIcon = ({ type, setGame, setPage }: Props) => {
  const gameData = getGameInfo(type);

  const handleClick = () => {
    setPage(PageType.game);
    setGame(type);
  };

  return (
    <div className="game-wrapper">
      <GameImage type={type} />
      <span className="game-title">{gameData.title}</span>

      <div className="game-button" onClick={handleClick}>
        Play
      </div>
    </div>
  );
};
