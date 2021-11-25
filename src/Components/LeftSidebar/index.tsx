import { Page } from "../Main";
import { Button } from "./Button";

type Props = {
  page: Page;
  setPage: (s: Page) => void;
};

export const LeftSidebar = ({ page, setPage }: Props) => {
  return (
    <div className="leftsidebar">
      <img alt="Jocuri" className="leftsidebar-img" src="console.png" />

      <Button
        title="JOCURI"
        onClick={() => {
          setPage("games");
        }}
      />
      <Button
        title="STATISTICI"
        onClick={() => {
          setPage("stats");
        }}
      />
    </div>
  );
};
