export const Tabs = ({ tabs, activeTabId, onTabSelected }) => {
  const selectedTab = id => {
    if (id !== activeTabId) {
      onTabSelected(id);
    }
  };

  const active =
    tabs.find(el => el.id === activeTabId) === undefined
      ? tabs[0].id
      : activeTabId;

  const { content } = tabs.find(el => el.id === active);

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              className={tab.id === active ? 'is-active' : ''}
              data-cy="Tab"
              key={tab.id}
            >
              <a
                href={`#${tab.id}`}
                data-cy="TabLink"
                onClick={() => selectedTab(tab.id)}
              >
                {tab.title}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {content}
      </div>
    </div>
  );
};
