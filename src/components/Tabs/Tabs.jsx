export const Tabs = ({ tabs, selectedTab, setSelectedTab }) => (
  <div className="tabs is-boxed">
    <ul>
      {tabs.map(tab => (
        <li
          className={selectedTab.id === tab.id && 'is-active'}
          data-cy="Tab"
        >
          <a
            onClick={() => (setSelectedTab(tab))}
            href={`#${tab.id}`}
            data-cy="TabLink"
          >
            {tab.title}
          </a>
        </li>
      ))}
    </ul>
  </div>
);
