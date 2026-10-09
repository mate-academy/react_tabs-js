export const getActiveTab = (allTabs, activeTabId) => {
  const foundTab = allTabs.find(tab => activeTabId === tab.id);

  if (!foundTab) {
    return allTabs[0];
  }

  return foundTab;
};
