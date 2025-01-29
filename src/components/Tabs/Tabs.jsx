import classNames from 'classnames';

export const Tabs = ({ tabs, activeTabId, onTabSelected }) => {
  const activeTab = tabs.find(tab => tab.id === activeTabId) || tabs[0];

  return (
    <div>
      <h1>Selected tab is {activeTab.title}</h1>
      <div>
        {' '}
        <ul>
          {' '}
          {tabs.map(tab => (
            <li
              key={tab.id}
              data-cy="Tab"
              className={classNames({ 'is-active': tab.id === activeTabId })}
            >
              <a
                data-cy="TabLink"
                href={`#${tab.id}`}
                onClick={() => tab.id !== activeTabId && onTabSelected(tab.id)}
              >
                {tab.title}
              </a>
            </li>
          ))}
        </ul>
        <div data-cy="TabContent">{activeTab.content}</div>
      </div>
    </div>
  );
};
