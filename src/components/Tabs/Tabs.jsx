import cn from 'classnames';

export const Tabs = ({ tabs, selectedTab, onTabSelected }) => {
  return (
    <ul>
      {tabs.map(tab => {
        return (
          <li
            key={tab.id}
            className={cn({ 'is-active': selectedTab.id === tab.id })}
            data-cy="Tab"
          >
            <a
              onClick={() => {
                if (selectedTab.id !== tab.id) {
                  onTabSelected(tab);
                }
              }}
              href={`#${tab.id}`}
              data-cy="TabLink"
            >
              {tab.title}
            </a>
          </li>
        );
      })}
    </ul>
  );
};
