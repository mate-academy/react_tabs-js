export const getRigthTabById = (tabsArray, id) => (
  tabsArray.find(tab => tab.id === id)
);
