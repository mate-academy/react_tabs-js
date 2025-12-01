export const Tabs = ({ tabs, activeTabId, onTabSelected }) => {
  const activeTab = tabs.find(t => t.id === activeTabId) || tabs[0];

  return (
    <>
      <ul>
        {tabs.map(tab => (
          <li
            key={tab.id}
            data-cy="Tab"
            className={tab.id === activeTab.id ? 'is-active' : ''}
          >
            <a
              href={`#${tab.id}`}
              data-cy="TabLink"
              onClick={event => {
                event.preventDefault();
                if (tab.id !== activeTab.id) {
                  onTabSelected(tab.id);
                }
              }}
            >
              {tab.title}
            </a>
          </li>
        ))}
      </ul>

      <div data-cy="TabContent">
        {activeTab.content}
      </div>
    </>
  );
};
