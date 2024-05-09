import cn from 'classnames';

export const Tabs = ({ tabs, activeTabId, onTabSelected }) => {
  const activeTab = tabs.find(tab => tab.id === activeTabId);
  const defaultTab = tabs[0];

  const setByClick = tabId => {
    if (tabId !== activeTabId) {
      onTabSelected(tabId);
    }
  };

  return (
    <div>
      <ul>
        {tabs.map(tab => (
          <li
            key={tab.id}
            className={cn({ 'is-active': tab.id === activeTabId })}
            data-cy="Tab"
            onClick={() => setByClick(tab.id)}
            aria-hidden="true"
          >
            <a href={`#${tab.id}`} data-cy="TabLink">
              {tab.title}
            </a>
          </li>
        ))}
      </ul>
      <div className="block" data-cy="TabContent">
        {(activeTab || defaultTab)?.content}
      </div>
    </div>
  );
};
