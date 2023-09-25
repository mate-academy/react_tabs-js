export const Tabs = ({ tabs, selectedTabId, setSelectedTabId }) => (
  <div data-cy="TabsComponent">
    <div className="tabs is-boxed">
      <ul>
        {tabs.map(tab => (
          <li
            className={selectedTabId === tab.id ? 'is-active' : ''}
            key={tab.id}
            data-cy="Tab"
          >
            <a
              href={`#${tab.id}`}
              data-cy="TabLink"
              onClick={() => setSelectedTabId(tab.id)}
            >
              {tab.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
    <div className="block" data-cy="TabContent">
      {tabs.find(item => item.id === selectedTabId).content}
    </div>
  </div>
);
