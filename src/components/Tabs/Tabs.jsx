import cn from 'classnames';

export const Tabs = ({ tabs, activeTabId, onTabSelected }) => {
  let validId = activeTabId;
  const arrayOfId = [];

  tabs.forEach(tab => {
    arrayOfId.push(tab.id);
  });

  if (!arrayOfId.includes(validId)) {
    validId = tabs[0].id;
  }

  const listOfTabs = tabs.map(tab => (
    <li
      data-cy="Tab"
      className={cn({ 'is-active': tab.id === validId })}
      key={tab.id}
    >
      <a
        href={`#${tab.id}`}
        data-cy="TabLink"
        onClick={() => {
          if (validId !== tab.id) {
            onTabSelected(tab.id);
          }
        }}
      >
        {tab.title}
      </a>
    </li>
  ));

  const activeTabContent = activeId => {
    return tabs.map(tab => {
      return tab.id === validId ? tab.content : '';
    });
  };

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>{listOfTabs}</ul>
      </div>

      <div className="block" data-cy="TabContent">
        {activeTabContent(validId)}
      </div>
    </div>
  );
};
