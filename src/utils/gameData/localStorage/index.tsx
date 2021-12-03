export const saveToLocalStorage = (
  key: string,
  value: Record<string, unknown>
): void => {
  localStorage.setItem(key, JSON.stringify(value));
};
export const getFromLocalStorage = (key: string): Record<string, unknown> => {
  const a = localStorage.getItem(key);

  if (a) {
    try {
      return JSON.parse(a);
    } catch (e) {
      return {};
    }
  }

  return {};
};
