import cn from 'classnames';

export const Tabs = ({ tabs, onTabSelected, activeTab }) => {
  const handleTabClick = id => {
    if (id !== activeTab.id) {
      onTabSelected(id);
    }
  };

  return (
    <div>
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(({ id, title }) => (
            <li
              key={id}
              className={cn({ 'is-active': id === activeTab.id })}
              data-cy="Tab"
            >
              <a
                id={id}
                href={`#${id}`}
                data-cy="TabLink"
                onClick={() => handleTabClick(id)}
              >
                {title}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {activeTab.content}
      </div>
    </div>
  );
};
