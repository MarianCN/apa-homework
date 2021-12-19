import { getGameInfo } from "../../utils/gameData";
import { GameType } from "../Games/types";

type Props = {
  type: GameType;
};

export const GameImage = ({ type }: Props) => {
  const gameData = getGameInfo(type);

  return <img className="game-icon" src={gameData.icon} alt="" />;
};
