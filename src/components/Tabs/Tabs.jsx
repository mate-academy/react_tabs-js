import cn from 'classnames';

export const Tabs = ({ tabs, activeTab, onSelected }) => {
  const test = tab => {
    if (activeTab.id !== tab.id && tabs.find(({ id }) => id === activeTab.id)) {
      onSelected(tab);
    } else {
      onSelected(tabs[0]);
    }
  };

  return (
    <div className="section">
      <h1 className="title">Selected tab is {activeTab.title}</h1>

      <div data-cy="TabsComponent">
        <div className="tabs is-boxed">
          <ul>
            {tabs.map(tab => {
              return (
                <li
                  className={cn({ 'is-active': activeTab.id === tab.id })}
                  data-cy="Tab"
                  key={tab.id}
                >
                  <a
                    href={`#${tab.id}`}
                    data-cy="TabLink"
                    onClick={() => test(tab)}
                  >
                    {tab.title}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="block" data-cy="TabContent">
          {activeTab.content}
        </div>
      </div>
    </div>
  );
};
