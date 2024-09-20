import cn from 'classnames';

export const Tabs = ({ tabs, activeTabId, onTabSelected }) => {
  const active = tabs.find(tab => tab.id === activeTabId) || tabs[0];

  const handleSelected = id => {
    if (active.id !== id) {
      onTabSelected(id);
    }
  };

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => {
            const { id, title } = tab;

            return (
              <li
                data-cy="Tab"
                key={id}
                className={cn({ 'is-active': id === active.id })}
              >
                <a
                  href={`#${id}`}
                  data-cy="TabLink"
                  onClick={() => handleSelected(id)}
                >
                  {title}
                </a>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {active.content}
      </div>
    </div>
  );
};
