import { GameIcon } from "../../GameIcon";

export const GamesPage = () => {
  return (
    <div className="page page-games">
      <span className="page-title">JOCURI</span>

      <div className="games-group">
        <GameIcon type="game1" />
        <GameIcon type="game2" />
        <GameIcon type="game3" />
      </div>
    </div>
  );
};
