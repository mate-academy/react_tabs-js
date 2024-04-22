export const Tabs = ({
  tabs,
  onTabSelected,
  activeTabId,
  contentTabActive,
}) => {
  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              className={tab.id === activeTabId ? 'is-active' : ''}
              data-cy="Tab"
            >
              <a
                href={`#${tab.id}`}
                data-cy="TabLink"
                key={tab.id}
                onClick={() => onTabSelected(tab.id, tab.title, tab.content)}
              >
                {tab.title}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {contentTabActive}
      </div>
    </div>
  );
};
