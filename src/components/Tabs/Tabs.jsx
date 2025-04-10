export const Tabs = ({ tab, onTabSelected, activeTabId }) => {
  return (
    <li className={activeTabId === tab.id ? 'is-active' : ''} data-cy="Tab">
      <a
        href={`#${tab.id}`}
        data-cy="TabLink"
        onClick={() => onTabSelected(tab.id)}
      >
        {tab.title}
      </a>
    </li>
  );
};
