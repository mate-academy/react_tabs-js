import cn from 'classnames';
import { tabs } from '../../constants';

export const Tabs = ({ selectedTab, setTab }) => {
  return (
    <ul>
      {tabs.map(tab => {
        return (
          <li
            className={cn({
              'is-active': selectedTab.title === tab.title,
            })}
            data-cy="Tab"
          >
            <a href="#tab-1" data-cy="TabLink" onClick={() => setTab(tab)}>
              {tab.title}
            </a>
          </li>
        );
      })}
    </ul>
  );
};
