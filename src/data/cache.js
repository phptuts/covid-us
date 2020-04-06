const get = (key) => {
  if (!process.browser) {
    return;
  }

  if (!localStorage.getItem(key)) {
    return undefined;
  }

  const { data, expiresAt } = JSON.parse(localStorage.getItem(key));

  if (expiresAt < new Date().getTime()) {
    return undefined;
  }

  return data;
};

const set = (key, data) => {
  if (!process.browser) {
    return;
  }

  const storage = { data, expiresAt: getFutureTimestamp() };

  localStorage.setItem(key, JSON.stringify(storage));
};

const getFutureTimestamp = () => {
  return new Date().getTime() + 1000 * 60 * 60;
};

export default {
  get,
  set,
};
