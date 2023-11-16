export const Tabs = ({ tabs, onTabSelected, currentTabId }) => (
  <ul>
    {tabs.map(tab => (
      <li className={`${tab.id === currentTabId ? 'is-active' : ''}`} data-cy="Tab" key={tab.id}>
        <a
          href={`#${tab.id}`}
          data-cy="TabLink"
          onClick={() => {
            if (tab.id !== currentTabId) {
              onTabSelected(tab);
            }
          }}
        >
          {tab.title}
        </a>
      </li>
    ))}
  </ul>
);
