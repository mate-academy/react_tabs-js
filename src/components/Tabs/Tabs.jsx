import cn from 'classnames';

export const Tabs = ({ tabs, selectedTabId = 'tab-1', onTabSelected }) => {
  const contentOfSelectedTab
    = tabs.find(tab => tab.id === selectedTabId) || tabs[0];

  const handleSelectedTab = (tab) => {
    if (contentOfSelectedTab.id !== tab.id) {
      onTabSelected(tab);
    }
  };

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              className={cn({
                'is-active': contentOfSelectedTab.id === tab.id,
              })}
              data-cy="Tab"
              key={tab.id}
            >
              <a
                href={`#${tab.id}`}
                data-cy="TabLink"
                onClick={() => handleSelectedTab(tab)}
              >
                {tab.title}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {contentOfSelectedTab.content}
      </div>
    </div>
  );
};
