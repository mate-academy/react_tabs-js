export function Tabs({ tabs, handleTabId, currentTab }) {
  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              className={currentTab.id === tab.id ? 'is-active' : ''}
              key={tab.id}
              data-cy="Tab"
            >
              <a
                onClick={id => {
                  if (id !== currentTab.id) {
                    handleTabId(tab.id);
                  }
                }}
                href={`#${tab.id}`}
                data-cy="TabLink"
              >
                {tab.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="block" data-cy="TabContent">
        {currentTab.content}
      </div>
    </div>
  );
}
