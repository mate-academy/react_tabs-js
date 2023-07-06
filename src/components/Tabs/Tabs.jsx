import classnames from 'classnames';

export const Tabs = ({ selectedTabId, onTabSelected, tabs }) => {
  const selectedTab = tabs.find(tab => tab.id === selectedTabId)
  || tabs[0];

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {
            tabs.map(tab => (
              <li
                key={tab.id}
                data-cy="Tab"
                className={classnames({
                  'is-active': selectedTab.id === tab.id,
                })}
              >
                <a
                  href={`#${tab.id}`}
                  data-cy="TabLink"
                  onClick={() => selectedTab.id !== tab.id
                    && onTabSelected(tab)
                  }
                >
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
