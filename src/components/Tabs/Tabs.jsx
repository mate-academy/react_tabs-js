export const Tabs = ({ tabs, activeTab, onTabSelected }) => {
  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map((tab, position) => (
            <li
              key={tab.id}
              className={tab.id === activeTab ? 'is-active' : ''}
              data-cy="Tab"
            >
              <a
                href={tab.id}
                data-cy="TabLink"
                onClick={event => onTabSelected(event, tab.id)}
              >
                {`Tab ${position + 1}`}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {tabs.find(tab => tab.id === activeTab)?.content}
      </div>
    </div>
  );
};
