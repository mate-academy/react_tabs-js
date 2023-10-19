import cn from 'classnames';

export const Tab = ({ tab, isActive, handleTabClick }) => (
  <li className={cn({ 'is-active': isActive })} data-cy="Tab">
    <a
      href={`#${tab.id}`}
      data-cy="TabLink"
      onClick={handleTabClick}
    >
      {tab.title}
    </a>
  </li>
);
