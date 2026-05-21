import classNames from 'classnames';

export const Tabs = ({ tabs, activeTabId, onTabSelected }) => {
  const isValidId = tabs.some(tab => tab.id === activeTabId);
  const realActiveId = isValidId ? activeTabId : (tabs[0]?.id ?? '');
  const currentTab = tabs.find(tab => tab.id === realActiveId);

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              className={classNames({ 'is-active': tab.id === realActiveId })}
              data-cy="Tab"
              key={tab.id}
            >
              <a
                href={`#${tab.id}`}
                data-cy="TabLink"
                onClick={e => {
                  if (activeTabId !== tab.id) {
                    onTabSelected(tab.id);
                  }

                  e.preventDefault();
                }}
              >
                {tab.title}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {currentTab?.content ?? ''}
      </div>
    </div>
  );
};
