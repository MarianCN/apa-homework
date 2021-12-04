import { GameType } from "../../Games/types";
import { PageType } from "../../Main";
import { GameIcon } from "./GameIcon";

type Props = {
  setGame: (game: GameType) => void;
  setPage: (s: PageType) => void;
};

export const GamesPage = ({ setGame, setPage }: Props) => {
  return (
    <div className="page page-games">
      <span className="page-title">JOCURI</span>

      <div className="games-group">
        <GameIcon type={GameType.numbers} setGame={setGame} setPage={setPage} />
        <GameIcon type={GameType.squares} setGame={setGame} setPage={setPage} />
        <GameIcon type={GameType.colors} setGame={setGame} setPage={setPage} />
      </div>
    </div>
  );
};
