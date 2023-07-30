import classNames from 'classnames';

export const Tabs = ({ tabs, selectedTabId, onTabSelected }) => {
  const selectedTab = tabs.find(tab => tab.id === selectedTabId) || tabs[0];

  const handleSelection = (event, tab) => {
    event.preventDefault();

    if (tab.id !== selectedTabId) {
      onTabSelected(tab);
    }
  };

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map((tab) => {
            const { id: tabId, title } = tab;

            return (
              (
                <li
                  key={tabId}
                  className={classNames({
                    'is-active': selectedTab.id === tabId,
                  })}
                  data-cy="Tab"
                >
                  <a
                    data-cy="TabLink"
                    href={`#${tabId}`}
                    onClick={(event) => {
                      handleSelection(event, tab);
                    }}
                  >
                    {title}
                  </a>
                </li>
              )
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
