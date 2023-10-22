import cn from 'classnames';

export const Tabs = ({
  tabs,
  selectedTabId,
  setSelectedTabId,
}) => {
  const tabFind = tabs.find(tab => selectedTabId === tab.id) || tabs[0];

  return (
    <div>
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              key={tab.id}
              className={cn(selectedTabId === tab.id ? 'is-active' : '')}
              data-cy="Tab"
            >
              <a
                href={`#${tab.id}`}
                data-cy="TabLink"
                onClick={() => setSelectedTabId(tab.id)}
              >
                {tab.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="block" data-cy="TabContent">
        {tabFind.content}
      </div>
    </div>
  );
};
