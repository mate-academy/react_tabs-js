export const findCurrentElementById = (tabs, selectedId) => (
  tabs.find(({ id }) => id === selectedId)
);
