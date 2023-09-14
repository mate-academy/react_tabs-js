export const findTabById = (tabs, id) => tabs.find(tab => tab.id === id)
  ?? tabs[0];
