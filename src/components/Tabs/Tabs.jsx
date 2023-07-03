import classNames from 'classnames';

export const Tabs = ({ tabs, onTabSelected, selectedTabId }) => {
  const selectedTab = tabs.find(tab => selectedTabId === tab.id) || tabs[0];

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              className={classNames({ 'is-active': selectedTab.id === tab.id })}
              data-cy="Tab"
              key={tab.id}
              onClick={() => {
                if (selectedTab.id === tab.id) {
                  return;
                }

                onTabSelected(tab);
              }}
              aria-hidden="true"
            >
              <a href={`#${tab.id}`} data-cy="TabLink">{tab.title}</a>
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
