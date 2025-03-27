import cn from 'classnames';
import { tabs } from '../../App';

export const TabElement = ({ activeTabId, onTabSelected }) => {
  return (
    <ul>
      {tabs.map(tab => (
        <li
          className={cn({
            'is-active': tab === activeTabId,
          })}
          data-cy="Tab"
          key={tab.id}
        >
          <a
            href={`#${activeTabId.id}`}
            data-cy="TabLink"
            onClick={() => onTabSelected(tab)}
          >
            {tab.title}
          </a>
        </li>
      ))}
    </ul>
  );
};
