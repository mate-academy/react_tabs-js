export const Tabs = ({ tabs, selectedTabId, onTabSelected }) => (
  <div data-cy="TabsComponent">
    <div className="tabs is-boxed">
      <ul>
        {tabs.map(tab => (
          <li
            key={tab.id}
            className={(tab.id === selectedTabId 
            || (!tabs.some(t => t.id === selectedTabId) && tab === tabs[0]))
            ? 'is-active' 
            : ''}
            data-cy="Tab"
          >
            <a
              href={`#${tab.id}`}
              data-cy="TabLink"
              onClick={(e) => {
                e.preventDefault();
                if (tab.id !== selectedTabId) {
                  onTabSelected(tab);
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
      {(tabs.find(tab => tab.id === selectedTabId) || tabs[0]).content}
    </div>
  </div>
);
