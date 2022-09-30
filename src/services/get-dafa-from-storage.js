const getPersonFromStorage = async () => {
  const list = await JSON.parse(localStorage.getItem("persons"));
  return list;
};

export default getPersonFromStorage;
