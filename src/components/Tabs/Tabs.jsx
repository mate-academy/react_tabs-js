import cn from 'classnames';

export const Tabs = ({ tabs, selectedTabId, onTabSelected }) => {
  const selected = tabs.find(tab => tab.id === selectedTabId) || tabs[0];
  const isSelected = tab => tab.id === selected.id;
  const onClickSelect = (tab) => {
    if (!isSelected(tab)) {
      onTabSelected(tab);
    }
  };

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              className={(cn({ 'is-active': isSelected(tab) }))}
              data-cy="Tab"
              key={tab.id}
            >
              <a
                href={`#${tab.id}`}
                data-cy="TabLink"
                onClick={() => onClickSelect(tab)}
              >
                {tab.title}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {selected.content}
      </div>
    </div>
  );
};
