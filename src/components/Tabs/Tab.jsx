import cn from 'classnames';

export const Tab = ({ tab, activeTabId, onTabSelected }) => {
  const isActive = tab.id === activeTabId;

  const handleClick = event => {
    event.preventDefault();

    if (!isActive) {
      onTabSelected(tab.id);
    }
  };

  return (
    <li data-cy="Tab" className={cn({ 'is-active': tab.id === activeTabId })}>
      <a href={`#${tab.id}`} data-cy="TabLink" onClick={handleClick}>
        {tab.title}
      </a>
    </li>
  );
};
