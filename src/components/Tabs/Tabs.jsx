export const Tabs = ({ tabs, selectedTabId, setSelectedTabId }) => (
  <div>
    <div className="tabs is-boxed">
      <ul>
        {tabs.map(tab => (
          <li
            key={tab.id}
            className={selectedTabId === tab.id ? 'is-active' : ''}
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
      {tabs.find(tab => tab.id === selectedTabId).content}
    </div>
  </div>
);
