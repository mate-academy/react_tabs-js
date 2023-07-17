export const Tabs = ({ tabs, selectedTabId, onTabSelected }) => {
  const { id, content } = tabs.find(tab => tab.id === selectedTabId) || tabs[0];
  const selectTab = (tabId) => {
    if (id !== tabId) {
      onTabSelected(tabId);
    }
  };

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              key={tab.id}
              className={tab.id === id ? 'is-active' : ''}
              data-cy="Tab"
            >
              <a
                href={`#${tab.id}`}
                data-cy="TabLink"
                onClick={() => selectTab(tab.id)}
              >
                {tab.title}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div
        className="block"
        data-cy="TabContent"
      >
        {content}
      </div>
    </div>
  );
};
