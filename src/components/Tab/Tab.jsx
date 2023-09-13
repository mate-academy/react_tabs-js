import cn from 'classnames';

export const Tab = ({ tab, onTabSelected, isSelected }) => (
  <li
    className={cn({ 'is-active': isSelected })}
    data-cy="Tab"
  >
    <a
      href={`#${tab.id}`}
      data-cy="TabLink"
      onClick={() => {
        if (!isSelected) {
          onTabSelected(tab);
        }
      }}
    >
      {tab.title}
    </a>
  </li>
);
