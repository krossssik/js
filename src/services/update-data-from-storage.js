const updatePersonFromStorage = async () => {
  const list = await JSON.parse(localStorage.getItem("persons"));
  return list;
};

export default updatePersonFromStorage;
