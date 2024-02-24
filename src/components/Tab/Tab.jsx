import cn from 'classnames';
import 'bulma/css/bulma.css';

export const Tab = ({ tab, activeTab, onTabSelected }) => {
  return (
    <li
      className={cn({
        'is-active': tab.id === activeTab.id,
      })}
      data-cy="Tab"
    >
      <a
        href={`#${tab.id}`}
        data-cy="TabLink"
        onClick={() => {
          if (tab !== activeTab) {
            onTabSelected(tab);
          }
        }}
      >
        {tab.title}
      </a>
    </li>
  );
};
