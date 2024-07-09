import '@fortawesome/fontawesome-free/css/all.css';

export const Tabs = ({ tabs, activeTabId, onTabSelected }) => {
  const selectedTab = tabs.find(tab => tab.id === activeTabId) || tabs[0];

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(element => (
            <li
              className={element.id === selectedTab.id ? 'is-active' : ''}
              data-cy="Tab"
              key={element.id}
            >
              <a
                href={`#${element.id}`}
                data-cy="TabLink"
                id={element.id}
                onClick={() => {
                  if (element.id !== activeTabId) {
                    onTabSelected(element.id);
                  }
                }}
              >
                {element.title}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {selectedTab.content}
      </div>
    </div>
  );
};
