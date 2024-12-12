export const Tabs = ({ tabs, activeTab, activeTabId, onTabSelected }) => {
  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(element => (
            <li
              key={element.id}
              className={activeTab.id === element.id ? 'is-active' : ''}
              data-cy="Tab"
            >
              <a
                href={`#${element.id}`}
                data-cy="TabLink"
                onClick={() =>
                  element.id !== activeTabId && onTabSelected(element.id)
                }
              >
                {element.title}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {activeTab.content}
      </div>
    </div>
  );
};
