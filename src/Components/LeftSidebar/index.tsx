import { Page } from "../Main";
import { Button } from "./Button";

type Props = {
  page: Page;
  setPage: (s: Page) => void;
};

export const LeftSidebar = ({ page, setPage }: Props) => {
  return (
    <div className="leftsidebar">
      <img alt="Jocuri" className="leftsidebar-img" src="images/logo.png" />

      <Button
        title="JOCURI"
        isActive={page === "games"}
        onClick={() => {
          setPage("games");
        }}
      />
      <Button
        title="STATISTICI"
        isActive={page === "stats"}
        onClick={() => {
          setPage("stats");
        }}
      />
      <Button
        title="DESPRE NOI"
        isActive={page === "aboutus"}
        onClick={() => {
          setPage("aboutus");
        }}
      />
    </div>
  );
};
