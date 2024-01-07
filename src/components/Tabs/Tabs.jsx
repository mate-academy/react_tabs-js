export const Tabs = ({ tabs, selectedTab, onTabSelected }) => (
  <>
    <div className="tabs is-boxed">
      <ul>
        {tabs.map(tab => (
          <li
            key={tab.id}
            className={tab.id === selectedTab.id ? 'is-active' : null}
            data-cy="Tab"
          >
            <a
              onClick={tab !== selectedTab ? () => onTabSelected(tab) : null}
              href={`#${tab.id}`}
              data-cy="TabLink"
            >
              {tab.title}
            </a>
          </li>
        ))}
      </ul>
    </div>

    <div data-cy="TabsComponent">
      <div className="block" data-cy="TabContent">
        {selectedTab.content}
      </div>
    </div>
  </>
);
