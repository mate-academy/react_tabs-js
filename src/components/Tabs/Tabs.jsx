export const Tabs = ({
  tabs,
  selectedTabId,
  onTabSelected,
}) => (
  <div data-cy="TabsComponent">
    <div className="tabs is-boxed">
      <ul>
        {tabs.map(tab => (
          <li
            key={tab.id}
            className={tab.id === selectedTabId ? 'is-active' : ''}
            data-cy="Tab"
          >
            <a
              href={`#${tab.id}`}
              data-cy="TabLink"
              onClick={() => onTabSelected(tab.id)}
            >
              {tab.title}
            </a>
          </li>
        ))}
      </ul>
    </div>

    <div className="block" data-cy="tab-content">
      {selectedTabId
        ? tabs.find(tab => tab.id === selectedTabId).content
        : tabs[0].content}
    </div>
  </div>
);
