export const getItem = (key, defaultValue) => {
  const storageItem = localStorage.getItem(key);
  if (defaultValue !== null && storageItem === null) setItem(key, defaultValue);
  return localStorage.getItem(key);
};

export const setItem = (key, value) => {
  if (value === null) this.removeItem({ key });
  return localStorage.setItem(key, value);
};

export const removeItem = (key) => {
  return localStorage.removeItem(key);
};
