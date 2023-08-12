import classNames from 'classnames';

export const Tabs = ({
  tabs,
  onTabSelected,
  selectedTabId,
}) => {
  const selectedTab = tabs.find(tab => tab.id === selectedTabId)
    || tabs[0];

  const isTabSelected = (tab) => {
    if (tab.id !== selectedTabId) {
      onTabSelected(tab);
    }
  };

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              className={classNames({
                'is-active': tab.id === selectedTab.id,
              })}
              key={tab.id}
              data-cy="Tab"
            >
              <a
                href="#tab-1"
                data-cy="TabLink"
                onClick={() => {
                  isTabSelected(tab);
                }}
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
