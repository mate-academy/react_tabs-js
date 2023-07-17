export const Tabs = ({ tabs, selectedTab, onTabSelected }) => {
  function onChangeTabHandler(event, index) {
    event.preventDefault();
    onTabSelected(tabs[index]);
  }

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {
            tabs.map((tab, index) => (
              <li
                className={selectedTab.id === tab.id ? 'is-active' : null}
                data-cy="Tab"
                key={tab.id}
              >
                <a
                  href={`#${tab.id}`}
                  data-cy="TabLink"
                  onClick={e => onChangeTabHandler(e, index)}
                >
                  {tab.title}
                </a>
              </li>
            ))
          }
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {selectedTab.content}
      </div>
    </div>
  );
};
