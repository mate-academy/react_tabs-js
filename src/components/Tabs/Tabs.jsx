import cn from 'classnames';

export const Tabs = ({ tabs, selectedTabId, onTabSelected }) => {
  const currentTab = tabs.find(tab => tab.id === selectedTabId) ?? tabs[0];

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              className={cn({ 'is-active': currentTab.id === tab.id })}
              data-cy="Tab"
              key={tab.id}
            >
              <a
                onClick={() => {
                  if (tab.id !== selectedTabId) {
                    onTabSelected(tab);
                  }
                }}
                href={`#${tab.id}`}
                data-cy="TabLink"
              >
                {tab.title}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {currentTab.content}
      </div>
    </div>
  );
};
