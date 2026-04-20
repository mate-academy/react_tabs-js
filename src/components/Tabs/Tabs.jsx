export const Tabs = ({ tabs, activeTabId, onTabSelected }) => (
  <div data-cy="TabsComponent">
    <div className="tabs is-boxed">
      <ul>
        {tabs.map(li => (
          <li
            data-cy="Tab"
            key={li.id}
            className={activeTabId === li.id ? 'is-active' : ''}
          >
            <a
              href={`#${li.id}`}
              data-cy="TabLink"
              onClick={() => activeTabId !== li.id && onTabSelected(li.id)}
            >
              {li.title}
            </a>
          </li>
        ))}
      </ul>
    </div>

    <div className="block" data-cy="TabContent">
      {tabs.find(tab => tab.id === activeTabId).content}
    </div>
  </div>
);
