export const Tabs = ({ tabs, selectedTab, onTabClick }) => (
  <div data-cy="TabsComponent">
    <div className="tabs is-boxed">
      <ul>
        {tabs.map(tab => (
          <li
            key={tab.id}
            className={tab.id === selectedTab.id ? 'is-active'
              : ''}
            data-cy="Tab"
          >
            <a
              href={`#${tab.id}`}
              onClick={() => onTabClick(tab)}
              data-cy="TabLink"
            >
              {tab.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  </div>
);
