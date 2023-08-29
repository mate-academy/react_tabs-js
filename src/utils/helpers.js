export const findCurrentElementById = (tabs, selectedId) => (
  tabs.find(tab => tab.id === selectedId)
);
