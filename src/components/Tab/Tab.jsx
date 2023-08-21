export const Tab = ({ tab, isSelected, onTabSelected }) => {
  const handleClick = (t) => {
    if (!isSelected(t)) {
      onTabSelected(tab.id);
    }
  };

  return (
    <li
      className={`${isSelected(tab) ? 'is-active' : ''}`}
      data-cy="Tab"
    >
      <a
        href={`#${tab.id}`}
        data-cy="TabLink"
        onClick={() => {
          handleClick(tab);
        }}
      >
        {tab.title}
      </a>
    </li>
  );
};
