export const Tabs = ({ tabs, selectedTabId, onTabSelected }) => {
  const handleTabClick = (tabId) => {
    if (tabId !== selectedTabId) {
      onTabSelected(tabs.find(tab => tab.id === tabId));
    }
  };

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              className={selectedTabId === tab.id ? 'is-active' : ''}
              data-cy="Tab"
              key={tab.id}
            >
              <a
                href={`#${tab.id}`}
                data-cy="TabLink"
                onClick={() => handleTabClick(tab.id)}
              >
                {tab.title}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {tabs
        .filter(content => content.id === selectedTabId)
        .map(filteredContent => (
          <div className="block" data-cy="TabContent" key={`tab-${filteredContent.id}`}>
            {filteredContent.content}
          </div>
        ))}
    </div>
  );
};
