import { useState } from "react";
import { Page } from "../Page";
import { LeftSidebar } from "../LeftSidebar";

export enum PageType {
  games = "games",
  stats = "stats",
  game = "game",
}

export const Main = () => {
  const [page, setPage] = useState<PageType>(PageType.games);

  return (
    <>
      {page !== PageType.game && <LeftSidebar page={page} setPage={setPage} />}
      <Page page={page} setPage={setPage} />
    </>
  );
};
