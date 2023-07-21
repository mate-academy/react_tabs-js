import cn from 'classnames';

export const Tabs = ({ tabs, selectedTabId, onTabSelected }) => {
  const tab = tabs.find(tabsItem => selectedTabId === tabsItem.id) || tabs[0];
  const eventHandler = (item) => {
    if (selectedTabId !== item.id) {
      onTabSelected(item);
    }
  };

  return (
    <>
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(item => (
            <li
              className={cn({ 'is-active': tab.id === item.id })}
              data-cy="Tab"
              key={item.id}
            >
              <a
                href={`#${item.id}`}
                data-cy="TabLink"
                onClick={() => eventHandler(item)}
              >
                {item.title}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {tab.content}
      </div>
    </>
  );
};
