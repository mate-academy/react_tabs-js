import cn from 'classnames/bind';

export const Tabs = ({ tabs, activeTab, onTabSelected }) => {
  const handleTabClick = tab => {
    if (tab !== activeTab.id) {
      onTabSelected(tab);
    }
  };

  return (
    <ul>
      {tabs.map(tab => (
        <li
          key={tab.id}
          data-cy="Tab"
          className={cn({
            'is-active': activeTab.id === tab.id,
          })}
        >
          <a
            href={`#${tab.id}`}
            data-cy="TabLink"
            onClick={() => handleTabClick(tab)}
          >
            {tab.title}
          </a>
        </li>
      ))}
    </ul>
  );
};
