import cn from 'classnames';

export const Tab = ({ tab, activeTab, onTabChange }) => {
  const handelClick = () => {
    onTabChange(tab);
  };

  return (
    <li className={cn({ 'is-active': activeTab.id === tab.id })} data-cy="Tab">
      <a
        href={`#${tab.id}`}
        data-cy="TabLink"
        onClick={activeTab.id !== tab.id ? handelClick : null}

      >
        {tab.title}
      </a>
    </li>
  );
};
