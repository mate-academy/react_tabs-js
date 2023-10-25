export const Tabs = ({ tabs,
  selectedTabId,
  setSelectedTabId,
  onTabSelected }) => {
  const handleClick = (tab) => {
    if (tab.id !== selectedTabId) {
      onTabSelected(tabs.find(tabsTab => tabsTab.id === tab.id));
    }
  };

  const getIsActive = (tab) => {
    if (tabs.find(tabsTab => tabsTab.id === selectedTabId) === undefined
    && tab.id === tabs[0].id) {
      return 'is-active';
    }

    if (tab.id === selectedTabId) {
      return 'is-active';
    }

    return '';
  };

  return (
    <ul>
      {tabs.map((tab, index) => (
        <li
          key={tab.id}
          data-cy="Tab"
          className={getIsActive(tab)}
        >
          <a
            href={`#${tab.id}`}
            data-cy="TabLink"
            onClick={() => handleClick(tab)}
          >
            {tab.title}
          </a>
        </li>
      ))}
    </ul>
  );
};
