import cn from 'classnames';

export const Tabs = ({ tabs, activeTabId = tabs[0].id, onTabSelected }) => {
  const [firstTab] = tabs;
  let activeTab = tabs.find(tab => tab.id === activeTabId);

  if (!activeTab) {
    onTabSelected(firstTab.id);
    activeTab = firstTab;
  }

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              data-cy="Tab"
              key={tab.id}
              className={cn({ 'is-active': activeTab.id === tab.id })}
            >
              <a
                href={`#${tab.id}`}
                data-cy="TabLink"
                onClick={() => {
                  if (activeTab.id !== tab.id) {
                    onTabSelected(tab.id);
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
        {tabs.find(tab => activeTab.id === tab.id).content}
      </div>
    </div>
  );
};
