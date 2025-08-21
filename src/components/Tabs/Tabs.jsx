export const Tabs = ({ tabs, activeTabId, onTabSelected }) => {
  const validatedActiveTabId =
    tabs.find(tab => tab.id === activeTabId)?.id || tabs[0].id;
  const tabContent = tabs.find(tab => tab.id === validatedActiveTabId)?.content;

  function handleClick(tabId) {
    if (tabId === validatedActiveTabId) return;
    onTabSelected(tabId);
  }

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              key={tab.id}
              className={tab.id === validatedActiveTabId ? 'is-active' : ''}
              data-cy="Tab"
            >
              <a
                href={`#${tab.id}`}
                data-cy="TabLink"
                onClick={() => handleClick(tab.id)}
              >
                {tab.title}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {tabContent}
      </div>
    </div>
  );
};
