import classNames from 'classnames';

export const Tabs = ({ tabs, activeTabId, onTabSelected }) => {
  const activeTab = tabs.find(tab => tab.id === activeTabId) || tabs[0];

  const handleClick = id => {
    if (id !== activeTabId) {
      onTabSelected(id);
    }
  };

  return (
    <>
      <div className="tabs is-boxed">
        <ul role="tablist">
          {tabs.map(tab => (
            <li
              key={tab.id}
              className={classNames({ 'is-active': tab.id === activeTab.id })}
              data-cy="Tab"
              role="tab"
              aria-selected={tab.id === activeTab.id}
            >
              <a
                href={`#${tab.id}`}
                data-cy="TabLink"
                role="button"
                tabIndex={0}
                onClick={() => handleClick(tab.id)}
              >
                {tab.title}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {activeTab.content}
      </div>
    </>
  );
};
