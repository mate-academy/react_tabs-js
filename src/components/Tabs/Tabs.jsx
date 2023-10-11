export const Tabs = ({ tabs, selectedId, setSelectedId }) => (
  <div data-cy="TabsComponent">
    <div className="tabs is-boxed">
      <ul>

        {tabs.map(tab => (
          <li className="is-active" data-cy="Tab" key={tab.id}>
            <a
              href={`#${tab.id}`}
              data-cy="TabLink"
              onClick={() => setSelectedId(tab.id)}
            >
              {tab.title}
            </a>
          </li>
        ))}
      </ul>
    </div>

    <div className="block" data-cy="TabContent">
      {tabs.find(tab => tab.id === selectedId).content}
    </div>
  </div>
);
