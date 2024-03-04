export const checkIfTabIsSelected = (tab, selectedTab, onTabSelected) => {
  return selectedTab.title !== tab.title && onTabSelected({ ...tab });
};
