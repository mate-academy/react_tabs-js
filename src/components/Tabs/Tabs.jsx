export const Tabs = ({ tabs, selectedTab, onTabSelected }) => (
  <ul>
    {tabs.map(tab => (
      <li
        {...(tab === selectedTab && { className: 'is-active' })}
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
