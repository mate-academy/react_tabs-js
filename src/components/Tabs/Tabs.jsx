import cn from 'classnames';

export const Tabs = ({ tabs, activeTabId, onTabSelected }) => {
  const activeTab = tabs.find(tab => tab.id === activeTabId) || tabs[0];

  const setByClick = tabId => {
    if (tabId !== activeTab.id) {
      onTabSelected(tabId);
    }
  };

  return (
    <div>
      <ul>
        {tabs.map(tab => (
          <li
            key={tab.id}
            className={cn({ 'is-active': tab.id === activeTab.id })}
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
        {activeTab.content}
      </div>
    </div>
  );
};
