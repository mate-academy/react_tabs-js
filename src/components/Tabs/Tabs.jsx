import cn from 'classnames';

export const Tabs = ({ tabs, activeTabId, onTabSelected }) => {
  let checkedId = activeTabId;

  if (!tabs.map(tab => tab.id).includes(checkedId)) {
    checkedId = tabs[0].id;
  }

  return (
    <>
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              className={cn({ 'is-active': checkedId === tab.id })}
              data-cy="Tab"
              key={tab.id}
            >
              <a
                href={`#${tab.id}`}
                data-cy="TabLink"
                onClick={() => {
                  if (checkedId !== tab.id) {
                    onTabSelected(tab.id);
                  }
                }}
              >
                {tab.title}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {tabs.find(tab => tab.id === checkedId).content}
      </div>
    </>
  );
};
