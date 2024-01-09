export const Tab = ({ tab, selectedTab, onTabSelected }) => {
  const { title, id } = tab;
  const isCurrentTabSelected = selectedTab === tab;
  const setNewTabSelected = () => !isCurrentTabSelected && onTabSelected(tab);

  return (
    <li
      className={isCurrentTabSelected && 'is-active'}
      data-cy="Tab"
    >
      <a
        onClick={setNewTabSelected}
        href={`#${id}`}
        data-cy="TabLink"
      >
        {title}
      </a>
    </li>
  );
};
