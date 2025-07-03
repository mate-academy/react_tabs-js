import { getActiveTab } from '../../helperMethods';

export const Tabs = ({ tabs, activeTabId, onTabSelected }) => {
  const activeTab = getActiveTab(tabs, activeTabId);

  return (
    <>
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(t => {
            const selected = activeTab.id === t.id;

            return (
              <li
                key={t.id}
                className={selected ? 'is-active' : ''}
                data-cy="Tab"
              >
                <a
                  href={`#${t.id}`}
                  data-cy="TabLink"
                  onClick={e => {
                    e.preventDefault();
                    if (!selected) {
                      onTabSelected(t.id);
                    }
                  }}
                >
                  {t.title}
                </a>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {activeTab.content}
      </div>
    </>
  );
};
