export const Tabs = ({ tabs, setSelectedTabs, state, setState, action }) => (
  <div data-cy="TabsComponent">
    <div className="tabs is-boxed">
      <ul>
        {tabs.map(tab => (
          <li
            className={state === tab.id ? 'is-active' : ''}
            key={tab.id}
            data-cy="Tab"
          >
            <a
              onClick={() => action(tab.id)}
              href="#tab-1"
              data-cy="TabLink"
            >
              {tab.title}
            </a>
          </li>
        ))}

      </ul>
    </div>

    <div className="block" data-cy="TabContent">
      {tabs.map(tab => (
        `${state === tab.id ? tab.content : ''}`
      ))}
    </div>
  </div>
);
