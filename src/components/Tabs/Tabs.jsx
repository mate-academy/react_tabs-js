import cn from 'classnames';

export const Tabs = ({ tabs, selectedTab, onTabSelected }) => {
  const currentTab = !selectedTab ? tabs[0] : selectedTab;

  const onClickTab = obj => {
    if (selectedTab.id !== obj.id) {
      onTabSelected(obj);
    }
  };

  return (
    <ul>
      {tabs.map(tab => {
        return (
          <li
            key={tab.id}
            className={cn({ 'is-active': currentTab.id === tab.id })}
            data-cy="Tab"
          >
            <a
              href={`#${tab.id}`}
              data-cy="TabLink"
              onClick={() => onClickTab(tab)}
            >
              {tab.title}
            </a>
          </li>
        );
      })}
    </ul>
  );
};
