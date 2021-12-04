// gets time parameter as miliseconds
export const getTime = (time: number): { mins: number; secs: number } => {
  if (time < 0) {
    return { mins: 0, secs: 0 };
  }

  const a = new Date(time * 1000);

  return {
    mins: a.getMinutes(),
    secs: a.getSeconds(),
  };
};
