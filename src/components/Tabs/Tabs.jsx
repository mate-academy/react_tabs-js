export const Tabs = ({ tabs, activeTabId, setActiveTab }) => {
  const handleTabSelection = tabId => {
    setActiveTab(tabId);
  };

  return (
    <ul>
      {tabs.map(tab => (
        <li className={activeTabId === tab.id ? 'is-active' : ''} data-cy="Tab">
          <a
            href="#tab-id"
            data-cy="TabLink"
            onClick={() => handleTabSelection(tab.id)}
          >
            {tab.title}
          </a>
        </li>
      ))}
    </ul>
  );
};
