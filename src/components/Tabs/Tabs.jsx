export const Tabs = ({
  tabs,
  activeTabId,
  onTabSelected,
}) => {
  const activeTab =
    tabs.find(tab => tab.id === activeTabId) || tabs[0];

  return (
    <div>
      <ul className="tabs">
        {tabs.map(tab => {
          const isActive = tab.id === activeTab.id;

          return (
            <li
              key={tab.id}
              data-cy="Tab"
              className={isActive ? 'is-active' : ''}
            >
              <a
                href={`#${tab.id}`}
                data-cy="TabLink"
                onClick={event => {
                  event.preventDefault();

                  if (!isActive) {
                    onTabSelected(tab.id);
                  }
                }}
              >
                {tab.title}
              </a>
            </li>
          );
        })}
      </ul>

      <div data-cy="TabContent">
        {activeTab.content}
      </div>
    </div>
  );
};
