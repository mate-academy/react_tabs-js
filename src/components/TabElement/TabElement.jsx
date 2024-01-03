import cn from 'classnames';

export const TabElement = ({
  tabItem,
  selectedTab,
  onSelectedTab,
}) => (
  <li
    data-cy="Tab"
    className={
      cn(
        { 'is-active': tabItem.id === selectedTab.id },
      )
    }
  >
    <a
      href={`#${tabItem.id}`}
      data-cy="TabLink"
      onClick={() => {
        if (tabItem.id !== selectedTab.id) {
          onSelectedTab(tabItem);
        }
      }}
    >
      {tabItem.title}
    </a>
  </li>
);
