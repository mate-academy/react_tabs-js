import cn from 'classnames';

export const Tabs = ({ tabs, activeTabId, onTabSelected }) => {
  let tabBlock = null;
  const active = tabs.find(t => t.id === activeTabId) || tabs[0];

  tabs.forEach(tab => {
    if (tab.id === active.id) {
      tabBlock = (
        <div className="block" data-cy="TabContent">
          {tab.content}
        </div>
      );
    }
  });

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              className={cn({ 'is-active': tab.id === active.id })}
              data-cy="Tab"
              key={tab.id}
            >
              <a
                href={`#${tab.id}`}
                data-cy="TabLink"
                onClick={event => {
                  event.preventDefault();

                  if (tab.id !== active.id) {
                    onTabSelected(tab.id);
                  }
                }}
              >
                {tab.title}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {tabBlock}
    </div>
  );
};
