export const Tabs = ({ tabs, onTabSelected, activeTabId }) => (
  <div data-cy="TabsComponent">
    <div className="tabs is-boxed">
      <ul>
        {tabs.map(tab => (
          <li
            className={tab.id === activeTabId ? 'is-active' : ''}
            key={tab.id}
            data-cy="Tab"
          >
            <a
              href={`#${tab.id}`}
              data-cy="TabLink"
              onClick={() => onTabSelected(tab.id)}
            >
              {tab.title}
            </a>
          </li>
        ))}
      </ul>
    </div>

    <div className="block" data-cy="TabContent">
      {tabs.find(tab => tab.id === activeTabId).content || null}
    </div>
  </div>
);
