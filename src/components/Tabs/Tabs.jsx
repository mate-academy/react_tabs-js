import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';

export const Tabs = ({ tabs, selectedTab, onTabSelected }) => (
  <div data-cy="TabsComponent">
    <div className="tabs is-boxed">
      <ul>
        {tabs.map(tab => (
          <li
            key={tab.id}
            className={selectedTab === tab ? 'is-active' : ''}
            data-cy="Tab"
          >
            <a
              onClick={() => {
                if (selectedTab.id !== tab.id) {
                  onTabSelected(tab);
                }
              }}
              href={`#${tab.id}`}
              data-cy="TabLink"
            >
              {tab.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
    <div className="block" data-cy="TabContent">
      {selectedTab ? selectedTab.content : ''}
    </div>
  </div>
);
