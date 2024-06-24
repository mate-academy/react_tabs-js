export const getActiveTabById = (id, tabs) => {
  return tabs.find(tab => tab.id === id);
};

export const checkIfTabExists = (id, tabs) => {
  const isExists = tabs.some(tab => tab.id === id);

  return isExists;
};
