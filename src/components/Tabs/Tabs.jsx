export const Tabs = ({ tabs, selectedTabId, onTabSelected }) => (
  <div className="tabs is-boxed">
    <ul>
      {tabs.map(tab => (
        <li
          key={tab.id}
          className={selectedTabId.id === tab.id ? 'is-active' : ''}
          data-cy="Tab"
        >
          <a
            data-cy="TabLink"
            href={`#${tab.id}`}
            onClick={(e) => {
              e.preventDefault();
              if (selectedTabId !== tab.id) {
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
);
