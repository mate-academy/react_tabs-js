export const Tabs = ({ tabs, activeTabId, onTabSelected }) => {
  const safeActiveTab = tabs.find(tab => tab.id === activeTabId) || tabs[0];

  const handleTab = (event, tab, isActive) => {
    event.preventDefault();

    if (!isActive) {
      onTabSelected(tab.id);
    }
  };

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => {
            const isActive = tab.id === safeActiveTab.id;

            return (
              <li
                key={tab.id}
                data-cy="Tab"
                className={isActive ? 'is-active' : ''}
              >
                <a
                  href={`#${tab.id}`}
                  data-cy="TabLink"
                  onClick={event => handleTab(event, tab, isActive)}
                >
                  {tab.title}
                </a>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {safeActiveTab.content}
      </div>
    </div>
  );
};
