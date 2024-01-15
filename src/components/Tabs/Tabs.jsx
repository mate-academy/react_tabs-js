export const Tabs = ({ tabs, selectedTabId, onTabSelected }) => {
  const tabSelected = tabs.find(tab => tab.id === selectedTabId);

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(({ id, title }) => (
            <li
              key={id}
              data-cy="Tab"
              className={selectedTabId === id ? 'is-active' : ''}
            >
              <a
                href={`#${id}`}
                data-cy="TabLink"
                onClick={() => onTabSelected(id)}
              >
                {title}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="block" data-cy="tab-content">
        {tabSelected ? tabSelected.content : tabs[0].content}
      </div>
    </div>
  );
};
