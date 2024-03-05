import cn from 'classnames';
import { tabs } from '../../constants';

export const Tabs = ({ selectedTab, onTabSelected }) => {
  return (
    <ul data-cy="TabContent">
      {tabs.map(tab => {
        return (
          <li
            className={cn({
              'is-active': selectedTab.title === tab.title,
            })}
            data-cy="Tab"
          >
            <a
              href={`#${tab.id}`}
              data-cy="TabLink"
              onClick={() => onTabSelected(tab)}
            >
              {tab.title}
            </a>
          </li>
        );
      })}
    </ul>
  );
};
