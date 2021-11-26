import classNames from "classnames";

type Props = {
  title: string;
  isActive?: boolean;
  onClick: () => void;
};

export const Button = ({ onClick, title, isActive = false }: Props) => {
  const _className = classNames("leftsidebar-button", {
    "leftsidebar-button-active": isActive,
  });

  return (
    <div className={_className} onClick={onClick}>
      {title}
    </div>
  );
};
