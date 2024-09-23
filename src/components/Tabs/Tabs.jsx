import cn from 'classnames';

export const Tabs = ({ tabs, activeTabId, onTabSelected }) => {
  return tabs.map(tab => {
    const { id, title } = tab;

    const isActive = activeTabId === id;

    const handleOnTabSelected = () => {
      if (!isActive) {
        onTabSelected(id);
      }
    };

    return (
      <li className={cn({ 'is-active': isActive })} data-cy="Tab">
        <a href={`#${id}`} data-cy="TabLink" onClick={handleOnTabSelected}>
          {title}
        </a>
      </li>
    );
  });
};
