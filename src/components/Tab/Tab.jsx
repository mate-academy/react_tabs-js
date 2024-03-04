import cn from 'classnames';

export const Tab = ({ tab, selectedTab, onTabSelected }) => {
  return (
    <li
      data-cy="Tab"
      className={cn({ 'is-active': selectedTab.title === tab.title })}
    >
      <a
        href={`#${tab.id}`}
        data-cy="TabLink"
        onClick={() => {
          if (selectedTab.title !== tab.title) {
            onTabSelected({ ...tab });
          }
        }}
      >
        {tab.title}
      </a>
    </li>
  );
};
