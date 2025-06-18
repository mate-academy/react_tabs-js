export function getSelectedTab(copyTabs, selectedTabId) {
  const foundTab = copyTabs.find(tab => tab.id === selectedTabId);

  if (!foundTab) {
    return { ...copyTabs[0] };
  }

  return foundTab;
}
