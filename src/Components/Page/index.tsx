import { ReactNode, useState } from "react";
import { GamesPage } from "./GamesPage";
import { PageType } from "../Main";
import { StatsPage } from "./StatsPage";
import { AboutUsPage } from "./AboutUsPage";
import { GamePage } from "./GamePage";
import { GameType } from "./GamePage/types";

type Props = { page: PageType; setPage: (s: PageType) => void };

export const Page = ({ page, setPage }: Props) => {
  const [game, setGame] = useState<GameType>(GameType.colors);

  const renderPage = (): ReactNode => {
    switch (page) {
      case "games":
        return <GamesPage setGame={setGame} setPage={setPage} />;
      case "stats":
        return <StatsPage />;
      case "aboutus":
        return <AboutUsPage />;
      case "game":
        return <GamePage game={game} setPage={setPage} />;
    }
  };

  return <div className="content">{renderPage()}</div>;
};
