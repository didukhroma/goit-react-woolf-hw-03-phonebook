const getData = key => {
  const data = localStorage.getItem(key);
  return data ? JSON.parse(data) : null;
};

const setData = (key, data) => {
  localStorage.setItem(key, JSON.stringify(data));
};

const WEB_API = { getData, setData };
export default WEB_API;
