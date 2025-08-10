export const Tabs = ({ tabs, onTabSelected, activeTabId }) => {
  // Перевіряємо чи існує таб з таким id
  const isValidTabId = tabs.some(tab => tab.id === activeTabId);
  const usedTabId = isValidTabId ? activeTabId : tabs[0]?.id;
  const titleContent = tabs.find(tab => tab.id === activeTabId) || tabs[0];

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              className={tab.id === usedTabId ? 'is-active' : ''}
              data-cy="Tab"
              key={tab.id}
            >
              <a
                href={`#${tab.id}`}
                data-cy="TabLink"
                onClick={() => {
                  if (tab.id !== usedTabId) {
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
        {titleContent.content}
      </div>
    </div>
  );
};
