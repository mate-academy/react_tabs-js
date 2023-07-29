import classNames from 'classnames';

export const Tabs = ({
  tabs,
  selectedTabId,
  onTabSelected,
}) => {
  const selectedTab = tabs.find(tab => tab.id === selectedTabId) || tabs[0];

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map((tab) => {
            const isSelectedTab = selectedTab === tab;

            return (
              <li
                className={classNames({
                  'is-active': isSelectedTab,
                })}
                data-cy="Tab"
              >
                <a
                  href={`#${tab.id}`}
                  data-cy="TabLink"
                  onClick={() => onTabSelected(tab)}
                >
                  {tab.title}
                </a>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {selectedTab.content}
      </div>
    </div>
  );
};
