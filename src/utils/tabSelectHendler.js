export const tabSelectHendler = (id, tabs, onTabSelected, selectedTabId) => {
  if (id !== selectedTabId) {
    const setSelectedTab = tabs.find(tab => tab.id === id);

    onTabSelected(setSelectedTab);
  }
};
