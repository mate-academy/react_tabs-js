import cn from 'classnames';
import { tabs } from '../../constants';

export const Tabs = ({ selectedTab, onTabSelected }) => {
  return (
    <ul data-cy="TabContent">
      {tabs.map(tab => (
        <li
          key={tab.id}
          className={cn({
            'is-active': selectedTab.id === tab.id,
          })}
          data-cy="Tab"
          >
          <a
            onClick={() => onTabSelected(tab)}
            href={`#${tab.id}`}
            data-cy="TabLink"
          >
            {tab.title}
          </a>
        </li>
      ))}
    </ul>
  );
};
