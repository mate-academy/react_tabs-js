import cn from 'classnames';

export const Tabs = ({ tabs, selectedTabId, onTabSelected }) => {
  const validSelectedTabId = tabs.some(tab => tab.id === selectedTabId)
    ? selectedTabId
    : tabs[0].id;

  const tabContent = tabs.find(tab => tab.id === validSelectedTabId).content;

  const onClickHandler = (tab) => {
    if (tab.id !== validSelectedTabId) {
      onTabSelected(tab);
    }
  };

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          { tabs.map(tab => (
            <li
              className={cn({ 'is-active': validSelectedTabId === tab.id })}
              data-cy="Tab"
              key={tab.id}
            >
              <a
                href={`#${tab.id}`}
                data-cy="TabLink"
                onClick={() => onClickHandler(tab)}
              >
                {tab.title}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {tabContent}
      </div>
    </div>
  );
};
