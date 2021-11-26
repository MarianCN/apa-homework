import { ReactNode } from "react";
import { GamesPage } from "../Pages/GamesPage";
import { Page } from "../Main";
import { StatsPage } from "../Pages/StatsPage";
import { AboutUsPage } from "../Pages/AboutUsPage";

type Props = { page: Page };

const renderPage = (page: Page): ReactNode => {
  switch (page) {
    case "games":
      return <GamesPage />;
    case "stats":
      return <StatsPage />;
    case "aboutus":
      return <AboutUsPage />;
  }
};

export const Content = ({ page }: Props) => {
  return <div className="content">{renderPage(page)}</div>;
};
