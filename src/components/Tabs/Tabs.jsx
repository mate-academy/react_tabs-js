import classNames from 'classnames';

export const Tabs = ({ tabs, activeTabId = 'tab-1', onTabSelected }) => {
  const active = tabs.find(t => t.id === activeTabId) || tabs[0];

  return (
    <>
      <div data-cy="TabsComponent">
        <div className="tabs is-boxed">
          <ul>
            {tabs.map(tab => (
              <li
                key={tab.id}
                className={classNames({ 'is-active': tab.id === active.id })}
                data-cy="Tab"
              >
                <a
                  href={`#${tab.id}`}
                  data-cy="TabLink"
                  onClick={
                    active.id !== tab.id
                      ? () => onTabSelected(tab.id)
                      : undefined
                  }
                >
                  {tab.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="block" data-cy="TabContent">
        {active.content}
      </div>
    </>
  );
};
