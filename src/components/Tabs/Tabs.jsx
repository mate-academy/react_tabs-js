export const Tabs = ({ tabs, activeTabId, onTabSelected }) => {
  const activeTab = tabs.find(tab => tab.id === activeTabId) || tabs[0];

  return (
    <div className="tabs is-boxed">
      <ul>
        {tabs.map(tab => (
          // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-noninteractive-element-interactions
          <li
            key={tab.id}
            data-cy="Tab"
            className={tab.id === activeTab.id ? 'is-active' : ''}
            onClick={() => {
              if (tab.id !== activeTab.id) {
                onTabSelected(tab.id);
              }
            }}
          >
            <a data-cy="TabLink" href={`#tab-${tab.id}`}>
              {tab.title}
            </a>
          </li>
        ))}
      </ul>

      <div className="block" data-cy="TabContent">
        {activeTab.content}
      </div>
    </div>
  );
};
