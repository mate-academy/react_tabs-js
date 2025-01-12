export const Tabs = ({ tabs, tabActive, tabSelected }) => {
  const valid = tabs.find(tab => tab.id === tabActive) || tabs[0];

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              key={tab.id}
              data-cy="Tab"
              className={valid.id === tab.id ? 'is-active' : null}
            >
              <a
                href={`#${tab.id}`}
                data-cy="TabLink"
                onClick={
                  tab.id !== valid.id
                    ? () => tabSelected(tab.id, tab.title)
                    : null
                }
              >
                {tab.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="block" data-cy="TabContent">
        {valid.content}
      </div>
    </div>
  );
};
