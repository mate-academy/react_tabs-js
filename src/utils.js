export const findTab = (allTabs, selectId) => allTabs
  .find(({ id }) => id === selectId) ?? allTabs[0];
