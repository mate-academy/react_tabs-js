import cn from 'classnames';

const Tabs = ({ tabs, activeTabId, onTabSelected }) => {
  const isWrongTabId = tabs.map(tab => tab.id).includes(activeTabId);

  const checkIfWrongTab = tabId =>
    isWrongTabId ? tabId === activeTabId : tabId === tabs[0].id;

  const { content } = tabs.find(({ id }) => checkIfWrongTab(id)) ?? {};

  const handleActiveTabId = tabId => {
    if (tabId === activeTabId) {
      return;
    }

    onTabSelected(tabId);
  };

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(({ id, title }) => (
            <li
              key={id}
              className={cn({
                'is-active': checkIfWrongTab(id),
              })}
              data-cy="Tab"
            >
              <a
                onClick={() => handleActiveTabId(id)}
                href={`#${id}`}
                data-cy="TabLink"
              >
                {title}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {content}
      </div>
    </div>
  );
};

export { Tabs };
