import { ReactNode } from "react";
import { GamesPage } from "../GamesPage";
import { Page } from "../Main";
import { StatsPage } from "../StatsPage";

type Props = { page: Page };

const renderPage = (page: Page): ReactNode => {
  switch (page) {
    case "games":
      return <GamesPage />;
    case "stats":
      return <StatsPage />;
  }
};

export const Content = ({ page }: Props) => {
  return <div className="content">{renderPage(page)}</div>;
};
