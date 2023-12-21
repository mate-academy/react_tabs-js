import cn from 'classnames';

export const Tabs = ({ tabs, selectedTabId, onTabSelected }) => {
  const isCorrectTabId = tabs.find(tab => tab.id === selectedTabId)
    ? selectedTabId
    : tabs[0].id;

  const handleTabOnClick = (tab) => {
    if (tab.id !== isCorrectTabId) {
      onTabSelected(tab);
    }
  };

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              className={cn({ 'is-active': tab.id === isCorrectTabId })}
              data-cy="Tab"
              key={tab.id}
            >
              <a
                href={`#${tab.id}`}
                data-cy="TabLink"
                onClick={() => handleTabOnClick(tab)}
              >
                {tab.title}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {isCorrectTabId.content}
      </div>
    </div>
  );
};
