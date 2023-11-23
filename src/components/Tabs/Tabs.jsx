import cn from 'classnames';

export const Tabs = ({ tabs, selectedTabId, onTabSelected }) => {
  const handlerOnClick = (item) => {
    if (selectedTabId !== item.id) {
      onTabSelected(item);
    }
  };

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(item => (
            <li
              className={cn({ 'is-active': item.id === selectedTabId.id })}
              data-cy="Tab"
              key={item.id}
            >
              <a
                href={`#${item.id}`}
                data-cy="TabLink"
                onClick={() => handlerOnClick(item)}
              >
                {item.title}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {selectedTabId.content}
      </div>
    </div>
  );
};
