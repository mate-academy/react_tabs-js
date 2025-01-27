import classNames from 'classnames/bind';

export const Tabs = ({ tabs, onTabSelected, activeTabId }) => {
  const selectedTab = () => {
    const active = tabs.find(t => t.id === activeTabId);

    if (active) {
      return active;
    }

    return tabs[0];
  };

  return (
    <>
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              className={classNames({
                'is-active': tab.id === selectedTab().id,
              })}
              data-cy="Tab"
              key={tab.id}
            >
              <a
                href={`#${tab.id}`}
                data-cy="TabLink"
                onClick={() => tab.id !== activeTabId && onTabSelected(tab.id)}
              >
                {tab.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="block" data-cy="TabContent">
        {selectedTab().content}
      </div>
    </>
  );
};
