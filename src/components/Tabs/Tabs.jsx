import classNames from 'classnames';

const handleTabSelected = (tabId, currentTabId, onTabSelected) => {
  if (tabId !== currentTabId) {
    onTabSelected(tabId);
  }
};

export const Tabs = ({ tabs, activeTabId, onTabSelected }) => {
  const activeTab = tabs.find(tab => tab.id === activeTabId) || tabs[0];

  return (
    <>
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(({ id, title }) => (
            <li
              key={id}
              data-cy="Tab"
              className={classNames({ 'is-active': id === activeTab.id })}
            >
              <a
                href={`#${id}`}
                data-cy="TabLink"
                onClick={() => {
                  handleTabSelected(id, activeTab.id, onTabSelected);
                }}
              >
                {title}
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
