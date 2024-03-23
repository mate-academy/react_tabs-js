import cn from 'classnames';

export const Tabs = ({ tabs, activeTab, setActiveTab }) => {
  const handleClick = tab => {
    if (tab.id !== activeTab.id) {
      setActiveTab(tab);
    }
  };

  return (
    <ul>
      {tabs.map(tab => {
        return (
          <li
            key={tab.id}
            data-cy="Tab"
            className={cn({ 'is-active': activeTab.id === tab.id })}
          >
            <a
              data-cy="TabLink"
              href={`#${tab.id}`}
              onClick={() => {
                handleClick(tab);
              }}
            >
              {tab.title}
            </a>
          </li>
        );
      })}
    </ul>
  );
};
