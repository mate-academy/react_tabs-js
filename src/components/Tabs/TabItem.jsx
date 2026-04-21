export const Li = ({ tab, activeTabId, onTabSelected }) => {
  const isActive = activeTabId === tab.id;
  const classValue = isActive ? 'is-active' : '';

  const handleLinkClick = event => {
    event.preventDefault();

    if (!isActive) {
      onTabSelected(tab.id);
    }
  };

  return (
    <li
      className={classValue}
      data-cy="Tab"
    >
      <a
        href={`#${tab.id}`}
        data-cy="TabLink"
        onClick={handleLinkClick}
      >
        {tab.title}
      </a>
    </li>
  );
};
