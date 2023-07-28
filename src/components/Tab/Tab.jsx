export function Tab({ onTabSelected, selectedTabId, tabs, tab }) {
  const { title } = tab;

  return (
    <li
      className={selectedTabId === tab.id ? 'is-active' : ''}
      data-cy="Tab"
    >
      <a
        href={`#${tab.id}`}
        data-cy="TabLink"
        onClick={() => onTabSelected(tab, selectedTabId, tabs)}
      >
        {title}
      </a>
    </li>
  );
}
