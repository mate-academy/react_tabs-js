export const GetActiveTab = (object, selectedId) => {
  const currentTab = object.find(tab => tab.id === selectedId);

  return currentTab || object[0];
};
