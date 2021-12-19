import { PageType } from "../Main";
import { Button } from "./Button";

type Props = {
  page: PageType;
  setPage: (s: PageType) => void;
};

export const LeftSidebar = ({ page, setPage }: Props) => {
  return (
    <div className="leftsidebar">
      <img alt="Jocuri" className="leftsidebar-img" src="images/logo.png" />

      <Button
        title="JOCURI"
        isActive={page === "games"}
        onClick={() => {
          setPage(PageType.games);
        }}
      />
      <Button
        title="STATISTICI"
        isActive={page === "stats"}
        onClick={() => {
          setPage(PageType.stats);
        }}
      />
    </div>
  );
};
