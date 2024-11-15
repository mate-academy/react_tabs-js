import cl from 'classnames';

export const Tabs = ({ tabs, activeTabId, onTabSelected }) => {
  let currentId = activeTabId;

  if (!tabs.find(tab => tab.id === activeTabId)) {
    currentId = tabs[0].id;
  }

  function isSameId(id) {
    if (activeTabId !== id) {
      onTabSelected(id);
    }
  }

  const getContent = id => tabs.find(tab => tab.id === id).content;

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              key={tab.id}
              data-cy="Tab"
              className={cl({ 'is-active': currentId === tab.id })}
            >
              <a
                onClick={() => isSameId(tab.id)}
                href={`#${tab.id}`}
                data-cy="TabLink"
              >
                {tab.title}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {getContent(currentId)}
      </div>
    </div>
  );
};
