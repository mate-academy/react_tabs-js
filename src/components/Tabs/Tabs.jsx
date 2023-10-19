export const Tabs = ({ tabs, selectedTabId, onTabSelected }) => {
  const newSelectedTabId = selectedTabId
  && tabs.some(tab => tab.id === selectedTabId) ? selectedTabId : tabs[0].id;

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              key={tab.id}
              data-cy="Tab"
              className={tab.id === newSelectedTabId ? 'is-active' : ''}
            >
              <a
                href={`#${tab.id}`}
                data-cy="TabLink"
                onClick={() => {
                  if (tab.id !== newSelectedTabId) {
                    onTabSelected(tab);
                  }
                }}
              >
                {tab.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="block" data-cy="TabContent">
        {tabs.find(tab => tab.id === newSelectedTabId).content}
      </div>
    </div>
  );
};
