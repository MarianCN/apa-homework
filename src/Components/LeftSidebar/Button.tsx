type Props = {
  title: string;
  className?: string;
  onClick: () => void;
};

export const Button = ({ onClick, title, className = "" }: Props) => {
  const _className = ["leftsidebar-button", className].join(" ");

  return (
    <div className={_className} onClick={onClick}>
      {title}
    </div>
  );
};
