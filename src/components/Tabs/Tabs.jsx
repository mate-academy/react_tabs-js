export const Tabs = ({ tabs, activeTabId, onTabSelected }) => {
  const activeTab = tabs.find(tab => tab.id === activeTabId) || tabs[0];

  return (
    <div className="tabs is-boxed">
      <ul>
        {tabs.map(tab => (
          // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-noninteractive-element-interactions
          <li
            key={tab.id}
            className={`${tab.id === activeTab.id ? 'is-active' : ''}`}
            data-cy="Tab"
          >
            <a
              href={`#${tab.id}`}
              onClick={() => {
                if (tab.id !== activeTab.id) {
                  onTabSelected(tab.id);
                }
              }}
              data-cy="TabLink"
            >
              {tab.title}
            </a>
          </li>
        ))}
      </ul>
      <div data-cy="TabsComponent">
        <div className="block" data-cy="TabContent">
          {activeTab.content}
        </div>
      </div>
    </div>
  );
};
