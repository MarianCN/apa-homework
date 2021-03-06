import { PageType } from "../../Main";
import { Colors } from "../../Games/Colors";
import { Numbers } from "../../Games/Numbers";
import { GameType } from "../../Games/types";

type Props = { game: GameType; setPage: (s: PageType) => void };

export const GamePage = ({ game, setPage }: Props) => {
  const renderGame = () => {
    switch (game) {
      case GameType.numbers:
        return <Numbers />;

      case GameType.colors:
        return <Colors />;
    }
  };

  return (
    <div className="page page-game">
      {renderGame()}

      <button
        className="page-exit"
        onClick={() => {
          setPage(PageType.games);
        }}
      >
        Exit Game
      </button>
    </div>
  );
};
