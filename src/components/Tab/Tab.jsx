export const Tab = ({ tab, onTabSelected, activeTabId }) => {
  return (
    <li data-cy="Tab" className={tab.id === activeTabId.id ? 'is-active' : ''}>
      <a
        href={`#${tab.id}`}
        data-cy="TabLink"
        onClick={() => {
          return onTabSelected(tab);
        }}
      >
        {tab.title}
      </a>
    </li>
  );
};
