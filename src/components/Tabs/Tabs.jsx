export const Tabs = ({
  tabs,
  selectedTab,
  onTabSelected,
  message,
  setMessage,
}) => {
  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              className={selectedTab === tab.title ? 'is-active' : undefined}
              data-cy="Tab"
              key={tab.id}
            >
              <a
                href={`#${tab.id}`}
                data-cy="TabLink"
                onClick={() => {
                  onTabSelected(tab.title);
                  setMessage(tab.content);
                }}
              >
                {tab.title}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {message}
      </div>
    </div>
  );
};
