export const Tabs = ({ tabs, selectedTabId, onTabSelected }) => (
  <ul>
    {tabs.map(tab => (
      <li
        key={tab.id}
        data-cy="Tab"
        className={selectedTabId === tab.id && 'is-active'}
      >
        <a
          onClick={() => onTabSelected(tab.id)}
          href={`#${tab.id}`}
          data-cy="TabLink"
        >
          {tab.title}
        </a>
      </li>
    ))}
  </ul>
);
