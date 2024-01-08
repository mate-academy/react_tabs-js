import cn from 'classnames';

export const Tab = ({ tab, isSelected, onTabSelected }) => (
  <li
    className={cn({ 'is-active': isSelected })}
    data-cy="Tab"
  >
    <a
      href={`#${tab.id}`}
      data-cy="TabLink"
      onClick={(e) => {
        e.preventDefault();
        if (!isSelected) {
          onTabSelected(tab);
        }
      }}
    >
      {`${tab.title}`}
    </a>
  </li>
);
