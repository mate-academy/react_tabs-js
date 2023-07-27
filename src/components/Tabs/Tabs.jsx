export const Tabs = ({ tab, selectedTabId, selectedTab }) => (
  <li
    className={tab.id === selectedTab && 'is-active'}
    data-cy="Tab"
  >
    <a
      onClick={() => selectedTabId(tab.id)}
      href={`#${tab.id}`}
      data-cy="TabLink"
    >
      {tab.title}
    </a>
  </li>
);
