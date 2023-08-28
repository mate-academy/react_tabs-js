export const findTab = (tabsArray, selectedById) => tabsArray
  .find(({ id }) => id === selectedById) || tabsArray[0];
