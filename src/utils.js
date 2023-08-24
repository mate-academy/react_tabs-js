export const DEFAULT_TAB_ID = tabs => tabs[0].id;

export const findTabById = (tabList, selectedId) => tabList
  .find(({ id }) => id === selectedId);
