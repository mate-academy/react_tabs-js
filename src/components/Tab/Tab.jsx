import cn from 'classnames';
import { checkIfTabIsSelected } from '../../functions';

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
          checkIfTabIsSelected(tab, selectedTab, onTabSelected);
        }}
      >
        {tab.title}
      </a>
    </li>
  );
};
