import { ReactElement, useState } from "react";
import { GamesPage } from "./GamesPage";
import { PageType } from "../Main";
import { StatsPage } from "./StatsPage";
import { AboutUsPage } from "./AboutUsPage";
import { GamePage } from "./GamePage";
import { GameType } from "../Games/types";

type Props = { page: PageType; setPage: (s: PageType) => void };

export const Page = ({ page, setPage }: Props) => {
  const [game, setGame] = useState<GameType>(GameType.colors);

  const renderPage = (): ReactElement => {
    switch (page) {
      case PageType.games:
        return <GamesPage setGame={setGame} setPage={setPage} />;
      case PageType.stats:
        return <StatsPage />;
      case PageType.aboutus:
        return <AboutUsPage />;
      case PageType.game:
        return <GamePage game={game} setPage={setPage} />;
    }
  };

  return <div className="content">{renderPage()}</div>;
};
