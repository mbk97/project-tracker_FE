const saveToLocalStorage = (key: string, data: any) => {
  const payload = JSON.stringify(data);
  localStorage.setItem(key, payload);
};

const getFromLocalStorage = (key: string) => {
  const data: any = localStorage.getItem(key);
  return JSON.parse(data);
};

export { saveToLocalStorage, getFromLocalStorage };
