export const Tabs = ({
  tabs, setValue, value, activeTab,
}) => (
  <div data-cy="TabsComponent">
    <div className="tabs is-boxed">
      <ul>
        {tabs.map(tab => (
          <li
            data-cy="Tab"
            key={tab.id}
            className={value === tab.id ? 'is-active' : ''}
          >
            <a
              href={`#${tab.id}`}
              data-cy="TabLink"
              onClick={(event) => {
                event.preventDefault();
                setValue(tab.id);
              }}
            >
              {tab.title}
            </a>
          </li>
        ))}
      </ul>
    </div>

    <div className="block" data-cy="TabContent">
      {activeTab.content}
    </div>
  </div>
);
