import { useEffect } from "react";
import { useState } from "react";
import { getTime } from "../../utils/timer";

import "./style.scss";

type Props = {
  ongoing: boolean;
};

export const Timer = ({ ongoing }: Props) => {
  const [time, setTime] = useState<number>(0);

  let timeout: ReturnType<typeof setTimeout>;

  useEffect(() => {
    if (ongoing) {
      timeout = setTimeout(() => {
        setTime(time + 1);
      }, 1000);
    }

    return () => {
      timeout && clearTimeout(timeout);
    };
  });

  const { mins, secs } = getTime(time);

  return (
    <div className="timer">
      <span>{`${mins < 10 ? "0" : ""}${mins}`}</span>
      <span>:</span>
      <span>{`${secs < 10 ? "0" : ""}${secs}`}</span>
    </div>
  );
};
