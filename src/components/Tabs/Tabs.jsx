import classNames from 'classnames';

export const Tabs = ({ tabs, activeTabId, onTabSelected }) => {
  const tabIdsOnly = tabs.map(tab => tab.id);
  const isTabIdThere = tabIdsOnly.includes(activeTabId);
  const defaultTab = isTabIdThere ? activeTabId : tabs[0].id;

  const filteredContent = tabs.filter(tab => tab.id === activeTabId);

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => {
            return (
              <li
                data-cy="Tab"
                className={classNames({
                  'is-active': defaultTab === tab.id,
                })}
                key={tab.id}
              >
                {tab.id !== activeTabId ? (
                  <a
                    onClick={() => onTabSelected(tab.id)}
                    href={`#${tab.id}`}
                    data-cy="TabLink"
                  >
                    {tab.title}
                  </a>
                ) : (
                  <a href={`#${tab.id}`} data-cy="TabLink">
                    {tab.title}
                  </a>
                )}
              </li>
            );
          })}
        </ul>
      </div>
      <div className="block" data-cy="TabContent">
        {filteredContent.map(tab => {
          if (tab.id === activeTabId) {
            return tab.content;
          }

          return 'Some text 1';
        })}
      </div>
    </div>
  );
};
