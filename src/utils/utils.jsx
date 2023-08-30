/* eslint linebreak-style: ["error", "windows"] */

export const getTabById = (tab, selectedId) => (
  tab.find(({ id }) => id === selectedId)
);
