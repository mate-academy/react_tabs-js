
export const Tabs = ({ tabs, selectedTabId, onTabSelected }) => (
  <div className="tabs is-boxed">
    <ul>
      {tabs.map(tab => (
        <li
          key={tab.id}
          className={selectedTabId === tab.id ? 'is-active' : ''}
          data-cy="Tab"
        >
          <a
            href={`#${tab.id}`}
            onClick={() => onTabSelected(tab)}
            data-cy="TabLink"
          >
            {tab.title}
          </a>
        </li>
      ))}
    </ul>
  </div>
);
