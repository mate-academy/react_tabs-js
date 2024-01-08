export const Tab = ({ tab, selectedTab, onTabSelected }) => {
  const { title, id } = tab;
  const isCurrentTabSelected = selectedTab === tab;

  return (
    <li
      className={isCurrentTabSelected && 'is-active'}
      data-cy="Tab"
    >
      <a
        onClick={() => {
          if (!isCurrentTabSelected) {
            onTabSelected(tab);
          }
        }}
        href={`#${id}`}
        data-cy="TabLink"
      >
        {title}
      </a>
    </li>
  );
};
