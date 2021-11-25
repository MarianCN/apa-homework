import { useState } from "react";
import { Content } from "../Content";
import { LeftSidebar } from "../LeftSidebar";

export type Page = "games" | "stats";

export const Main = () => {
  const [page, setPage] = useState<Page>("games");

  return (
    <>
      <LeftSidebar page={page} setPage={setPage} />
      <Content page={page} />
    </>
  );
};
