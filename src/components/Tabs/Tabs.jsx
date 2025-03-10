export const Tabs = ({ tabs, activeTabId, onTabSelected }) => {
  const handleClick = () => {
    onTabSelected(tabs);
  };

  return (
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-noninteractive-element-interactions
    <li
      onClick={handleClick}
      className={activeTabId === tabs ? 'is-active' : ''}
      data-cy="Tab"
    >
      <a href="#tab-1" data-cy="TabLink">
        {tabs.title}
      </a>
    </li>
  );
};
