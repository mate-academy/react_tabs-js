export const Tabs = ({ tabs, activeTabId, onTabSelected }) => {
  let activeTab = tabs.find(tab => tab.id === activeTabId);

  if (activeTab === undefined) {
    [activeTab] = tabs;
  }

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              data-cy="Tab"
              className={activeTab.id === tab.id ? 'is-active' : ''}
              key={tab.id}
            >
              <a
                href={`#${tab.id}`}
                data-cy="TabLink"
                onClick={
                  activeTab.id === tab.id
                    ? () => {}
                    : () => onTabSelected(tab.id)
                }
              >
                {tab.title}
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
