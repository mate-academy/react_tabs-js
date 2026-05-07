export const Tabs = ({ tabs, activeTabId, onTabSelected }) => {
  const isIdValid = tabs.some(tab => tab.id === activeTabId);
  const currentActiveId = isIdValid ? activeTabId : tabs[0]?.id;

  const activeTab = tabs.find(tab => tab.id === currentActiveId);

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(item => (
            <li
              key={item.id}
              className={item.id === currentActiveId ? 'is-active' : ''}
              data-cy="Tab"
            >
              <a
                href={`#${item.id}`}
                data-cy="TabLink"
                onClick={e => {
                  e.preventDefault();
                  if (item.id !== currentActiveId) {
                    onTabSelected(item.id);
                  }
                }}
              >
                {item.title}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {activeTab.content}
      </div>
    </div>
  );
};
