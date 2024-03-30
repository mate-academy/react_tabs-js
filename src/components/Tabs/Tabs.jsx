export const Tabs = ({ setTab, tabs, currentTab }) => {
  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map((tab, index) => (
            <li
              className={`${currentTab === tab.id ? 'is-active' : ''}`}
              data-cy="Tab"
            >
              <a
                href={tab.id}
                data-cy="TabLink"
                onClick={() => {
                  setTab(index);
                }}
              >
                {tab.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
