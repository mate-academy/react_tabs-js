import cn from 'classnames';

export const Tabs = ({ tabs, selectedTab, onTabSelected }) => {
  const changeSelectedTab = (tab) => {
    if (tab.id !== selectedTab.id) {
      onTabSelected(tab);
    }
  };

  return (
    <ul>
      {tabs.map(tab => (
        <li
          key={tab.id}
          className={cn({ 'is-active': selectedTab.id === tab.id })}
          data-cy="Tab"
        >
          <a
            href={`#${tab.id}`}
            data-cy="TabLink"
            onClick={() => {
              changeSelectedTab(tab);
            }}
          >
            {tab.title}
          </a>
        </li>
      ))}
    </ul>
  );
};
