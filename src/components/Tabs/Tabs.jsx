import classnames from 'classnames';

export const Tabs = ({ tabs, activeTabId, onTabSelected }) => {
  const currentTab = tabs.filter(tab => tab.id === activeTabId)[0] ?? tabs[0];
  const isValid = tabs.map(tab => tab.id).includes(activeTabId);

  return (
    <>
      <div className="tabs is-boxed">
        <ul>
          {tabs.map((tab, index) => (
            <li
              key={tab.id}
              className={classnames({
                'is-active':
                  activeTabId === tab.id || (index === 0 && !isValid),
              })}
              data-cy="Tab"
            >
              <a
                href={`#${tab.id}`}
                data-cy="TabLink"
                onClick={() => {
                  if (activeTabId !== tab.id) {
                    onTabSelected(tab.id);
                  }
                }}
              >
                {tab.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="block" data-cy="TabContent">
        {currentTab.content}
      </div>
    </>
  );
};
