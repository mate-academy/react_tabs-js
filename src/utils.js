export const defaultTabId = tabs => tabs[0].id;

export const findTabById = (tabList, selectedId) => tabList
  .find(({ id }) => id === selectedId) ?? tabList[0];
