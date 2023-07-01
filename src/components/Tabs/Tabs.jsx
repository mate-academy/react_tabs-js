import cn from 'classnames';

export const Tabs = ({
  tabs,
  selectedTabId,
  onTabSelected,
  setCurrentTab,
}) => {
  const onTabHandler = (tab) => {
    if (tab.id !== selectedTabId) {
      onTabSelected(tab);
      setCurrentTab(tab);
    }
  };

  return (
    <ul>
      {tabs.map(tab => (
        <li
          className={cn({ 'is-active': tab.id === selectedTabId })}
          data-cy="Tab"
          key={tab.id}
        >
          <a
            href={`#${tab.id}`}
            data-cy="TabLink"
            onClick={() => onTabHandler(tab)}
          >
            {tab.title}
          </a>
        </li>
      ))}
    </ul>
  );
};
