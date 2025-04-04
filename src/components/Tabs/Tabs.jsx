/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
export const Tabs = ({ tabs, onTabSelected, activeTabId }) => {
  const selectedTab = tabs.find(tab => tab.id === activeTabId) || tabs[0];

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            // eslint-disable-next-line jsx-a11y/click-events-have-key-events
            <li
              key={tab.id}
              data-cy="Tab"
              className={tab === selectedTab ? 'is-active' : ''}
              onClick={() => onTabSelected(tab)}
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
