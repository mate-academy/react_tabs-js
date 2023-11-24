import cn from 'classnames';

export const Tabs = ({ tabs, selectedTabId, onTabSelected }) => {
  const selectedId = (
    tabs.find(tab => tab.id === selectedTabId)
      ? selectedTabId
      : tabs[0].id
  );
  const tabToSelect = tabs.find(tab => tab.id === selectedId);

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map((tab) => {
            const tabIsClicked = tab.id !== selectedId;

            return (
              <li
                className={cn({ 'is-active': tab.id === selectedId })}
                data-cy="Tab"
                key={tab.id}
              >
                <a
                  href={`#${tab.id}`}
                  data-cy="TabLink"
                  onClick={() => {
                    if (tabIsClicked) {
                      onTabSelected(tab);
                    }
                  }}
                >
                  {tab.title}
                </a>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {tabToSelect.content}
      </div>
    </div>
  );
};
