import classNames from 'classnames';

export const Tabs = ({ tabs, selectedTabId, onTabSelected }) => {
  const contentArr = tabs.filter(tab => tab.id === selectedTabId);
  const cur = (tab) => {
    if (selectedTabId !== tab.id) {
      onTabSelected(tab);
    }
  };

  const findTabId = tabs.some(search => search.id === selectedTabId);

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        {findTabId ? (
          <ul>
            {tabs.map(tab => (
              <li
                key={tab.id}
                className={classNames({
                  'is-active': tab.id === selectedTabId,
                })}
                data-cy="Tab"
              >
                <a
                  data-cy="TabLink"
                  href={`#${tab.id}`}
                  onClick={() => cur(tab)}
                >
                  {tab.title}
                </a>
              </li>
            ))}
          </ul>
        ) : (
          <ul>
            {tabs.map(tab => (
              <li
                key={tab.id}
                className={classNames({
                  'is-active': tabs[0].id === tab.id,
                })}
                data-cy="Tab"
              >
                <a
                  data-cy="TabLink"
                  href={`#${tabs[0].id}`}
                  onClick={() => cur(tab)}
                >
                  {tab.title}
                </a>
              </li>
            ))}
          </ul>
        )}
      </div>

      <div className="block" data-cy="TabContent">
        {findTabId ? contentArr[0].content : tabs[0].content}
      </div>
    </div>
  );
};
