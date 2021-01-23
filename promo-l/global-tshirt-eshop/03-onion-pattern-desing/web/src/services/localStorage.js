const get = key => {
  const data = JSON.parse(localStorage.getItem(key));
  return data !== null ? data : {};
};

const set = (key, data) => {
  localStorage.setItem(key, JSON.stringify(data));
};

const remove = key => {
  localStorage.removeItem(key);
};

// export

const exportObj = {
  get: get,
  remove: remove,
  set: set
};

export default exportObj;
