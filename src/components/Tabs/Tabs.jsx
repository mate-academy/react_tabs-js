import cn from 'classnames';

function preperedSelectedTab(allTabs, activeTabId) {
  const selectedTab = allTabs.find(tab => tab.id === activeTabId) ?? allTabs[0];

  return selectedTab;
}

export const Tabs = ({ tabs, activeTabId, onTabSelected }) => {
  const selectedTab = preperedSelectedTab(tabs, activeTabId);

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-noninteractive-element-interactions
            <li
              key={tab.id}
              data-cy="Tab"
              className={cn({ 'is-active': selectedTab.id === tab.id })}
              onClick={() => tab.id !== selectedTab.id && onTabSelected(tab.id)}
            >
              <a href={`#${tab.id}`} data-cy="TabLink">
                {tab.title}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {selectedTab.content}
      </div>
    </div>
  );
};
