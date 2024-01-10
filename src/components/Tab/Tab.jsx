export const Tab = ({ tab, isSelected, onTabSelected }) => {
  const handleClick = () => {
    if (!isSelected) {
      onTabSelected(tab.id);
    }
  };

  return (
    <li
      className={`${isSelected ? 'is-active' : ''}`}
      data-cy="Tab"
    >
      <a
        href={`#${tab.id}`}
        data-cy="TabLink"
        onClick={handleClick}
      >
        {tab.title}
      </a>
    </li>
  );
};
