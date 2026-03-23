export const Tabs = ({ tabs, activeTabId, onTabSelected }) => {
  const active = tabs.find(tab => tab.id === activeTabId) || tabs[0];

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(elem => {
            return (
              <li
                key={elem.id}
                className={elem.id === active.id && 'is-active'}
                data-cy="Tab"
              >
                <a
                  href={`#${elem.id}`}
                  data-cy="TabLink"
                  onClick={event => {
                    event.preventDefault();

                    if (elem.id !== active.id) {
                      onTabSelected(elem.id);
                    }
                  }}
                >
                  {elem.title}
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
