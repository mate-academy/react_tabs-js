export const Tabs = ({ tabs, selectedTab, onTabSelected }) => {
  return (
    <ul>
      {tabs.map(tab => (
        <li
          className={tab === selectedTab && 'is-active'}
          data-cy="Tab"
          key={tab.id}
        >
          <a
            href={`#${tab.id}`}
            data-cy="TabLink"
            onClick={() => selectedTab !== tab && onTabSelected(tab)}
          >
            {tab.title}
          </a>
        </li>
      ))}
    </ul>
  );
};
