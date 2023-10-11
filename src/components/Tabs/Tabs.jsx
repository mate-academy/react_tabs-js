export const Tabs = ({ tabs, selectedTabId, onTabSelected }) => (
  <div data-cy="TabsComponent">
    <div className="tabs is-boxed">
      <ul>
        {tabs.map(tab => (
          // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-noninteractive-element-interactions
          <li
            key={tab.id}
            className={selectedTabId === tab.id ? 'is-active' : ''}
            data-cy="Tab"
            onClick={() => selectedTabId !== tab.id && onTabSelected(tab)}
          >
            <a href={`#${tab.id}`} data-cy="TabLink">
              {tab.title}
            </a>
          </li>
        ))}
      </ul>
    </div>

    <div className="block" data-cy="TabContent">
      {`Some text ${selectedTabId.split('-')[1]}`}
    </div>
  </div>
);
