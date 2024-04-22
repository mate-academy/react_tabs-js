import classNames from 'classnames';

export const Tabs = ({ tabs, activeTabId, onTabSelected }) => {
  const normalizedTab = tabs.find(({ id }) => id === activeTabId) ?? tabs[0];

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              key={tab.id}
              className={classNames({
                'is-active': normalizedTab.id === tab.id,
              })}
              data-cy="Tab"
            >
              <a
                onClick={() =>
                  normalizedTab.id !== tab.id && onTabSelected(tab.id)
                }
                href={`#${tab.id}`}
                data-cy="TabLink"
              >
                {tab.title}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {normalizedTab.content}
      </div>
    </div>
  );
};
