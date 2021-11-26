export type GameType = "game1" | "game2" | "game3";
export type GameData = {
  title: string;
  icon: string;
  onClick: () => void;
};

type Props = { type: GameType };

const getGameData = (type: GameType): GameData => {
  switch (type) {
    case "game1":
      return {
        title: "Game 1",
        icon: "images/square.png",
        onClick: () => {
          console.log(type);
        },
      };

    case "game2":
      return {
        title: "Game 2",
        icon: "images/colour.png",
        onClick: () => {
          console.log(type);
        },
      };

    case "game3":
      return {
        title: "Game 3",
        icon: "images/numbers.png",
        onClick: () => {
          console.log(type);
        },
      };
  }
};

export const GameIcon = ({ type }: Props) => {
  const gameData = getGameData(type);

  return (
    <div className="game-wrapper">
      <img className="game-icon" src={gameData.icon} alt="" />
      <span className="game-title">{gameData.title}</span>

      <div className="game-button" onClick={gameData.onClick}>
        Play
      </div>
    </div>
  );
};
