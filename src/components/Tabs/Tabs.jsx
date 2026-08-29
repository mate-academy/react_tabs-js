function renderTabs(tabs, activeTab, onTabSelected) {
  return tabs.map(tab => {
    return (
      <li
        className={tab.id === activeTab ? 'is-active' : ''}
        key={tab.id}
        data-cy="Tab"
      >
        <a
          href={`#${tab.id}`}
          data-cy="TabLink"
          onClick={() => {
            if (tab.id !== activeTab) {
              onTabSelected(tab.id);
            }
          }}
        >
          {tab.title}
        </a>
      </li>
    );
  });
}

export const Tabs = ({ tabs, activeTabId, onTabSelected }) => {
  const validactiveTab = tabs.find(tab => tab.id === activeTabId) || tabs[0];

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>{renderTabs(tabs, validactiveTab.id, onTabSelected)}</ul>
      </div>

      <div className="block" data-cy="TabContent">
        {validactiveTab.content}
      </div>
    </div>
  );
};
