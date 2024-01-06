import cn from 'classnames';

export const Tab = ({ tab, selectedTab, onTabSelected }) => (
  <li
    className={cn({
      'is-active': tab.id === selectedTab.id,
    })}
    data-cy="Tab"
  >
    <a
      href={`#${tab.id}`}
      data-cy="TabLink"
      onClick={() => {
        if (tab.id !== selectedTab.id) {
          onTabSelected(tab);
        }
      }}
    >
      {tab.title}
    </a>
  </li>
);
