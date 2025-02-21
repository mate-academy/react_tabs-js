export const Tabs = ({ tabs, activeTabId, onTabSelected }) => {
  const validId = tabs.some(tab => activeTabId === tab.id)
    ? activeTabId
    : tabs[0].id;
  /* eslint-disable */

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              key={tab.id}
              className={validId === tab.id ? 'is-active' : ''}
              onClick={() => {validId !== tab.id ? onTabSelected(tab.id) : ''}}
              data-cy="Tab">
              <a href={`#${tab.id}`} data-cy="TabLink">
                {tab.title}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {tabs.find(tab => tab.id === validId).content}
      </div>
    </div>
  );
};
